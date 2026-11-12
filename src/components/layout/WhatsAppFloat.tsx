"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden md:flex items-center gap-2 bg-brand-black text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-brand-gray-800"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-medium">Book a Consultation on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-brand-gray-400 hover:text-white ml-1 p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={AGENCY_CONFIG.getWhatsAppUrl(
          "Hello Ad Spin! I would like to book a creative branding / marketing consultation for our business."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp with Ad Spin"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#1EBE5D] transition-colors"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-red border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  );
};

