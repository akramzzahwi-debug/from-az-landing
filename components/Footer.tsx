"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-8 py-12"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1160px" }}>
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 mb-6"
          style={{ borderBottom: "1px solid var(--color-line)" }}
        >
          <span
            className="font-display text-base transition-colors duration-200 cursor-default"
            style={{ color: "var(--color-ink)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-ink)")
            }
          >
            From A/Z
          </span>
          <span className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            {t("tagline")}
          </span>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6"
          style={{ borderBottom: "1px solid var(--color-line)" }}
        >
          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <a
              href={`mailto:${t("email")}`}
              className="transition-colors duration-200"
              style={{ color: "var(--color-ink-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-ink-muted)")
              }
              data-plausible="Email click"
            >
              {t("email")}
            </a>
            <span aria-hidden style={{ color: "var(--color-line)" }}>
              ·
            </span>
            <a
              href="https://instagram.com/akramzahwi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--color-ink-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-ink-muted)")
              }
              data-plausible="Instagram click"
            >
              {t("ig")}
            </a>
            <span aria-hidden style={{ color: "var(--color-line)" }}>
              ·
            </span>
            <a
              href="#contact"
              className="transition-colors duration-200"
              style={{ color: "var(--color-ink-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-ink-muted)")
              }
              data-plausible="Book audit"
            >
              {t("book")}
            </a>
          </div>
        </div>

        <p className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
          {t("copy", { year })}
        </p>
      </div>
    </footer>
  );
}
