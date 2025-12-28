'use client'

import { useState } from 'react'

type FontPairing = {
  id: string
  name: string
  serif: { name: string; weights: string }
  sans: { name: string; weights: string }
  serifLink: string
  sansLink: string
}

const fontPairings: FontPairing[] = [
  {
    id: 'playfair-inter',
    name: 'Playfair Display + Inter',
    serif: { name: 'Playfair Display', weights: '400,500,600,700' },
    sans: { name: 'Inter', weights: '400,500,600' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
  },
  {
    id: 'lora-source',
    name: 'Lora + Source Sans Pro',
    serif: { name: 'Lora', weights: '400,500,600,700' },
    sans: { name: 'Source Sans Pro', weights: '400,600' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap',
  },
  {
    id: 'crimson-text-open',
    name: 'Crimson Text + Open Sans',
    serif: { name: 'Crimson Text', weights: '400,600,700' },
    sans: { name: 'Open Sans', weights: '400,600' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap',
  },
  {
    id: 'merriweather-raleway',
    name: 'Merriweather + Raleway',
    serif: { name: 'Merriweather', weights: '400,700' },
    sans: { name: 'Raleway', weights: '400,500,600' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap',
  },
  {
    id: 'libre-baskerville-montserrat',
    name: 'Libre Baskerville + Montserrat',
    serif: { name: 'Libre Baskerville', weights: '400,700' },
    sans: { name: 'Montserrat', weights: '400,500,600' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
  },
  {
    id: 'montserrat-only',
    name: 'Montserrat Only (Single Typeface)',
    serif: { name: 'Montserrat', weights: '400,500,600,700' },
    sans: { name: 'Montserrat', weights: '400,500,600,700' },
    serifLink: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
    sansLink: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
  },
]

export default function TypographyShowcase() {
  const [selectedPairing, setSelectedPairing] = useState<FontPairing | null>(null)

  const loadFonts = (pairing: FontPairing) => {
    // Remove existing font links
    const existingLinks = document.querySelectorAll('link[data-font-pairing]')
    existingLinks.forEach(link => link.remove())

    // Add new font links
    // If single typeface, only add one link
    if (pairing.serif.name === pairing.sans.name) {
      const fontLink = document.createElement('link')
      fontLink.rel = 'stylesheet'
      fontLink.href = pairing.serifLink
      fontLink.setAttribute('data-font-pairing', 'both')
      document.head.appendChild(fontLink)
      
      // Use same font for both serif and sans
      document.documentElement.style.setProperty('--font-serif', `"${pairing.serif.name}", sans-serif`)
      document.documentElement.style.setProperty('--font-sans', `"${pairing.sans.name}", sans-serif`)
    } else {
      // Two different fonts
      const serifLink = document.createElement('link')
      serifLink.rel = 'stylesheet'
      serifLink.href = pairing.serifLink
      serifLink.setAttribute('data-font-pairing', 'serif')
      document.head.appendChild(serifLink)

      const sansLink = document.createElement('link')
      sansLink.rel = 'stylesheet'
      sansLink.href = pairing.sansLink
      sansLink.setAttribute('data-font-pairing', 'sans')
      document.head.appendChild(sansLink)

      // Update CSS variables
      document.documentElement.style.setProperty('--font-serif', `"${pairing.serif.name}", Georgia, serif`)
      document.documentElement.style.setProperty('--font-sans', `"${pairing.sans.name}", system-ui, sans-serif`)
    }
  }

  const handleSelectPairing = (pairing: FontPairing) => {
    setSelectedPairing(pairing)
    loadFonts(pairing)
  }

  return (
    <div className="min-h-screen bg-white-warm py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-water-deep mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Typography Pairing Showcase
          </h1>
          <p className="text-charcoal-light text-lg">
            Select a font pairing below to see how it looks with NCF content. Choose the one that best matches our premium, luxury aesthetic.
          </p>
        </div>

        {/* Font Pairing Buttons */}
        <div className="mb-12">
          <p className="text-sm text-charcoal-muted mb-4">
            <strong>Note:</strong> Most pairings use two fonts (serif for headings, sans-serif for body) to create visual hierarchy. 
            The single-typeface option uses one font family for everything, creating a cleaner, more unified look perfect for minimalist designs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fontPairings.map((pairing) => (
            <button
              key={pairing.id}
              onClick={() => handleSelectPairing(pairing)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedPairing?.id === pairing.id
                  ? 'border-water-medium bg-water-light bg-opacity-10'
                  : 'border-grey-medium hover:border-water-muted'
              }`}
            >
              <h3 className="font-semibold text-charcoal mb-2">{pairing.name}</h3>
              <p className="text-sm text-charcoal-muted">
                {pairing.serif.name === pairing.sans.name 
                  ? pairing.serif.name
                  : `${pairing.serif.name} + ${pairing.sans.name}`
                }
              </p>
            </button>
          ))}
          </div>
        </div>

        {/* Preview Content */}
        {selectedPairing && (
          <div className="space-y-section">
            {/* Hero Section Preview */}
            <section className="bg-water-deep text-white p-12 rounded-lg">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-heading" style={{ fontFamily: 'var(--font-serif)' }}>
                Welcome to Nayuku Cage Fishing
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95" style={{ fontFamily: 'var(--font-sans)' }}>
                Professional aquaculture services in Uganda. We produce the freshest tilapia, fingerlings, and feed for families and businesses.
              </p>
            </section>

            {/* Content Sections */}
            <section className="bg-white p-12 rounded-lg border border-grey-medium">
              <h2 className="text-4xl font-bold text-water-deep mb-6 tracking-heading" style={{ fontFamily: 'var(--font-serif)' }}>
                About Our Mission
              </h2>
              <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-sans)' }}>
                <p className="text-charcoal text-lg leading-relaxed mb-4">
                  Nayuku Cage Fishing is a leading aquaculture business in Uganda, combining local expertise with world-class practices. Founded to bring sustainable, high-quality fish production to the region.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Our mission is to provide fresh, healthy tilapia while supporting local communities and maintaining the highest standards of environmental responsibility. We operate with transparency, integrity, and a commitment to excellence.
                </p>
              </div>
            </section>

            {/* Features Preview */}
            <section className="bg-white p-12 rounded-lg border border-grey-medium">
              <h2 className="text-3xl font-semibold text-water-deep mb-8 tracking-heading" style={{ fontFamily: 'var(--font-serif)' }}>
                What We Offer
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Fresh Tilapia', desc: 'Premium quality fish for families and restaurants' },
                  { title: 'Fingerling Production', desc: 'High-quality fingerlings for sustainable aquaculture' },
                  { title: 'Feed Production', desc: 'Specialized feed formulations for optimal growth' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-xl font-semibold text-charcoal" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Button & Link Preview */}
            <section className="bg-white p-12 rounded-lg border border-grey-medium">
              <h2 className="text-3xl font-semibold text-water-deep mb-8 tracking-heading" style={{ fontFamily: 'var(--font-serif)' }}>
                Interactive Elements
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-water-deep text-white rounded transition-colors hover:bg-water-medium">
                  Primary Button
                </button>
                <button className="px-8 py-3 border-2 border-water-medium text-water-medium rounded transition-colors hover:bg-water-light hover:bg-opacity-10">
                  Secondary Button
                </button>
                <a href="#" className="text-water-medium hover:text-water-light underline">
                  Link Example
                </a>
              </div>
            </section>
          </div>
        )}

        {!selectedPairing && (
          <div className="bg-white p-12 rounded-lg border border-grey-medium text-center">
            <p className="text-charcoal-light text-lg">
              Select a font pairing above to see the preview
            </p>
          </div>
        )}

        {/* Current Selection Info */}
        {selectedPairing && (
          <div className="mt-12 p-6 bg-water-light bg-opacity-10 rounded-lg border border-water-muted">
            <h3 className="font-semibold text-water-deep mb-2">Selected: {selectedPairing.name}</h3>
            <p className="text-sm text-charcoal-light">
              {selectedPairing.serif.name === selectedPairing.sans.name 
                ? `Single typeface: ${selectedPairing.serif.name} (used for all text)`
                : `Headings: ${selectedPairing.serif.name} | Body: ${selectedPairing.sans.name}`
              }
            </p>
            <p className="text-xs text-charcoal-muted mt-2">
              This pairing will be used throughout the website. Does this match the premium, luxury aesthetic you're looking for?
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

