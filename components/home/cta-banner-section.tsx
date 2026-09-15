"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/ui/animate-in";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#4F8030] text-white py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
        {/* Left Column: Heading & Description */}
        <AnimateIn variant="fade-right" className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-4">
            Tell us what you are building.
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
            A rooftop, a fleet, a factory load, a grid-connected asset — we will
            tell you which parts of the loop you actually need, and which you
            don&apos;t.
          </p>
        </AnimateIn>

        {/* Right Column: CTA Box & About Us Link */}
        <AnimateIn variant="fade-left" className="flex flex-col items-start lg:items-end shrink-0">
          {/* Split Border CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center border border-white divide-x divide-current text-white text-sm sm:text-base font-normal hover:bg-white hover:text-[#4F8030] transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] mb-6"
          >
            <span className="px-5 py-3">Start a conversation</span>
            <span className="px-3.5 py-3 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          {/* Secondary Link: Know More -> About Us */}
          <div className="flex flex-col items-center lg:items-center">
            <span className="text-[11px] text-white/70 tracking-wider mb-1 block">
              know more
            </span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 text-sm font-normal transition-colors"
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
