"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CapabilityCard from "@/components/ui/capability-card";
import AnimateIn from "@/components/ui/animate-in";
import { capabilitiesData } from "@/lib/site-data";

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-[#F5F9F0] py-16 sm:py-24 lg:py-28">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Row */}
        <AnimateIn variant="fade-up" className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#78BA43] uppercase mb-4 block">
              WHAT WE MAKE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight mb-4">
              Four capabilities. One system.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Most energy projects are stitched together from four suppliers who each
              own a quarter of the problem. Enervaa owns all of it — so the
              interfaces between the panel, the pack, the brain and the charger
              stop being yours to manage.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#78BA43] hover:bg-[#68A535] text-white text-sm font-medium transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>All 27 products and datasheets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {capabilitiesData.map((card, idx) => (
            <AnimateIn key={idx} variant="fade-up" delay={idx * 100}>
              <CapabilityCard {...card} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
