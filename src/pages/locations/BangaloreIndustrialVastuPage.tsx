import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Factory,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
  Cog,
  Zap,
  Truck,
  Building,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreIndustrialVastuPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/industrial-vastu`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Industrial Vastu Audit')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const industrialFaqs = [
    {
      question: 'Which industrial areas in Greater Bengaluru do you cover for on-site audits?',
      answer:
        'We conduct comprehensive on-site industrial Vastu audits across all major industrial clusters in Bengaluru, including Peenya Industrial Area, Bommasandra Industrial Area, Bidadi Industrial Estate, Nelamangala Logistics Corridor, Whitefield EPIP Zone, Jigani Industrial Area, and Dobbspet.',
    },
    {
      question: 'Where should heavy production machinery and presses be placed?',
      answer:
        'Heavy manufacturing equipment, hydraulic presses, CNC machining centers, and heavy stamping equipment must be anchored in the South, South-West, or West sectors. This aligns with the Earth and Water-retaining forces of the property, grounding mechanical vibrations and reducing erratic equipment breakdown.',
    },
    {
      question: 'What is the correct location for transformers, DG sets, and boilers?',
      answer:
        'High-voltage electrical switchyards, diesel generators, electrical panels, furnaces, and boilers must strictly occupy the South-East (Agneya zone), the direction governed by the Fire element. The North-East must be kept completely free of electrical installations.',
    },
    {
      question: 'Can factory Vastu defects be corrected without dismantling machinery?',
      answer:
        'Yes. In operational factories, halting production to move 20-ton machines is economically unfeasible. We deploy non-demolition elemental remedies—such as metallic copper and brass floor boundary strips and spatial realignment—to address directional imbalances without halting factory operations.',
    },
    {
      question: 'Where should finished goods be warehoused before dispatch?',
      answer:
        'Finished products ready for shipping belong in the North-West (Vayu / Air zone). The fluid movement of the Air element supports rapid inventory turnover, smooth logistics dispatch, and minimal warehousing dwell time.',
    },
  ]

  const industrialHubs = [
    {
      name: 'Peenya Industrial Estate',
      region: 'North-West Bangalore',
      focus:
        'Precision engineering, CNC machining, metal fabrication, plastic molding, and manufacturing units.',
    },
    {
      name: 'Bommasandra & Jigani',
      region: 'South Bangalore',
      focus:
        'Heavy engineering, pharmaceuticals, biotechnology facilities, and granite processing plants.',
    },
    {
      name: 'Bidadi Industrial Estate',
      region: 'South-West Corridor',
      focus:
        'Automotive manufacturing, ancillary fabrication units, and heavy industrial assembly plants.',
    },
    {
      name: 'Nelamangala & Dobbspet',
      region: 'North-West Logistics Corridor',
      focus:
        'E-commerce fulfillment centers, large-scale logistics warehouses, and bulk distribution hubs.',
    },
  ]

  const workflowGuidelines = [
    {
      icon: Cog,
      title: 'Heavy Machinery Layout',
      desc: 'Position heavy tonnage presses, lathes, and casting plants in South and South-West zones to minimize vibration stress and mechanical downtime.',
    },
    {
      icon: Zap,
      title: 'Electrical Substation & Boilers',
      desc: 'Position transformers, boilers, main power panels, and backup DG sets strictly in the South-East (Agneya Fire sector).',
    },
    {
      icon: Truck,
      title: 'Material Flow & Dispatch',
      desc: 'Raw materials stored in South-West; production flows clockwise; finished inventory staged in North-West for rapid market dispatch.',
    },
    {
      icon: Building,
      title: 'Admin & Security Gate',
      desc: 'Plant management and administrative cabins anchored in West or South-West; main security gatehouse situated on North or East boundary.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Industrial Vastu Inspections in Bangalore | 7Rays"
        description="Expert on-site industrial Vastu consultant in Bangalore by Certified Vastu Consultant Rishwa Sinha. Machinery, boiler, and warehouse layout in Peenya, Bommasandra & Bidadi."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: 'Bangalore', url: '/locations/bangalore' },
          { name: 'Industrial Vastu', url: '/locations/bangalore/industrial-vastu' },
        ]}
      />
      <LocalBusinessSchema
        name={`${siteConfig.name} - Bangalore Industrial Vastu`}
        description="Specialized industrial and manufacturing plant Vastu Shastra audits across Bengaluru industrial corridors."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        areaServed={[...siteConfig.serviceAreas]}
        latitude={businessConfig.latitude ?? undefined}
        longitude={businessConfig.longitude ?? undefined}
      />
      <ServiceSchema
        name="Bangalore Industrial & Factory Vastu Consultation"
        description="Comprehensive on-site factory and warehouse Vastu audits evaluating machinery placement, power substations, raw material logistics, and employee safety across Bengaluru."
        serviceType="Industrial Vastu Shastra"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={industrialFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/industrial-vastu.jpg"
            alt="Bangalore Industrial Manufacturing Plant Vastu Inspection"
            className="h-full w-full object-cover object-center brightness-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Factory className="h-3.5 w-3.5" />
              <span>BENGALURU • INDUSTRIAL &amp; FACTORY SITE VISITS</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Industrial Vastu <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Consultant in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              On-site factory, plant, and warehouse Vastu audits across Bengaluru's manufacturing
              corridors. Optimize machinery uptime, electrical fire safety, raw material transit,
              and workforce productivity with zero structural downtime led by{' '}
              <strong>Rishwa Sinha, Certified Vastu Consultant</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Industrial Vastu Audit')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book On-Site Factory Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/locations/bangalore"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-amber-400/50 hover:text-white"
              >
                <span>Bangalore Authority Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified NAP Banner */}
      <section className="border-b border-amber-200 bg-amber-50/70 py-6 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <MapPin className="h-4 w-4 text-amber-800" />
            <span className="font-semibold text-slate-800">
              Registered Office: 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024
            </span>
          </div>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 underline hover:text-amber-950"
          >
            <span>View on Google Maps</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* Industrial Workflow & Layout Rules */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              PLANT ENGINEERING &amp; VASTU
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Spatial Engineering for High-Performance Production
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We align heavy industrial equipment, high-voltage transformers, and warehouse loading
              docks with gravity and elemental forces to maintain operational stability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowGuidelines.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
                >
                  <div>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Bangalore Industrial Clusters Served */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              REGIONAL COVERAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Serving Manufacturing Hubs Across Bengaluru
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              We conduct on-site physical audits for factories, warehouses, and fabrication plants
              in all major Karnataka Industrial Area Development Board (KIADB) zones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industrialHubs.map((hub, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-serif text-base font-bold text-slate-900">{hub.name}</h3>
                  </div>
                  <span className="mt-1 block text-[11px] font-semibold text-slate-500 uppercase">
                    {hub.region}
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{hub.focus}</p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-emerald-700">
                    ✓ On-Site Plant Inspection Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Demolition Industrial Methodology */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-amber-50/50 p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-800" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Zero Production Downtime Remedial Methodology
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
              We understand that industrial plant operations cannot afford disruption. Our
              approaches are designed specifically for active facilities:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>No Machinery Relocation:</strong> Non-demolition corrections using
                  calibrated metallic inlay materials (brass, copper, zinc, lead) applied without
                  halting factory operations.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Fire &amp; Power Safety:</strong> Strict verification that electrical
                  transformers and boilers comply with safety codes in the Agneya (South-East) zone.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>CAD-Integrated Engineering:</strong> Deliver clear engineering drawings
                  that factory managers and layout engineers can implement immediately.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Confidential Plant Audits:</strong> Complete protection of industrial
                  processes, capacity numbers, and operational configurations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial FAQ Accordion */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              PLANT OWNER QUESTIONS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions: Factory Vastu
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {industrialFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-amber-400"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900"
                >
                  <span className="pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="h-4 w-4 shrink-0 text-amber-700" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-slate-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial CTA */}
      <section className="bg-slate-950 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Optimize Your Bangalore Factory Layout
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Schedule an on-site manufacturing plant or warehouse Vastu audit with Certified Vastu
            Consultant Rishwa Sinha. Serving Peenya, Bommasandra, Bidadi, and Greater Bengaluru.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Bangalore Industrial Vastu Audit')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Book Industrial Site Inspection</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/vastu/industrial"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <span>Industrial Vastu Pillar Overview</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  )
}
