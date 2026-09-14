"use client";

import React, { useEffect, useRef, useState } from "react";

export interface AnimateInProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "fade-right" | "fade-left" | "scale-up";
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.12,
  once = true,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once, threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "fade-right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-6";
      case "fade-left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6";
      case "scale-up":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`will-change-[transform,opacity] transition-all ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
