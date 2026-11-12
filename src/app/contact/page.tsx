import React from "react";
import { Metadata } from "next";
import { Phone, Mail, Globe, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us & Project Enquiry | AD SPIN Creative Agency",
  description:
    "Let's create something great. Connect with AD SPIN for brand identity, advertising campaigns, commercial video reels, and web development. Direct WhatsApp booking available.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Initiate Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            Let&apos;s Create <br />
            <span className="text-brand-red">Something Great.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            Whether you are launching a new enterprise, repositioning an established group, or seeking high-impact creative campaigns, our team is ready.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Project Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Agency Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-black text-white space-y-8 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
                  Official Communication Channels
                </span>
                <h3 className="text-2xl font-display font-bold mt-2">
                  Direct Inquiries
                </h3>
              </div>

              {/* Verified Phone Numbers */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider block">
                  Official Direct Helplines
                </span>
                {AGENCY_CONFIG.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-sm sm:text-base font-mono text-white hover:text-brand-red transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-red shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>

              {/* Verified Email */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider block">
                  Official Agency Email
                </span>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm sm:text-base font-mono text-white hover:text-brand-red transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-red shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{AGENCY_CONFIG.email}</span>
                </a>
              </div>

              {/* Official Instagram */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider block">
                  Official Instagram
                </span>
                <a
                  href={AGENCY_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base font-mono text-white hover:text-brand-red transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-red shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>{AGENCY_CONFIG.instagramHandle} (Official)</span>
                </a>
              </div>

              {/* Official Website */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider block">
                  Web Portal
                </span>
                <a
                  href={AGENCY_CONFIG.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base font-mono text-white hover:text-brand-red transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gray-900 border border-brand-gray-800 flex items-center justify-center text-brand-red shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>{AGENCY_CONFIG.displayWebsite}</span>
                </a>
              </div>

              {/* Working Hours & Coverage */}
              <div className="pt-4 border-t border-brand-gray-800 space-y-2 text-xs font-mono text-brand-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  <span>Monday — Saturday: 9:00 AM – 7:00 PM IST / GST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>Serving Clients Worldwide (India, Qatar, UAE, Oman)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Instant WhatsApp Booking Box */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

