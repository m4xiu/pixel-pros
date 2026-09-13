import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function InstagramStrip() {
  const stripImages = [
    { src: "/images/pixel-pros/couple/pixel-pros-couple-01.webp", alt: "Pixel Pros photography — Ethereal water reflection couple portrait" },
    { src: "/images/pixel-pros/wedding/pixel-pros-wedding-13.webp", alt: "Pixel Pros photography — Cathedral altar vows ceremony" },
    { src: "/images/pixel-pros/pre-wedding/pixel-pros-pre-wedding-02.webp", alt: "Pixel Pros photography — Canoe on misty Kerala mountain lake" },
    { src: "/images/pixel-pros/birthday/pixel-pros-birthday-01.webp", alt: "Pixel Pros photography — Traditional Kerala Kasavu milestone celebration" },
    { src: "/images/pixel-pros/wedding/pixel-pros-wedding-04.webp", alt: "Pixel Pros photography — Joyous wedding party and groomsmen in green suits" },
    { src: "/images/pixel-pros/couple/pixel-pros-couple-03.webp", alt: "Pixel Pros photography — Moody twilight lakeside couple romance" },
  ];

  return (
    <section className="py-20 bg-[#F5F1E8] border-t border-[#E3DCCB]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8B806D]">
            Live Feed & Stories
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#20201C] font-normal">
            Follow our photographic journey.
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase py-2 px-4 rounded-full bg-[#EDE7DA] text-[#20201C] border border-[#E3DCCB]">
            <Instagram className="w-3.5 h-3.5" />
            <span>@pixelprosphotography</span>
          </span>
        </div>
      </div>

      {/* 6-Photo Horizontal Grid Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-2 sm:px-4">
        {stripImages.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-square overflow-hidden bg-[#EDE7DA] rounded-sm"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
