"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white backdrop-blur-md border-b border-gray-100 text-neutral-900 overflow-x-hidden">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            {defaultNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors font-normal ${
                  item.isActive
                    ? "text-[#78BA43] font-medium"
                    : "text-neutral-800 hover:text-[#78BA43]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="group flex items-center border border-neutral-900 bg-transparent text-neutral-900 hover:bg-black/5 transition-all text-sm font-medium"
          >
            <span className="px-6 py-2">Talk to us</span>
            <div className="flex h-full items-center justify-center border-l border-neutral-900 px-2.5 py-2 group-hover:bg-black/5 transition-colors">
              <ArrowUpRight className="h-4 w-4 text-[#78BA43] stroke-[2.5]" />
            </div>
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
        <div className="lg:hidden border-t border-black/10 bg-[#E5F4F1] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {defaultNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-base rounded-md transition-colors ${
                  item.isActive
                    ? "text-[#78BA43] font-semibold bg-white/40"
                    : "text-neutral-800 hover:text-[#78BA43] hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center border border-neutral-900 bg-transparent text-neutral-900 hover:bg-black/5 transition-all text-sm font-medium"
            >
              <span className="px-4 py-2">Talk to us</span>
              <div className="flex items-center justify-center border-l border-neutral-900 px-2.5 py-2 group-hover:bg-black/5 transition-colors">
                <ArrowUpRight className="h-4 w-4 text-[#78BA43] stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
