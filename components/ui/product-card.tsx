"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EvBatteryPackItem } from "@/lib/site-data";

export interface ProductCardProps extends EvBatteryPackItem {
  className?: string;
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  href,
  className = "",
}: ProductCardProps) {
  const content = (
    <div className={`flex flex-col h-full bg-transparent group ${className}`}>
      {/* Product Image Wrapper (White Box) */}
      <div className="relative w-full aspect-video bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden mb-5 border border-black/5 shadow-2xs">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#78BA43] mb-2 leading-tight group-hover:text-[#68A535] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-black font-normal mb-4">
            {description}
          </p>
        </div>

        {/* Tags & Action Link */}
        <div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white text-[#4F8030] text-[10px] sm:text-[12px] font-semibold px-2.5 py-1 uppercase tracking-wider rounded-none border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Link */}
          <div className="inline-flex items-center gap-1 text-sm sm:text-base font-medium text-[#78BA43] group-hover:text-[#68A535] transition-colors">
            <span>More Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full cursor-pointer">
        {content}
      </Link>
    );
  }

  return content;
}
