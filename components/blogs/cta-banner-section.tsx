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
        <AnimateIn variant="fade-right" className="">
          <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-white uppercase mb-4">
                STAY IN TOUCH
              </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-4">
            Want these when they land?
          </h2>
          <p className="text-sm sm:text-base text-[#FBFBF1] font-normal max-w-xl">
            We publish when there is something worth saying rather than to a calendar. Tell us what you work on and we will send the relevant ones.
          </p>
        </AnimateIn>

        {/* Right Column: CTA Box & About Us Link */}
        <AnimateIn variant="fade-left" className="flex flex-col items-start lg:items-end shrink-0">
          {/* Split Border CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center border border-white divide-x divide-current text-white text-sm sm:text-base font-bold hover:bg-white hover:text-[#4F8030] transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] mb-6"
          >
            <span className="px-5 py-3">Start a conversation</span>
            <span className="px-3.5 py-3 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
