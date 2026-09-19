import React from "react";
import ProductsHeroSection from "@/components/products/products-hero-section";
import ProductsQuickNavSection from "@/components/products/products-quick-nav-section";
import ProductsPillarHeaderSection from "@/components/products/products-pillar-header-section";
import ProductsEvSection from "@/components/products/products-ev-section";
import ProductsEnergyStorageSection from "@/components/products/products-energy-storage-section";
import { pillarsData } from "@/lib/site-data";
import ProductsBettryManagement from "@/components/products/products-bettry-management-low";
import ProductsBettryManagementHigh from "@/components/products/products-bettry-management-high";
import ProductsBettryManagementEnergyStorage from "@/components/products/products-bettry-management-energy-storage";
import ProductsBettryManagementTransitSystem from "@/components/products/products-bettry-management-transit-system";
import ProductsBettryManagementEvCharger from "@/components/products/products-bettry-management-ev-charger";
import CtaBannerSection from "@/components/products/cta-banner-section";

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <ProductsHeroSection />
      <ProductsQuickNavSection />
      <ProductsPillarHeaderSection pillar={pillarsData[0]} id="battery-packs" />
      <ProductsEvSection />
      <ProductsEnergyStorageSection />
      <ProductsPillarHeaderSection pillar={pillarsData[1]} id="battery-management" />
      <ProductsBettryManagement />
      <ProductsBettryManagementHigh/>
      <ProductsBettryManagementEnergyStorage/>
      <ProductsBettryManagementTransitSystem/>
      <ProductsPillarHeaderSection pillar={pillarsData[2]} id="solar" />
      <ProductsPillarHeaderSection pillar={pillarsData[3]} id="ev-charging" />
      <ProductsBettryManagementEvCharger/>
      <CtaBannerSection />
    </main>
  );
}