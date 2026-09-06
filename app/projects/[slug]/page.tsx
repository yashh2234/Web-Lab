import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "../../../data/projects";
import { Navbar } from "../../../components/Navbar";
import { WashiTape, Stamp, TechBadge } from "../../../components/Sticker";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <Navbar />

      <article className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Top Breadcrumb / Back Link */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono-tech text-xs text-white/60 hover:text-[#00f0ff] transition-colors"
          >
            <ArrowLeft size={15} />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex items-center gap-3">
            <TechBadge label="CASE FILE" value={`${project.id} // ${project.year}`} />
            <span className="hidden sm:inline-block">
              <Stamp text={project.platform} variant="white" rotate={1} />
            </span>
          </div>
        </div>

        {/* Project Header */}
        <header className="mb-12 relative">
          <div className="absolute -top-4 right-4 sm:right-16 z-20">
            <WashiTape color={project.tapeColor} text={`INDEX / ${project.id}`} width="w-36" rotate={-2} />
          </div>

          <div className="font-mono-tech text-xs text-[#00f0ff] tracking-widest uppercase mb-3">
            {project.category}
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-6">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#a0a09d] max-w-3xl font-light leading-relaxed mb-8">
            {project.tagline}
          </p>

          {/* Primary CTA live link button */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-mono-tech text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>VISIT LIVE FLAGSHIP</span>
              <ExternalLink size={15} />
            </a>

            <div className="flex items-center gap-2 font-mono-tech text-xs text-white/50 px-3 py-2 rounded bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PRODUCTION ACTIVE</span>
            </div>
          </div>
        </header>

        {/* Full-width Hero Visual */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-sm bg-[#151515] border border-white/10 mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 right-4 z-10">
            <Stamp text="ART DIRECTED CASE STUDY" variant="cyan" rotate={-1} />
          </div>
        </div>

        {/* Project Technical Metadata Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-sm mb-20">
          <div>
            <div className="font-mono-tech text-[10px] text-white/40 uppercase mb-1">CLIENT</div>
            <div className="font-medium text-white text-sm sm:text-base">{project.client}</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] text-white/40 uppercase mb-1">YEAR / TIMELINE</div>
            <div className="font-medium text-white text-sm sm:text-base">{project.year} // 6 WEEKS</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] text-white/40 uppercase mb-1">PLATFORM ARCHITECTURE</div>
            <div className="font-medium text-[#00f0ff] text-sm sm:text-base">{project.platform}</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] text-white/40 uppercase mb-1">ROLE & SCOPE</div>
            <div className="font-medium text-white text-sm sm:text-base">Lead Creative Dev & UI/UX</div>
          </div>
        </section>

        {/* Deliverables & Services Badges */}
        <div className="mb-20">
          <div className="font-mono-tech text-xs text-white/50 uppercase tracking-wider mb-3">
            CORE SERVICES & DELIVERABLES
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.services.concat(project.deliverables).map((item) => (
              <span
                key={item}
                className="font-mono-tech text-xs px-3.5 py-1.5 rounded-sm bg-white/5 border border-white/10 text-white/90 hover:border-[#00f0ff] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Deep-Dive Editorial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Sticky Left Navigation Index */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-[#111111] border border-white/10 rounded-sm relative">
                <div className="absolute -top-3 left-6">
                  <WashiTape color="cyan" text="CASE NOTES" width="w-28" rotate={-2} />
                </div>
                <div className="font-mono-tech text-[11px] text-[#00f0ff] uppercase mb-4 tracking-wider">
                  CASE STUDY CHAPTERS
                </div>
                <ul className="space-y-3 font-mono-tech text-xs">
                  <li>
                    <a href="#challenge" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <span className="text-white/30">01.</span> THE CHALLENGE
                    </a>
                  </li>
                  <li>
                    <a href="#approach" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <span className="text-white/30">02.</span> THE STRATEGIC APPROACH
                    </a>
                  </li>
                  <li>
                    <a href="#design" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <span className="text-white/30">03.</span> THE DESIGN SYSTEM
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <span className="text-white/30">04.</span> THE INTERACTIVE EXPERIENCE
                    </a>
                  </li>
                  <li>
                    <a href="#results" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <span className="text-white/30">05.</span> RESULTS & QUANTITATIVE OUTPUT
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Box */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-sm font-mono-tech text-xs">
                <div className="text-white/40 uppercase mb-2">ENGINEERED WITH</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-black/40 text-white/80 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* 01 The Challenge */}
            <section id="challenge" className="scroll-mt-32">
              <div className="font-mono-tech text-xs text-[#00f0ff] uppercase tracking-wider mb-2">
                01 // THE CHALLENGE
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide mb-6">
                OVERCOMING COMMODITIZED TEMPLATES & CART FRICTION
              </h2>
              <p className="text-lg text-[#a0a09d] leading-relaxed font-light mb-6">
                {project.challenge}
              </p>
              <div className="p-4 rounded bg-[#161616] border-l-2 border-[#00f0ff] text-sm text-white/80 italic font-mono-tech">
                &ldquo;Every pixel needed to eliminate consumer hesitation while respecting the authentic heritage and craftsmanship of the brand.&rdquo;
              </div>
            </section>

            {/* 02 The Approach */}
            <section id="approach" className="scroll-mt-32">
              <div className="font-mono-tech text-xs text-[#00f0ff] uppercase tracking-wider mb-2">
                02 // THE STRATEGIC APPROACH
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide mb-6">
                ARCHITECTING STORY-LED COMMERCE FLOWS
              </h2>
              <p className="text-lg text-[#a0a09d] leading-relaxed font-light mb-6">
                {project.approach}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-3 p-4 bg-[#121212] border border-white/10 rounded-sm">
                    <CheckCircle2 size={18} className="text-[#00f0ff] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90 font-medium">{deliv}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 03 The Design */}
            <section id="design" className="scroll-mt-32">
              <div className="font-mono-tech text-xs text-[#ff5e5e] uppercase tracking-wider mb-2">
                03 // THE DESIGN SYSTEM
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide mb-6">
                EDITORIAL TENSION & BESPOKE TYPOGRAPHY
              </h2>
              <p className="text-lg text-[#a0a09d] leading-relaxed font-light mb-6">
                {project.design}
              </p>

              {/* Visual Showcase Card */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#151515] border border-white/10 my-8 shadow-xl">
                <Image
                  src={project.image}
                  alt={`${project.title} Design Detail`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-[10px] font-mono-tech text-white border border-white/20">
                  DESIGN SYSTEM // HIGH-FIDELITY VIEW
                </div>
              </div>
            </section>

            {/* 04 The Experience */}
            <section id="experience" className="scroll-mt-32">
              <div className="font-mono-tech text-xs text-[#d4b483] uppercase tracking-wider mb-2">
                04 // THE INTERACTIVE EXPERIENCE
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide mb-6">
                MICRO-INTERACTIONS & MOTION FLUIDITY
              </h2>
              <p className="text-lg text-[#a0a09d] leading-relaxed font-light mb-6">
                {project.experience}
              </p>
            </section>

            {/* 05 Results & Output */}
            <section id="results" className="scroll-mt-32 pt-8 border-t border-white/10">
              <div className="font-mono-tech text-xs text-[#00f0ff] uppercase tracking-wider mb-2">
                05 // RESULTS & QUANTITATIVE OUTPUT
              </div>
              <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide mb-8">
                MEASURABLE BUSINESS IMPACT
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {project.results.map((res) => (
                  <div key={res.label} className="p-6 bg-[#141414] border border-white/10 rounded-sm relative overflow-hidden">
                    <div className="font-bebas text-5xl sm:text-6xl text-[#00f0ff] mb-2">{res.metric}</div>
                    <div className="font-mono-tech text-xs text-white/60 uppercase tracking-wider">{res.label}</div>
                    <div className="absolute top-2 right-2 text-white/10 font-mono-tech text-[10px]">
                      VERIFIED
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Visual Gallery Section */}
        <section className="mb-24 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-mono-tech text-xs text-[#00f0ff] uppercase tracking-widest mb-1">
                EXHIBITION // GALLERY
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-white">VISUAL ARTIFACTS & ARCHITECTURE</h3>
            </div>
            <Stamp text="VERIFIED INTERFACE" variant="white" rotate={2} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/11] overflow-hidden rounded-sm bg-[#151515] border border-white/10 group">
              <Image
                src={project.image}
                alt="Visual Artifact 01"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between font-mono-tech text-[11px] text-white">
                <span>01 // DESKTOP FLAGSHIP VIEW</span>
                <span className="text-[#00f0ff]">2560 × 1440</span>
              </div>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-sm bg-[#151515] border border-white/10 group">
              <Image
                src={project.image}
                alt="Visual Artifact 02"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between font-mono-tech text-[11px] text-white">
                <span>02 // MOBILE COMMERCE VIEW</span>
                <span className="text-[#00f0ff]">390 × 844</span>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Footer Link */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 bg-[#111111] p-8 sm:p-12 rounded-sm relative">
          <div className="absolute -top-3 left-10">
            <WashiTape color="cyan" text="UP NEXT" width="w-24" rotate={-2} />
          </div>

          <div>
            <div className="font-mono-tech text-xs text-white/40 uppercase mb-2 tracking-widest">
              NEXT CASE STUDY // 0{nextProject.id}
            </div>
            <Link href={`/projects/${nextProject.slug}`} className="group inline-block">
              <h4 className="font-bebas text-5xl sm:text-7xl text-white group-hover:text-[#00f0ff] transition-colors leading-none">
                {nextProject.title} →
              </h4>
            </Link>
            <p className="text-sm text-white/60 mt-2 font-mono-tech">
              {nextProject.category}
            </p>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="px-6 py-3 bg-white text-black font-mono-tech text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all flex items-center gap-2"
          >
            <span>VIEW CASE</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    </>
  );
}
