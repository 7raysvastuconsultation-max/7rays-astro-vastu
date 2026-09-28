# 7Rays Astro Vastu — Cloudflare Deployment Guide

> **STATUS:** DEPLOYMENT-READY SPECIFICATION (LOCAL ONLY — ZERO EXTERNAL ACTIONS PERFORMED)  
> **ARCHITECTURAL TARGET:** Cloudflare Pages Static Deployment with Edge Routing Fallbacks  
> **CANONICAL URL INVENTORY:** Exactly 58 Canonical URLs

---

## 1. Recommended Cloudflare Architecture

The optimal and most reliable architecture for **7Rays Astro Vastu** on Cloudflare is **Cloudflare Pages (Direct Git Integration)**:

- **Frontend Hosting:** Cloudflare Pages Global Anycast CDN serving pre-built static HTML, JavaScript, CSS, and optimized WebP/SVG images.
- **Routing Engine:** Single Page Application (SPA) routing powered by `public/_redirects` (`/*  /index.html  200`) so deep links (e.g., `/vastu/residential`, `/blog/...`) resolve on direct access and refresh.
- **Security & Cache Headers:** Static header policy defined in `public/_headers` serving HTTP Strict Transport Security (HSTS), frame protection, MIME-type sniffing prevention, and immutable asset caching (`Cache-Control: public, max-age=31536000, immutable`).
- **Edge API & Telemetry:** Cloudflare Pages Functions located in `functions/api/` (`/api/health`, `/api/enquiries`, `/api/analytics/event`) providing zero-maintenance, serverless edge handling for inquiries and conversion tracking without requiring a perpetual Node.js server.
- **Local Dev Server:** In local development, `npm run dev:all` or Vite's built-in proxy connects `/api` to the local Express & SQLite engine (`server/index.mjs`).

---

## 2. Prerequisites (Owner Responsibility)

Prior to initiating deployment in the Cloudflare Dashboard, the owner must have:

1. An active **Cloudflare Account** (Free or Pro plan).
2. An active **GitHub Account** containing the private/public `7rays-astro-vastu` repository.
3. Ownership and DNS control of the authoritative production domain (`7raysastrovastu.com`).

---

## 3. Build Command & Output Directory

```bash
BUILD COMMAND:    npm run build
OUTPUT DIRECTORY: dist
NODE VERSION:     20.x or later (Default on Cloudflare Pages v2 build system)
```

The build command executes:

1. `validate-business-truth.mjs` (Enforces verified founder identity, Dasarahalli address, official phone +91 70910 21616).
2. `tsc -b` (Zero TypeScript compilation errors).
3. `vite build` (Rollup chunk-splitting, minification, CSS bundling).
4. `generate-sitemap.mjs` (Generates validated `sitemap.xml` with 58 canonical URLs and production `robots.txt`).

---

## 4. Required Environment Variables

Configure these in the Cloudflare Pages dashboard under:  
**Settings > Environment Variables > Production**

| Variable                        | Recommended Production Value                                                                                                                                      | Description                                        | Client Exposed? |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- | :-------------- |
| `VITE_SITE_URL`                 | `https://7raysastrovastu.com`                                                                                                                                     | Primary HTTPS origin for canonical tags & sitemaps | YES (Public)    |
| `VITE_SITE_NAME`                | `7Rays Astro Vastu`                                                                                                                                               | Brand identity used across schemas and metadata    | YES (Public)    |
| `VITE_SITE_DEFAULT_TITLE`       | `Vastu & Astrology Consultant in Bangalore \| 7Rays Astro Vastu`                                                                                                  | Default fallback title tag                         | YES (Public)    |
| `VITE_SITE_DEFAULT_DESCRIPTION` | `Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha. Non-demolition energy alignment for modern spaces.` | Primary meta description                           | YES (Public)    |
| `VITE_BUSINESS_PHONE`           | `+91 70910 21616`                                                                                                                                                 | Authoritative telephone number for calls & schema  | YES (Public)    |
| `VITE_BUSINESS_DISPLAY_PHONE`   | `+91 70910 21616`                                                                                                                                                 | Formatted phone number displayed in UI             | YES (Public)    |
| `VITE_WHATSAPP_PHONE`           | `917091021616`                                                                                                                                                    | E.164 without plus sign for WhatsApp API deep-link | YES (Public)    |
| `VITE_WHATSAPP_DEFAULT_MESSAGE` | `Hello 7Rays Astro Vastu, I would like to book an Astro-Vastu consultation.`                                                                                      | Default WhatsApp pre-filled lead text              | YES (Public)    |
| `VITE_OFFICE_ADDRESS`           | `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India`                                                     | Physical headquarters business truth               | YES (Public)    |
| `VITE_OFFICE_LATITUDE`          | `13.0645`                                                                                                                                                         | Geographic latitude for LocalBusiness schema       | YES (Public)    |
| `VITE_OFFICE_LONGITUDE`         | `77.5875`                                                                                                                                                         | Geographic longitude for LocalBusiness schema      | YES (Public)    |

---

## 5. Optional Environment Variables

| Variable                          | Optional Production Value            | Purpose                                                      |
| :-------------------------------- | :----------------------------------- | :----------------------------------------------------------- |
| `VITE_GA4_MEASUREMENT_ID`         | `G-XXXXXXXXXX`                       | Google Analytics 4 Measurement ID                            |
| `VITE_GTM_CONTAINER_ID`           | `GTM-XXXXXXX`                        | Google Tag Manager Web Container ID                          |
| `VITE_GSC_VERIFICATION_TOKEN`     | `google-site-verification-...`       | HTML Meta tag verification string for Google Search Console  |
| `VITE_GOOGLE_MAPS_API_KEY`        | `AIzaSy...` (HTTP restricted)        | Google Maps Embed API Key (if dynamic Maps API is preferred) |
| `VITE_CONSULTATION_FORM_ENDPOINT` | Webhook URL (e.g. Zapier, Make, CRM) | External webhook to receive consultation leads               |
| `VITE_CONTACT_FORM_ENDPOINT`      | Webhook URL                          | External webhook to receive general contact queries          |

---

## 6. Cloudflare Project Settings

When creating the Cloudflare Pages project:

1. **Framework Preset:** `Vite`
2. **Build Command:** `npm run build`
3. **Build Output Directory:** `dist`
4. **Root Directory:** `/` (Project root)
5. **Environment Variables:** Set Node.js version if required: `NODE_VERSION` = `20.18.0`.

---

## 7. Custom Domain Setup Instructions

1. In the Cloudflare Pages project, navigate to **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter your apex domain: `7raysastrovastu.com` (or `www.7raysastrovastu.com`).
4. Cloudflare will automatically prompt you to add or verify the CNAME / apex record.
5. If the domain is already managed on Cloudflare DNS, Cloudflare configures the DNS record with one click.
6. Enable **Always Use HTTPS** in Cloudflare **SSL/TLS > Edge Certificates**.
7. Set SSL/TLS encryption mode to **Full (strict)**.

---

## 8. DNS Instructions

If your domain DNS is managed within Cloudflare:

- **Apex domain (`@`):** CNAME flattening pointing to `<project-name>.pages.dev` (or Pages automatic apex setup).
- **Subdomain (`www`):** CNAME pointing to `<project-name>.pages.dev`.
- **Proxy Status:** `Proxied` (Orange Cloud icon enabled) to benefit from Cloudflare CDN caching, DDoS mitigation, and SSL termination.

---

## 9. SPA Routing Instructions

Cloudflare Pages natively respects `_redirects` inside the build output directory (`dist/_redirects`).  
The repository automatically compiles:

```
/*    /index.html   200
```

This guarantees that whenever a user directly navigates to or reloads:

- `/vastu/residential`
- `/locations/bangalore/commercial-vastu`
- `/blog/vastu-remedies-without-demolition-modern-apartments`
- `/admin/analytics`

Cloudflare serves `/index.html` with HTTP status `200`, and React Router v7 routes seamlessly to the exact component. Unmatched paths fall through to `NotFoundPage.tsx` with a `noindex` tag.

---

## 10. Cache Considerations

Defined in `public/_headers` and generated into `dist/_headers`:

1. **Hashed Assets (`/assets/*`):** Cached for 1 year (`max-age=31536000, immutable`). Rollup fingerprints chunk names on code modification (e.g., `index-DP2unV5w.css`), ensuring instant cache invalidation upon redeployment.
2. **Static Images & Icons (`/images/*`, `favicon.svg`):** Cached for 7 days with `stale-while-revalidate=86400`.
3. **HTML Documents (`/index.html`):** `max-age=0, must-revalidate` so visitors immediately receive new deployments.
4. **Sitemap & Robots (`/sitemap.xml`, `/robots.txt`):** Cached for 1 hour (`max-age=3600, must-revalidate`).

---

## 11. Security Headers

Cloudflare Pages applies the following HTTP response headers configured in `public/_headers`:

- `X-Frame-Options: SAMEORIGIN` (prevents clickjacking)
- `X-Content-Type-Options: nosniff` (mitigates MIME type sniffing)
- `Referrer-Policy: strict-origin-when-cross-origin` (protects referrer data)
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` (restricts unwanted device hardware)
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (enforces end-to-end TLS)
- `X-XSS-Protection: 1; mode=block` (legacy XSS filtering)

---

## 12. Deployment Procedure

Once the owner has supplied credentials:

1. Push local code to the GitHub repository:
   ```bash
   git add .
   git commit -m "feat: production hardening for Cloudflare Pages"
   git push origin main
   ```
2. In Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the repository `7rays-astro-vastu`.
4. Configure build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Add production environment variables (from `.env.production.example`).
6. Click **Save and Deploy**.
7. Cloudflare Pages clones the repository, runs `npm run build`, and publishes static assets to edge nodes worldwide in ~60 seconds.

---

## 13. Rollback Procedure

Cloudflare Pages maintains instant, zero-downtime versioned rollbacks:

1. Go to **Workers & Pages** > **7rays-astro-vastu** > **Deployments**.
2. Locate the previous stable deployment.
3. Click the **...** menu next to that deployment and select **Rollback to this deployment**.
4. Cloudflare immediately points edge routing to the prior build artifact within seconds.

---

## 14. Post-Deployment SEO Verification

Immediately after the deployment is live on `https://7raysastrovastu.com`:

1. **Sitemap Resolution:** Visit `https://7raysastrovastu.com/sitemap.xml`. Verify that exactly 58 URLs are present and all use `https://7raysastrovastu.com/` without `localhost` or trailing slash discrepancies.
2. **Robots.txt Resolution:** Visit `https://7raysastrovastu.com/robots.txt`. Verify `Allow: /` and `Sitemap: https://7raysastrovastu.com/sitemap.xml`.
3. **Canonical Tags:** Inspect `https://7raysastrovastu.com` and sample service/blog pages. Verify `<link rel="canonical" href="https://7raysastrovastu.com/..." />`.
4. **Structured Data Validation:** Run the homepage and sample service pages through Schema.org Validator and Google Rich Results Test to confirm `LocalBusiness`, `Organization`, `Person`, and `Service` JSON-LD graphs.
5. **Direct Deep Link Verification:** Hard-refresh `/vastu/residential` and `/contact` to confirm 200 OK status from Cloudflare Pages.

---

## 15. Post-Deployment Google Search Console Setup

1. Open **Google Search Console** (`https://search.google.com/search-console`).
2. Add Property: `https://7raysastrovastu.com/` (URL prefix) or Domain property `7raysastrovastu.com`.
3. If using HTML tag verification, obtain the verification token and add it to `VITE_GSC_VERIFICATION_TOKEN` in Cloudflare Pages environment variables, then trigger a redeploy. Alternatively, verify via Cloudflare DNS TXT record.
4. Navigate to **Sitemaps** > **Add a new sitemap**.
5. Enter: `sitemap.xml` and click **Submit**.
6. Monitor index coverage and ensure all 58 canonical URLs are submitted.

---

## 16. Cloudflare Cache Purge Guidance

When significant content or design updates are deployed:

1. In Cloudflare Dashboard, select the domain `7raysastrovastu.com`.
2. Go to **Caching** > **Configuration**.
3. Choose **Purge Everything** (for site-wide cache refresh) or **Custom Purge** (by URL, e.g. `https://7raysastrovastu.com/sitemap.xml`).
4. Note: Static assets in `/assets/` have content-hashed filenames generated by Vite/Rollup and invalidate automatically without requiring manual cache purges.
