import TeamMosaicNayuku from '@/components/TeamMosaicNayuku'

export const metadata = {
  title: 'Our Team | Nayuku Cage Fishing',
  description: 'Meet the NCF team and learn about our leadership, achievements, and credentials in sustainable aquaculture.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white-warm">
      {/* Hero Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-water-deep mb-6">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto">
            Dedicated professionals committed to sustainable aquaculture excellence
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Leadership
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              Nayuku Cage Fishing is led by a dedicated team of entrepreneurs from Uganda and the Netherlands, 
              bringing together local expertise and international best practices in sustainable aquaculture.
            </p>
            <p>
              Our leadership team is committed to NCF's mission of fighting undernourishment in Uganda through 
              sustainable fish farming, while creating meaningful employment and educational opportunities for 
              talented young professionals across East Africa.
            </p>
            <p>
              Through strategic partnerships, including our collaboration with the Rabobank Foundation, our 
              leadership ensures that NCF operates with the highest standards of financial management, 
              operational transparency, and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Team Mosaic Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <TeamMosaicNayuku />
        </div>
      </section>

      {/* Credentials & Certifications Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Credentials & Certifications
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              NCF operates with the highest standards of quality, sustainability, and professional excellence:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Financial Management:</strong> Partnership with 
                  Rabobank Foundation ensures rigorous financial oversight and transparency
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Operational Standards:</strong> Adherence to 
                  international best practices in aquaculture operations and quality control
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Environmental Compliance:</strong> 100% commitment 
                  to eco-friendly practices and sustainable resource management
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-water-deep font-semibold mr-3">•</span>
                <span>
                  <strong className="text-water-deep">Social Responsibility:</strong> Dedicated to 
                  creating positive social impact through employment and education initiatives
                </span>
              </li>
            </ul>
            <p className="pt-4">
              Our commitment to excellence and sustainability positions NCF as a trusted leader in the 
              East African aquaculture industry, building confidence among investors, partners, and customers.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

