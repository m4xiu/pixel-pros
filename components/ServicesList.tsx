"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/servicesData";

export default function ServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#F5F1E8] relative overflow-hidden border-y border-[#E3DCCB]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8B806D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
                Our Expertise
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#20201C] font-normal tracking-tight">
              Made for your{" "}
              <span className="font-editorial-italic font-light text-[#77736A]">
                moments.
              </span>
            </h2>
          </div>

          <p className="text-sm text-[#77736A] max-w-sm font-light">
            Bespoke visual storytelling designed to preserve the essence of weddings, celebrations, and intimate connections.
          </p>
        </div>

        {/* Editorial Service Rows with Hover Image Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Service Interactive List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E3DCCB]">
            {servicesData.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group py-7 sm:py-9 flex items-baseline justify-between transition-all duration-300 relative"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10 pr-4">
                    <span className="font-mono text-xs sm:text-sm text-[#8B806D] opacity-70 group-hover:text-[#20201C] transition-colors">
                      {service.number}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#20201C] group-hover:translate-x-2 transition-transform duration-300 font-normal">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#77736A] font-light max-w-md line-clamp-1 group-hover:text-[#20201C]/80 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full border border-transparent group-hover:border-[#20201C]/20 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-[#8B806D] group-hover:text-[#20201C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Floating Visual Preview (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32 aspect-[4/5] rounded-sm overflow-hidden bg-[#EDE7DA] shadow-2xl border border-[#E3DCCB]">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    (hoveredIndex === null && index === 0) || hoveredIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1280px) 40vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#A89A7E] block mb-1">
                      {service.number} • SERVICE
                    </span>
                    <p className="font-editorial text-xl font-light">
                      {service.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section Link */}
        <div className="mt-14 pt-8 border-t border-[#E3DCCB]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#77736A] font-light">
            Need a tailored service combination with photography + cinema + drone?
          </span>
          <Link
            href="/services"
            className="text-xs font-medium tracking-[0.18em] uppercase text-[#20201C] hover:text-[#8B806D] transition-colors inline-flex items-center gap-2"
          >
            <span>Explore All Service Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
