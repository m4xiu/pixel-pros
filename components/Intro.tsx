import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8B806D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                The Pixel Pros Philosophy
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] leading-[1.12] tracking-tight font-normal">
              Every moment has a story. <br />
              <span className="font-editorial-italic font-light text-[#77736A]">
                We make it last.
              </span>
            </h2>

            <div className="flex flex-col gap-4 text-base sm:text-lg text-[#77736A] font-light leading-relaxed">
              <p>
                From quiet, unscripted glances before the sacred vows to the roaring joy of family celebrations, Pixel Pros is built around capturing the people, authentic emotions, and fleeting seconds that make your journey uniquely yours.
              </p>
              <p className="text-sm text-[#77736A]/90">
                Rooted in Marthandam and serving clients across Tamil Nadu and Kerala, our approach blends editorial restraint, natural lighting, and documentary honesty.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-[#20201C] py-2 border-b border-[#20201C]/30 hover:border-[#20201C] transition-all"
              >
                <span>Discover Our Story & Craft</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Asymmetric Visual Composition (Wabi-Sabi Fukinsei) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Image */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-2xl bg-[#EDE7DA]">
                <Image
                  src="/images/pixel-pros/hero/pixel-pros-hero-02.webp"
                  alt="Pixel Pros artistic couple portraiture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Staggered Accent Detail Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 bg-[#FAF8F5] p-6 rounded-sm shadow-xl border border-[#E3DCCB]/80 max-w-[240px]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B806D] block mb-1">
                  Artisanal Standard
                </span>
                <p className="text-xs text-[#20201C] font-editorial italic leading-snug">
                  “Natural light, honest expressions, and timeless tones.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
