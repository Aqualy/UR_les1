"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--mx": `${mousePosition.x}%`,
          "--my": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 animate-gradient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.1) 25%, rgba(245, 245, 245, 0.95) 50%, rgba(230, 230, 230, 0.8) 75%, rgba(220, 220, 220, 0.6) 100%), linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(235, 235, 235, 0.95))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating orbs for atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[20%] top-[15%] h-64 w-64 rounded-full bg-blue-200/30 blur-3xl animate-in fade-in zoom-in duration-1000" />
        <div className="absolute right-[15%] top-[60%] h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-in fade-in zoom-in duration-1000 delay-300" />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-pink-200/20 blur-3xl animate-in fade-in zoom-in duration-1000 delay-500" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-24 pt-35 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            Research - Design - Build
          </div>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-3 duration-700">
              Tiebo Baerten
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-foreground/70 sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              A portfolio that mixes craft with curiosity. I explore user behavior, prototype fast,
              and ship experiences that feel intentional and alive.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Link
              href="/project"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
            >
              Say Hello
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-foreground/60 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1">UX Research</span>
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1">Interaction Design</span>
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1">Rapid Prototyping</span>
            <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1">Design Systems</span>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-6 duration-700">
          <div className="space-y-4 rounded-3xl border border-foreground/10 bg-background/90 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Lab Notes</span>
              <span className="rounded-full border border-foreground/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                2026
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-foreground/80">
                Experimental layouts, grounded in evidence. I map insights to visuals that feel
                human, clear, and slightly unexpected.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {[
                  { label: "Research", detail: "Story-driven insights" },
                  { label: "Design", detail: "Bold interaction maps" },
                  { label: "Prototype", detail: "Fast, tactile testing" },
                  { label: "Ship", detail: "Polished, resilient UI" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-foreground/10 bg-background/80 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between border-t border-foreground/10 px-4 py-6 text-xs uppercase tracking-[0.3em] text-foreground/50 animate-in fade-in duration-700">
        <span>Portfolio</span>
        <span>Experiments</span>
        <span>Signal</span>
      </div>
    </div>
  );
}
