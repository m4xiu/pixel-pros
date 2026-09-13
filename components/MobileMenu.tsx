"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, Phone, MessageSquare, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  currentPath,
}: MobileMenuProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#F8F6F0] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Top Bar with Logo & Close */}
      <div className="flex items-center justify-between pb-6 border-b border-[#E3DCCB]/60">
        <Link href="/" onClick={onClose} className="relative h-10 w-36">
          <Image
            src="/images/pixel-pros/logo/logo-horizontal-dark.png"
            alt="Pixel Pros Photography"
            fill
            className="object-contain object-left"
          />
        </Link>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#EDE7DA] text-[#20201C] hover:bg-[#E3DCCB] transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Editorial Navigation Links */}
      <nav className="my-auto py-8 flex flex-col gap-5 sm:gap-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8B806D] font-medium">
          Navigation
        </span>
        {links.map((link, index) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-1 transition-all duration-300 ${
                isActive ? "text-[#20201C]" : "text-[#77736A] hover:text-[#20201C]"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#8B806D] opacity-60">
                  0{index + 1}
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-editorial tracking-tight ${
                    isActive ? "font-semibold text-[#20201C]" : "font-normal"
                  }`}
                >
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isActive ? "opacity-100 text-[#20201C]" : "opacity-0 group-hover:opacity-80"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Contact & Booking Section */}
      <div className="pt-6 border-t border-[#E3DCCB]/60 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full text-center py-3.5 px-6 rounded-full bg-[#20201C] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase transition-transform active:scale-98 shadow-sm"
          >
            Book Your Session
          </Link>
          <a
            href={getQuickWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-6 rounded-full bg-[#25D366]/15 text-[#1E7D46] border border-[#25D366]/30 text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:bg-[#25D366]/25"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[#77736A] pt-2 gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#8B806D]" />
            <span>{siteConfig.contact.location}</span>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 hover:text-[#20201C]"
          >
            <Phone className="w-3.5 h-3.5 text-[#8B806D]" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
