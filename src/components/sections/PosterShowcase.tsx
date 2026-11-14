"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X, Eye } from "lucide-react";

interface PosterItem {
  id: string;
  title: string;
  client: string;
  format: string;
  image: string;
  concept: string;
  typography: string;
  palette: string[];
  dimensions: string;
}

export const PosterShowcase: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);

  const posters: PosterItem[] = [
    {
      id: "st-thomas",
      title: "എല്ലിന്റെ കാര്യം കഷ്ടത്തിലാണോ? (Joint Health)",
      client: "St. Thomas Hospital",
      format: "Highway Unipole Hoarding",
      image: "/images/portfolio/crops/crop-41.jpg",
      concept: "Punchy colloquial Malayalam headline capturing instant commuter empathy for orthopaedic surgery and sports recovery.",
      typography: "Custom Hand-Drawn Bold Malayalam Display Display Type",
      palette: ["#1B4E9B", "#D54F56", "#FFFFFF"],
      dimensions: "40ft × 20ft Highway Unipole",
    },
    {
      id: "meitra-breath",
      title: "Breath Clinic — Dedicated Asthma Center",
      client: "Meitra Hospital",
      format: "Bilingual Highway Billboard",
      image: "/images/portfolio/crops/crop-24.jpg",
      concept: "Minimalist lung branch monogram icon symbolizing clear respiration and advanced pulmonology care.",
      typography: "Bilingual English & Malayalam Modern Sans",
      palette: ["#3D1B1B", "#E8A26A", "#FFFFFF"],
      dimensions: "30ft × 15ft Billboard",
    },
    {
      id: "haya-bridal",
      title: "വിലയേറിയ വലിയ നിമിഷങ്ങൾക്ക് (Bridal Opulence)",
      client: "Haya Gold & Diamonds",
      format: "Luxury Highway Unipole",
      image: "/images/portfolio/crops/crop-51.jpg",
      concept: "Opulent cinematic dark backdrops with warm gold ambient lighting, highlighting the intricate craftsmanship of bridal ornaments.",
      typography: "Curved Calligraphic Gold Malayalam Display",
      palette: ["#121212", "#D4AF37", "#FFFFFF"],
      dimensions: "45ft × 20ft Prime Highway Unipole",
    },
    {
      id: "carino-bull",
      title: "Built for Bold Ideas — The King of Durability",
      client: "Royal Carino",
      format: "Architectural Rollup & Billboard",
      image: "/images/portfolio/crops/crop-46.jpg",
      concept: "Charging bull smashing through industrial plywood substrate—an unmissable visual metaphor for unmatched architectural endurance.",
      typography: "Swiss Geometric Extra-Bold Sans",
      palette: ["#D48C28", "#2E1C14", "#FFFFFF"],
      dimensions: "Table Top Desk Edition & 8ft Rollup",
    },
    {
      id: "believers-heart",
      title: "Believers International Heart Centre (BIHC)",
      client: "Believers Hospital",
      format: "Architectural Corridor Wall Mural",
      image: "/images/portfolio/crops/crop-38.jpg",
      concept: "Anatomical cardiac education mural with clear icons explaining blood pressure, cholesterol, and preventive steps for outpatients.",
      typography: "Clear Educational Malayalam Sans",
      palette: ["#F9D3DC", "#A3163E", "#2E2E2E"],
      dimensions: "24ft × 8ft Hospital Lobby Murals",
    },
    {
      id: "future-factory-study",
      title: "Study in Georgia — Aspiring Doctors & Nurses",
      client: "Future Factory",
      format: "Exhibition Pavilion Standee",
      image: "/images/portfolio/crops/crop-58.jpg",
      concept: "Authentic candid campus photography inspiring verified confidence in parents and medical aspirants seeking medical education in Europe.",
      typography: "Energetic Display Sans",
      palette: ["#C92A2A", "#0CA678", "#FFFFFF"],
      dimensions: "6.5ft × 3ft Retractable Rollup",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-gray-50 border-t border-brand-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <Eye className="w-3.5 h-3.5 text-brand-red" />
              <span>Large-Format Typography & Art</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
              The Poster Wall & <br />
              <span className="text-brand-red">Billboard Gallery</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-brand-gray-600 leading-relaxed">
              From monumental 45-foot highway unipoles to tactile hospital corridor installations, our poster and environmental designs command the physical world.
            </p>
          </div>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group rounded-3xl overflow-hidden bg-white border border-brand-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Poster Graphic Frame */}
                <div
                  onClick={() => setSelectedPoster(poster)}
                  className="relative aspect-[16/11] bg-brand-gray-100 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-brand-black text-xs font-mono font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3 h-3 text-brand-red" /> Inspect Poster Specs
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-brand-black/85 text-white text-[10px] font-mono px-2.5 py-1 rounded">
                    {poster.format}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2.5">
                  <div className="text-xs font-mono text-brand-gray-500 uppercase tracking-wider">
                    {poster.client} • {poster.dimensions}
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-black group-hover:text-brand-red transition-colors line-clamp-1">
                    {poster.title}
                  </h3>
                  <p className="text-xs text-brand-gray-600 leading-relaxed line-clamp-2">
                    {poster.concept}
                  </p>
                </div>
              </div>

              {/* Palette & Action */}
              <div className="p-6 pt-0 border-t border-brand-gray-100 mt-2 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-brand-gray-400">PALETTE:</span>
                  {poster.palette.map((color, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-brand-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPoster(poster)}
                  className="font-bold text-brand-red hover:underline flex items-center gap-1"
                >
                  Specs <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-gray-200"
          >
            <div className="relative aspect-[16/10] bg-brand-gray-100">
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.title}
                fill
                className="object-contain bg-brand-gray-50"
              />
              <button
                onClick={() => setSelectedPoster(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-brand-red hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500 border-b pb-4">
                <span>CLIENT: {selectedPoster.client}</span>
                <span>DIMENSIONS: {selectedPoster.dimensions}</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-black">
                  {selectedPoster.title}
                </h3>
                <p className="text-sm text-brand-gray-700 mt-2 leading-relaxed">
                  {selectedPoster.concept}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-brand-gray-50 text-xs font-mono">
                <div>
                  <span className="text-brand-gray-500 block">Typography System:</span>
                  <span className="font-semibold text-brand-black">{selectedPoster.typography}</span>
                </div>
                <div>
                  <span className="text-brand-gray-500 block">Medium & Substrate:</span>
                  <span className="font-semibold text-brand-black">{selectedPoster.format}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

