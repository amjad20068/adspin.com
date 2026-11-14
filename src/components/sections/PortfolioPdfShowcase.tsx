"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileDown, Eye, ArrowUpRight, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PreviewPage {
  pageNumber: number;
  image: string;
  title: string;
  client: string;
  discipline: string;
  link?: string;
}

export const PortfolioPdfShowcase: React.FC = () => {
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  const keyPages: PreviewPage[] = [
    {
      pageNumber: 1,
      image: "/images/portfolio/page-01.png",
      title: "Official Agency Portfolio Cover",
      client: "AD SPIN",
      discipline: "Brand Identity & Archive",
    },
    {
      pageNumber: 24,
      image: "/images/portfolio/page-24.png",
      title: "Breath Clinic Highway Billboard",
      client: "Meitra Hospital",
      discipline: "Healthcare Identity & Hoarding",
      link: "/work/meitra-hospital",
    },
    {
      pageNumber: 41,
      image: "/images/portfolio/page-41.png",
      title: "എല്ലിന്റെ കാര്യം കഷ്ടത്തിലാണോ? (Joint Care)",
      client: "St. Thomas Hospital",
      discipline: "Highway Unipole Hoarding",
      link: "/work/st-thomas-hospital",
    },
    {
      pageNumber: 46,
      image: "/images/portfolio/page-46.png",
      title: "The King of Durability — Charging Bull",
      client: "Royal Carino",
      discipline: "Brand Identity & Architectural Billboard",
      link: "/work/carino",
    },
    {
      pageNumber: 51,
      image: "/images/portfolio/page-51.png",
      title: "Bridal Jewellery Opulence Campaign",
      client: "Haya Gold & Diamonds",
      discipline: "Luxury Hoarding & Campaign",
      link: "/work/haya-gold",
    },
    {
      pageNumber: 63,
      image: "/images/portfolio/page-63.png",
      title: "٥٤ للنظارات — Bilingual Typographic Mark",
      client: "O4 Optical",
      discipline: "Bilingual Arabic & Latin Brand System",
      link: "/work/o4-optical",
    },
  ];

  const currentPage = keyPages[activePageIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-brand-gray-50 border-t border-brand-gray-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-brand-red" />
            <span>Official 72-Page Archive</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Original Portfolio <br className="hidden sm:inline" />
            <span className="text-brand-red">&amp; Design Archive</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-gray-600 leading-relaxed font-normal">
            Every project on this website is drawn from our verified 72-page creative portfolio. Download the master high-resolution PDF or explore key sheets below.
          </p>
        </div>

        {/* Master Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Active Page Sheet Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-brand-gray-200 shadow-xl">
              {/* Sheet Graphic */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] bg-brand-gray-100 overflow-hidden">
                <Image
                  src={currentPage.image}
                  alt={`${currentPage.client} - ${currentPage.title}`}
                  fill
                  className="object-contain p-2 sm:p-4 bg-white"
                  priority
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-black text-white text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded">
                  PORTFOLIO PAGE 0{currentPage.pageNumber} / 72
                </div>
              </div>

              {/* Sheet Meta Bar */}
              <div className="p-4 sm:p-6 bg-white border-t border-brand-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-brand-gray-400 uppercase tracking-wider block">
                    {currentPage.client} • {currentPage.discipline}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-brand-black mt-0.5">
                    {currentPage.title}
                  </h4>
                </div>

                {currentPage.link && (
                  <Link
                    href={currentPage.link}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-red hover:underline shrink-0"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Thumbnail Selector (Clean Touch Carousel on Mobile) */}
            <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
              {keyPages.map((page, idx) => (
                <button
                  key={page.pageNumber}
                  onClick={() => setActivePageIndex(idx)}
                  className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                    activePageIndex === idx
                      ? "border-brand-red shadow-md scale-105"
                      : "border-brand-gray-200 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View page ${page.pageNumber}`}
                >
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-brand-black/80 text-white text-[9px] font-mono px-1 rounded">
                    p.{page.pageNumber}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: PDF Specs & Download Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brand-gray-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                  <FileDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-brand-black">
                    Adspin Portfolio.pdf
                  </h3>
                  <span className="text-xs font-mono text-brand-gray-500">
                    72 High-Resolution Pages • 5.2 MB
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-brand-gray-700 border-t border-b border-brand-gray-100 py-4 font-mono">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span>22+ Comprehensive Brand Case Studies</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span>Real Highway Unipoles, Hoardings & Murals</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span>Verified Qatar, UAE, Oman & India Campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span>100% Original Studio Vector Art & Typography</span>
                </div>
              </div>

              {/* Action Buttons: Stack on Mobile, Flex on Desktop */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/Adspin_Portfolio.pdf"
                  download="Adspin_Portfolio.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-brand-red hover:bg-[#b83d44] text-white font-medium text-xs sm:text-sm transition-all shadow-md active:scale-98 text-center"
                >
                  <FileDown className="w-4 h-4 shrink-0" />
                  <span>Download PDF (5.2 MB)</span>
                </a>

                <a
                  href="/Adspin_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-brand-gray-100 hover:bg-brand-black hover:text-white text-brand-black font-medium text-xs sm:text-sm transition-all active:scale-98 text-center border border-brand-gray-200"
                >
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>View in Tab</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-brand-gray-500 font-mono text-center sm:text-left leading-relaxed">
              Tip: The master PDF contains complete print specs, color codes, Malayalam &amp; Arabic typography notes, and uncompressed artwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

