"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function FeaturedClient() {
  const t = useTranslations("client");
  const projects = ["project1", "project2", "project3"] as const;

  return (
    <section
      id="work"
      className="px-6 md:px-8 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
        {/* Header — single column */}
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
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}
          >
            {t("intro")}
          </p>
        </FadeUp>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-4 items-stretch mt-12">
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
                  el.style.borderColor = "rgba(99,102,241,0.4)";
                  el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-line)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-full aspect-[16/9] relative overflow-hidden"
                  style={{ borderBottom: "1px solid var(--color-line)" }}
                >
                  <Image
                    src={`/assets/${proj}.png`}
                    alt={t(`${proj}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(99,102,241,0.1), transparent 70%)",
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
                    className="font-display text-xl mb-3 transition-colors duration-300"
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

        {/* Pull-quote strip */}
        <FadeUp delay={0.16}>
          <div
            className="mt-16 md:mt-20 pt-10 md:pt-12"
            style={{ borderTop: "1px solid var(--color-line)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="font-display flex-shrink-0 leading-none select-none"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: "var(--color-accent)",
                  opacity: 0.25,
                  fontWeight: 400,
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <blockquote
                className="flex-1 text-base md:text-lg italic"
                style={{ color: "var(--color-ink-muted)", lineHeight: 1.75 }}
              >
                {t("testimonial.quote")}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 flex-shrink-0 mt-6 md:mt-0">
                <div
                  className="rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    width: "56px",
                    height: "56px",
                    border: "2px solid var(--color-line)",
                  }}
                >
                  <Image
                    src="/assets/testimonials/mojca-majhen.png"
                    alt={t("testimonial.name")}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium whitespace-nowrap"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {t("testimonial.name")}
                  </p>
                  <p
                    className="text-xs whitespace-nowrap"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {t("testimonial.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
