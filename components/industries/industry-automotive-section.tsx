"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import {
  automotiveFleetDetailData,
  IndustryDetailSectionData,
} from "@/lib/site-data";

interface IndustryAutomotiveSectionProps {
  data?: IndustryDetailSectionData;
  className?: string;
}

export default function IndustryAutomotiveSection({
  data = automotiveFleetDetailData,
  className = "",
}: IndustryAutomotiveSectionProps) {
  return (
    <section
      className={`w-full bg-[#F4F6EE] py-16 sm:py-20 lg:py-24 relative overflow-hidden ${className}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Block */}
        <AnimateIn variant="fade-up">
          <div className="mb-10 lg:mb-14">
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              {data.industryTag}
            </p>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
              <div className="max-w-xl lg:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl"> 
                  {data.title}
                </h1>
              </div>
              <div className="max-w-md lg:max-w-2xl lg:pt-1">
                <p className="text-[15px] sm:text-lg text-black mb-4 max-w-5xl">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Middle 3 Cards Grid ("WE SUPPLY") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12 sm:mb-16">
          {data.supplies.map((supply, idx) => (
            <AnimateIn key={idx} variant="fade-up" delay={idx * 100}>
              <div className="bg-white p-6 sm:p-8 flex flex-col justify-start h-full border border-neutral-100/40 shadow-xs transition-shadow duration-300">
                <p className="text-sm sm:text-[14px] font-semibold tracking-wider text-[#78BA43] uppercase mb-3">
                  {supply.supplyNumber}
                </p>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#2C2E1F] mb-3">
                  {supply.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-black font-normal">
                  {supply.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.caseStudies.map((item, idx) => (
            <AnimateIn key={idx} variant="fade-up" delay={150 + idx * 100}>
              <Link
                href={item.href || "#"}
                className="group flex flex-col h-full transition-all duration-300"
              >
                {/* White Image Box */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] bg-white overflow-hidden border border-neutral-100/40 p-6 sm:p-8 flex items-center justify-center">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain object-center p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : null}
                </div>

                {/* Below-Box Caption */}
                <div className="pt-4 flex flex-col items-start">
                  <p className="text-xs sm:text-[13px] font-semibold tracking-wider text-[#4A4D3A] uppercase mb-1">
                    {item.categoryTag}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#78BA43] transition-colors group-hover:text-[#67A337]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
