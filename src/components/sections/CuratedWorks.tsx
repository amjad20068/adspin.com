"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WorkItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export const CuratedWorks: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  // The 4 initial iconic featured works directly from the 72-page portfolio
  const primaryWorks: WorkItem[] = [
    {
      id: "meitra-breath",
      slug: "meitra-hospital",
      title: "Breath Clinic — Asthma & Pulmonology Campaign",
      client: "Meitra Hospital",
      category: "Highway Billboard & Identity",
      image: "/images/portfolio/crops/crop-24.jpg",
      year: "2024",
      description: "Minimalist lung branch monogram and bilingual highway hoarding for comprehensive respiratory care.",
    },
    {
      id: "haya-gold",
      slug: "haya-gold",
      title: "Bridal Jewellery Luxury Campaign",
      client: "Haya Gold & Diamonds",
      category: "Luxury Unipole & Branding",
      image: "/images/portfolio/crops/crop-51.jpg",
      year: "2024",
      description: "Opulent cinematic dark backdrops with warm gold ambient lighting celebrating bridal craftsmanship.",
    },
    {
      id: "st-thomas",
      slug: "st-thomas-hospital",
      title: "എല്ലിന്റെ കാര്യം കഷ്ടത്തിലാണോ? (Orthopaedic Care)",
      client: "St. Thomas Hospital",
      category: "Highway Unipole Hoarding",
      image: "/images/portfolio/crops/crop-41.jpg",
      year: "2024",
      description: "Colloquial Malayalam typography creating instant commuter empathy for advanced joint surgery.",
    },
    {
      id: "carino-bull",
      slug: "carino-durability",
      title: "The King of Durability — Built for Bold Ideas",
      client: "Royal Carino",
      category: "Brand Identity & Billboard",
      image: "/images/portfolio/crops/crop-46.jpg",
      year: "2024",
      description: "Unmissable charging bull visual metaphor representing industrial architectural durability.",
    },
  ];

  // The secondary works revealed on clicking "View More"
  const secondaryWorks: WorkItem[] = [
    {
      id: "believers-heart",
      slug: "believers-hospital",
      title: "Believers International Heart Centre (BIHC)",
      client: "Believers Hospital",
      category: "Architectural Corridor Murals",
      image: "/images/portfolio/crops/crop-38.jpg",
      year: "2024",
      description: "Cardiac education wall installations explaining preventive care with clean visual icons.",
    },
    {
      id: "33-holdings",
      slug: "33-holdings",
      title: "Global Enterprise Investment Group",
      client: "33 Holdings",
      category: "Corporate Brand Identity",
      image: "/images/portfolio/crops/crop-04.jpg",
      year: "2024",
      description: "Minimal geometric brand system for international investments across technology and real estate.",
    },
    {
      id: "naseem-healthcare",
      slug: "naseem-healthcare",
      title: "Premier Medical Centre Campaigns",
      client: "Naseem Healthcare Qatar",
      category: "Healthcare Campaign & Print",
      image: "/images/portfolio/crops/crop-09.jpg",
      year: "2024",
      description: "Sophisticated medical communication across Doha, establishing clinical leadership and trust.",
    },
    {
      id: "o4-optical",
      slug: "o4-optical",
      title: "٥٤ للنظارات — Luxury Eyewear System",
      client: "O4 Optical",
      category: "Bilingual Arabic & Latin Brand",
      image: "/images/portfolio/crops/crop-63.jpg",
      year: "2024",
      description: "Harmonious bilingual typographic identity engineered for premium retail across the GCC.",
    },
  ];

  const displayedWorks = showMore ? [...primaryWorks, ...secondaryWorks] : primaryWorks;

  return (
    <section className="py-20 sm:py-28 bg-white" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
              Featured Posters & <span className="text-brand-red">Brand Works</span>
            </h2>
          </div>
          <p className="text-sm text-brand-gray-600 max-w-sm sm:text-right">
            Curated brand identities, highway hoardings, and campaign designs from our 72-page portfolio.
          </p>
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {displayedWorks.map((work) => (
            <Link
              key={work.id}
              href={`/work/${work.slug}`}
              className="group block rounded-2xl overflow-hidden bg-brand-gray-50 border border-brand-gray-200 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-lg"
            >
              {/* Artwork Frame */}
              <div className="relative aspect-[16/11] bg-brand-gray-100 overflow-hidden">
                <Image
                  src={work.image}
                  alt={`${work.client} - ${work.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-brand-black shadow-xs">
                  {work.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 sm:p-7 space-y-2.5 bg-white">
                <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500">
                  <span className="font-semibold text-brand-black uppercase tracking-wider">{work.client}</span>
                  <span>{work.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors line-clamp-1">
                  {work.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed line-clamp-2">
                  {work.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-gray-400">Verified Case Study</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Controls */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-brand-gray-100">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-black text-white hover:bg-brand-red text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>{showMore ? "Show Less" : "View More Posters (+4 Works)"}</span>
            {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <Button href="/work" variant="outline" size="md">
            <span>Explore Full 72-Page Archive & PDF</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

