export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  tape: "acid" | "cyan" | "coral" | "kraft";
  note: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Brand DNA & Audience Research",
    description:
      "Deep dive into brand positioning, competitor landscapes, and consumer psychology. We dissect what makes your product unique and uncover untapped conversion opportunities.",
    deliverables: ["Competitive Benchmark Audit", "User Persona Empathy Map", "Creative Moodboard & Visual Deck", "E-Commerce Strategy Roadmap"],
    duration: "Week 01",
    tape: "cyan",
    note: "No assumptions. We look at raw data and authentic brand emotion.",
  },
  {
    step: "02",
    title: "DEFINE",
    subtitle: "Architecture & Wireframing",
    description:
      "Mapping out the seamless narrative of the site. Every page layout, conversion trigger, navigation path, and collection hierarchy is engineered for effortless clarity.",
    deliverables: ["Information Architecture Map", "Low-Fidelity Wireframes", "Technical Stack Architecture", "Conversion Funnel Specs"],
    duration: "Week 01 - 02",
    tape: "cyan",
    note: "Structure before decoration. Flow dictates function.",
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Art Direction & System Design",
    description:
      "Where editorial elegance meets digital craft. We craft the bespoke visual identity: typography tension, micro-interactions, washi labels, and production-ready component libraries in Figma.",
    deliverables: ["Full-Fidelity Desktop & Mobile UI", "Figma Design System & Tokens", "Interactive Prototype Demonstrations", "Asset Direction & Cropping Guides"],
    duration: "Week 02 - 03",
    tape: "coral",
    note: "Typography is the voice. Spacing is the rhythm.",
  },
  {
    step: "04",
    title: "BUILD",
    subtitle: "Precision Code & Commerce Engineering",
    description:
      "Translating visual brilliance into ultra-performant, accessible code. Next.js, React, Tailwind CSS, or bespoke Shopify Liquid, coupled with silky-smooth GSAP and Lenis motion.",
    deliverables: ["Production-Ready Clean Codebase", "Shopify Plus / Headless Architecture", "Sub-1.5s Core Web Vitals", "Custom Animations & Micro-Interactions"],
    duration: "Week 03 - 05",
    tape: "kraft",
    note: "Zero bloat. Fast loading is the best user experience.",
  },
  {
    step: "05",
    title: "REFINE",
    subtitle: "Testing, Launch & CRO Scaling",
    description:
      "Rigorous cross-device stress testing, payment gateway stress drills, analytics tracking instrumentation, and hands-on launch stewardship to ensure a flawless rollout.",
    deliverables: ["Cross-Browser QA & Mobile Audit", "Live Deployment & DNS Cutover", "Post-Launch Performance Monitoring", "Client CMS / Shopify Training"],
    duration: "Week 05+",
    tape: "cyan",
    note: "Launch is day one. We monitor conversion data to compound wins.",
  },
];
