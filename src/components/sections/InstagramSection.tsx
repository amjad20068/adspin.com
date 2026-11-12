import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/utils";

export const InstagramSection: React.FC = () => {
  // Authentic creative posts from portfolio
  const instagramShowcase = [
    {
      image: "/images/portfolio/crops/crop-04.jpg",
      client: "33 Holdings",
      type: "Corporate Social Series",
    },
    {
      image: "/images/portfolio/crops/crop-07.jpg",
      client: "Premium Naseem",
      type: "Clinical Aesthetics Campaign",
    },
    {
      image: "/images/portfolio/crops/crop-21.jpg",
      client: "Meitra Hospital",
      type: "Centre of Excellence Series",
    },
    {
      image: "/images/portfolio/crops/crop-50.jpg",
      client: "Haya Gold & Diamonds",
      type: "Bridal Jewellery Showcase",
    },
    {
      image: "/images/portfolio/crops/crop-54.jpg",
      client: "AV Luxe LED Lights",
      type: "Architectural Lighting Launch",
    },
    {
      image: "/images/portfolio/crops/crop-67.jpg",
      client: "Nesto Fashion India",
      type: "Urban Streetwear Reels",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-gray-50 border-t border-brand-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <Instagram className="w-3.5 h-3.5 text-brand-red" />
              <span>Social Design In Action</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
              Follow Our <span className="text-brand-red">Creative Journey</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={AGENCY_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-black text-white hover:bg-brand-red text-xs font-medium tracking-tight transition-all duration-300 shadow-sm group"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow {AGENCY_CONFIG.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6-Item Authentic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {instagramShowcase.map((item, idx) => (
            <a
              key={idx}
              href={AGENCY_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-white border border-brand-gray-200/90 hover:border-brand-red shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-gray-100">
                <Image
                  src={item.image}
                  alt={`${item.client} - ${item.type}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-brand-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm">
                    <Instagram className="w-4 h-4 text-brand-red" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold text-brand-black truncate group-hover:text-brand-red transition-colors">
                  {item.client}
                </p>
                <p className="text-[10px] font-mono text-brand-gray-500 truncate mt-0.5">
                  {item.type}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Caption bar */}
        <div className="mt-8 text-center text-xs font-mono text-brand-gray-500">
          <span>Official Instagram: </span>
          <a
            href={AGENCY_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-black hover:text-brand-red underline font-semibold ml-1"
          >
            instagram.com/ad_spin
          </a>
        </div>
      </div>
    </section>
  );
};

