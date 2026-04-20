"use client";

import { useEffect, useRef } from "react";

const clients = [
  "369 Place",
  "1of1 Cars",
  "La Beauté, Studio & Academy",
  "Vector International Academy",
  "Roky's Place",
  "(iam)",
];

const doubled = [...clients, ...clients];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | undefined;

    const init = async () => {
      const { gsap } = await import("gsap");

      tween = gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      track.addEventListener("mouseenter", () => tween?.timeScale(0.3));
      track.addEventListener("mouseleave", () => tween?.timeScale(1));
    };

    init();

    return () => {
      tween?.kill();
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-alt), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--color-bg-alt), transparent)",
        }}
      />

      <div ref={trackRef} className="flex items-center will-change-transform whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-10 text-sm font-medium tracking-wider uppercase transition-colors duration-200 cursor-default"
            style={{ color: "var(--color-ink-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-ink)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-ink-muted)")
            }
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
