import React from "react";
import { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | AD SPIN Creative Agency",
  description:
    "Explore our full portfolio of 22+ brand identity systems, hospital campaigns, retail publications, commercial video reels, and outdoor hoardings across India and the GCC.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Curated Creative Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Our Work. <br />
            <span className="text-brand-red">Real Impact.</span>
          </h1>
          <p className="text-base sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            Every project below represents actual client deliverables from our 72-page portfolio. We don&apos;t build fictional concepts—we engineer commercial visual assets that lead industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGallery />
      </div>
    </div>
  );
}

