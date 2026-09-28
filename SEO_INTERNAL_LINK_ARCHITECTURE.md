# 7Rays Astro Vastu — Internal Linking Architecture & Governance

**Document Version:** 2.0 (Topical Graph Optimization)  
**Objective:** Engineer a strategic, crawlable, and contextual internal linking web that flows PageRank, reinforces semantic entity relationships, avoids orphan pages, and guides users smoothly toward consultation booking.

---

## 1. Architectural Linking Framework: The 4-Way Flow

Every URL on the 7Rays Astro Vastu website must participate in a deliberate **4-Way Link Flow**:

```
                  ┌───────────────────────────────┐
                  │          HOMEPAGE (/)         │
                  └───────────────▲───────────────┘
                                  │
                               Upward
                                  │
                  ┌───────────────▼───────────────┐
                  │    PILLAR PAGES (/vastu,      │
                  │   /astrology, /locations)     │
                  └───────────────▲───────────────┘
                                  │
                               Upward
                                  │
                  ┌───────────────▼───────────────┐
                  │     SUB-SERVICES & HUBS       │
                  │ (/vastu/residential, etc.)    │
                  └───────▲───────────────▲───────┘
                          │               │
                       Upward          Sideways ──► Related Articles
                          │               │
       ┌──────────────────▼───────────────▼──────────────────┐
       │             EDITORIAL ARTICLES & GUIDES             │
       │    (/insights/residential-vastu/master-bedroom)     │
       └──────────────────────────┬──────────────────────────┘
                                  │
                             Conversion
                                  │
       ┌──────────────────────────▼──────────────────────────┐
       │     CONVERSION TARGETS (/contact, /consultation)    │
       └─────────────────────────────────────────────────────┘
```

### The 4 Linking Dimensions:

1. **Upward Flow (Hierarchy Anchor):**  
   Every supporting article links directly back to its sub-service parent and major topic pillar (e.g. `Master Bedroom Guide` -> `Residential Vastu Pillar` -> `Vastu Hub`).
2. **Sideways Flow (Topical Affinity):**  
   Every article or case study links to 2–3 semantically related articles within the same sub-cluster (e.g. `Master Bedroom Vastu` links sideways to `Kitchen Vastu Fire Element` and `Bathroom & Toilet Vastu Remedies`).
3. **Local Flow (Geographic Context):**  
   Articles discussing urban apartment constraints, high-rise living, or IT work-from-home setups contextually link to `/locations/bangalore` and `/locations/bangalore/residential-vastu`.
4. **Conversion Flow (Commercial Climax):**  
   Every informational and commercial page features in-content contextual callout boxes and section-ending CTAs linking to `/contact` or `/consultation`.

---

## 2. Pillar-to-Cluster Internal Link Mapping

### A. Residential Vastu Pillar (`/vastu/residential`)

| Outbound Link Target                                | Link Type          | Contextual Anchor Text Example                            | Target Intent    |
| --------------------------------------------------- | ------------------ | --------------------------------------------------------- | ---------------- |
| `/vastu/apartment-vastu`                            | Sub-Service        | "specialized Vastu for apartments and high-rise flats"    | Commercial       |
| `/vastu/new-construction`                           | Sub-Service        | "architectural planning and new home construction Vastu"  | Commercial       |
| `/vastu/plot-selection`                             | Sub-Service        | "pre-purchase residential plot Vastu evaluation"          | Commercial       |
| `/vastu/remedies`                                   | Core Advantage     | "non-demolition Vastu remedies using elemental balancing" | Commercial       |
| `/vastu/audit`                                      | Diagnostic Service | "on-site digital 16-zone Vastu energy audit"              | Commercial       |
| `/locations/bangalore/residential-vastu`            | Local Hub          | "Residential Vastu consultancy across Bangalore"          | Local Commercial |
| `/case-studies/whitefield-apartment-health-harmony` | Social Proof       | "our Whitefield high-rise apartment case study"           | Proof            |
| `/contact`                                          | Conversion         | "Book a Residential Vastu Consultation"                   | Transactional    |

### B. Commercial Vastu Pillar (`/vastu/commercial`)

| Outbound Link Target                              | Link Type          | Contextual Anchor Text Example                                 | Target Intent    |
| ------------------------------------------------- | ------------------ | -------------------------------------------------------------- | ---------------- |
| `/vastu/corporate`                                | Enterprise Service | "corporate office layouts and tech park Vastu"                 | Commercial       |
| `/vastu/industrial`                               | B2B Service        | "industrial plant and manufacturing facility Vastu"            | Commercial       |
| `/vastu/audit`                                    | Diagnostic Service | "commercial floor plan energy and geopathic audit"             | Commercial       |
| `/locations/bangalore/commercial-vastu`           | Local Hub          | "commercial Vastu advisory for Bangalore startups and offices" | Local Commercial |
| `/case-studies/corporate-office-bangalore`        | Social Proof       | "case study on tech headquarters optimization in Bangalore"    | Proof            |
| `/case-studies/fintech-startup-growth-hsr-layout` | Social Proof       | "HSR Layout fintech facility turnaround"                       | Proof            |
| `/contact`                                        | Conversion         | "Schedule a Commercial Space Consultation"                     | Transactional    |

### C. Vedic Astrology Pillar (`/astrology`)

| Outbound Link Target             | Link Type            | Contextual Anchor Text Example                          | Target Intent       |
| -------------------------------- | -------------------- | ------------------------------------------------------- | ------------------- |
| `/astrology/birth-chart`         | Sub-Service          | "detailed Janam Kundli and Lagna chart analysis"        | Transactional       |
| `/astrology/career`              | Specialized Advisory | "career timing and professional transition astrology"   | Transactional       |
| `/astrology/business`            | Enterprise Advisory  | "business partnership compatibility and venture timing" | Transactional       |
| `/astrology/marriage`            | Matchmaking          | "authentic Kundli Milan and relationship compatibility" | Transactional       |
| `/astrology/wealth`              | Financial Advisory   | "Dhana yoga assessment and wealth timing"               | Transactional       |
| `/locations/bangalore/astrology` | Local Hub            | "in-person Vedic Astrology consultations in Bangalore"  | Local Transactional |
| `/contact`                       | Conversion           | "Book an Astrology Consultation Session"                | Transactional       |

### D. Bangalore Local Hub (`/locations/bangalore`)

| Outbound Link Target                     | Link Type              | Contextual Anchor Text Example                                       | Target Intent       |
| ---------------------------------------- | ---------------------- | -------------------------------------------------------------------- | ------------------- |
| `/vastu/residential`                     | Service Pillar         | "residential Vastu guidelines for Bangalore homeowners"              | Commercial          |
| `/locations/bangalore/residential-vastu` | Local Service          | "Bangalore apartment and villa on-site inspections"                  | Local Transactional |
| `/locations/bangalore/commercial-vastu`  | Local Service          | "commercial office Vastu for Bangalore tech parks"                   | Local Transactional |
| `/locations/bangalore/industrial-vastu`  | Local Service          | "industrial Vastu for Peenya and Bommasandra plants"                 | Local Transactional |
| `/locations/bangalore/vastu-audit`       | Local Service          | "on-site digital compass and geopathic scanning in Bengaluru"        | Local Transactional |
| `/about/rishwa-sinha`                    | E-E-A-T Profile        | "Certified Vastu Consultant Rishwa Sinha"                            | Entity Authority    |
| Official Google Maps URL                 | External Map Reference | "View our Bangalore location on Google Maps (3J64+827, Dasarahalli)" | Local Trust         |

---

## 3. Anchor Text Strategy & Quality Standards

Google's Webmaster Guidelines penalize aggressive, keyword-stuffed, repetitive anchor texts. The 7Rays internal linking protocol strictly enforces:

### 1. Anchor Text Diversity Matrix:

- **Descriptive Keyword Anchors (50%):** e.g., _"scientific residential Vastu consultation"_, _"commercial office layout optimization"_, _"non-demolition apartment remedies"_.
- **Entity / Brand Anchors (25%):** e.g., _"7Rays Astro Vastu methodology"_, _"consultations by Rishwa Sinha"_, _"7Rays 16-zone diagnostic map"_.
- **Action-Oriented / Partial Match (25%):** e.g., _"explore our Bangalore commercial case studies"_, _"review the complete apartment Vastu checklist"_, _"request an on-site energy audit"_.

### 2. Forbidden Anchor Text Patterns:

- ❌ **Generic Vague Anchors:** Never use bare _"click here"_, _"read more"_, _"this link"_, or _"learn more"_ as standalone anchor text without contextual descriptive words.
- ❌ **Repetitive Exact-Match Stuffing:** Avoid repeatedly using the exact string _"best vastu consultant in bangalore"_ as an anchor text across 50 internal links.
- ❌ **Chained Redundant Links:** Do not place two consecutive links to the exact same URL within the same paragraph.

---

## 4. In-Content Contextual Linking Engine (Rules for Articles)

Every editorial article published in `/insights/...` must strictly comply with the following internal linking structure:

1. **First 200 Words (Upward Anchor):**  
   Must contain at least one contextual link upward to the parent service pillar (e.g. an article on _Master Bedroom Vastu_ must link to `/vastu/residential` within the first two paragraphs).
2. **Body Section (Methodology / Synergy Anchor):**  
   Must reference the non-demolition philosophy (`/vastu/remedies`) or energy scanning methodology (`/vastu/audit`).
3. **Mid-Article Callout (Local / Case Study Anchor):**  
   Must include an editorial callout box linking to a relevant local service or verified case study (e.g., _"See how we corrected directional imbalances in our [Bangalore high-rise apartment case study](/case-studies/whitefield-apartment-health-harmony)."_).
4. **End of Article (Conversion Anchor):**  
   Must conclude with a dedicated consultation card featuring a prominent action button linking directly to `/contact`.
5. **Related Reading Grid:**  
   Displays exactly 3 curated articles from the same topic cluster.

---

## 5. Breadcrumb Navigation Specifications

Every route on the website (excluding the homepage) must display an accessible visual breadcrumb trail above the primary `<h1>`:

### Visual Breadcrumb Specifications:

- **Location:** Top of page container, directly beneath the global header.
- **Styling:** Small typography (`text-xs text-slate-400`), muted chevron dividers (`/` or `ChevronRight`), hover highlight in champagne gold (`hover:text-amber-400`).
- **Hierarchy Mapping Examples:**
  - `Home / Vastu Services / Residential Vastu`
  - `Home / Vastu Services / Commercial Vastu / Corporate Offices`
  - `Home / Locations / Bangalore / Residential Vastu`
  - `Home / Insights / Residential Vastu / Master Bedroom Vastu`
  - `Home / Case Studies / Fintech Startup in HSR Layout`

### Technical Schema Pairing:

Every visual breadcrumb trail is backed 1:1 by a matching `BreadcrumbList` schema script embedded in the page `<head>`.
