import IndustriesHeroSection from '@/components/industries/industries-hero-section'
import IndustriesSupplySection from '@/components/industries/industries-supply-section'
import IndustryAutomotiveSection from '@/components/industries/industry-automotive-section'
import IndustryRailTransitSection from '@/components/industries/industry-rail-transit-section'
import IndustryCommercialIndustrialSection from '@/components/industries/industry-commercial-industrial'
import IndustryUtilityGridSection from '@/components/industries/industry-utility-grid-section'
import IndustryResidentialSection from '@/components/industries/industry-residential'
import IndustriesPartnersSection from '@/components/industries/industries-partners-section'
import React from 'react'

const Industries = () => {
  return (
   <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
    <IndustriesHeroSection />
    <IndustriesSupplySection />
    <IndustryAutomotiveSection />
    <IndustryRailTransitSection />
    <IndustryCommercialIndustrialSection />
    <IndustryUtilityGridSection />
    <IndustryResidentialSection />
    <IndustriesPartnersSection />
   </main>
  )
}

export default Industries