"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { whyReasonsData } from "@/lib/site-data";

export default function WhyEnervaaSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Row */}
        <AnimateIn variant="fade-up" className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#78BA43] leading-tight">
            Why Enervaa
          </h2>
          <p className="text-base sm:text-lg font-normal text-neutral-800">
            Five reasons customers consolidate with us.
          </p>
        </AnimateIn>

        {/* 5-Column Grid with Left Border Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {whyReasonsData.map((item, idx) => (
            <AnimateIn
              key={item.id}
              variant="fade-up"
              delay={idx * 90}
              className="border-l border-[#78BA43] pl-5 sm:pl-6 flex flex-col justify-start h-full"
            >
              {/* Step Number in Red */}
              <span className="text-xs sm:text-sm font-semibold text-[#EF403F] mb-6 block">
                {item.id}
              </span>

              {/* Title in Green */}
              <h3 className="text-lg sm:text-2xl font-normal text-[#78BA43] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description in Dark Text */}
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
