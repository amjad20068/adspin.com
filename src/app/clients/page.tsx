import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Building2, MapPin, CheckCircle2 } from "lucide-react";
import { CLIENTS, CLIENT_SECTORS } from "@/data/clients";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Clients | Verified Portfolio Partners | AD SPIN",
  description:
    "Explore the brands and enterprises empowered by AD SPIN across India, Qatar, the UAE, and Oman.",
};

export default function ClientsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Client Partnerships</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Trusted By <br />
            <span className="text-brand-red">Industry Leaders.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            We are proud to serve some of the most respected healthcare conglomerates, international investment holding companies, luxury retail boutiques, and technology innovators across the Middle East and India.
          </p>
        </div>
      </section>

      {/* Sector by Sector Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {CLIENT_SECTORS.filter((sec) => sec !== "All Sectors").map((sector) => {
          const sectorClients = CLIENTS.filter((c) => c.industry === sector);
          if (sectorClients.length === 0) return null;

          return (
            <div key={sector} className="pt-10 border-t border-brand-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-black">
                    {sector}
                  </h2>
                </div>
                <span className="text-xs font-mono text-brand-gray-500">
                  {sectorClients.length} Featured Partners
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectorClients.map((client) => {
                  const hasCaseStudy = !!client.projectSlug;
                  return (
                    <div
                      key={client.name}
                      className="p-6 sm:p-7 rounded-2xl bg-brand-gray-50 border border-brand-gray-200/90 hover:border-brand-red hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-brand-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-brand-red" />
                            {client.region}
                          </span>
                          <span className="text-brand-gray-400">Verified Client</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-brand-black group-hover:text-brand-red transition-colors mb-2">
                          {client.name}
                        </h3>
                        <p className="text-xs text-brand-gray-600 leading-relaxed">
                          <span className="font-semibold text-brand-black">Scope:</span> {client.scope}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-brand-gray-200 flex items-center justify-between text-xs">
                        <span className="font-mono text-brand-gray-400">AD SPIN Portfolio</span>
                        {hasCaseStudy ? (
                          <Link
                            href={`/work/${client.projectSlug}`}
                            className="font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                          >
                            <span>Read Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <span className="font-mono text-brand-gray-500">Active Retainer</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-black text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Join our roster of ambitious brand leaders.
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-400 max-w-xl mx-auto">
            Whether you require an executive corporate profile, a 360-degree healthcare campaign, or bilingual retail identity.
          </p>
          <div className="pt-2">
            <Button href="/contact" size="md" variant="secondary">
              Start Your Client Onboarding
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

