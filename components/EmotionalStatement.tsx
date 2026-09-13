import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmotionalStatement() {
  return (
    <section className="relative py-32 sm:py-44 bg-[#161714] text-[#FAF8F5] overflow-hidden">
      {/* Background Cinematic Image with Subtle Warm Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pixel-pros/hero/pixel-pros-hero-03.webp"
          alt="Emotional wedding story preserved by Pixel Pros"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161714] via-[#161714]/80 to-[#161714]" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A89A7E]">
          Artisanal Restraint & Memory
        </span>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight text-[#FAF8F5]">
          Some moments <br />
          <span className="font-editorial-italic font-light text-[#EDE7DA]">
            deserve more
          </span>{" "}
          <br />
          than a memory.
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-light max-w-xl leading-relaxed">
          Years from now, when you open your album, we want you to feel the warmth of that exact embrace and hear the laughter of the people who love you.
        </p>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#161714] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#FAF8F5] transition-all hover:scale-[1.03] shadow-lg shadow-black/30"
          >
            <span>Check Availability For Your Date</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
