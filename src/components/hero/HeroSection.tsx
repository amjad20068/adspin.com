"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, FileDown } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { AGENCY_CONFIG } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle clean ambient background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-red/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-4 sm:py-10">
        {/* Hero Editorial Headline with Signature Red Spiral */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 sm:space-y-2"
          >
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-1 sm:gap-y-2">
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight sm:tracking-tighter text-brand-black uppercase leading-[1.05] sm:leading-none">
                We Make Brands
              </h1>
              {/* Distinctive Red Spiral Brand Symbol - visible on all screens */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
                className="inline-flex items-center justify-center p-0.5 sm:p-1"
              >
                <SpiralMark size={64} speed={30} className="w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" />
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center">
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight sm:tracking-tighter text-brand-black uppercase leading-[1.05] sm:leading-none">
                Impossible
              </h1>
              <span className="inline-block mx-2 sm:mx-6 text-brand-red text-2xl sm:text-6xl xl:text-8xl font-light">
                /
              </span>
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight sm:tracking-tighter text-brand-red uppercase leading-[1.05] sm:leading-none">
                To Ignore.
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Supporting text & CTAs in asymmetric grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-base sm:text-xl md:text-2xl text-brand-gray-700 font-normal leading-relaxed max-w-2xl">
              We combine creative thinking, strategic design, and digital innovation to build brands that connect, communicate, and stand apart.
            </p>

            {/* Quick Domain Badges */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-brand-gray-600">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-gray-100 border border-brand-gray-200">
                01 Brand Identity
              </span>
              <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-gray-100 border border-brand-gray-200">
                02 Posters &amp; Billboards
              </span>
              <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-gray-100 border border-brand-gray-200">
                03 Social Media
              </span>
            </div>

            {/* Responsive CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button href="/work" size="lg" variant="primary" className="w-full sm:w-auto text-center justify-center">
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                href={AGENCY_CONFIG.getWhatsAppUrl(
                  "Hello Ad Spin! I would like to consult on branding and design for our business."
                )}
                isExternal
                size="lg"
                variant="whatsapp"
                className="w-full sm:w-auto text-center justify-center shadow-sm"
              >
                <WhatsAppIcon size={18} className="text-white mr-2" />
                <span>Chat on WhatsApp</span>
              </Button>

              <a
                href="/Adspin_Portfolio.pdf"
                download="Adspin_Portfolio.pdf"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-brand-gray-50 hover:bg-brand-gray-100 border border-brand-gray-200 text-xs font-mono text-brand-black transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-brand-red" />
                <span>PDF (5.2 MB)</span>
              </a>
            </div>
          </div>

          {/* Quick Real Portfolio Highlight Preview */}
          <div className="lg:col-span-5 flex flex-col justify-end mt-4 sm:mt-0">
            <Link
              href="/work/meitra-hospital"
              className="group block p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-brand-gray-50 border border-brand-gray-200/90 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-xl"
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500 mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  FEATURED WORK
                </span>
                <span className="flex items-center gap-1 text-brand-red group-hover:translate-x-0.5 transition-transform font-bold text-xs">
                  View Case Study <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-brand-gray-100">
                <Image
                  src="/images/portfolio/crops/crop-24.jpg"
                  alt="Meitra Hospital - Breath Clinic Campaign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors">
                    Meitra Hospital — Breath Clinic
                  </h4>
                  <p className="text-[11px] sm:text-xs text-brand-gray-500 font-mono">Healthcare Identity &amp; Highway Hoarding</p>
                </div>
                <span className="text-[10px] sm:text-xs font-mono bg-white px-2 py-0.5 rounded border border-brand-gray-200">
                  2024
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Ticker: Verified Portfolio Clients */}
      <div className="border-t border-brand-gray-200 pt-4 sm:pt-6 mt-6 sm:mt-8 overflow-hidden w-full">
        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-brand-gray-400 uppercase tracking-widest mb-2 sm:mb-3">
          <Sparkles className="w-3 h-3 text-brand-red shrink-0" />
          <span className="truncate">Selected Verified Clients From Our 72-Page Portfolio</span>
        </div>
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-display font-semibold tracking-tight text-brand-gray-700">
            <span>33 Holdings</span>
            <span className="text-brand-red">•</span>
            <span>Naseem Healthcare Qatar</span>
            <span className="text-brand-red">•</span>
            <span>Premium Naseem</span>
            <span className="text-brand-red">•</span>
            <span>Meitra Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Haya Gold &amp; Diamonds</span>
            <span className="text-brand-red">•</span>
            <span>Royal Carino</span>
            <span className="text-brand-red">•</span>
            <span>Fastrack India</span>
            <span className="text-brand-red">•</span>
            <span>Peter England</span>
            <span className="text-brand-red">•</span>
            <span>Believers Hospital</span>
            <span className="text-brand-red">•</span>
            <span>St. Thomas Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Crypto Liveon</span>
            <span className="text-brand-red">•</span>
            <span>O4 Optical</span>
            <span className="text-brand-red">•</span>
            <span>Aster Oman</span>
            <span className="text-brand-red">•</span>
            <span>Abeer Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Kans Group</span>
            <span className="text-brand-red">•</span>
            <span>Ontreo</span>
            <span className="text-brand-red">•</span>
            {/* Duplicate for seamless infinite loop */}
            <span>33 Holdings</span>
            <span className="text-brand-red">•</span>
            <span>Naseem Healthcare Qatar</span>
            <span className="text-brand-red">•</span>
            <span>Premium Naseem</span>
            <span className="text-brand-red">•</span>
            <span>Meitra Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Haya Gold &amp; Diamonds</span>
            <span className="text-brand-red">•</span>
            <span>Royal Carino</span>
            <span className="text-brand-red">•</span>
            <span>Fastrack India</span>
            <span className="text-brand-red">•</span>
            <span>Peter England</span>
          </div>
        </div>
      </div>
    </section>
  );
};
