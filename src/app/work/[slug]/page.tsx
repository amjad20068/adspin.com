import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileDown, Calendar, MapPin, Tag } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { AGENCY_CONFIG } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Case Study | AD SPIN`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | AD SPIN Case Study`,
      description: project.shortDescription,
      images: [project.cropImage || project.heroImage],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find related projects (same category or next in list)
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.category === project.category || p.isFeatured)
  ).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Back button & Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-gray-600 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-gray-100 text-brand-black border border-brand-gray-200">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Case Study Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            Client: {project.client}
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-brand-gray-700 font-normal leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-brand-gray-200">
          <div>
            <span className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-widest block">
              Client
            </span>
            <span className="text-sm font-bold text-brand-black mt-1 block">
              {project.client}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-widest block">
              Year & Timeline
            </span>
            <span className="text-sm font-bold text-brand-black mt-1 block flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-red" />
              {project.year}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-widest block">
              Location / Region
            </span>
            <span className="text-sm font-bold text-brand-black mt-1 block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              {project.location}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-widest block">
              Primary Scope
            </span>
            <span className="text-sm font-bold text-brand-black mt-1 block flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-brand-red" />
              {project.serviceCategories[0]}
            </span>
          </div>
        </div>
      </section>

      {/* Main Hero Visual Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-brand-gray-100 border border-brand-gray-200 shadow-xl">
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className="object-contain bg-white"
              priority
            />
          </div>
          <div className="p-4 bg-brand-gray-50 border-t border-brand-gray-200 flex items-center justify-between text-xs font-mono text-brand-gray-500">
            <span>Official Portfolio Presentation Sheet • {project.name}</span>
            <span className="text-brand-red font-semibold">AD SPIN Creative</span>
          </div>
        </div>
      </section>

      {/* Narrative Breakdown: Objective, Creative Approach, Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Objective & Approach */}
          <div className="lg:col-span-7 space-y-12">
            {/* Project Objective */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span>Strategic Mandate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-black">
                The Objective
              </h2>
              <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* Creative Approach */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span>Execution Direction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-black">
                Creative Approach
              </h2>
              <p className="text-base sm:text-lg text-brand-gray-700 leading-relaxed">
                {project.creativeApproach}
              </p>
            </div>
          </div>

          {/* Right Column: Design Deliverables & WhatsApp Booking Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-brand-gray-50 border border-brand-gray-200 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-widest text-brand-black font-bold mb-6">
                Design Deliverables
              </h3>
              <ul className="space-y-3.5">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-brand-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct WhatsApp Consultation for Similar Work */}
            <div className="p-8 rounded-3xl bg-brand-black text-white space-y-4 shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-red font-bold">
                Start a Similar Project
              </span>
              <h4 className="text-xl font-display font-bold">
                Inspired by {project.name}?
              </h4>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                Connect directly with our creative team to discuss requirements for your brand.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={AGENCY_CONFIG.getWhatsAppUrl(
                    `Hello Ad Spin! I was reviewing your case study for "${project.name}" and would like to discuss a similar project for my brand.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-all shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-white" />
                  <span>Book Consultation via WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 rounded-full border border-brand-gray-700 hover:border-brand-red hover:text-brand-red text-xs font-mono text-brand-gray-300 transition-colors"
                >
                  Submit Detailed Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery: Additional Sheets & Crops from Portfolio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 border-t border-brand-gray-200 pt-16">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            Visual Documentation
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-brand-black mt-1">
            Project Visuals & Collateral
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-brand-gray-50 border border-brand-gray-200 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={img}
                  alt={`${project.name} visual ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-white border-t border-brand-gray-100 text-xs font-mono text-brand-gray-500 flex items-center justify-between">
                <span>Asset #{idx + 1}</span>
                <span>{project.client}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-gray-200 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-brand-black">
              More Case Studies
            </h2>
            <Link
              href="/work"
              className="text-xs font-mono uppercase tracking-wider text-brand-red hover:underline"
            >
              View All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-brand-gray-200 hover:border-brand-red transition-all shadow-xs"
              >
                <div className="relative aspect-[16/11] bg-brand-gray-100 overflow-hidden">
                  <Image
                    src={p.cropImage}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-gray-500">
                    {p.category}
                  </span>
                  <h4 className="text-base font-bold text-brand-black group-hover:text-brand-red transition-colors mt-1">
                    {p.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

