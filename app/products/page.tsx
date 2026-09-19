import React from "react";
import ProductsHeroSection from "@/components/products/products-hero-section";
import ProductsQuickNavSection from "@/components/products/products-quick-nav-section";
import ProductsPillarHeaderSection from "@/components/products/products-pillar-header-section";
import ProductsEvSection from "@/components/products/products-ev-section";
import ProductsEnergyStorageSection from "@/components/products/products-energy-storage-section";
import CtaBannerSection from "@/components/about/cta-banner-section";
import { pillarsData } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <ProductsHeroSection />
      <ProductsQuickNavSection />
      <ProductsPillarHeaderSection pillar={pillarsData[0]} id="battery-packs" />
      <ProductsEvSection />
      <ProductsEnergyStorageSection />
      <ProductsPillarHeaderSection pillar={pillarsData[1]} id="battery-management" />
      <CtaBannerSection />
    </main>
  );
}