"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import {
  companyLinks,
  solutionsLinks,
  quickLinks,
  officeLocations,
} from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-800 pt-12 pb-8">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Row 1: Logo & Offices */}
        <AnimateIn variant="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          {/* Left Column: Logo & Tagline */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logos/logo-main.svg"
                alt="Enervaa Logo"
                width={180}
                height={30}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm sm:text-base text-black max-w-md ">
              Solar, storage, battery systems, battery intelligence and EV
              charging — engineered and built in India, delivered as one system.
            </p>
          </div>

          {/* Right Column: Offices */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4 block">
              OFFICES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {officeLocations.map((office, idx) => (
                <div key={idx}>
                  <h4 className="text-sm sm:text-base font-bold text-[#78BA43] mb-1">
                    {office.cityRole}
                  </h4>
                  <p className="text-sm text-black leading-relaxed">
                    {office.addressLines.map((line, lIdx) => (
                      <React.Fragment key={lIdx}>
                        {line}
                        {lIdx < office.addressLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Divider */}
        <div className="w-full border-t border-neutral-200/80 my-8" />

        {/* Row 2: Mail & Links Grid */}
        <AnimateIn variant="fade-up" delay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-2">
          {/* Email Block */}
          <div className="lg:col-span-3">
            <span className="text-sm font-medium text-neutral-400 block mb-1.5">
              Mail us at
            </span>
            <a
              href="mailto:hello@enervaa.com"
              className="text-sm sm:text-base font-bold text-[#78BA43] hover:underline transition-colors"
            >
              hello@enervaa.com
            </a>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3 mt-4 sm:mt-0">
            <h4 className="text-sm font-semibold text-[#78BA43] uppercase tracking-wider mb-3">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-600 hover:text-neutral-900 transition-colors font-bno"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3 mt-4 sm:mt-0">
            <h4 className="text-sm font-semibold text-[#78BA43] uppercase tracking-wider mb-3">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 mt-4 sm:mt-0">
            <h4 className="text-sm font-semibold text-[#78BA43] uppercase tracking-wider mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        {/* Bottom Divider */}
        <div className="w-full border-t border-neutral-200/80 mt-8 pt-6" />

        {/* Row 3: Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]  text-[#2C2E1F]">
          <p>© 2026 Enervaa. All rights reserved.</p>
          <p>
            Enervaa is AWEV Solutions, RevX Energy, PlaySolar and Plugzmart.
          </p>
        </div>
      </div>
    </footer>
  );
}
