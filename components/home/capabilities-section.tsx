"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CapabilityCard, { CapabilityCardProps } from "@/components/ui/capability-card";

const capabilitiesData: CapabilityCardProps[] = [
  {
    categoryTag: "STORE & POWER",
    title: "Battery Packs",
    description:
      "Packs that move and packs that sit still — 48 V scooter packs to 352 V bus packs, and a 10 kWh home stack to megawatt-hour storage. Tier-1 cells, 100 % of units tested.",
    imageSrc: "/images/bettery-pack.png",
    imageAlt: "Battery Packs",
    tags: ["EV PACKS", "HOME", "C&I", "GRID"],
    href: "/products/battery-packs",
  },
  {
    categoryTag: "MANAGE",
    title: "Battery Management",
    description:
      "The brain inside every pack we build — battery management from 12 V to 1500 V, an energy management layer, a cloud platform for fleet analytics, and transit systems for bus and rail.",
    imageSrc: "/images/bettery-management.png",
    imageAlt: "Battery Management System",
    tags: ["BMS", "EMS", "CLOUD", "TRANSIT"],
    href: "/products/battery-management",
  },
  {
    categoryTag: "GENERATE",
    title: "Solar",
    description:
      "PV design, turnkey EPC and long-run O&M — residential rooftop, commercial and industrial roofs, and utility-scale solar parks including floating PV.",
    imageSrc: "/images/solar.png",
    imageAlt: "Solar Installation",
    tags: ["ROOF TOP", "C&I", "SOLAR PARK"],
    href: "/products/solar",
  },
  {
    categoryTag: "DELIVER",
    title: "EV Charging",
    description:
      "AC 3.3–22 kW and DC 30–360 kW chargers, with an OCPP-native charge management platform behind them.",
    imageSrc: "/images/ev-chrging.png",
    imageAlt: "EV Charging Station",
    tags: ["AC + DC", "CMS", "OCPP"],
    href: "/products/ev-charging",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-[#F5F9F0] py-16 sm:py-24 lg:py-28">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 lg:mb-16">
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
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#78BA43] hover:bg-[#68A535] text-white text-sm font-medium transition-colors shadow-sm"
            >
              <span>All 27 products and datasheets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {capabilitiesData.map((card, idx) => (
            <CapabilityCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
