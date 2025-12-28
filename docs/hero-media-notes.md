# Hero Section - Adding Image or Video

## Current Setup

The hero section currently uses a gradient background (water color palette) as a placeholder. It's structured to easily accept either a background image or video.

## To Add a Background Image

1. **Place your image** in `public/images/hero-image.jpg` (or `.png`, `.webp`)

2. **Uncomment and update** the Image component in `app/page.tsx`:

```tsx
<div className="absolute inset-0 z-0">
  <Image
    src="/images/hero-image.jpg"
    alt="Nayuku Cage Fishing - Aquaculture operations"
    fill
    className="object-cover"
    priority
    sizes="100vw"
    quality={90}
  />
  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-charcoal/30"></div>
</div>
```

3. **Remove** the gradient background div (or replace it)

## To Add a Background Video

Replace the background div with a video element:

```tsx
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    aria-label="Nayuku Cage Fishing aquaculture operations"
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    {/* Fallback image if video doesn't load */}
    <Image
      src="/images/hero-fallback.jpg"
      alt="Nayuku Cage Fishing - Aquaculture operations"
      fill
      className="object-cover"
      priority
    />
  </video>
  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-charcoal/30"></div>
</div>
```

**Video Requirements (per design guidelines):**
- Soft movement
- Natural light
- No sudden cuts
- Autoplay, muted, loop
- Fallback image for older browsers

## Image Specifications

**Recommended:**
- Format: WebP (with JPG fallback) or high-quality JPG
- Dimensions: 1920x1080px minimum (or larger)
- Aspect Ratio: 16:9 (landscape)
- File Size: Optimized for web (< 500KB if possible)

## Video Specifications

**Recommended:**
- Format: MP4 (H.264 codec)
- Dimensions: 1920x1080px
- Duration: 30-60 seconds (looped)
- File Size: Optimized (< 5MB if possible)
- Frame Rate: 24-30fps

## Design Guidelines

- Images/videos must feel documentary-grade, not stock
- Large, cinematic visuals
- Overlay ensures text readability (charcoal/30 opacity)
- Text color changes to white when image/video is present

