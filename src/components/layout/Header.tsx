"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Instagram, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { AGENCY_CONFIG } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white py-3.5 shadow-sm border-b border-brand-gray-200"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Original AD SPIN Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-200 hover:opacity-90"
              aria-label="AD SPIN - Return to homepage"
            >
              <div className="relative h-9 sm:h-10 w-28 sm:w-32 flex items-center">
                <Image
                  src="/images/logos/logo.png"
                  alt="AD SPIN"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-brand-gray-50/80 px-4 py-1.5 rounded-full border border-brand-gray-200/60 shadow-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-tight rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-brand-red font-semibold"
                        : "text-brand-gray-700 hover:text-brand-black"
                    }`}
                  >
                    {link.title}
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderNav"
                        className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 border border-brand-gray-200/60"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Instagram + Let's Talk CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Instagram Official Link */}
              <a
                href={AGENCY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Instagram @ad_spin"
                title="Follow @ad_spin on Instagram"
                className="p-2.5 rounded-full text-brand-black hover:text-white hover:bg-brand-red transition-all duration-200 border border-brand-gray-200 bg-white shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Primary CTA: Let's Talk */}
              <Button href="/contact" size="sm" variant="primary" className="shadow-xs">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            {/* Mobile Actions: Hamburger Trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                className="p-2.5 rounded-full bg-brand-gray-100 text-brand-black hover:bg-brand-red hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

