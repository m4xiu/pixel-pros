import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServicesList from "@/components/ServicesList";
import FeaturedWork from "@/components/FeaturedWork";
import EmotionalStatement from "@/components/EmotionalStatement";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import WhyPixelPros from "@/components/WhyPixelPros";
import InstagramStrip from "@/components/InstagramStrip";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 01 — HERO */}
      <Hero />

      {/* SECTION 02 — INTRODUCTION */}
      <Intro />

      {/* SECTION 03 — SERVICES */}
      <ServicesList />

      {/* SECTION 04 — SELECTED STORIES / FEATURED WORK */}
      <FeaturedWork />

      {/* SECTION 05 — EMOTIONAL STATEMENT */}
      <EmotionalStatement />

      {/* SECTION 06 — ABOUT PIXEL PROS */}
      <AboutSection />

      {/* SECTION 07 — PACKAGES */}
      <PackagesSection />

      {/* SECTION 08 — WHY PIXEL PROS */}
      <WhyPixelPros />

      {/* SECTION 09 — FAQ */}
      <section className="py-24 sm:py-32 bg-[#F5F1E8] relative overflow-hidden border-t border-[#E3DCCB]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8B806D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                Common Inquiries
              </span>
              <span className="h-[1px] w-6 bg-[#8B806D]" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal tracking-tight">
              Frequently asked{" "}
              <span className="font-editorial-italic font-light text-[#77736A]">
                questions.
              </span>
            </h2>

            <p className="text-sm text-[#77736A] font-light leading-relaxed">
              Everything you need to know about booking, delivery timelines, albums, and coverage.
            </p>
          </div>

          <FAQAccordion limit={6} />

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-[#20201C] hover:text-[#8B806D] transition-colors py-2 border-b border-[#20201C]/20 hover:border-[#20201C]"
            >
              <span>View All Questions & Policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — INSTAGRAM / SOCIAL PROOF */}
      <InstagramStrip />

      {/* SECTION 11 — CONTACT & ENQUIRY */}
      <section id="contact" className="py-24 sm:py-32 bg-[#F8F6F0] relative overflow-hidden border-t border-[#E3DCCB]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Contact Info & Location */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-6 bg-[#8B806D]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                    Let’s Connect
                  </span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal leading-[1.12] tracking-tight">
                  Let’s create <br />
                  something worth <br />
                  <span className="font-editorial-italic font-light text-[#77736A]">
                    remembering.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#77736A] font-light leading-relaxed">
                  Whether you are planning a grand wedding in Tamil Nadu or Kerala, an intimate outdoor couple session, or a milestone celebration, we would love to be part of your story.
                </p>
              </div>

              {/* Direct Info Blocks */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="p-5 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#EDE7DA] text-[#20201C]">
                    <MapPin className="w-5 h-5 text-[#8B806D]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#8B806D] block mb-0.5">
                      Studio Location
                    </span>
                    <p className="text-sm font-medium text-[#20201C]">
                      {siteConfig.contact.location}
                    </p>
                    <p className="text-xs text-[#77736A] mt-0.5">
                      Serving Marthandam, Tamil Nadu, Kerala & surrounding regions.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#EDE7DA] text-[#20201C]">
                    <Phone className="w-5 h-5 text-[#8B806D]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#8B806D] block mb-0.5">
                      Direct Studio Phone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-medium text-[#20201C] hover:text-[#8B806D] transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-sm bg-[#FAF8F5] border border-[#E3DCCB] flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#25D366]/20 text-[#1E7D46]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#1E7D46] block mb-0.5">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={getQuickWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#20201C] hover:text-[#1E7D46] transition-colors"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
