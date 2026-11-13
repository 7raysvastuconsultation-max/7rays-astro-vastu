# 7Rays Astro Vastu — Master Keyword Map & Cannibalization Defense Architecture

> **Authoritative Invariant**: Every primary search query is owned by **exactly one canonical URL**.
> No two pages on `7raysastrovastu.in` may target, optimize for, or compete for the same primary search intent.
> Version: 1.0 (2026 Production Baseline)
> Reference Framework: Senior Technical SEO & Search Central Invariants

---

## 1. Anti-Cannibalization Invariants & Query Boundaries

To prevent search intent fragmentation, Google query-splitting, and internal ranking cannibalization, the site enforces strict hierarchical partitioning:

1. **National Pillar vs. Local Landing Page Separation**:
   - `/vastu/residential/` owns all pan-India, general home Vastu queries.
   - `/locations/bangalore/residential-vastu/` owns location-qualified Bangalore residential queries.
   - Bangalore locality pages (`/locations/hsr-layout/`, `/locations/whitefield/`, etc.) own hyper-local residential/office intent for that specific neighborhood only.
2. **Apartment Intent Tri-Partitioning**:
   - `/vastu/apartment-vastu/`: Pan-India commercial investigation & service offerings for high-rise apartments and leased flats.
   - `/locations/bangalore/apartment-vastu/`: Bangalore-specific apartment consultations, addressing high-density IT corridor towers and local RWA bylaws.
   - `/blog/vastu-for-modern-apartments-in-bangalore/`: Informational overview of architectural challenges in urban apartments.
   - `/blog/bangalore-apartment-vastu-checklist-before-buying/`: Informational pre-purchase evaluation checklist for homebuyers before signing agreement.
3. **Workplace & Commercial Scope Partitioning**:
   - `/vastu/commercial/`: Broad umbrella service for commercial enterprises, retail showrooms, co-working spaces, and businesses across India.
   - `/vastu/office-vastu/`: Specialized workplace desk ergonomics, executive cabin seating, and team productivity.
   - `/vastu/corporate/`: Enterprise-level headquarter planning, corporate campus zoning, and multi-floor real estate audits.
   - `/locations/bangalore/commercial-vastu/`: Commercial consultations conducted within Bengaluru commercial districts.
   - `/locations/bangalore/office-vastu/`: IT tech parks and office cabin consulting in Bengaluru corridors.
4. **Non-Demolition Intent Partitioning**:
   - `/vastu/non-demolition/`: Pan-India national service page for structural preservation, metallic inlays (brass, copper, zinc, lead), and non-invasive energy alignment.
   - `/locations/bangalore/non-demolition-vastu/`: Bangalore apartment and leased office non-demolition consultations.
   - `/blog/vastu-remedies-without-demolition-modern-apartments/`: Purely informational guide explaining the physics and methodology of elemental remedies.
5. **Astro-Vastu Synthesis vs. Individual Verticals**:
   - `/services/astro-vastu-synthesis`: Unique hybrid methodology integrating Janma Kundli (horoscope) with 16-zone spatial mapping.
   - `/astrology/*`: Pure birth chart, career, marriage, and business astrological readings without architectural mapping.
   - `/vastu/*`: Spatial architectural alignment without mandatory individual horoscopic analysis.

---

## 2. Master URL & Keyword Allocation Matrix

### 2.1 Core Brand, Authority & Conversion Hubs

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/` | 7rays astro vastu | vastu consultant india, scientific vastu shastra, vastu purusha mandala, rishwa sinha vastu | Navigational / Brand | `Organization`, `LocalBusiness`, `WebSite` | Owns brand terms, founder identity, and umbrella philosophy. Defers specific service intent to dedicated service pages. |
| `https://7raysastrovastu.in/about/` | about 7rays astro vastu | rishwa sinha vastu consultant, certified vastu expert bangalore, scientific vastu methodology | Informational / Brand | `AboutPage`, `Person` | Focuses exclusively on consultant qualifications, 5+ years experience, and foundational values. |
| `https://7raysastrovastu.in/consultant/rishwa-sinha/` | rishwa sinha | rishwa sinha vastu, certified vastu consultant rishwa sinha, vastu expert bangalore | Navigational / Entity | `ProfilePage`, `Person` | Authoritative entity profile for founder E-E-A-T. Captures personal name queries. |
| `https://7raysastrovastu.in/the-7-rays/` | the 7 rays vastu philosophy | solar spectrum vastu, seven rays cosmic energy, subtle energy healing vastu | Informational | `Article`, `BreadcrumbList` | Explains the esoteric and scientific theory of the seven cosmic rays. Avoids commercial service CTAs. |
| `https://7raysastrovastu.in/process/` | vastu consultation process | how vastu consultation works, 16 zone vastu analysis steps, what happens during vastu audit | Informational | `ItemPage`, `BreadcrumbList` | Details the 4-stage audit workflow (Intake, Mapping, Remedial Prescription, Follow-up). |
| `https://7raysastrovastu.in/contact/` | contact 7rays astro vastu | vastu consultant phone number, book vastu consultation bangalore, 7rays contact | Transactional | `ContactPage` | Conversion capture only. Contains official NAP, phone number (+91 70910 21616), and intake form. |
| `https://7raysastrovastu.in/faq/` | vastu shastra questions | common vastu questions, non demolition vastu faqs, astro vastu answers | Informational | `FAQPage` | Aggregates general FAQs across all disciplines. Cross-links to specific service pages for deep dives. |
| `https://7raysastrovastu.in/sitemap/` | 7rays sitemap | site index 7rays astro vastu, html sitemap | Navigational | `ItemPage` | Complete HTML navigational directory for crawlers and human visitors. |
| `https://7raysastrovastu.in/shop/` | authentic vastu remedies shop | metallic vastu inlays, brass strips for vastu, copper wire vastu remedy, zinc dividers | Commercial Investigation | `CollectionPage` | Catalog of authentic metallic inlay materials (brass, copper, zinc, lead). Strictly adheres to no-gemstone policy. |

---

### 2.2 Pan-India Core Service Hubs

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/vastu-services/` | vastu consultation services india | professional vastu services, scientific vastu consultants, residential commercial vastu | Commercial Investigation | `CollectionPage`, `Service` | High-level category hub. Must link to individual service leaf pages without stealing leaf-specific queries. |
| `https://7raysastrovastu.in/vastu/residential/` | residential vastu consultant | home vastu consultation, vastu for house, vastu for flats and villas, scientific residential vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | **Owns all national residential home Vastu queries.** Defers Bengaluru-specific queries to Bangalore residential page. |
| `https://7raysastrovastu.in/vastu/apartment-vastu/` | apartment vastu consultant | vastu for flats, high rise apartment vastu remedies, flat entrance vastu, vastu for leased apartment | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Owns pan-India apartment and multi-storey flat queries. Emphasizes non-structural constraints in leased/owned flats. |
| `https://7raysastrovastu.in/vastu/commercial/` | commercial vastu consultant | vastu for business premises, commercial space vastu, retail shop vastu, commercial showroom vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | **Owns broad commercial and retail space queries nationwide.** Links down to specialized office and corporate pages. |
| `https://7raysastrovastu.in/vastu/office-vastu/` | office vastu consultant | vastu for office layout, executive cabin vastu direction, office seating vastu, it office vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses strictly on office interiors, desk orientations, conference rooms, and workforce productivity. |
| `https://7raysastrovastu.in/vastu/corporate/` | corporate vastu consultation | enterprise vastu services, vastu for corporate headquarters, large business campus vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Targets enterprise leadership, corporate HQs, and multi-floor commercial complexes. |
| `https://7raysastrovastu.in/vastu/industrial/` | industrial vastu consultant | factory vastu consultation, manufacturing plant vastu layout, warehouse vastu shastra, industrial plot vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | **Owns all industrial, factory, warehouse, and heavy machinery layout queries.** |
| `https://7raysastrovastu.in/vastu/non-demolition/` | vastu without demolition | non demolition vastu remedies, vastu correction without structural changes, metallic strips for vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on remedial techniques: elemental metal inlays (brass, copper, zinc, lead), color balancing, and directional remedies. |
| `https://7raysastrovastu.in/services/online-vastu-consultation/` | online vastu consultation | remote vastu audit, cad blueprint vastu consultation, online vastu expert india | Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Captures users seeking remote digital consultations via floor plans, Google Earth, and video calls. |
| `https://7raysastrovastu.in/services/astro-vastu-synthesis/` | astro vastu consultation | astro vastu consultant, horoscope and vastu synthesis, kundli based vastu remedies, janma kundli vastu | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | **Sole owner of Astro-Vastu synthesis queries.** Connects personal planetary Dasha cycles with 16-zone spatial grids. |
| `https://7raysastrovastu.in/vastu-services/vastu-audit/` | vastu audit service | comprehensive vastu inspection, home vastu energy audit, 16 zone energy assessment | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on the diagnostic evaluation phase: digital compass mapping, Gauss meter scans, and report generation. |
| `https://7raysastrovastu.in/international/` | international vastu consultation | global vastu consultant, vastu for nri homes, online vastu usa uk dubai | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Targets NRI and international property owners requiring remote timezone-flexible audits. |

---

### 2.3 Astrology Consultation Services

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/astrology/` | vedic astrology consultation | certified vedic astrologer, online astrology reading india, authentic horoscope analysis | Commercial / Informational | `CollectionPage`, `Service` | Umbrella hub for Vedic astrological services. Links to specific life-domain sub-services. |
| `https://7raysastrovastu.in/astrology/birth-chart/` | birth chart reading | janma kundli analysis, online kundali reading, lagna chart evaluation, dasha analysis | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Dedicated to foundational natal chart (Janma Kundli) analysis and planetary positions. |
| `https://7raysastrovastu.in/astrology/career/` | career astrology consultation | job promotion astrology, business vs job horoscope, 10th house astrology guidance | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Strictly targets career, professional path, and workplace advancement queries. |
| `https://7raysastrovastu.in/astrology/business/` | business astrology consultation | horoscope for business partnership, company registration muhurat, financial astrology | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on commercial venture timing, partnership compatibility, and enterprise growth. |
| `https://7raysastrovastu.in/astrology/marriage/` | marriage astrology consultation | kundali matching for marriage, relationship horoscope analysis, 7th house astrology | Commercial / Transactional | `Service`, `FAQPage`, `BreadcrumbList` | Targets matrimonial compatibility, marital harmony, and relationship timing. |

---

### 2.4 Bengaluru Location Master & Specialized Service Pages

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/locations/` | vastu consultant locations | vastu consultant bangalore and metro cities, vastu consultation service areas | Navigational | `CollectionPage` | Gateway directory for all geographical hubs (Bangalore and Pan-India regional metros). |
| `https://7raysastrovastu.in/locations/bangalore/` | vastu consultant bangalore | best vastu consultant in bangalore, top vastu expert bangalore, scientific vastu consultant bengaluru | Commercial / Local | `LocalBusiness`, `FAQPage`, `BreadcrumbList` | **Primary local money page.** Owns all general Bangalore Vastu searches and physical office entity signals in Dasarahalli. |
| `https://7raysastrovastu.in/locations/bangalore/residential-vastu/` | residential vastu consultant bangalore | home vastu consultation bangalore, vastu for house in bangalore, villa vastu bangalore | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Owns Bangalore-specific residential home, independent villa, and plotted development queries. |
| `https://7raysastrovastu.in/locations/bangalore/commercial-vastu/` | commercial vastu consultant bangalore | office vastu in bangalore, vastu for commercial space bengaluru, business vastu bangalore | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Owns Bangalore commercial retail, co-working, and business property queries. |
| `https://7raysastrovastu.in/locations/bangalore/industrial-vastu/` | industrial vastu consultant bangalore | factory vastu consultant bangalore, peenya factory vastu, bommasandra industrial vastu | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Targets manufacturing hubs in Bengaluru (Peenya, Bommasandra, Bidadi, Dabaspet). |
| `https://7raysastrovastu.in/locations/bangalore/apartment-vastu/` | apartment vastu consultant bangalore | flat vastu in bangalore, high rise apartment vastu bangalore, vastu for bangalore flats | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | **Dedicated to Bangalore apartment owners.** Targets high-density corridor flats (Whitefield, Bellandur, Sarjapur). |
| `https://7raysastrovastu.in/locations/bangalore/office-vastu/` | office vastu consultant bangalore | it office vastu bangalore, executive cabin vastu bengaluru, tech park office vastu | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Focuses on Bangalore's IT tech corridors and startup offices (Manyata, Ecospace, Bagmane). |
| `https://7raysastrovastu.in/locations/bangalore/non-demolition-vastu/` | non demolition vastu bangalore | vastu remedies without demolition bangalore, flat vastu correction bangalore | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Targets Bangalore tenants and apartment owners prohibited from civil remodeling. |
| `https://7raysastrovastu.in/locations/bangalore/vastu-audit/` | vastu audit in bangalore | on site vastu visit bangalore, home energy audit bengaluru, compass audit bangalore | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Targets physical on-site diagnostic visits and instrument audits across Bengaluru. |
| `https://7raysastrovastu.in/locations/bangalore/astrology/` | astrologer in bangalore | best astrologer bangalore, vedic astrology consultation bengaluru, horoscope reading bangalore | Commercial / Local | `Service`, `LocalBusiness`, `FAQPage` | Captures localized Vedic astrology and horoscope reading searches within Bangalore. |

---

### 2.5 Bengaluru 12 Neighborhood Locality Pages

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/locations/indiranagar/` | vastu consultant indiranagar | vastu in indiranagar bangalore, office vastu 100 feet road indiranagar | Local / Transactional | `LocalBusiness`, `FAQPage` | Owns Indiranagar residential bungalows and retail high-street commercial queries. |
| `https://7raysastrovastu.in/locations/hsr-layout/` | vastu consultant hsr layout | vastu in hsr layout, startup office vastu hsr layout, flat vastu hsr sectors | Local / Transactional | `LocalBusiness`, `FAQPage` | **Resolved HSR intent**: Focuses on startup tech offices and multi-sector residential plots. |
| `https://7raysastrovastu.in/locations/koramangala/` | vastu consultant koramangala | vastu expert koramangala, commercial vastu 80 feet road koramangala | Local / Transactional | `LocalBusiness`, `FAQPage` | Owns Koramangala startup hubs, co-working spaces, and premium residences. |
| `https://7raysastrovastu.in/locations/whitefield/` | vastu consultant whitefield | flat vastu whitefield, itpl office vastu, apartment vastu consultant whitefield | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on major gated high-rise apartment communities and ITPL tech campuses. |
| `https://7raysastrovastu.in/locations/hebbal/` | vastu consultant hebbal | vastu in hebbal, bellary road apartment vastu, north bangalore vastu consultant | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on North Bangalore high-rises, airport corridor developments, and villas. |
| `https://7raysastrovastu.in/locations/sarjapur-road/` | vastu consultant sarjapur road | apartment vastu sarjapur road, villa vastu sarjapur, tech corridor vastu bangalore | Local / Transactional | `LocalBusiness`, `FAQPage` | Targets high-growth gated villa communities and multi-tower apartment societies. |
| `https://7raysastrovastu.in/locations/electronic-city/` | vastu consultant electronic city | vastu for office electronic city, phase 1 flat vastu, phase 2 apartment vastu | Local / Transactional | `LocalBusiness`, `FAQPage` | Targets IT industrial campuses, tech workspaces, and surrounding residential flats. |
| `https://7raysastrovastu.in/locations/jayanagar/` | vastu consultant jayanagar | vastu in jayanagar bangalore, traditional home vastu jayanagar | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on South Bangalore heritage plotted houses, bungalows, and retail shopping complexes. |
| `https://7raysastrovastu.in/locations/marathahalli/` | vastu consultant marathahalli | vastu in marathahalli, outer ring road apartment vastu, flat vastu marathahalli | Local / Transactional | `LocalBusiness`, `FAQPage` | Targets ORR tech corridor commuters, rental apartments, and retail high streets. |
| `https://7raysastrovastu.in/locations/yelahanka/` | vastu consultant yelahanka | vastu expert yelahanka, plotted layout vastu yelahanka new town | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on plotted layouts, independent villas, and emerging North Bengaluru apartments. |
| `https://7raysastrovastu.in/locations/banashankari/` | vastu consultant banashankari | vastu in banashankari, bsk 2nd stage vastu, south bangalore home vastu | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on multi-stage residential developments, independent homes, and family retail. |
| `https://7raysastrovastu.in/locations/malleshwaram/` | vastu consultant malleshwaram | vastu in malleshwaram bangalore, traditional residential vastu malleshwaram | Local / Transactional | `LocalBusiness`, `FAQPage` | Focuses on traditional residential estates, heritage houses, and local commercial shops. |

---

### 2.6 Pan-India Regional Metro Hubs (Remote Consultations)

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/locations/mumbai/` | vastu consultant mumbai | vastu in mumbai, high rise flat vastu mumbai, south mumbai vastu consultation | Commercial / Regional | `Service`, `FAQPage`, `BreadcrumbList` | Positions remote CAD and on-site visits for sea-facing penthouses, MMR high-rises, and corporate offices. |
| `https://7raysastrovastu.in/locations/delhi-ncr/` | vastu consultant delhi ncr | vastu expert gurgaon, noida apartment vastu, south delhi villa vastu | Commercial / Regional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on NCR high-rises, builder floors, and corporate IT parks across Gurgaon and Noida. |
| `https://7raysastrovastu.in/locations/hyderabad/` | vastu consultant hyderabad | vastu in hyderabad, hitup city office vastu, gachibowli flat vastu | Commercial / Regional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on HITEC City IT campuses, Gachibowli high-rises, and Jubilee Hills villas. |
| `https://7raysastrovastu.in/locations/pune/` | vastu consultant pune | vastu in pune, hinjewadi flat vastu, baner apartment vastu consultant | Commercial / Regional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on Hinjewadi IT professionals, Baner/Kothrud apartments, and manufacturing units. |
| `https://7raysastrovastu.in/locations/kolkata/` | vastu consultant kolkata | vastu expert kolkata, salt lake office vastu, new town apartment vastu | Commercial / Regional | `Service`, `FAQPage`, `BreadcrumbList` | Focuses on Salt Lake IT offices, New Town multi-storey apartments, and traditional residences. |

---

### 2.7 Educational Knowledge Base & Editorial Blog Articles

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/blog/` | vastu blog india | vastu shastra articles, scientific vastu tips, vedic astrology insights | Informational | `CollectionPage`, `Blog` | Blog index. Lists educational articles categorized by topic. |
| `https://7raysastrovastu.in/blog/how-to-choose-vastu-consultation-services/` | how to choose vastu consultant | what to look for in vastu consultant, certified vastu expert questions, fake vastu warning | Informational | `Article`, `FAQPage` | Educates buyers on evaluating qualifications, avoiding demolition fraud, and checking credentials. |
| `https://7raysastrovastu.in/blog/vastu-for-modern-apartments-in-bangalore/` | vastu for modern apartments | apartment vastu challenges, high rise flat vastu tips, non structural vastu for apartments | Informational | `Article`, `FAQPage` | **Informational editorial**. Analyzes common structural constraints in modern builder layouts. |
| `https://7raysastrovastu.in/blog/bangalore-apartment-vastu-checklist-before-buying/` | apartment vastu checklist before buying | flat purchase vastu checklist, vastu audit before token money, apartment selection vastu | Informational | `Article`, `FAQPage` | **Pre-purchase decision guide**. Step-by-step checklist for buyers evaluating builder blueprints. |
| `https://7raysastrovastu.in/blog/vastu-remedies-without-demolition-modern-apartments/` | vastu remedies without demolition | how to fix vastu dosh without breaking walls, metal strip vastu remedies, non demolition techniques | Informational | `Article`, `FAQPage` | Educational guide explaining the physics, metallurgy, and zone balancing of non-demolition tools. |
| `https://7raysastrovastu.in/blog/vastu-principles-every-homeowner-should-know/` | basic vastu principles for home | vastu tips for homeowners, 16 vastu zones explained, 5 elements vastu pancha tattva | Informational | `Article`, `FAQPage` | Comprehensive introductory primer on elemental directions and zone functions. |
| `https://7raysastrovastu.in/blog/best-directions-for-home-office/` | best vastu direction for home office | work from home vastu, wfh desk direction vastu, study table vastu direction | Informational | `Article`, `FAQPage` | Practical WFH desk placements, lighting, and laptop orientations for professionals. |
| `https://7raysastrovastu.in/blog/master-bedroom-vastu-guidelines/` | master bedroom vastu direction | southwest bedroom vastu, bed placement vastu rules, sleep direction according to vastu | Informational | `Article`, `FAQPage` | Rules for Southwest sector alignment, head-sleeping directions, and avoiding mirrors. |
| `https://7raysastrovastu.in/blog/kitchen-vastu-direction-guide/` | kitchen vastu direction | southeast kitchen vastu, cook top direction vastu, kitchen sink stove clash remedies | Informational | `Article`, `FAQPage` | Southeast (Agni) zone guidelines, fire-water separation, and alternate Northwest options. |
| `https://7raysastrovastu.in/blog/bathroom-toilet-vastu-remedies/` | bathroom toilet vastu remedies | north east toilet vastu remedy, toilet seat direction vastu, bathroom dosh correction | Informational | `Article`, `FAQPage` | Non-demolition metal wire/strip remedies for misaligned toilets and drainage sectors. |
| `https://7raysastrovastu.in/blog/north-facing-house-vastu-plan/` | north facing house vastu plan | kubera direction vastu, north facing main door benefits, north entrance pada rules | Informational | `Article`, `FAQPage` | Analysis of North-facing layouts, entrance pada divisions, and common placement myths. |
| `https://7raysastrovastu.in/blog/south-facing-house-vastu-myths/` | south facing house vastu myths | is south facing house bad in vastu, south facing entrance remedies, yama direction vastu | Informational | `Article`, `FAQPage` | Debunks myths around South-facing properties with classical texts and architectural Pada rules. |
| `https://7raysastrovastu.in/blog/office-layout-executive-cabin-vastu/` | office layout vastu guidelines | md cabin vastu direction, ceo desk placement vastu, conference room vastu | Informational | `Article`, `FAQPage` | In-depth layout guide for executive leadership cabins, accounts desks, and reception areas. |
| `https://7raysastrovastu.in/blog/retail-store-and-showroom-vastu/` | retail store vastu | showroom cash counter vastu, retail store entrance direction, display rack vastu | Informational | `Article`, `FAQPage` | Focuses on pedestrian circulation, cash box placement, and merchandise display energy. |
| `https://7raysastrovastu.in/blog/restaurant-and-hospitality-vastu/` | restaurant vastu guidelines | commercial kitchen vastu direction, restaurant seating vastu, bar counter vastu | Informational | `Article`, `FAQPage` | Guidelines for dining layouts, commercial ranges, freezer storage, and bar orientation. |
| `https://7raysastrovastu.in/blog/factory-machinery-and-raw-material-vastu/` | factory machinery placement vastu | industrial plant vastu layout, transformer boiler vastu direction, factory dispatch vastu | Informational | `Article`, `FAQPage` | Technical zoning for heavy equipment tonnage, generator sets, and dispatch bays. |
| `https://7raysastrovastu.in/blog/how-geopathic-stress-causes-insomnia-and-fatigue/` | geopathic stress vastu | earth radiation sleep issues, dowsing rods geopathic stress, gauss meter electromagnetic scan | Informational | `Article`, `FAQPage` | Scientific overview of subterranean water veins, magnetic grid lines, and diagnostic tools. |
| `https://7raysastrovastu.in/blog/what-is-vedic-astrology-birth-chart-guide/` | what is vedic astrology birth chart | how to read janma kundli, 12 houses vedic astrology, ascendant lagna meaning | Informational | `Article`, `FAQPage` | Educational primer explaining the 12 houses, zodiac signs, and planetary rulerships. |
| `https://7raysastrovastu.in/blog/career-astrology-professional-path-guidelines/` | career astrology guidelines | 10th house career planetary indicators, saturn job changes astrology, promotion timing kundli | Informational | `Article`, `FAQPage` | Detailed guide on assessing vocation, planetary periods, and career inflection points. |
| `https://7raysastrovastu.in/blog/astrology-vs-vastu-difference-and-synthesis/` | astrology vs vastu difference | difference between vastu and astrology, how horoscope and vastu work together | Informational | `Article`, `FAQPage` | Compares spatial external environment (Vastu) with internal karmic timeline (Astrology). |
| `https://7raysastrovastu.in/blog/understanding-dasha-cycles-and-transitions/` | understanding dasha cycles astrology | vimshottari dasha transitions, mahadasha antardasha effects, major dasha shifts | Informational | `Article`, `FAQPage` | Explains Vimshottari Dasha mechanics, timing life transitions, and remedial pacing. |

---

### 2.8 Real Estate Case Studies & Proof Points

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/case-studies/` | vastu consultation case studies | real life vastu case studies, scientific vastu results, before after vastu audit | Informational | `CollectionPage` | Directory of verified architectural case study narratives. |
| `https://7raysastrovastu.in/case-studies/whitefield-apartment-health-harmony/` | whitefield apartment vastu case study | 3bhk flat vastu remedies whitefield, apartment sleep correction case study | Informational | `Article` | Anonymized case study of bedroom alignment and zinc metallic strip threshold inlays. |
| `https://7raysastrovastu.in/case-studies/fintech-startup-growth-hsr-layout/` | hsr layout office vastu case study | startup office vastu hsr layout, executive cabin alignment case study | Informational | `Article` | Anonymized case study of tech startup desk layout and cash flow sector realignment. |
| `https://7raysastrovastu.in/case-studies/corporate-office-bangalore/` | corporate office vastu case study bangalore | tech park commercial vastu case study, corporate conference room alignment | Informational | `Article` | Anonymized case study of enterprise IT office layout and leadership cabin zoning. |
| `https://7raysastrovastu.in/case-studies/luxury-residence-mumbai/` | luxury residence vastu case study mumbai | coastal penthouse vastu audit, 16 zone cad overlay case study | Informational | `Article` | Anonymized case study of high-rise penthouse entrance pada alignment using brass dividers. |
| `https://7raysastrovastu.in/case-studies/villa-goa/` | independent villa vastu case study | villa perimeter drainage vastu, geopathic stress survey goa case study | Informational | `Article` | Anonymized case study of independent plot orientation, soil evaluation, and Gauss meter scan. |
| `https://7raysastrovastu.in/case-studies/commercial-space-hyderabad/` | commercial space vastu case study hyderabad | retail showroom vastu case study, retail footfall circulation alignment | Informational | `Article` | Anonymized case study of retail showroom customer circulation and Southeast lighting layout. |

---

### 2.9 Legal & Compliance Pages

| Canonical URL | Primary Target Query | Secondary / LSI Queries | Search Intent | Schema Types | Cannibalization Defense Directive |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://7raysastrovastu.in/privacy-policy/` | 7rays privacy policy | data protection privacy terms 7rays | Navigational | `WebPage` | Complies with Indian IT Act and global privacy standards. Excluded from commercial keywords. |
| `https://7raysastrovastu.in/terms/` | 7rays terms of service | consultation terms and conditions 7rays | Navigational | `WebPage` | Official advisory terms, scope of service, and cancellation guidelines. |
| `https://7raysastrovastu.in/disclaimer/` | 7rays vastu disclaimer | astrological advisory disclaimer, scientific methodology notice | Navigational | `WebPage` | Required statutory disclosures: advisory nature, non-substitute for medical/structural engineering. |

---

## 3. Query Monitoring & Review Routine

1. **Monthly Google Search Console Audit**:
   - Filter queries with impressions across multiple URLs.
   - If an informational guide outranks a transactional service page for a commercial query, strengthen internal links pointing from the guide to the service page with descriptive commercial anchor text.
2. **Anchor Text Discipline**:
   - Always link to `/vastu/residential/` with anchors like "residential Vastu consultation", "home Vastu services".
   - Always link to `/locations/bangalore/` with anchors like "Vastu consultant in Bangalore", "Bengaluru Vastu office".
   - Always link to `/services/astro-vastu-synthesis/` with anchors like "Astro-Vastu consultation", "horoscope and Vastu synthesis".
