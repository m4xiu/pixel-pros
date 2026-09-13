import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Film, Sparkles, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Honest Moments",
      desc: "Unscripted expressions and genuine emotions over awkward stiff posing.",
    },
    {
      icon: Camera,
      title: "Artisanal Craft",
      desc: "High-end full-frame Canon EOS R5 series optics and bespoke color grading.",
    },
    {
      icon: Film,
      title: "Cinema & Movement",
      desc: "Documentary wedding films with rich ambient sound and cinematic pacing.",
    },
    {
      icon: Sparkles,
      title: "Heirloom Polish",
      desc: "Every frame individually retouched to remain timeless across generations.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Dual Visual Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-xl">
                <Image
                  src="/images/pixel-pros/hero/pixel-pros-hero-04.webp"
                  alt="Pixel Pros wedding storytelling"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-xl mt-8 sm:mt-12">
                <Image
                  src="/images/pixel-pros/general/pixel-pros-general-01.webp"
                  alt="Pixel Pros fine art photography craft"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Experience & Studio Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#20201C] text-[#FAF8F5] py-3 px-6 rounded-full shadow-2xl border border-white/10 text-center whitespace-nowrap">
              <span className="text-xs font-mono tracking-widest uppercase text-[#A89A7E]">
                Porancode, Kattukadai • Serving TN & Kerala
              </span>
            </div>
          </div>

          {/* Right Editorial Story & Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8B806D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                Behind The Lens
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal leading-[1.12] tracking-tight">
              Photography <br />
              <span className="font-editorial-italic font-light text-[#77736A]">
                with feeling.
              </span>
            </h2>

            <div className="flex flex-col gap-4 text-base text-[#77736A] font-light leading-relaxed">
              <p>
                Pixel Pros is a photography and videography studio built around one simple conviction: the best photographs don’t simply show what happened — they make you feel it again.
              </p>
              <p>
                We believe in natural light, subtle gestures, and candid frames that still feel deeply meaningful decades after they were taken.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-sm bg-[#EDE7DA]/50 border border-[#E3DCCB]/60">
                  <div className="flex items-center gap-2 text-[#20201C]">
                    <p.icon className="w-4 h-4 text-[#8B806D]" />
                    <h3 className="text-sm font-medium tracking-wide">{p.title}</h3>
                  </div>
                  <p className="text-xs text-[#77736A] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-[#20201C] py-2 border-b border-[#20201C]/30 hover:border-[#20201C] transition-all"
              >
                <span>Read Full Studio Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
