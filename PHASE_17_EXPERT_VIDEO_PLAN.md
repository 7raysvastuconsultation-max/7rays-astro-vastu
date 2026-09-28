# 7Rays Astro Vastu — Phase 17

## Expert Video & Multimedia Authority Plan

**Entity:** 7Rays Astro Vastu  
**Lead Presenter:** Rishwa Sinha (Certified Vastu Consultant, 5+ Years Experience)  
**Location:** Bengaluru, Karnataka, India  
**Status:** Multimedia Strategy Blueprint / Owner Recording Queued  
**Independence:** GSC-Independent / Truth-First Framework

---

### 1. The Strategic Role of Video in E-E-A-T & Multimodal Search

Video is the most direct, unforgeable demonstration of authentic expertise. Video content creates:

1. **Multimodal Search Visibility:** Google increasingly integrates YouTube and hosted video timestamps into Google Search results and AI Overviews.
2. **Personal Entity Proof:** Seeing and hearing Rishwa Sinha directly eliminates any ambiguity regarding practitioner authenticity.
3. **High Engagement & Trust:** Demystifies the consultation experience for prospective clients who may be intimidated by traditional consultation formats.

---

### 2. Video Authenticity & Ethical Governance Rules

1. **Zero Deepfakes / Synthetic Avatars:** All videos must feature the real Rishwa Sinha speaking on camera. AI-generated avatar narrators (e.g., Synthesia/HeyGen) are strictly prohibited.
2. **Zero Outcome Guarantees:** Presenters must never promise wealth, medical cures, relationship fixes, or guaranteed life transformations.
3. **No Fear-Based Marketing:** Never use alarmist language (e.g., _"If your toilet is here, ruin will strike!"_). Every video must focus on rational explanation, structural understanding, and practical solutions.
4. **Client Privacy Protection:** Client homes or corporate offices may only appear on camera with explicit, written Tier 4 client consent. Otherwise, videos are recorded in the 7Rays office or educational studio setting.

---

### 3. Priority Video Production Blueprint (7 Core Videos)

| Video #    | Title & Topic                                                                 | Target Duration | Setting / Props                                                                           | Core Message & Value                                                                                                               | Target Platform & Page Embed                                 |
| :--------- | :---------------------------------------------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **VID-01** | **"What Actually Happens During a Vastu Consultation"**                       | 3–5 min         | 7Rays consultation desk with floor plan, compass, and laptop.                             | Walks through the initial intake, floor plan orientation, zone analysis, and delivery of actionable recommendations without drama. | YouTube, About page, Consultation process section.           |
| **VID-02** | **"Inside an On-Site Vastu Audit: Tools & Methodology"**                      | 4–6 min         | On-site or office setup showing digital compass, Gauss meter, and dowsing rods.           | Demonstrates how instruments are used to detect magnetic declination and electromagnetic fields, demystifying the audit process.   | YouTube, `/vastu/vastu-audit` service page.                  |
| **VID-03** | **"How to Read a 16-Zone Vastu Layout (Beginner's Guide)"**                   | 5–7 min         | Whiteboard or digital screen showing Shakti Chakra radial diagram over an apartment plan. | Educational walkthrough explaining how directional sectors are mapped from the center point (Brahmasthan).                         | YouTube, Educational guides, Blog.                           |
| **VID-04** | **"What to Prepare Before Your Vastu Assessment"**                            | 2–3 min         | Clean desk setting with blueprint and checklist graphic.                                  | Actionable checklist for clients: acquiring builder drawings, noting window orientations, listing family concerns.                 | YouTube, Booking confirmation page, Pre-consultation emails. |
| **VID-05** | **"Non-Demolition Vastu Corrections Explained: Brass, Copper & Zinc Inlays"** | 4–5 min         | Close-up desk setup showing authentic metal strip samples and tile joint mockup.          | Explains the physical craftsmanship, placement logic, and elemental symbolism of non-demolition threshold boundary strips.         | YouTube, `/vastu/non-demolition-vastu` service page.         |
| **VID-06** | **"Top 5 Practical Apartment Vastu Questions in Bengaluru"**                  | 5–6 min         | Casual conversational office interview setup.                                             | Addresses common high-rise constraints: South-facing doors, open kitchen layouts, beam placements, and builder restrictions.       | YouTube, `/vastu/apartment-vastu`, `/locations/bangalore`.   |
| **VID-07** | **"3 Common Mistakes to Avoid in Spatial Planning"**                          | 3–4 min         | Direct-to-camera educational commentary.                                                  | Warns against relying on smartphone compasses, forcing unnecessary wall demolitions, and buying fake commercial "remedies".        | YouTube, Blog, Social educational reels.                     |

---

### 4. Technical Production & Optimization Guidelines

- **Recording Equipment:** Smartphone (4K 30fps) with a clean lapel microphone (e.g., DJI Mic / Rode Wireless GO) and soft ring or key lighting.
- **Hosting Strategy:** Primary hosting on official 7Rays Astro Vastu YouTube channel; embedded seamlessly into relevant website pages using lightweight, privacy-enhanced embeds (`lite-youtube-embed` or native lazy-loaded iframes).
- **Video Schema Integration:** Every embedded video must feature `VideoObject` structured data:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Inside an On-Site Vastu Audit: Tools & Methodology",
    "description": "Certified Vastu Consultant Rishwa Sinha explains the diagnostic instruments and methodology used during an on-site spatial assessment.",
    "thumbnailUrl": "https://7raysastrovastu.com/images/video-thumbnails/audit-methodology.webp",
    "uploadDate": "2026-10-15T09:00:00+05:30",
    "duration": "PT4M45S",
    "embedUrl": "https://www.youtube-nocookie.com/embed/exampleId"
  }
  ```
- **Transcripts:** Every video embedded on a web page must be accompanied by an accurate written summary or full text transcript to ensure accessibility and complete text indexability.
