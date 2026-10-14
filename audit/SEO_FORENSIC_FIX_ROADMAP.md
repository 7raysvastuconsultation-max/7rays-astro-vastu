# 7RAYS ASTRO VASTU — SEO FORENSIC FIX ROADMAP
**Document ID**: SEO_FORENSIC_FIX_ROADMAP.md  
**Audit Date**: October 14, 2026  
**Auditor**: Senior Technical SEO Strategist & System Architect  

---

## 1. Prioritization Framework

Issues are categorized by their direct risk to crawlability, indexation integrity, brand trust, and business conversion:
- **P0 — Critical Blocker**: Must be resolved before Google Search Console is connected. Blocks basic search discovery.
- **P1 — High Priority**: Structural and conversion defects that undermine indexing quality, link equity, or client lead capture.
- **P2 — Medium Priority**: Architecture, keyword cannibalization, and content depth refinements.
- **P3 — Low Priority / Maintenance**: Polish, optional files, and ongoing semantic enhancements.

---

## 2. Master Forensic Fix Matrix

| Finding ID | Severity | Area | Affected URLs | Summary of Issue | Recommended Fix | Effort | Risk |
| :--- | :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **FIX-01** | **P0** | DNS / Infrastructure | `7raysastrovastu.in` | Un-propagated DNS resolvers hit Hostinger parked IP (`2.57.91.91`). | Await full DNS TTL expiration (24h); verify 100% global resolution to Cloudflare. | Low (Wait) | None |
| **FIX-02** | **P1** | Hostname Canonicalization | `www.7raysastrovastu.in/*` | `www` subdomain serves 200 OK without redirecting to apex domain. | Configure Cloudflare Redirect Rule: `www.7raysastrovastu.in/*` → `301` to `https://7raysastrovastu.in/$1`. | 15 mins | Low |
| **FIX-03** | **P1** | Conversion Functionality | `/api/enquiries`, modals | Consultation form submissions return 200 OK but silently discard leads. | Connect Cloudflare Worker to email transport (Resend/SendGrid) or database table. | 2-3 hrs | Medium |
| **FIX-04** | **P1** | Content Depth | 5 Insights articles | 5 blog articles are thin (<270 words), risking low-quality Panda/Helpful Content flags. | Expand articles 7, 8, 11, 12, 13 to >750 words with diagrams and non-demolition remedies. | 4-6 hrs | Low |
| **FIX-05** | **P1** | Edge Soft-404 | Missing / 404 paths | `public/_redirects` returns 200 OK for dead URLs via `/* /index.html 200`. | Deploy Cloudflare Pages Function to return 404 status header on unmatched routes. | 1-2 hrs | Medium |
| **FIX-06** | **P2** | Keyword Cannibalization | `/astrology`, `/vastu-services/vastu-audit` | Broad service meta titles include "in Bangalore", competing with local pages. | Remove "in Bangalore" from broad service titles; let local Bangalore URLs capture city intent. | 30 mins | Low |
| **FIX-07** | **P2** | URL & Link Governance | `/insights` vs `/blog/*` | Main navigation points to `/insights`, but article links and canonicals use `/blog/*`. | Standardize route and canonical prefix across the editorial silo. | 1 hr | Medium |
| **FIX-08** | **P2** | Sitemap Coverage | `/shop`, product URLs | E-commerce shop section is live in code but missing from `scripts/generate-sitemap.mjs`. | Add `/shop` and active product categories into sitemap generation script. | 30 mins | Low |
| **FIX-09** | **P2** | Schema Optimization | `WebSiteSchema.tsx` | Sitelinks SearchBox Action targets `/blog?q=...` despite search bar removal. | Remove unused `SearchAction` from `WebSiteSchema` until dedicated search page exists. | 15 mins | Low |
| **FIX-10** | **P3** | AI Search (GEO) | `/llms.txt` | Missing machine-readable overview for LLM search crawlers. | Add `public/llms.txt` with company profile, core services, and canonical guides. | 30 mins | None |

---

## 3. Phased Execution Roadmap

### Phase A: Mandatory Pre-GSC Connection Tasks (Days 1–2)
Do NOT connect Google Search Console until these four items are complete:
1. **[FIX-01] DNS Propagation Verification**:
   - Run multi-region DNS validation across North America, Europe, Asia, and India.
   - Confirm 0% of queries resolve to `2.57.91.91`.
2. **[FIX-02] Cloudflare WWW 301 Redirect Rule**:
   - Implement in Cloudflare Dashboard: Rules → Redirect Rules.
   - Test via terminal: `curl -sI https://www.7raysastrovastu.in/` must return `HTTP/2 301` with `location: https://7raysastrovastu.in/`.
3. **[FIX-03] Consultation Form Lead Delivery**:
   - Update `functions/api/enquiries.ts` to forward lead details to the founder's verified email and WhatsApp alert webhook.
   - Perform a single controlled test submission to confirm end-to-end receipt.
4. **[FIX-06] Title Tag Disambiguation**:
   - Adjust `AstrologyPage.tsx` title to: `Vedic Astrology Consultation & Kundli Guidance | 7Rays`.
   - Adjust `VastuAuditPage.tsx` title to: `Scientific Vastu Audit & 16-Zone Energy Assessment | 7Rays`.

---

### Phase B: Post-GSC Connection Tasks (Weeks 1–3)
Once Google Search Console is connected and sitemap is submitted:
1. **[FIX-04] Content Expansion for Thin Articles**:
   - Priority 1: `bathroom-toilet-vastu-remedies` (currently 240 words → target 850 words).
   - Priority 2: `north-facing-house-vastu-plan` (currently 204 words → target 1,000 words).
   - Priority 3: `factory-machinery-and-raw-material-vastu` (currently 221 words → target 800 words).
   - Priority 4: `retail-store-and-showroom-vastu` (currently 261 words → target 800 words).
   - Priority 5: `restaurant-and-hospitality-vastu` (currently 212 words → target 800 words).
2. **[FIX-07] Editorial Path Normalization**:
   - Unify `/insights` and `/blog` paths to prevent dual-alias confusion.
3. **[FIX-08] Sitemap Synchronization for Shop**:
   - Include `/shop` in `scripts/generate-sitemap.mjs` and regenerate `public/sitemap.xml`.
4. **[FIX-05] Cloudflare Edge Prerendering / SSR Middleware**:
   - Evaluate deploying an edge worker (e.g. Cloudflare Worker with HTMLRewriter or Prerender.io) to serve fully pre-rendered HTML to search engine bots for instant indexing without WRS delays.

---

## 4. Verification & Testing Protocol

For every fix implemented:
1. **Local Validation**: Run `npm run build` and `node scripts/validate-business-truth.mjs` to ensure zero compilation or truth policy regressions.
2. **Header & Status Check**: Run `curl -sI` against production URL to verify status code and headers.
3. **Schema Test**: Test output in [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).
4. **Form End-to-End Test**: Verify lead delivery notification arrives on founder's verified device.
