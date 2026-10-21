import React from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Data Protection & Confidentiality | 7Rays"
        description="Privacy policy and data confidentiality practices for 7Rays Astro Vastu client consultations, birth charts, architectural floor plans, and personal data."
        canonicalUrl={`${siteConfig.url}/privacy-policy`}
      />
      <BreadcrumbSchema items={[{ name: 'Privacy Policy', url: '/privacy-policy/' }]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-serif text-3xl font-bold text-amber-400 sm:text-4xl">
          Privacy Policy &amp; Data Confidentiality
        </h1>
        <p className="mb-8 text-xs text-slate-400 sm:text-sm">
          Last updated: October 2026 • 7Rays Astro Vastu Consultancy, Bengaluru, Karnataka
        </p>

        <div className="space-y-6 text-xs leading-relaxed text-slate-300 sm:text-sm">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">1. Scope &amp; Commitment to Confidentiality</h2>
            <p>
              At {siteConfig.legalName}, we recognize that astrological consultations and architectural energy audits involve deeply personal, familial, and commercial information. We are committed to maintaining the highest level of confidentiality and data security for all clients across India and internationally.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">2. Information We Collect</h2>
            <p>
              To deliver personalized Astro-Vastu assessments, we collect only the information necessary for calculation and energy mapping:
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-slate-300">
              <li><strong className="text-slate-100">Astrological Information:</strong> Exact date of birth, time of birth (hours, minutes), and city or geographic coordinates of birth required for calculating Janam Kundli, planetary dashas, and divisional charts.</li>
              <li><strong className="text-slate-100">Property &amp; Architectural Blueprints:</strong> Floor plans, layout drawings, compass bearings, photographs, and geographic location coordinates required for 16-zone Vastu Shakti Chakra alignment and energy mapping.</li>
              <li><strong className="text-slate-100">Contact &amp; Administrative Data:</strong> Name, phone number, email address, and billing information necessary for scheduling, report delivery, and consultation coordination.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">3. How We Use Client Information</h2>
            <p>
              Your personal information is used exclusively to evaluate spatial energetics, generate customized astrological remediation reports, and communicate directly with you regarding your consultation. We do not use your information for unsolicited third-party marketing, and we never sell, rent, or trade client records under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">4. Non-Disclosure &amp; Security Standards</h2>
            <p>
              Horoscope analysis notes, business architectural layouts, and family residential floor plans are treated as strictly confidential work product. All submitted blueprints and astrological calculations are stored on access-controlled digital repositories. Access is restricted exclusively to principal consultant Rishwa Sinha and authorized technical staff assisting in chart rendering.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">5. Data Retention &amp; Deletion Rights</h2>
            <p>
              Client charts and consultation summaries are retained securely to allow historical reference for follow-up annual dasha transitions or subsequent property reviews. Clients retain the right at any time to request complete permanent deletion of their floor plans, birth records, and consultation notes by contacting us in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-100 sm:text-lg">6. Contact for Privacy Inquiries</h2>
            <p>
              For inquiries regarding data confidentiality, chart archiving, or to request record deletion, contact 7Rays Astro Vastu at our Bengaluru headquarters: 3J64+827, Balaji Layout, Dasarahalli, Bengaluru, Karnataka 560024, or via our official consultation channels.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
