"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { footprintData } from "@/lib/site-data";

export default function AboutFootprintSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#78BA43] mb-4 sm:mb-5 block">
                FOOTPRINT
              </span>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                Two hubs,<br className="hidden sm:inline" /> one supply chain.
              </h2>
            </AnimateIn>
          </div>

          {/* Right Column: Content & Footprint List */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed mb-10 sm:mb-12">
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
                  <div className="sm:col-span-3 text-sm sm:text-base font-semibold text-[#78BA43]">
                    {item.location}
                  </div>
                  <div className="sm:col-span-9 text-xs sm:text-sm text-neutral-700 leading-relaxed">
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
