export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  capabilities: string[];
  deliverables: string[];
  featuredProjects: string[];
  toolsAndTech: string[];
}

export const SERVICES: Service[] = [
  {
    id: "brand-identity",
    number: "01",
    title: "Brand Identity & Graphic Design",
    tagline: "Distilling Brand Essence into Timeless Visual Systems",
    shortDesc: "Logo design, comprehensive brand identity systems, visual communication, brand guidelines, and corporate identity.",
    fullDesc: "We develop distinctive, enduring visual identity systems that give businesses instant authority and recognition. From meticulously crafted logomarks and bilingual typography to color theory, iconography, and exhaustive brand guidelines books, we equip modern enterprises to communicate with unwavering consistency across every physical and digital touchpoint.",
    capabilities: [
      "Bilingual Typography & Script Crafting (Arabic & English)",
      "Logomark & Monogram Design",
      "Comprehensive Brand Architecture & Guidelines",
      "Corporate Stationery & Executive Collateral",
      "Color Psychology & Palette Systems",
      "Custom Graphic Motifs & Pattern Libraries"
    ],
    deliverables: [
      "Master Brand Guidelines Specification Manual",
      "Vector Logomark Suite (CMYK, RGB, Monochrome, Reversed)",
      "Typography Scale & Pairing Documentation",
      "Business Cards, Letterheads & Envelopes",
      "Corporate Merchandise & Badge Systems"
    ],
    featuredProjects: ["crypto-liveon", "o4-optical", "ontreo", "kans-group", "33-holdings"],
    toolsAndTech: ["Adobe Illustrator", "Figma", "Glyphs", "Adobe Photoshop"]
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media Creative & Marketing",
    tagline: "Feed-Stopping Visuals Engineered for Engagement",
    shortDesc: "Social media strategy, creative posts, campaign design, content planning, and digital audience engagement.",
    fullDesc: "In high-noise digital feeds, generic templates go unnoticed. We engineer bespoke, thumb-stopping visual sequences that turn passive scrollers into passionate brand advocates. Balancing artistic composition with conversion-focused copywriting, we manage content calendars that sustain momentum and amplify brand relevance.",
    capabilities: [
      "High-Impact Carousel & Static Post Design",
      "Strategic Monthly Content Calendars",
      "Healthcare & Corporate Awareness Series",
      "Product Launch Teaser Campaigns",
      "Vernacular & Culturally Resonant Copywriting",
      "Community Engagement & Grid Aesthetic Architecture"
    ],
    deliverables: [
      "High-Resolution Social Media Artworks (1:1, 4:5, 9:16)",
      "Story Templates & Animated Highlight Covers",
      "Campaign Content Roadmaps with Copy Decks",
      "Performance Analytics & Creative Iteration Reviews"
    ],
    featuredProjects: ["premium-naseem", "meitra-hospital", "luxe-light", "haya-gold", "carino"],
    toolsAndTech: ["Adobe Photoshop", "After Effects", "Figma", "Meta Business Suite"]
  },
  {
    id: "print-publication",
    number: "03",
    title: "Print & Publication Design",
    tagline: "Tangible Editorial Sophistication That Inspires Confidence",
    shortDesc: "Brochures, company profiles, flyers, catalogues, booklets, and premium marketing collateral.",
    fullDesc: "Nothing matches the tactile authority of impeccably designed print. We craft multi-page corporate brochures, medical clinical guides, product catalogues, and annual publications with Swiss editorial discipline. We balance whitespace, macro-typography, and printing finishes to elevate your brand's presence in boardrooms and client hands.",
    capabilities: [
      "Executive Corporate Profile Books",
      "Clinical Speciality Brochures & Medical Folders",
      "Luxury Product Catalogues & Specification Sheets",
      "Trifold, Z-fold & Gatefold Informational Pamphlets",
      "Custom Print Finishing (Spot UV, Foil Stamping, Embossing)",
      "Pre-Press Color Proofing & Print Management"
    ],
    deliverables: [
      "Press-Ready High-Res CMYK PDFs with Crop & Bleed",
      "Digital Interactive Flipbook & Web-Optimized PDFs",
      "Specialty Paper Stock & Finish Recommendations",
      "Modular Layout Grid Templates for Future Editions"
    ],
    featuredProjects: ["33-holdings", "premium-naseem", "meitra-hospital", "studbroad", "crypto-liveon"],
    toolsAndTech: ["Adobe InDesign", "Adobe Illustrator", "Enfocus PitStop", "ColorSync"]
  },
  {
    id: "advertising-campaigns",
    number: "04",
    title: "Advertising & Campaigns",
    tagline: "Big Ideas That Spark Conversations & Drive Conversions",
    shortDesc: "Creative advertising, promotional campaigns, commercial advertisements, and 360-degree brand activations.",
    fullDesc: "We originate concepts that stick. By combining sharp consumer insights with bold creative storytelling, we architect integrated 360-degree campaigns spanning print, digital billboards, cinema, and social. Every campaign has a central hook that drives brand recall and measurable commercial growth.",
    capabilities: [
      "Conceptual Advertising Idea Generation",
      "Integrated 360° Multi-Channel Rollouts",
      "Festive, Milestone & Seasonal Activations",
      "Commercial Copywriting (English, Malayalam, Arabic)",
      "Retail Footfall & Promotion Campaign Architecture",
      "Brand Repositioning & Market Expansion Stunts"
    ],
    deliverables: [
      "Master Campaign Key Visuals (KV)",
      "Multi-Format Creative Asset Adaptation Kit",
      "Campaign Playbook & Message Architecture",
      "Digital & Physical Deployment Schedules"
    ],
    featuredProjects: ["st-thomas-hospital", "haya-gold", "meitra-hospital", "crypto-liveon", "carino"],
    toolsAndTech: ["Creative Ideation Labs", "Adobe Creative Cloud", "Cinema 4D"]
  },
  {
    id: "video-production",
    number: "05",
    title: "Video Production & Reels",
    tagline: "Cinematic Motion That Commands Full Attention",
    shortDesc: "Professional video shooting, brand films, promotional videos, reels, and commercial broadcast content.",
    fullDesc: "From fast-paced vertical reels for youth apparel brands to cinematic television commercials and theatrical ads, our motion unit produces visual stories that mesmerize. We manage concept ideation, storyboarding, professional cinematography, sound design, and color grading to produce film-grade brand moments.",
    capabilities: [
      "High-Paced Lifestyle & Fashion Instagram Reels",
      "Commercial Broadcast & Television Spots",
      "Cinema Theater Big-Screen Commercials",
      "Corporate Brand Films & Facility Walkthroughs",
      "Dynamic Product Motion & Macro Videography",
      "Audio Post-Production & Sound Design"
    ],
    deliverables: [
      "4K Ultra-HD Master Video Deliverables",
      "Platform-Optimized Cuts (9:16 Vertical, 16:9 Cinema, 1:1 Square)",
      "High-Fidelity Audio Tracks with Licensed Music",
      "Thumbnail Suites & Social Teaser Edits"
    ],
    featuredProjects: ["nesto-fashion", "fastrack", "peter-england", "crypto-liveon"],
    toolsAndTech: ["Sony FX Series", "DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects"]
  },
  {
    id: "digital-marketing",
    number: "06",
    title: "Digital Marketing & SEO",
    tagline: "Data-Driven Precision That Multiplies Your Market Reach",
    shortDesc: "Paid advertising, search engine optimization, audience targeting, and measurable digital growth strategies.",
    fullDesc: "Creative excellence yields true power when matched with algorithmic precision. We construct performance marketing funnels across Meta Ads, Google Ads, and programmatic networks, complemented by organic search optimization. We ensure your creative investments convert into qualified leads, patient appointments, and retail transactions.",
    capabilities: [
      "High-ROI Meta & Instagram Performance Ads",
      "Google Search, Display & Performance Max Campaigns",
      "Technical & Local SEO for Healthcare and Retail",
      "Funnel Architecture & Conversion Rate Optimization",
      "Audience Segmentation & Behavioral Retargeting",
      "Real-Time Attribution Tracking & ROI Dashboards"
    ],
    deliverables: [
      "Configured Ad Accounts with Custom Tracking Pixels",
      "Comprehensive Keyword Strategy & On-Page SEO Audits",
      "Weekly Optimization Logs & Transparent Performance Reports",
      "A/B Tested Creative & Copy Variations"
    ],
    featuredProjects: ["premium-naseem", "abeer-hospital", "justown-shawaya", "studbroad"],
    toolsAndTech: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush", "Ahrefs"]
  },
  {
    id: "website-development",
    number: "07",
    title: "Website Design & Development",
    tagline: "Bespoke Digital Experiences Built for Speed & Conversion",
    shortDesc: "Modern, responsive, ultra-fast, user-friendly websites designed to communicate authority and convert visitors.",
    fullDesc: "Your website is your agency's or enterprise's most vital digital real estate. We architect high-performance, responsive web experiences using contemporary tech stacks like Next.js, React, and Tailwind CSS. We avoid generic templates in favor of bespoke typographic hierarchies, subtle interactions, and frictionless user flows.",
    capabilities: [
      "Modern Next.js & React Full-Stack Architecture",
      "Editorial UI/UX Design & Wireframing",
      "Lightning-Fast Performance & Core Web Vitals Optimization",
      "Mobile-First Responsive Engineering",
      "SEO-Optimized Semantic Code Structures",
      "Direct WhatsApp Booking & CRM Integrations"
    ],
    deliverables: [
      "Production-Grade Clean TypeScript Codebase",
      "Cross-Device & Cross-Browser Tested Digital Experience",
      "Automated Lighthouse Performance > 95 Rating",
      "Custom CMS or Headless Content Integration",
      "Comprehensive Technical Documentation"
    ],
    featuredProjects: ["33-holdings", "crypto-liveon", "ontreo"],
    toolsAndTech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
  {
    id: "outdoor-exhibition",
    number: "08",
    title: "Outdoor & Exhibition Branding",
    tagline: "Commanding Physical Landscapes with Unmatched Scale",
    shortDesc: "Highway hoardings, roll-up standees, wall branding, exhibition stalls, and physical environmental brand experiences.",
    fullDesc: "We take your brand into the physical environment with monumental scale and uncompromising graphic clarity. From towering highway unipoles and hospital environmental corridor murals to portable exhibition kiosks and conference canopies, we ensure your brand turns heads at distance and commands respect up close.",
    capabilities: [
      "Large-Format Highway Hoardings & Unipoles",
      "Architectural Environmental Wall Murals & Graphics",
      "Modular Portable Exhibition Stalls & Canopies",
      "Roll-Up Retractable Standees & Directional Signage",
      "High-Durability Exterior Substrate Selection",
      "On-Site Scale Prototyping & Structural Coordination"
    ],
    deliverables: [
      "Large-Scale High-Resolution Print Masters at 1:1 or 1:10 Ratio",
      "3D Environmental Stall Architectural Visualizations",
      "Modular Exhibition Hardware Specifications",
      "Material, Lighting & Fabrication Directives"
    ],
    featuredProjects: ["naseem-healthcare", "st-thomas-hospital", "haya-gold", "believers-hospital", "future-factory"],
    toolsAndTech: ["Large Format Vector Engines", "Adobe Illustrator", "3D Max / SketchUp"]
  }
];

