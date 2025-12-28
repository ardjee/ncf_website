# Design References & Content Sources

**Project:** NCF Website
**Created:** 2025-01-27
**Purpose:** Document existing website content and style inspiration for implementation reference

---

# UI / UX DESIGN SYSTEM & MOTION GUIDELINES

**Brand goal:** Nayuku Cage Fishing must feel premium, credible, calm, and expensive.
**Reference benchmark:** Ikos Resorts website (motion quality, spacing discipline, typography restraint).

## Overall Experience

- Minimalist, luxury-first design — nothing decorative without purpose
- Calm confidence, not salesy
- Design must feel international, professional, and investment-grade
- Visual hierarchy > decoration
- Fewer elements, more space

## Layout & Composition

- Large sections with generous vertical spacing
- Strong alignment grids; no visual clutter
- Content breathes — white space is intentional and luxurious
- Avoid boxed layouts; prefer full-width sections with controlled inner max-width

## Typography

- Use high-quality serif + modern sans-serif pairing
- Headlines: elegant serif, large size, loose line-height
- Body text: clean sans-serif, medium weight, high readability
- Letter spacing slightly increased on headings
- Never use more than 2 typefaces

**Tone:**
- Confident
- Understated
- No marketing hype language

## Color & Materials

- Muted, natural palette inspired by:
  - Deep water blues
  - Warm sand / stone neutrals
  - Subtle charcoal for text
- Avoid bright colors and hard contrasts
- No gradients unless extremely subtle
- Backgrounds feel matte, not glossy

## Imagery & Video

- Large, cinematic visuals
- Slow, deliberate transitions
- Prefer video hero sections with:
  - Soft movement
  - Natural light
  - No sudden cuts
- Images must feel documentary-grade, not stock

## Motion & Animation (CRITICAL)

Animation quality is what separates "nice" from "expensive".

**Rules:**
- Motion must feel intentional, slow, and smooth
- Never flashy, never fast
- Animations guide attention, not entertain

**Use:**
- Subtle parallax on scroll
- Fade + translate (Y-axis) for section entrances
- Delayed stagger animations for text blocks
- Easing curves: ease-out, cubic-bezier, no linear motion

**Avoid:**
- Bouncy animations
- Overlapping effects
- Hover gimmicks

**Hover states:**
- Minimal
- Soft opacity shifts or underline reveals
- No scaling or bouncing

## Navigation & Interaction

- Clean, restrained navigation
- Sticky header with subtle background fade on scroll
- Menu feels solid and composed
- Transitions between pages feel seamless (soft fades)

## Components

**Buttons:**
- Minimal styling
- No heavy borders
- Clear but understated call-to-action

**Cards:**
- Rarely used
- When used: flat, no shadows, plenty of padding

**Forms:**
- Minimal fields
- Elegant labels
- Calm focus states

## Accessibility & Quality

- Typography contrast always readable
- Motion must respect reduced-motion preferences
- Animations must never block content understanding

## Technical Direction

Design must be feasible in:
- Next.js
- Tailwind CSS
- Framer Motion

Components should be reusable and consistent
Animation logic centralized, not ad-hoc

---

## Style Reference Website

**URL:** [To be provided by user]

**What to capture:**
- Visual design patterns (colors, typography, spacing)
- Layout structures and component patterns
- Navigation and interaction patterns
- Responsive design approach
- Overall aesthetic and feel

**Analysis Notes:**
- [To be filled after URL provided]

---

## Existing Website Content

**Source:** [URL or location of existing website]

### Text Content

#### Homepage
- [Content sections to be extracted]

#### About Page
- [Content to be extracted]

#### Products & Services
- [Content to be extracted]

#### Investment Information
- [Content to be extracted]

#### Contact Information
- Email: [To be extracted]
- Phone: [To be extracted]
- Location: [To be extracted]

#### Team/Credentials
- [Content to be extracted]

### Images & Assets

#### Images Needed
- [List of images from existing site]
- [Image descriptions and where they're used]

#### Image Locations
- [Where images are stored or can be accessed]

---

## Implementation Notes

### Design System Integration
- How style reference influences our design choices
- Which patterns to adopt vs adapt
- Brand consistency considerations

### Content Migration
- Which content to keep as-is
- Which content needs updating
- Content gaps to fill

### Technical Considerations
- Image optimization requirements
- Responsive image handling
- Content structure decisions

---

## Next Steps

1. [ ] Provide style reference URL
2. [ ] Extract existing website content
3. [ ] Analyze style reference with UX Designer agent
4. [ ] Document design patterns to adopt
5. [ ] Create content inventory
6. [ ] Plan content integration into components

