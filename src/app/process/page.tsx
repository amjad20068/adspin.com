import React from "react";
import { Metadata } from "next";
import { Search, Compass, PenTool, Send, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AGENCY_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Creative Process | How We Build Brands | AD SPIN",
  description:
    "Explore AD SPIN's 5-stage creative process: Discover, Strategize, Create, Deliver, and Grow. A meticulous framework delivering world-class brand experiences.",
};

export default function ProcessPage() {
  const detailedSteps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Understand the business, audience, and objectives",
      icon: Search,
      overview:
        "Every transformative creative project begins with rigorous enquiry. We never rely on generic assumptions or surface-level briefs. We dive deep into the client's commercial operations, audience behaviors, and competitive differentiation.",
      activities: [
        "Brand Discovery Questionnaire & Leadership Interviews",
        "Target Audience Demographics & Persona Analysis",
        "Competitive Landscape & Market Gap Evaluation",
        "Core Value Proposition & Unique Selling Angle Definition",
      ],
      duration: "Week 01",
      deliverable: "Strategic Discovery Synthesis Deck",
    },
    {
      num: "02",
      title: "Strategize",
      subtitle: "Develop the creative direction and communication strategy",
      icon: Compass,
      overview:
        "Strategy gives creative work its purpose and teeth. In this phase, we establish clear visual territories, determine typographic moodboards, formulate core hooks, and map out the exact consumer decision funnel.",
      activities: [
        "Creative Direction & Visual Moodboard Crafting",
        "Message Architecture & Campaign Hooks Formulation",
        "Channel Strategy (Outdoor, Print, Digital, Video)",
        "Bilingual Language Hierarchy (Arabic & English Alignment)",
      ],
      duration: "Week 02",
      deliverable: "Creative Direction & Brand Territory Guide",
    },
    {
      num: "03",
      title: "Create",
      subtitle: "Transform ideas into meaningful visual experiences",
      icon: PenTool,
      overview:
        "This is where craft takes center stage. Our design directors, typographers, and motion filmmakers create the actual assets—from hand-crafted logomarks and tactile brochure layouts to cinematic video cuts.",
      activities: [
        "Iterative Logomark & Monogram Sketching & Vectorization",
        "Editorial Grid Construction & Typographic Pairing",
        "Commercial Video Storyboarding, Shooting & Grading",
        "Packaging Prototype Mockups & Environmental Scale Tests",
      ],
      duration: "Weeks 03 - 05",
      deliverable: "Master Creative Concepts & Visual Prototypes",
    },
    {
      num: "04",
      title: "Deliver",
      subtitle: "Present refined creative work and execute the project",
      icon: Send,
      overview:
        "Perfection lives in the details. We prepare press-ready CMYK files with custom spot UV/foiling specifications, deliver responsive Next.js web applications, and package comprehensive master brand books.",
      activities: [
        "Full Brand Identity Guidelines Manual Authoring",
        "Pre-Press CMYK Proofing & Color Calibration",
        "Responsive Digital & Mobile Web QA Testing",
        "Asset Library Archival & Client Handover Training",
      ],
      duration: "Week 06",
      deliverable: "Complete Production-Ready Assets & Guidelines",
    },
    {
      num: "05",
      title: "Grow",
      subtitle: "Support consistent brand communication and long-term growth",
      icon: TrendingUp,
      overview:
        "Launch is not the end—it is Day One. As long-term digital partners, we manage ongoing social campaigns, evaluate market feedback, test conversion funnels, and ensure the brand scales seamlessly across new markets.",
      activities: [
        "Monthly Creative Social Media Calendars & Design",
        "Meta Ads & Performance Marketing Funnel Optimization",
        "Seasonal & Festive Campaign Activations (Eid, National Days)",
        "Quarterly Brand Health & Performance Reviews",
      ],
      duration: "Ongoing Partnership",
      deliverable: "Consistent Brand Momentum & Sustainable ROI",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Creative Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-brand-black uppercase leading-tight">
            How Great Brands <br />
            <span className="text-brand-red">Are Built.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gray-700 leading-relaxed font-normal">
            We operate through a disciplined 5-stage creative engineering framework designed to eliminate guesswork, respect timelines, and produce work of exceptional distinction.
          </p>
        </div>
      </section>

      {/* The 5 Stages Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {detailedSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="pt-12 border-t border-brand-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Left Column: Number, Title, Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-mono font-extrabold text-brand-red">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand-gray-50 flex items-center justify-center text-brand-black border border-brand-gray-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gray-500">
                    Phase {idx + 1}
                  </span>
                </div>

                <h2 className="text-3xl font-display font-bold text-brand-black">
                  {step.title}
                </h2>

                <p className="text-sm font-semibold text-brand-red font-mono">
                  {step.subtitle}
                </p>

                <p className="text-base text-brand-gray-700 leading-relaxed pt-2">
                  {step.overview}
                </p>
              </div>

              {/* Right Column: Key Activities, Duration & Deliverable */}
              <div className="lg:col-span-7 bg-brand-gray-50 p-8 rounded-3xl border border-brand-gray-200 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-brand-black font-bold mb-3">
                    Core Activities & Milestones
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.activities.map((act) => (
                      <div key={act} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-gray-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-3">
                  <div>
                    <span className="text-brand-gray-500 uppercase tracking-wider block">Timeline:</span>
                    <span className="font-bold text-brand-black">{step.duration}</span>
                  </div>
                  <div>
                    <span className="text-brand-gray-500 uppercase tracking-wider block">Key Output:</span>
                    <span className="font-bold text-brand-red">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Ready to initiate Stage 01 for your brand?
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-400">
              Schedule an introductory discovery session with our creative directors.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button href="/contact" size="md" variant="secondary">
              Book Discovery Session
            </Button>
            <Button
              href={AGENCY_CONFIG.getWhatsAppUrl("Hello Ad Spin! I'd like to schedule a Stage 01 Discovery call for our project.")}
              isExternal
              size="md"
              variant="whatsapp"
            >
              WhatsApp Discovery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

