# PHASE 15 — PERFORMANCE BASELINE

## 7Rays Astro Vastu — Local Production Build & Asset Performance Baseline

**Domain:** `https://7raysastrovastu.com/`  
**Measurement Environment:** macOS / Node.js v24 / Vite v8.3.0 / Tailwind CSS v4  
**Date of Audit:** September 2026  
**Status:** MEASURED (Empirical Local Build Data — Field Data UNKNOWN)

---

## 1. EXECUTIVE SUMMARY & BASELINE OVERVIEW

This document records the exact, empirical measurements obtained from local production builds of the 7Rays Astro Vastu application.

### Key Baseline Achievement:

Before Phase 15 code-splitting, the application suffered from a **monolithic 724.30 kB JavaScript bundle** (`index-jLiGmqHY.js`) that exceeded Vite's 500 kB chunk threshold and forced every client visiting any URL to parse and execute all 35+ page components simultaneously.

Through the implementation of route-level dynamic imports with `React.lazy()` and `Suspense`, the initial JavaScript entry chunk was reduced from **724.30 kB down to 149.25 kB** (a **79.4% reduction** in raw size, and a **73.8% reduction in gzipped transfer size**).

---

## 2. PRODUCTION BUILD COMPARISON (BEFORE vs. AFTER)

| Asset Category                | Pre-Optimization Baseline (Monolithic) | Post-Optimization (Code-Split) | Delta / Improvement          | Status       |
| ----------------------------- | -------------------------------------- | ------------------------------ | ---------------------------- | ------------ |
| **Initial HTML**              | 2.26 kB (gzip: 0.92 kB)                | 2.26 kB (gzip: 0.92 kB)        | 0.00 kB                      | PASS         |
| **Global Stylesheet (CSS)**   | 94.44 kB (gzip: 13.12 kB)              | 94.82 kB (gzip: 13.20 kB)      | +0.38 kB (Utility additions) | PASS         |
| **Initial App JS Chunk**      | **724.30 kB** (gzip: 151.33 kB)        | **149.25 kB** (gzip: 39.66 kB) | **-575.05 kB (-79.4%)**      | **RESOLVED** |
| **Vendor Core Chunk**         | 211.03 kB (gzip: 65.87 kB)             | 211.03 kB (gzip: 65.87 kB)     | 0.00 kB (React, Router, DOM) | PASS         |
| **Icons Library Chunk**       | 29.23 kB (gzip: 10.73 kB)              | 29.23 kB (gzip: 10.73 kB)      | 0.00 kB (Lucide icons)       | PASS         |
| **Vite Chunk Warning**        | **ACTIVE WARNING (>500 kB)**           | **ZERO WARNINGS**              | **Clean Build**              | **PASS**     |
| **Canonical URLs in Sitemap** | 58 URLs                                | 58 URLs                        | Exact match preserved        | PASS         |

---

## 3. ASSET INVENTORY & SIZING DETAILS (POST-OPTIMIZATION)

### 3.1 Core Bundles Loaded on Initial Visit (Homepage)

Total transfer payload for initial homepage shell:

- `dist/index.html`: 2.26 kB (gzip: 0.92 kB)
- `dist/assets/index-BO0PlCjm.css`: 94.82 kB (gzip: 13.20 kB)
- `dist/assets/index-BMj8CvA7.js`: 149.25 kB (gzip: 39.66 kB)
- `dist/assets/vendor-CSmWtUoE.js`: 211.03 kB (gzip: 65.87 kB)
- `dist/assets/icons-DGjL_lPU.js`: 29.23 kB (gzip: 10.73 kB)
- `dist/assets/rolldown-runtime-CbXtAM7H.js`: 0.58 kB (gzip: 0.36 kB)
- **Total Initial JS + CSS Payload:** **487.17 kB** (gzip: **130.74 kB**)  
  _(Compared to pre-optimization initial payload of 1,061.26 kB / gzip: 242.00 kB)._

### 3.2 Granular On-Demand Route Chunks (Sample Inventory)

When a user navigates to a sub-page, only its specific, highly optimized chunk is downloaded:

| Route Chunk                 | File Name                                   | Raw Size | Gzip Size |
| --------------------------- | ------------------------------------------- | -------- | --------- |
| Privacy Policy              | `PrivacyPolicyPage-CU2Y6zKG.js`             | 1.66 kB  | 0.84 kB   |
| Terms of Service            | `TermsPage-CdSXMbG1.js`                     | 1.68 kB  | 0.86 kB   |
| All Locations Index         | `LocationsPage-eSGxlbfa.js`                 | 2.56 kB  | 1.12 kB   |
| 404 Error Page              | `NotFoundPage-z5i8O1xg.js`                  | 3.29 kB  | 1.21 kB   |
| Case Studies Hub            | `CaseStudiesPage-bfL5n0sr.js`               | 3.49 kB  | 1.35 kB   |
| Process & Methodology       | `ProcessPage-BQqEdqUl.js`                   | 4.87 kB  | 1.79 kB   |
| The 7 Rays Philosophy       | `The7RaysPage-BIx0AZsm.js`                  | 7.27 kB  | 2.23 kB   |
| HTML Sitemap                | `HtmlSitemapPage-CDgbKnGe.js`               | 7.39 kB  | 1.68 kB   |
| Blog Article View           | `BlogPostPage-o6X5OnG0.js`                  | 8.08 kB  | 2.76 kB   |
| Bangalore Residential Vastu | `BangaloreResidentialVastuPage-C8T45871.js` | 10.80 kB | 3.65 kB   |
| Vastu Audit Pillar          | `VastuAuditPage-Cco5QCsG.js`                | 10.86 kB | 3.29 kB   |
| Career Astrology            | `CareerAstrologyPage-CJAoSg0f.js`           | 12.97 kB | 4.12 kB   |
| Marriage Astrology          | `MarriageAstrologyPage-OUo4psrk.js`         | 13.01 kB | 4.13 kB   |
| Business Astrology          | `BusinessAstrologyPage-CibHmI4d.js`         | 13.05 kB | 4.06 kB   |
| Corporate Vastu             | `CorporateVastuPage-C0BKGUpy.js`            | 14.27 kB | 4.49 kB   |
| Apartment Vastu             | `ApartmentVastuPage-Dpf9ERl2.js`            | 14.38 kB | 4.47 kB   |
| Bangalore Vastu Audit       | `BangaloreVastuAuditPage-C76awLMy.js`       | 14.40 kB | 4.52 kB   |
| Bangalore Commercial Vastu  | `BangaloreCommercialVastuPage-BD_81fO-.js`  | 14.59 kB | 4.32 kB   |
| Birth Chart Consultation    | `BirthChartPage-CbB02LeU.js`                | 15.12 kB | 4.80 kB   |
| Bangalore Industrial Vastu  | `BangaloreIndustrialVastuPage-uRW_swB1.js`  | 16.81 kB | 4.93 kB   |
| Bangalore Astrology         | `BangaloreAstrologyPage-j61kjTd4.js`        | 18.86 kB | 5.17 kB   |
| Industrial Vastu Pillar     | `IndustrialVastuPage-Bl1YT-Rq.js`           | 19.44 kB | 5.58 kB   |
| Insights & Blog Hub         | `BlogPage-DcExrO11.js`                      | 20.18 kB | 5.52 kB   |
| Bangalore Master Hub        | `BangaloreMasterPage-Dsw9uJpl.js`           | 22.14 kB | 5.90 kB   |
| Office Vastu                | `OfficeVastuPage-Dq4ygwNq.js`               | 22.35 kB | 6.19 kB   |
| Contact & Booking Page      | `ContactPage-BJFoHr-V.js`                   | 24.94 kB | 5.65 kB   |
| Services Pillar Master      | `ServicesPage-iU_oKc37.js`                  | 29.38 kB | 5.49 kB   |
| About Us & Founder Profile  | `AboutPage-C82V_LPF.js`                     | 29.66 kB | 6.26 kB   |
| Astrology Master Hub        | `AstrologyPage-CgiSV7hi.js`                 | 38.90 kB | 8.22 kB   |
| Residential Vastu Master    | `ResidentialVastuPage-tbitSIVV.js`          | 44.58 kB | 9.50 kB   |
| Commercial Vastu Master     | `CommercialVastuPage-B7yRXkcM.js`           | 45.67 kB | 9.71 kB   |

---

## 4. TYPOGRAPHY & FONT RESOURCE METRICS

The application uses Google Fonts for luxury brand typography:

- **Font Families:**
  - `Plus Jakarta Sans`: Modern geometric sans-serif for UI, navigation, and body copy (weights 300, 400, 500, 600, 700, 800).
  - `Playfair Display`: Classical editorial serif for primary H1 and H2 headlines (weights 400, 500, 600, 700, 800).
  - `Cinzel`: Classical lapidary serif used for sacred architectural accents and brand motifs (weights 500, 600, 700, 800).
- **Optimization Directives:**
  - Preconnect links in `index.html`: `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (with `crossorigin`).
  - Font rendering strategy: `display=swap` applied across all fonts to eliminate FOIT (Flash of Invisible Text) and ensure immediate text visibility.

---

## 5. THIRD-PARTY SCRIPT BASELINE

- **External Ad Networks:** None (0).
- **Synchronous Tag Managers:** None (0).
- **Third-Party Trackers / Heavy Frameworks:** None (0).
- **Embedded External Iframes:** None on core templates (Google Maps links use official URL redirect `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9`, preventing third-party script bloat).
- **Client Script Weight:** 100% first-party application logic and standard React libraries.

---

## 6. FIELD DATA STATUS

```
Google Search Console Connection: NOT CONNECTED
CrUX (Chrome User Experience Report): UNKNOWN
Lighthouse Lab Field Comparison: UNKNOWN
```

Field performance metrics will be gathered and established once the production domain is deployed, DNS configured, and Search Console data populated under Phase 13.
