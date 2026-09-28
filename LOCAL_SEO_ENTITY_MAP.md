# 7Rays Astro Vastu — Local SEO Entity Map & Architecture

## Bengaluru / Bangalore Authority Engine (Phase 08)

**Entity Authority Status:** Verified & Synchronized  
**Authoritative Business Truth Source:** `src/config/business.ts`  
**Consultant Entity:** Rishwa Sinha, Certified Vastu Consultant (5+ Years Verified Experience)  
**Registered Headquarters:** 3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India  
**Verified Google Maps Listing:** [https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9](https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9)

---

## 1. Local Entity Graph & Semantic Hierarchy

The local semantic structure of 7Rays Astro Vastu adheres strictly to the single-entity model with verified on-site service territories:

```
                          7Rays Astro Vastu
                     (Verified Brand Entity)
                                │
               ┌────────────────┴────────────────┐
               ▼                                 ▼
         Rishwa Sinha                    Bengaluru / Bangalore
 (Certified Vastu Consultant,             (Verified Headquarters:
   5+ Years Experience)                   Dasarahalli, PIN 560024)
               │                                 │
               └────────────────┬────────────────┘
                                │
    ┌───────────────────────────┼───────────────────────────┐
    ▼                           ▼                           ▼
Vastu Services          Energy Diagnostics          Astrology Services
    │                           │                           │
    ├── Residential Vastu       └── Scientific Vastu        └── Vedic Astrology
    │   (/locations/bangalore/      Energy Audit                Consultation Desk
    │    residential-vastu)         (/locations/bangalore/      (/locations/bangalore/
    │                                vastu-audit)                astrology)
    ├── Commercial Vastu
    │   (/locations/bangalore/
    │    commercial-vastu)
    │
    └── Industrial Vastu
        (/locations/bangalore/
         industrial-vastu)
```

---

## 2. Business Location vs. Service Area Policy

A core architectural principle of this implementation is the rigorous, unambiguous separation between **Physical Business Location** and **Service Area Coverage**:

### A. Single Physical Business Location

- **Organization / Brand:** 7Rays Astro Vastu
- **Street Address:** 3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli
- **City / Locality:** Bengaluru
- **State:** Karnataka
- **Postal Code:** 560024
- **Country:** India (IN)
- **Geographical Coordinates:** Latitude 13.0645° N, Longitude 77.5875° E
- **Google Maps CID URL:** `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9`
- **Consultation Format:** In-person meetings at this office are conducted **strictly by prior appointment**.

### B. Service Area Coverage (On-Site Inspections)

7Rays Astro Vastu does **NOT** maintain branch offices, franchise outlets, or physical locations in other Bengaluru neighborhoods. Locality references represent dedicated **on-site service territories** where Rishwa Sinha travels to conduct physical property audits:

1. **North Bangalore:** Dasarahalli (Headquarters), Hebbal, Yelahanka, Jakkur, Thanisandra, Sahakar Nagar.
2. **East Bangalore:** Indiranagar, Whitefield, Marathahalli, Varthur, KR Puram, CV Raman Nagar.
3. **South Bangalore:** Koramangala, HSR Layout, JP Nagar, Jayanagar, Electronic City, Sarjapur Road, BTM Layout.
4. **West & Central Bangalore:** Malleshwaram, Rajajinagar, Sadashivanagar, Basavanagudi, MG Road, CBD.
5. **Industrial Corridors:** Peenya Industrial Area, Bommasandra, Bidadi, Nelamangala, Whitefield EPIP, Jigani.

---

## 3. Local URL Architecture & Canonical Map

| Page Role               | URL Path                                 | Primary Keyword Target                   | Funnel Level       | Schema Types                                                   |
| :---------------------- | :--------------------------------------- | :--------------------------------------- | :----------------- | :------------------------------------------------------------- |
| **Master Local Hub**    | `/locations/bangalore`                   | `vastu consultant bangalore`             | TOFU / MOFU / BOFU | `LocalBusiness`, `FAQPage`, `BreadcrumbList`                   |
| **Residential Local**   | `/locations/bangalore/residential-vastu` | `residential vastu consultant bangalore` | BOFU               | `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`        |
| **Commercial Local**    | `/locations/bangalore/commercial-vastu`  | `commercial vastu consultant bangalore`  | BOFU               | `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`        |
| **Industrial Local**    | `/locations/bangalore/industrial-vastu`  | `industrial vastu consultant bangalore`  | BOFU               | `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`        |
| **Vastu Audit Local**   | `/locations/bangalore/vastu-audit`       | `vastu audit bangalore`                  | BOFU               | `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`        |
| **Astrology Local**     | `/locations/bangalore/astrology`         | `astrology consultation in bangalore`    | BOFU               | `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`        |
| **Indiranagar Profile** | `/locations/indiranagar`                 | `vastu consultant indiranagar bangalore` | BOFU               | `LocalBusiness` (HQ + areaServed), `BreadcrumbList`, `FAQPage` |
| **HSR Layout Profile**  | `/locations/hsr-layout`                  | `vastu consultant hsr layout bangalore`  | BOFU               | `LocalBusiness` (HQ + areaServed), `BreadcrumbList`, `FAQPage` |
| **Koramangala Profile** | `/locations/koramangala`                 | `vastu consultant koramangala`           | BOFU               | `LocalBusiness` (HQ + areaServed), `BreadcrumbList`, `FAQPage` |
| **Whitefield Profile**  | `/locations/whitefield`                  | `vastu consultant whitefield`            | BOFU               | `LocalBusiness` (HQ + areaServed), `BreadcrumbList`, `FAQPage` |

---

## 4. LocalBusiness Schema Guidelines & Guardrails

To maintain complete compliance with Google Search Central guidelines and avoid schema penalties:

1. **Single Headquarters Representation:** All instances of `LocalBusiness` markup across every URL declare the identical address (`Dasarahalli, Bengaluru 560024`) and coordinates (`13.0645, 77.5875`).
2. **`areaServed` Specification:** Locality landing pages and sub-service pages use the `areaServed` property (e.g. `areaServed: ["Indiranagar", "Bengaluru"]`) rather than fabricating distinct physical locations.
3. **Zero Fabricated Ratings:** No `aggregateRating` or `review` schema is injected without a direct, verifiable third-party review feed.
4. **No Dummy Opening Hours:** Stored accurately as appointment-based consultations rather than fabricated 24/7 or retail opening hours.
5. **Direct Maps Linking:** `hasMap` and `sameAs` link directly to verified Google Maps entity (`https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9`).

---

## 5. Google Business Profile (GBP) Alignment Checklist

| Dimension              | GBP Profile Requirement                                | 7Rays Website Alignment                                           | Status   |
| :--------------------- | :----------------------------------------------------- | :---------------------------------------------------------------- | :------- |
| **Business Name**      | Exact match: 7Rays Astro Vastu                         | Exact match: 7Rays Astro Vastu                                    | Verified |
| **Address**            | 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024 | Identical address in footer, business.ts, schema, and local pages | Verified |
| **Categories**         | Vastu Consultant, Astrologer                           | Primary pillars dedicated to Vastu Shastra and Vedic Astrology    | Verified |
| **Website Link**       | https://7raysastrovastu.com                            | Canonical domain matches everywhere                               | Verified |
| **Google Maps Link**   | https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9              | Linked via interactive buttons on all local pages                 | Verified |
| **Service Areas**      | Greater Bengaluru, Karnataka                           | Documented explicitly as on-site visit territories                | Verified |
| **Consultant E-E-A-T** | Rishwa Sinha (Certified Vastu Consultant)              | Consistently represented with 5+ years experience                 | Verified |

---

## 6. Neighborhood Treatment Policy (Zero Doorway Pages)

In strict adherence to Google Search quality guidelines:

- **No Mass Template Spin:** We do not generate dozens of programmatic pages swapping only neighborhood names.
- **Micro-Market Value:** Locality profiles (Indiranagar, HSR Layout, Koramangala, Whitefield) provide genuine architectural context:
  - _Indiranagar:_ Older bungalow redevelopments, commercial high streets (100ft Rd, 12th Main), North-East cut adjustments.
  - _HSR Layout:_ Multi-floor tech startup spaces, co-working desk allocation, Gomukhi / Shermukhi plot skews.
  - _Koramangala:_ High-rise apartment balcony exposures, dining venue orientations, basement energy mitigation.
  - _Whitefield:_ Large gated villa communities (Prestige, Sobha, Brigade), open-plan layouts, tech park proximity.
- **Service Area Notice:** Every locality page explicitly displays:
  > _"7Rays Astro Vastu operates from its single registered headquarters in Dasarahalli, Bengaluru (560024). We provide scheduled on-site consultations across [Locality]. This page represents our dedicated service territory for on-site visits, not a physical branch office."_
