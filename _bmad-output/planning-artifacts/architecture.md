# Architecture Document - NCF_website

**Author:** Ardjee (Architect: Winston)
**Date:** 2025-01-27
**Status:** v1.0 - Lean Architecture

## Executive Summary

This architecture document defines the technical design for the Nayuku Cage Fishing (NCF) website - a static marketing website with contact forms, optimized for mobile-first usage in Uganda. The architecture prioritizes simplicity, performance, and maintainability while meeting the professional presentation requirements.

**Architecture Type:** Static Site with Serverless Form Handling
**Complexity:** Low
**Hosting:** Vercel
**Framework:** Next.js 14+ (App Router)

---

## System Components

### Component Overview

The system consists of three main layers:

1. **Frontend Layer** - Static content pages (SSG)
2. **API Layer** - Serverless functions for form handling
3. **External Services** - Email delivery service

### Component Details

#### 1. Frontend Application (Next.js)

**Type:** Static Site Generation (SSG)
**Technology:** Next.js 14+ with App Router
**Purpose:** Serve static content pages

**Key Components:**
- **Pages/Routes:**
  - `/` - Homepage
  - `/about` - Company overview
  - `/products-services` - Products and services showcase
  - `/investment` - Investment opportunity information
  - `/contact` - Contact forms and information
  - `/team` - Team and credentials

- **Shared Components:**
  - `Header` - Navigation and site header
  - `Footer` - Site footer with contact info
  - `ContactForm` - Reusable form component (general, partnership, buyer variants)
  - `Hero` - Hero section component
  - `Section` - Content section wrapper
  - `Button` - Styled button component
  - `Image` - Optimized image component (Next.js Image)

- **Layout Components:**
  - `RootLayout` - Root layout with metadata
  - `PageLayout` - Standard page layout wrapper

**Responsibilities:**
- Render static content pages
- Handle client-side navigation
- Provide responsive UI across devices
- Optimize images and assets
- Implement accessibility features

#### 2. Form API Routes (Serverless Functions)

**Type:** Vercel Serverless Functions
**Technology:** Next.js API Routes
**Purpose:** Process form submissions and send emails

**Endpoints:**
- `POST /api/contact/general` - General contact form
- `POST /api/contact/partnership` - Partnership inquiry form
- `POST /api/contact/buyer` - Buyer inquiry form

**Responsibilities:**
- Validate form input
- Sanitize user data
- Send emails via email service
- Return appropriate responses
- Handle errors gracefully

**Implementation Pattern:**
```typescript
// Pseudo-structure
export async function POST(request: Request) {
  // 1. Validate input
  // 2. Sanitize data
  // 3. Send email via service
  // 4. Return success/error response
}
```

#### 3. Email Service Integration

**Type:** External Service
**Options:** Resend, SendGrid, or similar
**Purpose:** Deliver form submissions via email

**Responsibilities:**
- Receive form data from API routes
- Format email content
- Deliver emails to NCF team
- Handle delivery failures

**Integration Pattern:**
- API key stored in Vercel environment variables
- Service called from serverless functions
- No direct client-side access

---

## Data Model

### Data Flow

Since this is a static website with no database, the data model is minimal:

#### 1. Form Submission Data

**Structure:**
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  inquiryType: 'general' | 'partnership' | 'buyer';
  submittedAt: Date;
}
```

**Lifecycle:**
1. User fills form → Client-side validation
2. Submit → POST to API route
3. API route validates → Server-side validation
4. Email service receives → Formatted email sent
5. No persistence (stateless)

#### 2. Static Content Data

**Structure:**
- Content stored in code (React components, markdown, or JSON)
- No database queries
- Build-time generation

**Options:**
- **Option A:** Content in React components (simplest)
- **Option B:** Content in markdown files (better for non-developers)
- **Option C:** Content in JSON files (structured, easy to parse)

**Recommendation:** Start with Option A (components), migrate to Option B (markdown) if content updates become frequent.

#### 3. Configuration Data

**Environment Variables (Vercel):**
```
EMAIL_SERVICE_API_KEY=xxx
EMAIL_TO_ADDRESS=ncf@example.com
NEXT_PUBLIC_SITE_URL=https://ncf-website.vercel.app
```

**No Database Required:**
- No user accounts
- No content management
- No analytics storage (use external service if needed)
- No session management

---

## API Boundaries

### Internal API Boundaries

#### Frontend ↔ API Routes

**Boundary:** HTTP POST requests
**Protocol:** REST-like (simple POST endpoints)
**Data Format:** JSON
**Authentication:** None required (public forms)

**Request Format:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "message": "string"
}
```

**Response Format:**
```json
{
  "success": boolean,
  "message": "string",
  "errors": ["string"] (if validation fails)
}
```

#### API Routes ↔ Email Service

**Boundary:** HTTP API calls
**Protocol:** Service-specific (Resend/SendGrid API)
**Authentication:** API key (stored in env vars)
**Data Format:** Service-specific JSON

### External API Boundaries

#### Email Service

**Provider:** Resend (recommended) or SendGrid
**Integration:** REST API
**Authentication:** API key
**Rate Limits:** Provider-dependent (typically generous for this use case)

**No Other External APIs Required:**
- No payment processing
- No authentication services
- No content management APIs
- No analytics APIs (optional, can add later)

### API Design Principles

1. **Simplicity First** - No over-engineering
2. **Stateless** - No session management
3. **Validation** - Client and server-side validation
4. **Error Handling** - Graceful failures with user feedback
5. **Security** - Input sanitization, rate limiting (via Vercel)

---

## Architectural Decisions

### Decision 1: Static Site Generation (SSG)

**Decision:** Use Next.js Static Site Generation for all content pages

**Rationale:**
- Content is static (no dynamic data fetching)
- Optimal performance (pre-rendered HTML)
- Better SEO (fully rendered pages)
- Lower hosting costs (served from CDN)
- Fast load times on mobile networks (critical for Uganda market)

**Alternatives Considered:**
- Server-Side Rendering (SSR) - Unnecessary for static content
- Client-Side Rendering (CSR) - Poor SEO and initial load performance

**Impact:**
- All pages built at build time
- No runtime data fetching for content
- Instant page loads after initial load

### Decision 2: Serverless Functions for Forms

**Decision:** Use Vercel serverless functions for form handling

**Rationale:**
- No database needed (forms just send emails)
- Automatic scaling
- Cost-effective (pay per invocation)
- Integrated with Vercel hosting
- Simple deployment model

**Alternatives Considered:**
- Database + backend API - Overkill for simple forms
- Third-party form service (Typeform, etc.) - Less control, potential cost

**Impact:**
- Forms processed serverlessly
- No persistent storage needed
- Email delivery handled externally

### Decision 3: No Database

**Decision:** No database integration

**Rationale:**
- No user accounts or authentication
- No content management needed (content in code)
- No data persistence requirements
- Simplifies architecture significantly
- Reduces costs and complexity

**Alternatives Considered:**
- Headless CMS (Contentful, Strapi) - Unnecessary for MVP
- Database for form submissions - Not required, emails are sufficient

**Impact:**
- All content managed in code
- Form submissions not stored (only emailed)
- Future: Can add database if analytics or submission storage needed

### Decision 4: Next.js App Router

**Decision:** Use Next.js 14+ App Router (not Pages Router)

**Rationale:**
- Modern Next.js architecture
- Better performance optimizations
- Improved developer experience
- Better TypeScript support
- Optimal for Vercel hosting

**Alternatives Considered:**
- Pages Router - Older, less optimal
- Other frameworks (Remix, Astro) - Less ecosystem support

**Impact:**
- File-based routing in `app/` directory
- Server Components by default
- Modern React patterns

### Decision 5: Tailwind CSS

**Decision:** Use Tailwind CSS for styling

**Rationale:**
- Utility-first approach (fast development)
- Mobile-first responsive design built-in
- Small bundle size (purged unused styles)
- Consistent design system
- Excellent developer experience

**Alternatives Considered:**
- CSS Modules - More verbose, less consistent
- Styled Components - Runtime overhead
- Plain CSS - Slower development

**Impact:**
- Rapid UI development
- Consistent styling
- Easy responsive design
- Small CSS bundle

### Decision 8: Framer Motion

**Decision:** Use Framer Motion for animations and motion design

**Rationale:**
- Required by UI/UX guidelines for premium motion quality
- Supports intentional, slow, smooth animations
- Enables subtle parallax, fade + translate effects
- Delayed stagger animations for text blocks
- Respects reduced-motion preferences (accessibility)
- Centralized animation logic (per guidelines)
- Excellent easing curve control (ease-out, cubic-bezier)
- Seamless page transitions (soft fades)

**Alternatives Considered:**
- CSS animations - Less control, harder to coordinate
- React Spring - More complex API, overkill for needs
- No animations - Violates premium brand requirements

**Impact:**
- Premium motion quality matching Ikos Resorts benchmark
- Slow, intentional animations that guide attention
- Centralized animation patterns
- Accessibility-compliant motion

### Decision 6: Email Service Integration

**Decision:** Use external email service (Resend recommended)

**Rationale:**
- Reliable email delivery
- No email server management
- Simple API integration
- Good deliverability
- Cost-effective for low volume

**Alternatives Considered:**
- SMTP server - Requires server management
- Multiple services - Resend has good DX and pricing

**Impact:**
- Form submissions delivered via email
- No email infrastructure to maintain
- API key management via environment variables

### Decision 7: Mobile-First Design

**Decision:** Mobile-first responsive design approach

**Rationale:**
- Primary users in Uganda access via mobile
- PRD requirement (NFR5-NFR7)
- Better performance on mobile networks
- Progressive enhancement pattern

**Impact:**
- Design starts with mobile (320px+)
- Desktop is enhancement
- Touch-friendly interactions
- Optimized images for mobile

---

## Risks & Mitigations

### Risk 1: Form Spam

**Risk Level:** Medium
**Impact:** Inbox pollution, potential service abuse

**Mitigation:**
- Client-side validation (basic)
- Server-side validation (required)
- Rate limiting via Vercel (built-in)
- Honeypot fields (optional, can add)
- reCAPTCHA (optional, can add if needed)

**Monitoring:**
- Track form submission patterns
- Monitor email service usage
- Add additional protection if spam increases

### Risk 2: Email Delivery Failures

**Risk Level:** Low
**Impact:** Lost form submissions

**Mitigation:**
- Use reliable email service (Resend/SendGrid)
- Implement retry logic in API routes
- Error logging and alerting
- User feedback on submission status

**Monitoring:**
- Monitor email service status
- Track failed submissions
- Alert on delivery failures

### Risk 3: Mobile Network Performance

**Risk Level:** Medium
**Impact:** Poor user experience, high bounce rate

**Mitigation:**
- Optimize images (Next.js Image component)
- Code splitting and lazy loading
- Minimize JavaScript bundle
- Static generation (fast initial load)
- CDN delivery (Vercel Edge Network)

**Monitoring:**
- Lighthouse performance scores
- Real User Monitoring (RUM) if needed
- Test on actual 3G connections

### Risk 4: Content Update Complexity

**Risk Level:** Low (initially), Medium (long-term)
**Impact:** Slow content updates, developer dependency

**Mitigation:**
- Start with code-based content (fast MVP)
- Document content update process
- Future: Consider markdown files or headless CMS
- Clear content structure in components

**Future Consideration:**
- Migrate to markdown files if updates frequent
- Consider headless CMS if non-technical users need updates

### Risk 5: Vercel Platform Dependency

**Risk Level:** Low
**Impact:** Vendor lock-in, potential migration complexity

**Mitigation:**
- Next.js is portable (can deploy elsewhere)
- Standard serverless functions (portable pattern)
- No proprietary features used
- Keep deployment simple

**Note:** Low risk due to Next.js portability and standard patterns

### Risk 6: Accessibility Compliance

**Risk Level:** Low-Medium
**Impact:** Legal/compliance issues, user exclusion

**Mitigation:**
- Use semantic HTML
- Implement ARIA labels where needed
- Test with screen readers
- Validate color contrast
- Keyboard navigation testing
- Automated accessibility testing (Lighthouse)

**Monitoring:**
- Regular accessibility audits
- Lighthouse accessibility scores
- Manual testing with assistive technologies

---

## Technology Stack

### Core Framework
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript** (recommended)

### Styling
- **Tailwind CSS**
- **CSS Modules** (if needed for component-specific styles)

### Animation & Motion
- **Framer Motion** (for intentional, slow, smooth animations)

### Form Handling
- **React Hook Form** (client-side)
- **Zod** (validation schema)
- **Next.js API Routes** (server-side)

### Email Service
- **Resend** (recommended) or **SendGrid**
- **Nodemailer** (if using SMTP directly, not recommended)

### Image Optimization
- **Next.js Image Component** (built-in)

### Deployment
- **Vercel** (hosting platform)
- **Git** (version control and deployment trigger)

### Development Tools
- **ESLint** (code quality)
- **Prettier** (code formatting)
- **TypeScript** (type safety)

---

## Project Structure

```
ncf-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── products-services/
│   │   └── page.tsx
│   ├── investment/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           ├── general/
│           │   └── route.ts     # General contact API
│           ├── partnership/
│           │   └── route.ts     # Partnership API
│           └── buyer/
│               └── route.ts      # Buyer inquiry API
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Button.tsx
│   │   ├── Hero.tsx
│   │   └── Section.tsx
│   └── layout/
│       └── PageLayout.tsx
├── lib/                         # Utilities
│   ├── email.ts                 # Email service client
│   ├── validation.ts           # Form validation schemas
│   └── utils.ts                 # General utilities
├── public/                      # Static assets
│   ├── images/
│   └── favicon.ico
├── styles/                      # Global styles
│   └── globals.css              # Tailwind imports
├── .env.local                   # Local environment variables
├── .env.example                 # Example env file
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
└── README.md
```

---

## Implementation Sequence

### Phase 1: Foundation
1. Initialize Next.js project with App Router
2. Set up Tailwind CSS
3. Configure TypeScript
4. Set up basic project structure
5. Create root layout and navigation

### Phase 2: Core Pages
1. Implement homepage
2. Implement About page
3. Implement Products & Services page
4. Implement Investment page
5. Implement Contact page
6. Implement Team page

### Phase 3: Forms & API
1. Create ContactForm component
2. Implement form validation (client-side)
3. Create API routes for form submissions
4. Integrate email service
5. Add server-side validation
6. Implement error handling

### Phase 4: Polish & Optimization
1. Optimize images
2. Implement responsive design
3. Add accessibility features
4. Performance optimization
5. SEO optimization
6. Testing and bug fixes

---

## Constraints & Assumptions

### Constraints
- **Hosting:** Must use Vercel
- **No Database:** Architecture must work without database
- **Mobile-First:** Must prioritize mobile experience
- **Static Content:** Content managed in code (initially)
- **Simple Forms:** No complex form workflows

### Assumptions
- Content will be provided by NCF team
- Images will be provided and optimized
- Email service account will be set up
- Domain will be configured on Vercel
- No real-time updates needed
- Low to moderate traffic initially

---

## Future Considerations

### Potential Enhancements
1. **Content Management**
   - Migrate to markdown files for easier updates
   - Consider headless CMS if non-technical updates needed

2. **Analytics**
   - Add analytics service (Google Analytics, Plausible, etc.)
   - Track form submission success rates

3. **Form Enhancements**
   - Add honeypot spam protection
   - Add reCAPTCHA if spam becomes issue
   - Store form submissions in database (if needed)

4. **Performance**
   - Add service worker for offline support (PWA)
   - Implement advanced caching strategies

5. **Internationalization**
   - Multi-language support if expanding beyond Uganda
   - RTL support if needed

---

## Success Metrics

### Technical Metrics
- Lighthouse Performance Score: 80+ on mobile
- Page Load Time: < 3 seconds on 3G
- Form Submission Success Rate: > 95%
- Uptime: 99%+

### Business Metrics
- User engagement (time on site, pages per session)
- Form submission rates
- Mobile vs desktop usage
- Geographic distribution of users

---

**Document Status:** v1.0 Complete
**Next Steps:**
1. Review architecture with team
2. Set up development environment
3. Begin Phase 1 implementation
4. Proceed to UX Design (if not already done)

