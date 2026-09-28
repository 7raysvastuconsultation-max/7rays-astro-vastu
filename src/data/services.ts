import type { ServiceItem } from '@/types/content'

export const servicesData: ServiceItem[] = [
  {
    id: 'commercial-vastu',
    slug: 'commercial-vastu-consultation',
    title: 'Commercial & Office Vastu Consultation',
    shortDescription:
      'Optimize office layouts, cash flow directions, leadership cabins, and team productivity using non-demolition Astro-Vastu techniques.',
    fullDescription:
      'Our Commercial Vastu audit provides in-depth energetic and directional analysis for corporate offices, retail showrooms, co-working spaces, and tech startups in Bangalore. We harmonize the 16 Vastu zones with the founder horoscope to remove obstacles in revenue generation and employee retention.',
    category: 'vastu',
    iconName: 'Building2',
    benefits: [
      'Removal of financial stagnation & improved liquidity',
      'Strategic executive cabin placement for decisive leadership',
      'Enhanced team harmony and reduced staff turnover',
      'Zero demolition solutions using color frequencies, metals, and earth energies',
    ],
    processSteps: [
      {
        title: 'Floor Plan & Directional Grid Analysis',
        description: 'Accurate compass degree mapping with 16 Vastu directional zones.',
      },
      {
        title: 'Founder Horoscope Synergy',
        description: 'Aligning business owner natal charts with directional energies.',
      },
      {
        title: 'On-site Energy Scanning',
        description: 'Detecting geopathic stress lines and EMF radiation hotspots.',
      },
      {
        title: 'Remedies & Written Report',
        description:
          'A written action report recommending elemental metallic inlay materials, directional spatial adjustments, and seating realignments.',
      },
    ],
    faqs: [
      {
        question: 'Do commercial Vastu remedies require breaking walls or demolition?',
        answer:
          'No. At 7Rays Astro Vastu, the vast majority of imbalances are addressed through non-demolition elemental remedies — including authentic metallic inlay materials (brass, copper, zinc) and directional spatial adjustments, without requiring structural changes.',
      },
      {
        question: 'Can you consult on leased or rented corporate spaces?',
        answer:
          'Yes, our non-demolition methods are specifically tailored for leased and shared commercial premises.',
      },
    ],
    targetAudience: [
      'Tech Companies',
      'Retail Chains',
      'Hospitals & Clinics',
      'Manufacturing Units',
    ],
    deliverables: [
      '16-Zone CAD Energy Audit Map',
      'Written Action Report',
      'Natal Astro-Vastu Synergy Chart',
      '30-Day Follow-up Review',
    ],
  },
  {
    id: 'residential-vastu',
    slug: 'residential-apartment-vastu',
    title: 'Residential & Flat Vastu Consultation',
    shortDescription:
      'Scientific Vastu analysis for apartments, villas, and independent homes across Bangalore to bring peace, health, and family prosperity.',
    fullDescription:
      'Whether buying a new flat or experiencing recurring challenges in an existing home, our residential Vastu service evaluates main entrance energy (pada evaluation), kitchen placement, master bedroom tranquility, and children study orientations.',
    category: 'vastu',
    iconName: 'Home',
    benefits: [
      'Sound sleep and psychological calmness',
      'Support for restful domestic environments and well-being',
      'Enhanced focus and academic performance for children',
      'Harmonious marital and family relationships',
    ],
    processSteps: [
      {
        title: 'Layout Inspection',
        description: 'Verification of 32 entrance padas and room placements.',
      },
      {
        title: 'Energy Mapping',
        description: 'Checking earth vibration levels and cosmic energy flow.',
      },
      {
        title: 'Remedial Balancing',
        description:
          'Applying elemental metallic inlay materials and directional spatial adjustments based on the assessment findings.',
      },
    ],
    faqs: [
      {
        question: 'What if our apartment entrance is in South or West direction?',
        answer:
          'Not all South or West entrances are negative. Specific padas like South-3 (Vithetha) or West-3 (Sugriva) can be highly prosperous. If placed in negative zones, we neutralize them effectively.',
      },
    ],
    targetAudience: ['Homeowners', 'New Flat Buyers', 'Tenants', 'Architects & Interior Designers'],
    deliverables: ['Home Energy Blueprint', 'Remedy Placement Plan', 'Entrance Correction Guide'],
  },
  {
    id: 'vedic-astrology',
    slug: 'vedic-astrology-kundli-consultation',
    title: 'Vedic Astrology & Kundli Analysis',
    shortDescription:
      'Detailed planetary birth chart interpretation for career choices, marriage matchmaking, financial timing, and life purpose.',
    fullDescription:
      'Deep dive into your Janam Kundli using authentic Parashari and KP astrology techniques. Understand ongoing Dasha cycles, transit impacts (Gochar), and practical gemstone or mantra remedies.',
    category: 'astrology',
    iconName: 'Compass',
    benefits: [
      'Clarity on career switches, promotion timing, and business partnerships',
      'Accurate Kundli Milan (marriage compatibility) beyond superficial gunas',
      'Timing of property acquisition and wealth accumulation',
      'Personalized astrological remedies with verifiable rationale',
    ],
    processSteps: [
      {
        title: 'Birth Data Verification',
        description: 'Date, precise time, and birthplace coordinates confirmation.',
      },
      {
        title: 'Chart Synthesis',
        description: 'D1 Lagna, D9 Navamsha, and D10 Dashamsha analysis.',
      },
      {
        title: '1-on-1 Consultation Call',
        description: '45-minute live strategic advisory session.',
      },
    ],
    faqs: [
      {
        question: 'What information is needed for a horoscope consultation?',
        answer: 'We require exact date of birth, time of birth (to the minute), and city of birth.',
      },
    ],
    targetAudience: ['Professionals', 'Entrepreneurs', 'Couples', 'Students'],
    deliverables: [
      'Comprehensive PDF Horoscope Report',
      'Dasha Forecast',
      'Astrological Guidance & Behavioral Remedies',
    ],
  },
  {
    id: 'energy-scanning',
    slug: 'geopathic-stress-energy-scanning',
    title: 'Geopathic Stress & Earth Energy Scanning',
    shortDescription:
      'Scientific detection of underground water veins, fault lines, Hartmann grids, and subtle earth energies.',
    fullDescription:
      'Geopathic stress refers to subtle subterranean electromagnetic distortions and earth energy lines. Using calibrated digital compasses, Gauss meters, and dowsing rods, we identify disturbed earth energy lines passing beneath living or work spaces.',
    category: 'energy',
    iconName: 'Zap',
    benefits: [
      'Detection of unseen underground stress lines causing physical restlessness',
      'Neutralization of harmful geomagnetic lines without digging or demolition',
      'Restoration of natural spatial tranquility and restorative sleep',
      'Protection against environmental EMF stresses',
    ],
    processSteps: [
      {
        title: 'On-site Frequency Measurement',
        description: 'Using calibrated digital compasses, Gauss meters, and dowsing rods.',
      },
      {
        title: 'Mapping Geopathic Lines',
        description: 'Plotting Curry and Hartmann grid intersections on floor plans.',
      },
      {
        title: 'Remedial Installation',
        description: 'Placing metallic inlays and elemental boundary neutralizers.',
      },
    ],
    faqs: [
      {
        question: 'What are common signs of geopathic stress in a property?',
        answer:
          'Frequent insomnia, waking up exhausted, unexplained headaches, recurrent electrical appliance failures, and persistent restlessness concentrated in one room.',
      },
    ],
    targetAudience: [
      'Residents suffering sleep issues',
      'Hospitals',
      'Luxury Villas',
      'Industrial plants',
    ],
    deliverables: ['Geopathic Survey Report', 'Energy Line Diagram', 'Remedy Blueprint'],
  },
]
