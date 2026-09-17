"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/ui/animate-in";
import { leadershipData } from "@/lib/site-data";

export default function AboutLeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    const index = Math.round(scrollPosition / (cardWidth + 24));
    setActiveIndex(Math.min(Math.max(index, 0), leadershipData.length - 1));
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <AnimateIn variant="fade-up" delay={0}>
            <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
              LEADERSHIP
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 mb-4 max-w-2xl sm:max-w-4xl">
              One vision, built to move forward.
            </h1>
          </AnimateIn>
        </div>

        {/* Mobile Touch Carousel / Desktop 4-Column Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-4 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {leadershipData.map((leader, idx) => (
            <AnimateIn
              key={leader.id}
              variant="fade-up"
              delay={150 + idx * 90}
              className="group flex flex-col cursor-pointer shrink-0 w-[82vw] max-w-[300px] sm:w-auto sm:max-w-none snap-center sm:snap-align-none"
            >
              {/* Leader Image Container with Hover Zoom & Black Overlay Bar */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 transition-all duration-300">
                <Image
                  src={leader.imageSrc}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Black Translucent Overlay Bar with White Square Icon Buttons */}
                <div className="absolute inset-x-0 bottom-0 py-2.5 px-3 bg-linear-to-r from-[#2C2E1F] to-transparent backdrop-blur-[2px] flex items-center transition-all duration-300">
                  <a
                    href={leader.linkedin || "#"}
                    className="w-10 h-10 rounded-[5px] flex items-center justify-center p-1.5 group/icon"
                    aria-label={`${leader.name} LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/images/about/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain transition-all"
                    />
                  </a>
                  <a
                    href={leader.phone || "#"}
                    className="w-10 h-10 rounded-[5px] flex items-center justify-center p-1.5 group/icon"
                    aria-label={`${leader.name} Phone`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/images/about/icons/telephone.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain transition-all"
                    />
                  </a>
                  <a
                    href={leader.email || "#"}
                    className="w-10 h-10 rounded-[5px] flex items-center justify-center p-1.5 group/icon"
                    aria-label={`${leader.name} Email`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/images/about/icons/mail.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain transition-all"
                    />
                  </a>
                </div>
              </div>

              {/* Leader Details */}
              <div className="mt-4 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 group-hover:text-[#78BA43] transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#78BA43] mt-0.5">
                  {leader.role}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mt-6">
          {leadershipData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Go to slide ${dotIdx + 1}`}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 280;
                  scrollRef.current.scrollTo({
                    left: dotIdx * (cardWidth + 24),
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === dotIdx ? "w-6 bg-[#78BA43]" : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
