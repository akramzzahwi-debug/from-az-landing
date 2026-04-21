"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1value"), unit: t("stat1unit"), label: t("stat1label") },
    { value: t("stat2value"), unit: t("stat2unit"), label: t("stat2label") },
    { value: t("stat3value"), unit: t("stat3unit"), label: t("stat3label") },
  ];

  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        [eyebrowRef, subheadRef, ctaRef, orbRef].forEach((r) => {
          if (r.current) r.current.style.opacity = "1";
        });
        headlineRef.current
          ?.querySelectorAll<HTMLElement>(".word")
          .forEach((w) => (w.style.opacity = "1"));
        return;
      }

      const { gsap } = await import("gsap");

      const words = headlineRef.current?.querySelectorAll<HTMLElement>(".word");
      if (!words) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          words,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.055 },
          "-=0.2"
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.35"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.4"
        )
        .fromTo(
          orbRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
          0
        );
    };

    init();
  }, []);

  const headline = t("headline");
  const words = headline.split(" ");
  const half = Math.ceil(words.length / 2);
  const brightWords = words.slice(0, half);
  const mutedWords = words.slice(half);

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen px-6 md:px-8 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Background ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "-5%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.06) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="mx-auto w-full relative z-10"
        style={{ maxWidth: "1160px" }}
      >
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p
              ref={eyebrowRef}
              className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-8"
              style={{ color: "var(--color-ink-muted)", opacity: 0 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "var(--color-accent)",
                  boxShadow: "0 0 6px var(--color-accent)",
                }}
              />
              {t("eyebrow")}
            </p>

            <h1
              ref={headlineRef}
              className="font-display leading-[1.05] tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                fontWeight: 400,
              }}
            >
              {brightWords.map((word, i) => (
                <span
                  key={i}
                  className="word inline-block"
                  style={{
                    color: "var(--color-ink)",
                    marginRight: "0.28em",
                    opacity: 0,
                  }}
                >
                  {word}
                </span>
              ))}
              {mutedWords.map((word, i) => (
                <span
                  key={i + brightWords.length}
                  className="word inline-block"
                  style={{
                    color: "var(--color-ink-muted)",
                    marginRight: "0.28em",
                    opacity: 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={subheadRef}
              className="text-lg md:text-xl max-w-xl mb-12"
              style={{
                color: "var(--color-ink-muted)",
                lineHeight: 1.65,
                opacity: 0,
              }}
            >
              {t("subhead")}
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{ opacity: 0 }}
            >
              <a
                href="https://cal.com/akram-zahwi/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(124,58,237,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6D28D9";
                  e.currentTarget.style.boxShadow =
                    "0 0 36px rgba(124,58,237,0.6)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(124,58,237,0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                data-plausible="Book audit"
              >
                {t("cta")}
                <span aria-hidden>↗</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center px-6 py-3.5 text-sm font-medium transition-all duration-200 rounded-sm"
                style={{
                  color: "var(--color-ink-muted)",
                  border: "1px solid var(--color-line)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-ink)";
                  e.currentTarget.style.borderColor =
                    "rgba(124,58,237,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-ink-muted)";
                  e.currentTarget.style.borderColor = "var(--color-line)";
                }}
              >
                {t("secondary")}
              </a>
            </div>
          </div>

          {/* Right: Glow orb + floating stat cards */}
          <div
            ref={orbRef}
            className="hidden md:block relative h-[460px]"
            style={{ opacity: 0 }}
          >
            {/* Main glow */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: "none" }}
            >
              <div
                style={{
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 38% 38%, rgba(99,102,241,0.2) 0%, rgba(79,70,229,0.1) 40%, transparent 70%)",
                  filter: "blur(60px)",
                  animation: "pulse-orb 8s ease-in-out infinite",
                }}
              />
            </div>

            {/* Secondary glow ring */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: "none" }}
            >
              <div
                style={{
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow:
                    "inset 0 0 40px rgba(124,58,237,0.1), 0 0 60px rgba(124,58,237,0.08)",
                  animation: "pulse-orb 5s ease-in-out infinite reverse",
                }}
              />
            </div>

            {/* Stat card 1 */}
            <div
              className="absolute"
              style={{
                top: "12%",
                right: "8%",
                animation: "float-a 6s ease-in-out infinite",
              }}
            >
              <StatCard value={stats[0].value} unit={stats[0].unit} label={stats[0].label} />
            </div>

            {/* Stat card 2 */}
            <div
              className="absolute"
              style={{
                bottom: "22%",
                left: "4%",
                animation: "float-b 7s ease-in-out infinite",
              }}
            >
              <StatCard value={stats[1].value} unit={stats[1].unit} label={stats[1].label} />
            </div>

            {/* Stat card 3 */}
            <div
              className="absolute"
              style={{
                bottom: "10%",
                right: "15%",
                animation: "float-c 8s ease-in-out infinite",
              }}
            >
              <StatCard value={stats[2].value} unit={stats[2].unit} label={stats[2].label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  unit,
  label,
}: {
  value: string;
  unit: string;
  label: string;
}) {
  return (
    <div
      className="relative rounded-xl px-5 py-4 transition-all duration-300"
      style={{
        background: "rgba(19,19,31,0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(124,58,237,0.25)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        minWidth: "130px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(124,58,237,0.6)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(124,58,237,0.25)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
    >
      <div className="flex items-baseline gap-0.5 mb-1">
        <span
          className="font-display text-2xl font-semibold"
          style={{ color: "var(--color-ink)" }}
        >
          {value}
        </span>
        <span className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
          {unit}
        </span>
      </div>
      <p className="text-xs tracking-wide" style={{ color: "var(--color-ink-muted)" }}>
        {label}
      </p>
    </div>
  );
}
