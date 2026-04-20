"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function Process() {
  const t = useTranslations("process");
  const steps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <section
      className="px-6 md:px-8 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
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
            className="font-display tracking-tight mb-16 max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--color-ink)",
              fontWeight: 400,
            }}
          >
            {t("headline")}
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-4 gap-4 items-stretch">
          {steps.map((step, i) => (
            <FadeUp key={step} delay={0.07 * i} className="h-full">
              <div
                className="group relative h-full p-6 pb-8 rounded-sm transition-all duration-300 cursor-default"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-line)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,58,237,0.4)";
                  el.style.boxShadow =
                    "0 0 30px rgba(124,58,237,0.08), inset 0 1px 0 rgba(124,58,237,0.1)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-line)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Step number */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-5 text-xs font-bold transition-all duration-300"
                  style={{
                    background: "var(--color-accent-soft)",
                    color: "var(--color-accent)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {i + 1}
                </div>

                <span
                  className="text-xs font-semibold tracking-wider uppercase block mb-3 transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                  style={{ color: "var(--color-accent)" }}
                >
                  {t(`${step}.day`)}
                </span>

                <h3
                  className="font-display text-lg mb-3"
                  style={{ color: "var(--color-ink)", fontWeight: 400 }}
                >
                  {t(`${step}.title`)}
                </h3>

                <p
                  className="text-sm"
                  style={{ color: "var(--color-ink-muted)", lineHeight: 1.7 }}
                >
                  {t(`${step}.body`)}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                  }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
