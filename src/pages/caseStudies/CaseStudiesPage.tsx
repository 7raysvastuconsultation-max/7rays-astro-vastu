import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileText,
  Compass,
  Layers,
  MapPin,
  PhoneCall,
  Sparkles,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { caseStudiesData } from '@/data/caseStudies'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Case Studies & Consultation Scenarios | 7Rays"
        description="Explore illustrative Astro-Vastu assessment scenarios demonstrating on-site spatial evaluation, non-demolition metallic remedies, and directional zoning methodologies in Bengaluru."
        canonicalUrl={`${siteConfig.url}/case-studies`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Illustrative Scenarios', url: '/case-studies/' },
        ]}
      />

      {/* 1. HERO SECTION (Dark Luxury) */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-amber-300 uppercase backdrop-blur-md">
              <FileText className="h-3.5 w-3.5" />
              <span>CONSULTATION METHODOLOGY • REAL-WORLD ASSESSMENTS</span>
            </div>

            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Illustrative Consultation{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Scenarios
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore how 7Rays Astro Vastu conducts on-site spatial assessments and formulates non-demolition remedial blueprints.
              These educational walkthroughs demonstrate our compass degree mapping, elemental balancing protocols, and deliverables.
            </p>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4 text-left text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
                <span>100% Zero Demolition</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-amber-400 shrink-0" />
                <span>16-Zone Grid Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Panchatattva Balancing</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Client Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & PRIVACY NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800">Illustrative Scenarios</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
            <span>
              All client identities, proprietary blueprints, and sensitive data are strictly protected under our confidentiality policy.
            </span>
          </div>
        </div>
      </section>

      {/* 3. SCENARIOS DIRECTORY GRID (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              TECHNICAL CASE STUDIES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Spatial Assessment Case Studies
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Select an illustrative scenario below to review diagnostic procedures, instrumentation, and remedial specifications applied in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="flex flex-col justify-between rounded-2xl border border-amber-200/70 bg-[#FAF8F5] p-6 sm:p-8 shadow-2xs transition hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900">
                      {cs.clientType} Assessment
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-amber-700" />
                      <span>{cs.location}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-rose-200/70 bg-rose-50/50 p-4 text-xs leading-relaxed text-slate-700">
                      <strong className="text-rose-700 font-semibold uppercase tracking-wider block mb-1">
                        Scenario Context:
                      </strong>{' '}
                      {cs.challenge}
                    </div>
                    <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4 text-xs leading-relaxed text-slate-700">
                      <strong className="text-amber-800 font-semibold uppercase tracking-wider block mb-1">
                        Assessment Protocol:
                      </strong>{' '}
                      {cs.solution}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <span className="mb-3 block text-xs font-bold tracking-wider text-emerald-700 uppercase">
                      Assessment Deliverables &amp; Scope:
                    </span>
                    <div className="space-y-2">
                      {cs.results.map((res, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-xs font-medium text-slate-500">{cs.remedyType}</span>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-950"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUDIT STANDARDS & METHODOLOGY (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200 bg-white p-8 sm:p-10 shadow-xs">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              AUDIT STANDARDS &amp; DELIVERABLES
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              How Are Spatial Consultation Scenarios Formulated?
            </h2>

            <div className="mt-6 rounded-xl border border-l-4 border-amber-200 border-l-amber-500 bg-[#FAF8F5] p-5 text-sm leading-relaxed text-slate-800">
              <strong>Direct Summary:</strong> Every 7Rays Astro Vastu consultation begins with an
              unbiased CAD blueprint audit, degree-calibrated magnetic North verification, and 16-zone
              Pancha Tattva energy vector mapping. Rather than prescribing structural demolition, our
              remedial blueprints prioritize non-invasive elemental metallic strips (brass, copper,
              zinc, aluminium), directional crystal placements, and spatial activity realignment.
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Each scenario documented above reflects real-world architectural challenges encountered
              across urban high-rises, commercial offices, and standalone villas. All technical
              deliverables provided to clients include scaled 16-zone energy overlays, marked entrance
              padas, and clear step-by-step remediation plans.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FINAL BOTTOM CTA (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Assess the Energy Flow of Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Connect with Certified Consultant Rishwa Sinha for an on-site or digital CAD audit tailored to your property.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

