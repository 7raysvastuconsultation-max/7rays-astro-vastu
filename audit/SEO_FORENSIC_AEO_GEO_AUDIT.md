# 7RAYS ASTRO VASTU — AEO, GEO & AI SEARCH READINESS AUDIT
**Document ID**: SEO_FORENSIC_AEO_GEO_AUDIT.md  
**Date of Audit**: October 14, 2026  
**Auditor**: Generative Engine Optimization (GEO) & Answer Search Specialist  
**Surfaces Evaluated**: Google AI Overviews, ChatGPT Search, Perplexity AI, Claude Search, Apple Intelligence  

---

## 1. Executive Summary: AI Search Readiness

As search engine interfaces transition toward generative answer syntheses (Google AI Overviews) and conversational retrieval (ChatGPT Search, Perplexity), websites must structure knowledge for **rapid machine comprehension, verifiable entity extraction, and direct answer quotation**.

The 7Rays Astro Vastu implementation demonstrates **strong conceptual alignment** with AEO/GEO best practices, notably featuring:
- Dedicated **Key Takeaways** summary callout boxes at the top of every Insights article.
- Explicit definition blocks distinguishing traditional Vastu from non-demolition modern adjustments.
- Consistent single-entity attribution to Certified Vastu Consultant Rishwa Sinha.

However, its **pure client-side rendering (CSR) architecture** represents the single biggest bottleneck to AI bot citations, as several generative search engines index raw HTML rather than executing client JavaScript.

---

## 2. AEO & GEO Evaluation Matrix

| AEO / GEO Dimension | Implementation Status | Severity | Forensic Observation |
| :--- | :---: | :---: | :--- |
| **Direct Answer Capability** | **PASS** | P2 | Articles begin with concise direct answers before expanding into detailed methodology. |
| **Information Gain & Data Density** | **PASS WITH LIMITATION**| P1 | Flagship guides offer strong information gain; 5 thin articles (<270 words) lack citation-worthy depth. |
| **Structural Formatting** | **PASS** | P3 | Extensive use of ordered steps, comparative tables, and bulleted diagnostic checklists. |
| **Entity Grounding** | **PASS** | P2 | Clear co-references linking founder Rishwa Sinha, Dasarahalli office, and 5+ years experience. |
| **Scientific Claim Governance** | **PASS** | P3 | Distinguishes architectural facts and magnetic compass degrees from classical astrological interpretations. |
| **AI Bot Crawler Directives** | **PASS** | P3 | `robots.txt` does not disallow GPTBot, ClaudeBot, PerplexityBot, or Google-Extended. |
| **Raw HTML Extractability** | **FAIL** | **P1** | AI bots scraping raw HTTP receive an empty `<div id="root"></div>` without article copy. |
| **Machine-Readable Index (`llms.txt`)**| **OMITTED** | P3 | Optional file not present; does not hinder standard search, but useful for LLM documentation. |

---

## 3. Detailed Forensic Findings

### 3.1 Key Takeaways Callout Boxes (AEO High-Value Feature)
In `src/pages/blog/BlogPostPage.tsx` (lines 402–424), every article renders an illuminated gold callout box containing 4 bulleted key takeaways before the main body:
```tsx
<div className="rounded-2xl border border-[#F6E3B8] bg-[#FFF9EE] p-6 shadow-xs sm:p-7">
  <div className="mb-4 flex items-center gap-3">
    <Lightbulb className="h-5 w-5 text-amber-700" />
    <h3 className="font-serif text-lg font-bold text-amber-950">Key Takeaways</h3>
  </div>
  <ul className="space-y-3">
    {takeaways.map((item, idx) => ( ... ))}
  </ul>
</div>
```
- **Why this works for AI Search**: Generative engines look for concise, bulleted summarization blocks near the top of documents to quote directly in answer snapshots.

### 3.2 Factual Demarcation & Claim Discipline
The content carefully maintains the boundary between traditional belief, observational astrology, and practical physical remedies:
- **Zero Guaranteed Life Outcomes**: No promises of guaranteed wealth, disease cures, or miraculous fortune.
- **Emphasis on Diagnostic Instruments**: Cites digital compasses, Gauss meters, and scaled CAD drawings.
- **Non-Demolition Philosophy**: Explains spatial alignment as elemental and behavioral harmonization rather than supernatural intervention.

### 3.3 The Raw HTML Scraping Bottleneck (Critical GEO Issue)
When an AI bot such as Perplexity or Claude's web fetcher queries an article:
```bash
curl -s https://7raysastrovastu.in/blog/south-facing-house-vastu-myths
```
The response returned by the server contains:
- No article headline.
- No takeaway bullets.
- No text explaining south-facing Vastu myths.
- Only the generic fallback title: `Vastu & Astrology Consultant in Bangalore | 7Rays Astro Vastu`.

Unless the AI bot spends the computational resources to boot a headless browser, execute JavaScript, wait for hydration, and extract the DOM, it will fail to read or cite the article.

---

## 4. Robots.txt AI Bot Permissions Audit

Verified directives in `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*sort=
Disallow: /*?*filter=
```
- **OpenAI Crawlers** (`GPTBot`, `OAI-SearchBot`): **ALLOWED**
- **Anthropic Crawler** (`ClaudeBot`): **ALLOWED**
- **Perplexity Crawler** (`PerplexityBot`): **ALLOWED**
- **Google AI Overviews Crawler** (`Googlebot` / `Google-Extended`): **ALLOWED**

---

## 5. Strategic Recommendations for AEO/GEO Dominance

1. **Deploy Edge Prerendering for Search/AI Bots (P1)**:
   - Use Cloudflare Pages Functions or prerender middleware to serve fully rendered static HTML specifically to known crawler User-Agents (including `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Googlebot`, `bingbot`).
2. **Expand Thin Articles with Structured FAQ / Q&A Blocks (P1)**:
   - Expand the 5 thin articles (toilet remedies, north-facing plan, retail, restaurant, factory) to >800 words with structured definition tables and troubleshooting steps.
3. **Add Optional `/llms.txt` (P3)**:
   - Generate a concise, plaintext `llms.txt` in `public/` detailing brand identity, core services, headquarters address, and links to top canonical guides.
