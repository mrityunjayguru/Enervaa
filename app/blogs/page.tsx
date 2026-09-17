import React from "react";
import BlogsListSection from "@/components/blogs/blogs-list-section";
import CtaBannerSection from "@/components/blogs/cta-banner-section";

export default function BlogsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <BlogsListSection />
      <CtaBannerSection />
    </main>
  );
}