import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/utils";

export const InstagramSection: React.FC = () => {
  // Verified real posts directly from https://www.instagram.com/ad_spin
  const realInstagramPosts = [
    {
      id: "DfBz55WHwKR",
      image: "/images/instagram/post-01.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/DfBz55WHwKR/",
      client: "Bhoo — Earth Architecture",
      type: "Visual Identity & Heritage Branding",
    },
    {
      id: "DfBzsfGn_PV",
      image: "/images/instagram/post-02.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/DfBzsfGn_PV/",
      client: "Bhoo — Architectural Design",
      type: "Layout Systems & Typographic Guidelines",
    },
    {
      id: "De09XA4n6TC",
      image: "/images/instagram/post-03.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/De09XA4n6TC/",
      client: "Elvora Fashion",
      type: "Luxury Footwear Brand Identity & Packaging",
    },
    {
      id: "Det9y6dH-h5",
      image: "/images/instagram/post-04.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/Det9y6dH-h5/",
      client: "Olympian Sports",
      type: "Storefront Signage & Custom Apparel",
    },
    {
      id: "DerOlo0H-73",
      image: "/images/instagram/post-05.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/DerOlo0H-73/",
      client: "khai.raw Fashion",
      type: "Women's Apparel Branding & Store Signage",
    },
    {
      id: "Deewm0STwl0",
      image: "/images/instagram/post-06.jpg",
      postUrl: "https://www.instagram.com/ad_spin/p/Deewm0STwl0/",
      client: "Ad Spin Agency",
      type: "Spin Your Brand Forward! Official Manifesto",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-gray-50 border-t border-brand-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 pb-6 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-2">
              <Instagram className="w-3.5 h-3.5 text-brand-red" />
              <span>Official Instagram Feed</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
              Live From <span className="text-brand-red">@ad_spin</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray-600 mt-2 font-mono">
              Giving your brand a unique spin. Strategy • Design • Campaigns • Website
            </p>
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

        {/* 6 Real Instagram Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {realInstagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-white border border-brand-gray-200/90 hover:border-brand-red shadow-xs hover:shadow-xl transition-all duration-300"
              title={`View ${post.client} on Instagram @ad_spin`}
            >
              {/* Instagram Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray-100">
                <Image
                  src={post.image}
                  alt={`${post.client} - ${post.type}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with Instagram Icon & View Prompt */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/50 transition-colors flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-brand-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-md">
                    <Instagram className="w-4 h-4 text-brand-red" />
                  </div>
                  <span className="text-[10px] font-mono text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                    View on IG <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-3 bg-white">
                <p className="text-xs font-bold text-brand-black truncate group-hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>{post.client}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
                </p>
                <p className="text-[10px] font-mono text-brand-gray-500 truncate mt-0.5">
                  {post.type}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center text-xs font-mono text-brand-gray-500">
          <span>Official Instagram Profile: </span>
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
