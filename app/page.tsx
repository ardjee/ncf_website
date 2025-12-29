import Link from 'next/link'
import Image from 'next/image'
import { SparklesIcon, ArrowTrendingUpIcon, CubeIcon } from '@heroicons/react/24/outline'
import Counter from '@/lib/animations/counter'
import ImageMorph from '@/lib/animations/morph/ImageMorph'
import Logo from '@/components/ui/Logo'

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
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo 
              width={200} 
              height={200} 
              linkToHome={false}
              showText={false}
              className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-lg"
            />
          </div>
          
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

      {/* Image Gallery Section with Morph Animation */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            Our Operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
                ]}
                alt="Aquaculture operations and fish farming"
                duration={4}
                transitionDuration={1.2}
                width={800}
                height={500}
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop',
                ]}
                alt="Sustainable fishing and community impact"
                duration={4}
                transitionDuration={1.2}
                width={800}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4 rounded-lg overflow-hidden shadow-md">
                <ImageMorph
                  images={[
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop',
                  ]}
                  alt="Fresh Tilapia"
                  duration={3.5}
                  transitionDuration={1}
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-water-deep">
                Fresh Tilapia
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Premium quality fresh tilapia for families and businesses across Uganda and East Africa.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4 rounded-lg overflow-hidden shadow-md">
                <ImageMorph
                  images={[
                    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
                  ]}
                  alt="Fingerling Production"
                  duration={3.5}
                  transitionDuration={1}
                  width={400}
                  height={300}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-water-deep">
                Fingerling Production
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                High-quality fingerling production services to support sustainable aquaculture operations.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4 rounded-lg overflow-hidden shadow-md">
                <ImageMorph
                  images={[
                    'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
                  ]}
                  alt="Feed Production"
                  duration={3.5}
                  transitionDuration={1}
                  width={400}
                  height={300}
                  className="w-full"
                />
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
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            What we are Proud of
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Tilapia Capacity */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mb-4">
                <ImageMorph
                  images={[
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
                  ]}
                  alt="Tilapia production capacity"
                  duration={4}
                  transitionDuration={1.2}
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
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
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mb-4">
                <ImageMorph
                  images={[
                    'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
                  ]}
                  alt="Community impact"
                  duration={4}
                  transitionDuration={1.2}
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
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

      {/* Additional Image Showcase Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            Sustainable Aquaculture
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=500&h=400&fit=crop',
                ]}
                alt="Sustainable farming practices"
                duration={3.5}
                transitionDuration={1}
                width={500}
                height={400}
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop',
                ]}
                alt="Quality fish production"
                duration={3.5}
                transitionDuration={1}
                width={500}
                height={400}
                className="w-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=500&h=400&fit=crop',
                  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
                ]}
                alt="Community development"
                duration={3.5}
                transitionDuration={1}
                width={500}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

