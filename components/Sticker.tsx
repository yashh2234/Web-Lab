"use client";

import React from "react";
import { motion } from "framer-motion";

interface WashiTapeProps {
  color?: "acid" | "cyan" | "coral" | "kraft";
  rotate?: number;
  text?: string;
  className?: string;
  width?: string;
}

export function WashiTape({
  color = "acid",
  rotate = -3,
  text,
  className = "",
  width = "w-28",
}: WashiTapeProps) {
  const colorMap = {
    acid: "bg-[#00f0ff]/25 border-[#00f0ff]/40 text-[#00f0ff]",
    cyan: "bg-[#00f0ff]/25 border-[#00f0ff]/40 text-[#00f0ff]",
    blue: "bg-[#00b4d8]/25 border-[#00b4d8]/40 text-[#00b4d8]",
    coral: "bg-[#ff5e5e]/25 border-[#ff5e5e]/40 text-[#ff5e5e]",
    kraft: "bg-[#d4b483]/30 border-[#d4b483]/50 text-[#f4eee2]",
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`h-6 ${width} backdrop-blur-sm border-y border-dashed shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center font-mono-tech text-[9px] uppercase tracking-widest pointer-events-none select-none ${colorMap[color as keyof typeof colorMap] || colorMap.cyan} ${className}`}
    >
      {text && <span className="opacity-90 font-semibold px-1 truncate">{text}</span>}
    </div>
  );
}

interface StickyNoteProps {
  children: React.ReactNode;
  rotate?: number;
  color?: "dark" | "acid" | "cream" | "coral" | "cyan";
  tapeColor?: "acid" | "cyan" | "coral" | "kraft";
  className?: string;
  isDraggable?: boolean;
}

export function StickyNote({
  children,
  rotate = 2,
  color = "dark",
  tapeColor = "cyan",
  className = "",
  isDraggable = false,
}: StickyNoteProps) {
  const bgMap = {
    dark: "bg-[#141414] border border-white/10 text-[#ededed] shadow-[0_12px_28px_rgba(0,0,0,0.6)]",
    acid: "bg-[#00f0ff] text-black shadow-[0_12px_28px_rgba(0,240,255,0.3)] font-medium",
    cyan: "bg-[#00f0ff] text-black shadow-[0_12px_28px_rgba(0,240,255,0.3)] font-medium",
    cream: "bg-[#f4eee2] text-black shadow-[0_12px_28px_rgba(0,0,0,0.4)]",
    coral: "bg-[#ff5e5e] text-black shadow-[0_12px_28px_rgba(255,94,94,0.3)] font-medium",
  };

  const Content = (
    <div
      style={{ transform: isDraggable ? undefined : `rotate(${rotate}deg)` }}
      className={`relative p-4 rounded-sm transition-transform duration-300 hover:scale-[1.02] ${bgMap[color]} ${className}`}
    >
      {/* Top washi tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <WashiTape color={tapeColor} rotate={-1} width="w-20" />
      </div>
      {children}
    </div>
  );

  if (isDraggable) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
        className="cursor-grab active:cursor-grabbing"
      >
        {Content}
      </motion.div>
    );
  }

  return Content;
}

interface StampProps {
  text: string;
  variant?: "acid" | "cyan" | "white" | "coral" | "blue";
  rotate?: number;
  className?: string;
  icon?: string;
}

export function Stamp({
  text,
  variant = "cyan",
  rotate = -5,
  className = "",
  icon = "✦",
}: StampProps) {
  const variantMap = {
    acid: "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10",
    cyan: "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10",
    blue: "border-[#00b4d8] text-[#00b4d8] bg-[#00b4d8]/10",
    white: "border-white/40 text-white bg-white/5",
    coral: "border-[#ff5e5e] text-[#ff5e5e] bg-[#ff5e5e]/10",
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border border-dashed rounded-sm font-mono-tech text-[10px] uppercase tracking-widest select-none ${variantMap[variant]} ${className}`}
    >
      <span>{icon}</span>
      <span className="font-bold">{text}</span>
    </div>
  );
}

interface TechBadgeProps {
  label: string;
  value?: string;
  className?: string;
}

export function TechBadge({ label, value, className = "" }: TechBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[#a0a09d] tracking-wider ${className}`}>
      <span className="text-[#6b6b68]">[</span>
      <span className="text-[#f5f5f0]">{label}</span>
      {value && <span className="text-[#00f0ff]">/ {value}</span>}
      <span className="text-[#6b6b68]">]</span>
    </div>
  );
}
