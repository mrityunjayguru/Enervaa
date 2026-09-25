"use client";

import AnimateIn from "@/components/ui/animate-in";

export default function IndustriesHeroSection() {
  return (
    <section className="w-full bg-white pt-26 sm:pt-34 lg:pt-34 pb-14 sm:pb-18 lg:pb-20 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 w-full max-w-xl lg:max-w-4xl">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                INDUSTRIES
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-3xl">
                Where system already runs.
              </h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-8 max-w-4xl">
                Three-wheeler taxis, cargo fleets, electric tractors, high-speed rail, commercial storage and megawatt solar. Not a roadmap — units in the field. Below: which of our four capabilities each industry actually buys.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
