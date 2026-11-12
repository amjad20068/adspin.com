"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const AgencyIntro: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-brand-gray-50 border-y border-brand-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Agency Introduction</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
              Creativity That <br />
              <span className="text-brand-red">Moves Brands</span> Forward.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-gray-700 leading-relaxed font-normal">
              <p>
                At Ad Spin, we believe great design is more than appearance. It is how a brand communicates, connects, and creates lasting impressions.
              </p>
              <p>
                From brand identity to digital campaigns, we bring creativity, strategy, and technology together to help businesses grow. We combine creativity, marketing, and technology under one roof. Our approach is simple: understand the brand, plan the strategy, create quality content, and deliver meaningful growth.
              </p>
            </div>

            {/* Principles list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strategic Brand Architecture",
                "High-Conversion Digital Motion",
                "Swiss Editorial Typography",
                "Long-Term Growth Partnerships",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-brand-black">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/about" size="md" variant="primary">
                <span>Discover Ad Spin</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Link
                href="/process"
                className="text-xs font-mono uppercase tracking-wider text-brand-gray-600 hover:text-brand-red transition-colors underline underline-offset-4"
              >
                Explore Our Process
              </Link>
            </div>
          </div>

          {/* Right Visual Composition: Authentic Team & Portfolio Sheet */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-brand-gray-200">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/portfolio/page-03.png"
                  alt="Team Ad Spin Agency Positioning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white border-t border-brand-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-brand-black">Official Agency Positioning</h4>
                  <p className="text-xs text-brand-gray-500 font-mono">Verified Portfolio • Page 03</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-brand-red" />
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-brand-black text-white p-5 rounded-xl shadow-xl max-w-xs border border-brand-gray-800">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-red mb-1">Brand Core</p>
              <p className="text-sm font-semibold leading-snug">
                &ldquo;Ad Spin works as a long-term digital partner for brands that want consistent and sustainable success.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

