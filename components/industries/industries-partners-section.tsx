"use client";

import React from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";
import {
  trustedPartnersData,
  TrustedPartnersData,
} from "@/lib/site-data";

interface IndustriesPartnersSectionProps {
  data?: TrustedPartnersData;
  className?: string;
}

export default function IndustriesPartnersSection({
  data = trustedPartnersData,
  className = "",
}: IndustriesPartnersSectionProps) {
  // Duplicate logos array for seamless 360-degree marquee looping
  const marqueeLogos = [...data.logos, ...data.logos];

  return (
    <section
      className={`w-full bg-[#F4F6EE] py-16 sm:py-20 lg:py-24 relative overflow-hidden ${className}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-10 lg:mb-14">
        {/* Top Header Block */}
        <AnimateIn variant="fade-up">
          <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
          {data.tag}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
            <div className="max-w-xl lg:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                {data.title}
              </h2>
            </div>
            <div className="max-w-md lg:max-w-2xl lg:pt-1">
               <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                {data.description}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Infinite Marquee Logo Carousel */}
      <AnimateIn variant="fade-up" delay={150}>
        <div className="relative w-full overflow-hidden py-2">
          {/* Soft Gradient Mask Overlays on Left & Right Edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4F6EE] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F4F6EE] to-transparent z-10" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee space-x-4 sm:space-x-6">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex items-center justify-center bg-white/80 hover:bg-white border border-neutral-200/50  px-6 py-4 rounded-none w-44 sm:w-56 h-24 sm:h-28 shrink-0 transition-all duration-300 shadow-2xs group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.logoSrc}
                    alt={logo.logoAlt}
                    width={160}
                    height={60}
                    className="object-contain max-h-12 sm:max-h-14 w-auto max-w-[85%] grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
