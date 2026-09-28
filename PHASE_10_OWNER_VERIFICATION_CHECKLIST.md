# 7Rays Astro Vastu — Owner Verification Checklist

**Phase 10: E-E-A-T & Real-World Authority Engine**
**Document:** PHASE_10_OWNER_VERIFICATION_CHECKLIST.md
**Status:** Pending Business Owner Input
**Date:** September 2026

---

## 1. PURPOSE OF THIS CHECKLIST

Google's E-E-A-T framework benefits immensely from real-world, verifiable credentials, professional memberships, and documented client endorsements.

To maintain 100% truthfulness and protect the site from search penalties, **none of these items have been added to the website**. They are cataloged here for Rishwa Sinha and the 7Rays business owner to confirm. Once verified, they can be safely incorporated into the site architecture and schema graph.

---

## 2. HIGH-PRIORITY VERIFICATION ITEMS

| #     | Item to Verify                                | Value to E-E-A-T                                                                                                                            | Owner Action Required                                                                                                                                   | Current Status in Site                                                                                                                           |
| ----- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1** | **Vastu Certification Issuing Body**          | Would allow schema `hasCredential` to link to a formal educational or professional institute (e.g. AIVS, Council of Vedic Astrology, etc.). | Provide the exact name of the institute/academy that awarded the "Certified Vastu Consultant" credential, year awarded, and certificate link if public. | Described simply as "Certified Vastu Consultant" without fabricated institution name.                                                            |
| **2** | **Formal Educational Background**             | Academic degrees (e.g. B.Arch, B.E., B.Com, B.A., M.A.) substantially increase Google Knowledge Graph author credibility.                   | Confirm Rishwa Sinha's formal university degree(s) and graduating institution.                                                                          | Omitted from site until verified.                                                                                                                |
| **3** | **Professional Memberships**                  | Industry associations (e.g. Indian Council of Astrological Sciences, Vastu Science Congress, etc.) reinforce institutional standing.        | List any active memberships, registration numbers, or formal affiliations.                                                                              | Zero unverified memberships claimed.                                                                                                             |
| **4** | **Verified Client Testimonials with Consent** | Genuine client quotes directly improve conversion rates and consumer trust.                                                                 | Provide 3–5 real client testimonials with explicit written consent to publish display name, general locality, and brief review text.                    | Testimonial section displays transparent interim message: _"Client testimonials will be published here as verified feedback becomes available."_ |
| **5** | **Genuine Client Case Studies**               | Detailed real-world case studies prove practical experience.                                                                                | Provide 1–2 real client engagements where the client has agreed to anonymized floor plan and remedial overview publication.                             | Existing entries labeled strictly as **"Illustrative Vastu Assessment"** and **"Illustrative Consultation Scenario"**.                           |
| **6** | **Media Appearances / Publications**          | Features in news outlets, magazines, architectural journals, or podcasts provide powerful third-party authority signals.                    | Provide URLs or publication names of any interviews, guest articles, or press coverage.                                                                 | Zero unverified press or media claimed.                                                                                                          |
| **7** | **Official Social Media Profiles**            | Google's Knowledge Graph uses official social links (`sameAs`) to resolve entity identity across the web.                                   | Provide official links for LinkedIn, Instagram, Facebook, or YouTube once active and branded.                                                           | Omitted from schema and footer (`sameAs` contains no invented profiles).                                                                         |
| **8** | **Public Contact Phone & Email**              | Allows direct customer contact and enhances Google Local Trust signals.                                                                     | Provide business phone number and email to add to `.env` (`VITE_CONTACT_PHONE`, `VITE_CONTACT_EMAIL`).                                                  | System safely defaults to appointment request modal without hardcoded dummy numbers.                                                             |
| **9** | **Official Business Founding Year**           | Clarifies exact founding milestone in entity schema (`foundingDate`).                                                                       | Confirm the year 7Rays Astro Vastu was officially founded.                                                                                              | "5+ years professional experience" is verified and used across site.                                                                             |

---

## 3. INSTRUCTIONS FOR INTEGRATING VERIFIED ITEMS

When the owner provides verified answers:

1. Update `src/config/business.ts` with confirmed values.
2. Update `src/components/seo/schemas/PersonSchema.tsx` and `LocalBusinessSchema.tsx`.
3. Add verified testimonials to `verifiedTestimonials` array in `src/components/home/TestimonialsSection.tsx`.
4. Run `npm run validate:business` and full QA suite before deploying.
