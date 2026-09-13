import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Booking Policies",
  description: "Find answers to frequently asked questions regarding wedding photography bookings, travel policies, album deliveries, and cinematic video by Pixel Pros.",
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Clear & Transparent
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            Frequently Asked <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              Questions.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            We believe in complete transparency. Below are detailed answers to the most common questions regarding our process, timelines, travel, and custom packages.
          </p>
        </div>

        {/* Complete FAQ List */}
        <FAQAccordion />

        {/* Still Have Questions Box */}
        <div className="mt-24 p-8 sm:p-12 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] text-center max-w-3xl mx-auto flex flex-col items-center gap-6 shadow-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
            Have A Specific Question?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal">
            We are always here to help.
          </h2>
          <p className="text-sm text-[#77736A] font-light max-w-lg">
            Feel free to call our studio directly or send a message on WhatsApp for instant assistance regarding your dates or custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={getQuickWhatsAppUrl("Hello Pixel Pros, I have a question regarding your booking and services!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#20bd59] transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#161714] transition-all hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
