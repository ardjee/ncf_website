---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-mvp', 'step-09-functional', 'step-10-nonfunctional', 'step-11-complete']
inputDocuments: []
workflowType: 'prd'
lastStep: 11
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 0
project_type: web_app
domain: general
complexity_level: low
field_type: greenfield
---

# Product Requirements Document - NCF_website

**Author:** Ardjee
**Date:** 2025-01-27

## Executive Summary

Nayuku Cage Fishing (NCF) requires a professional, high-quality website to communicate its business propositions to three key audiences: potential investors, companies seeking partnerships, and fish buyers. The website serves as the primary digital presence for NCF, showcasing the company's solid market position, products, and services in the Ugandan aquaculture industry.

### What Makes This Special

The website differentiates NCF by presenting a professional, engaging, and trustworthy image that builds confidence across all stakeholder groups. For investors, it demonstrates a well-structured company in an attractive market with controlled risk. For partners and buyers, it provides clear information about products and services with easy access to contact information.

## Project Classification

**Technical Type:** Web Application (Static/Marketing Website)
**Domain:** General Business / Aquaculture
**Complexity:** Low
**Project Context:** Greenfield - new project

**Key Characteristics:**
- Marketing/Informational website (no e-commerce)
- Mobile-first responsive design (critical for Uganda market)
- Static content with contact forms
- Professional presentation focus
- Hosting: Vercel

## Success Criteria

### Primary Success Metrics

1. **Investor Confidence**
   - Investors can clearly understand NCF's market position and investment opportunity
   - Risk factors are transparently communicated
   - Company credibility is established through professional presentation

2. **Partnership Engagement**
   - Potential partners can easily identify relevant products/services
   - Clear contact pathways for partnership inquiries
   - Service offerings (fresh tilapia, fingerling production, feed production) are clearly presented

3. **Buyer Accessibility**
   - Fish buyers (large and small) can quickly find product information
   - Contact information is easily accessible
   - Product offerings are clearly communicated

### Quality Success Indicators

- Professional, attractive, engaging visual design
- High-quality content presentation
- Mobile-responsive across all devices
- Fast load times on mobile networks
- Easy navigation and information discovery

## User Journeys

### Journey 1: Potential Investor

**Goal:** Evaluate NCF as an investment opportunity

**Steps:**
1. Land on homepage → See professional presentation
2. Navigate to "Investment Opportunity" or "About" section
3. Review market attractiveness information
4. Review company structure and risk management
5. Review financial/operational highlights
6. Contact for further discussion

**Success:** Investor understands market opportunity and company stability

### Journey 2: Potential Partner Company

**Goal:** Identify partnership opportunities and contact NCF

**Steps:**
1. Land on homepage
2. Navigate to "Products & Services" section
3. Review offerings (fresh tilapia, fingerling production, feed production)
4. Understand how services align with their needs
5. Navigate to contact section
6. Submit inquiry or contact directly

**Success:** Partner understands offerings and initiates contact

### Journey 3: Fish Buyer (Large or Small)

**Goal:** Find product information and contact details

**Steps:**
1. Land on homepage
2. Navigate to "Products" or "What We Sell" section
3. Review available products
4. Find contact information
5. Contact via provided channels

**Success:** Buyer finds product information and contact details quickly

## Domain Requirements

**Domain:** General Business / Aquaculture

**Key Considerations:**
- Uganda market context (mobile-first usage patterns)
- No specific regulatory compliance requirements
- Standard business website requirements
- Professional presentation standards

## Innovation Patterns

**Approach:** Professional, high-quality presentation with focus on clarity and engagement rather than complex features.

**Key Differentiators:**
- Clean, modern design that builds trust
- Mobile-optimized experience for Uganda market
- Clear information architecture for diverse audiences
- Professional visual presentation

## Project-Type Requirements

**Type:** Web Application (Static/Marketing Website)

**Key Requirements:**
- Browser support: Modern browsers (Chrome, Safari, Firefox, Edge)
- Responsive design: Mobile-first approach
- SEO considerations for discoverability
- Performance: Fast load times on mobile networks
- Accessibility: Basic WCAG compliance for broad reach

**Technology Stack Recommendations:**
- Framework: Next.js (optimal for Vercel hosting)
- Styling: Modern CSS framework (Tailwind CSS or similar)
- Forms: Serverless form handling (Vercel serverless functions)
- No database required (static content + form submissions)

## MVP Scope

### Core Features (Must Have)

1. **Homepage**
   - Professional hero section
   - Clear value proposition
   - Navigation to key sections

2. **About/Company Overview**
   - Company background and mission
   - Market position information
   - Company credentials and achievements

3. **Products & Services**
   - Fresh tilapia offerings
   - Fingerling production services
   - Feed production services
   - Clear presentation of each offering

4. **Investment Information** (for investors)
   - Market opportunity overview
   - Company structure and stability
   - Risk management approach
   - Investment proposition

5. **Contact/Inquiry Forms**
   - Contact form for general inquiries
   - Partnership inquiry form
   - Buyer inquiry form
   - Contact information display (phone, email, location)

6. **Team/Company Credentials**
   - Leadership/team information
   - Company achievements
   - Certifications or credentials

### Out of Scope

- E-commerce functionality
- User accounts or login systems
- Database integration
- Complex integrations
- Payment processing
- Inventory management

## Functional Requirements

### FR1: Content Display
- **FR1.1:** Website displays company overview information
- **FR1.2:** Website displays products and services information
- **FR1.3:** Website displays investment opportunity information
- **FR1.4:** Website displays team/company credentials
- **FR1.5:** Website displays contact information

### FR2: Navigation
- **FR2.1:** Users can navigate between main sections via navigation menu
- **FR2.2:** Users can access all key sections from homepage
- **FR2.3:** Navigation is accessible on mobile devices

### FR3: Contact & Inquiry
- **FR3.1:** Users can submit general contact inquiries via form
- **FR3.2:** Users can submit partnership inquiries via form
- **FR3.3:** Users can submit buyer inquiries via form
- **FR3.4:** Users can access contact information (phone, email, location)
- **FR3.5:** Form submissions are processed and delivered to NCF

### FR4: Responsive Design
- **FR4.1:** Website displays correctly on mobile devices
- **FR4.2:** Website displays correctly on tablets
- **FR4.3:** Website displays correctly on desktop browsers
- **FR4.4:** Content is readable and accessible on all device sizes

### FR5: Professional Presentation
- **FR5.1:** Website presents professional visual design
- **FR5.2:** Website uses high-quality imagery and graphics
- **FR5.3:** Website maintains consistent branding throughout
- **FR5.4:** Content is well-organized and easy to scan

### FR6: Premium UI/UX Design System
- **FR6.1:** Website implements minimalist, luxury-first design (nothing decorative without purpose)
- **FR6.2:** Website uses large sections with generous vertical spacing
- **FR6.3:** Website uses high-quality serif + modern sans-serif typography pairing (max 2 typefaces)
- **FR6.4:** Website uses muted, natural color palette (deep water blues, warm sand/stone neutrals, subtle charcoal)
- **FR6.5:** Website implements intentional, slow, smooth motion animations (never flashy or fast)
- **FR6.6:** Website uses subtle parallax on scroll
- **FR6.7:** Website implements fade + translate (Y-axis) for section entrances
- **FR6.8:** Website implements delayed stagger animations for text blocks
- **FR6.9:** Website uses ease-out and cubic-bezier easing curves (no linear motion)
- **FR6.10:** Website implements clean, restrained navigation with sticky header
- **FR6.11:** Website implements seamless page transitions (soft fades)
- **FR6.12:** Website implements minimal button styling (no heavy borders)
- **FR6.13:** Website implements minimal hover states (soft opacity shifts or underline reveals, no scaling or bouncing)
- **FR6.14:** Website respects reduced-motion preferences for accessibility

## Non-Functional Requirements

### Performance

- **NFR1:** Homepage must load within 3 seconds on 3G mobile connection
- **NFR2:** All pages must load within 3 seconds on 3G mobile connection
- **NFR3:** Images must be optimized for fast loading on mobile networks
- **NFR4:** Website must achieve Lighthouse performance score of 80+ on mobile

### Responsiveness

- **NFR5:** Website must be fully functional and readable on screen widths from 320px to 1920px
- **NFR6:** Touch targets must be minimum 44x44px for mobile usability
- **NFR7:** Text must be readable without zooming on mobile devices

### Reliability

- **NFR8:** Website must have 99% uptime (Vercel hosting provides this)
- **NFR9:** Form submissions must be reliably delivered
- **NFR10:** Website must handle form submission errors gracefully

### Security

- **NFR11:** Contact forms must prevent spam submissions (basic validation)
- **NFR12:** Website must use HTTPS (Vercel default)
- **NFR13:** Form data must be transmitted securely

### Accessibility

- **NFR14:** Website must meet WCAG 2.1 Level AA basic compliance
- **NFR15:** All images must have alt text
- **NFR16:** Website must be navigable via keyboard
- **NFR17:** Color contrast must meet WCAG standards
- **NFR21:** Motion must respect reduced-motion preferences (prefers-reduced-motion media query)
- **NFR22:** Animations must never block content understanding

### Browser Compatibility

- **NFR18:** Website must work on latest versions of Chrome, Safari, Firefox, Edge
- **NFR19:** Website must degrade gracefully on older browsers

### Hosting

- **NFR19:** Website must be hosted on Vercel
- **NFR20:** Deployment must be automated via Git integration

## Technical Architecture Recommendations

### Technology Stack

- **Framework:** Next.js 14+ (App Router recommended for Vercel optimization)
- **Styling:** Tailwind CSS or similar utility-first framework
- **Animation:** Framer Motion (required for premium motion quality per UI/UX guidelines)
- **Forms:** React Hook Form + serverless API routes
- **Form Handling:** Email service integration (Resend, SendGrid, or similar)
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel (automatic from Git)

### Architecture Approach

- Static site generation (SSG) for content pages
- Serverless functions for form submissions
- No database required
- Content managed through code (or future CMS integration if needed)

## Content Requirements

### Required Content Sections

1. **Homepage**
   - Hero section with value proposition
   - Key highlights/features
   - Call-to-action buttons

2. **About/Company**
   - Company history and mission
   - Market position
   - Company values

3. **Products & Services**
   - Fresh tilapia details
   - Fingerling production information
   - Feed production information
   - Product specifications (if applicable)

4. **Investment Opportunity** (for investors)
   - Market overview
   - Company structure
   - Risk management
   - Investment proposition

5. **Contact**
   - Contact forms (general, partnership, buyer)
   - Contact information display
   - Location/map (if applicable)

6. **Team/Credentials**
   - Leadership information
   - Company achievements
   - Certifications

## Future Considerations

### Potential Enhancements (Post-MVP)

- Content Management System (CMS) integration for easier content updates
- Multi-language support (if expanding beyond Uganda)
- Blog/news section for company updates
- Photo gallery for facilities/products
- Testimonials section
- Social media integration

## Assumptions & Dependencies

### Assumptions

- Content will be provided by NCF team
- Images/photos will be provided by NCF team
- Contact form submissions will be handled via email
- No real-time data updates required

### Dependencies

- Vercel hosting account
- Email service for form submissions
- Domain name configuration
- SSL certificate (provided by Vercel)

## UI/UX Design System Requirements

**Reference:** See `docs/design-references.md` for complete UI/UX Design System & Motion Guidelines

**Key Requirements:**
- Brand goal: Premium, credible, calm, and expensive feel
- Reference benchmark: Ikos Resorts website (motion quality, spacing discipline, typography restraint)
- Minimalist, luxury-first design — nothing decorative without purpose
- Calm confidence, not salesy
- Design must feel international, professional, and investment-grade
- Visual hierarchy > decoration
- Fewer elements, more space

**Critical Motion Principles:**
- Motion must feel intentional, slow, and smooth
- Never flashy, never fast
- Animations guide attention, not entertain
- Use: subtle parallax, fade + translate (Y-axis), delayed stagger animations
- Easing: ease-out, cubic-bezier, no linear motion
- Avoid: bouncy animations, overlapping effects, hover gimmicks
- Respect reduced-motion preferences

**Technical Implementation:**
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (required for motion quality)

## Open Questions

1. Specific content for each section (to be provided by NCF)
2. Branding guidelines (colors, fonts, logo) - See UI/UX guidelines for design direction
3. Preferred contact method for form submissions (email, SMS, etc.)
4. Specific product details and pricing (if to be displayed)
5. Location/address information for contact section

---

**Document Status:** v1.0 Complete
**Next Steps:** 
1. Review and refine content requirements with NCF team
2. Gather branding assets and content
3. Proceed to UX Design phase
4. Proceed to Architecture phase

