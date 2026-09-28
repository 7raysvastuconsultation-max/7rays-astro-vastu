# 7Rays Astro Vastu — Phase 13A: SEO Change Log Template & Experiment Tracker

**Document Purpose:** Standardized audit log template for recording, isolating, and evaluating on-page SEO, title, content, or architectural modifications against Google Search Console baseline metrics.  
**Lead Consultant:** Rishwa Sinha (Certified Vastu Consultant, 5+ years experience)  
**Date:** September 2026  
**Status:** Pre-GSC Operational Template

---

## 1. Operating Instructions & Rules of Experimentation

To establish scientific correlation between on-page modifications and organic search performance:

1. **Single Variable Rule:** Modify only one primary element per page per test cycle (e.g., change the `<title>` tag, or expand H2 content depth, but **not both** simultaneously).
2. **Minimum 28-Day Observation Window:** Never evaluate or revert a change before 28 full days have elapsed in Google Search Console, as search rankings oscillate during algorithmic re-evaluation.
3. **Mandatory GSC Baseline:** Record the 28-day pre-change Clicks, Impressions, CTR, and Average Position before deploying code changes.
4. **Permanent Logging:** Every change must be logged in this template with an explicit decision recorded at the 28-day follow-up.

---

## 2. Reusable Change Log Entry Schema

When proposing an SEO revision in Phase 13, duplicate and fill out the following template block:

```markdown
### Experiment Log Entry: [EXP-YYYYMMDD-###]

- **Date of Deployment:** YYYY-MM-DD
- **Target Canonical URL:** `https://7raysastrovastu.com/...`
- **Component / File Modified:** `src/pages/...`
- **Category of Change:** Title Tag / Meta Description / Content Depth / H2 Structure / Internal Links / Schema
- **Specific Change Deployed:**
  - _Previous Content:_ `...`
  - _New Content:_ `...`
- **Strategic Reason:** [E.g., Low CTR on Position 2.4, missing non-demolition intent modifier]
- **GSC Evidence & Pre-Change Baseline (28-Day Pre-Window):**
  - _Date Range:_ YYYY-MM-DD to YYYY-MM-DD
  - _Total Clicks:_ `###`
  - _Total Impressions:_ `###`
  - _Average CTR:_ `##.##%`
  - _Average Position:_ `##.#`
- **Expected Outcome:** [E.g., Increase CTR from 4.2% to > 7.0% while keeping position <= 3.0]
- **Scheduled Follow-up Date (Day 28):** YYYY-MM-DD
- **Observed Post-Change Results (28-Day Post-Window):**
  - _Date Range:_ YYYY-MM-DD to YYYY-MM-DD
  - _Total Clicks:_ `###`
  - _Total Impressions:_ `###`
  - _Average CTR:_ `##.##%`
  - _Average Position:_ `##.#`
  - _Delta Clicks / CTR:_ `+/-##%`
- **Final Decision & Next Steps:**
  - [ ] **KEEP:** Experiment successful; retain new modification permanently.
  - [ ] **REVERT:** Performance degraded; restore original baseline content immediately.
  - [ ] **ITERATE:** Inconclusive result; refine copy for an additional 14-day cycle.
```

---

## 3. Historical Pre-GSC Baseline Log (Phase 1–12 Record)

| Log ID             | Date       | Canonical URL                       | Change Summary                                                                           | Rationale & Verification                                                     |           Current Status            |
| ------------------ | ---------- | ----------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | :---------------------------------: |
| `INIT-PHASE12-001` | 2026-09-24 | `/vastu-services/vastu-audit`       | Added AEO direct answer card defining Vastu audit protocols; updated H2.                 | Enables 40–60 word snippet extraction for diagnostic search queries.         | Deployed (Pending GSC Verification) |
| `INIT-PHASE12-002` | 2026-09-24 | `/vastu/office-vastu`               | Added AEO direct answer card for executive Southwest seating and B2B tech offices.       | Addresses Bangalore tech founder queries regarding office layout rules.      | Deployed (Pending GSC Verification) |
| `INIT-PHASE12-003` | 2026-09-24 | `/vastu/industrial`                 | Added AEO direct answer card detailing heavy machinery vibration weighting and dispatch. | Captures manufacturing plant queries in Peenya, Bommasandra, Bidadi.         | Deployed (Pending GSC Verification) |
| `INIT-PHASE12-004` | 2026-09-24 | `/vastu/apartment-vastu`            | Reinforced non-demolition flat remedy answer and expert attribution.                     | Aligns high-rise apartment Vastu answers with Rishwa Sinha methodology.      | Deployed (Pending GSC Verification) |
| `INIT-PHASE12-005` | 2026-09-24 | `/vastu-services/residential-vastu` | Integrated AEO quick-answer card into introductory narrative section.                    | Enhances immediate entity extractability for residential inquiries.          | Deployed (Pending GSC Verification) |
| `INIT-PHASE12-006` | 2026-09-24 | `/vastu-services/commercial-vastu`  | Integrated AEO quick-answer card into introductory narrative section.                    | Enhances immediate entity extractability for commercial workplace inquiries. | Deployed (Pending GSC Verification) |
