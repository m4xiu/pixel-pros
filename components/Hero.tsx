"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const introSection = document.getElementById("introduction");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#161714] text-[#FAF8F5]">
      {/* Background Image with Cinematic Tonal Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pixel-pros/hero/pixel-pros-hero-01.webp"
          alt="Pixel Pros Photography - Stories Worth Remembering in Marthandam"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-[12000ms] ease-out will-change-transform"
        />
        {/* Editorial Gradients: Deep bottom & top vignette for serene readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161714] via-[#161714]/40 to-[#161714]/60" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
      </div>

      {/* Top Spacer for Header */}
      <div className="pt-28 md:pt-36" />

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full my-auto py-12">
        <div className="max-w-3xl flex flex-col gap-6 sm:gap-8">
          {/* Subtle Japanese Minimalist Eyebrow */}
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="h-[1px] w-8 bg-[#A89A7E]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A89A7E]">
              Pixel Pros • Photography & Films
            </span>
          </div>

          {/* Large Editorial Heading */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#FAF8F5]">
            Stories Worth <br />
            <span className="font-editorial-italic font-light text-[#EDE7DA]">
              Remembering.
            </span>
          </h1>

          {/* Supporting Philosophy */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-xl leading-relaxed">
            Photography & Films for the moments that matter. We don’t just take photographs — we preserve honest emotions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#161714] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#FAF8F5] hover:scale-[1.03] shadow-lg shadow-black/20"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Book A Session</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full pb-10 flex items-end justify-between text-xs text-white/60">
        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] tracking-wider uppercase">
          <span>Marthandam</span>
          <span>•</span>
          <span>Tamil Nadu</span>
          <span>•</span>
          <span>Kerala</span>
        </div>

        <button
          onClick={scrollToNext}
          className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors ml-auto focus:outline-none"
          aria-label="Scroll down to introduction"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em]">
            Explore Story
          </span>
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white/60 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </div>
        </button>
      </div>
    </section>
  );
}
