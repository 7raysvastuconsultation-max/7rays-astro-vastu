# 7Rays Astro Vastu — Content Gap Register & E-E-A-T Action Log

**Canonical Production Domain:** `https://7raysastrovastu.in`  
**Execution Date:** 2026-09-29  
**Ethical & Search Standard:** Google Search Quality Rater Guidelines (E-E-A-T) + Zero Deceptive Claims Policy  
**Status:** Audit Completed — Gaps Catalogued with Actionable Ownership

---

## 1. E-E-A-T & Truth Governance Summary

To maintain unquestioned integrity and protect the website against Google algorithmic quality penalties, the codebase enforces strict truth-in-advertising guidelines:

- **Zero Fabricated Reviews:** No fake 5-star ratings or invented client testimonials.
- **Zero Unsupported Claims:** No claims of "100% guaranteed results", "miracle cures", or "guaranteed wealth".
- **Clear Demarcation:** Educational scenarios and architectural illustrations are strictly separated from verified, signed client case studies.
- **Consultant Entity Attribution:** All advice is anchored to the primary consultant entity: **Rishwa Sinha** (Certified Vastu Consultant).

---

## 2. Content Gap Register Table

| Area / Asset                        | Current Status           | Finding / Analysis                                                                                                             | Recommendation / Next Step                                                                                                              | Resolution Classification          |
| :---------------------------------- | :----------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------- |
| **Non-Demolition Vastu Page**       | **RESOLVED**             | Missing dedicated commercial pillar in Vastu hierarchy.                                                                        | Created `/vastu/non-demolition` with full Panchatattva elemental metal guide, 16 zones, schemas.                                        | **PASSED**                         |
| **International Consultation Page** | **RESOLVED**             | Missing global/NRI remote architecture.                                                                                        | Created `/international` with CAD blueprint submission guide, time zones (EST, PST, GST, GMT, SGT, AEST), and satellite mapping.        | **PASSED**                         |
| **Canonical Domain in Metadata**    | **RESOLVED**             | Legacy `.com` references existed in some configuration files and schema documentation.                                         | Standardized 100% of runtime configuration, sitemaps, robots.txt, and schemas to `https://7raysastrovastu.in`.                          | **PASSED**                         |
| **Real Office & Workspace Photos**  | **PENDING OWNER**        | Site currently uses tasteful sacred geometry graphics, astrolabe vector illustrations, and brand motifs.                       | Provide 3–5 real high-resolution photographs of the Dasarahalli Bangalore office and consulting desk.                                   | **OWNER ACTION REQUIRED**          |
| **Consultant Portrait Photography** | **PENDING OWNER**        | Consultant profile is thoroughly documented in text (`AboutPage.tsx`), but high-resolution portrait photograph is pending.     | Upload authentic professional portrait of consultant Rishwa Sinha to `/images/team/rishwa-sinha.jpg`.                                   | **OWNER ACTION REQUIRED**          |
| **Real Diagnostic Tool Photos**     | **PENDING OWNER**        | Energy scanning tools (calibrated digital compass, Gauss meter, Lecher antenna, dowsing rods) are described in text.           | Provide genuine photographs of diagnostic tools used during on-site inspections for the Vastu Audit page.                               | **OWNER ACTION REQUIRED**          |
| **Signed Client Testimonials**      | **PENDING OWNER**        | Zero fabricated testimonials published. Client privacy is respected.                                                           | As real clients grant written consent, add verified quotes with property type and city context.                                         | **OWNER ACTION REQUIRED**          |
| **India-Wide Expansion Pages**      | **DEFERRED (BY DESIGN)** | Thin city pages (Mumbai, Delhi, Pune, Hyderabad, Chennai) have intentionally NOT been created to avoid doorway page penalties. | Build national topical authority first; only deploy city hubs after establishing physical consultation capacity and local demand.       | **NOT APPLICABLE (Current Phase)** |
| **FAQ Rich Snippets Compliance**    | **VERIFIED**             | FAQ schema configured correctly across services and guides.                                                                    | Maintained for semantic parsing and AI answer engines, with the explicit understanding that Google restricts FAQ rich results on SERPs. | **PASSED**                         |

---

## 3. Real Evidence System: Owner Action Checklist

Prior to public marketing campaigns, the business owner should supply the following authentic assets:

- [ ] **Asset 1: Headshot of Consultant Rishwa Sinha**
  - **Location:** `public/images/rishwa-sinha.jpg`
  - **Specs:** 800x800px, professional attire, warm natural lighting.
  - **Purpose:** Enriches `PersonSchema` and `AboutPage.tsx` with verified human E-E-A-T authority.

- [ ] **Asset 2: Bangalore Consultation Office / Studio**
  - **Location:** `public/images/office-workspace.jpg`
  - **Specs:** 1200x800px, showing reception or consultation desk at Balaji Layout, Dasarahalli.
  - **Purpose:** Grounds the `LocalBusinessSchema` with verifiable physical location evidence.

- [ ] **Asset 3: Diagnostic Instruments in Action**
  - **Location:** `public/images/diagnostic-tools.jpg`
  - **Specs:** 1200x800px, showing compass degree verification or energy scanning instrumentation.
  - **Purpose:** Solidifies scientific diagnostic positioning on `/vastu-services/vastu-audit`.

- [ ] **Asset 4: Cloudflare D1 / Webhook Integration (Optional for Email Automation)**
  - **Location:** Cloudflare Dashboard > Pages > Settings > Environment Variables
  - **Variables:** `RESEND_API_KEY` or `WEBHOOK_URL` to route contact form submissions to the owner's inbox automatically.

---

## 4. India-Wide & Tier-1 City Expansion Gate

The following evaluation gate must be passed before creating city-specific landing pages:

1. **Demand Validation:** Monthly search volume in target city exceeds 200+ commercial intent queries.
2. **Operational Feasibility:** Principal consultant is available for either on-site travel or structured remote CAD sessions for that region.
3. **Unique Local Content:** Each city page must contain genuine local context (e.g., Mumbai high-rise sea-facing orientation vs. Delhi NCR independent builder floors vs. Hyderabad HITEC City commercial layouts).
4. **Doorway Prevention:** Pages must not share duplicate boilerplate text.
