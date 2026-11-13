import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AgencyIntro } from "@/components/sections/AgencyIntro";
import { IdentitySystemShowcase } from "@/components/sections/IdentitySystemShowcase";
import { PosterShowcase } from "@/components/sections/PosterShowcase";
import { VideoProductionShowcase } from "@/components/sections/VideoProductionShowcase";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyAdSpin } from "@/components/sections/WhyAdSpin";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { ClientShowcase } from "@/components/sections/ClientShowcase";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AgencyIntro />
      <IdentitySystemShowcase />
      <PosterShowcase />
      <VideoProductionShowcase />
      <ServicesOverview />
      <FeaturedWork />
      <WhyAdSpin />
      <CreativeProcess />
      <ClientShowcase />
      <InstagramSection />
      <CtaBanner />
    </>
  );
}
