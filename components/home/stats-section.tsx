"use client";

import React from "react";
import Image from "next/image";

export interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    value: "20,000+",
    label: "BATTERY PACKS\nDELIVERED",
  },
  {
    value: "150+",
    label: "ENGINEERING &\nMANUFACTURING",
  },
  {
    value: "15+",
    label: "YEARS SOLAR EPC\nEXPERIENCE",
  },
  {
    value: "40+",
    label: "SOLAR CLIENTS",
  },
  {
    value: "12v – 1500v",
    label: "BATTERY MANAGEMENT",
  },
  {
    value: "2 Hubs",
    label: "CHENNAI & BENGALURU",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-neutral-100">
      <div className=" px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-28">
        {/* Left Side: Wind Turbine & Solar Graphic */}
        <div className="w-full lg:w-auto flex justify-center items-center shrink-0 max-w-[200px] sm:max-w-[240px]">
          <Image
            src="/images/solar-wind.png"
            alt="Wind Turbine and Solar Panel"
            width={300}
            height={300}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side: 3x2 Grid of Key Metrics */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-14 lg:gap-y-16 gap-x-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center pl-6 sm:pl-7 border-l-2 border-[#EF403F] py-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#78BA43] tracking-tight leading-none mb-3">
                {stat.value}
              </div>
              <p className="text-xs sm:text-[13px] lg:text-sm font-semibold text-neutral-600 uppercase tracking-widest leading-tight whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
