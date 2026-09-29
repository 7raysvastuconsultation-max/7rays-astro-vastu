# 7Rays Astro Vastu — Domain Connection & Cutover Checklist

> **CRITICAL PRE-CONDITION:**  
> **DO NOT CONNECT THE DOMAIN YET.**  
> **DO NOT CHANGE HOSTINGER NAMESERVERS YET.**  
> **DO NOT ALTER REGISTRAR SETTINGS YET.**  
> The production domain `7raysastrovastu.in` can safely remain registered at **Hostinger** while the web application is served via **Cloudflare Pages**. This document outlines the exact, step-by-step procedure to execute when the business owner is ready to connect the domain.

---

## 1. Architecture Overview

- **Domain Registrar:** Hostinger (`7raysastrovastu.in`)
- **Hosting / Edge Runtime Platform:** Cloudflare Pages
- **Target Canonical Production Domain:** `https://7raysastrovastu.in`
- **Root & WWW Canonicalization:** `www.7raysastrovastu.in` must automatically redirect with a permanent `301` to `https://7raysastrovastu.in` (apex domain).
- **Email System Safety:** Existing MX, SPF, DKIM, and DMARC records on Hostinger **MUST NOT BE DELETED OR OVERWRITTEN** to prevent email interruption for `7raysvastuconsultation@gmail.com` or custom business email addresses.

---

## 2. Pre-Cutover Verification Gate

Before initiating DNS changes in Hostinger, verify that the following local checks pass:
- [x] All 59 canonical URLs in sitemap resolve to `https://7raysastrovastu.in`
- [x] Zero references to `.com` in production assets, schemas, or metadata
- [x] Zero references to `localhost`, `127.0.0.1`, or temporary preview URLs
- [x] `npm run validate:business` passes (Rishwa Sinha, Dasarahalli, Bengaluru)
- [x] `npm run typecheck` passes (0 errors)
- [x] `npm run lint` passes (0 errors)
- [x] `npm run build` succeeds (dist/ folder contains optimized assets, sitemap.xml, robots.txt)

---

## 3. Step-by-Step Domain Connection Procedure

### Step A: Configure Custom Domain in Cloudflare Pages
1. Log in to the Cloudflare Dashboard (`https://dash.cloudflare.com`).
2. Navigate to **Workers & Pages** > Select the **7rays-astro-vastu** project.
3. Click on the **Custom domains** tab.
4. Click **Set up a domain**.
5. Enter `7raysastrovastu.in` and click **Continue**.
6. Cloudflare will display the required DNS records (typically a CNAME record pointing to `<project-name>.pages.dev`).
7. Repeat the process to add `www.7raysastrovastu.in` as an alias.

---

### Step B: Update DNS Records in Hostinger (Without Changing Nameservers)

> **RECOMMENDED METHOD (CNAME Mapping):**  
> Leaving the nameservers pointed to Hostinger allows you to maintain Hostinger's default email, backup, and zone management while pointing the web traffic to Cloudflare Pages.

1. Log in to your **Hostinger Control Panel (hPanel)** (`https://hpanel.hostinger.com`).
2. Go to **Domains** > Select `7raysastrovastu.in` > **DNS / Nameservers**.
3. **PRESERVE EMAIL RECORDS:**
   - Confirm that all records of type `MX`, `TXT` (SPF/DKIM), and mail-related `CNAME` records remain completely untouched.
4. **ADD / UPDATE WEB CNAME RECORDS:**
   - **For Apex Domain (`@`):**
     - Type: `CNAME` (or `ALIAS`/`ANAME` if supported by Hostinger, otherwise use Cloudflare's assigned IP addresses or point nameservers)
     - Name: `@`
     - Target: `7rays-astro-vastu.pages.dev` (or the exact pages.dev domain provided by Cloudflare)
     - TTL: `Auto` or `300` seconds
   - **For Subdomain (`www`):**
     - Type: `CNAME`
     - Name: `www`
     - Target: `7rays-astro-vastu.pages.dev`
     - TTL: `Auto` or `300` seconds

*(Note: If Hostinger does not permit CNAME flattening on the apex `@` record, switch nameservers to Cloudflare: copy existing MX and TXT records into Cloudflare DNS first before changing nameservers).*

---

### Step C: Cloudflare SSL/TLS Configuration
1. In the Cloudflare Dashboard, go to **SSL/TLS** > **Overview**.
2. Set encryption mode to **Full (strict)**.
3. In **SSL/TLS** > **Edge Certificates**:
   - Enable **Always Use HTTPS** (automatically redirects `http://` to `https://`).
   - Enable **Automatic HTTPS Rewrites**.
   - Minimum TLS Version: **TLS 1.2**.
   - Enable **HTTP/2** and **HTTP/3 (with QUIC)**.

---

### Step D: Apex to WWW Redirect Rule
To ensure all visitors and crawlers resolve to the canonical `https://7raysastrovastu.in`:
1. In Cloudflare Dashboard, go to **Rules** > **Page Rules** (or **Redirect Rules**).
2. Create a rule:
   - **Field:** Incoming request URL
   - **Condition:** Match `www.7raysastrovastu.in/*`
   - **Type:** Dynamic Redirect (Status Code: `301 - Permanent Redirect`)
   - **Target URL:** `https://7raysastrovastu.in/$1`

---

## 4. Post-Cutover Verification & Smoke Testing

Once DNS records have propagated (typically 5 to 30 minutes):

### 1. HTTP & HTTPS Status Code Verification
Run the following curl commands in your terminal to verify proper redirects:

```bash
# Test 1: Plain HTTP should 301 redirect to HTTPS
curl -I http://7raysastrovastu.in

# Test 2: WWW should 301 redirect to apex
curl -I https://www.7raysastrovastu.in

# Test 3: Apex HTTPS should return 200 OK
curl -I https://7raysastrovastu.in
```

### 2. Sitemap & Robots.txt Verification
- Browse to `https://7raysastrovastu.in/robots.txt`
  - Verify that `Sitemap: https://7raysastrovastu.in/sitemap.xml` is present.
  - Verify that no indexable paths are blocked.
- Browse to `https://7raysastrovastu.in/sitemap.xml`
  - Verify that all 59 canonical URLs return HTTP 200 with matching `<loc>`.

### 3. Google Search Console & Analytics Setup
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **Domain Property** for `7raysastrovastu.in`.
3. Verify ownership via DNS TXT record in Hostinger/Cloudflare.
4. Submit the sitemap: `https://7raysastrovastu.in/sitemap.xml`.
5. Request indexing for the homepage and core service pillars.
6. Verify Google Analytics 4 (GA4) measurement ID in Cloudflare environment variables:
   - `VITE_GA_ID = G-XXXXXXXXXX`
   - Test real-time event streaming.

### 4. Interactive Form & Lead Generation Test
- Navigate to `https://7raysastrovastu.in/contact`.
- Submit a test inquiry through the contact form.
- Verify that the submission triggers a success state in the UI.
- Verify edge worker execution in the Cloudflare Pages Functions dashboard.
