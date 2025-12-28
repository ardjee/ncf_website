import { z } from 'zod'

export type FormType = 'general' | 'partnership' | 'buyer'

// Phone validation: optional, but if provided must be valid format
// Accepts international format with +, or local format with digits, spaces, dashes
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || phoneRegex.test(val),
      'Please enter a valid phone number'
    ),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  inquiryType: z.enum(['general', 'partnership', 'buyer']),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

