"use client";

import React from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";
import { aboutStatsData } from "@/lib/site-data";

export default function AboutOverviewSection() {
  return (
    <section className="w-full bg-[#F7F8F1] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            
            {/* Category / Eyebrow */}
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                ABOUT ENERVAA
              </p>
            </AnimateIn>

            {/* Main Title */}
            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                One company, built from four specialist teams.
              </h1>
            </AnimateIn>

            {/* Description Paragraph */}
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                Enervaa was assembled rather than founded. Four businesses that were already good at one part of the energy problem — solar, battery manufacturing, battery intelligence and charging — now sell and deliver as one.
              </p>
            </AnimateIn>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-8 sm:gap-y-10 mt-4">
              {aboutStatsData.map((stat, idx) => (
                <AnimateIn
                  key={idx}
                  variant="fade-up"
                  delay={200 + idx * 80}
                  className="border-l-2 border-[#EF403F] pl-4 sm:pl-5 flex flex-col justify-start"
                >
                  <div className="text-[28px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-[#78BA43] tracking-tight leading-none mb-3">
                    {stat.value}
                  </div>
                  <p className="text-[11px] sm:text-[13px] lg:text-sm font-semibold text-black uppercase tracking-widest leading-snug whitespace-pre-line">
                    {stat.label}
                  </p>
                </AnimateIn>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Image (Enlarged) */}
          <div className="lg:col-span-5 xl:col-span-6 w-full flex justify-center lg:justify-end">
            <AnimateIn variant="fade-left" delay={200} className="w-full max-w-[640px]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[1.12/1] lg:aspect-[1.08/1] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-sm">
                <Image
                  src="/images/about/banner-image.png"
                  alt="Enervaa home energy system and happy family"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center rounded-2xl sm:rounded-3xl lg:rounded-[32px]"
                />
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
