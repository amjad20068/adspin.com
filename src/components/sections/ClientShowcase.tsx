import React from "react";
import Link from "next/link";
import { CLIENTS } from "@/data/clients";
import { ArrowUpRight } from "lucide-react";

export const ClientShowcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-brand-gray-200" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Trusted By Market Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
            Brands We Have <span className="text-brand-red">Empowered</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-gray-600">
            From premier healthcare networks and international investment holding groups to luxury jewellery retailers and youth fashion icons.
          </p>
        </div>

        {/* Clean Editorial Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENTS.slice(0, 18).map((client) => {
            const hasCaseStudy = !!client.projectSlug;
            const content = (
              <div className="h-28 sm:h-32 flex flex-col items-center justify-center p-4 rounded-xl bg-brand-gray-50/70 border border-brand-gray-200/80 hover:border-brand-red hover:bg-white transition-all duration-300 group text-center shadow-xs">
                <span className="text-sm sm:text-base font-display font-bold text-brand-black group-hover:text-brand-red transition-colors line-clamp-1">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-brand-gray-500 mt-1 uppercase tracking-wider line-clamp-1">
                  {client.industry}
                </span>
                {hasCaseStudy && (
                  <span className="mt-2 text-[10px] font-mono text-brand-red flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Case Study <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                )}
              </div>
            );

            if (hasCaseStudy) {
              return (
                <Link key={client.name} href={`/work/${client.projectSlug}`}>
                  {content}
                </Link>
              );
            }

            return <div key={client.name}>{content}</div>;
          })}
        </div>

        {/* Client Directory Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-black hover:text-brand-red font-bold underline underline-offset-4 transition-colors"
          >
            Explore Complete Client Directory By Sector →
          </Link>
        </div>
      </div>
    </section>
  );
};

