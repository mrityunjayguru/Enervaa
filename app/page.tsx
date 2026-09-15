import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import CapabilitiesSection from "@/components/home/capabilities-section";
import IndustriesSection from "@/components/home/industries-section";
import UnifiedSystemSection from "@/components/home/unified-system-section";
import LifecycleSection from "@/components/home/lifecycle-section";
import InFieldSection from "@/components/home/in-field-section";
import WhyEnervaaSection from "@/components/home/why-enervaa-section";
import CtaBannerSection from "@/components/home/cta-banner-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <UnifiedSystemSection />
        <LifecycleSection />
        <InFieldSection />
        <WhyEnervaaSection />
        <CtaBannerSection />
      </main>
    </div>
  );
}
