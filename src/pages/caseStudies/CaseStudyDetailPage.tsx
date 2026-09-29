import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { caseStudiesData } from '@/data/caseStudies'
import { siteConfig } from '@/config/site'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudiesData.find((item) => item.slug === slug)

  if (!cs) {
    return (
      <div className="py-24 text-center">
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
          { name: 'Illustrative Scenarios', url: '/case-studies' },
          { name: cs.title, url: `/case-studies/${cs.slug}` },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/case-studies"
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all illustrative scenarios</span>
        </Link>

        {/* Illustrative Notice Banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-xs text-amber-200">
          <strong className="text-amber-400">Illustrative Assessment Scenario:</strong> This
          walkthrough illustrates our on-site spatial audit methodology and deliverable scope. In
          compliance with client privacy and advertising truthfulness standards, this scenario is an
          educational composite that does not represent a specific client engagement, customer
          review, or guaranteed commercial outcome.
        </div>

        <header className="border-b border-slate-800 pb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 font-semibold text-amber-400">
              {cs.clientType}
            </span>
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>{cs.location}</span>
            </div>
            <span>• {cs.remedyType}</span>
          </div>

          <h1 className="font-serif text-3xl leading-tight font-bold text-slate-100 sm:text-4xl">
            {cs.title}
          </h1>
        </header>

        {/* Challenge Section */}
        <div className="mt-8 rounded-xl border border-rose-900/30 bg-rose-950/10 p-6">
          <h2 className="mb-2 text-sm font-bold tracking-wider text-rose-400 uppercase">
            Assessment Scenario Context
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">{cs.challenge}</p>
        </div>

        {/* Solution Section */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="mb-2 text-sm font-bold tracking-wider text-amber-400 uppercase">
            Consultation Methodology &amp; Remedial Blueprint
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">{cs.solution}</p>
        </div>

        {/* Results Section */}
        <div className="mt-8 rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-6">
          <h2 className="mb-4 text-sm font-bold tracking-wider text-emerald-400 uppercase">
            Assessment Deliverables &amp; Scope
          </h2>
          <div className="space-y-3">
            {cs.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-200 sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services Recommendation */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/30 p-6">
          <h3 className="font-serif text-base font-bold text-slate-100">Related Spatial Services</h3>
          <p className="mt-1 text-xs text-slate-400">
            Learn more about the specific consultation frameworks referenced in this scenario:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {cs.clientType === 'Commercial' ? (
              <>
                <Link
                  to="/vastu/commercial"
                  className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20"
                >
                  Commercial Vastu Consultation →
                </Link>
                <Link
                  to="/vastu/office-vastu"
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-400"
                >
                  Office Layout Planning →
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/vastu/residential"
                  className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20"
                >
                  Residential Vastu Consultation →
                </Link>
                <Link
                  to="/vastu/apartment-vastu"
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-400"
                >
                  Apartment &amp; Flat Vastu →
                </Link>
              </>
            )}
            <Link
              to="/vastu/non-demolition"
              className="rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-400"
            >
              Non-Demolition Remedies →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-100">
                Facing a similar layout challenge?
              </h3>
              <p className="text-xs text-slate-400">
                Book a confidential property audit with certified consultant Rishwa Sinha.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
              >
                <span>Request Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
