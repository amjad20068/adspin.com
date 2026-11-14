"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, CheckCircle2, ShieldCheck } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";

export const IdentitySystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const systems = [
    {
      title: "AD SPIN Signature Spiral",
      type: "Master Brand Identity",
      image: "/images/logos/spiral.png",
      tagline: "Fibonacci Golden Spiral & Perpetual Creative Momentum",
      specs: {
        ratio: "1 : 1.618 (Golden Section)",
        geometry: "Parametric Logarithmic Spiral",
        primaryColor: "#D54F56 (Crimson Red)",
        secondaryColor: "#000000 (Pure Obsidian)",
        background: "#FFFFFF (Architectural White)",
      },
      notes:
        "Engineered with mathematical precision to convey non-stop innovation. The spiral starts from the core strategic spark and expands outwards into high-impact market visibility.",
      deliverableLink: "/about",
    },
    {
      title: "O4 Optical (٥٤ للنظارات)",
      type: "Bilingual Optical Brand System",
      image: "/images/portfolio/crops/crop-63.jpg",
      tagline: "Harmonizing Arabic & Latin Typographic Flow",
      specs: {
        latinType: "Geometric Sans-Serif Custom Glyphs",
        arabicType: "Modern Ruq'ah / Kufic Hybrid",
        primaryColor: "#111A3A (Midnight Navy)",
        finish: "Blind Deboss & Microfiber Texture",
        markets: "GCC / Sultanate of Oman",
      },
      notes:
        "Every curve of the Latin 'O' and '4' optically balances with the Arabic numerals '٥' and '٤', creating an effortless luxury eyewear identity for discerning Gulf shoppers.",
      deliverableLink: "/work/o4-optical",
    },
    {
      title: "Crypto Liveon",
      type: "Fintech & Education Monogram",
      image: "/images/portfolio/crops/crop-65.jpg",
      tagline: "Isometric Token Ascension Geometry",
      specs: {
        geometry: "Isometric 30° Angle Polygon",
        primaryColor: "#1B2A58 (Deep Ledger Navy)",
        accentColor: "#2BC4A9 (Digital Mint Cyan)",
        application: "Mobile App UI, Billboards & Cinema Ads",
        scaleFidelity: "16px Favicon to 40ft Highway Billboard",
      },
      notes:
        "Merges the 'C' letterform with an upward-pointing market ascent vector. Communicates clarity, technological maturity, and institutional confidence.",
      deliverableLink: "/work/crypto-liveon",
    },
    {
      title: "Ontreo",
      type: "Minimal Corporate Identity",
      image: "/images/portfolio/crops/crop-66.jpg",
      tagline: "Zen Ensō Brushstroke with Swiss Precision",
      specs: {
        mark: "Hand-Crafted Circular Ensō Vector",
        type: "High-Contrast Swiss Editorial Sans",
        primaryColor: "#0F52BA (Sapphire Cobalt)",
        paperStock: "350gsm G.F Smith Colorplan Cotton",
        signage: "Brushed Aluminium Architectural Signage",
      },
      notes:
        "An open circular ink stroke representing infinite potential, paired with clean typography for modern digital and architectural corporate environments.",
      deliverableLink: "/work/ontreo",
    },
  ];

  const current = systems[activeTab];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-brand-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-brand-red" />
              <span>Architectural Precision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
              Logo & Brand <span className="text-brand-red">Identity Systems</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-brand-gray-600 leading-relaxed">
              We design identities built on mathematical proportions, cultural nuance, and rigorous brand architecture. Here is a look under the hood.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-brand-gray-200">
          {systems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-tight whitespace-nowrap transition-all duration-200 ${
                activeTab === index
                  ? "bg-brand-black text-white font-bold shadow-sm"
                  : "bg-brand-gray-50 text-brand-gray-700 hover:bg-brand-gray-100"
              }`}
            >
              0{index + 1} — {item.title}
            </button>
          ))}
        </div>

        {/* System Interactive Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-brand-gray-50 border border-brand-gray-200 shadow-sm">
          {/* Left: Graphic Viewport */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-brand-gray-200 shadow-inner flex items-center justify-center p-8">
              {activeTab === 0 ? (
                <div className="flex flex-col items-center justify-center">
                  <SpiralMark size={220} speed={25} />
                  <span className="text-[10px] font-mono text-brand-gray-400 mt-4 uppercase tracking-widest">
                    Vector Construction: 360° Continuous Radial Flow
                  </span>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {/* Construction Grid watermark */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-brand-gray-600 border border-brand-gray-200">
                SYSTEM SPEC: {current.type}
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block">
                {current.type}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-brand-black mt-1">
                {current.title}
              </h3>
              <p className="text-sm font-semibold text-brand-gray-600 font-mono mt-1">
                {current.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-brand-gray-700 leading-relaxed">
              {current.notes}
            </p>

            {/* Technical Specifications Grid */}
            <div className="p-5 rounded-2xl bg-white border border-brand-gray-200 space-y-2.5 text-xs font-mono">
              <span className="text-[10px] uppercase tracking-widest text-brand-gray-400 font-bold block mb-1">
                Design System Specifications
              </span>
              {Object.entries(current.specs).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-1 border-b border-brand-gray-100 last:border-0">
                  <span className="text-brand-gray-500 capitalize">{k.replace(/([A-Z])/g, " $1")}:</span>
                  <span className="font-semibold text-brand-black">{v}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={current.deliverableLink}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-red font-bold hover:underline underline-offset-4"
              >
                <span>View Full System Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

