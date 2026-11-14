import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Video, Film, Play, ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { AGENCY_CONFIG } from "@/lib/utils";

export const VideoProductionShowcase: React.FC = () => {
  const productions = [
    {
      title: "Nesto Fashion India — Festive Eid Commercial",
      client: "Nesto Group",
      format: "Television Commercial & Cinema Widescreen (16:9)",
      image: "/images/portfolio/crops/crop-68.jpg",
      tagline: "Heartwarming Family Gathering & Traditional Elegance",
      specs: {
        camera: "Cinema 4K Sensor",
        framerate: "24 FPS Cinematic",
        grading: "DaVinci Resolve Studio Film Emulation",
        scope: "Full Scriptwriting, On-Location Shoot & Audio Post",
      },
      link: "/work/nesto-fashion",
    },
    {
      title: "Fastrack Watch Edition — Macro Product Film",
      client: "Fastrack India",
      format: "Vertical High-Energy Reel (9:16)",
      image: "/images/portfolio/crops/crop-70.jpg",
      tagline: "Macro Camera Sweeps Highlighting Gunmetal Bevels",
      specs: {
        camera: "Macro Prime 90mm T2.9",
        lighting: "Precision LED Rim Light Sweeps",
        audio: "Percussion-Synced Sound Design",
        scope: "Product Macro Shoot & Motion Graphics",
      },
      link: "/work/fastrack",
    },
    {
      title: "Peter England — Festive Menswear Store Walk-In",
      client: "Peter England",
      format: "On-Location Fashion Social Reel (9:16)",
      image: "/images/portfolio/crops/crop-71.jpg",
      tagline: "Dynamic Handheld Cinematography in Flagship Retail",
      specs: {
        camera: "Gimbal-Stabilized Full-Frame 4K",
        style: "High-Paced Streetwise Editorial Cut",
        conversion: "In-Store Footfall & Social Conversions",
        scope: "Model Direction, Styling & Fast Turnaround Edit",
      },
      link: "/work/peter-england",
    },
    {
      title: "Crypto Liveon — Cinema Theater Big-Screen Ad",
      client: "Crypto Liveon",
      format: "Theatrical Commercial Spot (DCI 2K / 4K)",
      image: "/images/portfolio/crops/crop-69.jpg",
      tagline: "Big-Screen Storytelling on Financial Literacy",
      specs: {
        aspectRatio: "2.39:1 Cinema Scope",
        audioMaster: "5.1 Surround Sound Design",
        delivery: "DCP Package for Multiplex Projection",
        scope: "Concept, Live Shoot & Multiplex Deployment",
      },
      link: "/work/crypto-liveon",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-black text-white relative overflow-hidden" id="video-production">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-brand-gray-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <Camera className="w-3.5 h-3.5 text-brand-red" />
              <span>Camera Shoots & Motion Cinema</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase leading-tight">
              Commercial Films & <br />
              <span className="text-brand-red">High-Paced Reels</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-brand-gray-400 leading-relaxed">
              We provide end-to-end cinematography: professional camera shoots, lighting design, sound engineering, DaVinci Resolve color grading, and viral social media edits that stop the scroll.
            </p>
          </div>
        </div>

        {/* 4 Production Units Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {productions.map((prod, idx) => (
            <div
              key={prod.title}
              className="group rounded-3xl overflow-hidden bg-brand-gray-900/60 border border-brand-gray-800 hover:border-brand-red transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cinema Screen Frame with Camera Viewfinder HUD */}
                <div className="relative aspect-[16/10] bg-brand-black overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Viewfinder Camera Overlays */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-brand-black/70 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono border border-brand-gray-700">
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                    <span>REC ● 4K RAW</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-brand-black/70 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-brand-gray-300 border border-brand-gray-700">
                    ISO 800 • 1/48s • 24FPS
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/95 text-brand-black text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                    {prod.format}
                  </div>

                  {/* Center Play Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-black/40">
                    <div className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gray-400">
                    <span>{prod.client}</span>
                    <span className="text-brand-red">PRODUCTION UNIT #{idx + 1}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-red transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-gray-400 font-mono">
                    {prod.tagline}
                  </p>

                  {/* Specs Table */}
                  <div className="mt-4 p-4 rounded-xl bg-brand-black/60 border border-brand-gray-800 text-xs font-mono space-y-1.5 text-brand-gray-300">
                    <div className="flex justify-between">
                      <span className="text-brand-gray-500">Camera / Glass:</span>
                      <span>{prod.specs.camera}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray-500">Post & Grade:</span>
                      <span>{prod.specs.grading}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray-500">Deliverable:</span>
                      <span>{prod.specs.scope}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-brand-gray-800/80 flex items-center justify-between text-xs">
                <Link
                  href={prod.link}
                  className="font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Production Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={AGENCY_CONFIG.getWhatsAppUrl(
                    `Hello Ad Spin! We are looking for video shooting / reel production similar to "${prod.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-400 hover:text-white flex items-center gap-1.5 font-mono text-[11px]"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Book Shoot</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Consultation Box */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-gray-900 border border-brand-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              Planning a commercial shoot, fashion campaign, or brand film?
            </h4>
            <p className="text-xs text-brand-gray-400">
              Our camera crews and post-production suites handle scriptwriting, multi-camera sets, lighting, and final export.
            </p>
          </div>
          <a
            href={AGENCY_CONFIG.getWhatsAppUrl(
              "Hello Ad Spin! I'd like to book a consultation for a commercial video shoot / reel production."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide shadow-md transition-all"
          >
            <WhatsAppIcon size={18} className="text-white" />
            <span>Book Video Shoot via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

