import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services & Capabilities | AD SPIN Creative Agency",
  description:
    "Explore AD SPIN's 8 core creative services: Brand Identity, Social Media Marketing, Print & Publication, Advertising Campaigns, Video Production, SEO, Website Development, and Outdoor Branding.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Comprehensive Creative Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Services Built For <br />
            <span className="text-brand-red">Maximum Impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            We operate at the intersection of Swiss editorial design, cultural storytelling, and commercial growth. From initial logomarks to multi-city billboard takeovers, we deliver excellence across 8 core services.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mt-12 flex flex-wrap gap-2 pt-6 border-t border-brand-gray-200">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-brand-gray-50 text-brand-gray-700 hover:text-white hover:bg-brand-red border border-brand-gray-200 transition-colors"
            >
              {s.number} {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => {
          const relatedProjects = PROJECTS.filter((p) =>
            service.featuredProjects.includes(p.slug)
          ).slice(0, 3);

          return (
            <div
              key={service.id}
              id={service.id}
              className="pt-12 border-t border-brand-gray-200 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left col: Title, Tagline, Overview */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono font-bold text-brand-red">
                      {service.number}
                    </span>
                    <span className="h-px w-12 bg-brand-gray-300" />
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gray-500">
                      Core Discipline
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-black">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-brand-red font-mono">
                    {service.tagline}
                  </p>

                  <p className="text-base text-brand-gray-700 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={AGENCY_CONFIG.getWhatsAppUrl(
                        `Hello Ad Spin! I would like to enquire about your "${service.title}" services.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <Button href="/contact" size="sm" variant="outline">
                      <span>Request Proposal</span>
                    </Button>
                  </div>
                </div>

                {/* Right col: Capabilities & Deliverables Breakdown */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Capabilities */}
                  <div className="p-8 rounded-2xl bg-brand-gray-50 border border-brand-gray-200">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-brand-black font-bold mb-4">
                      Core Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="p-8 rounded-2xl bg-white border border-brand-gray-200 shadow-xs">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-brand-black font-bold mb-4">
                      Final Production Deliverables
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-brand-gray-600">
                      {service.deliverables.map((del) => (
                        <li key={del} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Portfolio Projects */}
                  {relatedProjects.length > 0 && (
                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-gray-500 block mb-3">
                        Featured Case Studies in {service.title}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {relatedProjects.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/work/${p.slug}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gray-100 hover:bg-brand-red hover:text-white text-xs font-medium text-brand-black transition-all"
                          >
                            <span>{p.name}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-black text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Need a custom service combination or retainer?
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-400 max-w-xl mx-auto">
            We tailor custom creative packages combining identity, video shoots, monthly social campaigns, and web development.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="md" variant="secondary">
              Request Custom Scope
            </Button>
            <Button
              href={AGENCY_CONFIG.getWhatsAppUrl()}
              isExternal
              size="md"
              variant="whatsapp"
            >
              Direct WhatsApp Discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

