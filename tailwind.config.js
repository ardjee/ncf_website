/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        water: {
          deep: '#1a3a52',
          medium: '#2d5a7a',
          light: '#4a7ca3',
          muted: '#7a9bb8',
        },
        sand: {
          warm: '#d4c5b0',
          light: '#e8ded0',
          stone: '#b8a893',
          deep: '#8b7a65',
        },
        charcoal: {
          DEFAULT: '#2c2c2c',
          light: '#4a4a4a',
          muted: '#6b6b6b',
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
      },
      fontFamily: {
        // Inter - Single typeface for everything
        // Use size and weight for hierarchy, not font family
        sans: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Large sizes for Inter headings - clean, modern
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
        'hero-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // 48px
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'section-md': ['2rem', { lineHeight: '1.25', letterSpacing: '0' }], // 32px
      },
      lineHeight: {
        // Generous line-heights for luxury feel
        'relaxed': '1.75',
        'comfortable': '1.7',
        'heading': '1.2',
        'hero': '1.1',
      },
      spacing: {
        // Generous spacing for luxury feel - whitespace does the work
        'section': '6rem', // 96px - large section spacing
        'section-lg': '8rem', // 128px - extra large section spacing
        'section-xl': '10rem', // 160px - maximum luxury spacing
      },
      letterSpacing: {
        'tight': '-0.02em', // Tighter for large Inter headings
        'heading': '-0.01em', // Slightly tighter for headings
      },
    },
  },
  plugins: [],
}

