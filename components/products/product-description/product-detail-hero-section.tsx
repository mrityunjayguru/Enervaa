"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/animate-in";
import { ProductDetailItem } from "@/lib/site-data";
import { CheckCircle2, X } from "lucide-react";

interface ProductDetailHeroSectionProps {
  product: ProductDetailItem;
}

export default function ProductDetailHeroSection({
  product,
}: ProductDetailHeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-white pt-20 sm:pt-36 lg:pt-36 pb-10 sm:pb-10 lg:pb-12 relative">
      {/* Inner Pale Green Band */}
      <div className="w-full bg-[#F5F7EE] py-10 sm:py-6 lg:py-6 relative">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Product Information & Actions */}
            <div className="lg:col-span-8 flex flex-col justify-start">
              <AnimateIn variant="fade-up" delay={0}>
                <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                  {product.categoryBreadcrumb}
                </p>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={100}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
                  {product.title}
                </h1>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={150}>
                <p className="text-[15px] sm:text-lg text-black mb-8 max-w-4xl">
                  {product.description}
                </p>
              </AnimateIn>

              {/* Application Tags */}
              <AnimateIn variant="fade-up" delay={200}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white text-[#78BA43] text-sm font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimateIn>

              {/* Datasheet Block */}
              <AnimateIn variant="fade-up" delay={250}>
                <div className="pt-2">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3 block">
                    DATASHEET
                  </span>

                  {/* Buttons Row */}
                  <div className="flex flex-wrap items-center w-full gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalOpen(true);
                        setIsSubmitted(false);
                      }}
                      className="px-10 py-3.5 w-full sm:w-auto bg-[#78BA43] hover:bg-[#68A535] text-white font-medium text-sm  sm:text-sm rounded-none transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      Request the datasheet
                    </button>

                    <Link
                      href={product.contextLink || "/contact"}
                      className="px-10 py-3.5 border w-full sm:w-auto border-neutral-900 text-center text-neutral-900 hover:bg-neutral-900 hover:text-white font-medium text-sm sm:text-sm rounded-none transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      See it in context
                    </Link>
                  </div>

                  {/* Issued per application note */}
                  <div>
                    <span className="text-sm font-medium text-[#78BA43] mb-1 block">
                      {product.issuedNoteTitle || "Issued per application"}
                    </span>
                    <p className="text-[14px] sm:text-sm text-black max-w-xl font-normal">
                      {product.issuedNoteText ||
                        "This product is built to the programme or the load profile, so its datasheet is issued against your configuration rather than published as a catalogue sheet."}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right Column: Dual Top & Bottom Overlapping Product Box */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
              <AnimateIn
                variant="fade-left"
                delay={150}
                className="w-full flex justify-center lg:justify-end mt-1 sm:-mt-36 lg:-mt-40 -mb-30 sm:-mb-36 lg:-mb-40 relative z-20"
              >
                <div className="bg-white rounded-[10px] border border-[#78BA43] p-6 sm:p-10 flex items-center justify-center aspect-square relative max-w-[460px] lg:max-w-[600px] w-full mx-auto lg:mr-0">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt || product.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-contain p-4 sm:p-6"
                  />
                </div>
              </AnimateIn>
            </div>

          </div>
        </div>
      </div>

      {/* Datasheet Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 rounded-lg shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-6 text-center flex flex-col items-center">
                <CheckCircle2 className="w-14 h-14 text-[#78BA43] mb-3" />
                <h3 className="text-xl font-semibold text-[#2C2E1F] mb-2">
                  Datasheet Requested
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-xs">
                  Thank you, {name}! We have routed your datasheet request for {product.title}. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-[#78BA43] text-white font-medium text-xs rounded-md"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-[#2C2E1F] mb-1">
                  Request Datasheet
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  {product.title} &middot; Issued per application
                </p>

                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-neutral-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-[#78BA43]"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-neutral-700 block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-[#78BA43]"
                      placeholder="e.g. john@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-neutral-700 block mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-[#78BA43]"
                      placeholder="e.g. Acme Mobility"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#78BA43] hover:bg-[#68A535] text-white font-medium text-xs rounded-md transition-colors"
                    >
                      Send Datasheet Request &rarr;
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
