import React from 'react'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema'
import { siteConfig } from '@/config/site'

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service & Consultation Advisory | 7Rays"
        description="Terms of service, consultation protocols, and disclaimer for 7Rays Astro Vastu advisory services."
        canonicalUrl={`${siteConfig.url}/terms`}
      />
      <BreadcrumbSchema items={[{ name: 'Terms of Service', url: '/terms' }]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="mb-6 font-serif text-3xl font-bold text-amber-400">
          Terms of Service &amp; Advisory Notice
        </h1>
        <div className="space-y-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
          <p>
            Welcome to {siteConfig.name}. By commissioning an Astro-Vastu audit or horoscope
            reading, you agree to our terms of practice.
          </p>
          <h2 className="pt-4 text-base font-bold text-slate-100">1. Advisory Nature</h2>
          <p>
            Vedic Astrology and Vastu Shastra provide energetic and psychological harmony. They do
            not replace certified structural engineering advice, medical diagnosis, or legal
            counsel.
          </p>
          <h2 className="pt-4 text-base font-bold text-slate-100">2. Non-Demolition Commitment</h2>
          <p>
            We strive to provide recommendations with zero civil destruction. Clients bear
            responsibility for executing recommended elemental additions safely within their
            property rules.
          </p>
        </div>
      </div>
    </>
  )
}
