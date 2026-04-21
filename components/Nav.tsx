"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import LangToggle from "./LangToggle";

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = ["work", "pricing", "about"] as const;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled || menuOpen ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px) saturate(160%)" : "none",
          borderBottom: scrolled || menuOpen
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto px-6 md:px-8 flex items-center justify-between h-16"
          style={{ maxWidth: "1160px" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-display text-lg tracking-tight transition-colors duration-200 relative z-50"
            style={{ color: "var(--color-ink)" }}
            aria-label="From A/Z — home"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
          >
            From A<span style={{ color: "var(--color-accent)", fontStyle: "italic", margin: "0 1px" }}>/</span>Z
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative text-sm transition-colors duration-200 group"
                style={{ color: "var(--color-ink-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-muted)")}
              >
                {t(key)}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6">
            <LangToggle />
            <a
              href="https://cal.com/akram-zahwi/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(99,102,241,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent-2)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              data-plausible="Book audit"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-3 relative z-50">
            <LangToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-sm transition-all duration-200 cursor-pointer"
              style={{
                border: "1px solid",
                borderColor: menuOpen ? "rgba(99,102,241,0.5)" : "var(--color-line)",
                backgroundColor: menuOpen ? "var(--color-accent-soft)" : "transparent",
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className="block w-5 h-px"
                style={{
                  backgroundColor: "var(--color-ink)",
                  transition: "transform 300ms ease",
                  transform: menuOpen ? "translateY(1px) rotate(45deg)" : "translateY(-3px)",
                }}
              />
              <span
                className="block w-5 h-px"
                style={{
                  backgroundColor: "var(--color-ink)",
                  transition: "transform 300ms ease",
                  transform: menuOpen ? "translateY(-1px) rotate(-45deg)" : "translateY(3px)",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col"
        style={{
          backgroundColor: "rgba(5,5,5,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 300ms ease",
        }}
      >
        {/* Top accent line */}
        <div
          className="h-px w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent) 40%, var(--color-accent-2) 60%, transparent 100%)",
            marginTop: "64px",
          }}
        />

        {/* Nav links */}
        <nav className="flex flex-col justify-center flex-1 px-8">
          {navLinks.map((key, i) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-5 py-6"
              style={{
                borderBottom: "1px solid var(--color-line)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 350ms ease ${i * 70 + 80}ms, transform 350ms ease ${i * 70 + 80}ms`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  opacity: 0.4,
                }}
              />
              <span
                className="font-display tracking-tight transition-colors duration-200"
                style={{
                  fontSize: "clamp(2rem, 8vw, 2.75rem)",
                  fontWeight: 400,
                  color: "var(--color-ink-muted)",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.color = "var(--color-ink)");
                  const dot = e.currentTarget.previousElementSibling as HTMLElement;
                  if (dot) { dot.style.opacity = "1"; dot.style.boxShadow = "0 0 8px var(--color-accent)"; }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.color = "var(--color-ink-muted)");
                  const dot = e.currentTarget.previousElementSibling as HTMLElement;
                  if (dot) { dot.style.opacity = "0.4"; dot.style.boxShadow = "none"; }
                }}
              >
                {t(key)}
              </span>
              <span
                className="ml-auto text-xs tracking-widest uppercase transition-all duration-200"
                style={{ color: "var(--color-accent)", opacity: 0 }}
              >
                ↗
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-8 pb-12 pt-6 flex flex-col gap-4"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 350ms ease 320ms, transform 350ms ease 320ms`,
          }}
        >
          <a
            href="https://cal.com/akram-zahwi/15min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium rounded-sm transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
              color: "#fff",
              boxShadow: "0 0 30px rgba(99,102,241,0.3)",
            }}
            data-plausible="Book audit"
          >
            {t("cta")}
            <span aria-hidden>↗</span>
          </a>
          <p
            className="text-center text-xs tracking-wider"
            style={{ color: "var(--color-ink-muted)" }}
          >
            from-az.com
          </p>
        </div>
      </div>
    </>
  );
}
