"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Instagram, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { AGENCY_CONFIG } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-brand-gray-200 pb-5">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Image
                src="/images/logos/logo.png"
                alt="AD SPIN"
                width={120}
                height={50}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full bg-brand-gray-100 hover:bg-brand-red hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="my-auto py-8">
            <ul className="space-y-4">
              {NAV_LINKS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between py-2 text-2xl sm:text-3xl font-display font-bold tracking-tight transition-all duration-200 ${
                        isActive ? "text-brand-red" : "text-brand-black hover:text-brand-red"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono text-brand-gray-400 group-hover:text-brand-red">
                          0{idx + 1}
                        </span>
                        {item.title}
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Actions & Contact Details */}
          <div className="border-t border-brand-gray-200 pt-6 space-y-4">
            {/* Direct WhatsApp Booking button */}
            <a
              href={AGENCY_CONFIG.getWhatsAppUrl("Hello Ad Spin! I would like to book a consultation for our brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              Book via WhatsApp (+91 773 625 9099)
            </a>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-brand-gray-600 gap-3 pt-2">
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${AGENCY_CONFIG.phones[0].replace(/\s+/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-red" />
                  {AGENCY_CONFIG.phones[0]}
                </a>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-red" />
                  {AGENCY_CONFIG.email}
                </a>
              </div>
              <a
                href={AGENCY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-black hover:text-brand-red font-medium transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-red" />
                Follow {AGENCY_CONFIG.instagramHandle}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

