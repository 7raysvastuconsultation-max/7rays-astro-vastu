import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Compass,
  ArrowRight,
  Plus,
  Minus,
  Layers,
  Wind,
  Maximize2,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const ApartmentVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/vastu/apartment-vastu`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Apartment Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const apartmentFaqs = [
    {
      question:
        'Can Vastu really be applied to an existing apartment where walls cannot be broken?',
      answer:
        'Yes. The vast majority of apartment Vastu imbalances are addressed without civil demolition. Non-demolition elemental remedies include authentic metallic inlay boundary materials (brass, copper, zinc) and directional spatial adjustments appropriate to the property.',
    },
    {
      question: 'How do you determine the main entrance orientation in a high-rise flat?',
      answer:
        'In apartments, the main entrance is evaluated from the exact center (Brahma-sthana) of your specific flat unit using calibrated digital compass degrees, not the entrance to the multi-storey building itself. We then map the door to one of the 32 classical Vastu entrance padas.',
    },
    {
      question: 'What if my apartment has an extended or cut corner (Vastu dosha)?',
      answer:
        'Corner extensions or cuts (common in L-shaped and irregular modern floor plans) disturb elemental equilibrium. We apply virtual division boundaries using virtual mirror strips and elemental earth rods to restore a balanced geometric rectangular energy grid.',
    },
    {
      question: 'Do you offer on-site apartment inspections across Bangalore?',
      answer:
        'Yes. 7Rays conducts hands-on on-site inspections across Greater Bengaluru (including Whitefield, HSR Layout, Koramangala, Indiranagar, Hebbal, and Yelahanka). We also offer digital CAD blueprint audits globally for NRI homeowners and flat buyers.',
    },
    {
      question: 'What should I provide before an apartment Vastu audit?',
      answer:
        'You only need to provide the architectural floor plan drawing (builder layout or CAD drawing) with an accurate North direction indicator, alongside your current pain points (sleep issues, financial flow, career stagnation).',
    },
  ]

  const apartmentPillars = [
    {
      title: 'Entrance Pada Verification',
      desc: 'Accurate compass calculation from the flat center to evaluate the exact entrance pada among 32 possible orientations.',
      icon: Compass,
    },
    {
      title: 'Balcony Light & Wind Inflow',
      desc: 'Optimizing North and East balcony light while neutralizing aggressive heat or negative directional drafts in South/West balconies.',
      icon: Wind,
    },
    {
      title: 'Shared Wall Isolation',
      desc: 'Energetically insulating bedrooms and pooja spaces that share common walls with elevator shafts, stairs, or neighbor plumbing.',
      icon: Layers,
    },
    {
      title: 'Brahma-sthana Clarity',
      desc: 'Ensuring the central core of the apartment remains lightweight, well-lit, and unburdened by heavy structural blockages.',
      icon: Maximize2,
    },
  ]

  return (
    <>
      <SEOHead
        title="Apartment Vastu Consultant in Bangalore | 7Rays"
        description="Specialized Apartment Vastu consultancy in Bangalore for modern flats and high-rise living. Non-demolition elemental remedies, 16-zone CAD audits, and entrance pada balancing."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Vastu Services', url: '/vastu-services' },
          { name: 'Residential Vastu', url: '/vastu-services/residential-vastu' },
          { name: 'Apartment Vastu', url: '/vastu/apartment-vastu' },
        ]}
      />
      <ServiceSchema
        name="Apartment Vastu Consultation"
        description="Scientific non-demolition Vastu consultation for modern high-rise apartments and flats in Bangalore."
        serviceType="Apartment Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={apartmentFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/luxury-residence-mumbai.jpg"
            alt="Luxury High Rise Apartment Vastu Interior"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1200}
            height={896}
            className="h-full w-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>URBAN LIVING • APARTMENT VASTU</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              High-Rise Living.
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Complete Harmony.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Tailored Vastu Shastra for Bangalore apartments and leased flats. Achieve peace,
              restful sleep, and career prosperity without breaking walls or altering building
              architecture.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Apartment Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book Apartment Vastu Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/vastu-services/residential-vastu"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>Back to Residential Vastu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Direct Answer Section */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                SCIENTIFIC FLAT HARMONIZATION
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                How Apartment Vastu Works in Modern High-Rise Flats
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                <p className="text-xs leading-relaxed font-medium text-slate-800 sm:text-sm">
                  <strong>Quick Answer:</strong> In a multi-storey building, your apartment unit
                  functions as an independent energetic micro-cosmos. The compass grid is calculated
                  strictly from the center of your personal living unit (Brahma-sthana), rather than
                  the building ground floor. Structural limitations like fixed plumbing or shared
                  walls are balanced using non-demolition elemental boundary strips (brass, copper,
                  zinc, lead) and spatial realignment.
                </p>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Whether you live in a 2BHK or a duplex penthouse, modern construction frequently
                creates irregular cuts, toilets in positive zones, or main doors facing challenging
                directions. Led by Rishwa Sinha (Certified Vastu Consultant, 5+ years experience) at
                7Rays Astro Vastu, our certified methodology identifies spatial imbalances and
                remedies them cleanly without violating apartment society bylaws.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>Zero Structural Demolition</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>Ideal for Leased &amp; Owned Flats</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>Bangalore On-Site Inspections</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-slate-900">
                  Core Apartment Inspection Scope
                </h3>
                <ul className="mt-4 space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Exact 32 entrance pada analysis from your flat entrance door</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Master bedroom orientation in Southwest (Nairutya) for deep sleep</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Kitchen stove and sink fire-water conflict resolution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Attached bathroom &amp; shaft energy isolation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Balcony orientation assessment for solar &amp; pranic inflow</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <Link
                    to="/locations/bangalore/residential-vastu"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                  >
                    <span>View Bangalore Residential Vastu Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Apartment Pillars */}
      <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              THE 7RAYS APPROACH
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Specialized Solutions for Urban Apartments
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apartmentPillars.map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:border-amber-400 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <ItemIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              APARTMENT FAQ
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {apartmentFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-slate-200/80 bg-white transition hover:border-amber-300"
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

          {/* CTA Banner */}
          <div className="mt-12 rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-slate-900 sm:text-2xl">
              Ready to Balance Your Apartment Energy?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Schedule an on-site or digital CAD consultation with Certified Vastu Consultant Rishwa
              Sinha today.
            </p>
            <div className="mt-6">
              <button
                onClick={() => openBooking('Apartment Vastu Consultation')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
              >
                <span>Request Apartment Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
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
