import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { CuratedWorks } from "@/components/sections/CuratedWorks";
import { PortfolioPdfShowcase } from "@/components/sections/PortfolioPdfShowcase";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ClientShowcase } from "@/components/sections/ClientShowcase";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AgencyIntro />
      <CuratedWorks />
      <PortfolioPdfShowcase />
      <ServicesOverview />
      <ClientShowcase />
      <InstagramSection />
      <CtaBanner />
    </>
  );
}
