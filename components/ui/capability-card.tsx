"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CapabilityCardProps {
  categoryTag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  tags?: string[];
  href?: string;
  className?: string;
}

export default function CapabilityCard({
  categoryTag,
  title,
  description,
  imageSrc,
  imageAlt,
  tags = [],
  href,
  className = "",
}: CapabilityCardProps) {
  const cardContent = (
    <div
      className={`bg-white border border-neutral-100 flex flex-col h-full overflow-hidden transition-all rounded-none ${className}`}
    >
      {/* Card Image */}
      <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 lg:p-4">
        {/* Category Tag */}
        <span className="text-[14px] sm:text-sm font-semibold text-[#78BA43] uppercase tracking-wider mb-1">
          {categoryTag}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-medium text-[#2C2E1F] leading-tight mb-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-sm font-normal text-black mb-6 flex-1">
          {description}
        </p>

        {/* Tags Row */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FBFBF1] text-[#4F8030] text-[12px] sm:text-[12px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {cardContent}
      </Link>
    );
  }

  return <div className="group block h-full">{cardContent}</div>;
}
