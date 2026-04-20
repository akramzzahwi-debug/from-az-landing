"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

const stats = [
  { value: "5", label: "Day delivery" },
  { value: "3", label: "Max clients / month" },
  { value: "2", label: "Countries served" },
  { value: "∞", label: "Standards kept" },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="px-6 md:px-8 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <FadeUp>
              <p
                className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-6"
                style={{ color: "var(--color-ink-muted)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                {t("eyebrow")}
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2
                className="font-display tracking-tight mb-10"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  color: "var(--color-ink)",
                  fontWeight: 400,
                }}
              >
                {t("headline")}
              </h2>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p
                className="text-base md:text-lg mb-6"
                style={{ color: "var(--color-ink-muted)", lineHeight: 1.75 }}
              >
                {t("p1")}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="text-base md:text-lg"
                style={{ color: "var(--color-ink-muted)", lineHeight: 1.75 }}
              >
                {t("p2")}
              </p>
            </FadeUp>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <FadeUp key={i} delay={0.12 + i * 0.06}>
                <div
                  className="group p-6 rounded-sm transition-all duration-300 cursor-default"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-line)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(124,58,237,0.4)";
                    el.style.boxShadow =
                      "0 0 30px rgba(124,58,237,0.08), inset 0 1px 0 rgba(124,58,237,0.1)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-line)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <p
                    className="font-display text-4xl mb-1"
                    style={{ color: "var(--color-accent)", fontWeight: 400 }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
