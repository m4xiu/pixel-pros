import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Selected Work" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages & Pricing" },
    { href: "/about", label: "About Studio" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact & Booking" },
  ];

  return (
    <footer className="bg-[#161714] text-[#FAF8F5] relative overflow-hidden border-t border-white/10">
      {/* Subtle Grain Background */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-85">
              <Image
                src="/images/pixel-pros/logo/logo-horizontal-light.png"
                alt="Pixel Pros Photography"
                fill
                className="object-contain object-left"
              />
            </Link>
            
            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-md">
              “We don’t just take photographs. We preserve moments.”
            </p>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              Artisanal wedding storytelling, romantic couple portraiture, and cinematic films rooted in natural light, genuine emotion, and timeless aesthetics across Tamil Nadu and Kerala.
            </p>

            {/* Quick WhatsApp / Call actions */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 text-[#4ADE80] border border-[#25D366]/40 text-xs font-medium tracking-wider uppercase hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-xs font-medium tracking-wider uppercase hover:bg-white/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A89A7E]">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Location & Business Info Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A89A7E]">
              Studio & Contact
            </span>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A89A7E] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{siteConfig.contact.location}</p>
                  <p className="text-xs text-white/50">{siteConfig.contact.serviceAreas}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#A89A7E] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#A89A7E] shrink-0" />
                <a
                  href={getQuickWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  {siteConfig.contact.whatsappDisplay} (WhatsApp)
                </a>
              </div>
            </div>

            {/* Social Channels (Placeholders with clean handles) */}
            <div className="pt-4 flex flex-col gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/40">
                Follow The Stories
              </span>
              <div className="flex items-center gap-4 text-xs text-white/60">
                <span className="hover:text-white transition-colors cursor-pointer" title="Instagram (Official handle to be linked)">
                  Instagram
                </span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" title="Facebook (Official page to be linked)">
                  Facebook
                </span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" title="YouTube (Official channel to be linked)">
                  YouTube
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>© {currentYear} Pixel Pros. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Handcrafted with Wabi-Sabi & Shibui Principles
          </p>
        </div>
      </div>
    </footer>
  );
}
