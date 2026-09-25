"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { industrySupplyData } from "@/lib/site-data";

export default function IndustriesSupplySection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Half Green & Half White Split Background */}
      <div className="absolute top-0 left-0 right-0 h-[52%] sm:h-[50%] lg:h-[52%] bg-[#F4F6EE] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[48%] sm:h-[50%] lg:h-[48%] bg-white z-0 pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <AnimateIn variant="fade-up" className="mb-10 lg:mb-14">
         <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
            AT A GLANCE
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                What we supply, by industry.
              </h1>
            </div>
            <div className="max-w-md lg:max-w-lg">
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                Four capabilities. Nobody buys all four on day one — most start with one
                and add the next when the first is running.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* 5-Column Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4 xl:gap-5">
          {industrySupplyData.map((item, idx) => (
            <AnimateIn key={item.id} variant="fade-up" delay={idx * 80}>
              <div className="group flex flex-col h-full bg-[#F6F6F6] overflow-hidden transition-all duration-300">
                {/* Image Container */}
                <div className="relative w-full aspect-video overflow-hidden bg-neutral-200">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-3 flex-1 flex flex-col justify-between bg-[#F6F6F6]">
                  {/* Title Link */}
                  <div>
                    <Link
                      href={item.href || "#"}
                      className="flex items-center gap-1.5 text-2xl sm:text-[22px] font-medium text-[#78BA43] mb-4 sm:mb-4 group/link transition-colors hover:text-[#67A337]"
                    >
                      <span>{item.title}</span>
                      <span className=" transition-transform duration-200 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                    {/* Capabilities List */}
                    <div className="space-y-4">
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx}>
                          <p className="text-[16px] font-normal text-[#78BA43] mb-0.5">
                            {cap.label}
                          </p>
                          <p className="text-[14px] sm:text-[14px] font-normal text-[#2C2E1F] leading-snug">
                            {cap.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
