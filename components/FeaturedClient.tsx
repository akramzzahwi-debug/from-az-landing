"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function FeaturedClient() {
  const t = useTranslations("client");
  const projects = ["project1", "project2", "project3"] as const;

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
            className="font-display tracking-tight mb-6 max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--color-ink)",
              fontWeight: 400,
            }}
          >
            {t("headline")}
          </h2>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p
            className="text-base md:text-lg max-w-2xl mb-20"
            style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}
          >
            {t("intro")}
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {projects.map((proj, i) => (
            <FadeUp key={proj} delay={0.08 * i} className="h-full">
              <article
                className="group relative h-full overflow-hidden rounded-sm transition-all duration-300 cursor-default"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-line)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,58,237,0.4)";
                  el.style.boxShadow =
                    "0 0 40px rgba(124,58,237,0.1), 0 20px 60px rgba(0,0,0,0.3)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-line)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top gradient accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                  }}
                />

                {/* Project Image */}
                <div
                  className="w-full aspect-[16/9] relative overflow-hidden"
                  style={{
                    borderBottom: "1px solid var(--color-line)",
                  }}
                >
                  <img
                    src={`/assets/${proj}.png`}
                    alt={t(`${proj}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(124,58,237,0.12), transparent 70%)",
                    }}
                  />
                </div>

                <div className="p-6">
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-4"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {t(`${proj}.tag`)}
                  </p>

                  <h3
                    className="font-display text-xl mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "var(--color-ink)", fontWeight: 400 }}
                  >
                    {t(`${proj}.title`)}
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}
                  >
                    {t(`${proj}.body`)}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
