"use client";

import React from "react";
import { motion } from "framer-motion";

export type TagColor = "pink" | "red" | "yellow" | "green" | "cyan" | "blue" | "orange" | "purple" | "kraft" | "acid" | "coral";

interface WashiTapeProps {
  color?: TagColor;
  rotate?: number;
  text?: string;
  className?: string;
  width?: string;
}

export function WashiTape({
  color = "yellow",
  rotate = -3,
  text,
  className = "",
  width = "w-28",
}: WashiTapeProps) {
  const colorMap: Record<string, string> = {
    pink: "bg-[#ff70a6]/25 border-[#ff70a6]/45 text-[#ff70a6]",
    red: "bg-[#ff4d4d]/25 border-[#ff4d4d]/45 text-[#ff4d4d]",
    coral: "bg-[#ff5e5e]/25 border-[#ff5e5e]/45 text-[#ff5e5e]",
    yellow: "bg-[#ffe600]/25 border-[#ffe600]/45 text-[#ffe600]",
    acid: "bg-[#ffe600]/25 border-[#ffe600]/45 text-[#ffe600]",
    green: "bg-[#00e676]/25 border-[#00e676]/45 text-[#00e676]",
    cyan: "bg-[#00f0ff]/25 border-[#00f0ff]/45 text-[#00f0ff]",
    blue: "bg-[#00b4d8]/25 border-[#00b4d8]/45 text-[#00b4d8]",
    orange: "bg-[#ff9f1c]/25 border-[#ff9f1c]/45 text-[#ff9f1c]",
    purple: "bg-[#b388ff]/25 border-[#b388ff]/45 text-[#b388ff]",
    kraft: "bg-[#d4b483]/30 border-[#d4b483]/50 text-[#f4eee2]",
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`h-6 ${width} backdrop-blur-sm border-y border-dashed shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center font-mono-tech text-[9px] uppercase tracking-widest pointer-events-none select-none ${colorMap[color] || colorMap.yellow} ${className}`}
    >
      {text && <span className="opacity-95 font-bold px-1 truncate">{text}</span>}
    </div>
  );
}

interface StickyNoteProps {
  children: React.ReactNode;
  rotate?: number;
  color?: "dark" | "pink" | "yellow" | "green" | "red" | "cyan" | "cream" | "acid" | "coral";
  tapeColor?: TagColor;
  className?: string;
  isDraggable?: boolean;
}

export function StickyNote({
  children,
  rotate = 2,
  color = "dark",
  tapeColor = "yellow",
  className = "",
  isDraggable = false,
}: StickyNoteProps) {
  const bgMap: Record<string, string> = {
    dark: "bg-[#141414] border border-white/10 text-[#ededed] shadow-[0_12px_28px_rgba(0,0,0,0.6)]",
    pink: "bg-[#ff70a6] text-black shadow-[0_12px_28px_rgba(255,112,166,0.3)] font-medium",
    red: "bg-[#ff4d4d] text-black shadow-[0_12px_28px_rgba(255,77,77,0.3)] font-medium",
    coral: "bg-[#ff5e5e] text-black shadow-[0_12px_28px_rgba(255,94,94,0.3)] font-medium",
    yellow: "bg-[#ffe600] text-black shadow-[0_12px_28px_rgba(255,230,0,0.3)] font-medium",
    acid: "bg-[#ffe600] text-black shadow-[0_12px_28px_rgba(255,230,0,0.3)] font-medium",
    green: "bg-[#00e676] text-black shadow-[0_12px_28px_rgba(0,230,118,0.3)] font-medium",
    cyan: "bg-[#00f0ff] text-black shadow-[0_12px_28px_rgba(0,240,255,0.3)] font-medium",
    cream: "bg-[#f4eee2] text-black shadow-[0_12px_28px_rgba(0,0,0,0.4)]",
  };

  const Content = (
    <div
      style={{ transform: isDraggable ? undefined : `rotate(${rotate}deg)` }}
      className={`relative p-4 rounded-sm transition-transform duration-300 hover:scale-[1.02] ${bgMap[color] || bgMap.dark} ${className}`}
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
  variant?: "pink" | "red" | "yellow" | "green" | "cyan" | "blue" | "orange" | "purple" | "white" | "acid" | "coral";
  rotate?: number;
  className?: string;
  icon?: string;
}

export function Stamp({
  text,
  variant = "pink",
  rotate = -5,
  className = "",
  icon = "✦",
}: StampProps) {
  const variantMap: Record<string, string> = {
    pink: "border-[#ff70a6] text-[#ff70a6] bg-[#ff70a6]/10",
    red: "border-[#ff4d4d] text-[#ff4d4d] bg-[#ff4d4d]/10",
    coral: "border-[#ff5e5e] text-[#ff5e5e] bg-[#ff5e5e]/10",
    yellow: "border-[#ffe600] text-[#ffe600] bg-[#ffe600]/10",
    acid: "border-[#ffe600] text-[#ffe600] bg-[#ffe600]/10",
    green: "border-[#00e676] text-[#00e676] bg-[#00e676]/10",
    cyan: "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10",
    blue: "border-[#00b4d8] text-[#00b4d8] bg-[#00b4d8]/10",
    orange: "border-[#ff9f1c] text-[#ff9f1c] bg-[#ff9f1c]/10",
    purple: "border-[#b388ff] text-[#b388ff] bg-[#b388ff]/10",
    white: "border-white/40 text-white bg-white/5",
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border border-dashed rounded-sm font-mono-tech text-[10px] uppercase tracking-widest select-none ${variantMap[variant] || variantMap.pink} ${className}`}
    >
      <span>{icon}</span>
      <span className="font-bold">{text}</span>
    </div>
  );
}

interface TechBadgeProps {
  label: string;
  value?: string;
  color?: "cyan" | "pink" | "yellow" | "green" | "red" | "purple";
  className?: string;
}

export function TechBadge({ label, value, color = "pink", className = "" }: TechBadgeProps) {
  const colorClassMap: Record<string, string> = {
    pink: "text-[#ff70a6]",
    yellow: "text-[#ffe600]",
    green: "text-[#00e676]",
    cyan: "text-[#00f0ff]",
    red: "text-[#ff4d4d]",
    purple: "text-[#b388ff]",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[#a0a09d] tracking-wider ${className}`}>
      <span className="text-[#6b6b68]">[</span>
      <span className="text-[#f5f5f0]">{label}</span>
      {value && <span className={colorClassMap[color] || "text-[#ff70a6]"}>/ {value}</span>}
      <span className="text-[#6b6b68]">]</span>
    </div>
  );
}
