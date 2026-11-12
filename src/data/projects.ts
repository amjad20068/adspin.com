export type ProjectCategory =
  | "All Work"
  | "Branding"
  | "Social Media"
  | "Print Design"
  | "Brochure & Publication"
  | "Advertising"
  | "Video & Reels"
  | "Outdoor Branding"
  | "Corporate Design";

export interface Project {
  slug: string;
  name: string;
  client: string;
  category: ProjectCategory;
  serviceCategories: string[];
  year: string;
  location: string;
  heroImage: string;
  cropImage: string;
  galleryImages: string[];
  tagline: string;
  shortDescription: string;
  objective: string;
  creativeApproach: string;
  deliverables: string[];
  stats?: { label: string; value: string }[];
  isFeatured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "33-holdings",
    name: "33 Holdings Global",
    client: "33 Holdings",
    category: "Corporate Design",
    serviceCategories: ["Brand Architecture", "Company Profile", "Wall Design", "Social Media"],
    year: "2024",
    location: "International / UAE",
    heroImage: "/images/portfolio/page-05.png",
    cropImage: "/images/portfolio/crops/crop-05.jpg",
    galleryImages: [
      "/images/portfolio/page-04.png",
      "/images/portfolio/page-05.png",
      "/images/portfolio/page-06.png",
      "/images/portfolio/crops/crop-04.jpg",
      "/images/portfolio/crops/crop-05.jpg",
      "/images/portfolio/crops/crop-06.jpg"
    ],
    tagline: "Institutional Authority for a Multi-Sector Investment Group",
    shortDescription: "Comprehensive corporate brand collateral, executive company profile brochure, environmental wall branding, and digital social media campaigns for international conglomerate 33 Holdings.",
    objective: "Establish a cohesive, institutional visual presence across multi-national operations spanning real estate, healthcare, and infrastructure.",
    creativeApproach: "Using clean editorial layouts, balanced typography, and monochromatic corporate architecture with strategic turquoise accents, we structured their diversified portfolio into an authoritative visual narrative.",
    deliverables: [
      "Executive 24-Page Corporate Profile Brochure",
      "Environmental Facility Wall Graphics & Partner Grid",
      "Corporate Recruitment & Holiday Social Post System",
      "Diversified Holdings Sub-Brand Architectural Alignment"
    ],
    isFeatured: true
  },
  {
    slug: "premium-naseem",
    name: "Premium Naseem Healthcare",
    client: "Premium Naseem",
    category: "Brochure & Publication",
    serviceCategories: ["Brochure & Publication", "A4 Flyer Design", "Trifold Brochure", "Portable Stall", "Social Media"],
    year: "2024-2025",
    location: "Doha, Qatar",
    heroImage: "/images/portfolio/page-08.png",
    cropImage: "/images/portfolio/crops/crop-08.jpg",
    galleryImages: [
      "/images/portfolio/page-07.png",
      "/images/portfolio/page-08.png",
      "/images/portfolio/page-09.png",
      "/images/portfolio/page-10.png",
      "/images/portfolio/page-11.png"
    ],
    tagline: "Redefining Aesthetic & Clinical Healthcare in Qatar",
    shortDescription: "High-end medical aesthetics & cosmetic dentistry collateral, Frax Pro dermatological brochure, patient trifold guides, and modular exhibition architecture.",
    objective: "Position Premium Naseem as Qatar's premier destination for luxury clinical aesthetics, advanced laser dermatology, and cosmetic dentistry.",
    creativeApproach: "We developed an opulent deep burgundy and gold geometric identity system, blending clinical rigor with five-star hospitality aesthetics.",
    deliverables: [
      "Frax Pro 1550 / 1940 Clinical Technology Brochure",
      "Redefining Healthcare in Qatar Trifold Patient Guide",
      "Corporate Medical Privilege Offers A4 Flyer",
      "Modular Pop-Up Exhibition Stall & Reception Podiums",
      "Multilingual Social Media Dental & Aesthetic Creatives"
    ],
    isFeatured: true
  },
  {
    slug: "naseem-healthcare",
    name: "Naseem Healthcare — 20 Years",
    client: "Naseem Healthcare",
    category: "Outdoor Branding",
    serviceCategories: ["20 Years Anniversary Campaign", "Canopy Architecture", "Health Card", "Social Media"],
    year: "2024",
    location: "Qatar",
    heroImage: "/images/portfolio/page-15.png",
    cropImage: "/images/portfolio/crops/crop-15.jpg",
    galleryImages: [
      "/images/portfolio/page-12.png",
      "/images/portfolio/page-13.png",
      "/images/portfolio/page-14.png",
      "/images/portfolio/page-15.png",
      "/images/portfolio/page-16.png"
    ],
    tagline: "Two Decades of Clinical Excellence and Community Trust",
    shortDescription: "Milestone celebration campaign for '20 Years of Healthcare Excellence', outdoor branded pop-up canopies, diagnostic portable exhibition stalls, and patient health cards.",
    objective: "Celebrate 20 years of transformative medical service across Qatar while standardizing outpatient touchpoints.",
    creativeApproach: "A celebratory golden 3D typographic motif set against desert sand dunes and Doha skyline vistas, complemented by cyan clinical brand signatures.",
    deliverables: [
      "20th Anniversary Master Key Visuals",
      "Branded Community Outreach Canopy Architecture",
      "Diagnostic Services Modular Exhibition Booth",
      "Patient Privilege Health Card & Record Booklet",
      "Qatar National Day & World Health Observance Creatives"
    ],
    isFeatured: true
  },
  {
    slug: "meitra-hospital",
    name: "Meitra Hospital",
    client: "Meitra Hospital (KEF Healthcare)",
    category: "Advertising",
    serviceCategories: ["Breath Clinic Sub-Brand", "Highway Hoarding", "Brochure Design", "Special Medical Article"],
    year: "2024",
    location: "Kozhikode, India",
    heroImage: "/images/portfolio/page-24.png",
    cropImage: "/images/portfolio/crops/crop-24.jpg",
    galleryImages: [
      "/images/portfolio/page-21.png",
      "/images/portfolio/page-22.png",
      "/images/portfolio/page-23.png",
      "/images/portfolio/page-24.png",
      "/images/portfolio/page-25.png",
      "/images/portfolio/page-26.png"
    ],
    tagline: "Clinical Precision Meets Empathetic Storytelling",
    shortDescription: "Sub-brand identity for 'Breath Clinic' dedicated asthma center, large-format highway hoardings, Center of Excellence departmental brochures, and surgical health camp campaigns.",
    objective: "Communicate advanced tertiary care excellence across Gastro Sciences, Joint & Spine, Maxillofacial Surgery, and Structural Heart Valve procedures.",
    creativeApproach: "We harmonized medical scientific accuracy with warm human visuals and evocative vernacular copy that resonates deeply across South India.",
    deliverables: [
      "Breath Clinic Logomark & Billboard Campaign",
      "Dental & Maxillofacial Surgery Centre Guidebook",
      "Structural Heart Disease Special Magazine Article",
      "10,000 Happy Joints Orthopaedic Milestone Campaign",
      "Gastro Sciences Center of Excellence Social Series"
    ],
    isFeatured: true
  },
  {
    slug: "haya-gold",
    name: "Haya Gold & Diamonds",
    client: "Haya Gold & Diamonds",
    category: "Outdoor Branding",
    serviceCategories: ["Highway Billboards", "Grand Launch Campaign", "Social Media Creatives", "Retail Collateral"],
    year: "2024-2025",
    location: "Elankur / Wandoor / Nilambur",
    heroImage: "/images/portfolio/page-51.png",
    cropImage: "/images/portfolio/crops/crop-51.jpg",
    galleryImages: [
      "/images/portfolio/page-50.png",
      "/images/portfolio/page-51.png",
      "/images/portfolio/page-52.png",
      "/images/portfolio/page-53.png"
    ],
    tagline: "Timeless Bridal Opulence & Precious Jewellery Storytelling",
    shortDescription: "Luxury retail jewellery hoardings, bridal jewellery showcase campaigns, Elankur showroom grand launch, and daily diamond rewards promotional creatives.",
    objective: "Establish Haya as the pinnacle of bridal craftsmanship and generational gold trust across high-density retail corridors.",
    creativeApproach: "Opulent dark charcoal backdrops with warm gold ambient lighting, highlighting the intricate filigree of gold necklace craftsmanship and bridal portraiture.",
    deliverables: [
      "Prime Highway Unipole Billboard Series",
      "Grand Showroom Launch Integrated Announcement Campaign",
      "Daily Diamond Ring Giveaway Social Campaign",
      "Bridal Heritage Visual Language & Typography System"
    ],
    isFeatured: true
  },
  {
    slug: "carino",
    name: "Carino — The King of Durability",
    client: "Royal Carino",
    category: "Print Design",
    serviceCategories: ["2025 Executive Calendar", "Rollup Standees", "Depot Launch", "Social Media"],
    year: "2024-2025",
    location: "Ernakulam / Calicut",
    heroImage: "/images/portfolio/page-46.png",
    cropImage: "/images/portfolio/crops/crop-46.jpg",
    galleryImages: [
      "/images/portfolio/page-44.png",
      "/images/portfolio/page-45.png",
      "/images/portfolio/page-46.png",
      "/images/portfolio/page-47.png"
    ],
    tagline: "Architectural Endurance Symbolized by Unstoppable Force",
    shortDescription: "Dynamic brand storytelling for high-grade plywood, PVC foam board, and laminates. Launch of Ernakulam Headquarters, Table Top 2025 Calendar, and product specification roll-ups.",
    objective: "Differentiate Carino in the competitive construction substrate sector by anchoring the brand to uncompromising strength.",
    creativeApproach: "Powerful bull-charging-through-plywood metaphor illustrating impact resistance, paired with warm architectural textures and clean technical specifications.",
    deliverables: [
      "Architectural 2025 Table Top Spiral Calendar",
      "Ernakulam Central Depot Opening Campaign",
      "Product Specification Rollup Standees (Plywood, WPC, PVC)",
      "Core Values Brand Identity Social Media Series"
    ],
    isFeatured: true
  },
  {
    slug: "crypto-liveon",
    name: "Crypto Liveon",
    client: "Crypto Liveon Technologies",
    category: "Branding",
    serviceCategories: ["Brand Identity", "App UI Design", "Curriculum Brochure", "Cinema Theater Ad"],
    year: "2024",
    location: "India",
    heroImage: "/images/portfolio/page-65.png",
    cropImage: "/images/portfolio/crops/crop-65.jpg",
    galleryImages: [
      "/images/portfolio/page-61.png",
      "/images/portfolio/page-65.png",
      "/images/portfolio/page-69.png"
    ],
    tagline: "Educate. Elevate. Earn — Modern Financial Literacy",
    shortDescription: "Transforming India's financial literacy landscape. Modern geometric logo symbol combining arrow ascension with digital currency token, course guidebook brochure, and big-screen cinema theater commercial.",
    objective: "Demystify cryptocurrency, blockchain, and equity markets through a clear, professional visual identity that builds user confidence.",
    creativeApproach: "Isometric geometric monogram combining a stylized 'C' with an upward growth arrow in electric cyan and deep midnight navy.",
    deliverables: [
      "Master Brand Identity & Geometric Logomark Suite",
      "Mobile Application Icon & Interface Styling",
      "12-Page Financial Literacy Course Curriculum Guidebook",
      "Full 4K Cinema Theater Big-Screen Commercial Spot"
    ],
    isFeatured: true
  },
  {
    slug: "o4-optical",
    name: "O4 Optical Eyewear",
    client: "O4 Optical",
    category: "Branding",
    serviceCategories: ["Bilingual Logo Design", "Packaging Design", "Store Merchandising", "Staff Badges"],
    year: "2024",
    location: "GCC / Oman",
    heroImage: "/images/portfolio/page-64.png",
    cropImage: "/images/portfolio/crops/crop-64.jpg",
    galleryImages: [
      "/images/portfolio/page-63.png",
      "/images/portfolio/page-64.png"
    ],
    tagline: "Harmonizing Arabic & Latin Scripts for Premium Eyewear",
    shortDescription: "Sophisticated bilingual optical identity in English and Arabic typography (٥٤ للنظارات), luxury matte black hard-shell glasses cases, micro-fiber cleaning cloth patterned texture, and retail boutique packaging.",
    objective: "Craft a modern, bilingual optical identity that feels at home in both high-end European fashion boutiques and prestigious Gulf shopping arcades.",
    creativeApproach: "Constructed symmetrical geometric type wherein the Latin 'O4' mirrors the flow of the Arabic '٥٤', accompanied by deep midnight navy packaging.",
    deliverables: [
      "Bilingual Latin & Arabic Monogram Wordmark",
      "Luxury Matte Embossed Hard Eyewear Cases",
      "Repeating Monogram Microfiber Cleaning Cloth",
      "Boutique Shopping Bags & Brushed Aluminium Badges"
    ],
    isFeatured: true
  },
  {
    slug: "nesto-fashion",
    name: "Nesto Fashion India",
    client: "Nesto Group",
    category: "Video & Reels",
    serviceCategories: ["Fashion Reels", "Eid Commercial", "Television Ad", "Streetwear Shoot"],
    year: "2024",
    location: "India",
    heroImage: "/images/portfolio/page-68.png",
    cropImage: "/images/portfolio/crops/crop-68.jpg",
    galleryImages: [
      "/images/portfolio/page-67.png",
      "/images/portfolio/page-68.png"
    ],
    tagline: "Streetwise Vibrancy & Heartwarming Festive Narratives",
    shortDescription: "High-energy youth fashion reel ads capturing urban streetwear trends, alongside a heartwarming family-centric Eid commercial broadcast across regional television and social channels.",
    objective: "Drive festive retail footfall and reinforce Nesto Fashion as an accessible yet style-conscious apparel destination.",
    creativeApproach: "Split into two distinct visual voices: fast, gritty 9:16 vertical cuts for Gen-Z urban trends, and cinematic, warm 16:9 widescreen cinematography for festive family reunions.",
    deliverables: [
      "Urban Youth Streetwear Instagram Reels Series",
      "Prime-Time Regional TV Commercial for Eid Collections",
      "In-Store Digital Display Video Loops",
      "Social Promotional Cuts & Festive Campaign Posters"
    ],
    isFeatured: true
  },
  {
    slug: "fastrack",
    name: "Fastrack — Watch Edition",
    client: "Fastrack India",
    category: "Video & Reels",
    serviceCategories: ["Product Videography", "Macro Cinematography", "Motion Design", "Social Reels"],
    year: "2024",
    location: "India",
    heroImage: "/images/portfolio/page-70.png",
    cropImage: "/images/portfolio/crops/crop-70.jpg",
    galleryImages: [
      "/images/portfolio/page-70.png"
    ],
    tagline: "Macro Precision Highlighting Gunmetal Edge and Craft",
    shortDescription: "Sleek close-up product reel focusing on metallic bevels, dial intricacies, and wrist lifestyle styling for the Fastrack watch collection.",
    objective: "Highlight youth appeal, rugged metallic construction, and effortless everyday styling.",
    creativeApproach: "High-contrast macro lens sweeps, rhythmic percussion editing, and subtle lighting shifts across the brushed gunmetal bezel.",
    deliverables: [
      "Macro Product Showcase Social Reel",
      "Vertical Short-Form Motion Campaign",
      "Retail Counter Loop Video Assets"
    ],
    isFeatured: true
  },
  {
    slug: "st-thomas-hospital",
    name: "St. Thomas Hospital Chethipuzha",
    client: "St. Thomas Hospital",
    category: "Advertising",
    serviceCategories: ["Highway Hoardings", "Vernacular Copywriting", "Medical Camps", "NABH Campaign"],
    year: "2024-2025",
    location: "Kerala, India",
    heroImage: "/images/portfolio/page-41.png",
    cropImage: "/images/portfolio/crops/crop-41.jpg",
    galleryImages: [
      "/images/portfolio/page-39.png",
      "/images/portfolio/page-40.png",
      "/images/portfolio/page-41.png",
      "/images/portfolio/page-42.png",
      "/images/portfolio/page-43.png"
    ],
    tagline: "Witty, Empathetic Healthcare Copywriting That Stops Traffic",
    shortDescription: "Witty, empathetic large-format highway hoardings addressing joint replacement, sports injury recovery, hair transplant plastic surgery, and clinical certifications.",
    objective: "De-stigmatize healthcare consultations and drive patient appointments for advanced orthopaedics and reconstructive surgery.",
    creativeApproach: "Combining bold humorous caricature illustrations and punchy colloquial Malayalam copywriting that captures immediate attention on busy highways.",
    deliverables: [
      "Three Large-Scale Unipole Highway Hoardings",
      "Hair Transplant & Plastic Surgery Camp Campaign",
      "NABH Quality Audit Day Recognition Materials",
      "International Nurses Day & World Parkinson's Posts"
    ],
    isFeatured: true
  },
  {
    slug: "abeer-hospital",
    name: "Abeer Hospital",
    client: "Al Abeer Medical Group",
    category: "Print Design",
    serviceCategories: ["Privilege Health Cards", "Free Health Vouchers", "Friday Clinic Rollup", "Maternity Campaign"],
    year: "2024",
    location: "Oman / India",
    heroImage: "/images/portfolio/page-34.png",
    cropImage: "/images/portfolio/crops/crop-34.jpg",
    galleryImages: [
      "/images/portfolio/page-31.png",
      "/images/portfolio/page-32.png",
      "/images/portfolio/page-33.png",
      "/images/portfolio/page-34.png",
      "/images/portfolio/page-35.png"
    ],
    tagline: "Tangible Patient Privilege Cards & Community Preventive Care",
    shortDescription: "Holistic patient acquisition collateral including foiled Health Checkup Gift Vouchers (₹700 Value), luxury Abeer Womens Health Privilege Cards, Friday Specialist Clinic rollups, and Mother & Child campaigns.",
    objective: "Empower families to access routine diagnostic screenings and establish maternal healthcare loyalty.",
    creativeApproach: "A tactile, premium print experience utilizing gold foil accents, deep emerald green cards, and magenta patient privilege cards.",
    deliverables: [
      "Embossed Patient Health Checkup Gift Vouchers",
      "Abeer Women's Health Privilege PVC Cards",
      "Friday Specialist Clinic Rollup Exhibition Banners",
      "Abeer Mom & Child Comprehensive Social Campaign"
    ]
  },
  {
    slug: "alzaki-medical",
    name: "Alzaki Medical Centre",
    client: "Al Zaki Medical Centre",
    category: "Social Media",
    serviceCategories: ["Orthodontic Rollups", "A4 Treatment Flyers", "Ramadan Health Packages", "Social Creatives"],
    year: "2024-2025",
    location: "Sur, Sultanate of Oman",
    heroImage: "/images/portfolio/page-19.png",
    cropImage: "/images/portfolio/crops/crop-19.jpg",
    galleryImages: [
      "/images/portfolio/page-17.png",
      "/images/portfolio/page-18.png",
      "/images/portfolio/page-19.png",
      "/images/portfolio/page-20.png"
    ],
    tagline: "Smile Transformations & Seasonal Wellness Programs",
    shortDescription: "Comprehensive orthodontic transformation marketing, 5 types of dental braces informational rollup standees, A4 treatment guides, and seasonal Ramadan wellness campaign packages.",
    objective: "Educate families in Oman on modern clear aligner solutions and routine preventive diagnostics.",
    creativeApproach: "Bright, comforting clinical photography, clean bilingual Arabic/English information hierarchy, and transparent pricing packages.",
    deliverables: [
      "5-Type Orthodontic Treatment Rollup Standee",
      "Double-Sided Patient A4 Smile Journey Flyer",
      "Ramadan Kareem Laser & Health Checkup Social Sets",
      "Sur Clinic Doctor Profile & Appointment Announcement Ads"
    ]
  },
  {
    slug: "aster-oman",
    name: "Aster Oman",
    client: "Aster Al Khair Hospital",
    category: "Social Media",
    serviceCategories: ["Children's Carnival Standee", "National Day Campaigns", "Doctor Profile Announcements", "Surgical Camps"],
    year: "2024",
    location: "Ibri & Ma'abela, Oman",
    heroImage: "/images/portfolio/page-30.png",
    cropImage: "/images/portfolio/crops/crop-30.jpg",
    galleryImages: [
      "/images/portfolio/page-27.png",
      "/images/portfolio/page-28.png",
      "/images/portfolio/page-29.png",
      "/images/portfolio/page-30.png"
    ],
    tagline: "Engaging Community Health & Celebratory National Campaigns",
    shortDescription: "Playful Childrens Carnival rollup standee with painting competitions, Oman National Day dental campaigns, gastroenterology checkup packages, and specialist welcoming creatives.",
    objective: "Reinforce Aster's caring identity through joyful family interactions and accessible medical services.",
    creativeApproach: "Vibrant handprint illustrations for youth events paired with trusted teal clinical layouts for specialized medical departments.",
    deliverables: [
      "Children's Carnival Interactive Event Rollup Standee",
      "Oman National Day Celebration Social Creatives",
      "Official Signing Ceremony Announcement Collateral",
      "Departmental Doctor Profile & Surgical Camp Graphics"
    ]
  },
  {
    slug: "believers-hospital",
    name: "Believers Hospital",
    client: "Believers Church Medical College",
    category: "Outdoor Branding",
    serviceCategories: ["Environmental Wall Design", "Elevator Murals", "Milestone Celebrations", "Cultural Posts"],
    year: "2024",
    location: "Thiruvalla, Kerala",
    heroImage: "/images/portfolio/page-38.png",
    cropImage: "/images/portfolio/crops/crop-38.jpg",
    galleryImages: [
      "/images/portfolio/page-36.png",
      "/images/portfolio/page-37.png",
      "/images/portfolio/page-38.png"
    ],
    tagline: "Transforming Clinical Corridors into Calming Visual Murals",
    shortDescription: "Large-format environmental wall installation for Believers International Heart Centre (BIHC) inside hospital lobby/elevators, alongside milestone campaigns and festival greetings.",
    objective: "Educate outpatients on cardiac lifestyle risk factors while reducing procedural anxiety through calming graphic installations.",
    creativeApproach: "Soothing pastel pink and medical crimson palette with clear visual icons explaining hypertension, cholesterol, and preventive steps.",
    deliverables: [
      "Believers International Heart Centre Lobby Wall Graphic",
      "Metropolitan Father Enthronement Milestone Series",
      "Cultural Festive Social Creatives (Onam, Christmas, Independence)"
    ]
  },
  {
    slug: "ontreo",
    name: "Ontreo Technologies",
    client: "Ontreo",
    category: "Branding",
    serviceCategories: ["Brand Identity", "Minimal Typography", "Executive Stationery", "3D Office Signage"],
    year: "2024",
    location: "Global",
    heroImage: "/images/portfolio/page-66.png",
    cropImage: "/images/portfolio/crops/crop-66.jpg",
    galleryImages: [
      "/images/portfolio/page-66.png"
    ],
    tagline: "Zen Brushstroke Meets Crisp Modern Corporate Typography",
    shortDescription: "Artistic corporate identity featuring an expressive circular zen brushstroke 'O' paired with crisp geometric sans-serif lettering, corporate stationery, business cards, and 3D architectural office signage.",
    objective: "Establish an effortless, modern corporate persona conveying open collaboration and boundless digital innovation.",
    creativeApproach: "A tactile ink-brushed ensō ring merged with crisp geometric letterforms in striking corporate cobalt blue and pure white.",
    deliverables: [
      "Master Logomark Suite (Digital & Vector)",
      "Executive Business Stationery & Clipboard Sets",
      "3D Architectural Wall Signage Specifications",
      "Brand Pattern Standards Manual"
    ]
  },
  {
    slug: "kans-group",
    name: "Kans Group",
    client: "Kans Group",
    category: "Corporate Design",
    serviceCategories: ["Brand Identity", "Employee Apparel", "Corporate Merchandise", "ID Card Systems"],
    year: "2024",
    location: "GCC / India",
    heroImage: "/images/portfolio/page-62.png",
    cropImage: "/images/portfolio/crops/crop-62.jpg",
    galleryImages: [
      "/images/portfolio/page-62.png"
    ],
    tagline: "Sophisticated Monogram Unifying Coworking, Consulting & Academy",
    shortDescription: "Contemporary monogram brand identity in black and warm gold, employee lanyards & ID badges, branded team apparel, matte black coffee tumblers, and executive corporate boxes.",
    objective: "Unify Kans Group's multiple business verticals under a singular, high-status executive visual umbrella.",
    creativeApproach: "Bold modern typography utilizing an inverted 'A' glyph with warm ochre gold and matte obsidian black.",
    deliverables: [
      "Black & Gold Corporate Identity Master Guide",
      "Employee Lanyard & Magnetic ID Badge Systems",
      "Executive Team Uniforms & Embroidered Polos",
      "Corporate Ceramic Tumblers & Welcome Gift Boxes"
    ]
  },
  {
    slug: "luxe-light",
    name: "AV Luxe LED Lights",
    client: "Luxe Light",
    category: "Social Media",
    serviceCategories: ["Product Launch Creatives", "Solar Series", "Flood Light Ads", "Social Campaigns"],
    year: "2024-2025",
    location: "India",
    heroImage: "/images/portfolio/page-54.png",
    cropImage: "/images/portfolio/crops/crop-54.jpg",
    galleryImages: [
      "/images/portfolio/page-54.png",
      "/images/portfolio/page-55.png",
      "/images/portfolio/page-56.png",
      "/images/portfolio/page-57.png"
    ],
    tagline: "Illuminating Architectural Form & Energy-Saving Innovation",
    shortDescription: "Striking illuminated product creatives highlighting Pearl outdoor wall fixtures, Claro surface panels, Zeero solar street lighting, and Loco heavy-duty flood lights.",
    objective: "Position Luxe Lights as the premier choice for architects, interior designers, and energy-conscious commercial developers.",
    creativeApproach: "Dark atmospheric architectural backdrops pierced by realistic luminescent beam angles, showcasing lumens, color rendering index, and IP waterproofing.",
    deliverables: [
      "Pearl & Claro Architectural Lighting Series",
      "Zeero Solar Street Lighting Feature Creatives",
      "Loco Die-Cast Aluminum Industrial Spotlight Set",
      "Anniversary & Festive Showcase Campaigns"
    ]
  },
  {
    slug: "future-factory",
    name: "Future Factory Global Education",
    client: "Future Factory",
    category: "Outdoor Branding",
    serviceCategories: ["Exhibition Standees", "University Partnerships", "Admission Campaigns"],
    year: "2024",
    location: "Global / Georgia",
    heroImage: "/images/portfolio/page-58.png",
    cropImage: "/images/portfolio/crops/crop-58.jpg",
    galleryImages: [
      "/images/portfolio/page-58.png",
      "/images/portfolio/page-59.png"
    ],
    tagline: "Inspiring Future Medical Aspirants with Authentic Proof",
    shortDescription: "High-impact vertical rollup standees for international university admissions representing the University of Georgia for aspiring doctors and nurses.",
    objective: "Inspire confidence among parents and students seeking verified medical degree pathways abroad.",
    creativeApproach: "Bold red and emerald color blocking paired with candid student cohort photography directly on European university campuses.",
    deliverables: [
      "Official University Representative Rollup Standees",
      "Study in Georgia University Verification Banners",
      "Admission Hotline & Helpline Contact Signage"
    ]
  },
  {
    slug: "studbroad",
    name: "Studbroad Overseas Education",
    client: "Studbroad International",
    category: "Brochure & Publication",
    serviceCategories: ["Course Guidebook", "Infographic Design", "Country Profiles", "Print Brochure"],
    year: "2024",
    location: "India / Europe",
    heroImage: "/images/portfolio/page-60.png",
    cropImage: "/images/portfolio/crops/crop-60.jpg",
    galleryImages: [
      "/images/portfolio/page-60.png"
    ],
    tagline: "Approachable, Structured Roadmaps for Studying in Europe",
    shortDescription: "Vibrant, structured international education guidebook detailing admissions across Germany, Georgia, and UK, featuring custom infographics and IELTS coaching benchmarks.",
    objective: "Demystify visa hurdles, tuition structures, and language requirements into an approachable handbook.",
    creativeApproach: "Editorial square-format layout with cheerful secondary palettes (cyan, golden yellow, crimson) structuring each destination country.",
    deliverables: [
      "16-Page Square Editorial Overseas Study Guide",
      "Country Pathway Info-Charts (Germany / Georgia)",
      "IELTS Coaching Methodology Spread"
    ]
  },
  {
    slug: "justown-shawaya",
    name: "Justown Shawaya & Food Brands",
    client: "Justown / Haji Mandhi",
    category: "Social Media",
    serviceCategories: ["Food Photography Styling", "Teaser Banners", "Launch Promotions"],
    year: "2024",
    location: "Perinthalmanna / Tirurkad",
    heroImage: "/images/portfolio/page-48.png",
    cropImage: "/images/portfolio/crops/crop-48.jpg",
    galleryImages: [
      "/images/portfolio/page-48.png",
      "/images/portfolio/page-49.png"
    ],
    tagline: "Fiery Flavor Explosions That Spark Immediate Cravings",
    shortDescription: "Crispy fried chicken, flaming grilled shawaya wraps, and fiery countdown teasers generating viral anticipation for new outlet launches in Tirurkad and Perinthalmanna.",
    objective: "Drive overwhelming opening-week footfalls for culinary destinations.",
    creativeApproach: "Hyper-dynamic flying food elements, fiery embers, and mouthwatering textures paired with bold punchy typography.",
    deliverables: [
      "Flavor Explosion Shawaya Launch Creatives",
      "Serving Soon Teaser & Countdown Banners",
      "Grand Opening Community Invitation Suite"
    ]
  },
  {
    slug: "peter-england",
    name: "Peter England Store Walk-In",
    client: "Peter England Retail",
    category: "Video & Reels",
    serviceCategories: ["Retail Reel", "Fashion Direction", "Store Walkthrough", "Festive Promo"],
    year: "2024",
    location: "India",
    heroImage: "/images/portfolio/page-71.png",
    cropImage: "/images/portfolio/crops/crop-71.jpg",
    galleryImages: [
      "/images/portfolio/page-71.png"
    ],
    tagline: "High-Energy Storefront Engagement for Festive Menswear",
    shortDescription: "Dynamic on-location retail walk-in reel spotlighting festive menswear, premium linen shirts, and celebratory offers.",
    objective: "Drive young professionals and festive shoppers into physical flagship stores.",
    creativeApproach: "Snappy handheld walk-through cinematography synced to modern beats, highlighting texture, fit, and promotional offers.",
    deliverables: [
      "Storefront Walk-In Social Reel",
      "Eid Festival Promotion Video Hook",
      "High-Impact Vertical Ads Cut"
    ]
  }
];

export const CATEGORIES: ProjectCategory[] = [
  "All Work",
  "Branding",
  "Social Media",
  "Print Design",
  "Brochure & Publication",
  "Advertising",
  "Video & Reels",
  "Outdoor Branding",
  "Corporate Design"
];

