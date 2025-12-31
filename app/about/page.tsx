import Logo from '@/components/ui/Logo'
import HeroSubheader from '@/components/ui/HeroSubheader'

export const dynamic = 'force-static'

export const metadata = {
  title: 'About Us | Nayuku Cage Fishing',
  description: 'Learn about NCF\'s mission, history, market position, and commitment to sustainable aquaculture in Uganda.',
}

export default function AboutPage() {
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
            About Nayuku Cage Fishing
          </h1>
          <HeroSubheader
            words="Building a sustainable future for aquaculture in East Africa"
            className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto"
            duration={0.6}
            staggerDelay={0.15}
          />
        </div>
      </section>

      {/* Company History & Mission Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              Founded in 2020 by dedicated entrepreneurs from Uganda and the Netherlands, 
              Nayuku Cage Fishing (NCF) was established with a clear mission: to fight 
              undernourishment in Uganda through sustainable aquaculture practices.
            </p>
            <p>
              We work in partnership with the Rabobank Foundation to bring healthy, 
              nutritious fish to every home in East Africa. Our commitment goes beyond 
              business—we are dedicated to 100% sustainability and eco-friendliness, 
              bringing education and employment opportunities to talented young men and 
              women across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              At NCF, we strive to transform the aquaculture industry in East Africa by 
              providing professional, sustainable fish farming services. Our mission is 
              threefold:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Nutrition:</strong> Bringing healthy, 
                  nutritious fish to every home in East Africa to combat undernourishment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Sustainability:</strong> Operating 
                  with 100% commitment to eco-friendly practices and environmental stewardship
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Empowerment:</strong> Creating 
                  education and employment opportunities for talented young men and women 
                  in Uganda and beyond
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Market Position
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              NCF has established a strong position in the Ugandan aquaculture market, 
              leveraging strategic partnerships and local expertise to deliver high-quality 
              products and services.
            </p>
            <p>
              We operate across the entire value chain—from fingerling production to feed 
              manufacturing to fresh tilapia distribution—ensuring quality control and 
              sustainability at every step. Our integrated approach allows us to serve 
              families, businesses, and institutions across Uganda and East Africa.
            </p>
            <p>
              Through our partnership with the Rabobank Foundation, we maintain high 
              standards of financial management, operational transparency, and social 
              responsibility, positioning NCF as a trusted leader in sustainable 
              aquaculture.
            </p>
          </div>
        </div>
      </section>

      {/* Company Credentials & Achievements Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Credentials & Achievements
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              Since our founding in 2020, NCF has built a reputation for excellence 
              in sustainable aquaculture operations and achieved significant milestones:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Strategic Partnership:</strong> 
                  Established collaboration with the Rabobank Foundation, ensuring sustainable growth and 
                  financial stability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Integrated Value Chain:</strong> 
                  Successfully developed full value chain operations from fingerling production to feed manufacturing 
                  to fresh tilapia distribution
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Sustainability Excellence:</strong> 
                  Maintained 100% commitment to eco-friendly practices and environmental stewardship across all operations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Social Impact:</strong> 
                  Created employment and educational opportunities for talented young men and women in Uganda and East Africa
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Market Leadership:</strong> 
                  Established strong position in the Ugandan aquaculture market, serving families, businesses, and institutions 
                  across the region
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Quality Assurance:</strong> 
                  Delivered premium quality fresh tilapia and production services, building trust with partners and customers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

