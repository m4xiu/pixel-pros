import type { Metadata } from "next";
import PackagesSection from "@/components/PackagesSection";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages & Investment",
  description: "Transparent photography and videography collections for weddings, pre-weddings, and celebrations by Pixel Pros.",
};

export default function PackagesPage() {
  const assurances = [
    {
      icon: Sparkles,
      title: "Handcrafted Archival Quality",
      desc: "All albums are printed on museum-grade fine art layflat paper designed to last for generations.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Flexible",
      desc: "No hidden charges. Clear deliverables and custom payment milestone schedules for peace of mind.",
    },
    {
      icon: HeartHandshake,
      title: "Artistic Guarantee",
      desc: "Every delivered image is personally inspected and color graded by our senior post-production artists.",
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
              Collections & Investment
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            Preserving your moments, <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              crafted for a lifetime.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            We offer thoughtfully structured photography and cinematic collections. Every package is customizable to your exact wedding schedule and family traditions.
          </p>
        </div>

        {/* Packages Cards */}
        <PackagesSection />

        {/* Value Assurances */}
        <div className="mt-24 pt-16 border-t border-[#E3DCCB]/60">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              The Pixel Pros Standard
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#20201C] font-normal mt-2">
              What sets our experience apart.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assurances.map((item, idx) => (
              <div key={idx} className="p-8 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex flex-col gap-3">
                <item.icon className="w-6 h-6 text-[#8B806D]" />
                <h3 className="font-editorial text-xl text-[#20201C] font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion on Packages Page */}
        <div className="mt-24 pt-16 border-t border-[#E3DCCB]/60">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Pricing & Booking FAQ
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#20201C] font-normal mt-2">
              Frequently asked questions.
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}
