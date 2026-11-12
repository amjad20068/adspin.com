"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";
import { Button } from "@/components/ui/Button";
import { AGENCY_CONFIG } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Subtle Grid & Spiral Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Floating subtle ambient red glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-8">
        {/* Top Agency Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gray-50 border border-brand-gray-200 text-xs font-mono uppercase tracking-widest text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>Creative Agency & Strategic Studio</span>
          </div>
        </motion.div>

        {/* Hero Editorial Headline with Signature Red Spiral */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 sm:space-y-2"
          >
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-brand-black uppercase leading-none">
                We Make Brands
              </h1>
              {/* Distinctive Red Spiral Brand Symbol */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
                className="hidden sm:inline-flex items-center justify-center p-1"
              >
                <SpiralMark size={76} speed={30} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
              </motion.div>
            </div>

            <div className="flex items-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-brand-black uppercase leading-none">
                Impossible
              </h1>
              <span className="inline-block mx-3 sm:mx-6 text-brand-red text-3xl sm:text-6xl font-light">
                /
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-brand-red uppercase leading-none">
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
          className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-700 font-normal leading-relaxed max-w-2xl">
              We combine creative thinking, strategic design, and digital innovation to build brands that connect, communicate, and stand apart.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/work" size="lg" variant="primary">
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>

              <Button
                href={AGENCY_CONFIG.getWhatsAppUrl(
                  "Hello Ad Spin! I'm interested in starting a creative project with your agency."
                )}
                isExternal
                size="lg"
                variant="outline"
                className="border-brand-black/30"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Let&apos;s Create Something</span>
              </Button>
            </div>
          </div>

          {/* Quick Real Portfolio Highlight Preview */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <Link
              href="/work/meitra-hospital"
              className="group block p-4 rounded-2xl bg-brand-gray-50 border border-brand-gray-200/80 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500 mb-2">
                <span>LATEST SHOWCASE</span>
                <span className="flex items-center gap-1 text-brand-red group-hover:translate-x-0.5 transition-transform">
                  View Case Study <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-gray-100">
                <Image
                  src="/images/portfolio/crops/crop-24.jpg"
                  alt="Meitra Hospital - Breath Clinic Campaign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors">
                    Meitra Hospital — Breath Clinic
                  </h4>
                  <p className="text-xs text-brand-gray-500">Healthcare Branding & Campaign</p>
                </div>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-brand-gray-200">
                  2024
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Ticker: Verified Portfolio Clients */}
      <div className="border-t border-brand-gray-200 pt-6 mt-8 overflow-hidden">
        <div className="flex items-center gap-4 text-xs font-mono text-brand-gray-400 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-red" />
          <span>Selected Verified Clients From Our Portfolio</span>
        </div>
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-10 text-sm font-display font-semibold tracking-tight text-brand-gray-700">
            <span>33 Holdings</span>
            <span className="text-brand-red">•</span>
            <span>Naseem Healthcare Qatar</span>
            <span className="text-brand-red">•</span>
            <span>Premium Naseem</span>
            <span className="text-brand-red">•</span>
            <span>Meitra Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Haya Gold & Diamonds</span>
            <span className="text-brand-red">•</span>
            <span>Carino Durability</span>
            <span className="text-brand-red">•</span>
            <span>Fastrack India</span>
            <span className="text-brand-red">•</span>
            <span>Peter England</span>
            <span className="text-brand-red">•</span>
            <span>Nesto Fashion</span>
            <span className="text-brand-red">•</span>
            <span>Crypto Liveon</span>
            <span className="text-brand-red">•</span>
            <span>O4 Optical</span>
            <span className="text-brand-red">•</span>
            <span>Aster Oman</span>
            <span className="text-brand-red">•</span>
            <span>Abeer Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Believers Hospital</span>
            <span className="text-brand-red">•</span>
            <span>St. Thomas Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Kans Group</span>
            <span className="text-brand-red">•</span>
            <span>Ontreo</span>
            <span className="text-brand-red">•</span>
            {/* Duplicate for seamless infinite marquee loop */}
            <span>33 Holdings</span>
            <span className="text-brand-red">•</span>
            <span>Naseem Healthcare Qatar</span>
            <span className="text-brand-red">•</span>
            <span>Premium Naseem</span>
            <span className="text-brand-red">•</span>
            <span>Meitra Hospital</span>
            <span className="text-brand-red">•</span>
            <span>Haya Gold & Diamonds</span>
            <span className="text-brand-red">•</span>
            <span>Carino Durability</span>
            <span className="text-brand-red">•</span>
            <span>Fastrack India</span>
            <span className="text-brand-red">•</span>
            <span>Peter England</span>
            <span className="text-brand-red">•</span>
            <span>Nesto Fashion</span>
            <span className="text-brand-red">•</span>
            <span>Crypto Liveon</span>
            <span className="text-brand-red">•</span>
            <span>O4 Optical</span>
          </div>
        </div>
      </div>
    </section>
  );
};

