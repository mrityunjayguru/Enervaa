"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[100vh] flex items-end overflow-hidden bg-neutral-900 pt-20">
      {/* Background Image with subtle scale entrance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Clean Energy Storage, Solar Panels, and Wind Turbines"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container Aligned Bottom-Left */}
      <div className="relative z-10 mx-auto w-full">
        <AnimateIn variant="fade-up" duration={800} delay={100}>
          <div className="w-full max-w-2xl lg:max-w-4xl bg-[#F5F9F0]/75 backdrop-blur-[75%] p-6 sm:p-10 lg:p-14 border border-white/60 shadow-2xl rounded-none">
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              BATTERY &middot; BATTERY MANAGEMENT &middot; SOLAR &middot; CHARGING
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-6 max-w-2xl">
              The whole clean-energy loop, from one company.
            </h1>
            <p className="text-[15px] sm:text-lg text-black leading-relaxed mb-8 max-w-3xl">
              Enervaa generates, stores, manages and delivers energy — battery packs,
              battery management, solar and EV charging, engineered against one
              another and built in India.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-16 py-3.5 bg-[#78BA43] hover:bg-[#68A535] text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                What we make
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-16 py-3.5 border border-neutral-900 bg-transparent hover:bg-black/5 text-neutral-900 font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a project
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
