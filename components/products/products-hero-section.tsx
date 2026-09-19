"use client";

import React from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";

const certifications = [
  "AIS-156",
  "AIS-038",
  "AIS-140",
  "IS 16490",
  "IEC 60068",
  "ASIL-D ready",
];

export default function ProductsHeroSection() {
  return (
    <section className="w-full bg-white pt-26 sm:pt-34 lg:pt-34 pb-14 sm:pb-18 lg:pb-20 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & Certification Badges */}
          <div className="flex-1 w-full max-w-xl lg:max-w-4xl">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                PRODUCTS
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-3xl">
                Every board, every pack, every datasheet.
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black mb-8 max-w-6xl">
                Twenty-seven products, grouped under the four things Enervaa makes. Every one has a specification page; the electronics carry a downloadable datasheet with no form in the way.
              </p>
            </AnimateIn>

            {/* Certification Pills */}
            <AnimateIn variant="fade-up" delay={200}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#F5F7EE] text-[#78BA43] text-sm font-medium tracking-wide "
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Composite Products Suite Banner */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <AnimateIn variant="fade-left" delay={150} className="w-full flex justify-center lg:justify-end relative">
              {/* Soft circular background highlight */}
              <div className="absolute inset-0 right-[-10%] md:right-[-30%] top-0 bottom-10 left-0 m-auto w-[60%] h-[100%] aspect-square rounded-t-full bg-[#F5F7EE] -z-10" />
              
              <Image
                src="/images/products/banner.png"
                alt="Enervaa Products Suite - Storage Cabinet, Battery Pack, Solar Panel, and EV Charger"
                width={640}
                height={420}
                priority
                className="w-full h-auto object-contain max-w-[550px] lg:max-w-[620px]"
              />
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
