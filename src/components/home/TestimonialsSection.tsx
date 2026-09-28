import React from 'react'
import { MessageSquare, ExternalLink } from 'lucide-react'
import { businessConfig } from '@/config/business'

/**
 * TestimonialsSection — Phase 10 E-E-A-T Compliance
 *
 * POLICY: Only verified, permission-obtained client testimonials may be displayed here.
 * Previous unverified testimonials (Priya S., Rohit Mehta, Ananya Rao, Ar. Kunal Sharma)
 * have been removed as they could not be authenticated.
 *
 * Fabricated names, cities, roles, avatar images, and star ratings violate
 * Google's E-E-A-T guidelines and the site's own editorial standards.
 *
 * To add a real testimonial:
 *   1. Obtain written or recorded client permission
 *   2. Document permission in TESTIMONIAL_VERIFICATION_POLICY.md
 *   3. Add to the `verifiedTestimonials` array below
 */

interface VerifiedTestimonial {
  /** Client-approved display name (full name, first name + last initial, or pseudonym with permission) */
  displayName: string
  /** Client role or context (e.g. "Homeowner", "Business Owner") */
  role: string
  /** General location only — no street addresses */
  location: string
  /** Client-provided quote — exact words, permission documented */
  quote: string
  /** Month and year only — no specific dates without permission */
  period: string
  /** Consultation type */
  serviceType: string
}

// ─── PENDING VERIFICATION ─────────────────────────────────────────────────────
// No verified testimonials are currently on file.
// To add verified testimonials, follow the policy in TESTIMONIAL_VERIFICATION_POLICY.md
const verifiedTestimonials: VerifiedTestimonial[] = []
// ──────────────────────────────────────────────────────────────────────────────

export const TestimonialsSection: React.FC = () => {
  const gbpUrl = businessConfig.gbpUrl

  // If verified testimonials exist in future, render them
  if (verifiedTestimonials.length > 0) {
    return (
      <section className="border-b border-slate-200 bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              CLIENT EXPERIENCES
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verifiedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="font-serif text-sm leading-relaxed text-slate-700 italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold text-slate-900">{t.displayName}</p>
                  <p className="text-[11px] text-slate-500">
                    {t.role} · {t.location} · {t.period}
                  </p>
                  <p className="text-[11px] text-amber-700">{t.serviceType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Default: Transparent verification message and Google Business Profile link
  return (
    <section className="border-b border-slate-200 bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
            CLIENT FEEDBACK
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Client Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
            Client testimonials will be published here as verified feedback becomes available.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-4">
            <a
              href={gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <MessageSquare className="h-4 w-4" />
              <span>View Independent Reviews on Google</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <p className="text-[11px] text-slate-400">
              Google Business Profile · Verified Location &amp; Ratings
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-5 text-left">
            <p className="text-xs font-semibold text-slate-700">
              Verification &amp; Privacy Policy
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
              We publish client feedback only with explicit written consent and verified
              consultation records. To protect client confidentiality in sensitive family and
              commercial matters, unauthorized or fabricated testimonials are never displayed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
