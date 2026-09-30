import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Plus, Minus } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreResidentialVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/residential-vastu`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Residential Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localResidentialFaqs = [
    {
      question: 'How do you conduct on-site home Vastu visits in Bangalore?',
      answer:
        'Our consultant conducts a physical walkthrough of your residence using high-precision digital compasses and frequency scanning sensors. We measure exact directional alignment from the center of the house, inspect main door padas, bedroom positioning, kitchen Agni placement, and subterranean energy lines, followed by a written remedial blueprint.',
    },
    {
      question: 'Which areas of Bengaluru do you serve for on-site residential visits?',
      answer:
        'We provide on-site residential consultations across all zones of Bengaluru, including North Bangalore (Dasarahalli, Hebbal, Yelahanka), East Bangalore (Indiranagar, Whitefield, Marathahalli), South Bangalore (Koramangala, HSR Layout, JP Nagar, Jayanagar, Electronic City, Sarjapur Road), and West Bangalore (Malleshwaram, Rajajinagar).',
    },
    {
      question: 'Can you consult before I purchase an apartment or villa in Bangalore?',
      answer:
        'Yes. Pre-purchase evaluation is one of our most popular services. Before you sign the sale deed, we review the builder floor plan and site orientation to ensure the property does not harbor major irremediable directional defects.',
    },
    {
      question: 'Do you offer non-demolition remedies for Bangalore rented or leased flats?',
      answer:
        'Yes. We specialize in non-demolition techniques specifically designed for tenants and apartment owners. We use authentic brass and copper floor inlays, directional metallic boundary strips, and spatial realignment to balance energy without breaking tiles or walls.',
    },
  ]

  const bangaloreZones = [
    {
      name: 'North Bangalore',
      localities: 'Dasarahalli (Headquarters), Hebbal, Yelahanka, Jakkur, Thanisandra',
      focus: 'Independent houses, luxury villas near airport corridor, gated developments.',
    },
    {
      name: 'East Bangalore',
      localities: 'Indiranagar, Whitefield, Varthur, Marathahalli, KR Puram',
      focus: 'High-rise luxury tech apartments, premium penthouses, gated villa enclaves.',
    },
    {
      name: 'South Bangalore',
      localities: 'HSR Layout, Koramangala, Sarjapur Road, Electronic City, JP Nagar, Jayanagar',
      focus: 'Startup founder residences, duplex townhouses, modern community flats.',
    },
    {
      name: 'West & Central',
      localities: 'Malleshwaram, Rajajinagar, Sadashivanagar, CBD',
      focus: 'Heritage ancestral residences, redeveloped family homes, luxury apartments.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Residential Vastu Visits in Bangalore | 7Rays"
        description="Looking for professional residential Vastu consultation in Bangalore? 7Rays Astro Vastu offers on-site home & flat energy audits across Bengaluru. Zero demolition."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: 'Bangalore', url: '/locations/bangalore' },
          { name: 'Residential Vastu', url: '/locations/bangalore/residential-vastu' },
        ]}
      />
      <LocalBusinessSchema
        name={`${siteConfig.name} - Bangalore Residential Vastu`}
        description="Expert residential Vastu Shastra consultation for homes, apartments, and luxury villas across Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        areaServed={[...siteConfig.serviceAreas]}
        latitude={siteConfig.contact.geo.latitude ?? undefined}
        longitude={siteConfig.contact.geo.longitude ?? undefined}
      />
      <ServiceSchema
        name="Bangalore Residential Vastu Consultation"
        description="On-site and digital residential Vastu audits for apartments, villas, and independent homes across Bengaluru."
        serviceType="Residential Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localResidentialFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/residential-vastu.jpg"
            alt="Bangalore Luxury Home Vastu Consultation"
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>BENGALURU • ON-SITE RESIDENTIAL VISITS</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Residential Vastu
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Consultant in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              On-site home and apartment Vastu audits across Bengaluru. Scientific 16-zone analysis,
              entrance pada checking, and non-demolition remedies led by Certified Vastu Consultant
              Rishwa Sinha.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Residential Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book On-Site Home Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/locations/bangalore"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>Bangalore Location Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified NAP & Entity Banner */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-6 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <MapPin className="h-4 w-4 text-amber-800" />
            <span className="font-semibold text-slate-800">
              Authoritative Location: 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024
            </span>
          </div>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 underline transition hover:text-amber-950"
          >
            <span>View on Google Maps</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* Bangalore Service Zones Grid */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              GREATER BENGALURU COVERAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              On-Site Residential Inspections Across Bengaluru
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We travel to your property anywhere across the metropolitan territory, providing
              in-depth directional and elemental balancing on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bangaloreZones.map((zone, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{zone.name}</h3>
                  <div className="mt-2 text-xs font-medium text-amber-800">{zone.localities}</div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{zone.focus}</p>
                </div>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <span className="text-[11px] font-semibold text-slate-500">
                    On-Site Visits Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="border-t border-amber-200/80 bg-[#FAF8F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              LOCAL FAQ
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">
              Bangalore Homeowner Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {localResidentialFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-amber-200/70 bg-white transition hover:border-amber-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50"
                  >
                    <span className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openBooking('Bangalore Residential Vastu Consultation')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <span>Schedule Bangalore Home Inspection</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
