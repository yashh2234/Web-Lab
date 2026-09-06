"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  Code2,
  Terminal,
  ShoppingBag,
  Send,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { processSteps } from "../data/process";
import { WashiTape, StickyNote, Stamp, TechBadge } from "../components/Sticker";
import { useSound } from "../components/SoundManager";

export default function HomePage() {
  const { playClick, playPop, playSnap } = useSound();
  const [activeService, setActiveService] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Shopify Plus Store");
  const [showArchive, setShowArchive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@yashdesign.dev");
    setCopiedEmail(true);
    playSnap();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectTypes = [
    "Shopify Plus Store",
    "UI/UX Design System",
    "Creative Web App",
    "Digital Flagship",
    "CRO / Optimization",
  ];

  return (
    <>
      <Navbar />

      {/* ===================================================
          HERO SECTION
          =================================================== */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center px-5 sm:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Subtle background stamps & tape accents */}
        <div className="absolute top-24 right-10 hidden xl:block z-0 pointer-events-none">
          <WashiTape color="yellow" text="EST. 2020 // EDITORIAL PORTFOLIO" width="w-64" rotate={4} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left: Typography & Hero Statement */}
          <div className="lg:col-span-7">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00e676]/10 border border-[#00e676]/30 font-mono-tech text-xs text-[#00e676]">
                <span className="w-2 h-2 rounded-full bg-[#00e676] animate-ping" />
                <span className="font-semibold tracking-wider">DIGITAL DESIGNER / DEVELOPER</span>
              </div>
              <TechBadge label="SYS.VER" value="2026.04" color="pink" />
            </div>

            {/* Large Display Heading - Keeping EXPERIENCES in Blue as explicitly requested */}
            <h1 className="font-bebas text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] mb-8">
              I DESIGN DIGITAL <br />
              <span className="text-[#00f0ff] inline-block hover:scale-[1.01] transition-transform">
                EXPERIENCES
              </span>{" "}
              THAT <br />
              PEOPLE REMEMBER.
            </h1>

            {/* Editorial Description */}
            <p className="text-lg sm:text-2xl text-[#a0a09d] max-w-2xl font-light leading-relaxed mb-10">
              I design and build high-converting digital flagships for fashion, jewellery,
              lifestyle, and direct-to-consumer brands that refuse to look like everyone else.
            </p>

            {/* CTAs and Status */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={playClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00f0ff] text-black font-mono-tech text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.3)]"
              >
                <span>VIEW WORK</span>
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={playClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider rounded-sm hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight size={15} />
              </a>

              <div className="hidden sm:flex items-center gap-2 font-mono-tech text-xs text-white/50 pl-4 border-l border-white/10">
                <span className="text-[#00e676]">SHOPIFY PLUS</span>
                <span className="text-white/20">•</span>
                <span className="text-[#ff70a6]">CREATIVE DEV</span>
                <span className="text-white/20">•</span>
                <span className="text-[#ffe600]">UI/UX</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Visual Collage & Polaroid Scrapbook */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Polaroid Photo 01 - Teela preview */}
              <div className="polaroid-frame -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape color="green" text="TEELA // JAIPUR" width="w-36" rotate={-1} />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black rounded-sm">
                  <Image
                    src="/images/teela.jpg"
                    alt="Teela Luxury Resort"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono-tech text-[10px] text-white/60">
                  <span>RESORT & EXP COMMERCE</span>
                  <span className="text-[#00e676] font-bold">+64% REVENUE</span>
                </div>
              </div>

              {/* Floating Second Small Polaroid - Angara jewelry */}
              <div className="absolute -bottom-8 -right-4 w-44 sm:w-52 polaroid-frame rotate-6 hover:rotate-2 transition-transform duration-500 z-20 hidden sm:block">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape color="red" text="ANGARA DTC" width="w-28" rotate={2} />
                </div>
                <div className="relative aspect-[1/1] w-full overflow-hidden bg-black rounded-sm">
                  <Image
                    src="/images/angara.jpg"
                    alt="Angara Fine Jewelry"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 font-mono-tech text-[9px] text-[#ffe600] font-bold text-center">
                  EMERALD CUSTOMIZER
                </div>
              </div>

              {/* Interactive Stamp */}
              <div className="absolute -top-6 -left-6 z-30">
                <Stamp text="VERIFIED ART DIRECTION" variant="pink" rotate={-8} />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Technical Strip */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[11px] text-white/50">
          <div className="flex items-center gap-6">
            <span className="text-[#ff70a6]">[ FOCUS: E-COMMERCE & LUXURY ]</span>
            <span className="hidden md:inline-block text-[#00e676]">[ LOCATION: NEW DELHI // REMOTE WORLDWIDE ]</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#ffe600]">SCROLL TO EXPLORE ARCHIVE</span>
            <ArrowDown size={13} className="animate-bounce text-[#ffe600]" />
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRO / ABOUT SNAPSHOT
          =================================================== */}
      <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Punchy Manifesto */}
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-xs text-[#ff70a6] uppercase tracking-widest mb-4">
              MANIFESTO // 01
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] mb-8">
              I DESIGN. <br />
              I BUILD. <br />
              I MAKE BRANDS <br />
              <span className="underline decoration-[#00f0ff] decoration-4 underline-offset-8">
                LOOK GOOD ONLINE.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-[#a0a09d] font-light leading-relaxed mb-6">
              Most e-commerce websites are built like generic warehouses: bland grids, soulless
              typography, and bloated code that tests customer patience. I merge high-fashion
              editorial art direction with rock-solid frontend engineering to create memorable
              digital flagships that convert visitors into die-hard brand advocates.
            </p>
          </div>

          {/* Right: Interactive Draggable Stickers & Tags */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 bg-[#111111] border border-white/10 rounded-sm relative">
              <div className="absolute -top-3 left-6">
                <WashiTape color="yellow" text="CORE DISCIPLINES" width="w-36" rotate={-1} />
              </div>

              <div className="font-mono-tech text-xs text-white/50 mb-4 uppercase">
                INTERACTIVE SKILL MATRIX [TRY DRAGGING]
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "UI / UX Design", tag: "Figma", tape: "pink", tagColor: "text-[#ff70a6]" },
                  { name: "Shopify Plus", tag: "Liquid / API", tape: "green", tagColor: "text-[#00e676]" },
                  { name: "Creative Frontend", tag: "Next.js / TS", tape: "yellow", tagColor: "text-[#ffe600]" },
                  { name: "Motion Physics", tag: "GSAP / Lenis", tape: "red", tagColor: "text-[#ff4d4d]" },
                  { name: "Conversion Optimization", tag: "+38% Avg Lift", tape: "green", tagColor: "text-[#00e676]" },
                  { name: "Design Systems", tag: "Tokens", tape: "purple", tagColor: "text-[#b388ff]" },
                ].map((item, idx) => (
                  <StickyNote
                    key={item.name}
                    color="dark"
                    tapeColor={item.tape as any}
                    rotate={idx % 2 === 0 ? -2 : 2}
                    isDraggable
                  >
                    <div className="flex items-center gap-2 font-mono-tech text-xs">
                      <span className="font-bold text-white">{item.name}</span>
                      <span className={`${item.tagColor} text-[10px]`}>/ {item.tag}</span>
                    </div>
                  </StickyNote>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-[10px] text-white/40">
                <span>✦ TACTILE CANVAS</span>
                <span>GRAB & REARRANGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SELECTED WORK SECTION
          =================================================== */}
      <section id="work" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full scroll-mt-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00e676] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00e676]" />
              <span>PORTFOLIO EXHIBITION // 2025–2026</span>
            </div>
            <h2 className="font-bebas text-6xl sm:text-8xl text-white tracking-tight leading-none">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono-tech text-xs text-white/60">
            <span>SHOWING 06 FEATURED CASE STUDIES</span>
            <Stamp text="REAL COMMERCE" variant="yellow" rotate={-1} />
          </div>
        </div>

        {/* Featured Projects Gallery */}
        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Archive / Additional Projects Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-mono-tech text-xs text-[#ff70a6] uppercase tracking-widest mb-1">
                PROJECT ARCHIVE
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-white">ADDITIONAL SELECTED WORKS</h3>
            </div>

            <button
              onClick={() => {
                setShowArchive(!showArchive);
                playClick();
              }}
              className="px-4 py-2 rounded-sm border border-white/20 font-mono-tech text-xs text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
            >
              {showArchive ? "CLOSE ARCHIVE [—]" : "EXPAND ARCHIVE [+]"}
            </button>
          </div>

          {/* Archive Table */}
          {showArchive && (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono-tech text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white/40">
                    <th className="py-3 px-4">YEAR</th>
                    <th className="py-3 px-4">CLIENT / PROJECT</th>
                    <th className="py-3 px-4">CATEGORY</th>
                    <th className="py-3 px-4">PLATFORM</th>
                    <th className="py-3 px-4 text-right">LINK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {archiveProjects.map((proj) => (
                    <tr
                      key={proj.slug}
                      className="hover:bg-white/5 transition-colors group cursor-pointer"
                      onClick={() => playPop()}
                    >
                      <td className="py-4 px-4 text-white/50">{proj.year}</td>
                      <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                        <span>{proj.title}</span>
                        <span className="text-[10px] text-white/40 font-normal">({proj.client})</span>
                      </td>
                      <td className="py-4 px-4 text-white/70">{proj.category}</td>
                      <td className="py-4 px-4 text-white/50">{proj.platform}</td>
                      <td className="py-4 px-4 text-right">
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#00f0ff] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>VISIT</span>
                          <ExternalLink size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          EXPERIENCE / SERVICES ("WHAT I DO")
          =================================================== */}
      <section id="services" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full scroll-mt-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono-tech text-xs text-[#ffe600] tracking-widest uppercase mb-2">
              CAPABILITIES & SERVICES
            </div>
            <h2 className="font-bebas text-6xl sm:text-8xl text-white tracking-tight leading-none">
              WHAT I DO
            </h2>
          </div>
          <p className="text-[#a0a09d] max-w-md text-sm font-light leading-relaxed">
            Hover each service discipline to inspect tech deliverables, architectural methods,
            and average business lift.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service items list */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                onMouseEnter={() => {
                  setActiveService(idx);
                  playPop();
                }}
                className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 cursor-pointer ${
                  activeService === idx
                    ? "bg-[#141414] border-[#00f0ff] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "bg-[#0d0d0d] border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-xs text-[#00f0ff] font-bold">
                    {srv.id} // {srv.category}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                    {srv.metricHighlight}
                  </span>
                </div>

                <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-2">
                  {srv.title}
                </h3>

                <p className="text-sm text-[#a0a09d] font-light leading-relaxed mb-4">
                  {srv.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {srv.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Preview Panel */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="p-8 bg-[#121212] border border-white/10 rounded-sm relative shadow-2xl">
              <div className="absolute -top-3 right-6">
                <WashiTape color="pink" text="SPECIFICATION" width="w-32" rotate={1} />
              </div>

              <div className="font-mono-tech text-xs text-white/40 uppercase mb-2">
                ACTIVE FOCUS // 0{activeService + 1}
              </div>

              <h4 className="font-bebas text-4xl text-white mb-4">
                {services[activeService].title}
              </h4>

              <div className="font-mono-tech text-xs text-[#00f0ff] mb-6">
                {services[activeService].category}
              </div>

              <div className="space-y-4 mb-8">
                <div className="font-mono-tech text-[11px] text-white/50 uppercase">
                  DELIVERABLES INCLUDED:
                </div>
                {services[activeService].deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-center gap-2 font-mono-tech text-xs text-white/80">
                    <span className="text-[#00f0ff]">✓</span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono-tech text-xs text-white/50">PERFORMANCE TARGET</div>
                <div className="font-bebas text-2xl text-[#00f0ff]">
                  {services[activeService].metricHighlight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          ABOUT SECTION
          =================================================== */}
      <section id="about" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full scroll-mt-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Scrapbook Polaroid & Tape Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm">
              <div className="polaroid-frame -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape color="yellow" text="YASH // DESIGN & DEV" width="w-44" rotate={-1} />
                </div>

                <div className="relative aspect-[1/1] w-full overflow-hidden bg-black rounded-sm">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Yash Creative Developer Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between font-mono-tech text-[10px] text-white/60">
                  <span>ATELIER LAB // 2026</span>
                  <span className="text-[#00f0ff]">28.6139° N, 77.2090° E</span>
                </div>
              </div>

              {/* Sticky note badge */}
              <div className="absolute -bottom-6 -right-4 z-20 hidden sm:block">
                <StickyNote color="green" rotate={3}>
                  <div className="font-mono-tech text-[11px] font-bold text-black">
                    (•‿•) 6+ YEARS IN E-COM
                  </div>
                </StickyNote>
              </div>
            </div>
          </div>

          {/* Right: Personal Editorial Philosophy */}
          <div className="lg:col-span-7">
            <div className="font-mono-tech text-xs text-[#ff4d4d] uppercase tracking-widest mb-3">
              ABOUT // PHILOSOPHY
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] mb-8">
              I CARE ABOUT <br />
              HOW THINGS FEEL, <br />
              <span className="text-[#00f0ff]">NOT JUST HOW THEY WORK.</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#a0a09d] font-light leading-relaxed mb-8">
              <p>
                I am a hybrid designer and creative frontend engineer who operates at the intersection
                of high-end visual systems, human interaction, and scalable e-commerce infrastructure.
                Having engineered flagship storefronts for luxury resorts, fine jewellery houses,
                handloom heritage brands, and fast-moving consumer brands, I treat every project like
                an art-directed monograph.
              </p>
              <p>
                Too many brands sacrifice emotion for conversion, or sacrifice speed for aesthetics.
                My work proves you never have to compromise: you can have breathtaking typography,
                editorial whitespace, tactile micro-animations, and still achieve sub-1.5 second
                checkout speeds that consistently crush industry conversion benchmarks.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono-tech text-xs">
              <div>
                <div className="text-white/40 uppercase mb-1">EXPERIENCE</div>
                <div className="font-bold text-white text-base">6+ YEARS</div>
              </div>
              <div>
                <div className="text-white/40 uppercase mb-1">SPECIALTY</div>
                <div className="font-bold text-[#00e676] text-base">SHOPIFY PLUS</div>
              </div>
              <div>
                <div className="text-white/40 uppercase mb-1">AVERAGE LIFT</div>
                <div className="font-bold text-white text-base">+47% CONV</div>
              </div>
              <div>
                <div className="text-white/40 uppercase mb-1">PAGESPEED</div>
                <div className="font-bold text-white text-base">95+ LIGHTHOUSE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROCESS ("HOW I WORK")
          =================================================== */}
      <section id="process" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full scroll-mt-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono-tech text-xs text-[#ff70a6] tracking-widest uppercase mb-2">
              METHODOLOGY & WORKFLOW
            </div>
            <h2 className="font-bebas text-6xl sm:text-8xl text-white tracking-tight leading-none">
              HOW I WORK
            </h2>
          </div>
          <p className="text-[#a0a09d] max-w-md text-sm font-light leading-relaxed">
            A battle-tested 5-stage editorial timeline designed to eliminate ambiguity, ship with speed,
            and deliver undeniable commercial results.
          </p>
        </div>

        {/* Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-[#111111] border border-white/10 rounded-sm relative flex flex-col justify-between transition-colors"
            >
              <div className="absolute -top-3 left-6">
                <WashiTape color={step.tape} text={step.duration} width="w-24" rotate={-1} />
              </div>

              <div>
                <div className="font-mono-tech text-xs text-white/40 mb-3 mt-1">
                  PHASE // {step.step}
                </div>

                <h3 className="font-bebas text-3xl text-white mb-1">{step.title}</h3>
                <div className="font-mono-tech text-[10px] text-[#00f0ff] mb-4">
                  {step.subtitle}
                </div>

                <p className="text-xs text-[#a0a09d] font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-mono-tech text-[9px] text-white/40 uppercase mb-2">
                  KEY ARTIFACTS:
                </div>
                <ul className="space-y-1 font-mono-tech text-[10px] text-white/70">
                  {step.deliverables.slice(0, 2).map((item) => (
                    <li key={item} className="truncate">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================
          TECH / TOOLBOX ("BUILT WITH")
          =================================================== */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="p-8 sm:p-12 bg-[#0e0e0e] border border-white/10 rounded-sm relative">
          <div className="absolute -top-3 left-8">
            <WashiTape color="green" text="ENGINEERING STACK" width="w-40" rotate={-2} />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="font-mono-tech text-xs text-[#00e676] uppercase mb-1">
                DESIGNER&apos;S NOTEBOOK // TECHNICAL TOOLBOX
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-white">BUILT WITH INTENTION</h3>
            </div>
            <Stamp text="ZERO BLOAT" variant="pink" rotate={1} />
          </div>

          <p className="text-[#a0a09d] max-w-2xl font-light text-sm mb-8">
            I don&apos;t chase every fleeting tech fad. I invest deeply in a curated, lightning-fast stack
            that marries artistic expression with rock-solid production reliability.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 font-mono-tech text-xs">
            {[
              { name: "Next.js 16", tag: "App Router" },
              { name: "React 19", tag: "Modern UI" },
              { name: "TypeScript", tag: "Type Safety" },
              { name: "Tailwind CSS", tag: "Utility" },
              { name: "GSAP", tag: "Timelines" },
              { name: "Framer Motion", tag: "Physics" },
              { name: "Lenis", tag: "Smooth Scroll" },
              { name: "Shopify Plus", tag: "Liquid / API" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-4 bg-[#141414] border border-white/10 rounded-sm transition-colors"
              >
                <div className="font-bold text-white mb-1">{tech.name}</div>
                <div className="text-[10px] text-[#00f0ff]">{tech.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT SECTION
          =================================================== */}
      <section id="contact" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto w-full scroll-mt-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & Socials */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-mono-tech text-xs text-[#00e676] uppercase tracking-widest mb-3">
                LET&apos;S COLLABORATE
              </div>

              <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] mb-8">
                LET&apos;S MAKE <br />
                SOMETHING <br />
                <span className="text-[#00f0ff]">WORTH</span> <br />
                REMEMBERING.
              </h2>

              <p className="text-lg text-[#a0a09d] font-light leading-relaxed mb-8 max-w-md">
                Have a new project in mind, an existing store that needs an editorial overhaul,
                or a high-impact design commission? Let&apos;s build together.
              </p>

              {/* Direct email pill */}
              <div className="mb-10">
                <div className="font-mono-tech text-xs text-white/40 uppercase mb-2">DIRECT EMAIL</div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-sm bg-[#151515] border border-white/15 text-white hover:border-[#00f0ff] transition-all group"
                >
                  <span className="font-mono-tech text-sm text-[#00f0ff] font-bold">
                    hello@yashdesign.dev
                  </span>
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 font-mono-tech text-xs text-emerald-400">
                      <Check size={14} /> COPIED!
                    </span>
                  ) : (
                    <Copy size={15} className="text-white/50 group-hover:text-white transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <div className="font-mono-tech text-xs text-white/40 uppercase mb-3">NETWORKS & SOCIALS</div>
              <div className="flex flex-wrap gap-4 font-mono-tech text-xs">
                {[
                  { name: "INSTAGRAM", href: "https://instagram.com" },
                  { name: "LINKEDIN", href: "https://linkedin.com" },
                  { name: "BEHANCE", href: "https://behance.net" },
                  { name: "GITHUB", href: "https://github.com" },
                  { name: "TWITTER / X", href: "https://x.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-1"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Editorial Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-[#111111] border border-white/10 rounded-sm relative shadow-2xl">
              <div className="absolute -top-3 right-8">
                <WashiTape color="yellow" text="INQUIRY FORM" width="w-32" rotate={2} />
              </div>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff] text-[#00f0ff] flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h3 className="font-bebas text-4xl text-white">MESSAGE RECEIVED</h3>
                  <p className="text-sm text-[#a0a09d] max-w-sm mx-auto font-mono-tech">
                    Thank you! Yash will review your project specs and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-mono-tech text-xs text-[#00f0ff] underline mt-4"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    playSnap();
                    setFormSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  {/* Project Type Selectors */}
                  <div>
                    <label className="block font-mono-tech text-xs text-white/60 uppercase mb-3">
                      01 // WHAT DO YOU WANT TO BUILD?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setSelectedProjectType(type);
                            playPop();
                          }}
                          className={`font-mono-tech text-xs px-3.5 py-2 rounded-sm border transition-all ${
                            selectedProjectType === type
                              ? "bg-[#00f0ff] text-black font-bold border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                              : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-tech text-[11px] text-white/50 uppercase mb-1.5">
                        02 // YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Vance"
                        className="w-full bg-[#181818] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono-tech text-[11px] text-white/50 uppercase mb-1.5">
                        03 // YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@brand.com"
                        className="w-full bg-[#181818] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block font-mono-tech text-[11px] text-white/50 uppercase mb-1.5">
                      04 // PROJECT DETAILS & TIMELINE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your brand, goals, launch timeline, and target budget..."
                      className="w-full bg-[#181818] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00f0ff] text-black font-mono-tech text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>START A PROJECT</span>
                    <Send size={14} />
                  </button>

                  <div className="text-center font-mono-tech text-[10px] text-white/40">
                    AVG RESPONSE TIME: WITHIN 24 HOURS // SELECT COMMISSIONS ONLY
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FOOTER
          =================================================== */}
      <footer className="py-12 px-5 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono-tech text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-white tracking-wider">YASH</span>
            <span className="text-white/20">/</span>
            <span>DIGITAL DESIGNER & CREATIVE DEVELOPER</span>
          </div>

          <div className="text-center sm:text-left">
            <span>© 2026 // ALL RIGHTS RESERVED // CRAFTED WITH REACT & NEXT.JS</span>
          </div>

          <div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                playPop();
              }}
              className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <span>BACK TO TOP</span>
              <ArrowUpRight size={13} className="-rotate-45" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
