import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sendEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input using schema
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Ensure inquiry type is 'buyer' for this endpoint
    if (data.inquiryType !== 'buyer') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid inquiry type for this endpoint',
        },
        { status: 400 }
      )
    }

    // Get recipient email from environment variable
    const recipientEmail = process.env.EMAIL_TO_ADDRESS
    if (!recipientEmail) {
      console.error('EMAIL_TO_ADDRESS environment variable is not set')
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error',
        },
        { status: 500 }
      )
    }

    // Send email via email service
    const emailResult = await sendEmail({
      to: recipientEmail,
      formData: data,
    })

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResult.error || 'Failed to send email. Please try again later.',
        },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error in buyer inquiry API:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    )
  }
}

