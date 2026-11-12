"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";

export const ServicesOverview: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-brand-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>End-to-End Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
              Our Creative <span className="text-brand-red">Disciplines</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed">
              We merge strategic rigour with cutting-edge visual craft. Every service is delivered with obsessive attention to craft, typography, and commercial results.
            </p>
            <div className="mt-4">
              <Button href="/services" size="sm" variant="outline">
                <span>View Full Services Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Editorial Interactive Accordion / List Layout */}
        <div className="divide-y divide-brand-gray-200 border-b border-brand-gray-200">
          {SERVICES.map((service) => {
            const isOpen = activeService === service.id;
            return (
              <div
                key={service.id}
                className="group py-6 sm:py-8 transition-colors duration-200 hover:bg-brand-gray-50/50"
              >
                <div
                  onClick={() => setActiveService(isOpen ? "" : service.id)}
                  className="cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-8 flex-1">
                    <span className="text-sm sm:text-base font-mono font-bold text-brand-gray-400 group-hover:text-brand-red transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-brand-black group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden md:inline-block text-xs font-mono text-brand-gray-500 uppercase tracking-wider">
                      {service.tagline}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-brand-gray-300 flex items-center justify-center text-brand-black group-hover:border-brand-red group-hover:text-brand-red transition-all">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pl-0 sm:pl-16">
                        <div className="lg:col-span-6 space-y-4">
                          <p className="text-base text-brand-gray-700 leading-relaxed">
                            {service.fullDesc}
                          </p>
                          <div className="pt-2">
                            <Link
                              href={`/services#${service.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-red font-bold hover:underline underline-offset-4"
                            >
                              Explore {service.title} Details <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>

                        {/* Capabilities pills */}
                        <div className="lg:col-span-6 bg-brand-gray-50 p-6 rounded-2xl border border-brand-gray-200">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gray-500 mb-3">
                            Key Deliverables & Scope
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="text-xs bg-white text-brand-black px-3 py-1.5 rounded-full border border-brand-gray-200 font-medium"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

