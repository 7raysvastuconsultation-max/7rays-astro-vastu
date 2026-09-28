import { env } from './env'
import { businessConfig } from './business'

export const siteConfig = {
  name: businessConfig.businessName,
  legalName: businessConfig.legalBusinessName,
  shortName: '7Rays',
  tagline: 'Scientific Astro-Vastu & Energy Harmonization for Modern Living',
  url: env.siteUrl,
  ogImage: `${env.siteUrl}/images/og-image.jpg`,
  logoUrl: `${env.siteUrl}/images/7rays-logo.png`,
  founder: {
    name: businessConfig.ownerName,
    role: businessConfig.ownerJobTitle,
    title: businessConfig.ownerJobTitle,
    experience: businessConfig.ownerExperience,
    certification: businessConfig.ownerCertification,
    image: `${env.siteUrl}/images/rishwa-sinha.jpg`,
    credentials: ['Certified Vastu Consultant'],
  },
  contact: {
    email: businessConfig.email,
    phone: businessConfig.phone,
    displayPhone: businessConfig.displayPhone,
    whatsApp: env.whatsAppPhone || null,
    address: {
      streetAddress: businessConfig.address.streetAddress,
      addressLocality: businessConfig.address.locality,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.postalCode,
      addressCountry: 'IN',
      fullAddress: businessConfig.address.fullAddress,
    },
    geo: {
      latitude: businessConfig.latitude,
      longitude: businessConfig.longitude,
    },
    googleMapsUrl: businessConfig.googleMapsUrl,
    googleMapsEmbedUrl: businessConfig.googleMapsEmbedUrl,
    gbpUrl: businessConfig.gbpUrl,
    openingHours: businessConfig.hours,
  },
  social: businessConfig.socialProfiles,
  servicesSummary: [
    'Commercial Vastu Audits',
    'Residential & Apartment Vastu',
    'Industrial & Factory Vastu',
    'Vedic Horoscope & Kundli Consultation',
    'Geopathic Stress & Earth Energy Scanning',
    'Vastu Remedies Without Demolition',
  ],
  serviceAreas: businessConfig.serviceAreas,
} as const
