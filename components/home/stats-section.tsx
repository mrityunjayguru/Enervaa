"use client";

import React from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";
import { statsData } from "@/lib/site-data";

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-24 overflow-hidden">
      <div className=" px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Wind Turbine & Solar Graphic */}
          <AnimateIn
            variant="fade-right"
            className="lg:col-span-4 xl:col-span-4 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[240px] xl:max-w-[280px]">
              <Image
                src="/images/solar-wind.png"
                alt="Wind Turbine and Solar Panel"
                width={300}
                height={300}
                priority
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </AnimateIn>

          {/* Right Side: 3x2 Grid of Key Metrics */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-y-10 sm:gap-y-12 lg:gap-y-14 gap-x-6 sm:gap-x-8 lg:gap-x-10 xl:gap-x-12">
            {statsData.map((stat, idx) => (
              <AnimateIn
                key={idx}
                variant="fade-up"
                delay={idx * 80}
                className="flex flex-col justify-center pl-4 sm:pl-5 border-l-2 border-[#EF403F] py-1"
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
      </div>
    </section>
  );
}
