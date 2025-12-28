/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is the default in Next.js 14+
  
  // Image optimization configuration
  images: {
    // Enable modern image formats (AVIF and WebP) for better compression
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images (optimized for mobile-first)
    // These sizes are used for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints (used when fill prop is not used)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 60 seconds
    minimumCacheTTL: 60,
  },
  
  // Enable gzip compression for all responses
  compress: true,
  
  // Note: SWC minification is enabled by default in Next.js 16+ and cannot be disabled
}

module.exports = nextConfig

