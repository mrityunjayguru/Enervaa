"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/animate-in";
import { fieldCardsData } from "@/lib/site-data";

export default function InFieldSection() {
  return (
    <section className="w-full bg-[#F5F9F0] py-16 sm:py-24 lg:py-28">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Row */}
        <AnimateIn variant="fade-up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              IN THE FIELD
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
              Already running, at scale.
            </h1>
          </div>

          <div className="shrink-0">
            <Link
              href="/industries"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-16 py-3.5 bg-[#78BA43] hover:bg-[#68A535] text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>All industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {fieldCardsData.map((card, idx) => (
            <AnimateIn key={card.id} variant="fade-up" delay={idx * 120}>
              <Link
                href={card.href || "#"}
                className="group bg-white border border-neutral-100 flex flex-col items-center justify-between p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full min-h-[380px]"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-4/3 flex items-center justify-center my-auto p-8 sm:p-10">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-center text-center mt-auto pt-4 w-full">
                  <p className="text-xs sm:text-[16px] font-semibold text-[#78BA43] uppercase tracking-wider mb-2">
                    {card.categoryTag}
                  </p>
                  <h2 className="text-3xl sm:text-3xl font-normal text-black">
                    {card.title}
                  </h2>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
