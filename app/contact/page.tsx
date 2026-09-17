import ContactHeadingSection from "@/components/contact/contact-heading-section";
import ContactEnquiriesSection from "@/components/contact/contact-enquiries-section";
import ContactDesksSection from "@/components/contact/contact-desks-section";
import CtaBannerSection from "@/components/about/cta-banner-section";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <ContactHeadingSection />
      <ContactEnquiriesSection />
      <ContactDesksSection />
      <CtaBannerSection />
    </main>
  );
}