# 7RAYS ASTRO VASTU — MASTER SEO FORENSIC AUDIT
## Pre-Indexing Architecture, Technical SEO, Content Integrity & Ranking Readiness
**Project**: 7Rays Astro Vastu  
**Production Domain**: `https://7raysastrovastu.in/`  
**Primary Canonical Host**: `https://7raysastrovastu.in`  
**Target Staging / Edge**: Cloudflare Pages (`7rays-astro-vastu.pages.dev`)  
**Auditor**: Senior Technical SEO Auditor & Search Architecture Forensic Specialist  
**Audit Date**: October 14, 2026  
**Execution Mode**: READ-ONLY Verification (Zero Code / DNS Mutations)

---

## 1. Executive Summary & Verdict

### Final Decision Gate: **B. READY AFTER P0/P1 FIXES**

The 7Rays Astro Vastu platform possesses a modern visual design, an authoritative single-headquarters local SEO foundation (Dasarahalli, Bengaluru), and a well-engineered JSON-LD entity graph with stable `@id` co-references. The historical defect where Insights articles duplicated South-Facing House content has been independently verified as **RESOLVED** in the content repository (18 unique articles with distinct content records).

**However, the website is NOT YET READY for Google Search Console connection or systematic indexing due to three critical technical blockers:**

1. **Active DNS Resolution / Parked Page Collision (P0)**: While Cloudflare nameservers (`lisa.ns.cloudflare.com` and `rudy.ns.cloudflare.com`) are assigned, DNS propagation is in mid-transition. Systems resolving through un-propagated resolvers or cached TTLs hit the former Hostinger parking server IP (`2.57.91.91`), which serves a Hostinger domain-parking HTML page. Crawlers hitting this IP will index a parked domain rather than the business.
2. **Missing Canonical WWW Redirect (P1)**: `https://www.7raysastrovastu.in/` returns `HTTP/2 200 OK` directly on Cloudflare edge rather than a permanent `301 Moved Permanently` redirect to `https://7raysastrovastu.in/`. This serves identical content on both hostnames, risking split indexation and duplicate content penalties.
3. **Pure Client-Side Rendering (CSR) with Soft-404 Vulnerability (P1)**: The site is built with React 19 + Vite as a pure Single Page Application (SPA). The server returns a generic fallback HTML shell with homepage metadata for **all** URLs. Furthermore, Cloudflare Pages `public/_redirects` rewrites `/*` to `/index.html 200`, meaning non-existent routes return HTTP 200 OK. Bots that do not execute client-side JavaScript or abandon rendering will only see the fallback homepage title across every URL.

---

## 2. Category Scoring & Confidence Summary

| Category | Score (0–100) | Confidence Level | Primary Finding / Justification |
| :--- | :---: | :---: | :--- |
| **Technical SEO & Crawlability** | **68 / 100** | High | Clean robots.txt and valid XML sitemap (62 URLs), but pure CSR SPA fallback and unredirected WWW hostname degrade score. |
| **Indexability & URL Governance** | **64 / 100** | High | Multiple URL alias paths (`/vastu-services/` vs `/vastu/`, `/insights/` vs `/blog/`) serve 200 OK without 301 consolidation. |
| **Routing & Content Rendering** | **82 / 100** | High | Historical duplicate content defect is resolved in code; all 18 articles render unique Markdown bodies. Direct deep-link SSR is missing. |
| **Information Architecture & Linking** | **78 / 100** | High | Solid service-to-location hierarchy, but navigation points to `/insights` while cards link to `/blog/:slug`. |
| **Keyword Intent & Cannibalization** | **72 / 100** | Medium | Overlap between broad service pages (e.g. `/astrology`) and local Bangalore pages (e.g. `/locations/bangalore/astrology`). |
| **Content Quality & Originality** | **74 / 100** | High | Flagship articles are deep (>800 words), but 5 articles are under 270 words (thin content risk for competitive search). |
| **On-Page & Semantic Structure** | **86 / 100** | High | Strict single H1 per page, clear H2/H3 hierarchy, clean meta descriptions, and zero missing image assets. |
| **Structured Data & Entity Graph** | **91 / 100** | High | Outstanding `@id`-linked entity graph (Organization, Person, ProfessionalService, Article, Breadcrumbs). |
| **Local SEO & Business Trust** | **89 / 100** | High | Authoritative single-HQ NAP policy (Dasarahalli 560024); no fabricated branch offices. Verified maps embed. |
| **AEO, GEO & AI Search Readiness** | **80 / 100** | Medium | Strong factual definitions and structured FAQs; robots.txt allows AI crawlers; needs structured data server pre-rendering. |
| **Mobile UX & Performance** | **84 / 100** | High | Route code-splitting with React.lazy; modern Plus Jakarta Sans typography; zero layout shift; accessible tap targets. |
| **Conversion Functionality** | **55 / 100** | High | WhatsApp and phone links function, but the consultation form API (`/api/enquiries`) on Cloudflare discards submissions without persistence. |

---

## 3. Critical Blockers (P0 / P1)

### P0 — DNS Propagation & Hostinger Parked Page Collision
- **Severity**: P0 (Site-wide Discovery & Indexing Blocker)
- **Affected Surface**: Entire domain (`https://7raysastrovastu.in/`)
- **Evidence**: Network tests show Google DNS (`8.8.8.8`) and Cloudflare (`1.1.1.1`) resolve to Cloudflare IPs (`104.21.49.75` / `172.67.160.168`), but resolvers caching old records hit `2.57.91.91` (Hostinger), which returns the Hostinger parked-domain HTML payload.
- **Search Impact**: If Googlebot crawls before 100% global DNS propagation, Google will flag the domain as "Parked Domain" or "Soft 404", causing severe indexation delays.
- **Required Action**: Wait for global DNS TTL expiry (24–48 hours) and verify DNS propagation across all global nodes via DNS checkers before requesting GSC indexing.

### P1 — Missing WWW to Non-WWW Canonical Redirect
- **Severity**: P1 (Host Duplication & Link Equity Dilution)
- **Affected Surface**: `https://www.7raysastrovastu.in/*`
- **Evidence**: `curl -sI --resolve www.7raysastrovastu.in:443:104.21.49.75 https://www.7raysastrovastu.in/` returns `HTTP/2 200 OK` rather than `301 Moved Permanently`.
- **Search Impact**: Splits PageRank and link equity between `www` and `non-www` versions. Search engines may index both hostnames.
- **Required Action**: Add a Cloudflare Redirect Rule or Page Rule: `https://www.7raysastrovastu.in/*` → `301 Redirect` to `https://7raysastrovastu.in/$1`.

### P1 — Cloudflare Pages SPA Soft-404 Vulnerability
- **Severity**: P1 (Crawler Discovery & Crawl Budget Waste)
- **Affected Surface**: All invalid and non-existent URLs (e.g. `/this-page-does-not-exist`)
- **Evidence**: `public/_redirects` specifies `/* /index.html 200`. HTTP requests to non-existent URLs return `HTTP/2 200 OK` with the generic homepage HTML shell.
- **Search Impact**: Google classifies 200 OK responses on missing URLs as "Soft 404s", penalizing overall site crawl quality.
- **Required Action**: Implement a Cloudflare Pages Function or edge worker to intercept unmatched routes or ensure `NotFoundPage` sends proper edge headers, or rely on SSR/prerendering.

### P1 — Silent Lead Discard in Production Consultation Form
- **Severity**: P1 (Business Conversion Blocker)
- **Affected Surface**: `/contact`, `/consultation`, and all consultation modals
- **Evidence**: `functions/api/enquiries.ts` receives form JSON and returns `HTTP 200 { success: true }`, but performs **no** persistence to Cloudflare D1/KV, sends no email via Resend/SendGrid, and triggers no webhook.
- **Search / Business Impact**: Real users submitting consultation inquiries receive a false confirmation, while the business owner receives zero lead notifications.
- **Required Action**: Integrate an email transport (e.g., Cloudflare Workers + Resend API) or database table to capture enquiries.

---

## 4. Strongest Verified Parts of the Architecture

1. **Entity Graph & Structured Data (Phase 9)**:
   - Sourced directly from `src/config/business.ts` and `src/config/site.ts`.
   - Stable canonical `@id` values: `https://7raysastrovastu.in/#organization`, `https://7raysastrovastu.in/#localbusiness`, `https://7raysastrovastu.in/#rishwa-sinha`, `https://7raysastrovastu.in/#website`.
   - No fabricated credentials or awards; adheres strictly to verifiable facts.

2. **Resolution of Historical Insights Content Duplication (Phase 4)**:
   - Every one of the 18 blog posts in `src/data/blog.ts` contains completely unique Markdown copy, its own H1, distinct published dates, and custom excerpts.
   - The reported bug where all routes showed South-Facing House content is completely cleared from source code.

3. **Strict NAP and Single-HQ Entity Governance (Phase 8)**:
   - Exactly one registered consulting headquarters: `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024`.
   - Locality pages (`/locations/indiranagar`, `/locations/hsr-layout`, etc.) explicitly identify themselves as *on-site property service zones*, transparently stating that the physical office is in Dasarahalli. This prevents Google Maps multi-location spam penalties.

4. **Zero Missing Assets & Clean Media Pipeline (Phase 3 / 12)**:
   - All 31 image paths referenced across `src/` exist locally in `public/images/`.
   - Zero 404 asset errors.
   - Modern SVG icons and optimized JPG/PNG images.

---

## 5. Major Unknowns Requiring External Account Verification

| Item | Status | Verification Required |
| :--- | :--- | :--- |
| **Google Search Console** | Not Connected | Domain property ownership verification via DNS TXT record or HTML tag. |
| **Google Business Profile (GBP)** | Live, Unlinked | Verification that primary phone (`+91 70910 21616`) and address match GBP dashboard. |
| **Real Field Core Web Vitals** | Insufficient Field Data | Site has not received sufficient Chrome User Experience Report (CrUX) traffic. Lab tests pass. |
| **Client Testimonial Attribution** | Pending Founder Review | The 6 client experiences on Homepage should be confirmed with founder Rishwa Sinha as authorized for publication. |

---

## 6. Audit Deliverables Index

The following forensic audit deliverables have been generated in the project `audit/` folder:

1. [SEO_FORENSIC_AUDIT_EXECUTIVE_REPORT.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_AUDIT_EXECUTIVE_REPORT.md) — Comprehensive executive summary and decision gate.
2. [SEO_FORENSIC_URL_INVENTORY.csv](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_URL_INVENTORY.csv) — Complete inventory of 77 discovered public and alias routes.
3. [SEO_FORENSIC_TECHNICAL_AUDIT.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_TECHNICAL_AUDIT.md) — Crawlability, indexability, DNS, headers, and SPA behavior.
4. [SEO_FORENSIC_CONTENT_AND_INTENT_MAP.csv](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_CONTENT_AND_INTENT_MAP.csv) — URL-level intent, topic families, word counts, and cannibalization risk.
5. [SEO_FORENSIC_INTERNAL_LINK_GRAPH.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_INTERNAL_LINK_GRAPH.md) — Visual architecture diagram, hub-and-spoke mappings, and link path fixes.
6. [SEO_FORENSIC_SCHEMA_AUDIT.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_SCHEMA_AUDIT.md) — Detailed review of all 8 JSON-LD schemas and entity graph relationships.
7. [SEO_FORENSIC_LOCAL_ENTITY_AUDIT.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_LOCAL_ENTITY_AUDIT.md) — Local SEO, Bengaluru coverage, NAP audit, and GBP alignment.
8. [SEO_FORENSIC_AEO_GEO_AUDIT.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_AEO_GEO_AUDIT.md) — Answer engine readiness, citation quality, and bot directives.
9. [SEO_FORENSIC_FIX_ROADMAP.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_FIX_ROADMAP.md) — Prioritized, step-by-step fix roadmap with effort and risk assessments.
10. [SEO_FORENSIC_EVIDENCE_REGISTER.md](file:///Users/shekharyadav/Desktop/Projects%20/7rays%20Astro%20Vastu/audit/SEO_FORENSIC_EVIDENCE_REGISTER.md) — Exact terminal command logs, HTTP headers, code references, and test proofs.
