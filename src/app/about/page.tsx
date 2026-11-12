import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, FileDown, ShieldCheck, Target, HeartHandshake, Zap } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";
import { Button } from "@/components/ui/Button";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Creative Minds. Meaningful Work.",
  description:
    "Ad Spin is a creative digital marketing and branding agency combining creativity, strategy, and technology under one roof.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>About AD SPIN</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Creative Minds. <br />
            <span className="text-brand-red">Meaningful Work.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-brand-gray-700 font-normal leading-relaxed">
            Ad Spin is a creative digital marketing agency that helps brands grow online. We create strong visuals, execute effective marketing campaigns, and build websites that support business growth.
          </p>
        </div>
      </section>

      {/* Verified Agency Positioning Sheet & Core Philosophy */}
      <section className="bg-brand-gray-50 py-20 sm:py-28 border-y border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual sheet */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden bg-white border border-brand-gray-200 shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/portfolio/page-03.png"
                    alt="Official Ad Spin Agency Philosophy Sheet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-white border-t border-brand-gray-100 flex items-center justify-between text-xs font-mono text-brand-gray-500">
                  <span>Ad Spin Portfolio • Page 03</span>
                  <span className="text-brand-red font-bold">www.adspin.in</span>
                </div>
              </div>
            </div>

            {/* Editorial copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                Who We Are & What We Believe
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-black">
                We Combine Creativity, Marketing, and Technology Under One Roof.
              </h2>
              <div className="space-y-4 text-brand-gray-700 text-base leading-relaxed">
                <p>
                  We offer professional video shooting for brands, promotions, events, and social media. Our videos tell clear stories, build trust, and increase audience engagement. We also design eye-catching posters and digital creatives that attract attention and communicate the brand message clearly.
                </p>
                <p>
                  Ad Spin provides complete digital marketing services including social media marketing, paid advertising, SEO, and content planning. We focus on reaching the right audience, improving brand visibility, and generating real results for businesses.
                </p>
                <p>
                  We design and develop modern, fast, and mobile-friendly websites. Our websites are easy to use, visually appealing, and built to convert visitors into customers.
                </p>
                <p className="font-semibold text-brand-black pt-2 border-l-2 border-brand-red pl-4 italic">
                  &ldquo;Ad Spin works as a long-term digital partner for brands that want consistent and sustainable success.&rdquo;
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="/Adspin_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-black text-white hover:bg-brand-red text-xs font-mono tracking-wider uppercase transition-all shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-brand-red" />
                  Download 72-Page PDF Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Red Spiral Symbolism */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                Our Signature Identity
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-black">
                The Anatomy of the <span className="text-brand-red">Red Spiral</span>
              </h2>
              <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed">
                The AD SPIN red spiral is more than a logo symbol—it embodies perpetual momentum, evolving creative vision, and concentrated impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-brand-gray-50 border border-brand-gray-200">
                  <h4 className="text-base font-bold text-brand-black mb-1">Momentum & Evolution</h4>
                  <p className="text-xs text-brand-gray-600 leading-relaxed">
                    A spiral begins at the core insight and expands outward into market dominance, mirroring how our brand systems scale across channels.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-gray-50 border border-brand-gray-200">
                  <h4 className="text-base font-bold text-brand-black mb-1">Unapologetic Focus</h4>
                  <p className="text-xs text-brand-gray-600 leading-relaxed">
                    Set against high-contrast pure white and obsidian black, the signature crimson (#D54F56) demands immediate visual attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center p-12 bg-brand-gray-50 rounded-3xl border border-brand-gray-200">
              <SpiralMark size={220} speed={25} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              Comprehensive Domain Mastery
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-black mt-2">
              Our Creative Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Brand Architecture",
                desc: "Logomarks, bilingual Arab-Latin typography, comprehensive guideline specifications, and corporate stationery.",
              },
              {
                icon: Zap,
                title: "Visual Campaigns",
                desc: "High-impact outdoor hoardings, clinical healthcare promotion, exhibition stalls, and festive print collateral.",
              },
              {
                icon: HeartHandshake,
                title: "Digital & Video",
                desc: "Commercial 4K ads, macro product videography, short-form Instagram reels, and Meta performance marketing.",
              },
              {
                icon: ShieldCheck,
                title: "Web Engineering",
                desc: "Next.js high-performance web applications, editorial UI/UX, responsive mobile layouts, and instant WhatsApp booking.",
              },
            ].map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="p-8 rounded-2xl bg-brand-gray-50 border border-brand-gray-200 hover:border-brand-red transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-gray-200 flex items-center justify-center text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">{exp.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">{exp.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold">
                Ready to elevate your brand presence?
              </h3>
              <p className="text-sm text-brand-gray-400">
                Discuss your goals with our creative strategists today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="/contact" size="md" variant="secondary">
                Let&apos;s Talk
              </Button>
              <Button
                href={AGENCY_CONFIG.getWhatsAppUrl()}
                isExternal
                size="md"
                variant="whatsapp"
              >
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

