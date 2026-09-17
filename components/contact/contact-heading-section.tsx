"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";

export default function ContactHeadingSection() {
  return (
    <section className="w-full bg-[#F5F7EE] pt-28 sm:pt-36 lg:pt-36 pb-8 sm:pb-8 lg:pb-8 ">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-end gap-6 lg:gap-12 xl:gap-16">
          
          {/* Left Side: Eyebrow & Main Title */}
          <div className="flex flex-col">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                CONTACT
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
                Tell us what you are building.
              </h1>
            </AnimateIn>
          </div>

          {/* Right Side: Description Paragraph */}
          <div className="max-w-3xl shrink-0 lg:pb-0.5">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[14px] sm:text-base text-black">
                A rooftop, a fleet, a factory load, a grid-connected asset. Send us the shape of the problem and we will route it to the right part of the group &mdash; and tell you honestly which parts you don&apos;t need.
              </p>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
