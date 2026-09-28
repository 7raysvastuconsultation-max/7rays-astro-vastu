# PHASE 16 — NAP CONSISTENCY & INTEGRITY AUDIT

## 7Rays Astro Vastu — Name, Address, Phone & Web Canonicalization Audit

**Domain:** `https://7raysastrovastu.com/`  
**Brand Identity:** 7Rays Astro Vastu  
**Lead Consultant:** Rishwa Sinha (Certified Vastu Consultant, 5+ years experience)  
**Status:** 100% CANONICAL ON CODEBASE (External Audit Ready)

---

## 1. CANONICAL NAP SOURCE OF TRUTH

Every external listing, directory profile, map node, and web citation must conform to the following verified business data:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CANONICAL BUSINESS NAP                          │
├───────────────────┬────────────────────────────────────────────────────┤
│ Business Name     │ 7Rays Astro Vastu                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ Lead Consultant   │ Rishwa Sinha (Certified Vastu Consultant)          │
├───────────────────┼────────────────────────────────────────────────────┤
│ Street Address    │ 3J64+827, Balaji Layout, H A Farm Post,            │
│                   │ Bhuvaneswari Nagar, Dasarahalli                    │
├───────────────────┼────────────────────────────────────────────────────┤
│ Locality / City   │ Bengaluru (Bangalore)                              │
├───────────────────┼────────────────────────────────────────────────────┤
│ State & PIN Code  │ Karnataka 560024                                   │
├───────────────────┼────────────────────────────────────────────────────┤
│ Country           │ India                                              │
├───────────────────┼────────────────────────────────────────────────────┤
│ Primary Phone     │ +91 70910 21616                                    │
├───────────────────┼────────────────────────────────────────────────────┤
│ WhatsApp Link ID  │ 917091021616                                       │
├───────────────────┼────────────────────────────────────────────────────┤
│ Canonical Website │ https://7raysastrovastu.com/                       │
├───────────────────┼────────────────────────────────────────────────────┤
│ Official Maps URL │ https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9          │
└───────────────────┴────────────────────────────────────────────────────┘
```

---

## 2. FORMATTING TOLERANCE VS. ENTITY CONFLICTS

To avoid erroneous flags, the audit distinguishes between **harmless telecommunication/address formatting variations** and **damaging entity conflicts**:

### 2.1 Phone Formatting (Permissible Equivalences)

The following representations resolve to the identical Indian mobile routing terminal and are considered **CONSISTENT**:

- International Spaced (Canonical Display): `+91 70910 21616`
- RFC 3966 Standard (Dialable Link): `tel:+917091021616`
- International Unspaced: `+917091021616`
- WhatsApp API Format: `917091021616`
- National Format with STD Prefix: `070910 21616`

> **Flagged Conflict:** Any phone number containing different digits (e.g. personal unverified mobile numbers, placeholder numbers like `+91 98765 43210`, or landlines from other cities) is classified as an **UNACCEPTABLE CONFLICT**.

### 2.2 Address Formatting (Permissible Equivalences)

Bengaluru urban addresses frequently feature local linguistic variations. The following are **PERMISSIBLE**:

- "Bengaluru" vs. "Bangalore" (Both map to the same Wikidata Q1355 / Google Knowledge Graph node).
- Dasarahalli (North Bengaluru) with or without the postal landmark reference "H A Farm Post".
- Plus Code notation: `3J64+827 Bengaluru` is mathematically equivalent to the street address coordinates (`13.0487° N, 77.5925° E`).

> **Flagged Conflict:** Listing an address in a different postal zone (e.g. claiming an office in Indiranagar, Whitefield, or Koramangala without a physical operational facility) is classified as a **FATAL GEOGRAPHIC CONFLICT** violating Google Business Profile guidelines.

---

## 3. CODEBASE NAP AUDIT ACROSS ALL TOUCHPOINTS

| Touchpoint / Component    | Business Name Recorded | Address Recorded                                       | Phone Recorded                 | Website URL                    | Maps Entity Reference                       | NAP Status     |
| ------------------------- | ---------------------- | ------------------------------------------------------ | ------------------------------ | ------------------------------ | ------------------------------------------- | -------------- |
| `src/config/business.ts`  | `7Rays Astro Vastu`    | 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024 | `+91 70910 21616`              | `https://7raysastrovastu.com`  | `https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9` | **100% MATCH** |
| `src/config/site.ts`      | `7Rays Astro Vastu`    | Dasarahalli, Bengaluru 560024                          | `+91 70910 21616`              | `https://7raysastrovastu.com`  | Verified                                    | **100% MATCH** |
| `LocalBusinessSchema.tsx` | `7Rays Astro Vastu`    | Full streetAddress, locality, postalCode, country      | `+91 70910 21616`              | `https://7raysastrovastu.com/` | `hasMap: businessConfig.googleMapsUrl`      | **100% MATCH** |
| `OrganizationSchema.tsx`  | `7Rays Astro Vastu`    | Bengaluru, Karnataka 560024                            | `+91 70910 21616`              | `https://7raysastrovastu.com/` | Verified                                    | **100% MATCH** |
| `ContactPage.tsx`         | `7Rays Astro Vastu`    | 3J64+827, Balaji Layout, Dasarahalli, Bengaluru 560024 | `+91 70910 21616`              | `https://7raysastrovastu.com/` | Direct Maps Link                            | **100% MATCH** |
| `BangaloreMasterPage.tsx` | `7Rays Astro Vastu`    | Balaji Layout, Dasarahalli (Physical Office)           | `+91 70910 21616`              | `https://7raysastrovastu.com/` | Direct Maps Link                            | **100% MATCH** |
| `Footer.tsx`              | `7Rays Astro Vastu`    | Dasarahalli, Bengaluru 560024                          | `+91 70910 21616`              | Relative `/`                   | Direct Maps Link                            | **100% MATCH** |
| `Header.tsx` (Mobile CTA) | `7Rays Astro Vastu`    | N/A (Header Shell)                                     | `tel:+917091021616` / WhatsApp | Relative `/`                   | N/A                                         | **100% MATCH** |

---

## 4. EXTERNAL AUDIT RECOMMENDATIONS

When creating or claiming profiles on Apple Maps, Bing Places, MapmyIndia, and Justdial:

1. Always copy the business name directly as `7Rays Astro Vastu`. Never append descriptive keyword modifiers such as `"7Rays Astro Vastu - Best Vastu Consultant Bangalore"` (this violates Google and Apple naming policies).
2. Use the exact street address string: `3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024`.
3. Provide `https://7raysastrovastu.com/` with trailing slash as the primary website URL.
4. Set primary category to `Vastu Consultant` (or `Astrologer` as secondary where supported).
