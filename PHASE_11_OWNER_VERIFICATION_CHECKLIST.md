# 7Rays Astro Vastu — Owner Verification Checklist

## Phase 11 Unverified Items Requiring First-Hand Confirmation

**Checklist Date:** September 2026  
**Subject:** Rishwa Sinha, Founder & Principal Consultant  
**Policy Standard:** Absolute adherence to Truth in Advertising, E-E-A-T, and Source-of-Truth rules.

> [!NOTE]
> In Phase 11, any potential statement, process nuance, or factual claim that cannot be verified 100% from `src/config/business.ts` has been excluded from production content and queued here for Rishwa Sinha's formal confirmation.

---

## Master Verification Checklist

|   #   | Topic / Potential Claim            | Proposed Content Context  | Verification Question for Rishwa Sinha                                                                                                                    |         Status          | Safe Interim Stance in Production                                                                              |
| :---: | :--------------------------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------: | :------------------------------------------------------------------------------------------------------------- |
| **1** | **Specific Certification Body**    | About page, Author schema | What is the exact official name of the institute/academy from which your Vastu Certification was awarded?                                                 | **Pending Owner Input** | Stated strictly as "Certified Vastu Consultant" without inventing an issuing institute.                        |
| **2** | **Instrument Brand / Models**      | Process page, Blog posts  | Are there specific brand models of digital compasses (e.g., Brunton, Suunto) or digital Gauss meters (e.g., Trifield, Cornet) used during on-site audits? | **Pending Owner Input** | Described generically as "calibrated digital compass" and "digital Gauss meter".                               |
| **3** | **Standard Consultation Timeline** | Process page, FAQ         | What is the typical turnaround time between the on-site visit and delivery of the CAD remedial report (e.g., 3–5 business days)?                          | **Pending Owner Input** | Stated as "delivered in structured phases following the assessment" without committing to specific day counts. |
| **4** | **Remedial Material Sourcing**     | Non-demolition guides     | Does 7Rays provide the physical brass/copper strips directly to clients, or are clients given exact dimensional specifications to purchase independently? | **Pending Owner Input** | Framed as "detailed dimensional and material specifications provided in the remedial blueprint".               |
| **5** | **Astrology Lineage / Tradition**  | Astrology service pages   | Do you practice strictly classical Parashari Jyotish, or do you also incorporate Jaimini Sutras or KP (Krishnamurti Padhdhati) systems?                   | **Pending Owner Input** | Described strictly as "classical Vedic astrology (Jyotisha) principles".                                       |
| **6** | **Genuine Client Testimonials**    | Case studies, Homepage    | Are there specific clients who have signed written consent to publish their project reviews, first names, and non-confidential photos?                    | **Pending Owner Input** | Zero testimonials published; case studies remain strictly labeled as illustrative scenarios.                   |
| **7** | **Remote CAD Software Used**       | Remote consultation FAQ   | Do you utilize AutoCAD, Revit, or standard PDF architectural markups for remote directional zone overlays?                                                | **Pending Owner Input** | Described broadly as "digital 16-zone CAD floor plan mapping".                                                 |
| **8** | **Bangalore BBMP/BDA Nuances**     | Bangalore local hub       | Are there recurring Bangalore-specific municipal setbacks or rainwater harvesting configurations you regularly evaluate during plot audits?               | **Pending Owner Input** | No specific legal/bylaw assertions made; focus remains on spatial geometry and directional orientation.        |

---

## Instructions for Updating the Codebase

Once Rishwa Sinha provides written confirmation on any item above:

1. Update `src/config/business.ts` first.
2. Run `npm run validate:business` to ensure schema alignment.
3. Update the corresponding pages and structured JSON-LD schemas.
4. Mark the checklist item as **VERIFIED & INCORPORATED** with the verification date.
