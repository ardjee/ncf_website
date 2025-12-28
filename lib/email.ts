import { Resend } from 'resend'
import { ContactFormData } from './validation'

// Initialize Resend client with API key from environment
const getResendClient = () => {
  const apiKey = process.env.EMAIL_SERVICE_API_KEY
  if (!apiKey) {
    throw new Error('EMAIL_SERVICE_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

// Sanitize string to prevent XSS
function sanitizeString(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Format form data into HTML email body
function formatEmailBody(data: ContactFormData): string {
  const sanitizedName = sanitizeString(data.name)
  const sanitizedEmail = sanitizeString(data.email)
  const sanitizedPhone = data.phone ? sanitizeString(data.phone) : undefined
  const sanitizedMessage = sanitizeString(data.message)

  const inquiryTypeLabels: Record<ContactFormData['inquiryType'], string> = {
    general: 'General Contact',
    partnership: 'Partnership Inquiry',
    buyer: 'Buyer Inquiry',
  }

  return `
    <h2>New ${inquiryTypeLabels[data.inquiryType]} Form Submission</h2>
    <p><strong>Name:</strong> ${sanitizedName}</p>
    <p><strong>Email:</strong> ${sanitizedEmail}</p>
    ${sanitizedPhone ? `<p><strong>Phone:</strong> ${sanitizedPhone}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
  `.trim()
}

// Check if error is transient (retryable)
function isTransientError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false

  // Resend API errors with status codes
  const status = (error as { statusCode?: number }).statusCode
  if (status) {
    // Retry on 429 (rate limit), 500-599 (server errors)
    return status === 429 || (status >= 500 && status < 600)
  }

  // Network errors are typically retryable
  const message = String(error)
  return (
    message.includes('ECONNRESET') ||
    message.includes('ETIMEDOUT') ||
    message.includes('ENOTFOUND') ||
    message.includes('network')
  )
}

// Retry configuration
const RETRY_CONFIG = {
  maxRetries: 3,
  initialDelay: 1000, // 1 second
  maxDelay: 5000, // 5 seconds
  backoffMultiplier: 2,
}

// Calculate delay for retry with exponential backoff
function calculateRetryDelay(attempt: number): number {
  const delay = Math.min(
    RETRY_CONFIG.initialDelay *
      Math.pow(RETRY_CONFIG.backoffMultiplier, attempt),
    RETRY_CONFIG.maxDelay
  )
  return delay
}

// Sleep utility for retry delays
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Email service interface
export interface SendEmailOptions {
  to: string
  formData: ContactFormData
  from?: string
}

export interface SendEmailResult {
  success: boolean
  error?: string
}

/**
 * Send email using Resend service with retry logic for transient failures
 * @param options Email sending options
 * @returns Result indicating success or failure
 */
export async function sendEmail(
  options: SendEmailOptions
): Promise<SendEmailResult> {
  const { to, formData, from } = options

  // Validate recipient email
  if (!to) {
    const error = 'Recipient email address is required'
    console.error('Email service error:', error)
    return { success: false, error }
  }

  // Get recipient email from environment if not provided
  const recipientEmail = process.env.EMAIL_TO_ADDRESS || to

  // Get from address (default to Resend onboarding domain)
  const fromAddress = from || process.env.EMAIL_FROM_ADDRESS || 'NCF Website <onboarding@resend.dev>'

  // Initialize Resend client
  let resend: Resend
  try {
    resend = getResendClient()
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to initialize email service'
    console.error('Email service initialization error:', errorMessage)
    return { success: false, error: errorMessage }
  }

  // Email subject
  const inquiryTypeLabels: Record<ContactFormData['inquiryType'], string> = {
    general: 'General Contact Form Submission',
    partnership: 'Partnership Inquiry Form Submission',
    buyer: 'Buyer Inquiry Form Submission',
  }
  const subject = `${inquiryTypeLabels[formData.inquiryType]} from ${formData.name}`

  // Format email body
  const html = formatEmailBody(formData)

  // Retry logic for transient failures
  let lastError: unknown
  for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      await resend.emails.send({
        from: fromAddress,
        to: recipientEmail,
        replyTo: formData.email,
        subject,
        html,
      })

      // Success - log and return
      if (attempt > 0) {
        console.log(`Email sent successfully after ${attempt} retry(ies)`)
      }
      return { success: true }
    } catch (error) {
      lastError = error

      // Log the error
      console.error(`Email send attempt ${attempt + 1} failed:`, error)

      // If not a transient error, don't retry
      if (!isTransientError(error)) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error occurred'
        console.error('Non-retryable error:', errorMessage)
        return { success: false, error: errorMessage }
      }

      // If we've exhausted retries, return failure
      if (attempt >= RETRY_CONFIG.maxRetries) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Failed to send email after multiple attempts'
        console.error(
          `Email send failed after ${RETRY_CONFIG.maxRetries + 1} attempts:`,
          errorMessage
        )
        return { success: false, error: errorMessage }
      }

      // Calculate delay and wait before retry
      const delay = calculateRetryDelay(attempt)
      console.log(`Retrying email send in ${delay}ms... (attempt ${attempt + 2}/${RETRY_CONFIG.maxRetries + 1})`)
      await sleep(delay)
    }
  }

  // Fallback (should not reach here, but TypeScript requires it)
  const errorMessage =
    lastError instanceof Error
      ? lastError.message
      : 'Failed to send email after multiple attempts'
  return { success: false, error: errorMessage }
}

