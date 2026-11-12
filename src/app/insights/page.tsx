import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, BookOpen, Clock, Tag, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Journal & Strategic Insights | AD SPIN",
  description:
    "Editorial essays on brand architecture, healthcare communication design, Swiss typography, and high-conversion video reels from AD SPIN.",
};

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Editorial & Thought Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            The AD SPIN <br />
            <span className="text-brand-red">Journal.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            Critical perspectives on visual identity systems, bilingual typography, medical communications, and the commercial mechanics of contemporary design.
          </p>
        </div>
      </section>

      {/* Featured Lead Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-brand-gray-50 border border-brand-gray-200">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono text-brand-gray-500">
              <span className="bg-brand-red text-white px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Lead Essay
              </span>
              <span>{ARTICLES[0].category}</span>
              <span>•</span>
              <span>{ARTICLES[0].readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-brand-black">
              {ARTICLES[0].title}
            </h2>
            <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed">
              {ARTICLES[0].excerpt}
            </p>
            <div className="space-y-4 pt-2 border-t border-brand-gray-200">
              {ARTICLES[0].content.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-brand-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Strategic Essays */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center gap-3 pb-4 border-b border-brand-gray-200">
          <span className="w-2 h-2 rounded-full bg-brand-red" />
          <h3 className="text-xl font-display font-bold text-brand-black uppercase">
            Recent Analysis & Essays
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.slice(1).map((article) => (
            <div
              key={article.slug}
              className="p-8 rounded-2xl bg-white border border-brand-gray-200/90 hover:border-brand-red transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500">
                  <span className="text-brand-red font-semibold">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                  {article.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Key takeaways */}
                <div className="pt-4 border-t border-brand-gray-100 space-y-2">
                  <span className="text-[10px] font-mono text-brand-gray-400 uppercase tracking-widest block font-bold">
                    Key Insights:
                  </span>
                  {article.keyTakeaways.map((point) => (
                    <div key={point} className="text-xs text-brand-gray-700 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-red mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-gray-100 flex items-center justify-between text-xs font-mono text-brand-gray-400">
                <span>{article.date}</span>
                <span className="text-brand-red font-bold">AD SPIN Insights</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-black text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Looking for strategic branding and design consulting?
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-400 max-w-xl mx-auto">
            Bring our strategic thinkers into your boardroom or brand steering committee.
          </p>
          <div className="pt-2">
            <Button href="/contact" size="md" variant="secondary">
              Consult With Our Strategists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

