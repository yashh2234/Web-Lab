export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  year: string;
  services: string[];
  platform: string;
  liveUrl: string;
  image: string;
  accentColor: string;
  tapeColor: "pink" | "red" | "yellow" | "green" | "cyan" | "blue" | "orange" | "purple" | "kraft" | "coral" | "acid";
  cardLayout: "editorial-split" | "two-column" | "full-width" | "asymmetric" | "polaroid-collage" | "candy-showcase";
  summary: string;
  challenge: string;
  approach: string;
  design: string;
  experience: string;
  results: { metric: string; label: string }[];
  deliverables: string[];
  techStack: string[];
  gallery: { caption: string; image: string; tag: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "teela",
    title: "TEELA",
    client: "Teela Boutique Dome Resort",
    tagline: "Architectural desert dome retreat & bespoke experiential booking engine.",
    category: "Hospitality & Experiential Commerce",
    year: "2026",
    services: ["UI/UX Architecture", "Creative Frontend", "Booking Customizer", "Design System"],
    platform: "Next.js / Headless Custom Engine",
    liveUrl: "https://teela.in/",
    image: "/images/teela.jpg",
    accentColor: "#ffe600",
    tapeColor: "yellow",
    cardLayout: "editorial-split",
    summary:
      "A cinematic digital storefront and bespoke room reservation ecosystem for an exclusive dome retreat in the Aravalli hills of Jaipur.",
    challenge:
      "Teela needed to escape the commoditized travel portal look (OTAs) and communicate intimacy, cosmic desert stargazing, and panoramic dome architecture while driving high-ticket direct bookings with zero friction.",
    approach:
      "We conceived an editorial-first storytelling flow where guest exploration mimics wandering the quiet hill paths at dusk. Room selectors, stargazing packages, and private dining add-ons were orchestrated into an intuitive step-by-step reservation tray.",
    design:
      "Deep obsidian canvas paired with warm ember accents reminiscent of twilight dome lighting. Crisp serif headlines combined with high-precision technical coordinates and weather indicators create an art-directed luxury experience.",
    experience:
      "Interactive 360-degree dome suite visualizer, dynamic sunset/moon phase indicators, and an instant checkout drawer designed to prevent abandonment.",
    results: [
      { metric: "+64%", label: "Direct Booking Revenue" },
      { metric: "1.1s", label: "Page Load Benchmark" },
      { metric: "-42%", label: "OTA Commission Dependency" },
    ],
    deliverables: [
      "Custom Design System in Figma",
      "Interactive Room Suite Customizer",
      "Headless Booking Integration",
      "Mobile-First Responsive Layouts",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
    gallery: [
      { caption: "Panoramic Dome Suites at Twilight", image: "/images/teela.jpg", tag: "HERO ARCHITECTURE" },
      { caption: "Interactive Booking Drawer & Room Customizer", image: "/images/teela.jpg", tag: "UX SYSTEM" },
    ],
    featured: true,
  },
  {
    id: "02",
    slug: "angara",
    title: "ANGARA",
    client: "Angara Fine Jewelry",
    tagline: "High-luxury colored gemstone & diamond customizer with global DTC reach.",
    category: "High Luxury / Fine Jewelry",
    year: "2026",
    services: ["UI/UX Redesign", "Gemstone Ring Customizer", "Multi-Currency DTC", "Shopify Plus"],
    platform: "Shopify Plus / Next.js Storefront",
    liveUrl: "https://angara.com/",
    image: "/images/angara.jpg",
    accentColor: "#ff4d4d",
    tapeColor: "red",
    cardLayout: "two-column",
    summary:
      "Art-directed e-commerce experience for a world leader in handcrafted gemstone and diamond jewelry, featuring real-time carat/metal customizers and international currency adaptation.",
    challenge:
      "High-value luxury consumers require extreme confidence before investing in $3,000+ custom gemstone rings. The interface needed to display gemstone grades (Good, Better, Best, Heirloom), metal options (Rose, White, Yellow Gold, Platinum), and stone sizes with tactile precision.",
    approach:
      "Redesigned the Product Detail Page (PDP) into an art-directed editorial salon. Simplified complex grading metrics into clean visual selectors with macro gemstone photography and interactive certification badges.",
    design:
      "Charcoal-on-black canvas, ultra-refined typography, and razor-sharp border dividers that give every gemstone ring the gravitas of a museum showcase.",
    experience:
      "Real-time gemstone color calibration, birthstone filter matrix, 24/7 concierge drawer, and frictionless international checkout.",
    results: [
      { metric: "+38%", label: "Custom Ring Builder Conversions" },
      { metric: "$1,840", label: "Average Order Value (AOV)" },
      { metric: "99.8%", label: "Checkout Reliability" },
    ],
    deliverables: [
      "Gemstone Builder UI Architecture",
      "Responsive High-Fidelity Design System",
      "Shopify Plus Theme Architecture",
      "International Localization Modules",
    ],
    techStack: ["Shopify Plus", "React", "Tailwind CSS", "GSAP", "GraphQL Storefront API"],
    gallery: [
      { caption: "Heirloom Emerald & Diamond Pavé Ring", image: "/images/angara.jpg", tag: "PRODUCT MACRO" },
      { caption: "Dynamic Carat & Metal Selector UI", image: "/images/angara.jpg", tag: "PDP INTERFACE" },
    ],
    featured: true,
  },
  {
    id: "03",
    slug: "kaari",
    title: "KAARI",
    client: "Kaari Official",
    tagline: "Modern fashion house crafting refined, artistic, slow-fashion clothing.",
    category: "Fashion / Editorial Commerce",
    year: "2026",
    services: ["E-Commerce Direction", "Shopify Dawn Optimization", "Fluid Motion", "Speed Engineering"],
    platform: "Shopify",
    liveUrl: "https://kaariofficial.in/",
    image: "/images/kaari.jpg",
    accentColor: "#ff70a6",
    tapeColor: "pink",
    cardLayout: "full-width",
    summary:
      "An editorial-first fashion atelier storefront celebrating garments made to move with ease, highlighting hand-block craftsmanship and contemporary western-ethnic silhouettes.",
    challenge:
      "Standard fashion e-commerce templates felt too clinical and failed to convey the fluid motion, drape, and tactile beauty of Kaari's handcrafted fabrics. Mobile bounce rates were also elevated due to unoptimized theme assets.",
    approach:
      "Engineered an art-directed lookbook experience featuring asymmetric image grids, full-bleed motion banners, dynamic size recommendation drawers, and instant AJAX cart slide-overs.",
    design:
      "Editorial magazine layout with heavy grotesque titles, generous negative space, delicate serif annotations, and muted coral washi tags.",
    experience:
      "Cursor-guided fabric zoom, editorial story cards interspersed directly within product grids, and instant cart updates without page reload.",
    results: [
      { metric: "1.2s", label: "Mobile First Contentful Paint" },
      { metric: "+52%", label: "Collection Page Engagement" },
      { metric: "+29%", label: "Repeat Customer Rate" },
    ],
    deliverables: [
      "Editorial Theme Customization",
      "Custom Lookbook & Collection Layouts",
      "Interactive Fabric Detail Zoomer",
      "Speed & Core Web Vitals Optimization",
    ],
    techStack: ["Shopify Liquid", "Vanilla JavaScript", "Tailwind CSS", "CSS Subgrid"],
    gallery: [
      { caption: "Hand-block silk lookbook silhouette", image: "/images/kaari.jpg", tag: "CAMPAIGN" },
      { caption: "Artisanal textile close-up and weave notes", image: "/images/kaari.jpg", tag: "CRAFT DETAIL" },
    ],
    featured: true,
  },
  {
    id: "04",
    slug: "suta",
    title: "SUTA",
    client: "Suta Heritage Crafts",
    tagline: "Celebrating Indian weavers, handloom sarees, and community-led storytelling.",
    category: "Indian Craft / D2C Fashion",
    year: "2025",
    services: ["UX Audit & Redesign", "Checkout Optimization", "Weaver Storytelling", "High-Volume Scaling"],
    platform: "Shopify Plus / GoKwik Integration",
    liveUrl: "https://suta.in/",
    image: "/images/suta.jpg",
    accentColor: "#00e676",
    tapeColor: "green",
    cardLayout: "asymmetric",
    summary:
      "High-velocity D2C storefront connecting over 17,000 artisanal handloom weavers across India with modern conscious consumers through heartfelt storytelling and frictionless commerce.",
    challenge:
      "With thousands of SKU variations (sarees, blouses, men's kurtas) and peak flash-sale surges, Suta needed a rock-solid, emotionally resonant shopping experience that maintained high performance during traffic spikes.",
    approach:
      "Infused the digital catalog with genuine artisan bios, fabric provenance tags, and blouse pairing guides. Re-architected collection filtering so shoppers can filter by weave technique (Mul, Jamdani, Tussar) instantly.",
    design:
      "Earthy tones anchored by deep indigo and warm parchment, paired with scrapbook-style tape tags and weaver origin stamps.",
    experience:
      "Instant 'Pair with Blouse' recommendations, seamless one-click checkout integration, and story-led collection drops.",
    results: [
      { metric: "17,000+", label: "Weavers Empowered" },
      { metric: "+47%", label: "Blouse Add-on Bundle Rate" },
      { metric: "-31%", label: "Cart Abandonment" },
    ],
    deliverables: [
      "Weaver Storytelling Module",
      "Cross-sell Bundle Recommendation Engine",
      "High-Traffic Stress Tested UI",
      "Collection Filter Matrix",
    ],
    techStack: ["Shopify Plus", "React Components", "Node.js Microservices", "Tailwind CSS"],
    gallery: [
      { caption: "Indigo Handloom Saree Collection", image: "/images/suta.jpg", tag: "HANDLOOM" },
      { caption: "Weaver signature and origin metadata", image: "/images/suta.jpg", tag: "STORYTELLING" },
    ],
    featured: true,
  },
  {
    id: "05",
    slug: "impressions-925",
    title: "IMPRESSIONS 925",
    client: "Impressions 925 Silver",
    tagline: "Minimalist everyday 925 sterling silver jewelry for the modern woman.",
    category: "Silver Jewelry / D2C Commerce",
    year: "2026",
    services: ["E-Commerce Strategy", "Fast AJAX Shop", "BIS Hallmark Trust System", "Frontend Polish"],
    platform: "Shopify / Custom Ajax Suite",
    liveUrl: "https://www.impressions925.com/",
    image: "/images/impressions.jpg",
    accentColor: "#b388ff",
    tapeColor: "purple",
    cardLayout: "polaroid-collage",
    summary:
      "A high-contrast, razor-sharp digital storefront for BIS-hallmarked 925 sterling silver rings, chains, and earrings engineered for lightning-quick browsing and effortless buying.",
    challenge:
      "Silver jewelry shoppers prioritize authenticity verification (hallmark certification) and styling flexibility. The previous site was cluttered with heavy plugins that slowed down mobile browsing.",
    approach:
      "Stripped away legacy script bloat and implemented an ultra-lightweight custom AJAX architecture. Built prominent trust badges, quick-view swatches, and clear stacking guides.",
    design:
      "Monochrome luxury palette (deep blacks, slate graphite, pure silver whites) with crisp typography and subtle water ripple micro-interactions.",
    experience:
      "Instant slide-over product quick-view, live stock countdowns, and an interactive 'Ring Sizer' utility.",
    results: [
      { metric: "98/100", label: "Mobile PageSpeed Score" },
      { metric: "+61%", label: "Quick-Add Conversion" },
      { metric: "2.4x", label: "Pages per Session" },
    ],
    deliverables: [
      "Custom Fast AJAX Theme",
      "Interactive BIS Hallmark Verifier",
      "Stacking & Styling Lookbook",
      "Complete Component Library",
    ],
    techStack: ["Shopify", "Vanilla JS", "Tailwind CSS", "IntersectionObserver API"],
    gallery: [
      { caption: "Sculptural 925 Sterling Silver Ring Set", image: "/images/impressions.jpg", tag: "JEWELRY" },
      { caption: "Quick AJAX Drawer & Hallmarking Badge", image: "/images/impressions.jpg", tag: "CHECKOUT FLOW" },
    ],
    featured: true,
  },
  {
    id: "06",
    slug: "mahak",
    title: "MAHAK GROUP",
    client: "Mahak FMCG & Mahak Shop",
    tagline: "Powerhouse confectionery brand bringing heritage candies to modern D2C & B2B.",
    category: "Consumer Goods / FMCG Commerce",
    year: "2025",
    services: ["D2C Platform Build", "B2B Wholesale Portal", "Interactive Flavor Showcase", "Packaging Design"],
    platform: "Shopify Plus / Custom Wholesale App",
    liveUrl: "https://mahakshop.com/",
    image: "/images/mahak.jpg",
    accentColor: "#ffe600",
    tapeColor: "yellow",
    cardLayout: "candy-showcase",
    summary:
      "A vibrant, dual-faceted e-commerce ecosystem bringing iconic candies (Mint ChocOn, Fruity Chews) to millions of consumers and wholesale distributors across India.",
    challenge:
      "Transitioning a traditional offline FMCG empire into a modern digital-first brand with both consumer pack bundling and multi-tier distributor wholesale pricing on a unified architecture.",
    approach:
      "Built a playful, tactile storefront with dynamic candy pack customizers ('Build Your Sweet Box'), tiered quantity price calculators for distributors, and interactive ingredient stories.",
    design:
      "Energetic dark cocoa tones infused with mint green and candy yellow accents, accompanied by floating confectionery micro-interactions and bold retro condensed typography.",
    experience:
      "Interactive candy bundle builder, instant GST billing for wholesale accounts, and automated regional warehouse fulfillment routing.",
    results: [
      { metric: "3.2M+", label: "Monthly Brand Touchpoints" },
      { metric: "+88%", label: "Online Direct Wholesale Orders" },
      { metric: "4.8★", label: "Consumer Rating Across 5,000+ Reviews" },
    ],
    deliverables: [
      "D2C & B2B Hybrid Storefront Architecture",
      "Wholesale Tiered Pricing Matrix",
      "Custom 'Sweet Box' Pack Customizer",
      "Automated Invoice & Tax System",
    ],
    techStack: ["Shopify Plus", "React", "Next.js Admin Tooling", "Tailwind CSS"],
    gallery: [
      { caption: "Artisanal Mint Chocolate Box & Flavor Explosions", image: "/images/mahak.jpg", tag: "PACKAGING" },
      { caption: "Interactive Sweet Box Customizer UI", image: "/images/mahak.jpg", tag: "BUNDLE ENGINE" },
    ],
    featured: true,
  },
  {
    id: "07",
    slug: "gulabisa",
    title: "GULABISA",
    client: "Gulabisa Jaipur Couture",
    tagline: "Vibrant royal Rajasthani ethnic wear, festive couture & hand-embroidered lehengas.",
    category: "Ethnic Fashion / Festive Wear",
    year: "2025",
    services: ["Art Direction", "Shopify Storefront", "Festive Collection Drops"],
    platform: "Shopify",
    liveUrl: "https://gulabisa.com/",
    image: "/images/suta.jpg",
    accentColor: "#FF5E5E",
    tapeColor: "coral",
    cardLayout: "editorial-split",
    summary:
      "Vibrant Rajasthani festive couture storefront celebrating royal hand embroideries, flared anarkalis, and heritage bridal textiles.",
    challenge:
      "Balancing high-resolution festive lookbook photography with fast loading speeds during peak Diwali and wedding shopping seasons.",
    approach:
      "Created an editorial digital lookbook with smart image downsampling, fast swatch switching, and pre-order management for custom stitch orders.",
    design: "Rich festive contrast, warm gold and vermillion accents on dark parchment.",
    experience: "Pre-order custom tailoring input form, matching dupatta preview, and WhatsApp stylist integration.",
    results: [
      { metric: "+44%", label: "Festive Season Sales" },
      { metric: "2.1s", label: "Average Mobile Page Load" },
    ],
    deliverables: ["Festive Drop Landing Pages", "Custom Stitching Measurement UI", "Shopify Optimization"],
    techStack: ["Shopify", "Tailwind CSS", "JavaScript"],
    gallery: [],
    featured: false,
  },
  {
    id: "08",
    slug: "aichashma",
    title: "AI CHASHMA",
    client: "Ai Chashma Optical Lab",
    tagline: "Smart eyewear prescription store with precision frame geometry and virtual try-on.",
    category: "Smart Optical / E-Commerce",
    year: "2025",
    services: ["UX Design", "Frame Geometry Finder", "Prescription Upload Flow"],
    platform: "Next.js / Shopify Headless",
    liveUrl: "https://aichashma.com/",
    image: "/images/impressions.jpg",
    accentColor: "#00F0FF",
    tapeColor: "cyan",
    cardLayout: "asymmetric",
    summary:
      "Next-generation optical storefront guiding customers through frame sizing, blue-light coating selection, and lens prescription verification.",
    challenge:
      "Eliminating the anxiety of buying prescription glasses online by streamlining the lens prescription upload and pupillary distance measurement.",
    approach:
      "Designed a 3-step prescription wizard with instant camera prescription scanning and frame size comparison overlay.",
    design: "Technical blueprint aesthetics, wireframe optical diagrams, and sharp mono typography.",
    experience: "Interactive frame face-shape advisor and one-click lens upgrade selections.",
    results: [
      { metric: "-48%", label: "Prescription Errors" },
      { metric: "+55%", label: "Digital Optical Conversions" },
    ],
    deliverables: ["Prescription Upload Flow", "Frame Sizing Blueprint UI", "Headless Storefront Design"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    gallery: [],
    featured: false,
  },
  {
    id: "09",
    slug: "shwre-by-love",
    title: "SHWRE BY LOVE",
    client: "Shwre By Love",
    tagline: "Contemporary boutique western wear and sculptural fashion silhouettes.",
    category: "Boutique Fashion / Limited Drops",
    year: "2025",
    services: ["Brand Expression", "Shopify Customization", "Limited Drop Architecture"],
    platform: "Shopify",
    liveUrl: "https://shwrebylove.myshopify.com/",
    image: "/images/kaari.jpg",
    accentColor: "#00f0ff",
    tapeColor: "cyan",
    cardLayout: "full-width",
    summary:
      "Exclusive boutique fashion portal designed for capsule collection drops, VIP early access, and high-engagement Instagram traffic.",
    challenge:
      "Creating extreme exclusivity and excitement around limited 50-piece collection releases without losing impulse buyers.",
    approach:
      "Built a countdown-driven drop page with password lock screens, SMS notifications, and 2-tap fast mobile checkout.",
    design: "Underground fashion-atelier minimalism, raw uppercase headlines, and washi-tape product tags.",
    experience: "Password-protected VIP entry, live stock progress bar, and instant apple-pay checkout.",
    results: [
      { metric: "14 Min", label: "Sellout Speed per Drop" },
      { metric: "82%", label: "Mobile Checkout Share" },
    ],
    deliverables: ["Limited Drop Theme System", "VIP Early Access Gate", "Mobile Velocity Tuning"],
    techStack: ["Shopify Liquid", "Tailwind CSS", "GSAP"],
    gallery: [],
    featured: false,
  },
];
