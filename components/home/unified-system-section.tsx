"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SYSTEM from "@/public/images/system.svg";

const features = [
  "One requirements set spanning panel, pack, controller and charger",
  "One commissioning schedule instead of four to reconcile",
  "One warranty and one support line for the whole asset",
  "One data layer — monitoring, diagnostics and firmware over the air",
];

export default function UnifiedSystemSection() {
  return (
    <section className="w-full bg-[#F5F9F0] py-12 sm:py-16 lg:py-20 border-b border-neutral-100">
      <div className=" px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
        {/* Left Column: Text & Bullet Points */}
        <div className="w-full lg:w-1/2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#78BA43] uppercase mb-3 block">
            ONE UNIFIED SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight mb-5">
            Generate. Store. Manage. Deliver.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-6">
            Each stage is designed knowing what the next one needs. The battery
            management that ships inside our storage is the same platform that
            runs in our EV packs; the solar we install is sized against the
            storage that backs it.
          </p>

          {/* Bullet points with red chevrons */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium"
              >
                <span className="text-[#EF403F] font-bold text-sm leading-none select-none mt-0.5">
                  &gt;
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <Link
            href="/system"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#78BA43] hover:bg-[#68A535] text-white text-sm font-medium transition-colors shadow-sm"
          >
            <span>How Enervaa is put together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Column: System SVG Diagram */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:mr-10">
          <div className="w-full max-w-[700px]">
            <Image
              src={SYSTEM}
              alt="Enervaa Unified System Diagram"
              width={564}
              height={440}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
