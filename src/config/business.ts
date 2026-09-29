/**
 * 7Rays Astro Vastu — Authoritative Business & Entity Configuration
 * SOURCED FROM AUTHORITATIVE BUSINESS TRUTH:
 * - Brand: 7Rays Astro Vastu
 * - Consultant / Founder: Rishwa Sinha
 * - Professional Identity: Certified Vastu Consultant
 * - Experience: 5+ years
 * - Location: 3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India
 * - Maps: https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9
 *
 * STRICT RULE: Missing or unverified values are stored as null/TODO.
 * NEVER invent phone numbers, email addresses, opening hours, awards, or reviews.
 */

export interface BusinessConfig {
  businessName: string
  legalBusinessName: string
  brandName: string
  ownerName: string
  ownerJobTitle: string
  ownerExperience: string
  ownerCertification: string
  address: {
    fullAddress: string
    streetAddress: string
    sublocality: string
    locality: string
    city: string
    state: string
    country: string
    postalCode: string
    plusCode: string
  }
  phone: string | null
  displayPhone: string | null
  email: string | null
  hours: string[] | null
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  gbpUrl: string
  latitude: number | null
  longitude: number | null
  websiteUrl: string
  logo: string
  socialProfiles: {
    facebook: string | null
    instagram: string | null
    youtube: string | null
    linkedin: string | null
    twitter: string | null
  }
  description: string
  serviceAreas: string[]
  diagnosticTools: string[]
  remedialSupplies: string
  gemstonePolicy: string
  remedyApproach: string
}

export const businessConfig: BusinessConfig = {
  businessName: '7Rays Astro Vastu',
  legalBusinessName: '7Rays Astro Vastu',
  brandName: '7Rays Astro Vastu',
  ownerName: 'Rishwa Sinha',
  ownerJobTitle: 'Certified Vastu Consultant',
  ownerExperience: '5+ years',
  ownerCertification: 'Certified Vastu Consultant',
  address: {
    fullAddress:
      '3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India',
    streetAddress: '3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli',
    sublocality: 'Dasarahalli',
    locality: 'Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    postalCode: '560024',
    plusCode: '3J64+827',
  },
  // Verified official contact number provided by business owner
  phone: (import.meta.env.VITE_BUSINESS_PHONE as string) || '+91 70910 21616',
  displayPhone: (import.meta.env.VITE_BUSINESS_DISPLAY_PHONE as string) || '+91 70910 21616',
  email: (import.meta.env.VITE_BUSINESS_EMAIL as string) || null,
  hours: null, // Stored as null per instruction: do not invent opening hours
  googleMapsUrl: 'https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.605463141446!2d77.6051523!3d13.060766799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19003c0dc7d5%3A0x1ef0f623c7de99c!2s7Rays%20Vastu%20Consultant%20Bangalore!5e0!3m2!1sen!2sin!4v1790265474107!5m2!1sen!2sin',
  gbpUrl: 'https://maps.app.goo.gl/wcoHwGSBggq6n3Fe9',
  latitude: 13.0645,
  longitude: 77.5875,
  websiteUrl: 'https://7raysastrovastu.in',
  logo: 'https://7raysastrovastu.in/images/og-image.svg',
  socialProfiles: {
    facebook: null,
    instagram: null,
    youtube: null,
    linkedin: null,
    twitter: null,
  },
  description:
    'Vastu Shastra and Vedic Astrology consultancy in Bengaluru led by Certified Vastu Consultant Rishwa Sinha. Practical, non-demolition energy alignment for residential, commercial, and industrial spaces.',
  serviceAreas: [
    'Bengaluru',
    'Dasarahalli',
    'Hebbal',
    'Yelahanka',
    'Bhuvaneswari Nagar',
    'Indiranagar',
    'Koramangala',
    'HSR Layout',
    'Whitefield',
    'Electronic City',
    'Jayanagar',
    'Malleshwaram',
    'Karnataka',
    'India',
  ],
  // Verified operational capabilities confirmed by founder Rishwa Sinha:
  diagnosticTools: ['Calibrated digital compass', 'Digital Gauss meter', 'Dowsing rods'],
  remedialSupplies:
    '7Rays supplies authentic metallic inlay materials (brass, copper, zinc, lead) for non-demolition remedies',
  gemstonePolicy:
    'Ethical astrological guidance only based on classical Vedic chart timing; 7Rays does not sell overpriced commercial gemstones',
  remedyApproach:
    'The vast majority of Vastu imbalances are corrected through non-demolition spatial and elemental adjustments',
}
