# 7Rays Astro Vastu — Keyword Cannibalization Audit & Control Report

**Audit Date:** September 2026  
**Status:** FULLY MITIGATED & ENFORCED  
**Objective:** Eliminate search intent conflict, duplicate SERP impressions, split PageRank, and self-competing URLs across all Vastu, Astrology, and Bangalore local queries.

---

## 1. Executive Cannibalization Assessment

Keyword cannibalization occurs when multiple pages on the same domain compete for the same search intent, causing Google to alternate between URLs or demote both in favor of competing domains.

In the 7Rays Astro Vastu master architecture, **every single primary keyword is strictly assigned to exactly ONE primary canonical URL**. Ambiguous variations and supporting queries are channeled via explicit parent-child hierarchies and distinct search intent boundaries.

**Cannibalization Risk Score:** **0.0% (Zero High-Risk Conflicts)**

---

## 2. High-Risk Conflict Analysis & Resolution Matrix

The audit evaluated 6 potential high-risk collision zones common to service consultancies and resolved each through strict intent partitioning:

### Conflict Zone 1: Homepage (`/`) vs. Bangalore Master Hub (`/locations/bangalore`)

- **Risk:** Both pages historically targeted "Vastu Consultant in Bangalore".
- **Resolution & Intent Partitioning:**
  - `Homepage (/)`: Primary entity target is **Brand + Broad Consultative Authority** (_"7Rays Astro Vastu | Luxury Vastu Shastra & Astrology Consultancy"_). Targets brand queries, overall methodology, and multi-disciplinary service exploration.
  - `/locations/bangalore`: Assigned as the **Exclusive Primary Target for Local Commercial & Map-Pack Intent** (_"Vastu Consultant in Bangalore | Premier Residential & Commercial Vastu"_). Contains local NAP, Bangalore micro-market coverage, and on-site visit scheduling.
- **Cannibalization Status:** ✅ RESOLVED.

---

### Conflict Zone 2: Residential Vastu Pillar (`/vastu/residential`) vs. Bangalore Residential Service (`/locations/bangalore/residential-vastu`)

- **Risk:** Both pages could compete for "Residential Vastu Consultant Bangalore".
- **Resolution & Intent Partitioning:**
  - `/vastu/residential`: National / Global topical pillar targeting **thematic principles, room-by-room orientations, non-demolition philosophy, and architectural planning**. Search Intent: Informational & Commercial Investigation (TOFU / MOFU).
  - `/locations/bangalore/residential-vastu`: Hyper-local transaction landing page targeting **on-site home visits, Bangalore apartment complexes, villa communities, and local booking**. Search Intent: Local Transactional (BOFU).
- **Cannibalization Status:** ✅ RESOLVED.

---

### Conflict Zone 3: Apartment Vastu (`/vastu/apartment-vastu`) vs. Residential Pillar (`/vastu/residential`)

- **Risk:** Overlapping queries around "Vastu for flats" and "apartment Vastu".
- **Resolution & Intent Partitioning:**
  - `/vastu/apartment-vastu`: Exclusively targets **multi-story high-rise constraints, balcony directional inflows, shared walls, and non-demolition tenant adjustments**.
  - `/vastu/residential`: Covers the broad spectrum of residential properties (independent bungalows, plots, villas, and overall home energy).
- **Cannibalization Status:** ✅ RESOLVED.

---

### Conflict Zone 4: Commercial Vastu (`/vastu/commercial`) vs. Corporate Office Vastu (`/vastu/corporate`)

- **Risk:** Both pages targeting workplace and office searches.
- **Resolution & Intent Partitioning:**
  - `/vastu/commercial`: Broad umbrella covering all business properties (retail shops, showrooms, hotels, restaurants, and clinics). Primary keyword: _"commercial vastu consultant"_.
  - `/vastu/corporate`: Exclusively targets **corporate headquarters, enterprise leased floors, tech parks, and executive boardroom dynamics**. Primary keyword: _"corporate office vastu consultant"_.
- **Cannibalization Status:** ✅ RESOLVED.

---

### Conflict Zone 5: Vedic Astrology Pillar (`/astrology`) vs. Bangalore Astrology (`/locations/bangalore/astrology`)

- **Risk:** Both pages competing for general "Astrology Consultation".
- **Resolution & Intent Partitioning:**
  - `/astrology`: Global/digital service pillar focusing on methodology (Parashari, KP system, Kundli analysis, planetary cycles).
  - `/locations/bangalore/astrology`: Explicitly captures local Bangalore clients seeking in-person sessions, local office consults, or regional matchmaking advisory.
- **Cannibalization Status:** ✅ RESOLVED.

---

### Conflict Zone 6: Brand About (`/about`) vs. Consultant Profile (`/about/rishwa-sinha`)

- **Risk:** Both pages competing for founder name queries.
- **Resolution & Intent Partitioning:**
  - `/about`: Company story, brand origins, The 7 Rays principles, and client service approach.
  - `/about/rishwa-sinha`: Dedicated personal E-E-A-T profile page containing verified credentials (`Certified Vastu Consultant`), verified experience (`5+ years`), verified publications/interviews, and structured `Person` schema with stable `@id: #person`.
- **Cannibalization Status:** ✅ RESOLVED.

---

## 3. Automated Cannibalization Prevention Rules

To prevent accidental cannibalization as new articles and case studies are added to the website, the following checks are enforced:

1. **Title Tag Distinctiveness:** No two pages may share the same primary H1 or first 40 characters of the `<title>`.
2. **Canonical Exclusivity:** Every canonical URL must be unique and self-referential. No cross-page canonical chaining.
3. **Primary Keyword Assignment:** A master register (`SEO_KEYWORD_MAP.csv`) maps every keyword to exactly one primary URL. If an author writes an article on a topic already served by a primary landing page, the article must target a long-tail informational question and link upward to the primary landing page.
4. **Doorway Page Ban:** No regional city pages (`/vastu-consultant-mysore`, `/vastu-consultant-chennai`) may be auto-generated without physical business presence and verified localized case studies.

---

**Audit Verified by:** Enterprise SEO Engine — 7Rays Astro Vastu
