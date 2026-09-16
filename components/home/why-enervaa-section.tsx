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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#78BA43] mb-4 max-w-4xl">
            Why Enervaa 
          </h2>
          <p className="text-[15px] sm:text-lg text-black max-w-4xl">
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
              className="border-l border-[#78BA43] p-5 sm:p-6 flex flex-col justify-start h-full"
            >
              {/* Step Number in Red */}
              <span className="text-xs sm:text-sm font-semibold text-[#EF403F] mb-6 block">
                {item.id}
              </span>

              {/* Title in Green */}
             <h3 className="text-2xl sm:text-2xl font-medium text-[#78BA43] mb-1 group-hover:translate-x-0.5 transition-transform">
                {item.title}
              </h3>

              {/* Description in Dark Text */}
              <p className="text-sm sm:text-[14px] font-normal text-black">
                {item.description}
              </p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
