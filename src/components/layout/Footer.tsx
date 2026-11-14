import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Phone, Mail, Globe, FileDown } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import { AGENCY_CONFIG } from "@/lib/utils";
import { SpiralMark } from "@/components/ui/SpiralMark";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-12 border-t border-brand-gray-900 overflow-hidden relative">
      {/* Subtle background red spiral watermark */}
      <div className="absolute -bottom-24 -right-24 opacity-5 pointer-events-none select-none">
        <SpiralMark size={420} animate={false} interactive={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Big Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-brand-gray-800">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-red font-mono font-semibold">
              Ad Spin — Creative Agency
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Let&apos;s build brands that <span className="text-brand-red italic font-normal">refuse</span> to be ignored.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-4">
            <a
              href={AGENCY_CONFIG.getWhatsAppUrl("Hello Ad Spin team! We would like to initiate a new project with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm transition-all shadow-md group"
            >
              <WhatsAppIcon size={18} className="text-white" />
              <span>Instant WhatsApp Booking</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/Adspin_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-gray-400 hover:text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-brand-red" />
              Download Official 72-Page Portfolio PDF (5.4 MB)
            </a>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-brand-gray-800">
          {/* Col 1: Agency Brand & Intro */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/logos/logo-white.png"
                  alt="AD SPIN"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-brand-gray-400 leading-relaxed max-w-sm">
              Ad Spin is a creative branding, advertising, and digital experience agency. We combine strategic thinking, Swiss typographic precision, and high-conversion motion to build brands that connect and scale.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-gray-300 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all"
                aria-label="Instagram @ad_spin"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-gray-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={AGENCY_CONFIG.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-gray-300 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-widest text-brand-gray-400 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-300 hover:text-brand-red transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-brand-gray-400 hover:text-white text-xs transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-widest text-brand-gray-400 font-semibold">
              Core Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-brand-gray-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="hover:text-brand-red transition-colors inline-block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-widest text-brand-gray-400 font-semibold">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-brand-gray-300">
              <div>
                <span className="block text-xs text-brand-gray-500 font-mono">Phones</span>
                <div className="space-y-1 mt-0.5">
                  {AGENCY_CONFIG.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="block text-brand-gray-200 hover:text-brand-red transition-colors font-mono text-xs"
                    >
                      <Phone className="inline w-3 h-3 text-brand-red mr-1.5" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs text-brand-gray-500 font-mono">Email</span>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="text-brand-gray-200 hover:text-brand-red transition-colors font-mono text-xs block mt-0.5"
                >
                  <Mail className="inline w-3 h-3 text-brand-red mr-1.5" />
                  {AGENCY_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="block text-xs text-brand-gray-500 font-mono">Official Website</span>
                <a
                  href={AGENCY_CONFIG.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-200 hover:text-brand-red transition-colors font-mono text-xs block mt-0.5"
                >
                  <Globe className="inline w-3 h-3 text-brand-red mr-1.5" />
                  {AGENCY_CONFIG.displayWebsite}
                </a>
              </div>

              <div>
                <span className="block text-xs text-brand-gray-500 font-mono">Official Instagram</span>
                <a
                  href={AGENCY_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-200 hover:text-brand-red transition-colors font-mono text-xs block mt-0.5"
                >
                  <Instagram className="inline w-3 h-3 text-brand-red mr-1.5" />
                  {AGENCY_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-gray-500 gap-4">
          <p>© {AGENCY_CONFIG.year} {AGENCY_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              Kerala • Dubai • Doha • Muscat
            </span>
            <Link href="/privacy" className="hover:text-brand-gray-300 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

