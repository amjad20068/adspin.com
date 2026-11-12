import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone, Mail } from "lucide-react";
import { SpiralMark } from "@/components/ui/SpiralMark";
import { Button } from "@/components/ui/Button";
import { AGENCY_CONFIG } from "@/lib/utils";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-black text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          {/* Signature Red Spiral Background Graphics */}
          <div className="absolute -right-16 -top-16 opacity-20 pointer-events-none select-none">
            <SpiralMark size={360} speed={40} interactive={false} />
          </div>
          <div className="absolute -left-12 -bottom-12 opacity-10 pointer-events-none select-none">
            <SpiralMark size={240} speed={30} interactive={false} />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Start Your Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight uppercase leading-none">
              Have a Brand <br />
              <span className="text-brand-red">Worth Building?</span>
            </h2>

            <p className="text-base sm:text-xl text-brand-gray-300 font-normal leading-relaxed max-w-xl">
              Let&apos;s turn your next big idea into something extraordinary. Discuss your scope directly with our creative team.
            </p>

            {/* CTAs: WhatsApp Booking + Project Enquiry */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="secondary">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button
                href={AGENCY_CONFIG.getWhatsAppUrl(
                  "Hello Ad Spin! I'd like to book an introductory creative consultation."
                )}
                isExternal
                size="lg"
                variant="whatsapp"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 fill-white" />
                <span>Book on WhatsApp</span>
              </Button>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-8 border-t border-brand-gray-800 flex flex-wrap items-center gap-6 text-xs font-mono text-brand-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>+91 773 625 9099 / +91 819 725 5805</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <span>adspin.branding@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

