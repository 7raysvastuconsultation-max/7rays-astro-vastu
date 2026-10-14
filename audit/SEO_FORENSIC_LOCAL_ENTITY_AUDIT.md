# 7RAYS ASTRO VASTU — LOCAL SEO & BUSINESS ENTITY FORENSIC AUDIT
**Document ID**: SEO_FORENSIC_LOCAL_ENTITY_AUDIT.md  
**Date of Audit**: October 14, 2026  
**Auditor**: Local Search & Geo-Targeting Specialist  
**Primary Focus Area**: Dasarahalli, Greater Bengaluru & Karnataka Service Corridor  

---

## 1. Verified Authoritative Business Entity Truth

All local SEO evaluations are benchmarked against the verified operational facts of the business:

| Entity Attribute | Authoritative Source of Truth | Implementation Status in Code |
| :--- | :--- | :---: |
| **Brand Name** | 7Rays Astro Vastu | **PASS** (Consistent across site) |
| **Founder / Principal Consultant** | Rishwa Sinha | **PASS** (Consistent across site) |
| **Professional Designation** | Certified Vastu Consultant | **PASS** (Consistent across site) |
| **Professional Experience** | 5+ years | **PASS** (Consistent across site) |
| **Physical Headquarters** | `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India` | **PASS** (`src/config/business.ts`) |
| **Official Contact Phone** | `+91 70910 21616` | **PASS** (Verified across telephone links) |
| **WhatsApp Direct Channel** | `+91 70910 21616` (`917091021616`) | **PASS** (Configured in FloatingActions) |
| **Primary Domain** | `https://7raysastrovastu.in/` | **PASS** (Canonical base URL) |
| **Google Maps Pin URL** | `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9` | **PASS** (Embedded on Contact & Master) |
| **Coordinates (Geo)** | Lat: `13.0645`, Lng: `77.5875` | **PASS** (Matches Dasarahalli location) |

---

## 2. NAP Consistency Across Codebase Components

A multi-file grep audit was executed across all components and pages to detect conflicting addresses, old phone numbers, or fabricated branch locations:

```bash
grep -rn "70910" src/
grep -rn "Dasarahalli" src/
grep -rn "Balaji Layout" src/
```

### Findings:
1. **Phone Number Integrity**:
   - `+91 70910 21616` is used exclusively across `business.ts`, `env.ts`, `FloatingActions.tsx`, and `ContactPage.tsx`.
   - Zero conflicting phone numbers (e.g. dummy 9876543210 or placeholder formats) were discovered.
2. **Address Uniformity**:
   - The address string `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024` is identical across `business.ts`, `ContactPage.tsx`, `BangaloreMasterPage.tsx`, and `LocalBusinessSchema.tsx`.
3. **No Fabricated Branches (Google Anti-Spam Compliance)**:
   - Many local SEO agencies mistakenly create physical "branch office" addresses for every neighborhood in Bangalore (e.g. inventing a fake office in Whitefield, Koramangala, etc.).
   - 7Rays Astro Vastu adheres strictly to Google's Local Business Guidelines: the site explicitly declares that **Dasarahalli is the sole registered consulting office**, while other locations represent **on-site scheduled inspection zones**.

---

## 3. Bangalore Local SEO Hierarchy Analysis

The local architecture is structured into two tiers:

### Tier 1: Bangalore Master & Functional Local Pillars
- `/locations/bangalore` — Master Bangalore Local Hub (2,200 words, rich local FAQ, interactive map embed, founder credentials).
- `/locations/bangalore/residential-vastu` — Dedicated to on-site home visits across Bangalore tech suburbs.
- `/locations/bangalore/commercial-vastu` — Dedicated to corporate office audits in Bangalore tech corridors (ORR, Whitefield, E-City).
- `/locations/bangalore/industrial-vastu` — Dedicated to manufacturing plants in Peenya, Bommasandra, Hoskote.
- `/locations/bangalore/vastu-audit` — Dedicated to on-site physical instrument testing in Bangalore properties.
- `/locations/bangalore/astrology` — Dedicated to in-person Dasarahalli desk consultations and video sessions.

### Tier 2: Neighborhood Service Area Pages
- `/locations/indiranagar` (Pincodes: 560038, 560008 — 100ft Rd retail & boutique offices)
- `/locations/hsr-layout` (Pincode: 560102 — Fintech scale-ups & residential apartments)
- `/locations/koramangala` (Executive commercial suites & luxury residences)
- `/locations/whitefield` (Gated high-rise apartments & IT tech parks)

### Quality & Content Differentiation:
- Each neighborhood page contains **unique localized copy**:
  - `indiranagar`: Evaluates high-street retail entrance pada alignments on 100 Feet Road and North-East plot cuts in redeveloped residential plots.
  - `hsr-layout`: Focuses on fast-growing tech startups occupying leased floor plates, multi-story startup seating friction, and corner plots.
  - `whitefield`: Addresses structural shear wall constraints, master suite bathroom alignments in high-rise towers, and geopathic energy scans.
  - `koramangala`: Covers executive boardroom alignment, commercial leases, and luxury villa layouts.

---

## 4. Local Keyword Cannibalization Audit

A potential overlap was detected between the **broad national service pages** and the **Bangalore localized pages**:

| Broad Service URL | Bangalore Local URL | Overlap Query Risk | Severity | Recommended Fix |
| :--- | :--- | :--- | :---: | :--- |
| `/vastu/residential` | `/locations/bangalore/residential-vastu` | "Residential Vastu Bangalore" | Medium | Ensure `/vastu/residential` targets national home planning; let the `/locations/` URL capture "in Bangalore". |
| `/vastu/commercial` | `/locations/bangalore/commercial-vastu` | "Commercial Vastu Bangalore" | Medium | Ensure `/vastu/commercial` targets enterprise workplace Vastu; let the `/locations/` URL capture Bangalore tech parks. |
| `/astrology` | `/locations/bangalore/astrology` | "Vedic Astrology in Bangalore" | **High** | The meta title of `/astrology` currently includes "in Bangalore". Remove "in Bangalore" from the broad `/astrology` title. |
| `/vastu-services/vastu-audit` | `/locations/bangalore/vastu-audit` | "Vastu Audit in Bangalore" | **High** | The meta title of `/vastu-services/vastu-audit` includes "in Bangalore". Update title to "Scientific Vastu Audit & 16-Zone Energy Assessment". |

---

## 5. Google Business Profile (GBP) Alignment Checklist

Prior to connecting Google Search Console and launching the site:
1. **Exact Name Match**: Verify the Google Business Profile is named `7Rays Astro Vastu` or `7Rays Vastu Consultant Bangalore`.
2. **Category Selection**:
   - Primary Category: `Astrologer` or `Vastu Consultant` (if available in region)
   - Secondary Category: `Consultant`, `Corporate Office`
3. **Primary Phone**: Ensure the GBP listing displays `+91 70910 21616`.
4. **Website Link**: Ensure GBP website button links to `https://7raysastrovastu.in/` (Apex HTTPS, no trailing slash, no www).
5. **Service Areas in GBP**: Add Bengaluru, Dasarahalli, Hebbal, Yelahanka, Indiranagar, Koramangala, HSR Layout, Whitefield, Electronic City.
