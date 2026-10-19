export interface RegionalLocation {
  slug: string
  name: string
  region: string
  title: string
  description: string
  intent: string
  intro: string
  focusLabel: string
  focus: string
  sections: { eyebrow: string; title: string; body: string }[]
  faqs: { question: string; answer: string }[]
  localities: string[]
  services: { label: string; href: string; description: string }[]
}

/** Regional pages focus on remote consultations nationwide; on-site travel is confirmed individually. */
export const regionalLocations: RegionalLocation[] = [
  {
    slug: 'mumbai',
    name: 'Mumbai',
    region: 'Mumbai Metropolitan Region',
    title: 'Vastu Consultant in Mumbai | High-Rise & Apartment Vastu | 7Rays',
    description: 'Online Vastu consultation for Mumbai high-rise apartments, compact flats, sea-facing homes and BKC offices. Property-specific, non-demolition guidance from 7Rays Astro Vastu.',
    intent: 'Vastu consultant in Mumbai · high-rise apartment Vastu · non-demolition Vastu remedies',
    intro: 'Get a property-specific Vastu review for a Mumbai apartment, home or workplace. Share a floor plan and property orientation for a remote consultation with Rishwa Sinha, Certified Vastu Consultant. Recommendations are tailored to your layout and practical constraints, not assumptions about every Mumbai building.',
    focusLabel: 'Mumbai focus: high-rise and society-constrained homes',
    focus: 'Many apartment owners need to work within fixed entrances, plumbing shafts, shared walls and housing-society rules. The consultation focuses on what can be assessed and adjusted within the private unit, without recommending structural work as a default.',
    sections: [
      { eyebrow: 'HIGH-RISE HOMES', title: 'Review the apartment as its own plan', body: 'For a tower apartment, the usable starting point is the unit’s measured floor plan, actual entrance, internal room positions and orientation. We review the unit layout rather than assuming a tower-wide correction applies to every flat.' },
      { eyebrow: 'SEA-FACING & SOUTH-FACING FLATS', title: 'Assess exposure without treating the view as a defect', body: 'A sea view or a south-facing aspect is not, by itself, enough to diagnose a Vastu concern. The review considers the home’s orientation, openings, room use and the resident’s stated priorities before discussing any practical adjustments.' },
      { eyebrow: 'SOCIETY-COMPLIANT', title: 'Keep recommendations within your authority', body: 'Where society rules, rental terms or building warranties limit alterations, the plan prioritizes reversible, non-structural options inside the unit. Any proposed installation should be checked against the society’s rules and product safety requirements.' },
      { eyebrow: 'BKC & SOUTH MUMBAI WORKPLACES', title: 'Map desks and functions to the real office plan', body: 'For a BKC or Nariman Point office, the review can consider workstation orientation, leadership seating, meeting areas and how teams use the available layout. Recommendations are tied to the floor plan rather than generic promises about business results.' },
    ],
    localities: ['South Mumbai', 'Worli & Lower Parel', 'Bandra & BKC', 'Juhu & Andheri', 'Powai', 'Thane & Navi Mumbai'],
    services: [
      { label: 'Apartment Vastu', href: '/vastu/apartment-vastu/', description: 'Apartment-specific layout and room-use guidance.' },
      { label: 'Commercial Vastu', href: '/vastu/commercial/', description: 'Workspace, office and business-property review.' },
      { label: 'Online Vastu consultation', href: '/services/online-vastu-consultation/', description: 'Remote consultation process and preparation.' },
      { label: 'Meet Rishwa Sinha', href: '/consultant/rishwa-sinha/', description: 'Consultant background and approach.' },
    ],
    faqs: [
      { question: 'Can I get a Vastu consultation for a Mumbai apartment online?', answer: 'Yes. Remote consultations are available across India. Share a legible floor plan, the property location and orientation, and photos or a video of relevant areas. We will confirm what can be assessed from the materials before the session.' },
      { question: 'Do remedies require breaking walls or changing the entrance?', answer: 'Structural alteration is not a default recommendation. The review considers non-structural options where they are suitable, and any change must remain compliant with your society rules, lease and building requirements.' },
      { question: 'Do you have a branch office in Mumbai?', answer: 'No. 7Rays Astro Vastu has its registered headquarters in Bengaluru. Mumbai consultations are offered remotely; any on-site availability is confirmed individually before booking.' },
    ],
  },
  {
    slug: 'delhi-ncr',
    name: 'Delhi-NCR',
    region: 'Delhi, Gurugram, Noida & NCR',
    title: 'Vastu Consultant in Delhi NCR | Builder Floors & Offices | 7Rays',
    description: 'Online Vastu consultation for Delhi-NCR builder floors, basements, farmhouses and corporate offices. Layout-specific assessment and practical non-demolition guidance from 7Rays Astro Vastu.',
    intent: 'Vastu consultant in Delhi NCR · builder floor Vastu · basement and office Vastu',
    intro: 'Plan a property-specific Vastu review for a Delhi-NCR home, builder floor, farmhouse or workplace. Remote consultations are available across the region; Rishwa Sinha reviews the floor plan, orientation and how each level is used before suggesting practical next steps.',
    focusLabel: 'Delhi-NCR focus: multi-level and mixed-use properties',
    focus: 'Builder floors, basements and large plots can have different layouts and ownership constraints. The assessment starts with the exact property boundaries, level-by-level plans and entrances rather than assuming that one remedy suits every home in the NCR.',
    sections: [
      { eyebrow: 'BUILDER FLOORS', title: 'Assess each level and household separately', body: 'Where a building has multiple independent floors, document each unit’s entry, kitchen, bedrooms, stairs and shared circulation. This helps separate a specific unit’s concerns from common areas or other households’ spaces.' },
      { eyebrow: 'BASEMENTS & LOWER GROUND', title: 'Review use, access and light together', body: 'For a basement used as a study, office or entertainment room, note the actual room function, access route, ventilation and natural light. Vastu guidance does not replace building-code, ventilation, moisture or electrical safety checks.' },
      { eyebrow: 'FARMHOUSES & LARGE PLOTS', title: 'Work from a surveyed boundary plan', body: 'Large plots need a clear site plan showing boundary shape, gate, built area, water features and approach road. We use the supplied plan to discuss layout priorities; we do not infer a defect from a plot shape or road junction alone.' },
      { eyebrow: 'GURUGRAM & NOIDA WORKPLACES', title: 'Make office advice fit the team and floorplate', body: 'For a Cyber City, Golf Course Road or Noida office, share the floorplate and intended work patterns. The discussion can cover leadership cabins, workstations and meeting zones, while keeping operational and fire-safety requirements first.' },
    ],
    localities: ['South Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Faridabad', 'Ghaziabad'],
    services: [
      { label: 'Residential Vastu', href: '/vastu/residential/', description: 'Home, builder-floor and house-layout review.' },
      { label: 'Corporate Vastu', href: '/vastu/corporate/', description: 'Office layouts and workplace functions.' },
      { label: 'Business astrology', href: '/astrology/business/', description: 'Separate business-focused astrology service.' },
      { label: 'Online Vastu consultation', href: '/services/online-vastu-consultation/', description: 'Remote consultation process and preparation.' },
    ],
    faqs: [
      { question: 'Can you review a multi-storey builder floor in Delhi-NCR?', answer: 'Yes. Share plans for the relevant level or levels, clearly mark shared areas, and explain who uses each floor. The consultation will distinguish the private unit from common property.' },
      { question: 'Can you assess a basement or lower-ground office?', answer: 'We can review the layout and intended use from the plans you provide. Structural, ventilation, moisture, fire and electrical concerns must be assessed by qualified local professionals.' },
      { question: 'Does 7Rays have a physical office in Delhi, Gurugram or Noida?', answer: 'No. The registered headquarters is in Bengaluru. Remote consultations are available for Delhi-NCR; any on-site visit is subject to individual confirmation.' },
    ],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    region: 'Hyderabad & Telangana',
    title: 'Vastu Consultant in Hyderabad | Villas, Plots & Offices | 7Rays',
    description: 'Online Vastu consultation for Hyderabad villas, plotted homes, offices and industrial properties. Share a floor plan for a tailored review from 7Rays Astro Vastu.',
    intent: 'Vastu consultant in Hyderabad · villa and plot Vastu · office Vastu',
    intro: 'Get a tailored Vastu review for a Hyderabad villa, plotted home, apartment or workplace. Remote consultations are available nationwide. Share the property plan, orientation and your questions so the review can address the specific site rather than rely on generic assumptions.',
    focusLabel: 'Hyderabad focus: villa plots, water systems and workspaces',
    focus: 'Properties in and around Gachibowli, Kokapet, Jubilee Hills and the Financial District range from apartments to gated villas and offices. The useful starting point is the property’s own site and floor plan, including water elements and approach roads where relevant.',
    sections: [
      { eyebrow: 'PLOTS & ROAD APPROACH', title: 'Check the actual plot and entrance geometry', body: 'For a plotted property, provide a dimensioned site plan showing the plot boundary, gate, road approach and building footprint. A road junction or angled boundary alone does not establish a problem; its relation to the actual entrance and layout needs to be reviewed.' },
      { eyebrow: 'VILLAS & WATER SYSTEMS', title: 'Map sumps, borewells and tanks before discussing changes', body: 'Mark underground sumps, borewells, overhead tanks and drainage on the plan, along with levels if known. Recommendations should be practical for the existing build and must not replace plumbing, structural or water-safety advice.' },
      { eyebrow: 'GACHIBOWLI & FINANCIAL DISTRICT', title: 'Align workspace guidance to the founder’s real floor plan', body: 'For a founder cabin or technology office, share the seat locations, meeting rooms and daily work pattern. The consultation can explore orientation and zoning without promising investment, productivity or business outcomes.' },
      { eyebrow: 'INDUSTRIAL & WAREHOUSE SITES', title: 'Keep site advice grounded in operational constraints', body: 'For a warehouse or plant, mark machinery, loading areas, storage and utilities. Any Vastu discussion is secondary to engineering, worker safety, environmental and statutory requirements.' },
    ],
    localities: ['Gachibowli', 'Kokapet & Financial District', 'Jubilee Hills', 'HITEC City', 'Kondapur', 'Patancheru & Cherlapally'],
    services: [
      { label: 'Residential Vastu', href: '/vastu/residential/', description: 'Homes, villas and residential floor plans.' },
      { label: 'Industrial Vastu', href: '/vastu/industrial/', description: 'Plant and warehouse layout consultation.' },
      { label: 'Vastu audit', href: '/vastu-services/vastu-audit/', description: 'Understand the audit and its deliverables.' },
      { label: 'Online Vastu consultation', href: '/services/online-vastu-consultation/', description: 'Remote consultation process and preparation.' },
    ],
    faqs: [
      { question: 'Can you review a Hyderabad villa or plotted property online?', answer: 'Yes. Send a dimensioned site plan, floor plan, property location and orientation, and indicate water systems and the main gate. If information is missing, we will identify what is needed before making a property-specific assessment.' },
      { question: 'Can you assess a road-hit or angled plot from an address alone?', answer: 'No. A reliable review needs a site plan showing the boundary, road, gate and building footprint. An address or general map view alone may not establish the property geometry.' },
      { question: 'Are on-site Hyderabad visits available?', answer: 'Remote consultations are available across India. 7Rays is headquartered in Bengaluru and does not represent a Hyderabad branch; any on-site request is confirmed individually before booking.' },
    ],
  },
  {
    slug: 'pune',
    name: 'Pune',
    region: 'Pune & Pimpri-Chinchwad',
    title: 'Vastu Consultant in Pune | Apartments, Duplexes & Offices | 7Rays',
    description: 'Online Vastu consultation for Pune apartments, duplexes, hillside properties and workplaces. Get a plan-led review and practical recommendations from 7Rays Astro Vastu.',
    intent: 'Vastu consultant in Pune · duplex and apartment Vastu · office Vastu Hinjawadi',
    intro: 'Request a property-specific Vastu review for a Pune apartment, duplex, hillside home or workspace. Remote consultations are available across India. Share the layout, orientation, levels and how you use each area for recommendations grounded in your actual property.',
    focusLabel: 'Pune focus: slopes, duplexes and home-work layouts',
    focus: 'Pune properties may include sloped sites, multi-level row houses and compact home-office arrangements. These are assessed from the individual site and floor plans; broad claims about terrain or city-wide directional gradients are not a substitute for measurements.',
    sections: [
      { eyebrow: 'SLOPED SITES', title: 'Use levels and a site plan, not a city-wide assumption', body: 'For a hillside or sloping plot, supply a surveyed site plan or levels from the architect, showing the road, entry, building footprint and known elevation changes. Do not infer a Vastu issue from the region’s terrain alone.' },
      { eyebrow: 'HINJAWADI & KHARADI', title: 'Make a home-office work with the available room', body: 'For work-from-home setups in a 2BHK or 3BHK, show the desk, screen, door, windows and shared family activities. The consultation can suggest practical workspace placement while respecting ergonomics and lighting.' },
      { eyebrow: 'ROW HOUSES & DUPLEXES', title: 'Read stairs, double-height spaces and floor use together', body: 'A multi-level plan should mark stair direction, landings, voids, skylights and the function of each floor. That helps keep the discussion specific to circulation and use rather than treating every stair or double-height space the same.' },
      { eyebrow: 'PCMC & MANUFACTURING', title: 'Coordinate Vastu discussion with engineering priorities', body: 'For a PCMC facility, provide a clear layout of production, machinery, storage, dispatch and utilities. Engineering, process flow, worker safety and statutory compliance remain primary; Vastu input is supplementary.' },
    ],
    localities: ['Hinjawadi', 'Baner & Balewadi', 'Kharadi', 'Magarpatta', 'Bavdhan', 'Pimpri-Chinchwad'],
    services: [
      { label: 'Apartment Vastu', href: '/vastu/apartment-vastu/', description: 'Apartment and multi-level home review.' },
      { label: 'Industrial Vastu', href: '/vastu/industrial/', description: 'Manufacturing and industrial layout consultation.' },
      { label: 'About 7Rays', href: '/about/', description: 'Our consultation approach and background.' },
      { label: 'Online Vastu consultation', href: '/services/online-vastu-consultation/', description: 'Remote consultation process and preparation.' },
    ],
    faqs: [
      { question: 'What do you need to review a sloped property in Pune?', answer: 'A dimensioned floor plan and site plan with known levels or a section drawing are most useful. Include the approach road, entrance, building footprint and any major changes in elevation.' },
      { question: 'Can you review my Pune home-office or duplex remotely?', answer: 'Yes. Share floor plans for each level and explain how you use the rooms. For a workspace, include desk and screen positions; for a duplex, mark stairs, voids and floor functions.' },
      { question: 'Does 7Rays provide on-site consultation in Pune?', answer: 'Remote consultations are available nationwide. The registered office is in Bengaluru; any on-site visit in Pune is confirmed individually before a booking is accepted.' },
    ],
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    region: 'Kolkata & West Bengal',
    title: 'Vastu Consultant in Kolkata | Heritage Homes & Apartments | 7Rays',
    description: 'Online Vastu consultation for Kolkata ancestral homes, heritage properties, apartments and Salt Lake offices. Get a careful, property-specific review from 7Rays Astro Vastu.',
    intent: 'Vastu consultant in Kolkata · ancestral home Vastu · commercial Vastu Salt Lake',
    intro: 'Arrange a tailored Vastu review for a Kolkata ancestral home, apartment, heritage property or commercial space. Remote consultation is available across India. We work from your actual plan and constraints, with care for preservation, shared ownership and existing building fabric.',
    focusLabel: 'Kolkata focus: heritage layouts and contemporary high-rises',
    focus: 'Kolkata includes inherited courtyard homes, older buildings and newer residential and commercial developments. A useful review distinguishes what can be changed from what must be preserved and avoids presuming that moisture, water bodies or age alone indicate a Vastu concern.',
    sections: [
      { eyebrow: 'ANCESTRAL & HERITAGE HOMES', title: 'Respect the structure and the family’s shared decisions', body: 'For a courtyard or heritage property, provide a plan of the existing rooms, courtyard, entrances and floors, plus any conservation or ownership constraints. Recommendations should not encourage unauthorized work or damage to protected architectural features.' },
      { eyebrow: 'WATER & MOISTURE', title: 'Separate building maintenance from spatial guidance', body: 'Mark ponds, water features and known damp areas on the plan if they are relevant to your question. Moisture, leaks, mold and drainage require qualified building-maintenance attention; Vastu consultation cannot replace diagnosis or remediation.' },
      { eyebrow: 'NEW TOWN & RAJARHAT', title: 'Review high-rise apartments on their own floor plans', body: 'For a newer apartment, document the unit’s entrance, shafts, balconies, kitchen and room use. Advice is based on that unit’s configuration and practical society or lease restrictions, not on a generic high-rise prescription.' },
      { eyebrow: 'SALT LAKE SECTOR V', title: 'Map team use and client-facing areas', body: 'For an IT, agency or commercial office in Salt Lake, share a floorplate and explain the team’s daily work. The review can address seating and function zones while keeping accessibility, safety and operational requirements intact.' },
    ],
    localities: ['North & Central Kolkata', 'Ballygunge & Alipore', 'Salt Lake Sector V', 'New Town & Rajarhat', 'Howrah', 'Bidhannagar'],
    services: [
      { label: 'Residential Vastu', href: '/vastu/residential/', description: 'Home and inherited-property layout review.' },
      { label: 'Commercial Vastu', href: '/vastu/commercial/', description: 'Office, agency and commercial-space review.' },
      { label: 'Meet Rishwa Sinha', href: '/consultant/rishwa-sinha/', description: 'Consultant background and approach.' },
      { label: 'Online Vastu consultation', href: '/services/online-vastu-consultation/', description: 'Remote consultation process and preparation.' },
    ],
    faqs: [
      { question: 'Can you review an ancestral or heritage home without recommending demolition?', answer: 'The assessment can account for preservation and ownership restrictions and prioritize non-structural options where appropriate. Do not carry out changes to a protected or shared property without the required permissions and professional advice.' },
      { question: 'Can Vastu consultation resolve dampness or mold in a Kolkata home?', answer: 'No. Dampness and mold need prompt assessment by qualified building professionals to identify leaks, ventilation or other causes. A Vastu consultation is not a substitute for repair, health or building-safety advice.' },
      { question: 'Do you have a branch in Kolkata?', answer: 'No. 7Rays Astro Vastu is headquartered in Bengaluru. Remote consultations are available for Kolkata; any on-site availability is confirmed individually before booking.' },
    ],
  },
]
