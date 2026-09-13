"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  darkHero?: boolean;
}

export default function Header({ darkHero = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if header text & logo should be light (only on un-scrolled dark hero homepage)
  const isLightMode = !isScrolled && darkHero && isHome;

  const navLinks = [
    { href: "/work", label: "Selected Work" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "Studio" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F8F6F0]/92 backdrop-blur-md border-b border-[#E3DCCB]/60 shadow-[0_4px_24px_rgba(32,32,28,0.03)] py-3.5"
            : isLightMode
            ? "bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-85 focus:outline-none"
            aria-label="Pixel Pros Photography Home"
          >
            <div className="relative h-10 w-36 sm:h-11 sm:w-44 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Show light logo when over dark hero, dark logo otherwise */}
              <Image
                src={
                  isLightMode
                    ? "/images/pixel-pros/logo/logo-horizontal-light.png"
                    : "/images/pixel-pros/logo/logo-horizontal-dark.png"
                }
                alt="Pixel Pros Photography"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] tracking-[0.18em] uppercase transition-all duration-300 relative py-1 whitespace-nowrap ${
                    isLightMode
                      ? isActive
                        ? "text-white font-medium"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[#20201C] font-medium"
                      : "text-[#77736A] hover:text-[#20201C]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                        isLightMode ? "bg-white" : "bg-[#20201C]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                isLightMode
                  ? "bg-white text-[#161714] hover:bg-[#FAF8F5] shadow-lg shadow-black/20 hover:scale-[1.03]"
                  : "bg-[#20201C] text-[#FAF8F5] hover:bg-[#161714] shadow-sm hover:scale-[1.03]"
              }`}
            >
              <span>Book Session</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isLightMode
                ? "text-white hover:bg-white/10"
                : "text-[#20201C] hover:bg-[#EDE7DA]"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
