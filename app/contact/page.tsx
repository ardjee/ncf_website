import ContactForm from '@/components/ui/ContactForm'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Contact Us | Nayuku Cage Fishing',
  description: 'Get in touch with NCF. Submit general inquiries, partnership opportunities, or buyer inquiries.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white-warm">
      {/* Hero Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-water-deep mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto">
            Get in touch with Nayuku Cage Fishing. We're here to help with your inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-water-deep">Email</h3>
              <p className="text-charcoal">
                <a 
                  href="mailto:info@nayukucagefishing.com" 
                  className="text-water-medium hover:text-water-deep transition-colors duration-200 underline decoration-transparent hover:decoration-water-medium"
                >
                  info@nayukucagefishing.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-water-deep">Phone</h3>
              <p className="text-charcoal">+256 XXX XXX XXX</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-water-deep">Location</h3>
              <p className="text-charcoal">Uganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-water-deep mb-12 text-center">
            Send Us a Message
          </h2>
          
          <div className="space-y-16 md:space-y-20">
            {/* General Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-grey-medium">
              <ContactForm formType="general" />
            </div>

            {/* Partnership Inquiry Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-grey-medium">
              <ContactForm formType="partnership" />
            </div>

            {/* Buyer Inquiry Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-grey-medium">
              <ContactForm formType="buyer" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

