'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type FormType, type ContactFormData } from '@/lib/validation'
import { useState } from 'react'

interface ContactFormProps {
  formType: FormType
}

export default function ContactForm({ formType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Form submission will be handled by API endpoint in future stories
      // For now, just log the data
      console.log('Form submission:', data)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      setSubmitStatus('success')
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
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

