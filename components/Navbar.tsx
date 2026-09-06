"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { useSound } from "./SoundManager";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>("");
  const { soundEnabled, toggleSound, playClick } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateClock = () => {
      const now = new Date();
      // Format to IST
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(`${timeStr} IST`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "01 // WORK", href: "#work" },
    { label: "02 // ABOUT", href: "#about" },
    { label: "03 // SERVICES", href: "#services" },
    { label: "04 // PROCESS", href: "#process" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand / Name */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={playClick}
              className="group flex items-center gap-2 text-white hover:text-[#00f0ff] transition-colors"
            >
              <span className="font-bebas text-2xl tracking-wider uppercase">YASH</span>
              <span className="font-mono-tech text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                DEV/DIR
              </span>
            </Link>

            {/* Time badge hidden on small screens */}
            <div className="hidden lg:flex items-center gap-1.5 font-mono-tech text-[11px] text-white/50 pl-3 border-l border-white/10">
              <span className="text-white/30">LOC:</span>
              <span className="text-white/80">{time || "00:00:00 IST"}</span>
            </div>
          </div>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 bg-[#141414]/70 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playClick}
                className="font-mono-tech text-[11px] text-white/70 hover:text-[#00f0ff] transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side: Availability Status & Audio & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Availability status */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono-tech text-[10px] text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
              <span className="tracking-wide">AVAILABLE FOR PROJECTS</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                toggleSound();
              }}
              title={soundEnabled ? "Mute sound fx" : "Enable tactile sound fx"}
              className={`p-2 rounded-full border transition-all ${
                soundEnabled
                  ? "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10"
                  : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={playClick}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-[#00f0ff] text-black font-mono-tech text-[11px] font-bold tracking-wider uppercase rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-200"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleSound}
              className={`p-1.5 rounded-full border text-xs ${
                soundEnabled ? "border-[#00f0ff] text-[#00f0ff]" : "border-white/15 text-white/50"
              }`}
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>

            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="p-2 text-white hover:text-[#00f0ff] bg-white/5 rounded-lg border border-white/10"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono-tech text-[11px] text-white/60 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
              AVAILABLE FOR SELECT COMMISSIONS
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                }}
                className="font-bebas text-4xl tracking-wider text-white hover:text-[#00f0ff] transition-colors border-b border-white/10 pb-3"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 bg-[#00f0ff] text-black font-mono-tech text-xs font-bold text-center tracking-widest uppercase rounded-sm"
            >
              START A PROJECT ↗
            </a>
            <div className="flex justify-between font-mono-tech text-[11px] text-white/40">
              <span>YASH // DIGITAL DESIGNER</span>
              <span>2026 EDITION</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
