import { HeroSection } from "@/components/home/HeroSection";
import { StatsTree } from "@/components/home/StatsTree";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { SelectedWork } from "@/components/home/SelectedWork";
import { AISection } from "@/components/home/AISection";
import { TrustNetwork } from "@/components/home/TrustNetwork";
import { FaqSection } from "@/components/home/FaqSection";
import { BannerCTA } from "@/components/home/BannerCTA";

export default function HomePage() {
  return (
    <>
      {/* 01. Framed Hero Card with embedded header and preview card */}
      <HeroSection />

      {/* 02. Connected Stats Tree branch diagram */}
      <StatsTree />

      {/* 03. Services Deck & Carousel */}
      <ServicesCarousel />

      {/* 04. Selected Work Case Studies */}
      <SelectedWork />

      {/* 05. AI Architecture & Pipeline */}
      <AISection />

      {/* 06. Trust & Ecosystem Network */}
      <TrustNetwork />

      {/* 07. Questions / FAQ Accordion */}
      <FaqSection />

      {/* 08. Bottom Framed CTA Banner */}
      <BannerCTA />
    </>
  );
}
