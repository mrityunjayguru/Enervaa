"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { footprintData } from "@/lib/site-data";

export default function AboutFootprintSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                FOOTPRINT
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 max-w-2xl sm:max-w-4xl">
                Two hubs,<br className="hidden sm:inline" /> one supply chain.
              </h1>
            </AnimateIn>
          </div>

          {/* Right Column: Content & Footprint List */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                Manufacturing sits in Tamil Nadu; research and firmware sit in Karnataka. Close enough to run a weekly build cycle, far enough apart that production and development do not interfere with one another.
              </p>
            </AnimateIn>

            {/* List of Hub Locations */}
            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {footprintData.map((item, idx) => (
                <AnimateIn
                  key={idx}
                  variant="fade-up"
                  delay={200 + idx * 80}
                  className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-3 text-[16px] sm:text-lg font-semibold text-[#78BA43]">
                    {item.location}
                  </div>
                  <div className="sm:col-span-9 text-[15px] sm:text-lg text-black">
                    {item.description}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
