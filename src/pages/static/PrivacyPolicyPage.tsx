import React from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for 7Rays Astro Vastu client consultations, data protection, and confidential horoscope information."
        canonicalUrl={`${siteConfig.url}/privacy-policy`}
      />
      <BreadcrumbSchema items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="mb-6 font-serif text-3xl font-bold text-amber-400">Privacy Policy</h1>
        <div className="space-y-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
          <p>
            At {siteConfig.legalName}, protecting your personal information and birth data
            confidentiality is our highest priority.
          </p>
          <h2 className="pt-4 text-base font-bold text-slate-100">1. Data Collected</h2>
          <p>
            We collect birth date, time, location coordinates, property blueprints, and contact
            details solely to generate astrological charts and environmental energy audit
            blueprints.
          </p>
          <h2 className="pt-4 text-base font-bold text-slate-100">
            2. Non-Disclosure &amp; Confidentiality
          </h2>
          <p>
            Your family horoscope, financial concerns, and corporate architectural plans are never
            sold, traded, or shared with third parties under any circumstance.
          </p>
        </div>
      </div>
    </>
  )
}
