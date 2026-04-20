"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import LangToggle from "./LangToggle";

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(9,9,11,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div
        className="mx-auto px-6 md:px-8 flex items-center justify-between h-16"
        style={{ maxWidth: "1160px" }}
      >
        <Link
          href="#"
          className="font-display text-lg tracking-tight transition-colors duration-200"
          style={{ color: "var(--color-ink)" }}
          aria-label="From A/Z — home"
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-ink)")
          }
        >
          From A<span style={{ color: "var(--color-accent)", fontStyle: "italic", margin: "0 1px" }}>/</span>Z
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {(["work", "pricing", "about"] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="relative text-sm transition-colors duration-200 group"
              style={{ color: "var(--color-ink-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-ink)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-ink-muted)")
              }
            >
              {t(key)}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <LangToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(124,58,237,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6D28D9";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(124,58,237,0.55)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(124,58,237,0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            data-plausible="Book audit"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
