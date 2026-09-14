"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { lifecycleStepsData } from "@/lib/site-data";

export default function LifecycleSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-neutral-100">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left Column: Header & Description */}
        <AnimateIn variant="fade-up" className="w-full lg:w-1/3 max-w-lg">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#78BA43] uppercase mb-4 block">
            FULL LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight mb-2">
            From the first sketch to year-ten service.
          </h2>
          <p className="text-sm sm:text-base text-black font-normal leading-relaxed">
            Each stage is designed knowing what the next one needs. The battery
            management that ships inside our storage is the same platform that
            runs in our EV packs; the solar we install is sized against the
            storage that backs it.
          </p>
        </AnimateIn>

        {/* Right Column: 4 Step Cards Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {lifecycleStepsData.map((step, idx) => (
            <AnimateIn key={idx} variant="fade-up" delay={idx * 100}>
              <Link
                href={step.href || "#"}
                className="group flex flex-col justify-between h-full bg-[#FAFCF7] p-6 lg:p-7 transition-all duration-300 border border-transparent hover:border-[#78BA43]/30 hover:-translate-y-1 hover:shadow-md min-h-[230px]"
              >
                {/* Top Row: Step Tag + Arrow */}
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#78BA43] mb-6">
                  <span>{step.stepNumber}</span>
                  <span className="text-[#EF403F] group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>

                {/* Bottom Row: Title & Description */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 leading-snug mb-3 group-hover:text-[#78BA43] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[12px] text-black font-normal leading-relaxed">
                    {step.description}
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
