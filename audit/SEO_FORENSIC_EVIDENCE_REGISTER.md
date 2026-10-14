# 7RAYS ASTRO VASTU — SEO FORENSIC EVIDENCE REGISTER
**Document ID**: SEO_FORENSIC_EVIDENCE_REGISTER.md  
**Audit Execution Date**: October 14, 2026  
**Auditor**: Senior Technical SEO Auditor & Search Architecture Forensic Specialist  
**Standard**: Reproducible Terminal Proofs, Code Line References & Live Network Responses  

---

## 1. Network & DNS Forensic Proofs

### Proof 1.1: DNS Resolution Split (Cloudflare vs Hostinger)
Command executed:
```bash
dig 7raysastrovastu.in +short
dig @lisa.ns.cloudflare.com 7raysastrovastu.in +short
dig @8.8.8.8 7raysastrovastu.in +short
dig @1.1.1.1 7raysastrovastu.in +short
```
Observed Output:
```
2.57.91.91 (Local / Cached Resolver - Hostinger Parked IP)
---
172.67.160.168
104.21.49.75 (Cloudflare Authoritative Nameserver - Proxied IPs)
---
172.67.160.168
104.21.49.75 (Google Public DNS - Updated to Cloudflare)
---
172.67.160.168
104.21.49.75 (Cloudflare Public DNS - Updated to Cloudflare)
```
**Conclusion**: Confirms that while authoritative nameservers are assigned to Cloudflare, cached recursive resolvers continue to route to Hostinger's parked server (`2.57.91.91`).

---

### Proof 1.2: Hostinger Parked Domain HTML Returned on Cached Resolution
Command executed:
```bash
curl -Iv https://7raysastrovastu.in/sitemap.xml 2>&1 | head -n 25
```
Observed Output:
```
* Connected to 7raysastrovastu.in (2.57.91.91) port 443
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=7raysastrovastu.in
*  issuer: C=US; O=Let's Encrypt; CN=YE2
< HTTP/2 200 
< content-type: text/html; charset=utf-8
< server: hcdn
Payload: <a href="https://www.hostinger.com/business-email?utm_source=parked-domain">...
```
**Conclusion**: Confirms that any crawler hitting `2.57.91.91` receives the Hostinger parked-domain payload instead of the website.

---

### Proof 1.3: Cloudflare Edge Serving Authentic Sitemap
Command executed:
```bash
curl -sI --resolve 7raysastrovastu.in:443:104.21.49.75 https://7raysastrovastu.in/sitemap.xml
```
Observed Output:
```
HTTP/2 200 
date: Wed, 14 Oct 2026 03:18:24 GMT
content-type: application/xml
cache-control: public, max-age=3600, must-revalidate
etag: "fcfc2ea016217b1bc8dbd5635b9ece22"
server: cloudflare
cf-ray: a4a36fc29ef5c61e-SIN
```
**Conclusion**: Confirms that when routed to Cloudflare, `sitemap.xml` returns `HTTP/2 200` with the correct `application/xml` MIME type and Cloudflare caching.

---

### Proof 1.4: WWW Non-Redirect Defect
Command executed:
```bash
curl -sI --resolve www.7raysastrovastu.in:443:104.21.49.75 https://www.7raysastrovastu.in/
```
Observed Output:
```
HTTP/2 103 
link: <https://fonts.googleapis.com>; rel=preconnect

HTTP/2 200 
date: Wed, 14 Oct 2026 03:18:34 GMT
content-type: text/html; charset=utf-8
server: cloudflare
cf-ray: a4a370003a6535a4-SIN
```
**Conclusion**: Confirms that `https://www.7raysastrovastu.in/` serves `HTTP/2 200 OK` rather than redirecting `301` to `https://7raysastrovastu.in/`.

---

### Proof 1.5: HTTP to HTTPS Redirection
Command executed:
```bash
curl -sI --resolve 7raysastrovastu.in:80:104.21.49.75 http://7raysastrovastu.in/
```
Observed Output:
```
HTTP/1.1 301 Moved Permanently
Location: https://7raysastrovastu.in/
Server: cloudflare
```
**Conclusion**: Verified PASS. Plaintext HTTP safely redirects 301 to HTTPS.

---

## 2. Codebase Line-Item References

### Reference 2.1: Cloudflare Pages Fallback Rewrite (Soft-404)
- **File**: `public/_redirects`
- **Line 7**:
  ```
  /*    /index.html   200
  ```
- **Finding**: Every non-existent route is rewritten to `index.html` with a 200 OK status code.

### Reference 2.2: Consultation Form Lead Discard
- **File**: `functions/api/enquiries.ts`
- **Lines 39–52**:
  ```ts
  return new Response(
    JSON.stringify({
      success: true,
      message: 'Enquiry received successfully',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  )
  ```
- **Finding**: The serverless edge function responds with `200 OK` without persisting data or triggering an outbound email/webhook.

### Reference 2.3: Deprecated SearchAction in Schema
- **File**: `src/components/seo/schemas/WebSiteSchema.tsx`
- **Lines 35–39**:
  ```tsx
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  }
  ```
- **Finding**: Advertises a sitelinks search box targeting `/blog?q=...` despite the global search bar being removed.

### Reference 2.4: Missing Soft-404 SEOHead in ServiceDetailPage
- **File**: `src/pages/services/ServiceDetailPage.tsx`
- **Lines 15–24**:
  ```tsx
  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link to="/services" className="mt-4 inline-block text-amber-400 underline">
          Back to all services
        </Link>
      </div>
    )
  }
  ```
- **Finding**: Renders a "Service Not Found" view without `<SEOHead noIndex={true} />`, allowing dead slugs under `/services/*` to inherit indexable metadata.

---

## 3. Blog Content & Word Count Register (Phase 4 / 7 Verification)

| # | Slug | Word Count | Status | Headings Count |
| :-: | :--- | :-: | :---: | :-: |
| 1 | `vastu-for-modern-apartments-in-bangalore` | 891 | **PASS** | 8 |
| 2 | `vastu-remedies-without-demolition-modern-apartments` | 775 | **PASS** | 8 |
| 3 | `vastu-principles-every-homeowner-should-know` | 1035 | **PASS** | 8 |
| 4 | `best-directions-for-home-office` | 879 | **PASS** | 8 |
| 5 | `master-bedroom-vastu-guidelines` | 532 | **PASS** | 5 |
| 6 | `kitchen-vastu-direction-guide` | 377 | **WARNING** | 4 |
| 7 | `bathroom-toilet-vastu-remedies` | 240 | **FAIL (Thin)** | 2 |
| 8 | `north-facing-house-vastu-plan` | 204 | **FAIL (Thin)** | 2 |
| 9 | `south-facing-house-vastu-myths` | 316 | **WARNING** | 4 |
| 10 | `office-layout-executive-cabin-vastu` | 356 | **WARNING** | 5 |
| 11 | `retail-store-and-showroom-vastu` | 261 | **FAIL (Thin)** | 4 |
| 12 | `restaurant-and-hospitality-vastu` | 212 | **FAIL (Thin)** | 3 |
| 13 | `factory-machinery-and-raw-material-vastu` | 221 | **FAIL (Thin)** | 4 |
| 14 | `how-geopathic-stress-causes-insomnia-and-fatigue` | 351 | **WARNING** | 4 |
| 15 | `what-is-vedic-astrology-birth-chart-guide` | 771 | **PASS** | 5 |
| 16 | `career-astrology-professional-path-guidelines` | 341 | **WARNING** | 3 |
| 17 | `astrology-vs-vastu-difference-and-synthesis` | 554 | **PASS** | 5 |
| 18 | `understanding-dasha-cycles-and-transitions` | 368 | **WARNING** | 4 |

---

## 4. Audit Limitations & Unverified Assumptions

1. **Google Search Console**: Not connected. Live indexation, coverage impressions, and crawl error logs could not be queried.
2. **Field Core Web Vitals**: CrUX dataset has insufficient real-user traffic data for `7raysastrovastu.in` due to pre-launch state.
3. **Google Business Profile Admin Access**: Verified public listing and map pins exist, but internal GBP dashboard metrics remain unverified.
4. **Third-Party Backlinks**: Without Moz/Ahrefs/Semrush API integrations, backlink authority is marked as provisional baseline.
