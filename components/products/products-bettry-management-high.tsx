"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import ProductCard from "@/components/ui/product-card";
import { energyStorageSystemsData, highVoltageManagementData } from "@/lib/site-data";

export default function ProductsBettryManagementHigh() {
  return (
    <section className="w-full bg-[#F5F7EE] py-12 sm:py-16 lg:py-20 relative">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top Border Line */}
        <div className="w-full h-px bg-black/10 mb-12 sm:mb-16" />

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
          {/* Left Column: Eyebrow Tag & Main Title */}
          <div className="max-w-2xl">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                5 PRODUCTS &middot; BUILT TO APPLICATION
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
                Battery management — EV, high voltage.
              </h1>
            </AnimateIn>
          </div>

          {/* Right Column: Description Subtitle */}
          <div className="max-w-xl lg:pt-6">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-8 max-w-4xl">
                Master–slave stacks and a monolithic single-board option, with the disconnect unit that goes with them.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 sm:mt-16">
          {highVoltageManagementData.map((product, idx) => (
            <AnimateIn
              key={product.id}
              variant="fade-up"
              delay={150 + idx * 80}
              className="h-full"
            >
              <ProductCard {...product} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
