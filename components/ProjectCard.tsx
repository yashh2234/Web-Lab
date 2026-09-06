"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "../data/projects";
import { WashiTape, Stamp, TechBadge } from "./Sticker";
import { useSound } from "./SoundManager";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { playPop } = useSound();

  // Layout 1: Editorial Split (Teela - 01)
  if (project.cardLayout === "editorial-split") {
    return (
      <div
        className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm p-6 lg:p-10 transition-all duration-500"
        onMouseEnter={() => {
          setIsHovered(true);
          playPop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Washi Tape Header */}
        <div className="absolute -top-3 left-8 z-20">
          <WashiTape color={project.tapeColor} text={`PROJECT ${project.id} // ${project.year}`} width="w-44" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Details & Editorial Info */}
          <div className="lg:col-span-5 min-w-0 overflow-hidden flex flex-col justify-between h-full order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="CLIENT" value={project.client} color="yellow" />
                <span className="text-white/20">•</span>
                <span className="font-mono-tech text-[11px] text-[#ffe600]">{project.category}</span>
              </div>

              <Link href={`/projects/${project.slug}`} className="block text-white max-w-full overflow-hidden">
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[0.92] mb-3 max-w-full break-words">
                  {project.title}
                </h3>
              </Link>

              <p className="text-[#a0a09d] text-base leading-relaxed mb-6 font-light">
                {project.summary}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row: Metrics & Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                {project.results.slice(0, 2).map((res) => (
                  <div key={res.label}>
                    <div className="font-bebas text-2xl sm:text-3xl text-[#00e676]">{res.metric}</div>
                    <div className="font-mono-tech text-[9px] text-white/50 uppercase">{res.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-white/15 text-white/70 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                  title="Visit Live URL"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono-tech text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Dramatic Visual Showcase */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden rounded-sm bg-[#151515] aspect-[16/10] border border-white/10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              
              {/* Overlay Stamp */}
              <div className="absolute bottom-4 right-4 z-10">
                <Stamp text="FEATURED CASE" variant="yellow" rotate={2} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Layout 2: Two-Column Editorial (Angara - 02)
  if (project.cardLayout === "two-column") {
    return (
      <div
        className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm p-6 lg:p-10 transition-all duration-500"
        onMouseEnter={() => {
          setIsHovered(true);
          playPop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -top-3 right-8 z-20">
          <WashiTape color="red" text={`FINE JEWELRY // ${project.year}`} width="w-48" rotate={2} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Image with custom aspect ratio */}
          <div className="lg:col-span-7">
            <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden rounded-sm bg-[#151515] aspect-[16/10] border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute top-4 left-4 z-10">
                <Stamp text="HIGH LUXURY DTC" variant="pink" rotate={-2} />
              </div>
            </Link>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:col-span-5 min-w-0 overflow-hidden flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="CLIENT" value={project.client} color="pink" />
                <span className="text-white/20">•</span>
                <span className="font-mono-tech text-[11px] text-[#ff70a6]">{project.category}</span>
              </div>

              <Link href={`/projects/${project.slug}`} className="block text-white max-w-full overflow-hidden">
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[0.92] mb-3 max-w-full break-words">
                  {project.title}
                </h3>
              </Link>

              <p className="text-[#a0a09d] text-base leading-relaxed mb-6 font-light">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                {project.results.slice(0, 2).map((res) => (
                  <div key={res.label}>
                    <div className="font-bebas text-2xl sm:text-3xl text-[#ff4d4d]">{res.metric}</div>
                    <div className="font-mono-tech text-[9px] text-white/50 uppercase">{res.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-white/15 text-white/70 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                  title="Visit Live URL"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono-tech text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout 3: Full-Width Editorial Visual (Kaari - 03)
  if (project.cardLayout === "full-width") {
    return (
      <div
        className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm overflow-hidden transition-all duration-500"
        onMouseEnter={() => {
          setIsHovered(true);
          playPop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-4 left-6 z-20">
          <WashiTape color="pink" text={`FASHION ATELIER // ${project.year}`} width="w-48" rotate={-1} />
        </div>

        {/* Large visual banner */}
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-[#151515]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/40 to-black/20" />

          {/* Floating stamp */}
          <div className="absolute top-4 right-6 z-10 hidden sm:block">
            <Stamp text="SLOW FASHION ATELIER" variant="yellow" rotate={3} />
          </div>

          {/* Bottom title banner on image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="min-w-0 max-w-full overflow-hidden">
              <div className="font-mono-tech text-xs text-[#ff70a6] mb-1 tracking-wider uppercase">
                {project.category}
              </div>
              <Link href={`/projects/${project.slug}`} className="block max-w-full">
                <h3 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9] max-w-full break-words">
                  {project.title}
                </h3>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-[#ff5e5e] hover:border-[#ff5e5e] transition-colors"
                title="Visit Live URL"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff70a6] text-black font-mono-tech text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all shadow-lg"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Text bottom bar */}
        <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-t border-white/10">
          <div className="md:col-span-7">
            <p className="text-[#a0a09d] text-base leading-relaxed font-light">
              {project.summary}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap gap-2 justify-start md:justify-end">
            {project.services.map((srv) => (
              <span
                key={srv}
                className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Layout 4: Asymmetric Composition (Suta - 04)
  if (project.cardLayout === "asymmetric") {
    return (
      <div
        className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm p-6 lg:p-10 transition-all duration-500"
        onMouseEnter={() => {
          setIsHovered(true);
          playPop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -top-3 left-10 z-20">
          <WashiTape color="green" text={`HANDLOOM WEAVERS // ${project.year}`} width="w-52" rotate={-2} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project title & Weaver Story */}
          <div className="lg:col-span-5 min-w-0 overflow-hidden flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="IMPACT" value="17,000+ ARTISANS" color="green" />
                <span className="text-white/20">•</span>
                <span className="font-mono-tech text-[11px] text-[#00e676]">{project.category}</span>
              </div>

              <Link href={`/projects/${project.slug}`} className="block text-white max-w-full overflow-hidden">
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[0.92] mb-3 max-w-full break-words">
                  {project.title}
                </h3>
              </Link>

              <p className="text-[#a0a09d] text-base leading-relaxed mb-6 font-light">
                {project.summary}
              </p>

              {/* Scrapbook Note */}
              <div className="p-3.5 bg-[#171717] border border-white/10 rounded-sm mb-6 relative">
                <div className="font-mono-tech text-[10px] text-[#00e676] uppercase mb-1">
                  ✦ WEAVER EMPOWERMENT SYSTEM
                </div>
                <div className="text-xs text-white/70 italic">
                  &ldquo;Connecting authentic handloom craftsmanship directly with global consumers through heartfelt visual storytelling and sub-second checkout.&rdquo;
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                {project.results.slice(0, 2).map((res) => (
                  <div key={res.label}>
                    <div className="font-bebas text-2xl sm:text-3xl text-[#00e676]">{res.metric}</div>
                    <div className="font-mono-tech text-[9px] text-white/50 uppercase">{res.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-white/15 text-white/70 hover:text-[#d4b483] hover:border-[#d4b483] transition-colors"
                  title="Visit Live URL"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono-tech text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#d4b483] transition-all"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical image with polaroid frame effect */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden rounded-sm bg-[#151515] aspect-[16/11] border border-white/10 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </Link>
              <div className="absolute -bottom-4 -left-4 z-10">
                <Stamp text="AUTHENTIC HANDLOOM" variant="green" rotate={-3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout 5: Polaroid Collage / Silver Minimal (Impressions 925 - 05)
  if (project.cardLayout === "polaroid-collage") {
    return (
      <div
        className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm p-6 lg:p-10 transition-all duration-500"
        onMouseEnter={() => {
          setIsHovered(true);
          playPop();
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -top-3 right-12 z-20">
          <WashiTape color="purple" text={`925 STERLING SILVER // ${project.year}`} width="w-52" rotate={1} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Polaroid Style Image */}
          <div className="lg:col-span-7">
            <div className="polaroid-frame rounded-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <WashiTape color="pink" text="BIS HALLMARKED" width="w-36" rotate={-2} />
              </div>

              <Link href={`/projects/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>

              <div className="mt-3 flex items-center justify-between font-mono-tech text-[10px] text-white/50 px-1">
                <span>IMPRESSIONS 925 // D2C FAST AJAX SHOP</span>
                <span>PAGESPEED 98/100</span>
              </div>
            </div>
          </div>

          {/* Right: Description & Metrics */}
          <div className="lg:col-span-5 min-w-0 overflow-hidden flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="CLIENT" value={project.client} color="purple" />
                <span className="text-white/20">•</span>
                <span className="font-mono-tech text-[11px] text-[#b388ff]">{project.category}</span>
              </div>

              <Link href={`/projects/${project.slug}`} className="block text-white max-w-full overflow-hidden">
                <h3 className="font-bebas text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[0.92] mb-3 max-w-full break-words">
                  {project.title}
                </h3>
              </Link>

              <p className="text-[#a0a09d] text-base leading-relaxed mb-6 font-light">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                {project.results.slice(0, 2).map((res) => (
                  <div key={res.label}>
                    <div className="font-bebas text-2xl sm:text-3xl text-[#b388ff]">{res.metric}</div>
                    <div className="font-mono-tech text-[9px] text-white/50 uppercase">{res.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-white/15 text-white/70 hover:text-white hover:border-white transition-colors"
                  title="Visit Live URL"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono-tech text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default / Layout 6: Candy Showcase (Mahak - 06)
  return (
    <div
      className="group relative bg-[#0e0e0e] border border-white/10 rounded-sm p-6 lg:p-10 transition-all duration-500"
      onMouseEnter={() => {
        setIsHovered(true);
        playPop();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-3 left-8 z-20">
        <WashiTape color="yellow" text={`FMCG & D2C // ${project.year}`} width="w-44" rotate={-2} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Info */}
        <div className="lg:col-span-5 min-w-0 overflow-hidden flex flex-col justify-between h-full order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <TechBadge label="REACH" value="3.2M+ MONTHLY" color="yellow" />
              <span className="text-white/20">•</span>
              <span className="font-mono-tech text-[11px] text-[#ffe600]">{project.category}</span>
            </div>

            <Link href={`/projects/${project.slug}`} className="block text-white max-w-full overflow-hidden">
              <h3 className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[0.92] mb-3 max-w-full break-words">
                {project.title}
              </h3>
            </Link>

            <p className="text-[#a0a09d] text-base leading-relaxed mb-6 font-light">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.services.map((srv) => (
                <span
                  key={srv}
                  className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {project.results.slice(0, 2).map((res) => (
                <div key={res.label}>
                  <div className="font-bebas text-2xl sm:text-3xl text-[#ffe600]">{res.metric}</div>
                  <div className="font-mono-tech text-[9px] text-white/50 uppercase">{res.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-white/15 text-white/70 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
                title="Visit Live URL"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono-tech text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Dynamic confectionery visual */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden rounded-sm bg-[#151515] aspect-[16/10] border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-4 right-4 z-10">
              <Stamp text="D2C & B2B ARCHITECTURE" variant="green" rotate={-1} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
