"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { PillarItem, pillarsData } from "@/lib/site-data";

interface ProductsPillarHeaderSectionProps {
  pillar?: PillarItem;
  id?: string;
}

export default function ProductsPillarHeaderSection({
  pillar = pillarsData[0], // Default to Battery Packs pillar if not specified
  id,
}: ProductsPillarHeaderSectionProps) {
  return (
    <section id={id || pillar.id} className="w-full py-12 sm:py-16 lg:py-20 relative =">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow Tag & Main Pillar Title */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[15px] font-semibold tracking-wider text-[#78BA43] uppercase mb-3 block">
                {pillar.tag}
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
                {pillar.title}
              </h1>
            </AnimateIn>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-6">
            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-2 max-w-4xl">
                {pillar.description}
              </p>
              
              <Link
                href={pillar.linkHref}
                className="inline-flex items-center gap-1 text-sm sm:text-base font-medium text-[#78BA43] hover:text-[#68A535] hover:underline transition-colors"
              >
                <span>{pillar.linkText}</span>
              </Link>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
