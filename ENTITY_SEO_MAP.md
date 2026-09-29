# 7Rays Astro Vastu — Entity SEO & Knowledge Graph Architecture

**Canonical Production Domain:** `https://7raysastrovastu.in`  
**Execution Date:** 2026-09-29  
**Standard:** Schema.org Linked Data + Google Knowledge Graph & AI Semantic Extraction  
**Status:** FULL AUDIT COMPLETE — PASSED

---

## 1. Executive Entity Framework

Search engines and generative AI models (Google AI Overviews, Perplexity, ChatGPT Search, Microsoft Copilot) interpret websites through **entities** and **relationships** rather than raw keywords alone.

The 7Rays digital ecosystem is structured around a central, verifiable node:

```
[Brand Entity] 7Rays Astro Vastu
      │
      ├── [Person Entity] Rishwa Sinha (Founder & Certified Vastu Consultant)
      │
      ├── [Place / Geo Entity] Bengaluru (Dasarahalli, Karnataka 560024)
      │
      ├── [Subject Matter Entities]
      │     ├── Vastu Shastra (Panchatattva, 16 Directional Zones, Non-Demolition)
      │     └── Vedic Astrology (Parashari / KP Kundli Analysis, Planetary Dashas)
      │
      └── [Service Offerings]
            ├── Residential & Apartment Vastu
            ├── Commercial, Office & Industrial Vastu
            ├── Zero-Demolition Elemental Remediation
            ├── Scientific CAD & Geopathic Energy Audits
            └── International / NRI Remote Consultations
```

---

## 2. Core Entity Definitions

### Primary Organization Entity

- **Formal Name:** `7Rays Astro Vastu`
- **Canonical URI / @id:** `https://7raysastrovastu.in/#organization`
- **Entity Type:** `ProfessionalService` / `LocalBusiness` / `Organization`
- **Description:** Premium Vastu Shastra and Vedic Astrology consultancy providing non-demolition directional balancing and astrological guidance for homes, commercial offices, and global clients.
- **Physical Headquarters:** `3J64+827, Balaji Layout, Dasarahalli, Bengaluru, Karnataka 560024`
- **Google Maps CID:** `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9`
- **Verified Communication Channels:**
  - Phone: `+91 91089 05588`
  - Email: `7raysvastuconsultation@gmail.com`
  - WhatsApp: `+91 91089 05588`

### Lead Practitioner / Expert Entity

- **Name:** `Rishwa Sinha`
- **Canonical URI / @id:** `https://7raysastrovastu.in/consultant/rishwa-sinha#person`
- **Entity Type:** `Person`
- **Professional Title:** `Certified Vastu Consultant & Vedic Astrologer`
- **Professional Tenure:** `5+ Years of Active Practice`
- **Affiliation:** `7Rays Astro Vastu`
- **Core Competencies:**
  - 16-Zone Compass Degree Mathematical Division
  - Panchatattva Elemental Balancing (Fire, Earth, Space, Water, Air)
  - Zero-Demolition Metallic Boundary Inlay Remediation
  - Parashari & KP Natal Horoscope Analysis (Janam Kundli)
  - Remote CAD Blueprint Auditing for Global & NRI Clients

---

## 3. Linked Data JSON-LD Graph Implementation

All schema components throughout the website interconnect via unambiguous `@id` references:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://7raysastrovastu.in/#organization",
      "name": "7Rays Astro Vastu",
      "url": "https://7raysastrovastu.in",
      "logo": "https://7raysastrovastu.in/favicon.svg",
      "founder": {
        "@type": "Person",
        "@id": "https://7raysastrovastu.in/consultant/rishwa-sinha#person",
        "name": "Rishwa Sinha",
        "jobTitle": "Certified Vastu Consultant"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3J64+827, Balaji Layout, Dasarahalli",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560024",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-91089-05588",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://7raysastrovastu.in/#localbusiness",
      "name": "7Rays Astro Vastu",
      "parentOrganization": {
        "@id": "https://7raysastrovastu.in/#organization"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0456,
        "longitude": 77.5872
      },
      "hasMap": "https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9",
      "priceRange": "$$$"
    }
  ]
}
```

---

## 4. Entity Terminology Harmonization

To prevent AI confusion and hallucination, all on-page copy, metadata, and schemas adhere to strict terminology rules:

| Entity Attribute       | Canonical Standard                             | Prohibited Variations                                       |
| :--------------------- | :--------------------------------------------- | :---------------------------------------------------------- |
| **Brand Name**         | `7Rays Astro Vastu`                            | "7 Rays Astrology", "Seven Rays", "7 Rays Vastu Kendra"     |
| **Consultant Name**    | `Rishwa Sinha`                                 | "Dr. Rishwa", "Pandit Rishwa", "Rishwa Astrologer"          |
| **Consultant Title**   | `Certified Vastu Consultant`                   | "World's Best Vastu Expert", "Guru", "Celebrity Astrologer" |
| **Core Method**        | `Non-Demolition Vastu Remedies`                | "Magic Cures", "Instant 100% Cures", "Voodoo Remedies"      |
| **Headquarters**       | `Dasarahalli, Bengaluru, Karnataka 560024`     | Vague "Bangalore, India" or unverified virtual addresses    |
| **Consultation Modes** | `On-site Bangalore & Remote Global CAD Audits` | "Guaranteed in-person anywhere"                             |

---

## 5. Knowledge Graph Verification Status: PASSED

- Entity disambiguation is established.
- Consistent NAP and geographic coordinates are verified.
- Direct JSON-LD schemas connect the organization, founder, services, and physical address.
