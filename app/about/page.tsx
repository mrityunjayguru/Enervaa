import React from "react";
import AboutOverviewSection from "@/components/about/about-overview-section";
import AboutFootprintSection from "@/components/about/about-footprint-section";
import AboutLifecycleSection from "@/components/about/about-lifecycle-section";
import AboutCommercialModelsSection from "@/components/about/about-commercial-models-section";
import AboutLeadershipSection from "@/components/about/about-leadership-section";
import AboutSpecialistTeamsSection from "@/components/about/about-specialist-teams-section";
import CtaBannerSection from "@/components/about/cta-banner-section";

export const metadata = {
  title: "About Us | Enervaa",
  description: "One company, built from four specialist teams. Learn about Enervaa's energy solutions, engineering, and manufacturing capabilities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <AboutOverviewSection />
      <AboutFootprintSection />
      <AboutLeadershipSection />
      <AboutSpecialistTeamsSection />
      <AboutLifecycleSection />
      <AboutCommercialModelsSection />
      <CtaBannerSection />
    </main>
  );
}