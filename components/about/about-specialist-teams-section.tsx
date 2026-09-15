"use client";

import React from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";
import { specialistTeamsData } from "@/lib/site-data";

export default function AboutSpecialistTeamsSection() {
  return (
    <section className="w-full bg-[#F7F8F1] pt-16 sm:pt-24 lg:pt-26 pb-12 sm:pb-16 lg:pb-16 relative">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#78BA43] mb-4 sm:mb-5 block">
                HOW IT IS PUT TOGETHER
              </span>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
                One name, four specialist teams.
              </h2>
            </AnimateIn>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start pt-1 sm:pt-2">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl mb-10 sm:mb-14">
                You buy from Enervaa and you are supported by Enervaa. Behind that, four companies keep their own factories, engineers and product lines — which is why the depth in each area is real rather than assembled for a brochure.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialistTeamsData.map((team, idx) => (
            <AnimateIn
              key={team.id}
              variant="fade-up"
              delay={200 + idx * 80}
              className="h-full"
            >
              <div className="group flex flex-col justify-between h-full bg-white p-6 sm:p-4 rounded-none border border-neutral-200/50 hover:-translate-y-1.5 transition-all duration-300">
                
                {/* Top Content */}
                <div>
                  {/* Brand Logo Box */}
                  <div className="h-14 sm:h-18 flex items-center justify-start mb-6">
                    <Image
                      src={team.logoSrc}
                      alt={team.logoAlt}
                      width={190}
                      height={80}
                      className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Tag */}
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#78BA43] mb-2 block">
                    {team.categoryTag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-3xl font-normal text-neutral-900 mb-3 tracking-tight transition-colors">
                    {team.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {team.description}
                  </p>
                </div>

                {/* Bottom Pill Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-8 pt-4">
                  {team.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 bg-[#FBFBF1] text-[#78BA43] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-none transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom Green Info Banner Box with 50% Overlap into Next Section */}
        <AnimateIn variant="fade-up" delay={450} className="relative z-20">
          <div className="mt-12 sm:mt-16 -mb-20 sm:-mb-24 lg:-mb-24 w-full max-w-[720px] bg-[#78BA43] text-white p-4 sm:p-4 lg:p-2 rounded-none flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 p-1">
              <Image
                src="/logos/Union.svg"
                alt="Enervaa Logo Mark"
                width={32}
                height={40}
                className="w-7 sm:w-8 h-auto object-contain brightness-200"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
              <span className="">Each company keeps its own name on its own products and contracts. </span>
              <br />
              Enervaa is the layer that lets them be specified, bought, warranted and supported as one.
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
