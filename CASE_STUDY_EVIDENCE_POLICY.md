# 7Rays Astro Vastu — Case Study Evidence Policy

**Phase 10: E-E-A-T & Real-World Authority Engine**
**Document:** CASE_STUDY_EVIDENCE_POLICY.md
**Status:** Active Editorial Policy
**Date:** September 2026

---

## 1. PURPOSE & CORE PRINCIPLE

Google's Search Quality Guidelines strictly penalize deceptive, simulated, or fabricated case studies. In consulting disciplines, presenting a hypothetical or illustrative scenario as a "documented client case study with proven ROI" violates basic trustworthiness and misleads consumers.

**Fundamental Rule**:

> Only genuine client engagements with verifiable records, documented interventions, and explicit client consent may be labeled as "Case Studies". All educational, scenario-based, or hypothetical materials must be titled "Illustrative Vastu Assessment" or "Example Consultation Scenario" and clearly labeled as illustrative.

---

## 2. POLICY REQUIREMENTS FOR GENUINE CASE STUDIES

To publish any engagement as a genuine "Case Study" on 7Rays Astro Vastu, all of the following four criteria must be satisfied:

### Criterion 1: Verified Engagement Record

- A real consultation engagement must have taken place.
- Written records of the intake, on-site assessment measurements, and remedial report must exist in the business archives.

### Criterion 2: Explicit Client Consent

- Written permission (email or signed consent) must be obtained from the client.
- The client must approve the scope of disclosure:
  - Full name vs. pseudonym vs. anonymous archetype (e.g. "Fintech Executive, Bengaluru").
  - Property photography: Permission required for exterior or interior photography; otherwise, generic architectural photography must be labeled as illustrative.

### Criterion 3: Factually Reported Outcomes

- Outcomes must reflect actual client-reported feedback or post-implementation reviews.
- No invented percentage increases (e.g. "revenue increased by 42% in 3 months", "productivity rose by 30%").
- Outcomes should describe procedural deliverables and verified spatial changes (e.g., "metallic strip installation completed without structural demolition; executive desk reoriented to North-East quadrant").

### Criterion 4: Strict Non-Disclosure Compliance

- Highly sensitive corporate, financial, or domestic information must be redacted.
- Exact residential addresses, company names (unless public corporate endorsement consented), and private layout dimensions must be sanitized to protect client privacy.

---

## 3. HANDLING ILLUSTRATIVE & EDUCATIONAL MATERIAL

Where genuine client consent has not yet been documented or where an example is designed to explain methodology:

1. **Naming Standard**: Must be titled **"Illustrative Vastu Assessment"** or **"Example Consultation Scenario"**.
2. **Mandatory Disclaimer Banner**:
   > _"Illustrative Assessment Scenario: This walkthrough illustrates our on-site audit methodology and remedial deliverables. In compliance with our client confidentiality policy, floor plan details are presented as an illustrative educational example."_
3. **No Attributed Clients**: Never invent client initials, executive titles, or fabricated quotes.
4. **Deliverable-Centric Outcomes**: Describe what was delivered (measurements, reports, remedial specifications) rather than invented life or business results.

---

## 4. CURRENT SITE AUDIT & IMPLEMENTED CORRECTIONS

| Site Location                                   | Previous State                                                                                  | Phase 10 Remediated State                                                                                                                                           | Compliance Status  |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `src/data/caseStudies.ts` (Item 1)              | "Commercial Office Vastu Assessment" with unverified testimonial from "R.K., Co-founder & CEO"  | Renamed to **"Illustrative Vastu Assessment — Commercial Office Directional Zone Realignment"**, unverified testimonial removed, outcomes framed as deliverables    | ✅ Fully Compliant |
| `src/data/caseStudies.ts` (Item 2)              | "Residential Vastu Assessment" with unverified testimonial from "P. & A. Sharma"                | Renamed to **"Illustrative Vastu Assessment — Residential Master Bedroom & Geopathic Evaluation"**, unverified testimonial removed, outcomes framed as deliverables | ✅ Fully Compliant |
| `src/pages/caseStudies/CaseStudiesPage.tsx`     | Claimed "Documented Client Transformations" & "Verified Outcomes"                               | Updated to **"Illustrative Consultation Scenarios"**, added educational methodology disclaimer, renamed outcomes to **"Assessment Deliverables & Scope"**           | ✅ Fully Compliant |
| `src/pages/caseStudies/CaseStudyDetailPage.tsx` | Claimed "The Scientific Astro-Vastu Intervention" & "Documented Results & ROI"                  | Updated to **"Consultation Methodology & Remedial Blueprint"** and **"Assessment Deliverables & Scope"**, added illustrative banner                                 | ✅ Fully Compliant |
| `FeaturedProjectsSection.tsx`                   | Linked to 4 broken slug URLs with stock photos claiming completed projects in Mumbai, Goa, etc. | Updated to **"Illustrative Spatial Assessments"**, all cards link to real, verified routes in Bengaluru                                                             | ✅ Fully Compliant |
