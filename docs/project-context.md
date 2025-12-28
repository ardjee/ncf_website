# Project Context - NCF Website

**Project:** NCF Website
**Created:** 2025-01-27
**Purpose:** Technical implementation context for AI agents

## Design & Content References

### Style Inspiration
- **Reference URL:** [To be provided]
- **Documentation:** See `docs/design-references.md` for detailed analysis

### Existing Content Source
- **Existing Website:** [URL or location]
- **Content Inventory:** See `docs/design-references.md`

## Implementation Rules

### Design System
- Use CSS Modules for component styling (until Tailwind is configured in Story 1.2)
- Follow mobile-first responsive design
- Mobile-first approach (320px+)
- Touch targets minimum 44x44px
- **CRITICAL:** Follow UI/UX Design System & Motion Guidelines exactly as specified in `docs/design-references.md`
- Implement premium, luxury-first design (minimalist, calm, credible, expensive feel)
- Use Framer Motion for all animations (intentional, slow, smooth)
- Reference: Ikos Resorts website for motion quality, spacing discipline, typography restraint

### Content Management
- Content currently in React components (will migrate to markdown if needed)
- Images: Use Next.js Image component for optimization
- All images require alt text for accessibility

### Component Patterns
- Use semantic HTML
- Implement ARIA labels for accessibility
- Keyboard navigation support required
- Responsive design required for all components

### Code Standards
- TypeScript strict mode
- ESLint with Next.js rules
- CSS Modules for component styles
- Server Components by default (use 'use client' only when needed)

## Current Implementation Status

- ✅ Story 1.1: Next.js project initialized
- ✅ Epic 2: Core Layout & Navigation complete
- 🔄 Next: Story 1.2 (Tailwind CSS) or Epic 3 (Homepage)

## Design Reference Integration

When implementing components:
1. Check `docs/design-references.md` for style patterns
2. Reference existing content for text and structure
3. Adapt style reference patterns to match NCF brand
4. Ensure mobile-first responsive implementation

