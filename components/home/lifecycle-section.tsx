"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { lifecycleStepsData } from "@/lib/site-data";

export default function LifecycleSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left Column: Header & Description */}
        <AnimateIn variant="fade-up" className="w-full lg:w-1/3 max-w-lg">
          <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
            FULL LIFECYCLE
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            From the first sketch to year-ten service.
          </h1>
          <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
            Each stage is designed knowing what the next one needs. The battery
            management that ships inside our storage is the same platform that
            runs in our EV packs; the solar we install is sized against the
            storage that backs it.
          </p>
        </AnimateIn>

        {/* Right Column: 4 Step Cards Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5">
          {lifecycleStepsData.map((step, idx) => (
            <AnimateIn key={idx} variant="fade-up" delay={idx * 100}>
              <Link
                href={step.href || "#"}
                className="group flex flex-col justify-between h-full bg-[#FAFCF7] p-6 lg:p-7 transition-all duration-300 border border-transparent hover:border-[#78BA43]/30 hover:-translate-y-1 hover:shadow-md min-h-[220px] sm:min-h-[300px]"
              >
                {/* Top Row: Step Tag + Arrow */}
                <div className="flex items-center gap-1 text-sm sm:text-base font-semibold text-[#78BA43] ">
                  <span>{step.stepNumber}</span>
                  <span className="text-[#EF403F] group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>

                {/* Bottom Row: Title & Description */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-medium text-neutral-900 leading-snug mb-1 group-hover:text-[#78BA43] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
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
