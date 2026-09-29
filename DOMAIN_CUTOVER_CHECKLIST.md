# 7Rays Astro Vastu — Domain Cutover & DNS Activation Checklist

**Target Production Domain:** `7raysastrovastu.in` (Apex) & `www.7raysastrovastu.in` (Subdomain)  
**Hosting Infrastructure:** Cloudflare Pages  
**Current Registrar:** Hostinger  
**Execution Date:** 2026-09-29  
**Safety Protocol:** Strictly Manual User Action — No automated DNS changes executed by system

---

## 1. Safety Notice & Prerequisites

> [!IMPORTANT]
> **DO NOT modify or delete live DNS records until you are ready to launch.**  
> The website build, static assets, schemas, and Cloudflare functions are fully prepared and validated locally. Follow the steps below sequentially when performing final domain cutover.

---

## 2. Step-by-Step DNS Cutover Procedure

### Step 1: Create Cloudflare Pages Project

1. Log into your Cloudflare Dashboard: [https://dash.cloudflare.com](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** tab.
3. Select **Connect to Git** (choose your repository `7rays-astro-vastu`) OR choose **Direct Upload** of the `dist/` folder.
4. **Build Settings:**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js Version: `20` or higher
5. Click **Save and Deploy**. Verify the initial deployment succeeds with a `*.pages.dev` preview URL.

---

### Step 2: Add Custom Domain in Cloudflare Pages

1. Inside your Cloudflare Pages project, go to **Custom domains** tab.
2. Click **Set up a domain**.
3. Enter `7raysastrovastu.in` and click **Continue**.
4. Repeat for `www.7raysastrovastu.in`.
5. Cloudflare will display the required DNS records (either Cloudflare Managed Nameservers or CNAME records).

---

### Step 3: Configure DNS on Hostinger (Two Supported Options)

#### Option A: Full Cloudflare Nameserver Delegation (Recommended for Full Edge Speed & Security)

1. Log into your **Hostinger Control Panel (hPanel)**: [https://hpanel.hostinger.com](https://hpanel.hostinger.com).
2. Go to **Domains** > Select `7raysastrovastu.in`.
3. In the left sidebar, click **DNS / Nameservers**.
4. Click **Change Nameservers**.
5. Select **Change Cloudflare Nameservers** and enter the two assigned Cloudflare nameservers (e.g., `eva.ns.cloudflare.com` and `skip.ns.cloudflare.com`).
6. Click **Save**.
   _Propagation typically takes 15 minutes to 4 hours._

#### Option B: CNAME Delegation (Keep Hostinger DNS)

If you prefer to manage DNS records inside Hostinger hPanel:

1. Go to **Domains** > `7raysastrovastu.in` > **DNS / Nameservers**.
2. Locate the `CNAME` records:
   - For `www`: Point `www` to `7rays-astro-vastu.pages.dev`.
   - For apex `@`: If Hostinger supports CNAME flattening or ALIAS/ANAME, point `@` to `7rays-astro-vastu.pages.dev`.
3. Set TTL to `300` (or `Automatic`).

---

### Step 4: SSL/TLS & Edge Rules Configuration in Cloudflare

Once the domain is active in Cloudflare:

1. Go to **SSL/TLS** > **Overview**:
   - Set encryption mode to **Full (strict)**.
2. Go to **SSL/TLS** > **Edge Certificates**:
   - Enable **Always Use HTTPS**: `ON`.
   - Enable **HTTP Strict Transport Security (HSTS)**:
     - Max Age: `1 year (31536000)`
     - Include Subdomains: `ON`
     - Preload: `ON`
   - Minimum TLS Version: `TLS 1.2` or `TLS 1.3`.
   - Enable **Automatic HTTPS Rewrites**: `ON`.

---

### Step 5: Post-Cutover Verification Protocol

Immediately after DNS propagation:

1. **HTTPS & Canonical Resolution:**
   - Test `http://7raysastrovastu.in` → redirects 301 to `https://7raysastrovastu.in`.
   - Test `http://www.7raysastrovastu.in` → redirects 301 to `https://7raysastrovastu.in`.
   - Test `https://www.7raysastrovastu.in` → redirects 301 to `https://7raysastrovastu.in`.
2. **Sitemap & Robots Verification:**
   - Open `https://7raysastrovastu.in/robots.txt` in a browser — verify it returns 200 OK and references `https://7raysastrovastu.in/sitemap.xml`.
   - Open `https://7raysastrovastu.in/sitemap.xml` — verify all 59 canonical URLs are loaded with `https://7raysastrovastu.in`.
3. **Cloudflare Edge Health Check:**
   - Open `https://7raysastrovastu.in/api/health` — verify it returns `{"status":"ok","runtime":"cloudflare-pages-edge"}`.
4. **Google Search Console Submission:**
   - Add property `https://7raysastrovastu.in/` in Google Search Console.
   - Submit sitemap `https://7raysastrovastu.in/sitemap.xml`.
