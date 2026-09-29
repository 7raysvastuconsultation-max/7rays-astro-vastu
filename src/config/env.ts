/**
 * Type-safe environment configuration for 7Rays Astro Vastu
 * Validates and exposes environment variables without leaking secrets
 */

export const env = {
  // Site & Domain
  siteUrl: (import.meta.env.VITE_SITE_URL as string) || 'https://7raysastrovastu.in',
  siteName: (import.meta.env.VITE_SITE_NAME as string) || '7Rays Astro Vastu',
  defaultTitle:
    (import.meta.env.VITE_SITE_DEFAULT_TITLE as string) ||
    '7Rays Astro Vastu | Vastu & Astrology Consultation in Bangalore',
  defaultDescription:
    (import.meta.env.VITE_SITE_DEFAULT_DESCRIPTION as string) ||
    'Vastu Shastra and Vedic Astrology consultations in Bengaluru led by Certified Vastu Consultant Rishwa Sinha. Non-demolition energy alignment for modern spaces.',

  // Analytics & Tracking
  ga4MeasurementId: (import.meta.env.VITE_GA4_MEASUREMENT_ID as string) || '',
  gtmContainerId: (import.meta.env.VITE_GTM_CONTAINER_ID as string) || '',

  // Search Engine Verification
  gscVerificationToken: (import.meta.env.VITE_GSC_VERIFICATION_TOKEN as string) || '',

  // Google Maps & Physical Office Coordinates (Authoritative: Dasarahalli, Bengaluru 560024)
  googleMapsApiKey: (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '',
  officeLatitude: Number(import.meta.env.VITE_OFFICE_LATITUDE) || 13.0645,
  officeLongitude: Number(import.meta.env.VITE_OFFICE_LONGITUDE) || 77.5875,
  officeAddress:
    (import.meta.env.VITE_OFFICE_ADDRESS as string) ||
    '3J64+827, Balaji Layout, H A Farm Post, Bhuvaneswari Nagar, Dasarahalli, Bengaluru, Karnataka 560024, India',

  // Contact Channels (Verified official owner phone: 070910 21616)
  whatsAppPhone: (import.meta.env.VITE_WHATSAPP_PHONE as string) || '917091021616',
  whatsAppDefaultMessage:
    (import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE as string) ||
    'Hello 7Rays Astro Vastu, I would like to book a Vastu consultation.',

  // API Endpoints
  consultationFormEndpoint: (import.meta.env.VITE_CONSULTATION_FORM_ENDPOINT as string) || '',
  contactFormEndpoint: (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string) || '',

  // Environment mode
  isProd: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
} as const
