"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageSquare, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/lib/galleryData";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function Lightbox({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}: LightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else if (items.length > 0) {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else if (items.length > 0) {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0E0C]/95 lightbox-backdrop p-4 sm:p-6 md:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="absolute top-0 left-0 right-0 p-5 sm:p-8 flex items-center justify-between z-20 text-white pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A89A7E]">
            {item.category.toUpperCase()}
          </span>
          <span className="text-white/30">•</span>
          <span className="text-xs text-white/70 font-mono">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[80vh] sm:max-h-[84vh] w-full h-full flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            priority
            unoptimized
            onError={() => {
              console.error(`[Lightbox] Failed to load image: ${item.src}`);
            }}
            className="max-w-full max-h-[72vh] sm:max-h-[78vh] object-contain rounded-sm shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Bottom Caption and Enquiry */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-2">
          <div>
            <h3 className="text-lg sm:text-xl font-editorial text-[#FAF8F5] tracking-wide">
              {item.title}
            </h3>
            {item.story && (
              <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl line-clamp-2 mt-0.5">
                {item.story}
              </p>
            )}
          </div>

          <a
            href={getQuickWhatsAppUrl(
              `Hello Pixel Pros, I saw this photograph ("${item.title}") in your gallery and would love to discuss a similar session!`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#25D366]/20 text-white hover:text-[#4ADE80] border border-white/20 hover:border-[#25D366]/40 text-xs tracking-wider uppercase transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Navigation Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
