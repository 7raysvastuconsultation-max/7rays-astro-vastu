# PHASE 15 — PAGE TEMPLATE PERFORMANCE MATRIX

## 7Rays Astro Vastu — Template-by-Template Performance & Core Web Vitals Analysis

**Domain:** `https://7raysastrovastu.com/`  
**Total Canonical Routes:** 58 Canonical URLs  
**Evaluation Scope:** 15 Key Representative Page Templates  
**Status:** AUDITED & OPTIMIZED

---

## 1. TEMPLATE PERFORMANCE MATRIX

| #      | Page / Template              | Route                                    | Route JS Chunk                            | Main Assets & Images                                             | Likely LCP Candidate                   | Likely CLS Risks                 | Mobile Risks                           | Implemented Optimizations                                                                                | Status        |
| ------ | ---------------------------- | ---------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- | -------------------------------------- | -------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| **1**  | **Homepage**                 | `/`                                      | In Initial Shell (149 kB)                 | `hero-penthouse.jpg`, `rishwa-sinha.jpg`, `cta-sunset-villa.jpg` | Hero Penthouse image or H1 headline    | Missing image dimensions         | Stacking of 6 service cards            | `fetchPriority="high"`, `width/height` hardcoded, `loading="eager"` on hero, lazy loading on below-fold. | **OPTIMIZED** |
| **2**  | **Vastu Services Master**    | `/vastu-services`                        | `ServicesPage` (29.4 kB)                  | `residential-vastu.jpg`, `commercial-vastu.jpg`                  | H1 Hero text banner / Service overview | Card grid shift on image load    | Comparison table horizontal overflow   | Dynamic import, table overflow handling, lazy loaded thumbnails.                                         | **OPTIMIZED** |
| **3**  | **Residential Vastu Master** | `/vastu/residential`                     | `ResidentialVastuPage` (44.6 kB)          | `hero-penthouse.jpg`, residential gallery                        | Hero Penthouse background image        | Unsized room orientation diagram | Long-form reading fatigue              | Hero image priority tag, room cards formatted in responsive CSS grid.                                    | **OPTIMIZED** |
| **4**  | **Apartment Vastu**          | `/vastu/apartment-vastu`                 | `ApartmentVastuPage` (14.4 kB)            | `projects/luxury-residence-mumbai.jpg`                           | Apartment skyline hero image           | Diagnostic bullet shift          | Small tap targets on navigation        | Priority eager hero loading, minimum 44px tap targets.                                                   | **OPTIMIZED** |
| **5**  | **Commercial Vastu Master**  | `/vastu/commercial`                      | `CommercialVastuPage` (45.7 kB)           | `commercial-boardroom-hero.jpg`                                  | Boardroom skyline hero image           | Business impact table shift      | Complex layout matrix on 320px screens | Hero priority set to high, responsive table wrapper, code-split chunk.                                   | **OPTIMIZED** |
| **6**  | **Office Vastu**             | `/vastu/office-vastu`                    | `OfficeVastuPage` (22.4 kB)               | `corporate-vastu.jpg`                                            | Corporate office interior hero image   | Dynamic tab or FAQ shift         | Stacking of zone recommendations       | Explicit image aspect-ratio, lazy loaded below-fold assets.                                              | **OPTIMIZED** |
| **7**  | **Industrial Vastu**         | `/vastu/industrial`                      | `IndustrialVastuPage` (19.4 kB)           | `industrial-vastu.jpg`                                           | Manufacturing plant hero image         | Unsized equipment diagram        | Dense workflow diagrams on mobile      | High fetch priority on hero, async decoding, accessible SVG icons.                                       | **OPTIMIZED** |
| **8**  | **Vastu Audit Pillar**       | `/vastu-services/vastu-audit`            | `VastuAuditPage` (10.9 kB)                | Non-image typographic hero                                       | H1 Headline text block                 | Minimal (typographic card)       | Dense methodology text                 | Lean chunk (10.9 kB), zero image blocking, immediate FCP.                                                | **OPTIMIZED** |
| **9**  | **Bangalore Master Hub**     | `/locations/bangalore`                   | `BangaloreMasterPage` (22.1 kB)           | `commercial-vastu.jpg`, zone cards                               | Bangalore skyline hero image           | Locality grid cards loading      | Long list of covered localities        | Hero image eager loading, locality list organized in responsive 2-col grid.                              | **OPTIMIZED** |
| **10** | **Bangalore Residential**    | `/locations/bangalore/residential-vastu` | `BangaloreResidentialVastuPage` (10.8 kB) | Residential local hero visual                                    | Hero H1 heading block                  | Zone card layout shift           | Quick-call button positioning          | Dedicated lightweight route chunk, WhatsApp & Phone tap targets.                                         | **OPTIMIZED** |
| **11** | **Bangalore Commercial**     | `/locations/bangalore/commercial-vastu`  | `BangaloreCommercialVastuPage` (14.6 kB)  | Commercial office visual                                         | Commercial H1 headline                 | Technology park list shift       | Tech corridor table readability        | Inlined critical styles, touch-friendly CTA buttons.                                                     | **OPTIMIZED** |
| **12** | **Astrology Master Hub**     | `/astrology`                             | `AstrologyPage` (38.9 kB)                 | `astrology-hero-study.jpg`                                       | Candlelight library study image        | Chart diagram cards shift        | Planet table horizontal scroll         | Hero image high priority, explicit width/height, lazy loaded FAQ.                                        | **OPTIMIZED** |
| **13** | **Birth Chart Reading**      | `/astrology/birth-chart`                 | `BirthChartPage` (15.1 kB)                | `astrology-consultation.jpg`                                     | Kundli analysis hero image             | Form step visual shift           | Input focus zooming on iOS             | Native input font sizes (16px base on mobile), eager hero image.                                         | **OPTIMIZED** |
| **14** | **About Us & Founder**       | `/about`                                 | `AboutPage` (29.7 kB)                     | `hero-penthouse.jpg`, `rishwa-sinha.jpg`                         | Hero Penthouse image / H1              | Founder portrait image shift     | Quote card alignment                   | Explicit dimensions on founder portrait (`853x1024`), priority hero.                                     | **OPTIMIZED** |
| **15** | **Contact & Booking**        | `/contact`                               | `ContactPage` (24.9 kB)                   | `commercial-reception-lobby.jpg`                                 | Reception lobby hero image             | Form validation message shift    | Keyboard covering inputs on mobile     | Autocomplete attributes, priority hero, direct WhatsApp CTA.                                             | **OPTIMIZED** |

---

## 2. KEY ARCHITECTURAL OBSERVATIONS

### 2.1 Hero Loading Behavior

- **Text vs. Image LCP:** On pages with typographic hero headers (e.g. `VastuAuditPage`), LCP occurs rapidly via text element paint. On visual-first pages (e.g. `HomePage`, `AstrologyPage`, `ResidentialVastuPage`), the hero background image is the LCP element.
- **Implemented Fix:** By applying `fetchPriority="high"`, `loading="eager"`, and `decoding="sync"` to visual-first heroes, we ensure the browser's preload scanner requests the hero image concurrently with CSS parsing, avoiding render-blocking cascades.

### 2.2 Layout Stability Across Templates

- **Zero Injected Ads or Banners:** Unlike editorial publications, 7Rays Astro Vastu has zero programmatic advertising or third-party widgets that inject layout shifts.
- **Controlled Viewport Containers:** All hero containers use fixed minimum viewport constraints (`min-h-[520px]`, `min-h-[580px]`, or `min-h-[85vh]`) with absolute full-bleed image positioning, ensuring the layout height is reserved before image bytes arrive.

### 2.3 Mobile Stacking Consistency

- Grid systems across all service templates use mobile-first responsive breakpoints:
  - Mobile (320px–639px): Single column (`grid-cols-1`) or dual compact column (`grid-cols-2`).
  - Tablet (640px–1023px): Dual or triple columns (`sm:grid-cols-2 md:grid-cols-3`).
  - Desktop (1024px+): Multi-column layouts (`lg:grid-cols-12` or `lg:grid-cols-6`).
- This guarantees zero horizontal page blowout and predictable content reflow on any device width.
