"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function Pillars() {
  const t = useTranslations("pillars");
  const cols = ["col1", "col2", "col3"] as const;

  return (
    <section
      id="work"
      className="px-6 md:px-8 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
        <FadeUp>
          <p
            className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-16"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            {t("eyebrow")}
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-px items-stretch">
          {cols.map((col, i) => (
            <FadeUp key={col} delay={0.08 * i} className="h-full">
              <article
                className="group relative h-full p-8 pb-12 transition-all duration-300 cursor-default"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-line)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(99,102,241,0.35)";
                  el.style.background = "rgba(15,15,22,0.95)";
                  el.style.boxShadow =
                    "0 0 40px rgba(99,102,241,0.06), inset 0 1px 0 rgba(99,102,241,0.08)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-line)";
                  el.style.background = "var(--color-bg-card)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                  }}
                />

                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  {t(`${col}.kicker`)}
                </p>

                <h3
                  className="font-display text-xl md:text-2xl mb-4 leading-snug"
                  style={{ color: "var(--color-ink)", fontWeight: 400 }}
                >
                  {t(`${col}.title`)}
                </h3>

                <p
                  className="text-base"
                  style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}
                >
                  {t(`${col}.body`)}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
