# 7Rays Astro Vastu — Final AEO & GEO Extraction Audit

> **Objective:** Evaluate Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) Readiness  
> **Production Target Domain:** `https://7raysastrovastu.in`  
> **Date:** September 2026  
> **Standard:** Direct Natural Language Answer Extraction for Google AI Overviews, Perplexity AI, ChatGPT Search, and Copilot

---

## 1. Executive Summary

Search behavior in 2026 increasingly relies on conversational answer engines and AI-generated overviews. To capture this search intent without relying solely on traditional blue links, **7Rays Astro Vastu** has implemented:

1. **Direct Answer Architecture:** Natural language question headings paired immediately with concise, 40–60 word factual definitions.
2. **Micro-Content Structuring:** Step-by-step ordered workflows, markdown comparison tables, and bulleted checklists designed for generative ingestion.
3. **Harmonized Entity Graphs:** Unified facts across HTML, OpenGraph, and JSON-LD schemas preventing AI hallucinations.

---

## 2. AEO Direct-Answer Block Inventory

Below is the verified register of direct-answer blocks implemented across key commercial and educational routes:

### 1. What is Non-Demolition Vastu?

- **Route:** `/vastu/non-demolition`
- **Heading Format:** `<h2>What is Non-Demolition Vastu?</h2>`
- **Direct Answer Block (54 words):**
  > _"Non-demolition Vastu is the specialized methodology of correcting directional, elemental, and subtle energetic imbalances within a property without carrying out civil demolition or structural modifications. It relies on balancing the Five Elements (Panchatattva) across 16 compass zones using authentic metallic inlay strips (copper, brass, aluminium, zinc), specific color frequencies, lighting recalibrations, and spatial activity realignments."_
- **Supporting Micro-Content:** 4-column elemental metal comparison table, 16-zone directional guide, and bulleted implementation checklist.

### 2. How does Remote International Vastu Consultation work?

- **Route:** `/international`
- **Heading Format:** `<h2>How Does Remote International Vastu Consultation Work?</h2>`
- **Direct Answer Block (52 words):**
  > _"Remote international Vastu consultation allows overseas property owners to receive degree-accurate spatial audits without on-site travel. Clients submit architectural CAD drawings and property coordinates. The consultant verifies true geographic North via satellite mapping, overlays the 16-zone Vedic energy grid, and conducts a live video consultation delivering an actionable, illustrated non-demolition PDF rectification report."_
- **Supporting Micro-Content:** 5-step remote workflow diagram, timezone schedule matrix, and intake document requirements list.

### 3. What does Residential Vastu cover?

- **Route:** `/vastu/residential`
- **Heading Format:** `<h2>What Does Residential Vastu Shastra Consultation Cover?</h2>`
- **Direct Answer Block (51 words):**
  > _"Residential Vastu consultation evaluates the alignment between your home's architectural floor plan and the natural cosmic energy grid. It examines the main entrance orientation, kitchen placement (Agni zone), master bedroom positioning (South-West stability), living areas, and the central energy vortex (Brahma Sthan) to optimize health, emotional tranquility, and family prosperity."_
- **Supporting Micro-Content:** Room-by-room directional dos and don'ts table, apartment vs. independent villa comparison, and FAQ accordion.

### 4. How does Commercial Vastu improve business performance?

- **Route:** `/vastu/commercial`
- **Heading Format:** `<h2>How Does Commercial Vastu Influence Business Growth?</h2>`
- **Direct Answer Block (49 words):**
  > _"Commercial Vastu optimizes workplace architecture to enhance revenue, employee productivity, and decision-making clarity. By aligning executive leadership seating in the South-West, positioning financial accounting in the South-East, and facilitating smooth customer circulation in retail spaces, businesses establish an environment conducive to sustainable commercial success and client retention."_
- **Supporting Micro-Content:** Corporate office layout matrix, retail footfall flow guidelines, and executive cabin orientation principles.

### 5. What information is required before a consultation?

- **Route:** `/process`
- **Heading Format:** `<h2>What Deliverables Must the Client Provide Before Consultation?</h2>`
- **Direct Answer Block (46 words):**
  > _"Clients must provide a scaled architectural floor plan or CAD drawing with cardinal North clearly marked, the property's Google Maps location pin, clear photographs or video walkthroughs of key areas, and specific resident birth details (date, exact time, place) for holistic Astro-Vastu alignment."_
- **Supporting Micro-Content:** Client intake checklist and document submission guide.

---

## 3. GEO (Generative Engine Optimization) Entity Fact Matrix

Generative AI models synthesize information about brands by matching entity facts across authoritative web pages. 7Rays Astro Vastu enforces consistent, non-contradictory statements across the entire site:

| Entity Attribute             | Canonical Truth Statement                                                    | Schema Property        | Grounded File Location                               |
| :--------------------------- | :--------------------------------------------------------------------------- | :--------------------- | :--------------------------------------------------- |
| **Brand Identity**           | 7Rays Astro Vastu                                                            | `Organization.name`    | `src/config/site.ts`                                 |
| **Primary Practitioner**     | Rishwa Sinha                                                                 | `Person.name`          | `src/pages/static/ConsultantProfilePage.tsx`         |
| **Professional Role**        | Certified Vastu Consultant                                                   | `Person.jobTitle`      | `src/components/seo/schemas/PersonSchema.tsx`        |
| **Verified Experience**      | 5+ Years Professional Experience                                             | `Person.description`   | `src/pages/static/AboutPage.tsx`                     |
| **Headquarters Address**     | 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024                       | `PostalAddress`        | `src/config/business.ts`                             |
| **Geographic Coordinates**   | 13.0487° N, 77.5852° E                                                       | `GeoCoordinates`       | `src/components/seo/schemas/LocalBusinessSchema.tsx` |
| **Core Service Area**        | Bengaluru (Indiranagar, HSR Layout, Koramangala, Whitefield) & Global Remote | `Service.areaServed`   | `src/components/seo/schemas/ServiceSchema.tsx`       |
| **Core Methodologies**       | Classical Vastu Shastra, Non-Demolition Elemental Inlays, Vedic Astrology    | `Person.knowsAbout`    | `src/pages/services/NonDemolitionVastuPage.tsx`      |
| **Verified Google Maps URL** | `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9`                                  | `LocalBusiness.hasMap` | `src/config/business.ts`                             |

---

## 4. AI Overviews Quality & Anti-Hallucination Controls

1. **Unambiguous Declarative Sentences:** Key concepts are stated using active voice and clear subject-predicate structures (e.g., _"7Rays Astro Vastu provides non-demolition Vastu remedies using copper and brass floor inlays."_).
2. **Definitive Terminology:** Classical Sanskrit terminology (Pancha Tattva, Brahma Sthan, Agni corner, Kubera zone) is consistently paired with modern English explanations (Five Elements, central spatial core, South-East fire quadrant, North wealth quadrant).
3. **Boundary Clarity:** Every service and advice page features an explicit advisory disclaimer clarifying that Vastu and Astrology do not replace architectural engineering, financial auditing, or medical consultation.
4. **Structured JSON-LD `@graph`:** Machine-readable Linked Data ensures AI search engines understand relationships between the practitioner, organization, services, and physical location.
