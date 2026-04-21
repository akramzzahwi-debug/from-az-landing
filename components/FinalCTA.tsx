"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section
      id="contact"
      className="relative px-6 md:px-8 py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0533 0%, #0f0a2e 40%, #090918 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          left: "10%",
          width: "50%",
          height: "120%",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "5%",
          width: "40%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(79,70,229,0.2) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.6) 30%, rgba(79,70,229,0.6) 70%, transparent 100%)",
        }}
      />

      <div
        className="mx-auto text-center relative z-10"
        style={{ maxWidth: "1160px" }}
      >
        <FadeUp>
          <p className="flex items-center justify-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-6 text-white/50">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 0 8px var(--color-accent)",
              }}
            />
            {t("eyebrow")}
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2
            className="font-display tracking-tight mb-10 mx-auto text-white"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: "800px",
            }}
          >
            {t("headline")}
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <a
            href="https://cal.com/akram-zahwi/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm mb-6 transition-all duration-200"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
              color: "#fff",
              boxShadow:
                "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.2)";
              e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
            data-plausible="Book audit"
          >
            {t("button")}
            <span aria-hidden>↗</span>
          </a>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-sm text-white/40">{t("sub")}</p>
        </FadeUp>
      </div>
    </section>
  );
}
