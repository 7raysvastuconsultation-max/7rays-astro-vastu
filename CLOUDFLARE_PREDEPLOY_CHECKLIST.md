# 7Rays Astro Vastu — Cloudflare Pre-Deployment Checklist

This checklist tracks every prerequisite, configuration step, and operational verification required before and immediately following live production deployment.

---

### Phase A: Owner Account & Resource Provisioning

- [ ] Cloudflare account supplied by owner
- [ ] Cloudflare Pages project created by owner (`7rays-astro-vastu`)
- [ ] GitHub repository created by owner (`7rays-astro-vastu`)
- [ ] GitHub repository connected to Cloudflare Pages by owner

---

### Phase B: Build & Environment Governance

- [ ] Build command verified: `npm run build`
- [ ] Output directory verified: `dist`
- [ ] Production environment variables configured in Cloudflare Pages Dashboard:
  - [ ] `VITE_SITE_URL` = `https://7raysastrovastu.com`
  - [ ] `VITE_SITE_NAME` = `7Rays Astro Vastu`
  - [ ] `VITE_SITE_DEFAULT_TITLE` = `Vastu & Astrology Consultant in Bangalore | 7Rays Astro Vastu`
  - [ ] `VITE_BUSINESS_PHONE` = `+91 70910 21616`
  - [ ] `VITE_WHATSAPP_PHONE` = `917091021616`
  - [ ] `VITE_OFFICE_ADDRESS` = `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India`
  - [ ] Optional: `VITE_GA4_MEASUREMENT_ID`
  - [ ] Optional: `VITE_GTM_CONTAINER_ID`
  - [ ] Optional: `VITE_GSC_VERIFICATION_TOKEN`

---

### Phase C: Domain, DNS & SSL Activation

- [ ] Custom domain configured by owner (`7raysastrovastu.com` / `www.7raysastrovastu.com`)
- [ ] DNS records configured by owner (Cloudflare CNAME / apex proxied)
- [ ] SSL active (Full Strict encryption mode & Always Use HTTPS enabled)
- [ ] HTTP-to-HTTPS automatic 301 redirection confirmed

---

### Phase D: Post-Deployment Technical Verification

- [ ] Production URL tested (HTTP 200 on apex and subpaths)
- [ ] Direct URL refresh tested on client routes (`/vastu/residential`, `/blog/...`)
- [ ] SPA routing fallback verified (`dist/_redirects` active)
- [ ] Security headers verified (`dist/_headers` active: HSTS, X-Frame-Options, nosniff)
- [ ] Sitemap tested: `https://7raysastrovastu.com/sitemap.xml` (Exactly 58 canonical URLs)
- [ ] Robots tested: `https://7raysastrovastu.com/robots.txt` (Permits crawling, specifies sitemap)
- [ ] Canonicals tested across home, service, location, and blog routes
- [ ] Structured data tested via Schema.org & Rich Results Validator (LocalBusiness, Organization, Person)
- [ ] Mobile responsive layout tested (320px, 375px, 390px, 414px, 768px, 1024px)
- [ ] Forms tested (Consultation modal and Contact page submit without crash)
- [ ] WhatsApp links tested (Directs to `https://wa.me/917091021616` with consultation prompt)
- [ ] Phone call links tested (`tel:+917091021616`)
- [ ] Google Maps embed tested (Dasarahalli location rendered with lazy loading)

---

### Phase E: Search Console & Webmaster Indexation

- [ ] Google Search Console (GSC) connected by owner
- [ ] GSC domain or URL-prefix verification completed
- [ ] Production sitemap submitted by owner (`https://7raysastrovastu.com/sitemap.xml`)
- [ ] Bing Webmaster Tools connected and sitemap submitted (optional/recommended)
