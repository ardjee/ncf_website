import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-water-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:info@nayukucagefishing.com" 
                  className="hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  info@nayukucagefishing.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:+256774402784" 
                  className="hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  +256 774 402784
                </a>
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span>{' '}
                <a 
                  href="https://wa.me/256774402784" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  +256 774 402784
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span> Nayuku Cage Fishing Bugali Namayingo
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products-services" 
                  className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/investment" 
                  className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  Investment
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white/80 hover:text-white transition-colors duration-200 underline decoration-transparent hover:decoration-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="flex items-start gap-4">
            <div className="h-[150px] w-[150px] flex-shrink-0">
              <Logo 
                width={150} 
                height={150} 
                linkToHome={true}
                showText={false}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Professional aquaculture services in Uganda. Fresh tilapia, fingerling production, and feed production.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-section border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            &copy; {currentYear} Nayuku Cage Fishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
