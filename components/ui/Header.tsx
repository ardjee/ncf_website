'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Logo from './Logo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products & Services', href: '/products-services' },
  { name: 'Investment', href: '/investment' },
  { name: 'Contact', href: '/contact' },
  { name: 'Team', href: '/team' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for subtle background fade
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Logo 
              width={180} 
              height={180} 
              linkToHome={true}
              showText={false}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
          </div>

          {/* Desktop Navigation - Inter font */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    isActive
                      ? 'text-water-deep'
                      : 'text-charcoal hover:text-water-medium'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {/* Subtle underline for active state */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-water-deep" />
                  )}
                  {/* Subtle underline reveal on hover (only if not active) */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-water-medium scale-x-0 hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-charcoal hover:text-water-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-water-medium min-h-[44px] min-w-[44px] transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-grey-medium" id="mobile-menu">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-200 min-h-[44px] ${
                      isActive
                        ? 'text-water-deep bg-water-light bg-opacity-10'
                        : 'text-charcoal hover:text-water-medium hover:bg-grey-light'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
