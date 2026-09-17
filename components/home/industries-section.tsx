"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import UNION from "@/public/logos/Union.svg";
import AnimateIn from "@/components/ui/animate-in";
import { industriesData } from "@/lib/site-data";

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Container with Star Watermark */}
        <AnimateIn variant="fade-up" className="relative mb-12 lg:mb-16">
          {/* Background Star Watermark Accent */}
          <div className="absolute -top-16 -right-2 pointer-events-none z-0 select-none">
            <Image
              alt="Enervaa Star Emblem"
              src={UNION}
              width={142}
              height={165}
              className="w-36 sm:w-44 h-auto opacity-80"
              priority
            />
          </div>

          <div className="relative z-10 max-w-2xl pt-6 sm:pt-8">
             <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              THE OTHER WAY IN
            </p>
           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
              Or start from what you operate.
            </h1>
            <p className="text-[15px] sm:text-lg text-black mb-8 max-w-4xl">
              Nobody buys all four on day one. Pick your industry and see exactly
              which of the four we supply into it — and which we don&apos;t.
            </p>
          </div>
        </AnimateIn>

        {/* 5-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {industriesData.map((item, idx) => (
            <AnimateIn key={item.id} variant="fade-up" delay={idx * 90}>
              <Link
                href={item.href || "#"}
                className="group flex flex-col justify-between h-full bg-[#F5F9F0] p-4 lg:p-3 py-5 lg:py-6 pb-6 lg:pb-8 transition-all duration-300 border border-transparent hover:border-[#78BA43]/30 hover:-translate-y-1 hover:shadow-md min-h-[90px]"
              >
                {/* Top Row: Red Number & Custom SVG Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-8">
                  <span className="text-sm font-semibold text-[#EF403F]">
                    {item.id}
                  </span>
                  <div className="relative w-14 h-14 flex items-center justify-end">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Bottom Row: Title & Description */}
                <div>
                  <h3 className="text-2xl sm:text-2xl font-medium text-[#78BA43] mb-1 group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[14px] text-black">
                    {item.description}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
