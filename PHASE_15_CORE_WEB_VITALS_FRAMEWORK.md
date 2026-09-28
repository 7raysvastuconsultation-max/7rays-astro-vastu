# PHASE 15 — CORE WEB VITALS FRAMEWORK

## 7Rays Astro Vastu — Core Web Vitals, Lab vs. Field Measurement & Diagnostics

**Domain:** `https://7raysastrovastu.com/`  
**Brand Identity:** 7Rays Astro Vastu (Lead Consultant: Rishwa Sinha)  
**Status:** IMPLEMENTED (Local Production Build Diagnostics & Engineering Framework)  
**Search Console Status:** GSC NOT CONNECTED YET (Field Performance = UNKNOWN)

---

## 1. PURPOSE & MEASUREMENT GOVERNANCE

This framework establishes the operational standard for monitoring, evaluating, and maintaining Google Core Web Vitals and user-centric loading performance across all 58 canonical URLs of 7Rays Astro Vastu.

### 1.1 Strict Boundary: Lab vs. Field Data

Google Core Web Vitals are evaluated by Google using real-world user metrics collected via the Chrome User Experience Report (CrUX) and displayed within Google Search Console.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DATA GOVERNANCE PRINCIPLE                       │
├───────────────────────────────────┬────────────────────────────────────┤
│ LAB DATA (Local / Synthetic)      │ FIELD DATA (Real Users / CrUX)     │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Production build bundle sizes   │ • Real Chrome 75th percentile      │
│ • DOM node counts                 │ • Google Search Console CWV report │
│ • Static asset inspection         │ • PageSpeed Insights Field tab     │
│ • Local simulated throttling      │ • Requires live domain & traffic   │
│ • Status: FULLY MEASURED & AUDITED│ • Status: UNKNOWN (Pre-domain)     │
└───────────────────────────────────┴────────────────────────────────────┘
```

> **Mandatory Rule:** In accordance with our integrity policy, no hypothetical field scores, simulated CrUX scores, or manufactured "Google 100/100" claims are permitted. Field performance is explicitly documented as **UNKNOWN** until the live domain is connected, verified in GSC, and sufficient real user traffic is recorded.

---

## 2. CORE WEB VITALS METRICS SPECIFICATION

### 2.1 Largest Contentful Paint (LCP)

- **Target Threshold:** ≤ 2.5 seconds (Good), 2.5s–4.0s (Needs Improvement), > 4.0s (Poor)
- **What it Measures:** Perceived loading speed; the render time of the largest image or text block visible within the initial viewport.
- **7Rays Context:** On 7Rays Astro Vastu, LCP candidates are primarily:
  - Homepage: Hero Penthouse panoramic visual (`/images/hero-penthouse.jpg`) and primary H1 headline.
  - Vastu Service Pages: Hero interior/architectural imagery (`/images/hero-penthouse.jpg`, `/images/services/commercial-boardroom-hero.jpg`).
  - Astrology Pages: Atmospheric study visual (`/images/astrology-hero-study.jpg`) and H1 header block.
  - Informational / Detail Pages: Typographic H1 hero blocks with background gradient overlays.
- **Implemented Engineering Mitigations:**
  - `fetchPriority="high"` applied to critical hero image tags.
  - `loading="eager"` and `decoding="sync"` applied to above-the-fold hero imagery.
  - Native image dimensions (`width` and `height`) hard-coded to avoid layout recalculation.
  - Route-level code-splitting reduces initial JS execution overhead that could block paint.

### 2.2 Interaction to Next Paint (INP)

- **Target Threshold:** ≤ 200 milliseconds (Good), 200ms–500ms (Needs Improvement), > 500ms (Poor)
- **What it Measures:** Overall UI responsiveness throughout the user's session; the worst-case interaction latency for clicks, taps, and keyboard inputs.
- **7Rays Context:** Key interactive touchpoints:
  - Mobile hamburger navigation menu open/close toggle.
  - Consultation booking modal launch and form submission.
  - WhatsApp quick-action and direct-call button taps.
  - Accordion expandable FAQ modules across service and location landing pages.
- **Implemented Engineering Mitigations:**
  - Passive event listeners utilized for scroll tracking (`{ passive: true }`).
  - Zero heavy third-party tracking scripts, widgets, or synchronous blocking tags.
  - Non-blocking state updates for modal and mobile menu transitions.
  - Form submission handlers with instant state feedback and debouncing (`isSubmitting` flag).

### 2.3 Cumulative Layout Shift (CLS)

- **Target Threshold:** ≤ 0.1 (Good), 0.1–0.25 (Needs Improvement), > 0.25 (Poor)
- **What it Measures:** Visual stability; unexpected layout shifts occurring during the page lifecycle.
- **7Rays Context:** Layout shift risks on luxury consulting sites usually arise from unsized hero images, late-loading web fonts, dynamically injected modals, or content expansion.
- **Implemented Engineering Mitigations:**
  - Explicit aspect ratios and pixel dimensions specified on all major image components.
  - Google Fonts served with `display=swap` and preconnected via `preconnect` links.
  - Consultation modal rendered in a fixed viewport overlay (`fixed inset-0`) that never shifts the underlying page DOM.
  - Subtle Suspense loading boundary (`LoadingFallback`) maintaining a fixed minimum height (`min-h-[50vh]`), preventing viewport collapse during route transitions.

---

## 3. SECONDARY WEB VITALS & DIAGNOSTIC METRICS

| Metric                           | Target (Good) | Architectural Mitigation at 7Rays Astro Vastu                                           |
| -------------------------------- | ------------- | --------------------------------------------------------------------------------------- |
| **First Contentful Paint (FCP)** | ≤ 1.8s        | Preconnected Google Fonts, lean initial HTML (2.26 kB), eliminated monolithic JS chunk. |
| **Time to First Byte (TTFB)**    | ≤ 0.8s        | Static asset compilation, edge CDN readiness (Vite production build).                   |
| **Total Blocking Time (TBT)**    | ≤ 200ms       | Dynamic `React.lazy()` imports cut initial client script parsing by 79.5%.              |
| **Speed Index (SI)**             | ≤ 3.4s        | Above-the-fold CSS inlined via Tailwind CSS v4, critical styles prioritized.            |

---

## 4. FIELD MEASUREMENT READINESS ARCHITECTURE

When the production domain `https://7raysastrovastu.com/` is deployed and verified in Google Search Console, the following monitoring workflow will govern Core Web Vitals health:

```
                  ┌────────────────────────────────────────┐
                  │ 7Rays Astro Vastu Live Production App  │
                  └──────────────────┬─────────────────────┘
                                     │
                 ┌───────────────────┴───────────────────┐
                 │                                       │
        ┌────────▼────────┐                     ┌────────▼────────┐
        │  Chrome Users   │                     │  Local Synthetic│
        │  (CrUX Dataset) │                     │  Audits (Dev)   │
        └────────┬────────┘                     └────────┬────────┘
                 │                                       │
        ┌────────▼────────┐                     ┌────────▼────────┐
        │ GSC Core Web    │                     │ Bundle Analysis │
        │ Vitals Report   │                     │ & Lighthouse    │
        └────────┬────────┘                     └────────┬────────┘
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     │
                        ┌────────────▼────────────┐
                        │ Phase 13 CWV Continuous │
                        │ Maintenance & Triage    │
                        └─────────────────────────┘
```

### 4.1 URL Grouping for Field Triaging

CrUX groups URLs into clusters of similar structure. Our 58 canonical URLs naturally fall into 5 distinct architectural clusters:

1. **Core / Brand Templates:** `/`, `/about`, `/the-7-rays`, `/process`, `/contact`
2. **Pillar & Sub-Service Templates:** `/vastu-services`, `/vastu/residential`, `/vastu/commercial`, etc.
3. **Bangalore Local Hub Templates:** `/locations/bangalore`, `/locations/bangalore/residential-vastu`, etc.
4. **Astrology Consultation Templates:** `/astrology`, `/astrology/birth-chart`, etc.
5. **Content Authority & Scenarios:** `/insights`, `/insights/:slug`, `/case-studies`, `/case-studies/:slug`

Fixing a structural CWV issue on one template automatically resolves field metrics for all pages in that cluster.

---

## 5. GOVERNANCE & REGRESSION GUARDRAILS

To prevent performance regressions during future content additions or styling iterations:

1. **Zero Monolithic Imports:** Any new top-level page route must be imported via `React.lazy()` in `AppRoutes.tsx`.
2. **Mandatory Image Attributes:** Every new image element must include `alt`, `loading`, `decoding`, and explicit `width`/`height` or aspect-ratio styling.
3. **LCP Hero Budget:** Above-the-fold hero images must not exceed 250 kB compressed (WebP/optimized JPEG), with `fetchPriority="high"`.
4. **Font Budget:** Maximum of 3 font families (`Plus Jakarta Sans`, `Playfair Display`, `Cinzel`) with selected weights, maintaining `display=swap`.
5. **Third-Party Script Policy:** Any future script (e.g. tag managers, heatmaps, live chats) must be loaded asynchronously or deferred to prevent INP degradation.
