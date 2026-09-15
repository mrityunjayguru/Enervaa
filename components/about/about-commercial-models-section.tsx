"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { commercialModelsData } from "@/lib/site-data";

export default function AboutCommercialModelsSection() {
  return (
    <section className="w-full bg-[#F7F8F1] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#78BA43] mb-4 sm:mb-5 block">
                COMMERCIAL MODELS
              </span>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight   text-neutral-900 leading-tight mb-8">
                Own it, or buy<br className="hidden sm:inline" /> the electron.
              </h2>
            </AnimateIn>
          </div>

          {/* Right Column: 2 Model Cards */}
          <div className="lg:col-span-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {commercialModelsData.map((item, idx) => (
                <AnimateIn
                  key={item.id}
                  variant="fade-up"
                  delay={150 + idx * 100}
                  className="h-full"
                >
                  <div className="group flex flex-col justify-between h-full bg-white p-7 sm:p-8 lg:p-9 rounded-none  hover:-translate-y-1.5 transition-all duration-300">
                    <div>
                      {/* Model Tag */}
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#78BA43] mb-4 sm:mb-5 block">
                        {item.modelTag}
                      </span>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 mb-3 sm:mb-4 tracking-tight group-hover:text-[#78BA43] transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
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
