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

        {/* Evaluation Protocol & AEO Direct Answer */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            AUDIT STANDARDS &amp; DELIVERABLES
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-slate-100 sm:text-3xl">
            How Are Spatial Consultation Scenarios Formulated?
          </h2>
          <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs leading-relaxed text-amber-200 sm:text-sm">
            <strong>Direct Summary:</strong> Every 7Rays Astro Vastu consultation begins with an
            unbiased CAD blueprint audit, degree-calibrated magnetic North verification, and 16-zone
            Pancha Tattva energy vector mapping. Rather than prescribing structural demolition, our
            remedial blueprints prioritize non-invasive elemental metallic strips (brass, copper,
            zinc, aluminium), directional crystal placements, and spatial activity realignment.
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
            Each scenario documented above reflects real-world architectural challenges encountered
            across urban high-rises, commercial offices, and standalone villas. All technical
            deliverables provided to clients include scaled 16-zone energy overlays, marked entrance
            padas, and clear step-by-step remediation plans.
          </p>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-100 sm:text-2xl">
                Ready to assess the energy flow of your space?
              </h3>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Connect with Certified Consultant Rishwa Sinha for an on-site or digital CAD audit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-500"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/vastu/non-demolition"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400 hover:text-white"
              >
                <span>Explore Remedies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
