import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, MessageSquare } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore the photography and videography services offered by Pixel Pros: Wedding Photography, Pre-Weddings, Milestone Celebrations, Couple Sessions, Cinematic Films, and Drone Coverage.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#8B806D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
              Our Craft & Capabilities
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#20201C] font-normal leading-tight tracking-tight">
            Tailored visual storytelling <br />
            <span className="font-editorial-italic font-light text-[#77736A]">
              for your moments.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-light leading-relaxed mt-6">
            We provide full-spectrum photography and cinematic film production across South India. Explore our specialized services below.
          </p>
        </div>

        {/* Detailed Service Sections */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-2xl border border-[#E3DCCB]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#20201C]/80 backdrop-blur-md text-[#FAF8F5] text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-sm">
                      {service.number} • SERVICE
                    </div>
                  </div>
                </div>

                {/* Text Description & Inclusions */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8B806D]">
                      {service.tagline}
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#20201C] font-normal">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#77736A] font-light leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#20201C]/90 font-light">
                        <Check className="w-4 h-4 text-[#8B806D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#161714] transition-all hover:scale-[1.02]"
                    >
                      <span>Enquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getQuickWhatsAppUrl(
                        `Hello Pixel Pros, I am interested in booking your ${service.title} service and would like to know more!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#1E7D46] font-medium py-2 px-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
