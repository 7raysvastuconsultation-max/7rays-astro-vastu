# 7RAYS ASTRO VASTU — TECHNICAL SEO & CRAWLABILITY FORENSIC AUDIT
**Document ID**: SEO_FORENSIC_TECHNICAL_AUDIT.md  
**Date of Inspection**: October 14, 2026  
**Auditor**: Search Architecture & Technical SEO Specialist  
**Target Environment**: Production Domain (`https://7raysastrovastu.in/`) & Edge Target (`https://7rays-astro-vastu.pages.dev/`)

---

## 1. Executive Technical Summary

The technical SEO audit evaluates whether the underlying infrastructure, DNS configuration, edge rules, and rendering pipeline enable search engines to discover, render, crawl, and index pages accurately.

### Primary Diagnostic Matrix

| Area | Status | Severity | Forensic Verdict |
| :--- | :---: | :---: | :--- |
| **DNS Resolution & Propagation** | **FAIL** | **P0** | Nameservers migrated to Cloudflare, but local/cached DNS hits Hostinger parked server (`2.57.91.91`). |
| **Hostname Canonicalization (WWW vs Non-WWW)** | **FAIL** | **P1** | `www.7raysastrovastu.in` returns HTTP 200 OK without 301 redirecting to `7raysastrovastu.in`. |
| **HTTP to HTTPS Redirection** | **PASS** | **P3** | `http://` returns HTTP 301 redirecting to `https://`. |
| **Trailing Slash Normalization** | **PASS WITH LIMITATION**| **P2** | Both `/about` and `/about/` return HTTP 200 OK via SPA fallback; consolidated solely via client canonical tag. |
| **Rendering Architecture (CSR / SPA)** | **WARNING** | **P1** | 100% Client-Side Rendered (Vite + React 19). Server returns identical blank HTML shell for all 62 URLs. |
| **Soft-404 Error Handling** | **FAIL** | **P1** | Missing routes return HTTP 200 OK via `/* /index.html 200`. Search engines risk soft-404 classification. |
| **Robots.txt Configuration** | **PASS** | **P3** | Clean syntax, explicitly permits Googlebot, Bingbot, Applebot; points to canonical sitemap. |
| **XML Sitemap** | **PASS** | **P2** | 62 valid canonical URLs in XML format (`public/sitemap.xml`). Content-Type application/xml on Cloudflare edge. |
| **Internal Link Health** | **PASS** | **P2** | 100% internal route links resolve to valid components. Zero broken internal links discovered. |
| **Media & Static Asset Health** | **PASS** | **P3** | Zero broken image references across source code. All referenced images exist in `public/images/`. |

---

## 2. Forensic DNS & Hostname Inspection

### 2.1 Authoritative Nameservers vs Recursive Resolvers
- **Configured Nameservers**: `lisa.ns.cloudflare.com`, `rudy.ns.cloudflare.com`
- **Cloudflare Authoritative IPs**: `104.21.49.75`, `172.67.160.168`
- **Google Public DNS (`8.8.8.8`)**: Resolves to `104.21.49.75` / `172.67.160.168` (Cloudflare).
- **Cloudflare Public DNS (`1.1.1.1`)**: Resolves to `104.21.49.75` / `172.67.160.168` (Cloudflare).
- **Local / Un-propagated Resolvers**: Resolve to `2.57.91.91` (Hostinger Parked Domain).

> [!CAUTION]
> **Active Propagation Hazard**: A request to `https://7raysastrovastu.in/sitemap.xml` routed to `2.57.91.91` returns Hostinger's HTML parked page with `Content-Type: text/html` rather than the valid XML sitemap. Connecting Google Search Console before complete TTL expiration risks Googlebot classifying the domain as a parked website.

### 2.2 WWW vs Non-WWW Hostname Duplication (P1 Finding)
When testing directly against Cloudflare edge IP (`104.21.49.75`):
```http
HEAD / HTTP/2
Host: www.7raysastrovastu.in
< HTTP/2 103 (Early Hints)
< HTTP/2 200 
< server: cloudflare
< cf-ray: a4a370003a6535a4-SIN
```
**Finding**: There is **no** edge redirect from `www.7raysastrovastu.in` to `7raysastrovastu.in`. Both hostnames serve the exact same SPA payload with HTTP 200 OK.
- **Impact**: Google may index both `https://www.7raysastrovastu.in/` and `https://7raysastrovastu.in/`, diluting page authority and link equity.
- **Required Fix**: Configure a Cloudflare Redirect Rule:
  ```
  If incoming request Host equals "www.7raysastrovastu.in"
  Then Dynamic Redirect 301 to concat("https://7raysastrovastu.in", http.request.uri.path)
  ```

---

## 3. Rendering Pipeline & SPA Crawler Risks

### 3.1 Pure Client-Side Rendering Architecture
The site is built with `@vitejs/plugin-react` v8.3.0 and React 19. No Server-Side Rendering (SSR) or Static Site Generation (SSG) is implemented.

When any crawler issues a raw GET request to any URL on the site:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vastu &amp; Astrology Consultant in Bangalore | 7Rays Astro Vastu</title>
    <meta name="description" content="Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha. Non-demolition energy alignment for modern spaces." />
    ...
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 3.2 Crawler Implications
1. **Googlebot**: Googlebot executes modern JavaScript using an evergreen Chromium Web Rendering Service (WRS). However, rendering is asynchronous and queued. In high-demand periods, Google may index the initial raw HTML shell first, causing all URLs to temporarily appear with the homepage title and description in search result snippets.
2. **Second-Tier Search Engines & AI Crawlers**:
   - Bingbot has improved JS rendering but may timeout on large bundles.
   - DuckDuckGo, Yahoo, Baidu, and Yandex often struggle with pure React 19 SPAs.
   - AI Search Agents (ChatGPT Search, Perplexity, Claude, Applebot) scrape raw HTTP HTML. They receive an empty `<div id="root"></div>` and the default homepage meta, severely hindering answer citation and entity recognition.
3. **Social Scrapers**: WhatsApp, Telegram, iMessage, LinkedIn, and Facebook scrapers do **not** execute JavaScript. When sharing an article link like `/blog/south-facing-house-vastu-myths`, social previews display the fallback homepage image and description rather than the specific article title and cover image.

---

## 4. Cloudflare Pages Rules & Soft-404 Vulnerability

### 4.1 Cloudflare `public/_redirects`
The repository contains `public/_redirects` with a single fallback directive:
```
/*    /index.html   200
```
This directive is required for React Router v7 client-side deep linking and page refresh. However:
- Every non-existent path (e.g. `/this-url-does-not-exist-xyz`) returns `HTTP/2 200 OK`.
- Although `src/pages/NotFoundPage.tsx` injects `<meta name="robots" content="noindex, nofollow" />`, the initial HTTP status is `200` rather than `404`.
- Google's documentation explicitly warns against "Soft 404s" (pages returning 200 OK for dead or non-existent content).

---

## 5. Robots.txt & XML Sitemap Audit

### 5.1 Robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*sort=
Disallow: /*?*filter=

# Crawl delay optimization
Crawl-delay: 1

# Explicit bot directives
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# Canonical Sitemap Location
Sitemap: https://7raysastrovastu.in/sitemap.xml
```
- **Syntax**: Valid robots.txt format.
- **Accidental Blocks**: None. All core sections (`/vastu/`, `/locations/`, `/insights/`, `/blog/`, `/astrology/`) are fully crawlable.
- **Bot Exclusions**: Googlebot, Bingbot, and Applebot are explicitly allowed. AI crawlers inherit `Allow: /`.
- **Note on Crawl-delay**: `Crawl-delay: 1` is ignored by Googlebot, but respected by Bingbot. It is acceptable and harmless.

### 5.2 XML Sitemap (`public/sitemap.xml`)
- **Total Registered URLs**: 62
- **Breakdown**:
  - 34 Static & Core Service Pages
  - 4 Locality Detail Pages (`/locations/indiranagar`, `/locations/hsr-layout`, etc.)
  - 18 Insights / Blog Articles (`/blog/*`)
  - 6 Case Study Scenarios (`/case-studies/*`)
- **Validity**: Sitemaps.org 0.9 schema compliant.
- **Lastmod Dates**: Formatted as ISO 8601 (`YYYY-MM-DD`).
- **Defect Identified**: The newly implemented `/shop` route and individual product endpoints are omitted from `sitemap.xml`.

---

## 6. HTTP Response Headers & Security Posture

Verified Cloudflare Edge Headers:
```http
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
content-type: text/html; charset=utf-8
permissions-policy: camera=(), microphone=(), geolocation=()
referrer-policy: strict-origin-when-cross-origin
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
```
- **HSTS**: Enabled with preload directive (`max-age=31536000`).
- **X-Frame-Options**: `SAMEORIGIN` protects against clickjacking without breaking rendering.
- **X-Content-Type-Options**: `nosniff` prevents MIME confusion attacks.
- **Content-Type**: Properly specifies UTF-8.

---

## 7. Technical Recommendations Prior to Indexing

1. **Wait for DNS Full Propagation**: Confirm via multi-region DNS lookup that `7raysastrovastu.in` returns Cloudflare IPs worldwide with zero queries hitting Hostinger `2.57.91.91`.
2. **Implement Cloudflare Redirect Rule for WWW**: Force all traffic on `www.7raysastrovastu.in` to 301 redirect to apex domain.
3. **Consolidate Service and Blog Aliases**: Ensure duplicate path aliases (e.g. `/vastu-services/residential-vastu` and `/vastu/home`) redirect with 301 to primary canonical `/vastu/residential`.
4. **Prerendering / Edge SSR Consideration**: In Phase 2 post-indexing, consider deploying Cloudflare Pages Functions or prerender middleware to serve static HTML to search engine user-agents (Googlebot, Bingbot, ChatGPT-User).
