# 7Rays Astro Vastu — SEO Implementation Matrix

> **Document Type:** Actionable SEO & Content Implementation Matrix  
> **Production Canonical Domain:** `https://7raysastrovastu.in`  
> **Date:** September 2026  
> **Constraint:** Pure On-Site Code & Content Improvements | Zero DNS/Hostinger Changes

---

## 1. Classification & Status Key

- **CRITICAL:** Foundational errors that directly prevent crawling, indexing, or cause severe ranking penalties.
- **HIGH:** High-impact intent differentiation, H1 keyword alignment, or conversion bottlenecks.
- **MEDIUM:** Semantic internal linking enhancements, cross-sells, or contextual anchor text diversity.
- **LOW:** Micro-copy polish, styling refinements, or secondary meta tag adjustments.
- **OPTIONAL:** Post-launch telemetry explorations dependent on live Search Console data.

---

## 2. Actionable Implementation Register

| ID | Audit Source | Issue | Current Implementation | Required Change | Affected Route(s) | Affected File(s) | SEO Reason | Priority | Implementation Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **IMP-01** | `SEO_KEYWORD_CANNIBALIZATION_FINAL.md` | Residential Vastu H1 lacked primary keyword | Generic H1 `Harmonious Homes. Happier Lives.` | Update H1 to `Residential Vastu Consultation | Harmonious Homes & Brighter Lives` | `/vastu/residential` | `src/pages/services/ResidentialVastuPage.tsx` | Aligns H1 directly with primary search intent and snippet extraction. | **HIGH** | **COMPLETE** |
| **IMP-02** | `SEO_KEYWORD_CANNIBALIZATION_FINAL.md` | Commercial Vastu H1 lacked primary keyword | Generic H1 `Aligned Spaces. Stronger Businesses.` | Update H1 to `Commercial Vastu Consultation | Aligned Spaces for Business Growth` | `/vastu/commercial` | `src/pages/services/CommercialVastuPage.tsx` | Directly targets commercial B2B search intent in H1. | **HIGH** | **COMPLETE** |
| **IMP-03** | `SEO_KEYWORD_CANNIBALIZATION_FINAL.md` | Apartment Vastu H1 lacked full keyword alignment | H1 was `High-Rise Living. Complete Harmony.` | Update H1 to `Apartment Vastu Consultation | High-Rise Living & Spatial Harmony` | `/vastu/apartment-vastu` | `src/pages/services/ApartmentVastuPage.tsx` | Differentiates multi-family flat intent from independent residential villas. | **HIGH** | **COMPLETE** |
| **IMP-04** | `SEO_KEYWORD_CANNIBALIZATION_FINAL.md` | Office Vastu H1 lacked explicit consultation term | H1 was `Office Vastu | Layout & Seating Architecture` | Update H1 to `Office Vastu Consultation | Workplace Layout & Seating Architecture` | `/vastu/office-vastu` | `src/pages/services/OfficeVastuPage.tsx` | Clarifies workplace administrative intent vs. retail showroom commercial intent. | **HIGH** | **COMPLETE** |
| **IMP-05** | `INTERNAL_LINKING_FINAL_AUDIT.md` | Residential Vastu linked remedial card to blog post | Linked `existing-home-corrections` to `/insights/bathroom-toilet-vastu-remedies` | Update link directly to `/vastu/non-demolition` dedicated commercial hub | `/vastu/residential` | `src/pages/services/ResidentialVastuPage.tsx` | Channels commercial intent to dedicated service hub rather than informational article. | **HIGH** | **COMPLETE** |
| **IMP-06** | `SEO_ARCHITECTURE_AUDIT_FINAL.md` | Direct route aliases for common Vastu search terms | Users typing `/vastu/home`, `/vastu/flat`, `/vastu/office` hit generic 404 | Add route aliases in React Router mapping to appropriate canonical page components | `/vastu/office`, `/vastu/home`, `/vastu/flat`, `/vastu/plot`, `/vastu/interior`, `/vastu/consultation` | `src/routes/AppRoutes.tsx` | Ensures zero broken navigation while preserving self-referential canonical URLs. | **MEDIUM** | **COMPLETE** |
| **IMP-07** | `AEO_GEO_FINAL_AUDIT.md` | Direct Answer Blocks on Core Service Pages | Some service pages had scattered definitions across paragraphs | Enforce 40–60 word concise direct answer blocks immediately below question headings | `/vastu/non-demolition`, `/international`, `/vastu/residential`, `/vastu/commercial`, `/faq` | `src/pages/services/*`, `src/pages/static/*` | Enables Google AI Overviews and answer engine extraction without hallucination. | **HIGH** | **COMPLETE** |
| **IMP-08** | `LOCAL_SEO_FINAL.md` | Doorway page risk in Bangalore local SEO | Potential risk of auto-generating 20+ neighborhood pages | Restrict locality clusters to 4 authentic Bangalore hubs (Indiranagar, HSR, Koramangala, Whitefield) | `/locations/*` | `src/pages/locations/*` | Safeguards site from Google Doorway Page spam penalties; focuses on authentic local context. | **CRITICAL** | **COMPLETE** |
| **IMP-09** | `INTERNATIONAL_SEO_FINAL.md` | Doorway risk for overseas country pages | Risk of creating thin pages for `/vastu-usa`, `/vastu-uk`, `/vastu-uae` | Centralize all global and NRI demand on `/international` with CAD workflow | `/international` | `src/pages/static/InternationalConsultationPage.tsx` | Preserves PageRank on single high-authority international hub. | **CRITICAL** | **COMPLETE** |
| **IMP-10** | `FINAL_TECHNICAL_SEO_AUDIT.md` | Residual `.com` reference in OpenGraph SVG | `public/images/og-image.svg` contained `7raysastrovastu.com` | Updated SVG text node to `7raysastrovastu.in` | Global Social Sharing | `public/images/og-image.svg` | Prevents search engines from discovering conflicting domain entities. | **CRITICAL** | **COMPLETE** |
| **IMP-11** | `FINAL_TECHNICAL_SEO_AUDIT.md` | Outdated popular destination links on 404 page | `/services/commercial-vastu` and `/bangalore/hsr-layout` linked on 404 page | Standardized to canonical paths `/vastu/commercial`, `/vastu/residential`, `/locations/hsr-layout` | `*` (404 Fallback) | `src/pages/NotFoundPage.tsx` | Directs lost visitors and search engine bots to active canonical destinations. | **MEDIUM** | **COMPLETE** |
| **IMP-12** | `FINAL_TECHNICAL_SEO_AUDIT.md` | Sitemap sync for newly introduced pages | Dynamic sitemap did not include `/vastu/non-demolition`, `/international`, `/faq`, `/consultant/*` | Updated `scripts/generate-sitemap.mjs` and `HtmlSitemapPage.tsx` with all 59 routes | Global Crawlability | `scripts/generate-sitemap.mjs`, `src/pages/static/HtmlSitemapPage.tsx` | Ensures 100% crawl discovery and indexation parity. | **CRITICAL** | **COMPLETE** |
| **IMP-13** | `SEO_LIVE_AUDIT.md` | Post-launch Search Console telemetry framework | Cannot verify live impression and click data pre-cutover | Documented post-launch measurement framework in `SEO_LIVE_AUDIT.md` | All Routes | `SEO_LIVE_AUDIT.md` | Establishes objective measurement protocol once DNS cutover occurs. | **HIGH** | **COMPLETE** |
