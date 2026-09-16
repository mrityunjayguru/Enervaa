"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { defaultNavItems } from "@/lib/site-data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 overflow-x-hidden text-neutral-900 ${
        isScrolled
          ? "bg-white"
          : "bg-[#F7F8FA]/75 backdrop-blur-[75%]"
      }`}
    >
      <div className="mx-auto flex h-20  items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/logo-main.svg"
              alt="Enervaa Logo"
              width={190}
              height={30}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right: Desktop Navigation Links & CTA Button Grouped Together */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <nav className="flex items-center gap-6 xl:gap-8 text-[15px]">
            {defaultNavItems.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors font-normal ${
                    active
                      ? "text-[#78BA43] font-bold"
                      : "text-black hover:text-[#78BA43] font-bold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group inline-flex items-center border border-neutral-900 divide-x divide-neutral-900 text-neutral-900 hover:bg-[#78BA43] hover:text-white hover:divide-white transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] text-sm font-bold"
          >
            <span className="px-6 py-2">Talk to us</span>
            <span className="px-2.5 py-2 flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-[#78BA43] group-hover:text-white stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:text-[#78BA43] hover:bg-black/5 focus:outline-none"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden h-[calc(100vh-20px)] border-t border-black/10 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {defaultNavItems.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base rounded-md transition-colors ${
                    active
                      ? "text-[#78BA43] font-semibold bg-white/40"
                      : "text-neutral-800 hover:text-[#78BA43] hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center border border-neutral-900 divide-x divide-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:divide-white transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] text-sm font-medium"
            >
              <span className="px-4 py-2">Talk to us</span>
              <span className="px-2.5 py-2 flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 text-[#78BA43] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
