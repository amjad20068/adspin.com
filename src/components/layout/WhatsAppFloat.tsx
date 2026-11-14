"use client";

import React from "react";
import { AGENCY_CONFIG } from "@/lib/utils";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const WhatsAppFloat: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      {/* Sleek Floating Action Button with Official WhatsApp Icon */}
      <motion.a
        href={AGENCY_CONFIG.getWhatsAppUrl(
          "Hello Ad Spin! I would like to book a creative branding / marketing consultation for our business."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat & Book on WhatsApp with Ad Spin"
        title="Chat & Book on WhatsApp (+91 773 625 9099)"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center justify-center gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg transition-all duration-300"
      >
        <WhatsAppIcon size={22} className="text-white shrink-0" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
