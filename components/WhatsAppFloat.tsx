"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after slight delay to ensure unobtrusive page entry
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Briefly show tooltip once
      setShowTooltip(true);
      const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hideTooltipTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#20201C] text-[#FAF8F5] text-xs py-2 px-3.5 rounded-xl shadow-xl border border-white/10 animate-fade-in">
          <span>Need a quick quote or check date?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white ml-1 focus:outline-none"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getQuickWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_36px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat directly on WhatsApp with Pixel Pros"
        title="Chat on WhatsApp (+91 94429 89740)"
      >
        {/* Subtle breathing ripple ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-60" />
        
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-105" />
      </a>
    </div>
  );
}
