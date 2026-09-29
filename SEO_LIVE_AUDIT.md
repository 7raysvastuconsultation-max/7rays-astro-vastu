# 7Rays Astro Vastu — Search Console & Live SEO Intelligence Audit

> **Production Canonical Domain:** `https://7raysastrovastu.in`  
> **Status:** Pre-Launch Intelligence & Post-Cutover Measurement Framework  
> **Operational Rule:** The production domain is currently NOT pointed to Cloudflare Pages. This audit strictly separates code-verified facts from post-launch data dependencies.

---

## 1. Classification of Claims: Code vs. Live Google Data

### A. VERIFIED FROM CODE (100% Proven Locally)
- All 59 canonical routes exist, compile cleanly, and resolve to HTTP 200 via React Router.
- Every canonical route outputs `<link rel="canonical" href="https://7raysastrovastu.in/..." />`.
- `sitemap.xml` and `robots.txt` are dynamically generated into both `dist/` and `public/` directories.
- Zero references to legacy `.com`, `localhost`, `127.0.0.1`, or temporary preview domains in production output.
- All JSON-LD structured data schemas (`Organization`, `LocalBusiness`, `Person`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`) validate without syntax errors.
- Image assets feature explicit dimensions, alt attributes, eager hero preloading, and lazy loading for below-the-fold media.
- Business truth attributes (Consultant: Rishwa Sinha, 5+ years experience, Dasarahalli headquarters) verified via `npm run validate:business`.

---

### B. REQUIRES LIVE GOOGLE DATA (Cannot Be Fabricated Prior to DNS Cutover)
- Actual indexation status in Google's live index (requires Googlebot crawl post-DNS connection).
- Live keyword rankings, impression volumes, organic clicks, and click-through rates (CTR).
- Search Console Coverage & Page Indexing reports (Submitted vs. Indexed ratio).
- Real-world Core Web Vitals field data from Chrome User Experience Report (CrUX) (requires 28 days of live user traffic).
- Google AI Overviews and Featured Snippet appearance rates.
- Local 3-Pack rankings on Google Maps for queries originating outside Dasarahalli.

---

### C. HYPOTHESIS (Informed Predictive Models Based on Architecture)
- **Topical Clustering Advantage:** The consolidation of Vastu and Astrology into dedicated, internally linked hubs will accelerate initial topical authority indexing compared to flat site architectures.
- **Non-Demolition Lead Attraction:** The dedicated `/vastu/non-demolition` landing page will capture high-intent urban apartment queries where structural alterations are prohibited by landlords or society bylaws.
- **Global NRI Capture:** The centralized `/international` hub will attract overseas Indian diaspora queries (US, UK, UAE) without suffering from the doorway page penalties typical of mass city-generated sites.

---

### D. RECOMMENDATION (Immediate Actions Post-DNS Cutover)
1. **Google Search Console Verification:** Immediately verify domain ownership via DNS TXT record in Hostinger/Cloudflare.
2. **Submit Sitemap:** Submit `https://7raysastrovastu.in/sitemap.xml` within 24 hours of cutover.
3. **URL Inspection Priority:** Use the URL Inspection tool to request manual indexing for the 5 key pillars:
   - `https://7raysastrovastu.in/`
   - `https://7raysastrovastu.in/vastu-services`
   - `https://7raysastrovastu.in/vastu/non-demolition`
   - `https://7raysastrovastu.in/locations/bangalore`
   - `https://7raysastrovastu.in/international`

---

## 2. Post-Launch Measurement & Governance Framework

Once the domain is connected and Google Search Console begins recording telemetry (typically 7–14 days post-launch), the following weekly and monthly auditing cadences should be observed:

### Weekly Metric Dashboard (Days 1–30)

| Metric | Target / Benchmark | Action Trigger (When to Investigate) | Remediation Protocol |
| :--- | :--- | :--- | :--- |
| **Crawl Errors (5xx / 4xx)** | 0 errors | Any 5xx or unhandled 4xx | Check Cloudflare Pages Functions logs for `/api/contact` or broken asset paths. |
| **Indexation Ratio** | > 85% of submitted URLs indexed within 3 weeks | Stalled indexation (< 30 URLs indexed after 21 days) | Check internal linking from homepage, submit URL inspection requests for unindexed routes. |
| **Robots Directives** | 0 valid pages blocked | Any valid page reported as "Blocked by robots.txt" | Audit `public/robots.txt` disallow lines. |
| **Sitemap Processing** | "Success" with 59 URLs detected | "Couldn't fetch" or parsing errors | Verify XML encoding and ensure no trailing slashes on sitemap URL. |

---

### Monthly Performance & Query Analysis (Days 30–90)

| Dimension | Analysis Scope | Key Questions to Answer |
| :--- | :--- | :--- |
| **Query Opportunities** | Search Console > Performance > Queries | Which queries have high impressions (> 500) but low CTR (< 2%)? *(Signals title/meta description optimization needed).* |
| **Cannibalization Signals** | Search Console > Filter by Query > Compare Pages | Are multiple URLs receiving impressions for the exact same commercial query (e.g. both `/vastu/residential` and `/vastu/apartment-vastu`)? *(If so, strengthen internal anchor links to the primary intended URL).* |
| **Country Distribution** | Performance > Countries | Is `/international` receiving impressions from USA, UAE, and UK? *(Indicates global search engine pickup of remote consultation intent).* |
| **Device Distribution** | Performance > Devices | Mobile vs. Desktop ratio. Confirm mobile conversion rate matches desktop. |
| **Rich Results Status** | Search Console > Enhancements | Confirm zero schema errors in `FAQ`, `Breadcrumbs`, and `Local Business` enhancement tabs. |

---

## 3. Search Console Verification Readiness Checklist

- [x] Canonical domain format locked: `https://7raysastrovastu.in`
- [x] Sitemap URL verified: `https://7raysastrovastu.in/sitemap.xml` (59 URLs)
- [x] Robots.txt URL verified: `https://7raysastrovastu.in/robots.txt`
- [ ] Post-Cutover: Insert DNS TXT verification token in Hostinger / Cloudflare DNS.
- [ ] Post-Cutover: Link Google Search Console to Google Analytics 4 property.
