import React from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service & Advisory Notice | 7Rays"
        description="Terms of service, professional advisory guidelines, and consultation protocol for 7Rays Astro Vastu residential and commercial clients."
        canonicalUrl={`${siteConfig.url}/terms`}
      />
      <BreadcrumbSchema items={[{ name: 'Terms of Service', url: '/terms/' }]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-serif text-3xl font-bold text-amber-400 sm:text-4xl">
          Terms of Service &amp; Professional Advisory Notice
        </h1>
        <p className="mb-8 text-xs text-slate-400 sm:text-sm">
          Last updated: October 2026 • 7Rays Astro Vastu Consultancy, Bengaluru, Karnataka
        </p>

        <div className="space-y-6 text-xs leading-relaxed text-slate-300 sm:text-sm">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">1. Nature of Advisory Practice</h2>
            <p>
              7Rays Astro Vastu provides spatial alignment, architectural Vastu Shastra evaluations, and Vedic astrological consulting. These advisory services are intended to optimize environmental balance, directional harmony, and psychological well-being through traditional Vedic sciences and modern non-demolition principles.
            </p>
            <p>
              Vastu Shastra and Vedic Astrology consultations do not constitute or substitute for licensed structural engineering advice, civil architectural certification, municipal building permits, legal counsel, or licensed medical healthcare diagnosis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">2. Non-Demolition Remedial Principle</h2>
            <p>
              Our primary methodology prioritizes non-invasive remediation using elemental metals (brass, copper, zinc, aluminium), color spectrum balancing, lighting recalibration, and spatial zone reallocation. While these remedies aim to achieve equilibrium without civil destruction, clients are responsible for ensuring that any physical installation complies with building bylaws, tenancy agreements, and society regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">3. Client Responsibilities &amp; Data Accuracy</h2>
            <p>
              Accurate consultation outcomes depend directly upon the precision of client-supplied data. Clients must furnish accurate birth time, date, place, architectural floor plans with verified geographic orientation (true North bearings), and transparent disclosures of site conditions. 7Rays Astro Vastu cannot be held responsible for calculations influenced by erroneous baseline inputs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">4. Scheduling, Delivery &amp; Cancellation</h2>
            <p>
              On-site consultations in Bengaluru and remote online sessions across India and abroad are confirmed upon appointment scheduling. Rescheduling requests should be communicated at least 24 hours prior to the scheduled walkthrough or video conference. Written remedial blueprints and report documentation are delivered within agreed project timelines following site evaluation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">5. Intellectual Property &amp; Jurisdictional Scope</h2>
            <p>
              All customized remedial layouts, energy balance charts, and proprietary evaluation documentation provided to clients are for the client's sole personal or corporate property use. Any disputes arising from advisory engagements are subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
