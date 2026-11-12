import React from "react";
import { Compass, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";

export const WhyAdSpin: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "Strategic Thinking",
      icon: Compass,
      description:
        "Great design begins with deep understanding. Before touching a single pixel or grid, we analyze the business model, competitive landscape, and audience psychology to craft an irrefutable communication strategy.",
    },
    {
      number: "02",
      title: "Creative Excellence",
      icon: Sparkles,
      description:
        "We reject formulaic templates and recycled design trends. Every logomark, editorial brochure, and video composition is custom-crafted to establish instant distinctiveness and emotional resonance.",
    },
    {
      number: "03",
      title: "Consistent Quality",
      icon: ShieldCheck,
      description:
        "A brand lives across hundreds of touchpoints. We enforce rigorous design standards and comprehensive guidelines so your visual identity maintains razor-sharp fidelity in print, outdoor hoardings, and digital screens.",
    },
    {
      number: "04",
      title: "Growth-Focused Execution",
      icon: TrendingUp,
      description:
        "Aesthetics without commercial results is vanity. Every creative campaign, social sequence, and digital experience is architected to attract high-value clients, drive footfall, and fuel sustainable business growth.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-gray-50 border-y border-brand-gray-200/80 relative overflow-hidden">
      {/* Background Spiral Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none">
        <SpiralMark size={600} animate={false} interactive={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Core Agency Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            More Than Design. <br />
            <span className="text-brand-red">We Build Brand Experiences.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-gray-700 leading-relaxed font-normal">
            We partner with ambitious enterprises who understand that design is not an expense—it is their most powerful competitive advantage.
          </p>
        </div>

        {/* 4 Editorial Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="group p-8 rounded-2xl bg-white border border-brand-gray-200/80 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-gray-50 flex items-center justify-center text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-black tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-gray-100 flex items-center justify-between text-xs font-mono text-brand-gray-400">
                  <span>AD SPIN PRINCIPLE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

