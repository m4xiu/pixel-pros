import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Gallery from "./Gallery";

export default function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="flex flex-col gap-4 mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="h-[1px] w-6 bg-[#8B806D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                Visual Archives
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal tracking-tight">
              Selected{" "}
              <span className="font-editorial-italic font-light text-[#77736A]">
                Stories.
              </span>
            </h2>
          </div>

          <p className="text-sm text-[#77736A] max-w-sm font-light mx-auto md:mx-0">
            A curated glimpse into South Indian weddings, intimate outdoor sessions, and timeless celebrations.
          </p>
        </div>

        {/* Interactive Gallery */}
        <Gallery limit={9} showFilters={true} />

        {/* Bottom CTA to Full Portfolio */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#161714] transition-all hover:scale-[1.03] shadow-md"
          >
            <span>Explore Complete Portfolio (30+ Stories)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
