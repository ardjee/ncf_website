import { RevealOnScroll } from "@/lib/animations/fade-slide"
import Logo from '@/components/ui/Logo'
import AnimatedImage from '@/components/ui/AnimatedImage'
import ImageMorph from '@/lib/animations/morph/ImageMorph'
import HeroSubheader from '@/components/ui/HeroSubheader'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Products & Services | Nayuku Cage Fishing',
  description: 'Discover NCF\'s fresh tilapia offerings, fingerling production services, and feed production services for sustainable aquaculture in Uganda.',
}

export default function ProductsServicesPage() {
  return (
    <main className="min-h-screen bg-white-warm">
      {/* Hero Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo 
              width={150} 
              height={150} 
              linkToHome={false}
              showText={false}
              className="h-20 w-20 md:h-24 md:w-24 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-water-deep mb-6">
            Products & Services
          </h1>
          <HeroSubheader
            words="Comprehensive aquaculture solutions across the entire value chain"
            className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto"
            duration={0.6}
            staggerDelay={0.15}
          />
        </div>
      </section>

      {/* Fresh Tilapia Offerings Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Fresh Tilapia Offerings
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                NCF provides premium-quality fresh tilapia to families, businesses, and institutions 
                across Uganda and East Africa. Our fish are raised using sustainable, eco-friendly 
                practices that ensure both nutritional value and environmental responsibility.
              </p>
              <p>
                We maintain strict quality control throughout our production process, from fingerling 
                to harvest, ensuring that every fish meets our high standards for freshness, taste, 
                and nutritional content. Our integrated value chain approach allows us to deliver 
                consistent quality while maintaining competitive pricing.
              </p>
              <p>
                Whether you're a family looking for healthy protein options, a restaurant seeking 
                reliable supply, or an institution planning large-scale meal programs, NCF's fresh 
                tilapia offerings provide a sustainable solution that supports both nutrition and 
                local economic development.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <ImageMorph
                images={[
                  "/images/tilapia_dish1.png",
                  "/images/tilapia_dish2.png"
                ]}
                alt="Fresh tilapia dish - Premium quality tilapia from NCF"
                duration={5}
                transitionDuration={1.2}
                width={600}
                height={600}
                className="absolute inset-0 w-full h-full"
                enableScale={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fingerling Production Services Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Fingerling Production Services
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedImage
              src="/images/fingerlings.png"
              alt="High-quality fingerlings - Juvenile fish production at NCF"
            />
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                Our fingerling production services provide high-quality juvenile fish to aquaculture 
                operations throughout Uganda and East Africa. We specialize in producing healthy, 
                robust fingerlings that are essential for successful fish farming operations.
              </p>
              <p>
                Our production facilities use advanced techniques and sustainable practices to ensure 
                optimal growth conditions, disease prevention, and genetic quality. We work closely 
                with farmers and aquaculture businesses to provide fingerlings that are well-suited 
                to local conditions and farming methods.
              </p>
              <p>
                By offering reliable fingerling production services, NCF supports the growth of the 
                broader aquaculture industry in the region, helping other farmers establish and 
                maintain successful operations while promoting sustainable practices across the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Production Services Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Feed Production Services
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                NCF operates feed production facilities that manufacture high-quality, nutritionally 
                balanced fish feed for our own operations and for distribution to other aquaculture 
                businesses in the region. Our feed formulations are designed to optimize fish growth 
                while maintaining sustainability and cost-effectiveness.
              </p>
              <p>
                We use locally sourced ingredients where possible, supporting local agriculture while 
                reducing transportation costs and environmental impact. Our feed production processes 
                are designed to ensure consistent quality, proper nutrition, and food safety standards.
              </p>
              <p>
                By producing our own feed and making it available to other farmers, NCF helps ensure 
                that the entire aquaculture value chain in Uganda has access to reliable, high-quality 
                feed supplies, which is essential for the success and growth of the industry.
              </p>
            </div>
            <AnimatedImage
              src="/images/feeds.png"
              alt="Fish feed production - High-quality feed manufacturing at NCF"
            />
          </div>
        </div>
      </section>

      {/* Cage Production Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Cage Production
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedImage
              src="/images/cages1.png"
              alt="Aquaculture cages - High-quality cage production at NCF"
            />
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                NCF produces reliable, durable, and high-quality aquaculture cages designed to meet 
                the diverse needs of fish farming operations across Uganda and East Africa. Our cage 
                production services offer both modern HDPE (High-Density Polyethylene) solutions and 
                sustainable local alternatives, all built to the highest standards.
              </p>
              <p>
                Our HDPE cages are available in both square and circular designs, engineered for 
                maximum durability and performance in freshwater environments. Each cage includes 
                full netting systems that provide optimal fish containment while allowing proper 
                water flow and circulation.
              </p>
              <p>
                In addition to our HDPE offerings, NCF provides sustainable local alternatives using 
                wood and bamboo materials. These eco-friendly cage solutions are designed for 
                farmers who prefer traditional materials or require cost-effective options while 
                maintaining quality and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

