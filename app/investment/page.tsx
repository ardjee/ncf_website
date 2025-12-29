import Logo from '@/components/ui/Logo'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Investment Opportunity | Nayuku Cage Fishing',
  description: 'Explore NCF\'s investment opportunity in sustainable aquaculture, including market opportunity, company structure, risk management, and investment proposition.',
}

export default function InvestmentPage() {
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
            Investment Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto">
            Building sustainable value in East African aquaculture
          </p>
        </div>
      </section>

      {/* Market Opportunity Overview Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Market Opportunity Overview
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              The East African aquaculture market presents significant growth opportunities, driven by 
              increasing demand for protein, rising population, and growing awareness of the nutritional 
              benefits of fish. Uganda, in particular, offers a favorable environment for sustainable 
              fish farming with its abundant water resources and supportive regulatory framework.
            </p>
            <p>
              NCF operates in a market with strong fundamentals: undernourishment remains a critical 
              challenge in the region, creating sustained demand for affordable, high-quality protein 
              sources. The company's integrated value chain approach—from fingerling production to feed 
              manufacturing to fresh fish distribution—positions it to capture value across multiple 
              segments of the aquaculture industry.
            </p>
            <p>
              With strategic partnerships, proven operational capabilities, and a commitment to 
              sustainability, NCF is well-positioned to capitalize on the growing demand for sustainable 
              aquaculture products in Uganda and across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Company Structure and Stability Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Company Structure and Stability
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              NCF was founded in 2020 by experienced entrepreneurs from Uganda and the Netherlands, 
              bringing together local market knowledge and international best practices. The company's 
              leadership combines deep aquaculture expertise with strong business acumen, ensuring both 
              operational excellence and strategic vision.
            </p>
            <p>
              A cornerstone of NCF's stability is our strategic partnership with the Rabobank Foundation, 
              which provides financial backing, governance oversight, and access to international networks. 
              This partnership demonstrates confidence in NCF's business model and provides a solid 
              foundation for sustainable growth.
            </p>
            <p>
              The company's integrated value chain structure—encompassing fingerling production, feed 
              manufacturing, and fresh fish distribution—creates operational resilience and reduces 
              dependency on external suppliers. This vertical integration provides cost advantages, 
              quality control, and supply chain security, all of which contribute to long-term stability 
              and competitive positioning.
            </p>
            <p>
              NCF maintains transparent financial management practices and operational reporting, 
              supported by the governance framework established through our partnership with Rabobank 
              Foundation. This commitment to transparency and accountability builds trust with investors 
              and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Management Approach Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Risk Management Approach
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              NCF employs a comprehensive risk management strategy that addresses operational, financial, 
              environmental, and market risks. Our approach is built on proactive identification, 
              assessment, and mitigation of potential challenges.
            </p>
            <p>
              <strong className="text-water-deep">Operational Risks:</strong> Our integrated value chain 
              reduces dependency on external suppliers, while our quality control processes and sustainable 
              practices minimize production risks. We maintain strict biosecurity protocols and work with 
              experienced aquaculture professionals to ensure operational excellence.
            </p>
            <p>
              <strong className="text-water-deep">Financial Risks:</strong> Our partnership with Rabobank 
              Foundation provides financial stability and governance oversight. We maintain conservative 
              financial management practices and focus on sustainable, profitable growth rather than rapid 
              expansion.
            </p>
            <p>
              <strong className="text-water-deep">Environmental Risks:</strong> Our 100% commitment to 
              eco-friendly practices and sustainability is not just a value proposition—it's a risk 
              mitigation strategy. By operating sustainably, we reduce regulatory risks, protect our 
              operating environment, and ensure long-term viability.
            </p>
            <p>
              <strong className="text-water-deep">Market Risks:</strong> The fundamental demand for 
              protein in East Africa provides a stable market base. Our diversified customer base 
              (families, businesses, institutions) and integrated operations reduce exposure to single 
              market segment risks.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Proposition Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Investment Proposition
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              NCF offers investors an opportunity to participate in the growth of sustainable aquaculture 
              in East Africa while generating financial returns and creating positive social impact. Our 
              investment proposition combines strong market fundamentals, proven operational capabilities, 
              and a commitment to sustainability.
            </p>
            <p>
              <strong className="text-water-deep">Market Position:</strong> NCF has established a strong 
              position in the Ugandan aquaculture market with an integrated value chain that captures value 
              across multiple segments. Our strategic partnership with Rabobank Foundation provides 
              credibility and stability.
            </p>
            <p>
              <strong className="text-water-deep">Growth Potential:</strong> The East African aquaculture 
              market offers significant growth opportunities, and NCF's operational model is scalable. 
              Our integrated approach provides a foundation for expansion while maintaining quality and 
              sustainability standards.
            </p>
            <p>
              <strong className="text-water-deep">Social Impact:</strong> Investment in NCF supports 
              the fight against undernourishment in Uganda, creates employment opportunities, and promotes 
              sustainable practices. This dual focus on financial returns and social impact appeals to 
              impact investors and socially responsible investors.
            </p>
            <p>
              <strong className="text-water-deep">Sustainability:</strong> Our commitment to 100% 
              eco-friendly practices ensures long-term viability and aligns with growing investor focus 
              on environmental, social, and governance (ESG) factors. Sustainable operations reduce 
              regulatory and reputational risks while creating value for all stakeholders.
            </p>
            <p>
              For investors interested in learning more about NCF's investment opportunity, we welcome 
              inquiries and are prepared to provide detailed information about our operations, financial 
              performance, and growth plans.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

