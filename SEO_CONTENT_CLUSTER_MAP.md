# 7Rays Astro Vastu — Content Cluster & Topical Authority Map

**Document Version:** 2.0 (Full Cluster Ecosystem)  
**Objective:** Map all informational, commercial, and transactional content into interconnected clusters that establish undeniable topical authority across Vastu Shastra, Vedic Astrology, and Bangalore Local Search.

---

## 1. Master Cluster Overview

```
                               ┌────────────────────────────────────────────────────────┐
                               │                    7RAYS ASTRO VASTU                   │
                               │                Topical Authority Engine                │
                               └───────────────────────────┬────────────────────────────┘
                                                           │
             ┌─────────────────────────────┬───────────────┴───────────────┬─────────────────────────────┐
             │                             │                               │                             │
┌────────────▼────────────┐  ┌─────────────▼─────────────┐  ┌──────────────▼──────────────┐  ┌────────────▼────────────┐
│   CLUSTER 1: VASTU      │  │  CLUSTER 2: COMMERCIAL    │  │    CLUSTER 3: ASTROLOGY     │  │  CLUSTER 4: BANGALORE   │
│       RESIDENTIAL       │  │       & INDUSTRIAL        │  │     VEDIC & HOROSCOPE       │  │        LOCAL HUB        │
└────────────┬────────────┘  └─────────────┬─────────────┘  └──────────────┬──────────────┘  └────────────┬────────────┘
             │                             │                               │                             │
      12 Topic Nodes                10 Topic Nodes                   8 Topic Nodes                 6 Topic Nodes
```

---

## 2. Cluster 1: Residential Vastu Authority Cluster

### Pillar: `/vastu/residential`

- **Primary Search Intent:** Commercial Investigation & Homeowner Guidance (TOFU / MOFU)
- **Primary Keyword:** `residential vastu consultant bangalore`
- **Target Schema:** `Service`, `FAQPage`, `BreadcrumbList`

### Sub-Services & Educational Guides:

| Node Type       | URL Path                                                               | Primary Focus & Target Query                        | Intent / Funnel Stage | Upward Link Target   | Sideways Link Targets                                          |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------- | --------------------- | -------------------- | -------------------------------------------------------------- |
| **Sub-Service** | `/vastu/apartment-vastu`                                               | High-rise flats, shared walls, balcony light inflow | Commercial (BOFU)     | `/vastu/residential` | `/vastu/remedies`, `/locations/bangalore/residential-vastu`    |
| **Sub-Service** | `/vastu/new-construction`                                              | Pre-construction planning, blueprint grid alignment | Commercial (MOFU)     | `/vastu/residential` | `/vastu/plot-selection`, `/process`                            |
| **Sub-Service** | `/vastu/plot-selection`                                                | Soil quality, road hits, plot shape, slope energy   | Commercial (BOFU)     | `/vastu/residential` | `/vastu/new-construction`, `/vastu/audit`                      |
| **Sub-Service** | `/vastu/remedies`                                                      | Non-demolition elemental balancing, metal strips    | Commercial (BOFU)     | `/vastu/residential` | `/vastu/audit`, `/contact`                                     |
| **Guide**       | `/insights/residential-vastu/master-bedroom-vastu`                     | Southwest placement, bed direction, sleep quality   | Informational (TOFU)  | `/vastu/residential` | `bathroom-toilet-vastu-remedies`, `kitchen-vastu-fire-element` |
| **Guide**       | `/insights/residential-vastu/kitchen-vastu-fire-element`               | Southeast Agni placement, burner direction, health  | Informational (TOFU)  | `/vastu/residential` | `master-bedroom-vastu`, `pooja-room-vastu`                     |
| **Guide**       | `/insights/residential-vastu/main-entrance-vastu-padas`                | 32 padas, positive vs negative door orientations    | Informational (MOFU)  | `/vastu/residential` | `north-facing-house-vastu`, `south-facing-house-vastu`         |
| **Guide**       | `/insights/residential-vastu/bathroom-toilet-vastu-remedies`           | Neutralizing negative drainage without breakage     | Informational (MOFU)  | `/vastu/remedies`    | `master-bedroom-vastu`, `/vastu/audit`                         |
| **Guide**       | `/insights/residential-vastu/pooja-room-vastu`                         | Northeast Ishan corner, sacred altar guidelines     | Informational (TOFU)  | `/vastu/residential` | `living-room-vastu`, `kitchen-vastu-fire-element`              |
| **Guide**       | `/insights/residential-vastu/home-office-study-room-vastu`             | WFH desk direction, concentration, north/west desks | Informational (TOFU)  | `/vastu/residential` | `/vastu/corporate`, `staircase-vastu-guidelines`               |
| **Guide**       | `/insights/residential-vastu/north-facing-house-vastu`                 | Kuber wealth zone, entrance padas, floor plan       | Informational (MOFU)  | `/vastu/residential` | `main-entrance-vastu-padas`, `east-facing-house-vastu`         |
| **Guide**       | `/insights/residential-vastu/south-facing-house-vastu-myth-vs-reality` | Debunking south facing myths, Vithetha pada wealth  | Informational (TOFU)  | `/vastu/residential` | `north-facing-house-vastu`, `/vastu/remedies`                  |

---

## 3. Cluster 2: Commercial & Industrial Vastu Authority Cluster

### Pillar: `/vastu/commercial`

- **Primary Search Intent:** B2B Commercial Investigation (MOFU / BOFU)
- **Primary Keyword:** `commercial vastu consultant bangalore`
- **Target Schema:** `Service`, `FAQPage`, `BreadcrumbList`

### Sub-Services & Enterprise Guides:

| Node Type              | URL Path                                                              | Primary Focus & Target Query                           | Intent / Funnel Stage       | Upward Link Target  | Sideways Link Targets                                                               |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| **Enterprise Service** | `/vastu/corporate`                                                    | Tech parks, leased corporate offices, executive suites | B2B Commercial (BOFU)       | `/vastu/commercial` | `/locations/bangalore/commercial-vastu`, `/case-studies/corporate-office-bangalore` |
| **Enterprise Service** | `/vastu/industrial`                                                   | Factories, manufacturing sheds, industrial warehouses  | B2B Commercial (BOFU)       | `/vastu/commercial` | `/locations/bangalore/industrial-vastu`, `/vastu/audit`                             |
| **Diagnostic Service** | `/vastu/audit`                                                        | 16-zone digital CAD mapping, geopathic stress probes   | Technical Commercial (BOFU) | `/vastu/commercial` | `/vastu/remedies`, `/locations/bangalore/vastu-audit`                               |
| **Guide**              | `/insights/commercial-vastu/office-layout-executive-cabin-vastu`      | CEO/MD seating direction, southwest leadership power   | Informational (MOFU)        | `/vastu/corporate`  | `retail-store-and-showroom-vastu`, `/contact`                                       |
| **Guide**              | `/insights/commercial-vastu/retail-store-and-showroom-vastu`          | Customer footfall pathway, cash counter orientation    | Informational (MOFU)        | `/vastu/commercial` | `office-layout-executive-cabin-vastu`, `/contact`                                   |
| **Guide**              | `/insights/commercial-vastu/restaurant-and-hospitality-vastu`         | Kitchen Agni zone, dining ambiance, bar counter        | Informational (MOFU)        | `/vastu/commercial` | `/case-studies/commercial-space-hyderabad`                                          |
| **Guide**              | `/insights/commercial-vastu/co-working-space-vastu-principles`        | Shared desk zones, open-plan airflow, startup energy   | Informational (TOFU)        | `/vastu/corporate`  | `/locations/hsr-layout`, `/locations/koramangala`                                   |
| **Guide**              | `/insights/commercial-vastu/factory-machinery-and-raw-material-vastu` | Heavy equipment southwest balance, boiler southeast    | Informational (MOFU)        | `/vastu/industrial` | `/locations/bangalore/industrial-vastu`                                             |

---

## 4. Cluster 3: Vedic Astrology Authority Cluster

### Pillar: `/astrology`

- **Primary Search Intent:** Personal Advisory & Horoscope Consultation (TOFU / MOFU)
- **Primary Keyword:** `vedic astrology consultation bangalore`
- **Target Schema:** `Service`, `FAQPage`, `BreadcrumbList`

### Sub-Services & Educational Guides:

| Node Type        | URL Path                                                         | Primary Focus & Target Query                          | Intent / Funnel Stage | Upward Link Target | Sideways Link Targets                                                |
| ---------------- | ---------------------------------------------------------------- | ----------------------------------------------------- | --------------------- | ------------------ | -------------------------------------------------------------------- |
| **Core Service** | `/astrology/birth-chart`                                         | Complete Janam Kundli, Lagna & Navamsha reading       | Transactional (BOFU)  | `/astrology`       | `/astrology/career`, `/astrology/marriage`                           |
| **Core Service** | `/astrology/career`                                              | Career transition timing, promotions, 10th house D10  | Transactional (BOFU)  | `/astrology`       | `/astrology/business`, `/locations/bangalore/astrology`              |
| **Core Service** | `/astrology/business`                                            | Venture launch Muhurtha, co-founder compatibility     | Transactional (BOFU)  | `/astrology`       | `/vastu/corporate`, `/astrology/career`                              |
| **Core Service** | `/astrology/marriage`                                            | Kundli Milan, Navamsha harmony, relationship timing   | Transactional (BOFU)  | `/astrology`       | `/astrology/birth-chart`, `/contact`                                 |
| **Core Service** | `/astrology/wealth`                                              | Dhana yogas, financial timing, asset acquisition      | Transactional (BOFU)  | `/astrology`       | `/astrology/career`, `/contact`                                      |
| **Core Service** | `/astrology/life-path`                                           | Planetary Mahadasha forecast, life purpose alignment  | Informational (MOFU)  | `/astrology`       | `/astrology/birth-chart`, `/contact`                                 |
| **Guide**        | `/insights/astrology/understanding-dasha-cycles-and-transitions` | Explaining Mahadasha/Antardasha shifts transparently  | Informational (TOFU)  | `/astrology`       | `/astrology/life-path`, `planetary-influences-on-residential-spaces` |
| **Guide**        | `/insights/astrology/planetary-influences-on-residential-spaces` | Astro-Vastu synthesis: matching natal planets to home | Informational (MOFU)  | `/astrology`       | `/vastu/residential`, `/contact`                                     |

---

## 5. Cluster 4: Bangalore Local SEO Hub

### Pillar: `/locations/bangalore`

- **Primary Search Intent:** Local Commercial & Map-Pack Transactional (BOFU)
- **Primary Keyword:** `vastu consultant in bangalore`
- **Target Schema:** `LocalBusiness` (Dasarahalli 560024 HQ), `FAQPage`, `BreadcrumbList`

### Specialized Local Service Landing Nodes:

| Local Service Landing           | URL Path                                 | Target Query & Search Intent                       | Inbound Connections               | Conversion Target           |
| ------------------------------- | ---------------------------------------- | -------------------------------------------------- | --------------------------------- | --------------------------- |
| **Bangalore Residential Vastu** | `/locations/bangalore/residential-vastu` | `residential vastu consultant in bangalore` (BOFU) | Bangalore Hub, Residential Pillar | Direct Consultation Booking |
| **Bangalore Commercial Vastu**  | `/locations/bangalore/commercial-vastu`  | `commercial vastu consultant in bangalore` (BOFU)  | Bangalore Hub, Commercial Pillar  | Direct Consultation Booking |
| **Bangalore Industrial Vastu**  | `/locations/bangalore/industrial-vastu`  | `industrial vastu consultant bangalore` (BOFU)     | Bangalore Hub, Industrial Pillar  | Direct Consultation Booking |
| **Bangalore Vastu Audit**       | `/locations/bangalore/vastu-audit`       | `vastu audit in bangalore` (BOFU)                  | Bangalore Hub, Vastu Audit Page   | On-Site Inspection Booking  |
| **Bangalore Vedic Astrology**   | `/locations/bangalore/astrology`         | `astrology consultation in bangalore` (BOFU)       | Bangalore Hub, Astrology Pillar   | Consultation Booking        |

### Micro-Market Case Study Nodes:

- `/locations/indiranagar` (Boutiques, 100ft Rd retail, luxury residences)
- `/locations/hsr-layout` (Tech startups, sector villas)
- `/locations/koramangala` (High-street commercial, venture capital offices)
- `/locations/whitefield` (ITPB tech corridors, expansive gated communities)

---

## 6. Conversion Pathway Architecture

```
User Entry Point (Any Page)
      │
      ├── Top Header CTA: "Book a Consultation" (Direct to Form Modal)
      │
      ├── Mid-Page Service Breakdown: "View Specific Diagnostic Deliverables"
      │
      ├── Case Study / Proof Interruption: "See How We Resolved Similar Challenges"
      │
      ├── Bottom Section Banner: "Consult with Certified Expert Rishwa Sinha"
      │
      └── Global Footer: Complete Directory + Authoritative Location Details
```
