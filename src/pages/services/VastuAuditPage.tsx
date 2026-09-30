import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileSearch,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Compass,
  ShieldCheck,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { siteConfig } from '@/config/site'

export const VastuAuditPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/vastu-services/vastu-audit`

  const faqs = [
    {
      question: 'What is included in a complete 7Rays Vastu Audit report?',
      answer:
        'A comprehensive audit includes a 16-zone CAD directional layout analysis, compass degree verification, 32 entrance pada ratings, geopathic energy scan map, natal horoscope synergy chart, and a step-by-step non-demolition remedy prescription.',
    },
    {
      question: 'Can I do a virtual Vastu audit if my property is outside Bangalore or overseas?',
      answer:
        'Yes. We provide high-precision Online Vastu Audits for clients across India, the US, UK, UAE, and Singapore using architectural CAD drawings, Google Earth geographic coordinates, and live video walk-throughs.',
    },
    {
      question: 'How long does an on-site property inspection take?',
      answer:
        'An on-site inspection for a residential apartment typically requires 90 to 120 minutes. Commercial and industrial properties range from 3 to 6 hours depending on total built-up square footage.',
    },
  ]

  return (
    <>
      <SEOHead
        title="Vastu Audit & Consultation in Bangalore | 7Rays"
        description="Book a scientific Vastu Audit with 7Rays. Complete 16-zone CAD energy mapping, geopathic stress scanning, and zero-demolition remedy blueprints in Bangalore."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Vastu Services', url: '/vastu-services' },
          { name: 'Vastu Audit', url: '/vastu-services/vastu-audit' },
        ]}
      />
      <ServiceSchema
        name="Vastu Audit & Property Energy Assessment"
        description="Scientific directional and energy audit of existing properties with detailed CAD reporting."
        serviceType="Vastu Audit Service"
        providerName={siteConfig.name}
        providerUrl={siteConfig.url}
      />
      <FAQSchema items={faqs} />

      <section className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <FileSearch className="h-3.5 w-3.5 text-amber-400" />
              <span>DIAGNOSTIC EXCELLENCE</span>
            </div>

            <h1 className="font-serif text-4xl leading-tight font-bold text-slate-100 sm:text-6xl">
              Scientific Vastu Audit &amp; <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Energy Assessment
              </span>
            </h1>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-300 sm:text-base">
              Get an accurate diagnostic evaluation of your existing home, apartment, office, or
              factory before making structural or business commitments.
            </p>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Schedule a Property Audit</span>
                <ArrowRight className="h-4 w-4" />
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
                DIAGNOSTIC DEFINITION
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                What is a Vastu Audit?
              </h2>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-5">
                <p className="text-xs leading-relaxed font-medium text-slate-800 sm:text-sm">
                  <strong>Direct Answer:</strong> A Vastu audit is a structured diagnostic
                  assessment of a property's layout, orientation, and directional zones within the
                  consultant's Vastu framework. At 7Rays Astro Vastu, our audit incorporates 16-zone
                  CAD energy mapping, calibrated digital compass degree calculations, and
                  environmental stress scans to identify spatial imbalances before prescribing
                  non-demolition remedies.
                </p>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Within the 7Rays consultation methodology led by Rishwa Sinha (Certified Vastu
                Consultant, 5+ years experience), an audit systematically records environmental and
                geomagnetic variables across your residence, office, or factory. Rather than relying
                on generic assumptions, each property is diagnosed according to its precise compass
                degree and architectural boundaries.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-[#FAF8F5] px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                  <span>16-Zone CAD Analysis</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-[#FAF8F5] px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <Compass className="h-3.5 w-3.5 text-amber-700" />
                  <span>Calibrated Digital Compass</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-[#FAF8F5] px-3.5 py-1 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
                  <span>Zero-Demolition Approach</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-500/5 via-[#FAF8F5] to-amber-500/10 p-6 shadow-xs sm:p-8">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Key Takeaways for Property Owners
                </h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Pre-Commitment Utility:</strong> Essential before purchasing, leasing,
                      or renovating residential or commercial spaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Remote or On-Site:</strong> Available via on-site physical
                      walk-through in Bengaluru or via digital architectural CAD audits globally.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>
                      <strong>Actionable Report:</strong> Delivers prioritized remediation plans
                      with specific elemental inlays (copper, brass, zinc).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Scope */}
      <section className="border-b border-amber-100 bg-[#FAF8F5] py-20 text-slate-900">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              How Does an On-Site Property Audit Work?
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              A comprehensive examination leaving no directional variable unexamined
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-6">
              <h3 className="mb-2 font-serif text-base font-bold text-slate-900">
                1. Angular Compass Alignment
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Measuring true geomagnetic degrees against magnetic declination. Even a 5-degree
                skew shifts key directional zones into conflicting quadrants.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-6">
              <h3 className="mb-2 font-serif text-base font-bold text-slate-900">
                2. 32 Entrance Pada Screening
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Evaluating the exact entry pada out of 32 directional gates to determine whether the
                entrance attracts wealth, intellectual clarity, or unintended drainage.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-6">
              <h3 className="mb-2 font-serif text-base font-bold text-slate-900">
                3. Subterranean Geopathic Stress Lines
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Using digital Gauss meters and dowsing rods to identify subterranean energy lines,
                fault lines, Hartmann grids, and environmental stress zones.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-6">
              <h3 className="mb-2 font-serif text-base font-bold text-slate-900">
                4. Pancha Tattva Elemental Balance
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Reviewing colors, metals, room placements, water bodies, and kitchen flames to
                ensure the five cosmic elements are in harmonious synergy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Diagnostic Tools & Remedial Materials Showcase */}
      <section className="border-b border-slate-200 bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              FIRST-HAND METHODOLOGY &amp; EVIDENCE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Diagnostic Equipment &amp; Remedial Materials
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We employ authentic diagnostic instrumentation and certified high-purity elemental
              metals. No superstition, no guesswork, and zero masonry demolition.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Diagnostic Instruments */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/evidence/vastu-diagnostic-instruments.webp"
                  alt="Diagnostic equipment overview: digital compass, EMF meter, and dowsing rods used in 7Rays methodology"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                  Diagnostic Kit
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Calibrated Field Instruments
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Our on-site field kit includes a calibrated{' '}
                  <strong>Suunto digital compass</strong> for magnetic declination checks, a{' '}
                  <strong>Tenmars TM-191 digital EMF meter</strong> to detect localized
                  low-frequency electromagnetic radiation, and solid{' '}
                  <strong>brass dowsing rods</strong> for qualitative environmental scanning.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-500">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1">
                    Suunto 0° Digital Compass
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1">
                    Tenmars TM-191 EMF Meter
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1">
                    Solid Brass Dowsing Rods
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Metal Inlay Strips */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/evidence/vastu-remedial-metal-strips.webp"
                  alt="Authentic Brass, Copper, Zinc, and Lead non-demolition remedial strips with millimeter precision ruler"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
                  Remedial Craftsmanship
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Non-Demolition Elemental Metal Inlays
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  We use precision-cut, authentic metallic strips of <strong>Brass</strong>,{' '}
                  <strong>Copper</strong>, <strong>Zinc</strong>, and <strong>Lead</strong> (~100mm
                  × 20mm), embedded flush into existing tile joints and thresholds to rebalance
                  directional energy sectors without wall or floor destruction.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-500">
                  <span className="rounded-md bg-amber-50 px-2.5 py-1 font-semibold text-amber-800">
                    Brass Inlay
                  </span>
                  <span className="rounded-md bg-orange-50 px-2.5 py-1 font-semibold text-orange-800">
                    Pure Copper
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
                    Zinc Metal
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2.5 py-1 font-semibold text-zinc-800">
                    Elemental Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#FAF8F5] py-20 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-amber-700" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently Asked Questions: Vastu Audit
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-sm font-bold text-slate-900 sm:text-base">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
