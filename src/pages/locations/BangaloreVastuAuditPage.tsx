import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const BangaloreVastuAuditPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/locations/bangalore/vastu-audit`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Bangalore Vastu Energy Audit')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const openBooking = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const auditFaqs = [
    {
      question: 'What is included in an on-site scientific Vastu audit in Bangalore?',
      answer:
        'A comprehensive on-site audit involves: 1) Measuring exact compass bearings from the physical center (Brahmasthan) using calibrated digital instruments; 2) Dividing the layout into 16 distinct angular zones; 3) Testing for subterranean geopathic stress lines and earth radiation; 4) Inspecting 32 entrance padas, kitchen Agni placement, bedroom zones, and water tanks; 5) Formulating a written, zero-demolition remedial blueprint.',
    },
    {
      question: 'What is geopathic stress and how does it affect properties in Bangalore?',
      answer:
        'Geopathic stress refers to subtle subterranean electromagnetic distortions caused by underground water streams, fault lines, mineral veins, or compressed rock strata. Prolonged exposure—especially beneath beds or work desks—can correlate with chronic fatigue, insomnia, and low energy. We detect these lines using specialized scanning sensors and neutralize them using geo-remedial metallic inlays.',
    },
    {
      question: 'Can you conduct a Vastu audit for an apartment before I finalize the purchase?',
      answer:
        'Yes. Pre-purchase Vastu audits are among our most sought-after services for Bangalore buyers. Before signing agreement deeds, we evaluate builder blueprints, entrance orientations, and structural layouts to ensure you do not invest in a property with irreversible directional flaws.',
    },
    {
      question: 'How long does an on-site Vastu energy audit take?',
      answer:
        'A standard residential apartment audit typically requires 60 to 90 minutes. Large duplex homes, independent villas, or commercial offices typically take 2 to 3 hours, depending on total built-up area and site complexity.',
    },
    {
      question: 'Do you provide a written diagnostic report after the audit?',
      answer:
        'Yes. Following the physical inspection, clients receive a comprehensive written report complete with an angular 16-zone overlay chart, identified directional blockages, and an itemized non-demolition remedy plan with exact placement instructions.',
    },
  ]

  const diagnosticComponents = [
    {
      icon: Compass,
      title: 'Digital 16-Zone Grid Analysis',
      desc: 'High-precision angular division of your property into 16 zones (from North to North-North-West) verifying elemental Pancha Tattva balance.',
    },
    {
      icon: Activity,
      title: 'Geopathic Stress Detection',
      desc: 'Scientific frequency scanning identifying underground water lines, earth fractures, and electromagnetic radiation beneath sleeping and working areas.',
    },
    {
      icon: Layers,
      title: '32 Entrance Pada Verification',
      desc: 'Precise measurement of main door placement to ensure access falls within auspicious energy thresholds such as N3, N4, E3, or E4.',
    },
    {
      icon: Sparkles,
      title: 'Zero-Demolition Remedy Mapping',
      desc: 'Surgically specifying calibrated brass, copper, zinc, and lead elemental floor inlays and spatial realignment with zero demolition.',
    },
  ]

  return (
    <>
      <SEOHead
        title="On-Site Vastu Audit in Bangalore | 7Rays"
        description="Comprehensive on-site Vastu energy audit and geopathic stress scanning across Bangalore by Certified Vastu Consultant Rishwa Sinha. Zero-demolition remedies."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: 'Bangalore', url: '/locations/bangalore' },
          { name: 'Vastu Audit', url: '/locations/bangalore/vastu-audit' },
        ]}
      />
      <LocalBusinessSchema
        name={`${siteConfig.name} - Bangalore Vastu Energy Audit`}
        description="Scientific 16-zone Vastu Shastra diagnostic audits and geopathic stress scanning across Bengaluru."
        url={canonicalUrl}
        addressLocality="Bengaluru"
        addressRegion="Karnataka"
        postalCode="560024"
        areaServed={[...siteConfig.serviceAreas]}
        latitude={businessConfig.latitude ?? undefined}
        longitude={businessConfig.longitude ?? undefined}
      />
      <ServiceSchema
        name="Bangalore Scientific Vastu Energy Audit"
        description="On-site property diagnostic inspection utilizing digital compass sensors, 16-zone energy grid mapping, and geopathic radiation scanning across Greater Bengaluru."
        serviceType="Vastu Energy Audit"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={auditFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/vastu-audit.jpg"
            alt="Scientific Vastu Audit and Digital Energy Scanning Bangalore"
            className="h-full w-full object-cover object-center brightness-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-6 sm:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <Compass className="h-3.5 w-3.5" />
              <span>BENGALURU • ON-SITE ENERGY SCANNING</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Scientific Vastu Audit <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              On-site digital property diagnostics across Bengaluru. Calibrated 16-zone angular
              energy mapping, geopathic stress detection, and non-demolition elemental balancing led
              by <strong>Certified Vastu Consultant Rishwa Sinha</strong> (5+ years verified
              experience).
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Bangalore Vastu Energy Audit')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book On-Site Energy Audit</span>
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

      {/* Diagnostic Framework */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              TECHNICAL AUDIT PROTOCOL
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Scientific Diagnostics for Bangalore Real Estate
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We replace guesswork with calibrated scientific instrumentation and classical 16-zone
              directional mathematics.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticComponents.map((item, idx) => {
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

      {/* Non-Demolition Commitment */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-800" />
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Non-Demolition Remedial Blueprint
              </h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Every audit delivers an actionable, non-destructive remedial plan tailored to modern
              apartments and leased corporate spaces:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-slate-700 sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Metallic Strip Groove Inlays:</strong> Embedding brass, copper, or steel
                  strips in tile joints to energetically isolate negative drainage zones.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Directional &amp; Elemental Balancing:</strong> Harmonizing conflicting
                  fire and water elements through spatial placement adjustments and stone bases.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Metallic Boundary Corrections:</strong> Calibrated copper and brass strips
                  to define and balance directional zones without masonry alteration.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>Detailed Written Report:</strong> Includes full diagnostic cad-overlay and
                  step-by-step remedy manual for contractors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-slate-200 bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              ENERGY SCANNING INQUIRIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions: Vastu Audits
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {auditFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition hover:border-amber-400"
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
                  <div className="border-t border-slate-100 bg-white p-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="bg-slate-950 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Book an On-Site Vastu Audit in Bangalore
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Ensure your residential or commercial property aligns with natural elemental balance.
            Comprehensive diagnostics and non-demolition remedies led by Certified Vastu Consultant
            Rishwa Sinha.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Bangalore Vastu Energy Audit')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Schedule On-Site Energy Audit</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/vastu-services/vastu-audit"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <span>Vastu Audit Service Overview</span>
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
