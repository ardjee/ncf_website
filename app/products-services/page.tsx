import { RevealOnScroll } from "@/lib/animations/fade-slide";

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-water-deep mb-6">
            Products & Services
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto">
            Comprehensive aquaculture solutions across the entire value chain
          </p>
        </div>
      </section>

      {/* Fresh Tilapia Offerings Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Fresh Tilapia Offerings
            </h2>
          </RevealOnScroll>
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
        </div>
      </section>

      {/* Fingerling Production Services Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Fingerling Production Services
            </h2>
          </RevealOnScroll>
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
      </section>

      {/* Feed Production Services Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
              Feed Production Services
            </h2>
          </RevealOnScroll>
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
        </div>
      </section>
    </main>
  )
}

