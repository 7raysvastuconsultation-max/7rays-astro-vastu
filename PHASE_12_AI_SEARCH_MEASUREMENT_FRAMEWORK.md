# 7Rays Astro Vastu — AI Search & Answer Engine Measurement Framework

**Document Date:** September 2026  
**Auditor:** Antigravity AI Engine  
**Website:** `https://7raysastrovastu.com/`  
**Current Baseline Status:** Implementation & Ingestion Framework Ready

> [!IMPORTANT]
> **Data Authenticity Rule:** In strict adherence to Phase 12 guidelines, this framework does **NOT** claim current visibility, citations, or ranking in Google AI Overviews, Perplexity, ChatGPT, Bing Copilot, or Gemini. The framework defines the standardized metrics, telemetry tracking points, and observational logging methods for future live measurement once production deployment and Search Console verification are active.

---

## 1. Multi-Surface Search & AEO Telemetry Grid

When production monitoring begins, track performance across these 11 standardized telemetry dimensions:

| Telemetry Dimension                      | Metric Description                                                                                                         | Primary Measurement Tool / Source                    | Measurement Frequency |             Target Benchmark             |         Current Status          |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- | :-------------------: | :--------------------------------------: | :-----------------------------: |
| **1. Branded Entity Visibility**         | Search volume and rankings for "7Rays Astro Vastu", "Rishwa Sinha Vastu", "7Rays Bangalore".                               | Google Search Console (Queries)                      |        Weekly         |      100% Top 1 Position for Brand       |         Baseline Ready          |
| **2. Non-Branded Organic Visibility**    | Keyword impressions and rankings for service queries ("apartment vastu bangalore", "commercial office vastu").             | GSC Performance Reports                              |       Bi-weekly       |      Top 3–10 for Bangalore queries      |      Ingestion Queue Ready      |
| **3. Question-Query Impressions**        | Clicks and impressions for natural language questions ("can vastu be done without demolition", "best direction to sleep"). | GSC Query Regex: `^(what\|how\|where\|can\|is\|why)` |        Monthly        |     > 20% of total non-brand queries     |      Ingestion Queue Ready      |
| **4. Featured Snippet Ingestion**        | Exact-match featured snippet positions captured in desktop and mobile Google SERPs.                                        | Third-party SERP tracking / Manual Audit             |        Monthly        |        Track snippet appearances         | Unverified (Pending Deployment) |
| **5. People Also Ask (PAA) Presence**    | Frequency of 7Rays canonical URLs appearing as direct answer sources in Google PAA accordions.                             | SERP Position Tracking                               |        Monthly        |           Track PAA citations            | Unverified (Pending Deployment) |
| **6. AI Feature Visibility**             | Mentions or citations in Google AI Overviews, Bing Copilot generative answers, or AI search panels.                        | Manual SERP Observation & AI Search Audits           |        Monthly        | Qualitative tracking of answer accuracy  | Unverified (Pending Deployment) |
| **7. AI Referral Web Traffic**           | Sessions and users referred directly from generative engines (e.g., `chatgpt.com`, `perplexity.ai`, `claude.ai`).          | Web Analytics Referral Reports (HTTP Referrers)      |        Monthly        | Identify high-intent AI referral traffic |   Baseline 0 (Pre-deployment)   |
| **8. Canonical Indexation Health**       | Number of valid indexed URLs without noindex, canonical mismatch, or crawl errors.                                         | GSC Page Indexing Report (`sitemap.xml`)             |        Weekly         |     58 of 58 canonical URLs indexed      |       58 URLs in Sitemap        |
| **9. Total Organic Clicks**              | Real visitor sessions originating from organic search engine results.                                                      | Google Search Console & Web Analytics                |        Monthly        |         Continuous upward trend          |    Baseline (Pre-deployment)    |
| **10. Average Click-Through Rate (CTR)** | Ratio of clicks to impressions across high-intent Bangalore and informational queries.                                     | GSC Search Performance                               |        Monthly        |   Target CTR > 5.0% for local queries    |      Ingestion Queue Ready      |
| **11. Qualified Consultation Inquiries** | Verified contact form submissions, WhatsApp clicks, and phone calls initiated through the site.                            | Custom Event Telemetry (`trackEvent`)                |        Weekly         |  Track lead volume and conversion rate   |    Baseline (Pre-deployment)    |

---

## 2. AI Referral Traffic Detection Regex & Logging SOP

To isolate and analyze traffic originating from conversational and generative search engines, configure web analytics filters with the following referrer matching pattern:

```regex
^(android-app:\/\/com\.google\.android\.googlequicksearchbox|https?:\/\/([a-zA-Z0-9-]+\.)?(openai\.com|chatgpt\.com|perplexity\.ai|anthropic\.com|claude\.ai|copilot\.microsoft\.com|gemini\.google\.com))
```

### Observation & Quality Logging SOP:

1. **Source Evaluation:** Review which canonical URLs are referenced most frequently by AI engines.
2. **Context Integrity Check:** Verify that generative answers citing 7Rays accurately attribute the non-demolition methodology, Rishwa Sinha's verified credentials, and Dasarahalli Bangalore headquarters without hallucinating awards or guarantees.
3. **Information Gain Gap Identification:** If an AI engine misrepresents a traditional principle as an unverified causal claim, refine the direct-answer paragraph on the corresponding canonical page.
