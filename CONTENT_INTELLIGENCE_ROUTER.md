# 7Rays Astro Vastu — Content Intelligence & Blog Router Engine

## Operational Specification & Automated Routing Protocol

**Entity:** 7Rays Astro Vastu (`https://7raysastrovastu.com`)  
**Operating Standard:** Master SEO Operating System 2026  
**System Role:** Content Intelligence Engine / Anti-Cannibalization Router  
**Trigger Command:** `"Write a blog about [TOPIC]"` or any content creation request

---

### 1. The Core Purpose of the Content Router

The 7Rays blog does **NOT** operate as a simple chronological stream of uncoordinated articles.

Every proposed topic must pass through this **25-Step Content Intelligence Router** to verify:

1. Does an existing canonical URL already own this search intent?
2. Is the query informational (blog/guide), commercial (service page), or local (location page)?
3. What is the cluster, property type, location scope, and funnel stage?
4. How does this piece create authentic **Information Gain** rather than rehashing generic SERP content?
5. What are the exact internal link targets and commercial conversion pathways?

If an existing page already covers the intent, the engine **STOPS** publication of a new URL and mandates an **UPDATE** to the existing canonical asset.

---

### 2. The 25-Step Automated Routing Algorithm

```
                                [USER REQUEST]
                        "Write a blog about [TOPIC]"
                                     │
                                     ▼
                      ┌─────────────────────────────┐
                      │ STEP 1: Parse Core Topic    │
                      └──────────────┬──────────────┘
                                     │
                      ┌──────────────▼──────────────┐
                      │ STEP 2: Identify Intent     │
                      │ (Info / Comm / Local / AEO) │
                      └──────────────┬──────────────┘
                                     │
                      ┌──────────────▼──────────────┐
                      │ STEP 3: Search URL Registry │
                      │ (Scan 58 Active Canonicals) │
                      └──────────────┬──────────────┘
                                     │
                      ┌──────────────▼──────────────┐
                      │ STEP 4: Search Content Base │
                      │ (Scan Existing 15 Articles) │
                      └──────────────┬──────────────┘
                                     │
                      ┌──────────────▼──────────────┐
                      │ STEP 5 & 6: Keyword & Risk  │
                      │ Cannibalization Check (>30%)│
                      └──────────────┬──────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           │                                                   │
  [Overlap Detected]                                  [Novel Clean Intent]
           │                                                   │
           ▼                                                   ▼
┌───────────────────────┐                           ┌─────────────────────┐
│ MANDATE: UPDATE /     │                           │ STEPS 7–23:         │
│ STRENGTHEN EXISTING   │                           │ Formulate Taxonomy, │
│ CANONICAL PAGE        │                           │ Schema, Links, CTA  │
└───────────────────────┘                           └──────────┬──────────┘
                                                               │
                                                               ▼
                                                    ┌─────────────────────┐
                                                    │ STEP 24: Decision   │
                                                    │ Gatekeeper          │
                                                    └──────────┬──────────┘
                                                               │
                                                               ▼
                                                    ┌─────────────────────┐
                                                    │ STEP 25: Execute    │
                                                    │ Content Generation  │
                                                    └─────────────────────┘
```

---

### 3. Step-by-Step Router Execution Guide

#### Step 1: Parse Core Subject Matter

Extract the underlying entity, property type, directional quadrant, or astrological concept.

#### Step 2: Determine Primary Search Intent

- **Informational (TOFU):** _"Is south facing house good as per vastu?"_
- **Investigative / Solution (MOFU):** _"How to fix north east toilet defect without demolition?"_
- **Commercial / Transactional (BOFU):** _"Cost of vastu audit in Bangalore"_ → **Mandates Service/Location Page, NOT Blog**.
- **Local Navigational:** _"Vastu consultant near me in HSR"_ → **Mandates Local Page, NOT Blog**.

#### Step 3: Search `SEO_URL_REGISTRY.md`

Cross-reference the query against all 58 registered URLs.

#### Step 4: Search Existing Blog Inventory

Cross-reference against the 15 active articles in `src/data/blog.ts`.

#### Step 5: Check Keyword Ownership

Identify if any URL has already claimed the exact primary keyword.

#### Step 6: Cannibalization Severity Assessment

- **Overlap > 60%:** Hard stop. Propose immediate content enhancement of the existing canonical page.
- **Overlap 30%–60%:** Differentiate angle strictly (e.g., apartment-specific vs. independent villa).
- **Overlap < 30%:** Approved for novel content creation.

#### Steps 7 to 13: Establish Multi-Dimensional Taxonomy

- **Step 7 (Page Type):** Pillar, Supporting Guide, Checklist, Tool, or FAQ.
- **Step 8 (Cluster):** Home Vastu, Apartment Vastu, Commercial Vastu, Industrial Vastu, Astrology, etc.
- **Step 9 (Subcluster):** Direction Vastu, Room Vastu, Non-Demolition, Dasha Timing.
- **Step 10 (Parent Pillar):** e.g., `/vastu/residential` or `/vastu/commercial`.
- **Step 11 (Property Type):** Residential, Apartment, Villa, Office, Industrial, Plot.
- **Step 12 (Location Scope):** Global, India-wide, Bangalore, or Specific Locality.
- **Step 13 (Funnel Stage):** TOFU (Awareness), MOFU (Consideration), BOFU (Decision).

#### Steps 14 to 23: Technical & Strategic Metadata Formulation

- **Step 14 (Primary Keyword):** Single canonical target phrase.
- **Step 15 (Secondary Keywords):** 3 to 5 semantically related LSI variants.
- **Step 16 (Entity Targets):** Rishwa Sinha, 7Rays Astro Vastu, Vastu Shastra, Pancha Tattva, Parashari Jyotish.
- **Step 17 (Information Gain Requirement):** What unique value is provided that top 10 search results lack? (e.g., 7Rays diagnostic tool findings, 16-zone CAD logic, verified metal strip specifications).
- **Step 18 (AEO Question Structuring):** 40–60 word direct-answer block for answer engine extraction.
- **Step 19 (GEO Fact Formatting):** Structured relational statements easily digested by LLMs.
- **Step 20 (Internal Linking Plan):**
  - Upward to Parent Pillar
  - Lateral to Sibling Guides
  - Downward to Commercial Conversion Target
- **Step 21 (Commercial CTA):** Formulate the logical next step (e.g., _"Book a High-Rise Apartment Vastu Audit"_).
- **Step 22 (Schema Requirements):** `Article`, `BreadcrumbList`, and `FAQPage` (where eligible).
- **Step 23 (Canonical URL Definition):** Clean, date-free slug under `/blog/[slug]`.

#### Step 24: The Decision Gatekeeper

Make one of eight binding determinations:

1. `CREATE NEW ARTICLE` (Novel informational search intent approved)
2. `UPDATE EXISTING ARTICLE` (Query belongs to an existing blog URL)
3. `UPDATE SERVICE PAGE` (Query represents commercial intent owned by a service pillar)
4. `UPDATE LOCATION PAGE` (Query represents local transactional intent)
5. `CREATE NEW SERVICE PAGE` (Novel commercial intent validated with business capacity)
6. `CREATE NEW LOCATION PAGE` (Novel local market validated by physical/service proof)
7. `CREATE INTERACTIVE TOOL` (Query best answered by a calculator, grid, or checklist)
8. `DO NOT CREATE PAGE` (Thin query, zero information gain, or predatory intent)

#### Step 25: Content Generation & Archival

Execute only after Step 24 approval. Output both the internal classification metadata block and the reader-facing article.

---

### 4. Canonical Routing Demonstrations

#### Scenario A: _"Write a blog about south facing house vastu"_

- **Intent:** Informational (TOFU/MOFU)
- **Registry Check:** `/blog/south-facing-house-vastu-myths` already exists!
- **Router Decision:** **`UPDATE EXISTING ARTICLE`**
- **Action:** Expand `/blog/south-facing-house-vastu-myths` with a dedicated section on south entrance pada alignment (Vithatha and Gruhakshat padas) rather than publishing a competing article.

#### Scenario B: _"Write a blog about apartment vastu in Bangalore"_

- **Intent:** Local Informational / Commercial Investigation
- **Registry Check:** `/vastu/apartment-vastu` and `/locations/bangalore/residential-vastu` already exist.
- **Router Decision:** **`UPDATE SERVICE & LOCATION HUBS`**
- **Action:** Enrich `/vastu/apartment-vastu` with Bangalore construction realities (Mivan shear walls) and cross-link to `/locations/bangalore/residential-vastu`. Do NOT create `/blog/apartment-vastu-bangalore`.

#### Scenario C: _"Write a blog about online vastu consultation for NRIs"_

- **Intent:** Commercial / Transactional (BOFU)
- **Registry Check:** No dedicated NRI commercial landing page exists yet.
- **Router Decision:** **`CREATE SERVICE PAGE` (Post-Expansion Approval)**
- **Action:** Recommend creating a dedicated commercial pillar (`/online-vastu-consultation/nri`) rather than wasting high-intent commercial demand on an informational blog post.
