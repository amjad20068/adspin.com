"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const SERVICE_OPTIONS = [
  "Branding & Logo Design",
  "Graphic Design",
  "Social Media Marketing",
  "Video Production",
  "Print Design",
  "Advertising",
  "Website Development",
  "Digital Marketing",
  "Other"
];

const BUDGET_OPTIONS = [
  "Select Budget (Optional)",
  "< ₹50,000 / $600",
  "₹50,000 - ₹1,50,000 / $600 - $1,800",
  "₹1,50,000 - ₹5,00,000 / $1,800 - $6,000",
  "₹5,00,000+ / $6,000+",
  "Retainer / Long-term Partnership"
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceRequired: SERVICE_OPTIONS[0],
    budget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please describe your project or requirements";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Format prefilled WhatsApp message as seamless reliable direct delivery
    const formattedMessage = `*New Project Enquiry — AD SPIN Website*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Brand / Company:* ${formData.companyName || "N/A"}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Budget:* ${formData.budget || "Not Specified"}\n` +
      `*Details:* ${formData.projectDetails}`;

    const waUrl = AGENCY_CONFIG.getWhatsAppUrl(formattedMessage);

    // Open WhatsApp in a new tab
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, "_blank");
    }, 400);
  };

  return (
    <div className="space-y-8">
      {/* 1. Fast Direct WhatsApp Booking Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-brand-gray-50 border border-brand-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Direct WhatsApp Booking</span>
            </div>
            <h3 className="text-lg font-bold text-brand-black">
              Need immediate discussion with our creative team?
            </h3>
            <p className="text-xs text-brand-gray-600">
              Skip the form and chat directly on WhatsApp (+91 773 625 9099).
            </p>
          </div>
          <a
            href={AGENCY_CONFIG.getWhatsAppUrl(
              "Hello Ad Spin! I would like to book a quick project consultation right now."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wide transition-all group"
          >
            <WhatsAppIcon size={18} className="text-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Structured Detailed Project Enquiry Form */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-brand-gray-200/90 shadow-sm">
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-black">
            Project Enquiry Form
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray-500 mt-1">
            Fill in the details below. Our strategy team will review your scope and follow up promptly.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <h4 className="text-xl font-bold text-brand-black">Thank you, {formData.fullName}!</h4>
            <p className="text-sm text-brand-gray-700 max-w-md mx-auto">
              Your project details have been prepared and forwarded to our official WhatsApp helpline (+91 773 625 9099). You may also email us directly at{" "}
              <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-brand-red font-semibold underline">
                {AGENCY_CONFIG.email}
              </a>.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  companyName: "",
                  email: "",
                  phone: "",
                  serviceRequired: SERVICE_OPTIONS[0],
                  budget: "",
                  projectDetails: "",
                });
              }}
              size="sm"
              variant="outline"
            >
              Submit Another Enquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-gray-50 border text-sm text-brand-black focus:outline-none focus:bg-white transition-colors ${
                    errors.fullName ? "border-brand-red focus:border-brand-red" : "border-brand-gray-200 focus:border-brand-black"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-brand-red mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Company / Brand Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Healthcare"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-gray-50 border border-brand-gray-200 text-sm text-brand-black focus:outline-none focus:bg-white focus:border-brand-black transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Email Address <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-gray-50 border text-sm text-brand-black focus:outline-none focus:bg-white transition-colors ${
                    errors.email ? "border-brand-red focus:border-brand-red" : "border-brand-gray-200 focus:border-brand-black"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-brand-red mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Phone / WhatsApp <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-gray-50 border text-sm text-brand-black focus:outline-none focus:bg-white transition-colors ${
                    errors.phone ? "border-brand-red focus:border-brand-red" : "border-brand-gray-200 focus:border-brand-black"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-brand-red mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Service Required <span className="text-brand-red">*</span>
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-gray-50 border border-brand-gray-200 text-sm text-brand-black focus:outline-none focus:bg-white focus:border-brand-black transition-colors"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Budget */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                  Project Budget (Optional)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-gray-50 border border-brand-gray-200 text-sm text-brand-black focus:outline-none focus:bg-white focus:border-brand-black transition-colors"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-gray-700 font-semibold mb-2">
                Project Details & Timeline <span className="text-brand-red">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your brand, current challenges, key deliverables, and target launch timeframe..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-brand-gray-50 border text-sm text-brand-black focus:outline-none focus:bg-white transition-colors ${
                  errors.projectDetails ? "border-brand-red focus:border-brand-red" : "border-brand-gray-200 focus:border-brand-black"
                }`}
              />
              {errors.projectDetails && (
                <p className="text-xs text-brand-red mt-1 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-black text-white hover:bg-brand-red font-medium text-sm tracking-wide transition-all shadow-md group disabled:opacity-50"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>{submitting ? "Preparing Enquiry..." : "Send Project Enquiry"}</span>
              </button>
              <p className="text-[11px] text-brand-gray-500 font-mono mt-3">
                🔒 Your privacy is fully protected. No spam. You will also have the option to continue directly via WhatsApp.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

