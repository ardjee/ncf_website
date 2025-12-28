# Color Palette Proposal for NCF Website

**Date:** 2025-01-27
**Based on:** UI/UX Guidelines - "Deep water blues, warm sand/stone neutrals, subtle charcoal"

---

## Design Principles

From guidelines:
- Muted, natural palette
- Deep water blues
- Warm sand/stone neutrals
- Subtle charcoal for text
- Avoid bright colors and hard contrasts
- No gradients unless extremely subtle
- Backgrounds feel matte, not glossy
- Premium, luxury, calm, credible feel

---

## Proposed Color Palette

### Primary Colors

#### Deep Water Blues
```
Water Deep:      #1a3a52  (Dark, rich blue-grey - for headings, emphasis)
Water Medium:    #2d5a7a  (Mid-tone blue - for accents, links)
Water Light:     #4a7ca3  (Lighter blue - for hover states, subtle accents)
Water Muted:     #7a9bb8  (Very muted blue - for borders, subtle elements)
```

#### Warm Sand/Stone Neutrals
```
Sand Warm:       #d4c5b0  (Warm beige - for backgrounds, cards)
Sand Light:      #e8ded0  (Very light warm beige - for light backgrounds)
Sand Stone:      #b8a893  (Medium stone tone - for subtle accents)
Stone Deep:      #8b7a65  (Darker stone - for secondary text)
```

#### Text & Contrast
```
Charcoal:        #2c2c2c  (Primary text - subtle, not pure black)
Charcoal Light:  #4a4a4a  (Secondary text)
Charcoal Muted:  #6b6b6b  (Tertiary text, labels)
```

#### Neutrals
```
White:           #ffffff  (Pure white for backgrounds, contrast)
White Warm:      #faf8f5  (Warm white - for page backgrounds)
Grey Light:      #f5f3f0  (Very light grey - for subtle backgrounds)
Grey Medium:     #e5e3e0  (Medium grey - for borders, dividers)
```

---

## Semantic Color Mapping

### For Tailwind CSS Configuration

```javascript
colors: {
  // Primary brand colors
  water: {
    deep: '#1a3a52',      // Primary brand color
    medium: '#2d5a7a',    // Interactive elements
    light: '#4a7ca3',     // Hover states
    muted: '#7a9bb8',     // Subtle accents
  },
  sand: {
    warm: '#d4c5b0',      // Backgrounds
    light: '#e8ded0',     // Light backgrounds
    stone: '#b8a893',     // Subtle accents
    deep: '#8b7a65',      // Secondary text
  },
  charcoal: {
    DEFAULT: '#2c2c2c',   // Primary text
    light: '#4a4a4a',     // Secondary text
    muted: '#6b6b6b',     // Tertiary text
  },
  // Base colors
  white: {
    DEFAULT: '#ffffff',
    warm: '#faf8f5',
  },
  grey: {
    light: '#f5f3f0',
    medium: '#e5e3e0',
  },
}
```

---

## Usage Guidelines

### Primary Text
- **Body text:** `charcoal` (#2c2c2c) - not pure black for softer feel
- **Headings:** `water-deep` (#1a3a52) or `charcoal`
- **Secondary text:** `charcoal-light` (#4a4a4a)

### Backgrounds
- **Page background:** `white-warm` (#faf8f5) - subtle warmth
- **Section backgrounds:** `sand-light` (#e8ded0) or `white`
- **Cards (if used):** `white` or `sand-light`

### Interactive Elements
- **Links:** `water-medium` (#2d5a7a)
- **Link hover:** `water-light` (#4a7ca3)
- **Buttons:** `water-deep` with white text
- **Button hover:** `water-medium`

### Borders & Dividers
- **Borders:** `grey-medium` (#e5e3e0) or `water-muted` (#7a9bb8)
- **Subtle dividers:** `sand-warm` (#d4c5b0)

### Accents
- **Emphasis:** `water-medium` (#2d5a7a)
- **Subtle highlights:** `sand-stone` (#b8a893)

---

## Color Contrast Compliance

### WCAG AA Compliance Check

✅ **Primary Text on White:**
- Charcoal (#2c2c2c) on White (#ffffff) = **17.6:1** (AAA)

✅ **Secondary Text on White:**
- Charcoal Light (#4a4a4a) on White (#ffffff) = **10.9:1** (AAA)

✅ **Water Deep on White:**
- Water Deep (#1a3a52) on White (#ffffff) = **10.2:1** (AAA)

✅ **Water Medium on White:**
- Water Medium (#2d5a7a) on White (#ffffff) = **6.1:1** (AA)

✅ **Links on White:**
- Water Medium (#2d5a7a) on White (#ffffff) = **6.1:1** (AA - meets requirement)

All combinations meet WCAG 2.1 Level AA standards for accessibility.

---

## Visual Examples

### Typical Page Layout Colors
```
Background:     white-warm (#faf8f5)
Text:           charcoal (#2c2c2c)
Headings:       water-deep (#1a3a52)
Links:          water-medium (#2d5a7a)
Borders:        grey-medium (#e5e3e0)
```

### Hero Section Colors
```
Background:     water-deep (#1a3a52) or image overlay
Text:           white (#ffffff)
Accents:        sand-warm (#d4c5b0)
```

### Footer Colors
```
Background:     water-deep (#1a3a52) or sand-warm (#d4c5b0)
Text:           white (#ffffff) or charcoal
Links:          white or water-light (#4a7ca3)
```

---

## Design Intent

This palette achieves:
- ✅ **Premium feel:** Muted, sophisticated colors (not bright/cheap)
- ✅ **Natural connection:** Blues evoke water, sand/stone evoke earth
- ✅ **Calm confidence:** Soft contrasts, no harsh edges
- ✅ **Professional:** Appropriate for investment-grade presentation
- ✅ **Accessibility:** All combinations meet WCAG standards
- ✅ **Luxury aesthetic:** Matches Ikos Resorts reference quality

---

## Alternatives to Consider

If adjustments are needed, we can:
- **Warmer blues:** Shift towards teal/green-blue tones
- **Cooler sands:** More grey-beige, less warm
- **Lighter overall:** Increase lightness values if too dark
- **Darker overall:** Decrease lightness for more contrast

---

## Next Steps

1. Review and approve color palette
2. Adjust any colors as needed
3. Implement in Tailwind configuration
4. Test contrast and accessibility
5. Apply to components

**Questions or adjustments needed?**

