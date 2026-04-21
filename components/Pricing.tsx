"use client";

import { useTranslations } from "next-intl";
import FadeUp from "./FadeUp";

export default function Pricing() {
  const t = useTranslations("pricing");

  const tiers = [
    { key: "tier1", highlight: false },
    { key: "tier2", highlight: true },
    { key: "tier3", highlight: false },
  ] as const;

  return (
    <section
      id="pricing"
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
            className="font-display tracking-tight mb-4 max-w-2xl"
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
          <p className="text-sm mb-16" style={{ color: "var(--color-ink-muted)" }}>
            {t("footnote")}
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {tiers.map(({ key, highlight }, i) => (
            <FadeUp key={key} delay={0.08 * i}>
              <div
                className="group relative flex flex-col h-full p-8 rounded-sm transition-all duration-300"
                style={
                  highlight
                    ? {
                        background:
                          "linear-gradient(145deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.08) 100%)",
                        border: "1px solid rgba(124,58,237,0.5)",
                        boxShadow:
                          "0 0 60px rgba(124,58,237,0.15), inset 0 1px 0 rgba(124,58,237,0.2)",
                      }
                    : {
                        background: "var(--color-bg-card)",
                        border: "1px solid var(--color-line)",
                      }
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (highlight) {
                    el.style.boxShadow =
                      "0 0 80px rgba(124,58,237,0.25), inset 0 1px 0 rgba(124,58,237,0.3)";
                    el.style.transform = "translateY(-4px)";
                  } else {
                    el.style.borderColor = "rgba(124,58,237,0.3)";
                    el.style.boxShadow =
                      "0 0 30px rgba(124,58,237,0.06)";
                    el.style.transform = "translateY(-3px)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (highlight) {
                    el.style.boxShadow =
                      "0 0 60px rgba(124,58,237,0.15), inset 0 1px 0 rgba(124,58,237,0.2)";
                    el.style.transform = "translateY(0)";
                  } else {
                    el.style.borderColor = "var(--color-line)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }
                }}
              >
                {/* Top shimmer line for highlight */}
                {highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--color-accent), var(--color-accent-2), transparent)",
                    }}
                  />
                )}

                {/* Badge */}
                {highlight && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full whitespace-nowrap"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
                      color: "#fff",
                    }}
                  >
                    {t(`${key}.badge`)}
                  </span>
                )}

                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: highlight ? "var(--color-accent)" : "var(--color-ink-muted)" }}
                >
                  {t(`${key}.name`)}
                </p>

                <p
                  className="font-display text-4xl md:text-5xl mb-2"
                  style={{ color: "var(--color-ink)", fontWeight: 400 }}
                >
                  {t(`${key}.price`)}
                </p>

                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {t(`${key}.tagline`)}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {(t.raw(`${key}.features`) as string[]).map((f, fi) => (
                    <li
                      key={fi}
                      className="text-sm flex items-start gap-2.5"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: "var(--color-accent-soft)",
                          color: "var(--color-accent)",
                          flexShrink: 0,
                        }}
                        aria-hidden
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/akram-zahwi/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3.5 text-sm font-medium rounded-sm transition-all duration-200"
                  style={
                    highlight
                      ? {
                          background:
                            "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
                          color: "#fff",
                          boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                        }
                      : {
                          border: "1px solid var(--color-line)",
                          color: "var(--color-ink)",
                          background: "transparent",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (highlight) {
                      e.currentTarget.style.boxShadow =
                        "0 4px 30px rgba(99,102,241,0.6)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    } else {
                      e.currentTarget.style.borderColor =
                        "rgba(99,102,241,0.4)";
                      e.currentTarget.style.color = "var(--color-accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (highlight) {
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(99,102,241,0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    } else {
                      e.currentTarget.style.borderColor = "var(--color-line)";
                      e.currentTarget.style.color = "var(--color-ink)";
                    }
                  }}
                  data-plausible="Book audit"
                >
                  {t(`${key}.cta`)}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
