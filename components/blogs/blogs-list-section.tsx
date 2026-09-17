"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { blogPostsData } from "@/lib/site-data";

export default function BlogsListSection() {
  return (
    <section className="w-full bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Top Header Block */}
        <div className="relative mb-12 sm:mb-16">
          <AnimateIn variant="fade-up" delay={0}>
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              BLOGS
            </p>
          </AnimateIn>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
            <AnimateIn variant="fade-up" delay={100} className="w-full lg:w-2/3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
                Notes from the engineering floor.
              </h1>
              <p className="text-[15px] sm:text-lg text-black mb-4 max-w-4xl">
                Working notes on battery management, storage sizing, homologation and the parts of a clean-energy project that usually surprise people. Written by the people who build the hardware.
              </p>
            </AnimateIn>
          </div>

          {/* Decorative Starburst Logo Mark in Background Top Right */}
          <div className="absolute top-0 right-10 hidden sm:block pointer-events-none translate-x-4 -translate-y-4">
            <Image
              src="/logos/Union.svg"
              alt="Enervaa Symbol"
              width={200}
              height={200}
              className="w-40 sm:w-40 h-auto object-contain text-[#78BA43]"
            />
          </div>
        </div>

        {/* 6 Blog Post Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPostsData.map((post, idx) => (
            <AnimateIn
              key={post.slug}
              variant="fade-up"
              delay={150 + idx * 80}
              className="h-full"
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex flex-col h-full bg-[#F5F7EE] hover:bg-[#EEF3E5] transition-colors duration-300 overflow-hidden"
              >
                {/* Card Top Image */}
                <div className="aspect-video relative w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category Tag */}
                    <span className="text-[12px] sm:text-sm font-medium tracking-wider text-[#78BA43] uppercase mb-2.5 block">
                      {post.categoryTag}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#2C2E1F] mb-3  tracking-tight group-hover:text-[#68A535] transition-colors truncate">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-black font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
