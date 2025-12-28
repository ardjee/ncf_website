import Link from 'next/link'
import Image from 'next/image'
import { SparklesIcon, ArrowTrendingUpIcon, CubeIcon } from '@heroicons/react/24/outline'
import Counter from '@/lib/animations/counter'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className="min-h-screen bg-white-warm">
      {/* Hero Section - Premium, luxury spacing with background image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20240204_131719.jpg"
            alt="Nayuku Cage Fishing - Aquaculture operations and team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          {/* Overlay for text readability - subtle dark overlay */}
          <div className="absolute inset-0 bg-charcoal/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-section px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Nayuku Cage Fishing
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 leading-comfortable max-w-2xl mx-auto">
            Professional aquaculture services in Uganda. Bringing healthy, nutritious fish to every home in East Africa.
          </p>

          {/* Call-to-Action Buttons - Minimal, premium styling */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products-services"
              className="inline-block px-8 py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-water-deep transition-all duration-200 min-h-[44px] min-w-[120px] flex items-center justify-center"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-base font-medium text-white border-2 border-white/80 hover:bg-white/20 transition-all duration-200 min-h-[44px] min-w-[120px] flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8 text-center">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              Founded in 2020 by dedicated entrepreneurs from Uganda and the Netherlands, NCF works with the Rabobank Foundation to fight undernourishment in Uganda through sustainable aquaculture.
            </p>
            <p>
              We strive to bring healthy, nutritious fish to every home in East Africa. We are dedicated to 100% sustainability and eco-friendliness, bringing education and employment to talented young men and women.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <SparklesIcon className="h-12 w-12 text-water-deep" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-water-deep">
                Fresh Tilapia
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Premium quality fresh tilapia for families and businesses across Uganda and East Africa.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <ArrowTrendingUpIcon className="h-12 w-12 text-water-deep" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-water-deep">
                Fingerling Production
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                High-quality fingerling production services to support sustainable aquaculture operations.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CubeIcon className="h-12 w-12 text-water-deep" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-water-deep">
                Feed Production
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Specialized feed formulations for optimal fish growth and health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Proud Of Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            What we are Proud of
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Tilapia Capacity */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-xl font-semibold text-water-deep text-center">
                Tilapia Capacity
              </h3>
              <Counter to={500} from={0} duration={5} />
              <p className="text-lg text-charcoal-muted text-center">
                Tons/ Year
              </p>
            </div>
            {/* Community */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-xl font-semibold text-water-deep text-center">
                Community
              </h3>
              <Counter to={2000} from={1} duration={5} />
              <p className="text-lg text-charcoal-muted text-center">
                Directly Impacted
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

