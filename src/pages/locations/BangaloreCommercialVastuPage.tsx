import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Plus, Minus, Building2, Briefcase, Factory } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreCommercialVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/commercial-vastu`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Commercial Vastu Consultation')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const localCommercialFaqs = [
    {
      question:
        'Does 7Rays conduct on-site commercial Vastu visits across all tech parks and business hubs in Bangalore?',
      answer:
        'Yes. While our primary headquarters is situated in Dasarahalli (PIN 560024), we provide on-site commercial consultations across all major business zones of Bengaluru, including Outer Ring Road, Whitefield IT parks, Electronic City, Koramangala, Indiranagar, and Peenya Industrial Estate.',
    },
    {
      question:
        'How does commercial Vastu consultation work for rented or leased office spaces in Bangalore?',
      answer:
        'A substantial portion of our corporate and startup clients in Bangalore operate in leased commercial spaces where civil demolition is prohibited by commercial lease agreements. We perform elemental and directional harmonization using desk orientation, calibrated metallic boundary strips, and spatial realignment—with zero structural alteration.',
    },
    {
      question: 'What is the lead time for booking an on-site commercial inspection in Bangalore?',
      answer:
        'On-site commercial inspections are typically scheduled within 2 to 4 business days depending on client availability. Digital CAD floor plan audits can be initiated within 24 hours of plan submission.',
    },
    {
      question: 'Do you consult for manufacturing units and factories in Peenya and Bommasandra?',
      answer:
        'Yes. We regularly inspect industrial manufacturing units, fabrication workshops, and logistics warehouses across Peenya, Bommasandra, Bidadi, and Dabaspet for heavy machinery orientation, boiler/transformer placement, and raw material storage.',
    },
  ]

  const corridors = [
    {
      title: 'Tech Corridors & IT Parks',
      suburbs: 'Outer Ring Road (Bellandur/Marathahalli), Whitefield (ITPB), Electronic City',
      description:
        'Multi-tenant tech parks, enterprise software engineering campuses, and global capability centers (GCCs).',
      icon: Building2,
    },
    {
      title: 'Startup & High-Street Hubs',
      suburbs: 'Koramangala, HSR Layout, Indiranagar 100ft Road',
      description:
        'High-growth tech startups, venture capital suites, professional studios, and premium retail high-streets.',
      icon: Briefcase,
    },
    {
      title: 'Manufacturing & Industrial Belts',
      suburbs: 'Peenya Industrial Area, Bommasandra, Bidadi, Dabaspet',
      description:
        'Heavy engineering facilities, CNC machining units, pharmaceutical plants, and logistics distribution hubs.',
      icon: Factory,
    },
    {
      title: 'Central Business District (CBD)',
      suburbs: 'MG Road, Residency Road, Lavelle Road, Richmond Town',
      description:
        'Corporate headquarters, banking institutions, law firms, and established commercial trading offices.',
      icon: Building2,
    },
  ]

  return (
    <>
      <SEOHead
        title="Commercial Vastu Site Audits in Bangalore | 7Rays"
        description="Expert Commercial Vastu consultation in Bangalore for corporate offices, IT tech parks, retail stores, and factories. On-site visits across Bengaluru by Certified Consultant Rishwa Sinha."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: 'Bangalore Hub', url: '/locations/bangalore' },
          { name: 'Commercial Vastu Bangalore', url: '/locations/bangalore/commercial-vastu' },
        ]}
      />
      <LocalBusinessSchema
        name={`${businessConfig.businessName} - Bangalore Commercial Desk`}
        description="On-site commercial, office, and industrial Vastu consultation services across Bengaluru."
        url={canonicalUrl}
      />
      <ServiceSchema
        name="Bangalore Commercial Vastu Consultation"
        description="On-site commercial Vastu inspections for corporate offices, startups, and factories in Bangalore."
        serviceType="Commercial Vastu Consulting"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={localCommercialFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/commercial-boardroom-hero.jpg"
            alt="Commercial Vastu Bangalore Office Skyline"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <span>BENGALURU • ON-SITE COMMERCIAL DESK</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Commercial Vastu Consultant <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              On-site workplace audits, executive cabin orientation, and factory layouts across
              Bengaluru tech corridors, startup districts, and industrial zones. Supervised
              personally by Certified Vastu Consultant {businessConfig.ownerName}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Commercial On-Site Visit')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book On-Site Commercial Visit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/vastu/commercial"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-medium text-slate-200 backdrop-blur-xs transition hover:bg-slate-800"
              >
                <span>Commercial Pillar</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters vs Service Area Transparency Strip */}
      <section className="border-b border-slate-200 bg-amber-50/60 py-6 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <MapPin className="h-4 w-4 text-amber-800" />
            <span className="font-semibold text-slate-800">
              Operational Headquarters: {businessConfig.address.fullAddress}
            </span>
          </div>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-950"
          >
            <span>View on Google Maps</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* Business Corridors Grid */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              BENGALURU BUSINESS CORRIDORS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Commercial Hubs We Serve On-Site
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We conduct on-site energy calibrations and spatial reviews across all major commercial
              belts in the city.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corridors.map((hub, idx) => {
              const HubIcon = hub.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                    <HubIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{hub.title}</h3>
                  <span className="mt-1 block text-xs font-semibold text-amber-800">
                    {hub.suburbs}
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{hub.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* B2B Services Navigation */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                COMMERCIAL SPECIALIZATIONS
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Targeted Solutions for Your Property Type
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Explore our specialized commercial service pages tailored to distinct property
                requirements across Bangalore.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to="/vastu/office-vastu"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-amber-400 hover:shadow-xs"
                >
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Office Vastu &amp; Seating Layout
                    </h4>
                    <p className="text-xs text-slate-500">
                      MD cabin, accounts desk, and workstation alignment.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-700" />
                </Link>

                <Link
                  to="/vastu/corporate"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-amber-400 hover:shadow-xs"
                >
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Corporate &amp; Enterprise Vastu
                    </h4>
                    <p className="text-xs text-slate-500">
                      Large-scale tech campuses and multi-floor corporate headquarters.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-700" />
                </Link>

                <Link
                  to="/vastu/industrial"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-amber-400 hover:shadow-xs"
                >
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      Industrial &amp; Factory Vastu
                    </h4>
                    <p className="text-xs text-slate-500">
                      Heavy machinery placement, raw material storage, and warehouse logistics.
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-700" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-amber-300/80 bg-white p-8 shadow-sm">
                <span className="text-xs font-bold tracking-wider text-amber-800 uppercase">
                  B2B CONSULTATION PROTOCOL
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                  How We Conduct Commercial Audits in Bangalore
                </h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-800">1.</span>
                    <span>
                      <strong>Preliminary Plan Review:</strong> Client shares architectural CAD
                      drawings or PDF floor plans with North orientation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-800">2.</span>
                    <span>
                      <strong>On-Site Inspection:</strong> Comprehensive directional compass
                      readings, geopathic energy scans, and entrance pada verification.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-800">3.</span>
                    <span>
                      <strong>Non-Demolition Report:</strong> Actionable remedial matrix for phased
                      implementation without disrupting business operations.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <button
                    onClick={() => openBooking('Commercial Site Visit')}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-xs font-bold text-amber-300 transition hover:bg-slate-800"
                  >
                    <span>Request Bangalore Commercial Visit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              LOCAL FAQ
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Commercial Vastu in Bangalore: Questions &amp; Answers
            </h2>
          </div>

          <div className="space-y-4">
            {localCommercialFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-2xs">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200/60 px-5 pt-3 pb-5">
                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
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
