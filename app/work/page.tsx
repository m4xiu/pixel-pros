import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Visual Archives",
  description: "Explore the complete portfolio of Pixel Pros. Luxury wedding stories, romantic pre-weddings, couple sessions, and milestone celebrations in Marthandam, Tamil Nadu and Kerala.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Visual Archives
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            Moments, <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              made timeless.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            Every celebration has an unrepeatable rhythm. Browse our collection of South Indian weddings, intimate outdoor sessions, and candid life moments captured with artisanal care.
          </p>
        </div>

        {/* Full Filterable Gallery */}
        <Gallery showFilters={true} />

        {/* Bottom Booking Callout */}
        <div className="mt-24 p-8 sm:p-12 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] text-center max-w-3xl mx-auto flex flex-col items-center gap-6 shadow-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
            Have A Date In Mind?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal">
            Let’s preserve your story together.
          </h2>
          <p className="text-sm text-[#77736A] font-light max-w-lg">
            Dates are limited to ensure complete focus on each celebration. Contact us to check availability and receive a tailored collection quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#161714] transition-all hover:scale-[1.02]"
          >
            <span>Book Your Date</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
