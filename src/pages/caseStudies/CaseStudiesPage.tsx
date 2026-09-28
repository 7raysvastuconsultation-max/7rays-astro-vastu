import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { caseStudiesData } from '@/data/caseStudies'
import { siteConfig } from '@/config/site'

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Vastu Case Studies & Consultation Scenarios | 7Rays"
        description="Explore illustrative Astro-Vastu assessment scenarios demonstrating on-site spatial evaluation, non-demolition metallic remedies, and directional zoning methodologies in Bengaluru."
        canonicalUrl={`${siteConfig.url}/case-studies`}
      />
      <BreadcrumbSchema items={[{ name: 'Illustrative Scenarios', url: '/case-studies' }]} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            CONSULTATION METHODOLOGY
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-amber-400 sm:text-5xl">
            Illustrative Consultation Scenarios
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            The following scenarios illustrate how 7Rays Astro Vastu conducts on-site spatial
            assessments and formulates non-demolition remedial blueprints. These walkthroughs
            demonstrate our assessment protocols, compass degree mapping, and deliverables. Client
            identities and confidential floor plan details are protected under our privacy
            commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-amber-500/30"
            >
              <div>
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 font-semibold text-amber-400">
                    {cs.clientType}
                  </span>
                  <span>{cs.location}</span>
                </div>

                <h2 className="font-serif text-xl font-bold text-slate-100">{cs.title}</h2>

                <div className="mt-4 space-y-2">
                  <div className="text-xs text-rose-300">
                    <strong className="text-rose-400">Scenario Context:</strong> {cs.challenge}
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-amber-400">Assessment Protocol:</strong> {cs.solution}
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-800 pt-4">
                  <span className="mb-2 block text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    Assessment Deliverables &amp; Scope:
                  </span>
                  {cs.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-slate-800 pt-4">
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>View Illustrative Assessment</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
