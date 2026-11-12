import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Target, PenTool, Send, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CreativeProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understand the business, audience, and objectives.",
      icon: Search,
      details:
        "We immerse ourselves in your market landscape, customer pain points, competitive benchmarks, and commercial ambitions to identify the single most compelling brand angle.",
    },
    {
      number: "02",
      title: "Strategize",
      subtitle: "Develop the creative direction and communication strategy.",
      icon: Target,
      details:
        "We establish clear visual territories, core messaging hierarchy, typography systems, and campaign themes that align directly with business goals.",
    },
    {
      number: "03",
      title: "Create",
      subtitle: "Transform ideas into meaningful visual experiences.",
      icon: PenTool,
      details:
        "Our design and motion studios craft logomarks, editorial publications, video reels, and digital assets with Swiss discipline and artistic perfection.",
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Present refined creative work and execute the project.",
      icon: Send,
      details:
        "We deliver production-ready print masters, responsive codebases, and brand books with meticulous attention to detail and launch-readiness.",
    },
    {
      number: "05",
      title: "Grow",
      subtitle: "Support consistent brand communication and long-term growth.",
      icon: TrendingUp,
      details:
        "We act as your dedicated long-term creative partners, iterating campaigns, maintaining brand integrity, and scaling market presence.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Methodology & Precision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
              Our Creative <span className="text-brand-red">Process</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-brand-gray-600 leading-relaxed">
              A structured 5-stage creative engineering framework designed to eliminate guesswork and deliver world-class brand experiences on time and on target.
            </p>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-12 right-12 h-0.5 bg-brand-gray-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-brand-gray-200/90 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-xl"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-mono font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-brand-gray-50 flex items-center justify-center text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-black leading-snug mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-brand-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-gray-100 flex items-center justify-between text-xs font-mono text-brand-gray-400">
                    <span>STAGE {idx + 1} OF 5</span>
                    <span className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-gray-50 border border-brand-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-brand-black">
              Ready to take your brand through our 5-stage creative process?
            </h4>
            <p className="text-xs text-brand-gray-600 mt-1">
              From discovery sessions to international launch, we ensure total transparency and uncompromised execution.
            </p>
          </div>
          <Button href="/process" size="sm" variant="primary">
            <span>Read Process Details</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

