import React from "react";
import { notFound } from "next/navigation";
import ProductDetailHeroSection from "@/components/products/product-description/product-detail-hero-section";
import ProductNumbersSection from "@/components/products/product-description/product-numbers-section";
import ProductSameFamilySection from "@/components/products/product-description/product-same-family-section";
import { allProductsDetailData, getProductBySlug } from "@/lib/site-data";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs: string[] = [];
  allProductsDetailData.forEach((product) => {
    slugs.push(product.slug);
    if (product.aliases) {
      slugs.push(...product.aliases);
    }
  });
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <ProductDetailHeroSection product={product} />
      <ProductNumbersSection specifications={product.specifications} />
      <ProductSameFamilySection product={product} />
    </main>
  );
}
