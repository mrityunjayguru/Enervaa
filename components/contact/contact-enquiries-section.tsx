"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import AnimateIn from "@/components/ui/animate-in";

export default function ContactEnquiriesSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Enquiries Info & Office Locations */}
          <div className="flex-1 w-full max-w-2xl">
            {/* Header Block */}
            <AnimateIn variant="fade-up" delay={0}>
              <p className="text-xs sm:text-[16px] font-semibold tracking-wider text-[#78BA43] uppercase mb-4">
                ENQUIRIES
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2C2E1F] mb-4 max-w-4xl">
                One form, four companies.
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150}>
              <p className="text-[14px] sm:text-base text-black">
                Pick the closest area of interest. If it spans more than one, choose the biggest piece &mdash; we will pull the others in.
              </p>
            </AnimateIn>

            {/* Offices Section Header */}
            <AnimateIn variant="fade-up" delay={200}>
              <div className="mt-8 mb-6">
                <p className="text-sm font-medium tracking-wider text-[#1C1E18] uppercase mb-3">
                  OFFICES
                </p>
                <div className="w-full h-[1px] bg-black/10" />
              </div>
            </AnimateIn>

            {/* Office Locations Flex Row */}
            <AnimateIn variant="fade-up" delay={250}>
              <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mb-8">
                {/* Chennai Office */}
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#78BA43] mb-1.5">
                    Chennai
                  </h4>
                  <p className="text-sm text-black leading-relaxed font-medium">
                    Headquarters &amp; Manufacturing
                  </p>
                 <p className="text-sm sm:text-[14px] text-black leading-relaxed font-normal">
                    Sipcot Industrial Growth Centre,<br />
                    Vallam Vadagal, Kancheepuram,<br />
                    Tamil Nadu, India
                  </p>
                </div>

                {/* Bengaluru Office */}
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#78BA43] mb-1.5">
                    Bengaluru
                  </h4>
                  <p className="text-sm text-black leading-relaxed font-medium">
                    Research &amp; Development
                  </p>
                  <p className="text-sm sm:text-[14px] text-black leading-relaxed font-normal">
                    Plot No. 27, KIADB Aerospace Park,<br />
                    Channarayapattana Hobli, Devanahalli<br />
                    Taluk, Bengaluru, Karnataka, India<br />
                    562165
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Divider & Direct Email Contact */}
            <AnimateIn variant="fade-up" delay={300}>
              <div className="w-full h-[1px] bg-black/10 mb-8" />
              <a
                href="mailto:hello@enervaa.com"
                className="text-sm sm:text-base font-bold text-[#78BA43] hover:underline transition-colors"
              >
                hello@enervaa.com
              </a>
            </AnimateIn>
          </div>

          {/* Right Column: Interactive Contact Form Card */}
          <div className="w-full lg:w-[660px] xl:w-[660px] shrink-0">
            <AnimateIn variant="fade-left" delay={150}>
              <div className="bg-[#F5F7EE] rounded-[10px] p-6 sm:p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <CheckCircle2 className="w-16 h-16 text-[#78BA43] mb-4" />
                    <h3 className="text-2xl font-semibold text-[#1C1E18] mb-2">
                      Enquiry Submitted!
                    </h3>
                    <p className="text-sm text-neutral-600 mb-6 max-w-xs">
                      Thank you for contacting Enervaa. Our team will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-[#78BA43] hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Row 1: Name & Company */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-neutral-700">
                          Name<span className="text-red-500 ml-0.5">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-white rounded-md px-4 py-3 text-sm text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full"
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-neutral-700">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="bg-white rounded-md px-4 py-3 text-sm text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-neutral-700">
                          Email<span className="text-red-500 ml-0.5">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="bg-white rounded-md px-4 py-3 text-sm text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full"
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-neutral-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="bg-white rounded-md px-4 py-3 text-sm text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full"
                        />
                      </div>
                    </div>

                    {/* Row 3: Area of Interest */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Area of Interest<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.areaOfInterest}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              areaOfInterest: e.target.value,
                            })
                          }
                          className="bg-white rounded-md px-4 py-3 text-sm text-neutral-600 focus:text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full appearance-none pr-10 cursor-pointer"
                        >
                          <option value="">Select One...</option>
                          <option value="battery-packs">Battery Packs</option>
                          <option value="battery-management">
                            Battery Management Systems
                          </option>
                          <option value="solar">Solar Energy Solutions</option>
                          <option value="ev-charging">EV Charging Systems</option>
                          <option value="integrated-system">
                            Integrated System
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#78BA43] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Row 4: What are you working on? */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        What are you working on?<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-white rounded-md p-4 text-sm text-neutral-900 border border-transparent focus:border-[#78BA43] focus:outline-none transition-all w-full resize-none"
                      />
                    </div>

                    {/* Row 5: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-16 py-3.5 bg-[#78BA43] hover:bg-[#68A535] text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        Submit Enquire &rarr;
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
