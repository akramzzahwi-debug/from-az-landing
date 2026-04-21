"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next;
    startTransition(() => {
      router.replace(segments.join("/") || "/");
    });
  }

  return (
    <div
      className="flex items-center gap-1 text-xs font-medium tracking-wider uppercase"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--color-line)",
        borderRadius: "4px",
        padding: "4px 6px",
      }}
    >
      {(["en", "sl"] as const).map((lang, i) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          disabled={isPending}
          className="transition-all duration-200 px-2 py-0.5 rounded-sm text-xs"
          style={
            locale === lang
              ? {
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                  boxShadow: "0 0 10px rgba(99,102,241,0.4)",
                }
              : { color: "var(--color-ink-muted)" }
          }
          onMouseEnter={(e) => {
            if (locale !== lang)
              e.currentTarget.style.color = "var(--color-ink)";
          }}
          onMouseLeave={(e) => {
            if (locale !== lang)
              e.currentTarget.style.color = "var(--color-ink-muted)";
          }}
          aria-label={
            lang === "en" ? "Switch to English" : "Preklopi na slovenščino"
          }
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
