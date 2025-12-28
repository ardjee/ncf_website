# Story 5.3 Implementation: Create Form Validation Schema

**Status:** ✅ Complete

## Implementation Summary

Story 5.3 has been successfully implemented. Form validation schemas have been created using Zod, providing consistent validation rules for both client-side and server-side validation. The schema validates all required fields (name, email, message, inquiryType) and includes optional phone field with format validation when provided.

## Acceptance Criteria Verification

✅ **AC1:** `lib/validation.ts` exists with Zod schemas
- Validation schema file exists at `lib/validation.ts`
- Uses Zod library for schema definition

✅ **AC2:** Schema validates name (required, min length)
- Name field is required (non-optional string)
- Minimum length validation: 2 characters
- Error message: "Name must be at least 2 characters"

✅ **AC3:** Schema validates email (required, valid email format)
- Email field is required (non-optional string)
- Email format validation using Zod's built-in `.email()` method
- Error message: "Please enter a valid email address"

✅ **AC4:** Schema validates phone (optional, valid format if provided)
- Phone field is optional (can be undefined or empty string)
- When provided, validates phone format using regex pattern
- Accepts international format with +, or local format with digits, spaces, dashes
- Error message: "Please enter a valid phone number"

✅ **AC5:** Schema validates message (required, min length)
- Message field is required (non-optional string)
- Minimum length validation: 10 characters
- Error message: "Message must be at least 10 characters"

✅ **AC6:** Schema validates inquiry type
- Inquiry type field is required enum
- Valid values: 'general', 'partnership', 'buyer'
- Type-safe enum validation

✅ **AC7:** Schema can be used for both client and server validation
- Schema is exported and can be imported in both client and server code
- TypeScript type exported via `z.infer<typeof contactFormSchema>`
- Compatible with React Hook Form (client) and API routes (server)

## Files Modified

1. **`lib/validation.ts`** - Updated validation schema
   - Added phone format validation using regex pattern
   - Phone field now validates format when provided (optional field)
   - All other validations already met requirements

## Verification Commands

### 1. Verify Validation Schema Exists

```bash
# Check validation.ts file exists
Test-Path lib/validation.ts  # PowerShell
# or
ls lib/validation.ts         # Bash/Linux/Mac
```

**Expected:** File exists at `lib/validation.ts`

### 2. Run TypeScript Type Checking

```bash
npm run type-check
```

**Expected:** No TypeScript errors (exits with code 0)

### 3. Verify Schema Exports

```bash
# Check that schema can be imported (TypeScript will verify)
npm run type-check
```

**Expected:** No import/export errors

### 4. Test Schema Validation (Manual Testing)

Create a test file or use Node.js REPL to test validation:

```typescript
// Example test in Node.js REPL or test file
import { contactFormSchema } from './lib/validation'

// Test valid data
const validData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+256 700 123456',
  message: 'This is a test message with enough characters',
  inquiryType: 'general'
}
const result = contactFormSchema.safeParse(validData)
console.log('Valid data:', result.success) // Should be true

// Test invalid email
const invalidEmail = {
  name: 'John Doe',
  email: 'not-an-email',
  message: 'Test message',
  inquiryType: 'general'
}
const emailResult = contactFormSchema.safeParse(invalidEmail)
console.log('Invalid email:', emailResult.success) // Should be false

// Test invalid phone format
const invalidPhone = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: 'abc123', // Invalid format
  message: 'Test message',
  inquiryType: 'general'
}
const phoneResult = contactFormSchema.safeParse(invalidPhone)
console.log('Invalid phone:', phoneResult.success) // Should be false
```

### 5. Verify Client-Side Usage

```bash
# Start development server
npm run dev
```

Navigate to `/contact` page and test form validation:
- Submit form with empty name → Should show validation error
- Submit form with invalid email → Should show validation error
- Submit form with invalid phone format → Should show validation error
- Submit form with short message (< 10 chars) → Should show validation error
- Submit form with valid data → Should pass validation

### 6. Verify Linting

```bash
npm run lint
```

**Expected:** No linting errors (or known Next.js 16.1.1 ESLint issue)

## Test Notes Verification

✅ **Test 1:** Verify validation.ts exists with Zod schemas
- Verified: File exists at `lib/validation.ts` with Zod schema definitions

✅ **Test 2:** Test schema validation with valid data (should pass)
- Schema accepts valid name (min 2 chars), email, optional phone, message (min 10 chars), inquiryType

✅ **Test 3:** Test schema validation with invalid data (should fail with appropriate errors)
- Invalid name (< 2 chars) → Fails with "Name must be at least 2 characters"
- Invalid email format → Fails with "Please enter a valid email address"
- Invalid phone format (when provided) → Fails with "Please enter a valid phone number"
- Invalid message (< 10 chars) → Fails with "Message must be at least 10 characters"
- Invalid inquiryType → Fails with enum validation error

✅ **Test 4:** Verify email format validation works
- Valid emails: `user@example.com`, `test.email@domain.co.uk`
- Invalid emails: `not-an-email`, `missing@domain`, `@domain.com`
- Zod's built-in `.email()` method handles validation

✅ **Test 5:** Test optional phone field validation
- Empty phone (undefined or empty string) → Passes (optional)
- Valid phone formats → Passes:
  - `+256 700 123456` (international with +)
  - `256 700 123456` (international without +)
  - `0700 123456` (local format)
  - `0700-123-456` (with dashes)
- Invalid phone formats → Fails:
  - `abc123` (non-numeric)
  - `12` (too short)
  - `12345678901234567890` (too long)

✅ **Test 6:** Check that schema exports are usable in both client and server code
- Schema exported from `lib/validation.ts`
- Type exported: `ContactFormData` via `z.infer<typeof contactFormSchema>`
- Used in `components/ui/ContactForm.tsx` (client-side) ✅
- Ready for use in API routes (server-side) for Story 5.4+

## Technical Implementation

### Phone Validation Pattern

The phone validation regex pattern accepts:
- International format: `+256 700 123456` or `256 700 123456`
- Local format: `0700 123456` or `0700-123-456`
- Flexible spacing and formatting (spaces, dashes, parentheses)

Pattern: `/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/`

This pattern:
- Allows optional `+` at start
- Allows optional parentheses around area codes
- Allows spaces, dashes, or dots as separators
- Requires minimum digits for valid phone number
- Works for both international and local formats

### Schema Structure

```typescript
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
```

### Type Exports

- `FormType`: Type alias for form types
- `ContactFormData`: Inferred TypeScript type from schema
- `contactFormSchema`: Zod schema for validation

## Integration Points

### Client-Side Usage (Already Implemented)

The schema is already integrated with React Hook Form in `components/ui/ContactForm.tsx`:
- Uses `zodResolver(contactFormSchema)` for form validation
- Type-safe form data via `ContactFormData` type
- Validation errors displayed to users

### Server-Side Usage (Future Stories)

The schema will be used in API routes (Story 5.4+):
- Import schema in API route handlers
- Use `contactFormSchema.parse()` or `contactFormSchema.safeParse()` for validation
- Type-safe request body validation

## Change Set

**Story 5.3 Implementation - Smallest Correct Change-Set:**

**Files Modified:**
- `lib/validation.ts` - Added phone format validation using regex pattern

**Changes Made:**
1. Added phone regex pattern constant for phone format validation
2. Updated phone field validation to use `.refine()` method
3. Phone field now validates format when provided (remains optional)
4. All other validations already met requirements (no changes needed)

**No New Files Created:**
- Validation schema file already existed from Story 5.1
- Only enhancement was adding phone format validation

---

**Implementation Status:** ✅ Complete
**Validation Schema:** ✅ Complete with all required validations
**Phone Validation:** ✅ Optional field with format validation when provided
**Client Integration:** ✅ Already integrated with ContactForm component
**Server Ready:** ✅ Schema ready for API route validation (Story 5.4+)
**Ready for:** Story 5.4 (Implement General Contact API Endpoint)

