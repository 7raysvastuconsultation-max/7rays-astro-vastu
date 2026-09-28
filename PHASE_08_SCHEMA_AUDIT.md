# Phase 08 — Structured Data (Schema.org) Audit

**7Rays Astro Vastu — Schema Architecture**  
**Audit Date:** 2026-09-24  
**Auditor:** Antigravity SEO Architecture Engine  
**Objective:** Comprehensive inspection of all Schema.org structured data components to ensure strict compliance with Google Search Central guidelines, eliminate unverified attributes, and maintain pristine entity linkage.

---

## 1. Schema Component Inventory & Verification

### 1. `LocalBusiness` / `ProfessionalService` (`src/components/seo/schemas/LocalBusinessSchema.tsx`)

- **Schema Type:** `ProfessionalService` (inherits from `LocalBusiness`)
- **Entity URI (`@id`):** `https://7raysastrovastu.com/#localbusiness`
- **Headquarters Address:** `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India` (Verified)
- **Coordinates:** `latitude: 13.0617`, `longitude: 77.5878` (Dasarahalli HQ coordinates; verified)
- **Map Link:** `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9` (Authoritative Google Maps listing)
- **Telephone / Email / Hours:**
  - `telephone`: Omitted when `businessConfig.phone` is null. No fictitious phone number emitted.
  - `email`: Omitted when `businessConfig.email` is null. No fictitious email emitted.
  - `openingHours`: Omitted. In-person consultations operate strictly by prior appointment.
- **Ratings & Reviews:** **ZERO** aggregate ratings or fake review markups emitted.
- **Service Areas (`areaServed`):** Emitted as an array of `AdministrativeArea` objects covering Bangalore districts without creating fictitious branch addresses.
- **Compliance Status:** **PASS**

---

### 2. `Organization` (`src/components/seo/schemas/OrganizationSchema.tsx`)

- **Schema Type:** `Organization`
- **Entity URI (`@id`):** `https://7raysastrovastu.com/#organization`
- **Legal Name:** `7Rays Astro Vastu`
- **Founder Link:** Points directly to `@id: https://7raysastrovastu.com/#person` (Rishwa Sinha)
- **Logo / Image:** Uses verified site assets from `siteConfig.logoUrl` and `siteConfig.ogImage`.
- **Social Profiles (`sameAs`):** Emits only verified social profiles from `businessConfig.socialProfiles`.
- **Compliance Status:** **PASS**

---

### 3. `Person` (`src/components/seo/schemas/PersonSchema.tsx`)

- **Schema Type:** `Person`
- **Entity URI (`@id`):** `https://7raysastrovastu.com/#person`
- **Name:** `Rishwa Sinha`
- **Job Title:** `Certified Vastu Consultant & Vedic Astrologer`
- **Experience:** `5+ years experience` (strictly matching verified business truth)
- **Organization Link (`worksFor`):** Links to `7Rays Astro Vastu`
- **Credentials:** Certified Vastu Consultant
- **Compliance Status:** **PASS**

---

### 4. `WebSite` (`src/components/seo/schemas/WebSiteSchema.tsx`)

- **Schema Type:** `WebSite`
- **Entity URI (`@id`):** `https://7raysastrovastu.com/#website`
- **Name:** `7Rays Astro Vastu`
- **SearchAction:** Configured with valid query input template pointing to `/blog?q={search_term_string}`
- **Publisher Link:** Points to `@id: https://7raysastrovastu.com/#organization`
- **Compliance Status:** **PASS**

---

### 5. `BreadcrumbList` (`src/components/seo/schemas/BreadcrumbSchema.tsx`)

- **Schema Type:** `BreadcrumbList`
- **Audit Findings:** Previously, if a page passed `{ name: 'Home', url: '/' }` in the items array, the `BreadcrumbSchema` prepended a second `Home` item, producing duplicate breadcrumb entries.
- **Remediation Implemented in Phase 08:** Added sanitization filter to strip any incoming `{ name: 'Home' }` or `{ url: '/' }` before prepending the canonical root `Home` node.
- **Compliance Status:** **PASS** (Duplicate breadcrumb bug resolved)

---

### 6. `Service` (`src/components/seo/schemas/ServiceSchema.tsx`)

- **Schema Type:** `Service`
- **Audit Findings:**
  1. Previously contained a fallback `telephone: siteConfig.contact.phone`, which emitted `"telephone": null` when phone was null.
  2. Previously had a hardcoded `priceRange: '₹₹₹'` default on `Service`, which is an unverified pricing claim and technically belongs to `LocalBusiness`.
- **Remediation Implemented in Phase 08:**
  1. Cleanly omitted `telephone` whenever `siteConfig.contact.phone` is falsy.
  2. Removed arbitrary `₹₹₹` default price range. Pricing is only emitted when an explicit `offers` prop is supplied.
  3. Linked the `provider` attribute directly to the authoritative `@id: https://7raysastrovastu.com/#localbusiness` entity.
- **Compliance Status:** **PASS** (Schema cleansed of null and arbitrary fields)

---

### 7. `Article` / `BlogPosting` (`src/components/seo/schemas/ArticleSchema.tsx`)

- **Schema Type:** `BlogPosting`
- **Author Attribution:** Correctly points to `Rishwa Sinha` (`Person`)
- **Publisher:** Points to `7Rays Astro Vastu` (`Organization`)
- **Dates:** Emits valid ISO-8601 `datePublished` and `dateModified`.
- **Compliance Status:** **PASS**

---

### 8. `FAQPage` (`src/components/seo/schemas/FAQSchema.tsx`)

- **Schema Type:** `FAQPage`
- **Content Matching:** Rendered strictly on pages where identical question and answer accordions are visibly displayed in the viewport (preventing Google Search manual actions for hidden text).
- **Compliance Status:** **PASS**

---

## 2. 9-Point Verification Checklist

| #   | Verification Criterion                             | Status   | Evidence / Notes                                                                    |
| --- | -------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| 1   | Schema matches visible page content                | **PASS** | All FAQs, service descriptions, and company details reflect visible DOM text.       |
| 2   | No fabricated phone / email / hours                | **PASS** | Null fields are omitted from JSON-LD output; consultations marked appointment-only. |
| 3   | No fake ratings or review schema                   | **PASS** | Zero `AggregateRating` or `Review` schema deployed sitewide.                        |
| 4   | No fake branch offices                             | **PASS** | Only the single Dasarahalli HQ is marked as physical location.                      |
| 5   | Physical address used only for actual HQ           | **PASS** | Address strictly `3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024`.          |
| 6   | Service areas not represented as physical branches | **PASS** | Neighborhood pages use `areaServed: AdministrativeArea`, not physical addresses.    |
| 7   | Person/entity relationships consistent             | **PASS** | Linked `@id` references between `#localbusiness`, `#organization`, and `#person`.   |
| 8   | Canonical URLs correct                             | **PASS** | All schema `url` and `mainEntityOfPage` fields use canonical URLs.                  |
| 9   | No duplicate/conflicting schema blocks             | **PASS** | Breadcrumb duplication fixed; schema IDs unified.                                   |
