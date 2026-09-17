"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { aboutLifecycleStepsData } from "@/lib/site-data";

export default function AboutLifecycleSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top Header Row with Floating Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                FULL LIFECYCLE
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                Four stages, one contract.
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                The value is not that we can supply five things. It is that the interfaces between those five things stop being your problem.
              </p>
            </AnimateIn>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-start">
            <AnimateIn variant="fade-left" delay={200} className="w-full max-w-[280px]">
              <div className="bg-[#F5F8EE] rounded-lg sm:rounded-2xl p-4 sm:p-4 flex items-center gap-4 sm:gap-2 drop-shadow-md">
                <span className="text-5xl sm:text-7xl font-black text-[#78BA43] leading-none shrink-0">
                  1
                </span>
                <div className="border-r-2 border-[#EF403F] h-11 my-auto shrink-0" />
                <div className="text-[16px] sm:text-sm font-bold text-[#78BA43] uppercase tracking-wider leading-tight flex flex-col gap-0.5">
                  <span>PROCUREMENT</span>
                  <span>WARRANTY</span>
                  <span>NUMBER TO CALL</span>
                </div>
              </div>
            </AnimateIn>
          </div>

        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {aboutLifecycleStepsData.map((step, idx) => (
            <AnimateIn
              key={idx}
              variant="fade-up"
              delay={200 + idx * 80}
              className="group flex flex-col justify-start"
            >
              {/* Step Tag */}
              <div className="text-xs sm:text-sm font-semibold text-[#78BA43] mb-3 flex items-center gap-1.5">
                <span>{step.stepNumber}</span>
                <span className="text-[#EF403F] group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </div>

              {/* Title */}
             <h3 className="text-2xl sm:text-2xl font-medium text-black mb-2 group-hover:translate-x-0.5 transition-transform">
                {step.title}
              </h3>

              {/* Top Border Line & Description */}
              <div className="border-t border-b border-neutral-200/75 py-4 sm:py-5">
                <p className="text-sm sm:text-[14px] font-normal text-black">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
