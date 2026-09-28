# 7Rays Astro Vastu — Environment Variable Governance & Security Audit

> **AUDIT DATE:** 2026-09-27  
> **SCOPE:** Full codebase inspection (`src/`, `server/`, `scripts/`, `.env`, `.env.example`, `.env.production.example`)  
> **FINDING:** **0 SECRET EXPOSURES DETECTED.** All `VITE_*` variables are strictly public configuration tokens.

---

## 1. Environment Variable Architecture & Security Model

In modern frontend tooling (Vite), any variable prefixed with `VITE_` is automatically compiled and statically embedded into the client-side JavaScript bundles (`dist/assets/*.js`).

- **Rule 1:** NEVER place private API keys, database credentials, server private keys, Cloudflare API tokens, or session secrets into `VITE_*` variables.
- **Rule 2:** All variables exposed via `import.meta.env` must be explicitly classified as **PUBLIC**.
- **Rule 3:** Secret variables (if any server-side database or webhook keys are introduced later) must be accessed only in server-side runtimes (Node.js Express / Cloudflare Workers runtime) and never prefixed with `VITE_`.
- **Rule 4:** `.env` and all `.env.*` files containing developer-specific overrides are strictly excluded from version control via `.gitignore`.

---

## 2. Comprehensive Variable Inventory

| Variable Name                     | Classification | Purpose                                                                       | Required in Dev?                       | Required in Prod?                       | Safe for Frontend?                    | Consumed In                                                               |
| :-------------------------------- | :------------- | :---------------------------------------------------------------------------- | :------------------------------------- | :-------------------------------------- | :------------------------------------ | :------------------------------------------------------------------------ |
| `VITE_SITE_URL`                   | **PUBLIC**     | Canonical origin URL for SEO, Open Graph, and sitemaps                        | No (Defaults to `localhost:5173`)      | **YES** (`https://7raysastrovastu.com`) | **YES**                               | `src/config/env.ts`, `src/config/site.ts`, `scripts/generate-sitemap.mjs` |
| `VITE_SITE_NAME`                  | **PUBLIC**     | Brand display name across UI and structured data                              | No (Defaults to `'7Rays Astro Vastu'`) | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/site.ts`                                 |
| `VITE_SITE_DEFAULT_TITLE`         | **PUBLIC**     | Default fallback page title                                                   | No (Safe default provided)             | Recommended                             | **YES**                               | `src/config/env.ts`, `src/components/seo/SEOHead.tsx`                     |
| `VITE_SITE_DEFAULT_DESCRIPTION`   | **PUBLIC**     | Default fallback meta description                                             | No (Safe default provided)             | Recommended                             | **YES**                               | `src/config/env.ts`, `src/components/seo/SEOHead.tsx`                     |
| `VITE_GA4_MEASUREMENT_ID`         | **PUBLIC**     | Google Analytics 4 client measurement ID (e.g. `G-XXXXXXXXXX`)                | No (Empty string disabled)             | Optional                                | **YES** (Public client identifier)    | `src/config/env.ts`, `src/utils/analytics.ts`                             |
| `VITE_GTM_CONTAINER_ID`           | **PUBLIC**     | Google Tag Manager web container ID (e.g. `GTM-XXXXXXX`)                      | No (Empty string disabled)             | Optional                                | **YES** (Public client identifier)    | `src/config/env.ts`, `src/utils/analytics.ts`                             |
| `VITE_GSC_VERIFICATION_TOKEN`     | **PUBLIC**     | Google Search Console verification token for meta tag                         | No (Empty string disabled)             | Optional                                | **YES** (Public HTML meta value)      | `src/config/env.ts`, `src/components/seo/SEOHead.tsx`                     |
| `VITE_GOOGLE_MAPS_API_KEY`        | **PUBLIC**     | Public Maps client API key (HTTP referrer restricted in Google Cloud Console) | No (Embed fallback active)             | Optional                                | **YES** (When HTTP-origin restricted) | `src/config/env.ts`                                                       |
| `VITE_OFFICE_LATITUDE`            | **PUBLIC**     | Geographic latitude coordinate for Dasarahalli HQ                             | No (Defaults to `13.0645`)             | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`                             |
| `VITE_OFFICE_LONGITUDE`           | **PUBLIC**     | Geographic longitude coordinate for Dasarahalli HQ                            | No (Defaults to `77.5875`)             | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`                             |
| `VITE_OFFICE_ADDRESS`             | **PUBLIC**     | Authoritative physical address string                                         | No (Defaults to Dasarahalli HQ)        | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`                             |
| `VITE_BUSINESS_PHONE`             | **PUBLIC**     | Official business phone number (`+91 70910 21616`)                            | No (Defaults to business truth)        | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`, `src/config/site.ts`       |
| `VITE_BUSINESS_DISPLAY_PHONE`     | **PUBLIC**     | Formatted display phone number (`+91 70910 21616`)                            | No (Defaults to business truth)        | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`, `src/config/site.ts`       |
| `VITE_WHATSAPP_PHONE`             | **PUBLIC**     | E.164 numerical phone for WhatsApp link (`917091021616`)                      | No (Defaults to business truth)        | Recommended                             | **YES**                               | `src/config/env.ts`, `src/config/business.ts`, `src/config/site.ts`       |
| `VITE_WHATSAPP_DEFAULT_MESSAGE`   | **PUBLIC**     | Pre-filled inquiry text for WhatsApp link                                     | No (Default prompt provided)           | Recommended                             | **YES**                               | `src/config/env.ts`, `src/components/common/Header.tsx`, `Footer.tsx`     |
| `VITE_CONSULTATION_FORM_ENDPOINT` | **PUBLIC**     | Webhook / API URL for consultation form dispatch                              | No (Defaults to empty string)          | Optional                                | **YES** (Public endpoint URL)         | `src/config/env.ts`, `src/utils/analytics.ts`                             |
| `VITE_CONTACT_FORM_ENDPOINT`      | **PUBLIC**     | Webhook / API URL for contact form dispatch                                   | No (Defaults to empty string)          | Optional                                | **YES** (Public endpoint URL)         | `src/config/env.ts`, `src/utils/analytics.ts`                             |

---

## 3. Critical Findings & Verification

1. **Zero Secret Exposure:** No passwords, database credentials, Cloudflare API tokens, private signing keys, or personal access tokens are stored in `.env`, `.env.example`, or `.env.production.example`.
2. **Git Protection:** `.gitignore` actively ignores `.env` and `.env.*` (while explicitly allowing `.env.example` and `.env.production.example`).
3. **Localhost Isolation:** `scripts/generate-sitemap.mjs` explicitly strips `localhost` and `127.0.0.1` and falls back to `https://7raysastrovastu.com`, preventing accidental local URLs from leaking into production XML sitemaps.
4. **Build Safety:** The application builds with 100% functionality even when zero environment variables are provided, thanks to comprehensive fallback defaults in `src/config/env.ts` and `src/config/business.ts`.
