import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | AD SPIN Creative Agency",
  description:
    "Official privacy policy, client confidentiality standards, and data protection practices for AD SPIN Creative Agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-brand-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span>Legal & Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-brand-black uppercase">
            Privacy Policy & Client Data Protection
          </h1>
          <p className="text-sm font-mono text-brand-gray-500">
            Effective Date: January 01, {AGENCY_CONFIG.year} • Last Updated: Current Year
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-brand-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-brand-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              1. Commitment to Client Confidentiality
            </h2>
            <p>
              At AD SPIN (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;agency&rdquo;), operating via {AGENCY_CONFIG.displayWebsite}, client trust is the bedrock of our creative practice. We frequently handle pre-launch branding assets, unreleased trademarks, proprietary campaign budgets, and executive corporate roadmaps. We treat all client business information with strict international confidentiality standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-brand-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              2. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry or interact with our agency channels, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-brand-gray-600">
              <li>Contact details: Name, corporate email address, telephone/WhatsApp number.</li>
              <li>Project scope data: Company name, requested creative service, approximate timeline, and budgetary parameters.</li>
              <li>Technical analytics: Anonymized website usage statistics, browser type, and interaction metrics to optimize performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-brand-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              3. Purpose of Processing
            </h2>
            <p>
              We process your submitted information exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-brand-gray-600">
              <li>Preparing customized creative proposals and scoping service agreements.</li>
              <li>Direct client correspondence via telephone, email, or official WhatsApp channels.</li>
              <li>Project delivery, milestone review, invoicing, and long-term retainer support.</li>
            </ul>
            <p className="font-semibold text-brand-black pt-1">
              We never sell, rent, or trade client details or enquiry information to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-brand-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              4. Non-Disclosure & Intellectual Property
            </h2>
            <p>
              All creative concepts, logomarks, typography designs, and master source files created for clients become the exclusive property of the respective client upon complete project settlement, as stipulated in individual service contracts. AD SPIN reserves the right to showcase authorized, publicly launched work in its official portfolio unless bound by an express NDA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-brand-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              For any questions regarding our privacy practices, NDA requests, or data updates, please contact our administrative team:
            </p>
            <div className="p-6 rounded-2xl bg-brand-gray-50 border border-brand-gray-200 text-xs font-mono space-y-1.5 text-brand-black">
              <p>Agency: AD SPIN Creative Agency</p>
              <p>Email: {AGENCY_CONFIG.email}</p>
              <p>Phones: {AGENCY_CONFIG.phones.join(" / ")}</p>
              <p>Official Website: {AGENCY_CONFIG.displayWebsite}</p>
              <p>Instagram: {AGENCY_CONFIG.instagramHandle}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

