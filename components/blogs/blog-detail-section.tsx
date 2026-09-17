"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimateIn from "@/components/ui/animate-in";
import { BlogPost } from "@/lib/site-data";

interface BlogDetailSectionProps {
  post: BlogPost;
}

export default function BlogDetailSection({ post }: BlogDetailSectionProps) {
  return (
    <article className="w-full bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Back Link */}
        <AnimateIn variant="fade-up" delay={0} className="mb-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#78BA43] hover:text-[#68A535] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </AnimateIn>

        {/* Top Header Block: Category & Title */}
        <div className="text-center mb-8 sm:mb-12">
          <AnimateIn variant="fade-up" delay={50}>
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              BLOGS &nbsp;|&nbsp; {post.categoryName}
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium  text-[#2C2E1F] ">
              {post.title}
            </h1>
          </AnimateIn>
        </div>

        {/* Featured Image */}
        <AnimateIn variant="fade-up" delay={150} className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="aspect-8/3 relative w-full overflow-hidden bg-neutral-100 shadow-xs">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt || post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </AnimateIn>

        {/* Article Body Content */}
        <AnimateIn variant="fade-up" delay={200} className="max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-black text-sm sm:text-base font-medium">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-black">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimateIn>

      </div>
    </article>
  );
}
