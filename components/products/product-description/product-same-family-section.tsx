"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/ui/animate-in";
import ProductCard from "@/components/ui/product-card";
import { EvBatteryPackItem, evBatteryPacksData, ProductDetailItem } from "@/lib/site-data";

interface ProductSameFamilySectionProps {
  product?: ProductDetailItem;
  familyTitle?: string;
  relatedProducts?: EvBatteryPackItem[];
}

export default function ProductSameFamilySection({
  product,
  familyTitle = "Battery packs — EV",
  relatedProducts = evBatteryPacksData,
}: ProductSameFamilySectionProps) {
  // Filter out current product if matching slug, and limit to 3 items
  const displayItems = relatedProducts
    .filter((item) => item.href !== `/products/${product?.slug}`)
    .slice(0, 3);

  // Fallback to default 3 items if filtered list is small
  const finalItems = displayItems.length === 3 ? displayItems : evBatteryPacksData.slice(1, 4);

  return (
    <section className="w-full bg-[#F5F7EE] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col  sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[14px] font-semibold tracking-wider text-[#78BA43] uppercase mb-2 block">
                SAME FAMILY
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F]">
                {familyTitle}
              </h2>
            </AnimateIn>
          </div>

          {/* All Products CTA Button */}
          <AnimateIn variant="fade-up" delay={150} className="shrink-0">
            <Link
              href="/products"
              className="group w-full sm:w-auto inline-flex items-center border border-neutral-900 divide-x divide-neutral-900 text-neutral-900 hover:bg-[#78BA43] hover:text-white hover:divide-white transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-sm font-semibold bg-white"
            >
              <span className="px-4 py-2.5 sm:px-5 sm:py-3">All products</span>
              <span className="px-2.5 py-2.5 sm:py-3 flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 text-[#78BA43] group-hover:text-white stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </AnimateIn>
        </div>

        {/* 3 Related Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {finalItems.map((item, idx) => (
            <AnimateIn
              key={item.id}
              variant="fade-up"
              delay={150 + idx * 80}
              className="h-full"
            >
              <ProductCard {...item} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
