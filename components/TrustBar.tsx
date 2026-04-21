"use client";

import { useEffect, useRef } from "react";

const clients = [
  { 
    name: "369 Place", 
    svg: (
      <svg width="80" height="40" viewBox="0 0 100 50" fill="white">
        <text x="50%" y="22" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="28">369</text>
        <text x="50%" y="42" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="11" letterSpacing="4" opacity="0.8">PLACE</text>
      </svg>
    )
  },
  { 
    name: "1of1 Cars", 
    svg: (
      <svg width="100" height="30" viewBox="0 0 120 40" fill="white">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="900" fontSize="26">1OF1</text>
      </svg>
    )
  },
  { 
    name: "La Beauté", 
    svg: (
      <svg width="150" height="40" viewBox="0 0 180 50" fill="white">
        <text x="50%" y="30" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="22" letterSpacing="4">LA BEAUTÉ</text>
        <text x="50%" y="45" dominantBaseline="middle" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="8" letterSpacing="2" opacity="0.7">STUDIO &amp; ACADEMY</text>
      </svg>
    )
  },
  { 
    name: "Vector International Academy", 
    svg: (
      <svg width="160" height="50" viewBox="0 0 180 60" fill="white">
        <path d="M10 20L30 45L50 20M30 45V15L35 22M30 15L25 22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="60" y="28" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">VECTOR</text>
        <text x="60" y="42" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="9" letterSpacing="2">INTERNATIONAL</text>
        <text x="60" y="52" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="9" letterSpacing="2">ACADEMY</text>
      </svg>
    )
  },
  { 
    name: "Roky's Place", 
    svg: (
      <svg width="50" height="50" viewBox="0 0 60 60" fill="white">
        <path d="M18 12C18 10.8954 18.8954 10 20 10H38C46.8366 10 54 17.1634 54 26C54 34.8366 46.8366 42 38 42H29L45 54" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M18 10L12 48C11.5 52 14.5 55 18 55C21.5 55 24.5 52 24 48L18 10Z" fill="white" stroke="white" strokeWidth="1"/>
        <circle cx="18" cy="50" r="2" fill="var(--color-bg)"/>
      </svg>
    )
  },
  { 
    name: "(iam)", 
    svg: (
      <svg width="100" height="30" viewBox="0 0 120 40" fill="white">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Courier, monospace" fontWeight="bold" fontSize="24">(iam)</text>
      </svg>
    )
  },
];

const doubled = [...clients, ...clients, ...clients];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | undefined;

    const init = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const { gsap } = await import("gsap");

      tween = gsap.to(track, {
        xPercent: -50,
        duration: 32,
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
      className="relative overflow-hidden py-6 md:py-8"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
      />

      <div ref={trackRef} className="flex items-center will-change-transform whitespace-nowrap">
        {doubled.map((client, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center px-16 md:px-20 transition-all duration-500 group"
          >
            <div className="relative flex items-center justify-center opacity-40 transition-opacity duration-500 group-hover:opacity-100">
              <div className="h-10 md:h-12 flex items-center justify-center">
                {client.svg}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
