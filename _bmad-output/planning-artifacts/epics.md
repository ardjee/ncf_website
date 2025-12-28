# NCF_website - Epic Breakdown

**Author:** Ardjee (Scrum Master: Bob)
**Date:** 2025-01-27
**Status:** v1.0 - Ready for Implementation

## Overview

This document provides the complete epic and story breakdown for NCF_website, decomposing the requirements from the PRD and Architecture into implementable stories with acceptance criteria and test notes.

## Requirements Inventory

### Functional Requirements

**FR1: Content Display**
- FR1.1: Website displays company overview information
- FR1.2: Website displays products and services information
- FR1.3: Website displays investment opportunity information
- FR1.4: Website displays team/company credentials
- FR1.5: Website displays contact information

**FR2: Navigation**
- FR2.1: Users can navigate between main sections via navigation menu
- FR2.2: Users can access all key sections from homepage
- FR2.3: Navigation is accessible on mobile devices

**FR3: Contact & Inquiry**
- FR3.1: Users can submit general contact inquiries via form
- FR3.2: Users can submit partnership inquiries via form
- FR3.3: Users can submit buyer inquiries via form
- FR3.4: Users can access contact information (phone, email, location)
- FR3.5: Form submissions are processed and delivered to NCF

**FR4: Responsive Design**
- FR4.1: Website displays correctly on mobile devices
- FR4.2: Website displays correctly on tablets
- FR4.3: Website displays correctly on desktop browsers
- FR4.4: Content is readable and accessible on all device sizes

**FR5: Professional Presentation**
- FR5.1: Website presents professional visual design
- FR5.2: Website uses high-quality imagery and graphics
- FR5.3: Website maintains consistent branding throughout
- FR5.4: Content is well-organized and easy to scan

### Non-Functional Requirements

**Performance:**
- NFR1: Homepage must load within 3 seconds on 3G mobile connection
- NFR2: All pages must load within 3 seconds on 3G mobile connection
- NFR3: Images must be optimized for fast loading on mobile networks
- NFR4: Website must achieve Lighthouse performance score of 80+ on mobile

**Responsiveness:**
- NFR5: Website must be fully functional and readable on screen widths from 320px to 1920px
- NFR6: Touch targets must be minimum 44x44px for mobile usability
- NFR7: Text must be readable without zooming on mobile devices

**Reliability:**
- NFR8: Website must have 99% uptime (Vercel hosting provides this)
- NFR9: Form submissions must be reliably delivered
- NFR10: Website must handle form submission errors gracefully

**Security:**
- NFR11: Contact forms must prevent spam submissions (basic validation)
- NFR12: Website must use HTTPS (Vercel default)
- NFR13: Form data must be transmitted securely

**Accessibility:**
- NFR14: Website must meet WCAG 2.1 Level AA basic compliance
- NFR15: All images must have alt text
- NFR16: Website must be navigable via keyboard
- NFR17: Color contrast must meet WCAG standards

**Browser Compatibility:**
- NFR18: Website must work on latest versions of Chrome, Safari, Firefox, Edge
- NFR19: Website must degrade gracefully on older browsers

**Hosting:**
- NFR20: Deployment must be automated via Git integration

### FR Coverage Map

| Epic | FRs Covered | NFRs Covered |
|------|-------------|--------------|
| Epic 1: Project Foundation | - | NFR20 |
| Epic 2: Core Layout & Navigation | FR2.1, FR2.2, FR2.3 | NFR5, NFR6, NFR14, NFR16 |
| Epic 3: Homepage | FR1.1, FR5.1, FR5.2, FR5.3, FR5.4 | NFR1, NFR3, NFR4 |
| Epic 4: Content Pages | FR1.1, FR1.2, FR1.3, FR1.4, FR1.5 | NFR2, NFR3, NFR4 |
| Epic 5: Contact Forms & API | FR3.1, FR3.2, FR3.3, FR3.4, FR3.5 | NFR9, NFR10, NFR11, NFR13 |
| Epic 6: Responsive Design & Optimization | FR4.1, FR4.2, FR4.3, FR4.4 | NFR5, NFR6, NFR7, NFR1, NFR2, NFR3, NFR4 |
| Epic 7: Accessibility & Polish | FR5.1, FR5.3 | NFR14, NFR15, NFR16, NFR17, NFR18, NFR19 |

---

## Epic List

1. **Epic 1: Project Foundation & Setup** - Initialize Next.js project with App Router, Tailwind CSS, TypeScript, and basic project structure
2. **Epic 2: Core Layout & Navigation** - Create root layout, header navigation, and footer components
3. **Epic 3: Homepage** - Implement homepage with hero section, value proposition, and key highlights
4. **Epic 4: Content Pages** - Implement About, Products & Services, Investment, and Team pages
5. **Epic 5: Contact Forms & API** - Create contact forms and serverless API endpoints for form submissions
6. **Epic 6: Responsive Design & Mobile Optimization** - Ensure mobile-first responsive design across all pages
7. **Epic 7: Accessibility & Polish** - Implement accessibility features, SEO optimization, and final polish

---

## Epic 1: Project Foundation & Setup

**Goal:** Establish the technical foundation for the NCF website by initializing Next.js with App Router, configuring Tailwind CSS and TypeScript, and setting up the basic project structure as defined in the architecture.

**FRs Covered:** None (foundation)
**NFRs Covered:** NFR20

### Story 1.1: Initialize Next.js Project with App Router

As a developer,
I want a Next.js 14+ project initialized with App Router,
So that I have the correct foundation for building the static marketing website.

**Acceptance Criteria:**

**Given** I have Node.js and npm/yarn installed
**When** I run the Next.js initialization command
**Then** A Next.js 14+ project is created with App Router structure
**And** The project uses TypeScript configuration
**And** The `app/` directory structure exists
**And** Basic `app/layout.tsx` and `app/page.tsx` files are created
**And** `package.json` includes Next.js 14+ dependencies

**Test Notes:**
- Verify Next.js version in package.json is 14.0.0 or higher
- Verify `app/` directory exists (not `pages/`)
- Verify TypeScript is configured (tsconfig.json exists)
- Verify basic Next.js app runs with `npm run dev`
- Check that App Router structure is correct (no Pages Router files)

**Technical Notes:**
- Use `npx create-next-app@latest` with TypeScript and App Router options
- Ensure React 18+ is included
- Project should be ready for Vercel deployment

---

### Story 1.2: Configure Tailwind CSS

As a developer,
I want Tailwind CSS configured in the project,
So that I can use utility-first styling for rapid UI development.

**Acceptance Criteria:**

**Given** The Next.js project is initialized
**When** Tailwind CSS is installed and configured
**Then** Tailwind CSS package is added to dependencies
**And** `tailwind.config.js` exists with proper content paths
**And** `postcss.config.js` is configured
**And** Global CSS file imports Tailwind directives
**And** Tailwind classes work in components

**Test Notes:**
- Verify `tailwindcss`, `postcss`, and `autoprefixer` are in package.json
- Verify `tailwind.config.js` includes `content: ['./app/**/*.{js,ts,jsx,tsx}']`
- Test that Tailwind utility classes work (e.g., `className="text-blue-500"`)
- Verify CSS is properly purged in production build
- Check that Tailwind IntelliSense works in IDE

**Technical Notes:**
- Follow Next.js Tailwind CSS setup guide
- Configure content paths to include app directory
- Set up Tailwind config for mobile-first responsive design

---

### Story 1.3: Set Up Project Directory Structure

As a developer,
I want the project directory structure created as defined in the architecture,
So that code is organized and follows the established patterns.

**Acceptance Criteria:**

**Given** The Next.js project exists
**When** I create the directory structure
**Then** `components/ui/` directory exists for reusable UI components
**And** `components/layout/` directory exists for layout components
**And** `lib/` directory exists for utilities
**And** `public/images/` directory exists for static assets
**And** `styles/` directory exists for global styles
**And** `.env.example` file exists with environment variable templates

**Test Notes:**
- Verify all directories exist as specified in architecture
- Verify `.env.example` includes EMAIL_SERVICE_API_KEY and EMAIL_TO_ADDRESS placeholders
- Check that directory structure matches architecture document
- Verify no unnecessary directories are created

**Technical Notes:**
- Create empty directories or placeholder files
- Document structure in README.md
- Ensure structure aligns with architecture document

---

### Story 1.4: Configure TypeScript and Development Tools

As a developer,
I want TypeScript and development tools properly configured,
So that I have type safety and code quality tools in place.

**Acceptance Criteria:**

**Given** The Next.js project is initialized
**When** TypeScript and development tools are configured
**Then** `tsconfig.json` has appropriate Next.js settings
**And** ESLint is configured with Next.js rules
**And** Prettier is configured (optional but recommended)
**And** TypeScript compilation works without errors
**And** ESLint runs without errors on initial files

**Test Notes:**
- Verify `tsconfig.json` includes Next.js recommended settings
- Verify ESLint config extends `next/core-web-vitals`
- Run `npm run build` to verify TypeScript compilation
- Run `npm run lint` to verify ESLint works
- Check that type checking works in IDE

**Technical Notes:**
- Use Next.js TypeScript template settings
- Configure ESLint for Next.js best practices
- Set up Prettier with reasonable defaults if used

---

## Epic 2: Core Layout & Navigation

**Goal:** Create the foundational layout components (root layout, header navigation, and footer) that will be used across all pages, ensuring consistent navigation and professional presentation.

**FRs Covered:** FR2.1, FR2.2, FR2.3
**NFRs Covered:** NFR5, NFR6, NFR14, NFR16

### Story 2.1: Create Root Layout Component

As a user,
I want a consistent layout structure across all pages,
So that the website has a professional, cohesive appearance.

**Acceptance Criteria:**

**Given** The Next.js project is set up
**When** I create the root layout component
**Then** `app/layout.tsx` includes metadata (title, description)
**And** The layout includes Header and Footer components
**And** The layout wraps all page content
**And** Global styles are imported
**And** The layout is responsive and works on mobile devices

**Test Notes:**
- Verify `app/layout.tsx` exists and exports default layout
- Verify metadata object includes title and description
- Check that Header and Footer are rendered (can be placeholder initially)
- Verify layout renders on all page routes
- Test responsive behavior on mobile viewport

**Technical Notes:**
- Use Next.js metadata API
- Import global CSS in layout
- Structure should follow Next.js App Router patterns
- Header and Footer can be basic implementations initially

---

### Story 2.2: Implement Header Navigation Component

As a user,
I want to navigate between main sections of the website,
So that I can easily find the information I need.

**Acceptance Criteria:**

**Given** The root layout exists
**When** I implement the Header component
**Then** The header displays the NCF logo/brand name
**And** Navigation menu includes links to: Home, About, Products & Services, Investment, Contact, Team
**And** Navigation links are functional and navigate to correct routes
**And** Navigation is visible and accessible on mobile devices (hamburger menu or similar)
**And** Navigation is keyboard accessible (tab navigation works)
**And** Active page is visually indicated in navigation

**Test Notes:**
- Verify all navigation links exist and point to correct routes
- Test navigation on mobile (320px, 375px, 414px viewports)
- Test keyboard navigation (Tab key moves through links)
- Verify active page highlighting works
- Test mobile menu toggle functionality
- Check that navigation is readable and touch targets are 44x44px minimum

**Technical Notes:**
- Use Next.js Link component for client-side navigation
- Implement mobile-responsive navigation (hamburger menu pattern)
- Use semantic HTML (`<nav>`, `<ul>`, `<li>`)
- Add ARIA labels for accessibility
- Consider using `usePathname` to highlight active route

---

### Story 2.3: Implement Footer Component

As a user,
I want to see contact information and site footer,
So that I can easily find ways to contact NCF.

**Acceptance Criteria:**

**Given** The root layout exists
**When** I implement the Footer component
**Then** Footer displays contact information (phone, email, location if available)
**And** Footer includes copyright information
**And** Footer is responsive and readable on mobile devices
**And** Footer links (if any) are functional
**And** Footer has consistent styling with the rest of the site

**Test Notes:**
- Verify contact information is displayed
- Test footer on mobile viewport (content should be readable)
- Verify footer is consistently rendered on all pages
- Check that footer styling matches site design
- Test any footer links if present

**Technical Notes:**
- Use semantic HTML (`<footer>`)
- Make contact information easily scannable
- Ensure mobile-friendly layout (stacked or grid)
- Consider adding social media links if applicable (future enhancement)

---

## Epic 3: Homepage

**Goal:** Implement the homepage with a professional hero section, clear value proposition, key highlights, and call-to-action buttons that effectively communicate NCF's business to all three target audiences.

**FRs Covered:** FR1.1, FR5.1, FR5.2, FR5.3, FR5.4
**NFRs Covered:** NFR1, NFR3, NFR4

### Story 3.1: Create Homepage Route and Basic Structure

As a user,
I want to see a professional homepage when I visit the website,
So that I immediately understand what NCF offers.

**Acceptance Criteria:**

**Given** The layout components exist
**When** I create the homepage
**Then** `app/page.tsx` exists and renders homepage content
**Then** Homepage is accessible at the root URL (`/`)
**And** Homepage includes a hero section
**And** Homepage includes sections for value proposition and key highlights
**And** Homepage content is well-organized and easy to scan
**And** Homepage loads and displays correctly

**Test Notes:**
- Verify homepage is accessible at `/`
- Verify homepage renders without errors
- Check that hero section is visible
- Verify content sections are present
- Test that page loads quickly (initial render)

**Technical Notes:**
- Use Next.js App Router page structure
- Create placeholder content initially (can be refined with actual content later)
- Structure should be semantic HTML

---

### Story 3.2: Implement Hero Section Component

As a user,
I want to see an engaging hero section on the homepage,
So that I immediately understand NCF's value proposition.

**Acceptance Criteria:**

**Given** The homepage exists
**When** I implement the Hero component
**Then** Hero section displays a compelling headline
**And** Hero section includes a subheadline or value proposition text
**And** Hero section includes a high-quality background image (if provided) or professional design
**And** Hero section includes call-to-action buttons linking to key sections
**And** Hero section is responsive and looks good on mobile devices
**And** Hero section images use Next.js Image component for optimization

**Test Notes:**
- Verify hero section displays correctly on desktop
- Test hero section on mobile viewports (320px, 375px, 414px)
- Verify images load and are optimized (check Network tab)
- Test call-to-action buttons are functional
- Verify text is readable and properly sized on mobile
- Check that hero section meets performance requirements (loads quickly)

**Technical Notes:**
- Use Next.js Image component for all images
- Implement responsive image sizing
- Use Tailwind CSS for styling
- Ensure text contrast meets WCAG standards
- Consider overlay for text readability on images

---

### Story 3.3: Implement Key Highlights Section

As a user,
I want to see key highlights about NCF on the homepage,
So that I quickly understand the company's strengths and offerings.

**Acceptance Criteria:**

**Given** The homepage exists
**When** I implement the key highlights section
**Then** Section displays 3-5 key highlights or features
**And** Each highlight includes an icon or visual element
**And** Each highlight includes a title and brief description
**And** Highlights are visually appealing and well-organized
**And** Section is responsive and displays correctly on mobile devices
**And** Section uses consistent styling with the rest of the site

**Test Notes:**
- Verify highlights section displays correctly
- Test on mobile viewport (highlights should stack or grid appropriately)
- Verify icons/images are visible and properly sized
- Check that text is readable
- Test that section integrates well with hero section

**Technical Notes:**
- Use grid or flexbox for layout
- Ensure mobile-first responsive design
- Use semantic HTML structure
- Consider using icons from a library (e.g., Heroicons, Lucide)

---

### Story 3.4: Optimize Homepage Performance

As a user accessing the site on a mobile device in Uganda,
I want the homepage to load quickly,
So that I don't experience long wait times.

**Acceptance Criteria:**

**Given** The homepage is implemented
**When** I optimize for performance
**Then** Homepage loads within 3 seconds on 3G mobile connection (NFR1)
**And** All images are optimized using Next.js Image component
**And** Lighthouse performance score is 80+ on mobile (NFR4)
**And** JavaScript bundle is minimized
**And** CSS is optimized and purged of unused styles

**Test Notes:**
- Run Lighthouse audit on mobile (3G throttling)
- Verify performance score is 80+
- Check load time in Network tab (simulate 3G)
- Verify images are properly optimized (WebP format, appropriate sizes)
- Check bundle size (should be reasonable for static site)
- Verify CSS is purged (no unused Tailwind classes in production)

**Technical Notes:**
- Use Next.js Image component with proper sizing
- Enable image optimization in next.config.js
- Use static generation (SSG) for homepage
- Minimize JavaScript bundle (code splitting if needed)
- Ensure Tailwind purges unused styles in production

---

## Epic 4: Content Pages

**Goal:** Implement all content pages (About, Products & Services, Investment, Team) that display company information, products, investment opportunities, and team credentials to serve the three target audiences.

**FRs Covered:** FR1.1, FR1.2, FR1.3, FR1.4, FR1.5
**NFRs Covered:** NFR2, NFR3, NFR4

### Story 4.1: Implement About Page

As a user,
I want to learn about NCF's company background and mission,
So that I understand the company's values and market position.

**Acceptance Criteria:**

**Given** The layout and navigation exist
**When** I implement the About page
**Then** `app/about/page.tsx` exists and displays company information
**And** Page includes company history and mission
**And** Page includes market position information
**And** Page includes company credentials and achievements
**And** Page is accessible at `/about` route
**And** Page content is well-organized and readable
**And** Page is responsive and works on mobile devices

**Test Notes:**
- Verify About page is accessible at `/about`
- Test page renders without errors
- Verify all content sections are present
- Test responsive design on mobile viewport
- Check that navigation to About page works
- Verify page loads within 3 seconds (NFR2)

**Technical Notes:**
- Use static generation (SSG) for About page
- Structure content with semantic HTML
- Use Tailwind CSS for styling
- Optimize any images used

---

### Story 4.2: Implement Products & Services Page

As a potential partner or buyer,
I want to see NCF's products and services,
So that I can understand what they offer and how to work with them.

**Acceptance Criteria:**

**Given** The layout and navigation exist
**When** I implement the Products & Services page
**Then** `app/products-services/page.tsx` exists and displays product information
**And** Page includes section for fresh tilapia offerings
**And** Page includes section for fingerling production services
**And** Page includes section for feed production services
**And** Each service/product is clearly presented with description
**And** Page is accessible at `/products-services` route
**And** Page is responsive and works on mobile devices

**Test Notes:**
- Verify Products & Services page is accessible at `/products-services`
- Verify all three service categories are displayed
- Test page renders correctly on mobile
- Check that content is clear and well-organized
- Verify navigation to this page works
- Test page load performance (NFR2)

**Technical Notes:**
- Use static generation (SSG)
- Consider using cards or sections for each product/service
- Ensure mobile-friendly layout
- Optimize any product images

---

### Story 4.3: Implement Investment Page

As a potential investor,
I want to see investment opportunity information,
So that I can evaluate NCF as an investment opportunity.

**Acceptance Criteria:**

**Given** The layout and navigation exist
**When** I implement the Investment page
**Then** `app/investment/page.tsx` exists and displays investment information
**And** Page includes market opportunity overview
**And** Page includes company structure and stability information
**And** Page includes risk management approach
**And** Page includes investment proposition
**And** Page is accessible at `/investment` route
**And** Page content builds investor confidence
**And** Page is responsive and works on mobile devices

**Test Notes:**
- Verify Investment page is accessible at `/investment`
- Verify all investment-related sections are present
- Test page renders correctly on mobile
- Check that content is professional and clear
- Verify navigation to this page works
- Test page load performance (NFR2)

**Technical Notes:**
- Use static generation (SSG)
- Structure content to build trust and confidence
- Ensure professional presentation
- Consider using charts or visual elements if appropriate

---

### Story 4.4: Implement Team Page

As a user,
I want to see information about NCF's team and credentials,
So that I can understand the company's expertise and credibility.

**Acceptance Criteria:**

**Given** The layout and navigation exist
**When** I implement the Team page
**Then** `app/team/page.tsx` exists and displays team information
**And** Page includes leadership/team information
**And** Page includes company achievements
**And** Page includes certifications or credentials (if available)
**And** Page is accessible at `/team` route
**And** Page is responsive and works on mobile devices

**Test Notes:**
- Verify Team page is accessible at `/team`
- Verify team information is displayed
- Test page renders correctly on mobile
- Check that content is well-organized
**And** Verify navigation to this page works
- Test page load performance (NFR2)

**Technical Notes:**
- Use static generation (SSG)
- Consider using cards or sections for team members
- Display credentials and achievements prominently
- Ensure professional presentation

---

### Story 4.5: Optimize All Content Pages for Performance

As a user accessing content pages on mobile,
I want pages to load quickly,
So that I can access information without long wait times.

**Acceptance Criteria:**

**Given** All content pages are implemented
**When** I optimize for performance
**Then** All pages load within 3 seconds on 3G mobile connection (NFR2)
**And** All images are optimized using Next.js Image component (NFR3)
**And** Lighthouse performance score is 80+ on mobile for all pages (NFR4)
**And** Pages use static generation (SSG) for optimal performance

**Test Notes:**
- Run Lighthouse audit on each content page (mobile, 3G throttling)
- Verify all pages achieve 80+ performance score
- Check load times in Network tab (simulate 3G)
- Verify all images are optimized
- Check that pages are statically generated (no runtime data fetching)

**Technical Notes:**
- Ensure all pages use `export const dynamic = 'force-static'` or similar
- Optimize all images with Next.js Image component
- Minimize JavaScript bundle
- Use code splitting if needed

---

## Epic 5: Contact Forms & API

**Goal:** Implement contact forms (general, partnership, buyer) with client-side validation, serverless API endpoints for form submission, and email service integration to enable users to contact NCF.

**FRs Covered:** FR3.1, FR3.2, FR3.3, FR3.4, FR3.5
**NFRs Covered:** NFR9, NFR10, NFR11, NFR13

### Story 5.1: Create Reusable ContactForm Component

As a developer,
I want a reusable ContactForm component,
So that I can use it for different form types (general, partnership, buyer) with consistent styling and behavior.

**Acceptance Criteria:**

**Given** The component structure exists
**When** I create the ContactForm component
**Then** `components/ui/ContactForm.tsx` exists
**And** Component accepts props for form type (general, partnership, buyer)
**And** Component includes form fields: name, email, phone (optional), message
**And** Component uses React Hook Form for form management
**And** Component includes client-side validation
**And** Component displays validation errors appropriately
**And** Component has accessible form labels and error messages

**Test Notes:**
- Verify ContactForm component exists and exports correctly
- Test that component accepts and uses form type prop
- Verify all form fields are present
- Test client-side validation (required fields, email format)
- Verify error messages display correctly
- Test accessibility (labels, ARIA attributes, keyboard navigation)
- Check that form is responsive on mobile

**Technical Notes:**
- Use React Hook Form for form state management
- Use Zod for validation schema
- Implement accessible form patterns (labels, error messages)
- Use Tailwind CSS for styling
- Ensure mobile-friendly form layout

---

### Story 5.2: Implement Contact Page with Forms

As a user,
I want to submit contact inquiries through forms on the contact page,
So that I can easily reach out to NCF.

**Acceptance Criteria:**

**Given** The ContactForm component exists
**When** I implement the Contact page
**Then** `app/contact/page.tsx` exists and displays contact information
**And** Page includes general contact form
**And** Page includes partnership inquiry form
**And** Page includes buyer inquiry form
**And** Page displays contact information (phone, email, location if available)
**And** Each form is clearly labeled and distinct
**And** Page is accessible at `/contact` route
**And** Page is responsive and works on mobile devices

**Test Notes:**
- Verify Contact page is accessible at `/contact`
- Verify all three forms are present and functional
- Test that each form submits to correct endpoint
- Verify contact information is displayed
- Test page on mobile viewport
- Check that forms are clearly separated and labeled

**Technical Notes:**
- Use ContactForm component with different form type props
- Organize forms in clear sections
- Display contact information prominently
- Ensure mobile-friendly layout

---

### Story 5.3: Create Form Validation Schema

As a developer,
I want form validation schemas defined,
So that both client-side and server-side validation use consistent rules.

**Acceptance Criteria:**

**Given** The ContactForm component exists
**When** I create validation schemas
**Then** `lib/validation.ts` exists with Zod schemas
**And** Schema validates name (required, min length)
**And** Schema validates email (required, valid email format)
**And** Schema validates phone (optional, valid format if provided)
**And** Schema validates message (required, min length)
**And** Schema validates inquiry type
**And** Schema can be used for both client and server validation

**Test Notes:**
- Verify validation.ts exists with Zod schemas
- Test schema validation with valid data (should pass)
- Test schema validation with invalid data (should fail with appropriate errors)
- Verify email format validation works
- Test optional phone field validation
- Check that schema exports are usable in both client and server code

**Technical Notes:**
- Use Zod for schema definition
- Create separate schemas for each form type if needed
- Export schemas for use in React Hook Form and API routes
- Include appropriate error messages

---

### Story 5.4: Implement General Contact API Endpoint

As a user submitting the general contact form,
I want my form submission to be processed and sent to NCF,
So that they receive my inquiry.

**Acceptance Criteria:**

**Given** The validation schema exists
**When** I implement the general contact API endpoint
**Then** `app/api/contact/general/route.ts` exists
**And** Endpoint accepts POST requests with form data
**And** Endpoint validates input using validation schema
**And** Endpoint sanitizes user input
**And** Endpoint sends email via email service
**And** Endpoint returns success response on successful submission
**And** Endpoint returns error response with appropriate message on failure
**And** Endpoint handles errors gracefully

**Test Notes:**
- Verify API endpoint exists at `/api/contact/general`
- Test POST request with valid data (should return success)
- Test POST request with invalid data (should return validation errors)
- Test email is sent when form is submitted
- Test error handling (email service failure, network errors)
- Verify response format matches API specification
- Test rate limiting (if implemented)

**Technical Notes:**
- Use Next.js App Router API route pattern
- Implement server-side validation using Zod schema
- Sanitize input to prevent XSS
- Integrate with email service (Resend or SendGrid)
- Use environment variables for email service configuration
- Implement proper error handling and logging

---

### Story 5.5: Implement Partnership Inquiry API Endpoint

As a potential partner submitting the partnership inquiry form,
I want my form submission to be processed and sent to NCF,
So that they receive my partnership inquiry.

**Acceptance Criteria:**

**Given** The general contact API endpoint exists
**When** I implement the partnership inquiry API endpoint
**Then** `app/api/contact/partnership/route.ts` exists
**And** Endpoint accepts POST requests with form data
**And** Endpoint validates input using validation schema
**And** Endpoint sends email with partnership inquiry context
**And** Endpoint returns appropriate success/error responses
**And** Endpoint handles errors gracefully

**Test Notes:**
- Verify API endpoint exists at `/api/contact/partnership`
- Test POST request with valid data
- Test validation with invalid data
- Verify email includes partnership inquiry context
- Test error handling
- Verify response format

**Technical Notes:**
- Similar implementation to general contact endpoint
- Email should indicate it's a partnership inquiry
- May include additional fields if needed for partnership context

---

### Story 5.6: Implement Buyer Inquiry API Endpoint

As a fish buyer submitting the buyer inquiry form,
I want my form submission to be processed and sent to NCF,
So that they receive my buyer inquiry.

**Acceptance Criteria:**

**Given** The partnership inquiry API endpoint exists
**When** I implement the buyer inquiry API endpoint
**Then** `app/api/contact/buyer/route.ts` exists
**And** Endpoint accepts POST requests with form data
**And** Endpoint validates input using validation schema
**And** Endpoint sends email with buyer inquiry context
**And** Endpoint returns appropriate success/error responses
**And** Endpoint handles errors gracefully

**Test Notes:**
- Verify API endpoint exists at `/api/contact/buyer`
- Test POST request with valid data
- Test validation with invalid data
- Verify email includes buyer inquiry context
- Test error handling
- Verify response format

**Technical Notes:**
- Similar implementation to other contact endpoints
- Email should indicate it's a buyer inquiry
- May include additional fields if needed for buyer context

---

### Story 5.7: Integrate Email Service

As a developer,
I want email service integration implemented,
So that form submissions are reliably delivered to NCF via email.

**Acceptance Criteria:**

**Given** The API endpoints exist
**When** I integrate the email service
**Then** `lib/email.ts` exists with email service client
**And** Email service is configured using environment variables
**And** Email service sends formatted emails with form data
**And** Email service handles delivery failures gracefully
**And** Email service includes retry logic for transient failures
**And** Email service logs errors appropriately

**Test Notes:**
- Verify email.ts exists with email service integration
- Test email sending with valid form data
- Test email formatting (includes all form fields, properly formatted)
- Test error handling (invalid API key, network failures)
- Verify retry logic works for transient failures
- Check that environment variables are properly used
- Test that emails are delivered to correct recipient

**Technical Notes:**
- Use Resend or SendGrid SDK
- Store API key in environment variables
- Format emails with clear subject and body
- Include all form data in email
- Implement retry logic for transient failures
- Log errors for monitoring

---

### Story 5.8: Implement Form Submission Error Handling

As a user submitting a form,
I want clear feedback when submission succeeds or fails,
So that I know whether my inquiry was sent successfully.

**Acceptance Criteria:**

**Given** The forms and API endpoints exist
**When** I implement error handling
**Then** Forms display success message on successful submission
**And** Forms display error message on submission failure
**And** Forms show loading state during submission
**And** Forms prevent duplicate submissions
**And** Error messages are user-friendly and actionable
**And** Network errors are handled gracefully

**Test Notes:**
- Test successful form submission (verify success message displays)
- Test failed form submission (verify error message displays)
- Test loading state (button disabled, loading indicator)
- Test duplicate submission prevention
- Test network error handling (offline, timeout)
- Verify error messages are clear and helpful
- Test on mobile devices

**Technical Notes:**
- Use React Hook Form's submission state
- Display toast notifications or inline messages
- Disable submit button during submission
- Implement debouncing or state management to prevent duplicates
- Handle network errors with appropriate user feedback

---

## Epic 6: Responsive Design & Mobile Optimization

**Goal:** Ensure all pages and components are fully responsive and optimized for mobile devices, meeting the critical requirement for Uganda market where most users access via mobile.

**FRs Covered:** FR4.1, FR4.2, FR4.3, FR4.4
**NFRs Covered:** NFR5, NFR6, NFR7, NFR1, NFR2, NFR3, NFR4

### Story 6.1: Implement Mobile-First Responsive Design for All Pages

As a user accessing the website on a mobile device,
I want all pages to display correctly and be fully functional,
So that I can access all information regardless of device.

**Acceptance Criteria:**

**Given** All pages are implemented
**When** I implement mobile-first responsive design
**Then** All pages are fully functional on screen widths from 320px to 1920px (NFR5)
**And** All text is readable without zooming on mobile devices (NFR7)
**And** Touch targets are minimum 44x44px for mobile usability (NFR6)
**And** Navigation is accessible and functional on mobile
**And** Forms are usable on mobile devices
**And** Images and content adapt to screen size appropriately

**Test Notes:**
- Test all pages on mobile viewports (320px, 375px, 414px, 768px)
- Test all pages on tablet viewports (768px, 1024px)
- Test all pages on desktop viewports (1280px, 1920px)
- Verify text is readable without zooming
- Verify touch targets meet minimum size requirements
- Test navigation on mobile (hamburger menu works)
- Test forms on mobile (fields are accessible, buttons are tappable)
- Verify content doesn't overflow or break layout

**Technical Notes:**
- Use Tailwind CSS responsive utilities (mobile-first approach)
- Test on actual devices if possible
- Use browser DevTools responsive mode
- Ensure proper viewport meta tag
- Use flexible layouts (flexbox, grid)

---

### Story 6.2: Optimize Images for Mobile Performance

As a user on a mobile network,
I want images to load quickly,
So that pages don't take too long to load.

**Acceptance Criteria:**

**Given** All pages include images
**When** I optimize images for mobile
**Then** All images use Next.js Image component (NFR3)
**And** Images are served in appropriate formats (WebP when supported)
**And** Images are sized appropriately for device viewport
**And** Images have proper alt text for accessibility
**And** Image loading doesn't block page rendering
**And** Images load progressively (lazy loading where appropriate)

**Test Notes:**
- Verify all images use Next.js Image component
- Check Network tab to verify image formats (WebP, appropriate sizes)
- Test image loading on mobile viewport (verify correct sizes loaded)
- Verify images have alt text
- Test page load with images (should not block rendering)
- Check Lighthouse for image optimization recommendations
- Verify lazy loading works for below-fold images

**Technical Notes:**
- Use Next.js Image component with proper width/height
- Configure image optimization in next.config.js
- Use responsive image sizes
- Implement lazy loading for images below fold
- Ensure alt text for all images

---

### Story 6.3: Optimize Performance for Mobile Networks

As a user on a 3G mobile connection in Uganda,
I want pages to load quickly,
So that I don't experience long wait times.

**Acceptance Criteria:**

**Given** All pages are implemented
**When** I optimize for mobile network performance
**Then** Homepage loads within 3 seconds on 3G mobile connection (NFR1)
**And** All pages load within 3 seconds on 3G mobile connection (NFR2)
**And** Lighthouse performance score is 80+ on mobile for all pages (NFR4)
**And** JavaScript bundle is minimized
**And** CSS is optimized and purged
**And** Code splitting is implemented where beneficial

**Test Notes:**
- Run Lighthouse audit on all pages (mobile, 3G throttling)
- Verify all pages achieve 80+ performance score
- Test load times in Network tab (simulate 3G throttling)
- Check JavaScript bundle size (should be reasonable)
- Verify CSS is purged (no unused styles)
- Test on actual 3G connection if possible
- Check Core Web Vitals (LCP, FID, CLS)

**Technical Notes:**
- Use static generation (SSG) for all pages
- Minimize JavaScript bundle
- Implement code splitting if needed
- Optimize CSS (Tailwind purging)
- Use Next.js performance optimizations
- Consider using dynamic imports for heavy components

---

## Epic 7: Accessibility & Polish

**Goal:** Implement accessibility features, SEO optimization, and final polish to ensure the website meets WCAG standards, is discoverable, and provides a professional user experience.

**FRs Covered:** FR5.1, FR5.3
**NFRs Covered:** NFR14, NFR15, NFR16, NFR17, NFR18, NFR19

### Story 7.1: Implement Accessibility Features

As a user with disabilities,
I want the website to be accessible,
So that I can use all features regardless of my abilities.

**Acceptance Criteria:**

**Given** All pages and components are implemented
**When** I implement accessibility features
**Then** Website meets WCAG 2.1 Level AA basic compliance (NFR14)
**And** All images have descriptive alt text (NFR15)
**And** Website is fully navigable via keyboard (NFR16)
**And** Color contrast meets WCAG standards (NFR17)
**And** Form labels are properly associated with inputs
**And** ARIA labels are used where appropriate
**And** Focus indicators are visible and clear

**Test Notes:**
- Run Lighthouse accessibility audit (should score 90+)
- Test keyboard navigation (Tab, Shift+Tab, Enter, Space)
- Verify all images have alt text
- Test color contrast using contrast checker tools
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Verify form labels are properly associated
- Check focus indicators are visible
- Test ARIA attributes are correct

**Technical Notes:**
- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure proper heading hierarchy (h1, h2, h3)
- Implement skip navigation link
- Ensure focus management
- Test with actual screen readers
- Use accessibility testing tools

---

### Story 7.2: Implement SEO Optimization

As a potential user searching for NCF,
I want the website to be discoverable in search engines,
So that I can find NCF's website through search.

**Acceptance Criteria:**

**Given** All pages are implemented
**When** I implement SEO optimization
**Then** All pages have proper meta titles and descriptions
**And** Homepage has Open Graph tags for social sharing
**And** Website has a sitemap.xml
**And** Website has a robots.txt file
**And** URLs are SEO-friendly
**And** Content uses proper heading hierarchy
**And** Images have descriptive alt text (also helps SEO)

**Test Notes:**
- Verify meta tags on all pages (title, description)
- Test Open Graph tags (use Facebook Debugger or similar)
- Verify sitemap.xml exists and is accessible
- Verify robots.txt exists and is configured correctly
- Check URL structure (clean, descriptive)
- Verify heading hierarchy (h1, h2, h3 in order)
- Test with SEO tools (Google Search Console, etc.)

**Technical Notes:**
- Use Next.js metadata API for meta tags
- Generate sitemap.xml (can use next-sitemap or manual)
- Configure robots.txt
- Use semantic HTML for better SEO
- Ensure proper heading hierarchy
- Add structured data if beneficial (JSON-LD)

---

### Story 7.3: Implement Browser Compatibility

As a user with different browsers,
I want the website to work correctly in my browser,
So that I can access all features regardless of browser choice.

**Acceptance Criteria:**

**Given** All features are implemented
**When** I ensure browser compatibility
**Then** Website works on latest versions of Chrome, Safari, Firefox, Edge (NFR18)
**And** Website degrades gracefully on older browsers (NFR19)
**And** No critical JavaScript errors in supported browsers
**And** CSS displays correctly across browsers
**And** Forms function correctly in all browsers

**Test Notes:**
- Test website in Chrome (latest)
- Test website in Safari (latest)
- Test website in Firefox (latest)
- Test website in Edge (latest)
- Test on older browser versions (graceful degradation)
- Check for JavaScript console errors
- Verify CSS displays correctly
- Test forms in all browsers

**Technical Notes:**
- Use browser-compatible CSS (Tailwind handles this)
- Use polyfills if needed for older browsers
- Test on actual devices when possible
- Use browser testing tools (BrowserStack, etc.)
- Ensure JavaScript is compatible (modern but not cutting-edge)

---

### Story 7.4: Final Polish and Quality Assurance

As a user,
I want a polished, professional website,
So that NCF presents a high-quality image to all stakeholders.

**Acceptance Criteria:**

**Given** All features are implemented
**When** I perform final polish
**Then** All pages have consistent styling and branding
**And** All links are functional and point to correct destinations
**And** All forms work correctly
**And** No console errors or warnings
**And** Website is ready for production deployment
**And** Content is reviewed and accurate
**And** Images are high-quality and properly optimized

**Test Notes:**
- Review all pages for consistent styling
- Test all navigation links
- Test all forms end-to-end
- Check browser console for errors
- Verify production build works correctly
- Review content for accuracy
- Check image quality and optimization
- Perform final user acceptance testing

**Technical Notes:**
- Review code for consistency
- Ensure no console errors
- Test production build
- Verify environment variables are set
- Check deployment configuration
- Review content with stakeholders
- Final accessibility and performance audits

---

## Summary

### Epic Completion Checklist

- [ ] Epic 1: Project Foundation & Setup (4 stories)
- [ ] Epic 2: Core Layout & Navigation (3 stories)
- [ ] Epic 3: Homepage (4 stories)
- [ ] Epic 4: Content Pages (5 stories)
- [ ] Epic 5: Contact Forms & API (8 stories)
- [ ] Epic 6: Responsive Design & Mobile Optimization (3 stories)
- [ ] Epic 7: Accessibility & Polish (4 stories)

**Total Stories:** 31

### Implementation Priority

**Sprint 1 (Foundation):**
- Epic 1: Project Foundation & Setup
- Epic 2: Core Layout & Navigation

**Sprint 2 (Core Content):**
- Epic 3: Homepage
- Epic 4: Content Pages (partial)

**Sprint 3 (Forms & Functionality):**
- Epic 4: Content Pages (complete)
- Epic 5: Contact Forms & API

**Sprint 4 (Optimization & Polish):**
- Epic 6: Responsive Design & Mobile Optimization
- Epic 7: Accessibility & Polish

---

**Document Status:** v1.0 Complete
**Ready for:** Sprint Planning and Story Assignment

