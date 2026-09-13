import Link from "next/link";
import { Check, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { packagesData } from "@/lib/packagesData";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export default function PackagesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F1E8] relative overflow-hidden border-t border-[#E3DCCB]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Investment & Collections
            </span>
            <span className="h-[1px] w-6 bg-[#8B806D]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal tracking-tight">
            Tailored for your{" "}
            <span className="font-editorial-italic font-light text-[#77736A]">
              celebration.
            </span>
          </h2>

          <p className="text-sm text-[#77736A] font-light leading-relaxed">
            Every celebration is unique. We offer comprehensive collections with customizable coverage, candid storytelling, cinema, and bespoke archival albums.
          </p>
        </div>

        {/* 3-Tier Editorial Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-[#20201C] text-[#FAF8F5] shadow-2xl scale-[1.02] border border-white/10"
                  : "bg-[#F8F6F0] text-[#20201C] border border-[#E3DCCB] shadow-sm hover:shadow-md"
              }`}
            >
              {/* Optional Highlight Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A89A7E] text-[#161714] text-[10px] font-mono uppercase tracking-[0.25em] font-semibold py-1 px-4 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              {/* Package Header */}
              <div className="flex flex-col gap-4 border-b pb-6 border-current/10">
                <span className={`text-xs font-mono uppercase tracking-[0.2em] ${pkg.isPopular ? "text-[#A89A7E]" : "text-[#8B806D]"}`}>
                  Collection Tier
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl font-normal">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-3xl font-editorial tracking-tight font-medium">
                    {pkg.priceDisplay}
                  </span>
                  <span className="text-[11px] opacity-60 font-light">
                    / starting quote
                  </span>
                </div>

                <p className="text-xs opacity-75 font-light leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Inclusions List */}
              <div className="py-6 flex flex-col gap-3.5 my-auto">
                <span className="text-[11px] font-mono tracking-wider uppercase opacity-60">
                  What’s Included:
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-light">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.isPopular ? "text-[#A89A7E]" : "text-[#8B806D]"}`} />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTAs */}
              <div className="pt-6 border-t border-current/10 flex flex-col gap-3">
                <Link
                  href={`/contact?package=${pkg.id}`}
                  className={`w-full text-center py-3.5 px-6 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? "bg-white text-[#161714] hover:bg-[#FAF8F5] hover:scale-[1.02]"
                      : "bg-[#20201C] text-[#FAF8F5] hover:bg-[#161714] hover:scale-[1.02]"
                  }`}
                >
                  <span>Request Bespoke Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getQuickWhatsAppUrl(`Hello Pixel Pros, I am interested in the ${pkg.name} and would like to get a quote for my date!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center text-[11px] tracking-wider uppercase py-1.5 transition-opacity ${
                    pkg.isPopular ? "text-white/60 hover:text-white" : "text-[#77736A] hover:text-[#20201C]"
                  }`}
                >
                  Chat about this on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Packages */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#EDE7DA]/70 border border-[#E3DCCB] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-medium text-[#20201C]">Planning a multi-day destination wedding?</h4>
            <p className="text-xs text-[#77736A] font-light mt-0.5">We build bespoke packages tailored to your schedule, location, and custom albums.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs tracking-widest uppercase hover:bg-[#161714] transition-colors"
          >
            Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
