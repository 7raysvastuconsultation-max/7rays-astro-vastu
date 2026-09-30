export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categoryLabel: string
  price: number
  originalPrice: number
  discountPercent: number
  rating: number
  reviewsCount: number
  badge?: 'Bestseller' | 'Popular' | 'Trending' | 'New'
  image: string
  description: string
  features: string[]
  vastuPlacement: {
    direction: string
    zone: string
    benefit: string
  }
  isEnergised: boolean
  inStock: boolean
  material: string
  weight?: string
}

export interface ProductCategory {
  id: string
  name: string
  iconName: string
  imageUrl: string
  description: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'vastu-yantras',
    name: 'Vastu Yantras',
    iconName: 'Compass',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&auto=format&fit=crop&q=80',
    description: 'Sacred geometric copper & brass energy plates',
  },
  {
    id: 'crystals-stones',
    name: 'Crystals & Stones',
    iconName: 'Sparkles',
    imageUrl:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=300&auto=format&fit=crop&q=80',
    description: 'Natural healing crystals and gemstone bracelets',
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    iconName: 'Home',
    imageUrl:
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=300&auto=format&fit=crop&q=80',
    description: 'Vastu harmonizing indoor accents & urlis',
  },
  {
    id: 'vastu-remedies',
    name: 'Vastu Remedies',
    iconName: 'ShieldCheck',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
    description: 'Energy correctors for dosh nivaran without demolition',
  },
  {
    id: 'brass-idols',
    name: 'Brass Idols',
    iconName: 'Crown',
    imageUrl:
      'https://images.unsplash.com/photo-1567591414240-e221379796ff?w=300&auto=format&fit=crop&q=80',
    description: 'Consecrated pure brass deities for pooja & altar',
  },
  {
    id: 'protection-items',
    name: 'Protection Items',
    iconName: 'Eye',
    imageUrl:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&auto=format&fit=crop&q=80',
    description: 'Evil eye shields, black tourmaline & bagua mirrors',
  },
  {
    id: 'office-workspace',
    name: 'Office & Workspace',
    iconName: 'Briefcase',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&auto=format&fit=crop&q=80',
    description: 'Executive desk energizers for career & prosperity',
  },
  {
    id: 'pooja-essentials',
    name: 'Pooja Essentials',
    iconName: 'Flame',
    imageUrl:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&auto=format&fit=crop&q=80',
    description: 'Diyas, bells, dhoop & consecrated accessories',
  },
  {
    id: 'vastu-kits',
    name: 'Vastu Kits',
    iconName: 'Package',
    imageUrl:
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=300&auto=format&fit=crop&q=80',
    description: 'Comprehensive directional balancing kits for homes & offices',
  },
  {
    id: 'all',
    name: 'All Products',
    iconName: 'Grid',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&auto=format&fit=crop&q=80',
    description: 'Browse complete catalog of 7Rays authentic remedies',
  },
]

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Vastu Pyramid for Home',
    slug: 'vastu-pyramid-for-home',
    category: 'vastu-remedies',
    categoryLabel: 'Vastu Remedies',
    price: 1299,
    originalPrice: 1899,
    discountPercent: 32,
    rating: 4.8,
    reviewsCount: 120,
    badge: 'Bestseller',
    image: '/images/shop/vastu-pyramid.jpg',
    description:
      'Engineered multi-tier sacred brass pyramid calibrated to neutralize directional Vastu doshas in residences and offices. Consecrated with Vedic mantras to amplify cosmic bio-energy and dispel stagnant vibrations.',
    features: [
      '100% Solid Brass Construction with Sacred Geometry Inscriptions',
      'Neutralizes geopathic stress and directional energy blockages',
      'Pre-energised by certified Vastu consultant Rishwa Sinha',
      'Suitable for living room, center Brahmasthan, or entrance',
    ],
    vastuPlacement: {
      direction: 'Center (Brahmasthan) or South-West',
      zone: 'Stability & Earth Element',
      benefit:
        'Grounds discordant energies, protects family harmony, and enhances decision-making stability.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Pure Virgin Brass',
    weight: '450g',
  },
  {
    id: 'prod-2',
    name: '7 Chakra Crystal Bracelet',
    slug: '7-chakra-crystal-bracelet',
    category: 'crystals-stones',
    categoryLabel: 'Crystals & Stones',
    price: 899,
    originalPrice: 1299,
    discountPercent: 31,
    rating: 4.7,
    reviewsCount: 98,
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1611591475836-407482811467?w=600&auto=format&fit=crop&q=80',
    description:
      'Authentic handcrafted stretch bracelet comprising 7 authentic natural gemstone beads: Red Jasper (Root), Carnelian (Sacral), Tiger Eye (Solar Plexus), Green Aventurine (Heart), Sodalite (Throat), Lapis Lazuli (Third Eye), and Amethyst (Crown).',
    features: [
      '100% Natural certified healing gemstones, 8mm round beads',
      'Aura balance, stress relief, and enhanced intuition',
      'Durable elastic cord fitting all wrist sizes comfortably',
      'Cleansed and charged under full moon energy',
    ],
    vastuPlacement: {
      direction: 'Personal Wear (Left wrist for receiving, Right for manifesting)',
      zone: 'Subtle Energy Anatomy',
      benefit:
        'Harmonizes 7 bodily energy vortexes, calms restless mind, and deflects negative psychic debris.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Natural Gemstones (8mm)',
    weight: '35g',
  },
  {
    id: 'prod-3',
    name: 'Brass Ganesha Idol',
    slug: 'brass-ganesha-idol',
    category: 'brass-idols',
    categoryLabel: 'Brass Idols',
    price: 2499,
    originalPrice: 3499,
    discountPercent: 29,
    rating: 4.9,
    reviewsCount: 156,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1567591414240-e221379796ff?w=600&auto=format&fit=crop&q=80',
    description:
      'Artisan-crafted seated Lord Ganesha idol with left-turned trunk (Edamuri Vinayaka) in divine blessing mudra. Perfect for home main entrance, executive office table, or mandir to usher in wisdom, prosperity, and unobstructed progress.',
    features: [
      'Heavy solid brass with antique handcrafted finish',
      'Traditional left-turned trunk representing soothing lunar grace',
      'Includes consecration manual and auspicious installation muhurta',
      'Prevents evil eye and attracts new auspicious beginnings',
    ],
    vastuPlacement: {
      direction: 'North-East (Ishanya) or Facing Main Entrance',
      zone: 'Water & Spiritual Elevation',
      benefit:
        'Dispels obstacles (Vighnaharta), invites auspicious commercial growth, and anchors tranquil serenity.',
    },
    isEnergised: true,
    inStock: true,
    material: 'High-Density Antique Brass',
    weight: '820g',
  },
  {
    id: 'prod-4',
    name: 'Vastu Dosh Nivaran Yantra',
    slug: 'vastu-dosh-nivaran-yantra',
    category: 'vastu-yantras',
    categoryLabel: 'Vastu Yantras',
    price: 1199,
    originalPrice: 1699,
    discountPercent: 29,
    rating: 4.6,
    reviewsCount: 76,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    description:
      'Sacred geometric mandala etched on heavy copper-brass plate with gold-plated finish. Designed specifically to remedy structural and directional flaws such as toilet in North-East, kitchen in South-West, or missing corners without breaking walls.',
    features: [
      'Micro-etched sacred geometry with ancient Vedic planetary squares',
      'Gold-polished copper plate resistant to oxidation and fading',
      'Specifically energized with 108 Gayatri and Vastu Purusha chants',
      'Includes mounting tape and protective clear casing',
    ],
    vastuPlacement: {
      direction: 'East or North Wall at eye level',
      zone: 'Solar & Magnetic Flow Axis',
      benefit:
        'Nullifies harmful directional faults, harmonizes residential electromagnetic currents, and guards financial stability.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Gold-Plated Copper Alloy',
    weight: '210g',
  },
  {
    id: 'prod-5',
    name: 'Lucky Bamboo Plant',
    slug: 'lucky-bamboo-plant',
    category: 'home-decor',
    categoryLabel: 'Home Décor',
    price: 799,
    originalPrice: 1199,
    discountPercent: 33,
    rating: 4.5,
    reviewsCount: 64,
    image:
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80',
    description:
      'Vibrant two-tier indoor Lucky Bamboo (Dracaena sanderiana) arranged in a decorative glass ceramic bowl with polished river pebbles. Represents the Wood element to catalyze continuous financial growth, vitality, and freshness.',
    features: [
      'Fresh healthy green stalks bound with golden-red ribbon for prosperity',
      'Includes premium transparent glass bowl and energized colored pebbles',
      'Low maintenance indoor plant thriving in indirect ambient sunlight',
      'Natural air-purifier that uplifts chi and biological prana',
    ],
    vastuPlacement: {
      direction: 'East (Health & Family) or South-East (Wealth Corner)',
      zone: 'Wood & Fire Elemental Matrix',
      benefit:
        'Stimulates positive cash velocity, promotes longevity, and clears stagnant corner heaviness.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Living Plant + Ceramic Glass Bowl',
    weight: '600g',
  },
  {
    id: 'prod-6',
    name: 'Himalayan Salt Lamp',
    slug: 'himalayan-salt-lamp',
    category: 'home-decor',
    categoryLabel: 'Home Décor',
    price: 1499,
    originalPrice: 2199,
    discountPercent: 32,
    rating: 4.6,
    reviewsCount: 91,
    image:
      'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=600&auto=format&fit=crop&q=80',
    description:
      '100% Authentic natural pink Himalayan crystal rock salt hand-carved in Khewra foothills, mounted on a solid neem-wood base with certified dimmer cord and warming bulb. Releases purifying negative ions when heated.',
    features: [
      'Authentic Grade-A Himalayan pink crystal rock salt (2-3 kg)',
      'Natural ionizer neutralizing EMF radiation from Wi-Fi routers and laptops',
      'Warm amber glow promotes melatonin release and restful sleep',
      'Solid wooden base with pre-fitted electrical fixture & spare bulb',
    ],
    vastuPlacement: {
      direction: 'South or South-East (Agni Fire sector)',
      zone: 'Thermal & Vitality Energy',
      benefit:
        'Dispels dampness, neutralizes office electromagnetic fatigue, and infuses tranquil warmth.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Natural Himalayan Rock Salt + Wood',
    weight: '2.5kg',
  },
  {
    id: 'prod-7',
    name: 'Natural Amethyst Healing Cluster',
    slug: 'natural-amethyst-healing-cluster',
    category: 'crystals-stones',
    categoryLabel: 'Crystals & Stones',
    price: 1899,
    originalPrice: 2699,
    discountPercent: 30,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80',
    description:
      'Deep purple Brazilian raw amethyst crystal geode cluster with lustrous termination points. Revered in planetary astrology for calming Saturnian afflictions and activating the Crown chakra for profound mental clarity and sound meditation.',
    features: [
      '100% Natural unheated Brazilian amethyst specimen (approx 350-450g)',
      'Powerful energy amplifier for study rooms, desks, and master bedrooms',
      'Relieves stress, anxiety, insomnia, and erratic emotional spikes',
      'Energized with Tibetan singing bowl acoustic vibrations',
    ],
    vastuPlacement: {
      direction: 'North-East (Ishanya) or Study Table',
      zone: 'Higher Consciousness & Wisdom',
      benefit:
        'Sharpens intellectual focus, dissolves stress-induced headaches, and enhances spiritual intuition.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Raw Natural Amethyst',
    weight: '400g',
  },
  {
    id: 'prod-8',
    name: 'Pure Brass Kuber Idol for Wealth',
    slug: 'brass-kuber-idol-wealth',
    category: 'brass-idols',
    categoryLabel: 'Brass Idols',
    price: 1799,
    originalPrice: 2499,
    discountPercent: 28,
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=600&auto=format&fit=crop&q=80',
    description:
      'Sacred brass idol of Lord Kuber—the divine treasurer of wealth and regent of the North. Depicted holding a mongoose and jewel pot to attract financial abundance, corporate liquidity, and debt release.',
    features: [
      'High-grade solid brass with polished traditional detailing',
      'Ideal for home cash lockers, accounts desks, and commercial cash counters',
      'Pre-consecrated with Sri Suktam and Kuber Moola Mantras',
      'Compact size fitting securely in modern office safes',
    ],
    vastuPlacement: {
      direction: 'North (Kuber Zone) facing South or East',
      zone: 'Water Element & Financial Treasury',
      benefit:
        'Safeguards financial reserves, unlocks overdue receivables, and attracts prosperous new clientele.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Solid Brass',
    weight: '380g',
  },
  {
    id: 'prod-9',
    name: 'Raw Black Tourmaline Protection Stone',
    slug: 'raw-black-tourmaline-protection-stone',
    category: 'protection-items',
    categoryLabel: 'Protection Items',
    price: 699,
    originalPrice: 999,
    discountPercent: 30,
    rating: 4.7,
    reviewsCount: 79,
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
    description:
      'Heavy natural raw black tourmaline chunk known as the premier psychic protection shield in crystal mineralogy. Repels nazar (evil eye), psychic vampirism, and absorbs harmful electromagnetic smog from electronics.',
    features: [
      'Authentic raw uncut black tourmaline specimen (200-250g)',
      'Place near home entrance or between yourself and laptop screens',
      'Creates a grounding energetic forcefield around living spaces',
      'Salt-cleansed and charged under pristine sunlight',
    ],
    vastuPlacement: {
      direction: 'Main Entrance Doorway or Near Wi-Fi Router',
      zone: 'Protective Perimeter',
      benefit:
        'Acts as an energetic sponge that absorbs jealousy, gossip, and environmental toxicity before it crosses threshold.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Natural Black Tourmaline',
    weight: '250g',
  },
  {
    id: 'prod-10',
    name: 'Brass Tortoise with Glass Plate',
    slug: 'brass-tortoise-glass-plate',
    category: 'vastu-remedies',
    categoryLabel: 'Vastu Remedies',
    price: 999,
    originalPrice: 1499,
    discountPercent: 33,
    rating: 4.6,
    reviewsCount: 84,
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    description:
      'Classic brass Kurma (tortoise) resting in a heavy round glass bowl designed to be filled with fresh water. In classical Vastu and Feng Shui, the tortoise represents Lord Vishnu Kurma Avatar, sustaining career longevity and stability.',
    features: [
      'Carved brass tortoise with sacred yantra inscribed on shell',
      'Includes crystal-clear heavy glass water receptacle',
      'Brings patient steady career growth and familial health',
      'Water in bowl should be refreshed every morning facing North',
    ],
    vastuPlacement: {
      direction: 'North or East in living room or office desk',
      zone: 'Water Element & Career Momentum',
      benefit:
        'Stabilizes career fluctuations, anchors patriarchal health, and fosters enduring peace of mind.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Brass & Toughened Glass',
    weight: '420g',
  },
  {
    id: 'prod-11',
    name: 'Energised Brass Surya Wall Hanging',
    slug: 'energised-brass-surya-wall-hanging',
    category: 'home-decor',
    categoryLabel: 'Home Décor',
    price: 1399,
    originalPrice: 1999,
    discountPercent: 30,
    rating: 4.8,
    reviewsCount: 104,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
    description:
      'Radiant embossed brass Surya Dev (Sun Face) wall emblem with detailed solar rays. Essential Vastu remedy for homes with blocked East walls, missing balconies, or lack of direct morning sunlight to invigorate fame and leadership.',
    features: [
      'Pure brass with lustrous antique gold lacquer protective coating',
      'Hangs conveniently above doors or on unblemished East walls',
      'Activates solar energy, boosting confidence, authority, and public respect',
      'Pre-activated during Sunday Shukla Paksha Surya Hora',
    ],
    vastuPlacement: {
      direction: 'East Wall at minimum 6 feet height',
      zone: 'Solar & Social Connectivity',
      benefit:
        'Overcomes East-sector deficiencies, elevates social standing, and vitalizes vitality for all residents.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Embossed Brass',
    weight: '350g',
  },
  {
    id: 'prod-12',
    name: 'Electrical Brass Kapoor & Dhoop Burner',
    slug: 'electrical-brass-kapoor-dhoop-burner',
    category: 'pooja-essentials',
    categoryLabel: 'Pooja Essentials',
    price: 849,
    originalPrice: 1199,
    discountPercent: 29,
    rating: 4.5,
    reviewsCount: 71,
    image:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&auto=format&fit=crop&q=80',
    description:
      'Flameless brass electrical aromatic camphor diffuser. Disperses pure Bhimseni camphor and herbal dhoop essence throughout your home without charcoal smoke or fire risk. Cleanses atmospheric bacteria and spiritual staleness.',
    features: [
      'Heavy engraved brass dome with thermal-regulated heating element',
      'Smokeless, flameless and safe for air-conditioned apartments and offices',
      'Purifies household air and wards off stagnant negative ether',
      'Standard 2-pin plug with safety on/off indicator switch',
    ],
    vastuPlacement: {
      direction: 'South-East (Agni) or Living Room center during twilight',
      zone: 'Atmospheric Ether Purification',
      benefit:
        'Removes foul odor, relaxes nervous system with camphor aroma, and invites goddess Lakshmi prana.',
    },
    isEnergised: true,
    inStock: true,
    material: 'Brass & Insulated Ceramic Heater',
    weight: '280g',
  },
]
