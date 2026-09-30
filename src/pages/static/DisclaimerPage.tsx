import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'

export const DisclaimerPage: React.FC = () => {
  const canonicalUrl = `${siteConfig.url}/disclaimer`

  return (
    <>
      <SEOHead
        title="Consultation Disclaimer & Scope of Practice | 7Rays Astro Vastu"
        description="Official disclaimer regarding Vastu Shastra and Vedic Astrology advisory services. Understanding the boundaries between traditional advisory and medical, financial, or architectural engineering."
        canonicalUrl={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Disclaimer', url: '/disclaimer' },
        ]}
      />

      <div className="border-b border-amber-500/20 bg-slate-950 py-16 text-slate-100 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
            <span>ETHICAL TRANSPARENCY &amp; COMPLIANCE</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-slate-100 sm:text-5xl">
            Disclaimer &amp; Professional Scope
          </h1>
          <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
            Last Updated: September 2026. Please read this statement carefully before commissioning
            any Vastu Shastra or Vedic Astrology consultation from 7Rays Astro Vastu.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-xs leading-relaxed sm:text-sm">
            <section className="rounded-xl border border-amber-200/80 bg-[#FAF8F5] p-6">
              <h2 className="text-base font-bold text-slate-900">
                Summary of Professional Boundaries
              </h2>
              <p className="mt-2 text-slate-700">
                The advisory services provided by 7Rays Astro Vastu and consultant Rishwa Sinha are
                grounded in classical Indian architectural Vastu Shastra principles and Parashari /
                KP Vedic astrology traditions. They are intended for energetic alignment, spatial
                harmony, and personal life perspective. They are <strong>never</strong> a substitute
                for certified structural engineering, licensed architectural permits, qualified
                medical treatment, legal counsel, or certified financial advisory.
              </p>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 font-serif text-lg font-bold text-slate-900">
                1. No Guaranteed Outcomes or "Miracle" Claims
              </h2>
              <p className="text-slate-700">
                Classical Vastu and astrological methodologies suggest environmental and behavioral
                modifications to foster balance and tranquility. However, human outcomes depend on
                diverse personal, economic, psychological, and circumstantial factors. 7Rays Astro
                Vastu makes <strong>no warranties, guarantees, or representations</strong> regarding
                guaranteed wealth generation, guaranteed business profits, guaranteed marriage, or
                specific outcomes. We strictly repudiate superstitious, fear-based, or miraculous
                promises.
              </p>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 font-serif text-lg font-bold text-slate-900">
                2. Distinction from Scientific &amp; Medical Practice
              </h2>
              <p className="text-slate-700">
                While our diagnostic audits employ physical measurement tools (such as digital
                compasses and magnetic Gauss meters to assess environmental EMF and directional
                degree accuracy), Vastu Shastra and Jyotish are traditional holistic systems. They
                are not medical sciences and must not be utilized for diagnosing, treating, curing,
                or preventing any physical or mental health condition. For all medical and
                psychological concerns, you must consult licensed healthcare professionals.
              </p>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 font-serif text-lg font-bold text-slate-900">
                3. Structural Engineering &amp; Legal Compliance
              </h2>
              <p className="text-slate-700">
                7Rays Astro Vastu prioritizes non-demolition solutions (such as metallic boundary
                inlays, color harmonization, and furniture realignment). However, if any
                recommendation involves structural changes, wall modifications, or electrical
                additions, the client is solely responsible for consulting a licensed
                civil/structural engineer and securing all necessary approvals from local municipal
                authorities, housing society associations, or landlords prior to undertaking any
                construction.
              </p>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 font-serif text-lg font-bold text-slate-900">
                4. Financial &amp; Investment Decisions
              </h2>
              <p className="text-slate-700">
                Astrological timing analysis and business Vastu recommendations provide traditional
                perspectives on organizational dynamics and spatial focus. They do not constitute
                registered financial, accounting, tax, or investment advice. You must perform
                independent financial due diligence with certified financial planners and chartered
                accountants before entering business contracts, executing real estate transactions,
                or investing capital.
              </p>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 font-serif text-lg font-bold text-slate-900">
                5. Client Discretion &amp; Free Will
              </h2>
              <p className="text-slate-700">
                By engaging 7Rays Astro Vastu, you acknowledge that all advice is received in an
                advisory capacity and that you retain full free will, discretion, and responsibility
                regarding whether and how you implement any guidance offered.
              </p>
            </section>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <Link
                to="/terms"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Terms of Service</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                <span>Contact Compliance Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
