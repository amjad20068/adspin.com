import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { CuratedWorks } from "@/components/sections/CuratedWorks";
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
      <ServicesOverview />
      <ClientShowcase />
      <InstagramSection />
      <CtaBanner />
    </>
  );
}
