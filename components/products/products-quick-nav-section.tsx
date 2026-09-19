"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { productQuickNavData } from "@/lib/site-data";

export default function ProductsQuickNavSection() {
  return (
    <section className="w-full bg-[#F5F7EE] py-12 sm:py-16 lg:py-20 relative">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-16 xl:gap-18">
          {productQuickNavData.map((item, idx) => (
            <AnimateIn
              key={item.id}
              variant="fade-up"
              delay={idx * 80}
              className="flex flex-col justify-start"
            >
              {/* Top Red/Coral Tag */}
              <span className="text-sm sm:text-[14px] text-[#EF403F] font-medium mb-2 block">
                {item.badge}
              </span>

              {/* Green Headline Link */}
              <Link
                href={item.href}
                className="group inline-flex items-center gap-1 text-2xl sm:text-3xl font-medium tracking-tight text-[#78BA43] hover:text-[#68A535] transition-colors mb-2.5"
              >
                <span>{item.title}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>

              {/* Subtitle Description */}
              <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
                {item.description}
              </p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
