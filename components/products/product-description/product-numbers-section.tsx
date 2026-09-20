"use client";

import React from "react";
import AnimateIn from "@/components/ui/animate-in";
import { ProductSpecRow } from "@/lib/site-data";
import { ClipboardList } from "lucide-react";

interface ProductNumbersSectionProps {
  title?: string;
  subtitle?: string;
  specifications?: ProductSpecRow[];
}

const defaultSpecs: ProductSpecRow[] = [
  { parameter: "Application", specification: "Premium Two-Wheeler EV" },
  { parameter: "Nominal Voltage", specification: "72 V" },
  { parameter: "Energy", specification: "3.24 kWh" },
  { parameter: "Chemistry", specification: "LFP, Tier-1 Cells" },
  { parameter: "Battery Management", specification: "Integrated, AIS-156 Certified" },
  { parameter: "Thermal Design", specification: "Patent-Pending; Aluminium Modules With Copper Bus Bars" },
  { parameter: "Certification", specification: "AIS-156" },
  { parameter: "Factory Test", specification: "100% BMS Function, Charge/Discharge And Insulation (> 800 M\u03A9)" },
];

export default function ProductNumbersSection({
  title = "The numbers",
  subtitle = "Specification \u2014 As Published In The Enervaa Product Overview",
  specifications,
}: ProductNumbersSectionProps) {
  const activeSpecs = specifications || [];


  return (
    <section className="w-full bg-white pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow Tag, Title & Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                SPECIFICATION
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-3xl">
                {title}
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[15px] sm:text-lg text-black max-w-md">
                {subtitle}
              </p>
            </AnimateIn>
          </div>
          {/* Right Column: Specification Table */}
          <div className="lg:col-span-7 w-full">
            <AnimateIn variant="fade-up" delay={150}>
              {activeSpecs.length === 0 ? (
                <div className="w-full py-10 sm:py-14 border-2 border-dashed border-neutral-200 rounded-md"> 
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#F5F7EE] border border-neutral-200 flex items-center justify-center mb-4">
                      <ClipboardList className="w-6 h-6 text-[#78BA43]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-[#2C2E1F] mb-1.5">
                      No specifications yet
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-neutral-500 max-w-xs leading-relaxed">
                      Specification details for this product will appear here once published.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-black/10">
                        <th className="py-3 px-2 text-[14px] sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase w-2/5 sm:w-1/3">
                          PARAMETER
                        </th>
                        <th className="py-3 px-2 text-[14px] sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase w-3/5 sm:w-2/3">
                          SPECIFICATION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeSpecs.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-black/5 hover:bg-neutral-50/60 transition-colors"
                        >
                          <td className="py-3.5 px-2 text-[14px] sm:text-[16px] font-medium text-[#2C2E1F] align-top">
                            {row.parameter}
                          </td>
                          <td className="py-3.5 px-2 text-[14px] sm:text-[16px] font-medium text-neutral-700 align-top leading-relaxed">
                            {row.specification}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </AnimateIn>
          </div>

        </div>

      </div>
    </section>
  );
}
