import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { caseStudiesData } from '@/data/caseStudies'
import { siteConfig } from '@/config/site'
import { businessConfig } from '@/config/business'
import { AuthorBioBox } from '@/components/common/AuthorBioBox'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudiesData.find((item) => item.slug === slug)

  if (!cs) {
    return (
      <div className="py-24 text-center text-white">
        <h1 className="text-2xl font-bold">Assessment Scenario Not Found</h1>
        <Link to="/case-studies" className="mt-4 inline-block text-amber-400 underline">
          Back to all illustrative assessments
        </Link>
      </div>
    )
  }

  const canonicalUrl = `${siteConfig.url}/case-studies/${cs.slug}`

  return (
    <>
      <SEOHead
        title={`${cs.seoTitle || cs.title} | 7Rays Astro Vastu`}
        description={`Illustrative consultation scenario: ${cs.challenge.slice(0, 140)}...`}
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Illustrative Scenarios', url: '/case-studies/' },
          { name: cs.title, url: `/case-studies/${cs.slug}/` },
        ]}
      />

      {/* 1. HERO SECTION (Dark Luxury) */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← Back to all illustrative scenarios</span>
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-semibold text-amber-300">
              {cs.clientType} Assessment
            </span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>{cs.location}</span>
            </div>
            <span className="text-slate-400">• {cs.remedyType}</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            {cs.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Request Similar Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${businessConfig.phone || '+91 70910 21616'}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Call {businessConfig.displayPhone || '+91 70910 21616'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & PRIVACY NOTICE (Warm Cream Background) */}
      <section className="border-b border-amber-200/80 bg-[#FAF8F5] py-4 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-amber-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/case-studies" className="transition hover:text-amber-800">
              Scenarios
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-medium text-slate-800 truncate max-w-xs">{cs.title}</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
            <span>Educational composite complying with strict client privacy policies.</span>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY CORE ANALYSIS (Clean White Background) */}
      <section className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Challenge Section */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
            <span className="text-xs font-bold tracking-widest text-rose-700 uppercase">
              INITIAL PROPERTY DIAGNOSTIC
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900">
              Assessment Scenario Context &amp; Challenge
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{cs.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="rounded-2xl border border-amber-200 bg-[#FAF8F5] p-6 sm:p-8">
            <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
              16-ZONE REMEDIAL PROTOCOL
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900">
              Consultation Methodology &amp; Remedial Blueprint
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{cs.solution}</p>
          </div>

          {/* Results Section */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase">
              VERIFIABLE DELIVERABLES
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900">
              Assessment Deliverables &amp; Scope
            </h2>
            <div className="mt-5 space-y-3">
              {cs.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="leading-relaxed">{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES (Warm Off-White Background) */}
      <section className="border-t border-slate-200 bg-[#FBF9F5] py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              CROSS-REFERENCED PROTOCOLS
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900">
              Related Spatial Consultation Services
            </h3>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              Learn more about the specific consultation frameworks referenced in this scenario:
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {cs.clientType === 'Commercial' ? (
              <>
                <Link
                  to="/vastu/commercial"
                  className="rounded-xl border border-amber-200/80 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:text-amber-800"
                >
                  Commercial Vastu Consultation →
                </Link>
                <Link
                  to="/vastu/office-vastu"
                  className="rounded-xl border border-amber-200/80 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:text-amber-800"
                >
                  Office Layout Planning →
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/vastu/residential"
                  className="rounded-xl border border-amber-200/80 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:text-amber-800"
                >
                  Residential Vastu Consultation →
                </Link>
                <Link
                  to="/vastu/apartment-vastu"
                  className="rounded-xl border border-amber-200/80 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:text-amber-800"
                >
                  Apartment &amp; Flat Vastu →
                </Link>
              </>
            )}
            <Link
              to="/vastu/non-demolition"
              className="rounded-xl border border-amber-200/80 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:text-amber-800"
            >
              Non-Demolition Remedies →
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 LEAD CONSULTANT METHODOLOGY & BIO */}
      <section className="border-t border-slate-100 bg-[#FCFBF8] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AuthorBioBox />
        </div>
      </section>

      {/* 5. FINAL CTA BANNER (Dark Slate-950) */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Facing a Similar Layout Challenge?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Book a confidential property audit with Certified Vastu Consultant Rishwa Sinha. Available on-site in Bengaluru or digitally across India.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
            >
              <span>Request Property Assessment</span>
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

