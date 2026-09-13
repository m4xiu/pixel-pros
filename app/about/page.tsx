import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Film, Compass, Heart, Award } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Studio & Philosophy",
  description: "Learn about the story, philosophy, and artisanal photography craft behind Pixel Pros in Porancode, Kattukadai, Marthandam.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Ma (Negative Space)",
      desc: "We give photographs room to breathe, allowing the emotion of the subject to take center stage without visual clutter.",
    },
    {
      title: "Kanso (Simplicity)",
      desc: "Restraint and elegance. We strip away artificial gimmicks and focus on pure, unfiltered human expression.",
    },
    {
      title: "Shibui (Understated Luxury)",
      desc: "Timeless beauty that reveals itself subtly through natural light, rich textures, and archival color grading.",
    },
  ];

  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Our Studio & Story
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            We don’t just take photographs. <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              We preserve moments.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            Based in Porancode, Kattukadai and traveling across Tamil Nadu, Kerala, and beyond, Pixel Pros was founded on the belief that genuine emotion is the only element that never goes out of style.
          </p>
        </div>

        {/* Studio Story Section with Asymmetric Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-16">
          <div className="lg:col-span-6 flex flex-col gap-6 text-base text-[#77736A] font-light leading-relaxed">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal">
              The Heart Behind Pixel Pros
            </h2>
            <p>
              When a wedding or celebration ends, what remains are not the decorations or the noise, but the quiet moments — the tear in a father’s eye, the shared whisper between bride and groom, the spontaneous laughter across a crowded mandap.
            </p>
            <p>
              Our team operates with a quiet, unobtrusive presence. Rather than commanding you to pose in rigid angles, we curate an environment of ease, allowing you to be completely present in your celebration while we document the story as it naturally unfolds.
            </p>
            <p>
              Every photograph is color-graded individually using bespoke tonal profiles that celebrate authentic South Indian traditions, rich silk sarees, and true natural skin tones.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-2xl border border-[#E3DCCB]">
              <Image
                src="/images/pixel-pros/general/pixel-pros-general-01.webp"
                alt="Pixel Pros studio wedding storytelling in Tamil Nadu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Philosophy & Guiding Values */}
        <div className="my-24 py-16 border-y border-[#E3DCCB]/60">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Artistic Ethos
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal mt-2">
              Wabi-Sabi in Modern Photography
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex flex-col gap-3">
                <span className="font-mono text-xs text-[#8B806D] opacity-80">
                  0{i + 1}
                </span>
                <h3 className="font-editorial text-2xl text-[#20201C] font-normal">
                  {v.title}
                </h3>
                <p className="text-sm text-[#77736A] font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gear & Craftsmanship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-xl border border-[#E3DCCB]">
              <Image
                src="/images/pixel-pros/hero/pixel-pros-hero-04.webp"
                alt="Pixel Pros camera and optical craft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Optics & Technology
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal">
              High-Precision Tools, Artisanal Touch
            </h2>
            <p className="text-sm sm:text-base text-[#77736A] font-light leading-relaxed">
              We shoot on industry-leading flagship Canon EOS R5 full-frame bodies paired with wide-aperture prime lenses and 4K aerial drone systems. This allows us to work in ultra-low natural lighting, delivering exceptional dynamic range, creamy depth of field, and razor-sharp clarity.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#161714] transition-all hover:scale-[1.02]"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
