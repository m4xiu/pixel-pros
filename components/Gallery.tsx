"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { GalleryItem, galleryCategories, galleryItems } from "@/lib/galleryData";
import Lightbox from "./Lightbox";

interface GalleryProps {
  initialCategory?: string;
  limit?: number;
  featuredOnly?: boolean;
  showFilters?: boolean;
}

export default function Gallery({
  initialCategory = "all",
  limit,
  featuredOnly = false,
  showFilters = true,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    let result = galleryItems;

    if (featuredOnly) {
      result = result.filter((item) => item.featured);
    }

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (limit && limit > 0) {
      result = result.slice(0, limit);
    }

    return result;
  }, [activeCategory, featuredOnly, limit]);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs tracking-[0.18em] uppercase py-2.5 px-5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#20201C] text-[#FAF8F5] shadow-sm scale-[1.02]"
                    : "bg-[#EDE7DA]/70 text-[#77736A] hover:text-[#20201C] hover:bg-[#EDE7DA]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Editorial Masonry Grid (Asymmetric Rhythm) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredItems.map((item, index) => {
          // Editorial rhythm: some items span 2 columns on wide screens
          const isLandscape = item.aspect === "landscape";
          const isSpanTwo = isLandscape && (index % 4 === 0 || index % 5 === 0);

          return (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className={`group relative cursor-pointer overflow-hidden rounded-sm bg-[#EDE7DA] transition-all duration-500 hover:shadow-2xl ${
                isSpanTwo ? "sm:col-span-2 aspect-[16/10]" : isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"
              }`}
            >
              {/* High-quality gallery image matching working asset path */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                priority={index < 4}
                loading={index < 4 ? "eager" : "lazy"}
                sizes={
                  isSpanTwo
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 850px"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 420px"
                }
                onError={() => {
                  console.error(`[Gallery] Failed to load image: ${item.src}`);
                }}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A89A7E]">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="font-editorial text-xl sm:text-2xl font-light tracking-wide text-[#FAF8F5]">
                    {item.title}
                  </h4>
                  {item.story && (
                    <p className="text-xs text-white/70 font-light line-clamp-2 mt-1">
                      {item.story}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </div>
  );
}
