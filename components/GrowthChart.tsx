"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function GrowthChart() {
  const t = useTranslations("growth");
  const [value, setValue] = useState(0.5); // 0 to 1 representing 1 to 12 months

  // Chart path calculation
  const months = 12;
  const width = 800;
  const height = 300;
  
  // Legacy curve (shallow)
  const legacyPoints = Array.from({ length: months + 1 }).map((_, i) => {
    const x = (i / months) * width;
    const y = height - (Math.pow(i, 1.2) * 5 + 50);
    return `${x},${y}`;
  }).join(" ");

  // Optimized curve (steep)
  const optimizedPoints = Array.from({ length: months + 1 }).map((_, i) => {
    const x = (i / months) * width;
    const y = height - (Math.pow(i, 2.1) * 2 + 50);
    return `${x},${y}`;
  }).join(" ");

  // Handle slider interaction
  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  };

  return (
    <section className="px-6 md:px-8 py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <FadeUp>
              <p className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--color-ink-muted)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                {t("eyebrow")}
              </p>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="font-display tracking-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-ink)", fontWeight: 400, lineHeight: 1.1 }}>
                {t("headline")}
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-lg mb-12" style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
                {t("sub")}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium uppercase tracking-widest text-white/40">{t("label")}</span>
                  <span className="font-display text-4xl text-white">{Math.round(value * 12)}</span>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={value} 
                  onChange={handleSlider}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-indigo-500"
                  style={{
                    WebkitAppearance: "none",
                    background: `linear-gradient(90deg, var(--color-accent) ${value * 100}%, rgba(255,255,255,0.1) ${value * 100}%)`
                  }}
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="relative">
            <div className="relative aspect-[4/3] w-full bg-white/[0.02] border border-white/[0.05] rounded-sm p-8 flex flex-col justify-end overflow-hidden group">
              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
                backgroundImage: "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />

              {/* Chart SVG */}
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible relative z-10">
                <defs>
                  <clipPath id="optimized-reveal">
                    <motion.rect
                      x="0"
                      y="-20"
                      height={height + 40}
                      animate={{ width: value * width }}
                      transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    />
                  </clipPath>
                </defs>

                {/* Legacy Line */}
                <polyline
                  points={legacyPoints}
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Optimized Line — revealed by clipPath */}
                <polyline
                  points={optimizedPoints}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  clipPath="url(#optimized-reveal)"
                />

                {/* Legend Labels */}
                <g fill="currentColor">
                  <text x="10" y="40" opacity={0.4} style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>{t("legacy")}</text>
                  <text x="10" y="15" style={{ fill: "var(--color-accent)", fontWeight: 600, fontFamily: "var(--font-inter)", fontSize: 14 }}>{t("optimized")}</text>
                </g>
              </svg>

              {/* Stats Overlay */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10 relative z-10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{t("stat1")}</p>
                  <motion.p className="text-2xl font-display text-white">
                    {t("stat1Value", { val: Math.round(value * 280) })}
                  </motion.p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{t("stat2")}</p>
                  <motion.p className="text-2xl font-display text-white">
                    {t("stat2Value", { val: Math.round(value * 42) })}
                  </motion.p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
