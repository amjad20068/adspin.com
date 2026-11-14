"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileDown, Layers } from "lucide-react";
import { PROJECTS, CATEGORIES, ProjectCategory } from "@/data/projects";

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Work");

  const filteredProjects =
    activeCategory === "All Work"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills & PDF Download Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-12 border-b border-brand-gray-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-tight transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-brand-black text-white shadow-sm font-bold"
                  : "bg-brand-gray-50 text-brand-gray-700 hover:bg-brand-gray-200 font-medium"
              }`}
            >
              {cat}
              {cat === "All Work" && ` (${PROJECTS.length})`}
            </button>
          ))}
        </div>

        <a
          href="/Adspin_Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gray-100 hover:bg-brand-red hover:text-white text-xs font-mono text-brand-black transition-all shrink-0 border border-brand-gray-200"
        >
          <FileDown className="w-3.5 h-3.5 text-brand-red group-hover:text-white" />
          <span>Download 72-Page PDF Portfolio</span>
        </a>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white border border-brand-gray-200/90 hover:border-brand-red transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Image Container */}
              <div className="relative aspect-[16/11] bg-brand-gray-100 overflow-hidden">
                <Image
                  src={project.cropImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white border border-brand-gray-200 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-brand-black shadow-xs">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-brand-black/80 text-white px-2.5 py-1 rounded-full text-[10px] font-mono">
                  {project.year}
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="p-6 space-y-2.5">
                <div className="text-xs font-mono text-brand-gray-500 uppercase tracking-wider">
                  {project.client} • {project.location}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="px-6 pb-6 pt-3 border-t border-brand-gray-100 flex items-center justify-between text-xs">
              <span className="font-mono text-brand-gray-400">
                {project.serviceCategories[0]}
              </span>
              <span className="font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

