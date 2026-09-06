export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  deliverables: string[];
  metricHighlight: string;
  accent: string;
}

export const services: Service[] = [
  {
    id: "01",
    title: "UI / UX DESIGN",
    category: "Product & Interface Architecture",
    description:
      "Crafting research-backed, conversion-engineered digital products and design systems that balance aesthetic beauty with effortless human usability.",
    skills: ["User Journey Mapping", "Design Systems in Figma", "Wireframing & Prototyping", "Information Architecture"],
    deliverables: ["Complete Component System", "Interactive Figma Prototypes", "Developer Hand-off Specs", "Micro-Interaction Blueprints"],
    metricHighlight: "99.4% Design-to-Code Fidelity",
    accent: "#00f0ff",
  },
  {
    id: "02",
    title: "WEB & E-COMMERCE DESIGN",
    category: "Art-Directed Digital Flagships",
    description:
      "Editorial, high-impact web design for fashion, lifestyle, jewelry, and luxury brands that desire to stand out from generic template monotony.",
    skills: ["Editorial Art Direction", "Visual Storytelling", "High-Converting PDPs", "Responsive Composition"],
    deliverables: ["Custom Homepage & Lookbooks", "Product & Collection Templates", "Cart & Checkout Flow", "Art Direction Guidelines"],
    metricHighlight: "+42% Avg. Engagement Lift",
    accent: "#00f0ff",
  },
  {
    id: "03",
    title: "SHOPIFY / SHOPIFY PLUS",
    category: "Commerce Engineering",
    description:
      "Bespoke Shopify theme architecture, Liquid engineering, custom app integration, and checkout optimization built to scale to millions in GMV.",
    skills: ["Shopify Liquid & JSON Templates", "Storefront API & Headless", "Custom Cart Slide-overs", "Bundle & Tiered Builders"],
    deliverables: ["Custom Shopify Theme", "App Stack Architecture", "Sub-2s Speed Optimization", "Multi-Currency Internationalization"],
    metricHighlight: "3.2M+ Shoppers Handled",
    accent: "#00f0ff",
  },
  {
    id: "04",
    title: "FRONTEND DEVELOPMENT",
    category: "Modern Web Engineering",
    description:
      "Building lightning-fast, accessible, and clean digital experiences using modern React, Next.js, TypeScript, and modern CSS architecture.",
    skills: ["Next.js App Router", "React 19 & TypeScript", "Tailwind CSS & Subgrid", "Core Web Vitals Perfection"],
    deliverables: ["Full-Stack Next.js Applications", "Clean Modular Codebase", "Lighthouse 90+ Score", "SEO & OpenGraph Optimizations"],
    metricHighlight: "95+ Lighthouse Score Guaranteed",
    accent: "#f4eee2",
  },
  {
    id: "05",
    title: "CREATIVE DEVELOPMENT",
    category: "Motion & Interaction Design",
    description:
      "Bringing screens to life through artful motion choreography, GSAP timelines, Lenis smooth scrolling, WebGL shaders, and delightful micro-interactions.",
    skills: ["GSAP & ScrollTrigger", "Framer Motion Physics", "Lenis Smooth Scroll", "Three.js & Canvas Effects"],
    deliverables: ["Custom Magnetic Cursor Systems", "Parallax & Kinetic Typography", "Smooth Page Transitions", "Interactive 3D / WebGL Accents"],
    metricHighlight: "Awwwards-Level Polish",
    accent: "#ff5e5e",
  },
  {
    id: "06",
    title: "E-COMMERCE OPTIMIZATION",
    category: "Conversion Rate Optimization (CRO)",
    description:
      "Eliminating checkout friction, fine-tuning PDP visual hierarchy, and implementing psychological triggers that maximize average order value.",
    skills: ["CRO Analysis & Heatmaps", "A/B Testing Methodology", "Fast AJAX Cart Drawers", "Sticky Mobile ATC Flows"],
    deliverables: ["CRO Audit & Action Matrix", "Frictionless Cart Enhancements", "Urgency & Trust Badges", "Repeat Purchase Funnels"],
    metricHighlight: "+38% Custom Builder Conversion",
    accent: "#e0c396",
  },
];
