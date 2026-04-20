"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function ProblemBlock() {
  const t = useTranslations("problem");
  const lines = [t("line1"), t("line2"), t("line3")];

  return (
    <section
      className="px-6 md:px-8 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
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
            className="font-display leading-tight tracking-tight mb-16 max-w-3xl"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--color-ink)",
              fontWeight: 400,
            }}
          >
            {t("headline")}
          </h2>
        </FadeUp>

        <div>
          {lines.map((line, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.07}>
              <div
                className="group py-6 border-t cursor-default transition-all duration-300"
                style={{ borderColor: "var(--color-line)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(124,58,237,0.4)";
                  const p = e.currentTarget.querySelector("p");
                  if (p) p.style.color = "var(--color-ink)";
                  const dot = e.currentTarget.querySelector(".line-dot");
                  if (dot) (dot as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-line)";
                  const p = e.currentTarget.querySelector("p");
                  if (p) p.style.color = "var(--color-ink-muted)";
                  const dot = e.currentTarget.querySelector(".line-dot");
                  if (dot) (dot as HTMLElement).style.opacity = "0";
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="line-dot mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-300"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      opacity: 0,
                    }}
                  />
                  <p
                    className="text-lg md:text-xl transition-colors duration-300"
                    style={{ color: "var(--color-ink-muted)", lineHeight: 1.65 }}
                  >
                    {line}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
