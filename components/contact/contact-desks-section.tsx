"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { fourDesksData } from "@/lib/site-data";

export default function ContactDesksSection() {
  return (
    <section className="w-full bg-[#F5F7EE] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Grid: Left Title Block & Right Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                WHO PICKS IT UP
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                The four desks behind the form.
              </h1>
            </AnimateIn>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:pt-7">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-5xl">
                You buy from Enervaa and you are supported by Enervaa. Behind that, four companies keep their own factories, engineers and product lines &mdash; which is why the depth in each area is real rather than assembled for a brochure.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-12 lg:mt-16">
          {fourDesksData.map((desk, idx) => (
            <AnimateIn
              key={desk.id}
              variant="fade-up"
              delay={200 + idx * 80}
              className="h-full"
            >
              <div className="group flex flex-col justify-between h-full bg-white p-6 sm:p-7 min-h-[240px] sm:min-h-[270px] transition-all duration-300">
                {/* Top Section */}
                <div>
                  {/* Category Tag */}
                  <span className="text-[12px] sm:text-sm font-semibold uppercase tracking-wider text-[#78BA43] mb-2 block">
                    {desk.categoryTag}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-medium text-[#2C2E1F] mb-3 tracking-tight">
                    {desk.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-lg text-black">
                    {desk.description}
                  </p>
                </div>

                {/* Bottom Section: Action Pill Button */}
                <div className="pt-6 mt-auto">
                  <Link
                    href={desk.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-16 py-2.5 bg-[#78BA43] hover:bg-[#68A535] text-white font-bold rounded-md text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{desk.buttonLabel}</span>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
