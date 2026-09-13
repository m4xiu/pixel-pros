import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Session Booking",
  description: "Contact Pixel Pros photography studio in Porancode, Kattukadai. Book wedding photography, pre-weddings, and cinematic films across Tamil Nadu & Kerala.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Reserve Your Date
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            Let’s start a <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              conversation.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            We are honored you are considering Pixel Pros for your celebration. Fill in the details below to check our availability and receive a customized quote.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex flex-col gap-6 shadow-sm">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8B806D]">
                Studio Coordinates
              </span>

              <div className="flex flex-col gap-5 text-sm text-[#20201C]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#8B806D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#20201C]">Studio Address</h4>
                    <p className="text-[#77736A] font-light mt-0.5">
                      {siteConfig.contact.location}
                    </p>
                    <p className="text-xs text-[#8B806D] mt-1 font-mono">
                      Serving Marthandam, Tamil Nadu, Kerala & Beyond
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#8B806D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#20201C]">Phone Consultation</h4>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#77736A] font-mono hover:text-[#20201C] transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#1E7D46] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#20201C]">WhatsApp Direct</h4>
                    <a
                      href={getQuickWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E7D46] font-mono hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#8B806D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#20201C]">Email Inquiries</h4>
                    <span className="text-[#77736A] font-mono text-xs block mt-0.5">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#8B806D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#20201C]">Studio Availability</h4>
                    <p className="text-[#77736A] font-light mt-0.5 text-xs">
                      Mon – Sun: 9:00 AM – 8:00 PM (By Appointment)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Visual Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#EDE7DA]/60 border border-[#E3DCCB] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-wider uppercase text-[#8B806D]">
                  Location Map
                </span>
                <span className="text-[10px] font-mono uppercase text-[#77736A] bg-[#EDE7DA] px-2 py-0.5 rounded">
                  Porancode, Kattukadai
                </span>
              </div>

              {/* Map stylized placeholder */}
              <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#E3DCCB] border border-[#D3C8B2] flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-8 h-8 text-[#20201C] mb-2 animate-bounce" />
                <p className="font-editorial text-lg text-[#20201C]">
                  Pixel Pros Studio
                </p>
                <p className="text-xs text-[#77736A] font-light mt-0.5">
                  Porancode, Kattukadai, Marthandam
                </p>
                <span className="mt-3 text-[10px] font-mono uppercase tracking-wider text-[#8B806D] bg-white/60 px-3 py-1 rounded-full">
                  Google Map Pin Link To Be Linked
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-sm text-[#77736A]">Loading booking form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
