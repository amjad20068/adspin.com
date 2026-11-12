"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS, CATEGORIES, ProjectCategory } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Work");

  const filteredProjects =
    selectedCategory === "All Work"
      ? PROJECTS.filter((p) => p.isFeatured).slice(0, 8)
      : PROJECTS.filter((p) => p.category === selectedCategory).slice(0, 8);

  const heroProject = PROJECTS.find((p) => p.slug === "meitra-hospital") || PROJECTS[0];
  const sideProjects = filteredProjects.filter((p) => p.slug !== heroProject.slug).slice(0, 5);

  return (
    <section className="py-24 sm:py-32 bg-white relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Proven Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
              Selected Work. <br />
              <span className="text-brand-red">Real Impact.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm text-brand-gray-600 max-w-sm text-left md:text-right">
              Explore authentic campaigns, packaging systems, and digital architectures executed for market leaders across Qatar, UAE, Oman, and India.
            </p>
            <Button href="/work" size="sm" variant="primary">
              <span>View All 22+ Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-brand-gray-200">
          {["All Work", "Branding", "Social Media", "Print Design", "Advertising", "Video & Reels", "Outdoor Branding"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as ProjectCategory)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand-black text-white shadow-sm"
                  : "bg-brand-gray-50 text-brand-gray-700 hover:bg-brand-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Portfolio Layout */}
        <div className="space-y-12 sm:space-y-16">
          {/* 1. Large Hero Featured Project Showcase: Meitra Hospital */}
          <Link
            href={`/work/${heroProject.slug}`}
            className="group block relative rounded-3xl overflow-hidden bg-brand-gray-50 border border-brand-gray-200/80 hover:border-brand-red transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="bg-brand-red text-white px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Featured Project
                  </span>
                  <span className="text-brand-gray-500 uppercase">{heroProject.category}</span>
                  <span className="text-brand-gray-400">•</span>
                  <span className="text-brand-gray-500">{heroProject.location}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-black group-hover:text-brand-red transition-colors">
                  {heroProject.name}
                </h3>
                <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed">
                  {heroProject.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {heroProject.serviceCategories.map((sc) => (
                    <span
                      key={sc}
                      className="text-xs bg-white text-brand-gray-700 px-3 py-1 rounded-full border border-brand-gray-200 font-mono"
                    >
                      {sc}
                    </span>
                  ))}
                </div>
                <div className="pt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors">
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-gray-100 shadow-inner">
                  <Image
                    src={heroProject.cropImage}
                    alt={heroProject.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* 2. Two-Column Editorial Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {sideProjects.slice(0, 4).map((project, idx) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-brand-gray-200/80 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-lg"
              >
                <div className="relative aspect-[16/11] bg-brand-gray-100 overflow-hidden">
                  <Image
                    src={project.cropImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-brand-black shadow-xs">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-gray-600 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-gray-400">
                      {project.serviceCategories[0]} • {project.serviceCategories[1] || "Design"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 3. Full-Width Campaign Showcase Banner: 33 Holdings & Haya Gold */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-black text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
            <div className="lg:col-span-5 space-y-5 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                Outdoor & Campaign Activation
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
                Haya Gold & Diamonds — Luxury Highway Campaigns
              </h3>
              <p className="text-sm sm:text-base text-brand-gray-300 leading-relaxed">
                Opulent bridal jewellery storytelling, high-impact unmissable highway unipoles, and showroom launch activations that establish unmatched brand prestige across retail districts.
              </p>
              <div className="pt-2">
                <Button href="/work/haya-gold" variant="secondary" size="md">
                  <span>Explore Haya Gold Case Study</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 relative z-10">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-gray-800 shadow-2xl">
                <Image
                  src="/images/portfolio/crops/crop-51.jpg"
                  alt="Haya Gold Highway Hoarding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Work Page */}
        <div className="text-center mt-16 pt-8 border-t border-brand-gray-200">
          <p className="text-sm text-brand-gray-600 mb-4">
            Want to see how we transformed 22+ brands with custom identities, print catalogues, and commercial reels?
          </p>
          <Button href="/work" size="lg" variant="primary">
            <span>Explore All Portfolio Projects & PDF</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

