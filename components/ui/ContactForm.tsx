'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type FormType, type ContactFormData } from '@/lib/validation'
import { useState, useRef } from 'react'

interface ContactFormProps {
  formType: FormType
}

interface ApiResponse {
  success: boolean
  message: string
  errors?: string[]
}

export default function ContactForm({ formType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const submitInProgressRef = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: formType,
    },
  })

  const getApiEndpoint = () => {
    switch (formType) {
      case 'buyer':
        return '/api/contact/buyer'
      case 'general':
      default:
        return '/api/contact/general'
    }
  }

  const getErrorMessage = (error: unknown): string => {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return 'Network error: Please check your internet connection and try again.'
    }
    if (error instanceof Error) {
      if (error.message.includes('timeout') || error.message.includes('aborted')) {
        return 'Request timed out. Please try again.'
      }
      if (error.message.includes('Failed to fetch')) {
        return 'Unable to connect to the server. Please check your connection and try again.'
      }
      return error.message
    }
    return 'An unexpected error occurred. Please try again later.'
  }

  const onSubmit = async (data: ContactFormData) => {
    // Prevent duplicate submissions
    if (submitInProgressRef.current) {
      return
    }

    submitInProgressRef.current = true
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const endpoint = getApiEndpoint()
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      let responseData: ApiResponse
      try {
        responseData = await response.json()
      } catch (parseError) {
        throw new Error('Invalid response from server. Please try again.')
      }

      if (!response.ok || !responseData.success) {
        // Handle validation errors
        if (response.status === 400 && responseData.errors) {
          const errorList = responseData.errors.join(', ')
          throw new Error(`Validation error: ${errorList}. Please check your input and try again.`)
        }
        // Handle server errors
        throw new Error(
          responseData.message || `Server error (${response.status}). Please try again later.`
        )
      }

      // Success
      setSubmitStatus('success')
      setSubmitMessage(responseData.message || 'Thank you! Your message has been sent successfully.')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      if (error instanceof Error && error.name === 'AbortError') {
        setSubmitMessage('Request timed out. Please try again.')
      } else {
        const errorMessage = getErrorMessage(error)
        setSubmitMessage(errorMessage)
      }
    } finally {
      setIsSubmitting(false)
      submitInProgressRef.current = false
    }
  }

  const getFormTitle = () => {
    switch (formType) {
      case 'partnership':
        return 'Partnership Inquiry'
      case 'buyer':
        return 'Buyer Inquiry'
      default:
        return 'General Contact'
    }
  }

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-water-deep mb-6">{getFormTitle()}</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor={`name-${formType}`} className="block text-sm font-medium text-charcoal mb-2">
            Name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id={`name-${formType}`}
            {...register('name')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-water-medium transition-colors duration-200 ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-grey-medium focus:border-water-medium'
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? `name-error-${formType}` : undefined}
          />
          {errors.name && (
            <p id={`name-error-${formType}`} className="mt-2 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor={`email-${formType}`} className="block text-sm font-medium text-charcoal mb-2">
            Email <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id={`email-${formType}`}
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-water-medium transition-colors duration-200 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-grey-medium focus:border-water-medium'
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? `email-error-${formType}` : undefined}
          />
          {errors.email && (
            <p id={`email-error-${formType}`} className="mt-2 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label htmlFor={`phone-${formType}`} className="block text-sm font-medium text-charcoal mb-2">
            Phone <span className="text-sm text-charcoal-muted font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id={`phone-${formType}`}
            {...register('phone')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-water-medium transition-colors duration-200 ${
              errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-grey-medium focus:border-water-medium'
            }`}
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? `phone-error-${formType}` : undefined}
          />
          {errors.phone && (
            <p id={`phone-error-${formType}`} className="mt-2 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor={`message-${formType}`} className="block text-sm font-medium text-charcoal mb-2">
            Message <span className="text-red-500" aria-label="required">*</span>
          </label>
          <textarea
            id={`message-${formType}`}
            {...register('message')}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-water-medium transition-colors duration-200 resize-y ${
              errors.message
                ? 'border-red-500 focus:ring-red-500'
                : 'border-grey-medium focus:border-water-medium'
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? `message-error-${formType}` : undefined}
          />
          {errors.message && (
            <p id={`message-error-${formType}`} className="mt-2 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 bg-water-deep text-white font-medium rounded-lg hover:bg-water-medium focus:outline-none focus:ring-2 focus:ring-water-medium focus:ring-offset-2 transition-colors duration-200 min-h-[44px] min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="status" aria-live="polite">
            <p className="text-sm text-green-800">{submitMessage}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert" aria-live="assertive">
            <p className="text-sm text-red-800">{submitMessage}</p>
          </div>
        )}
      </form>
    </div>
  )
}

