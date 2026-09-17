import React from "react";
import { notFound } from "next/navigation";
import BlogDetailSection from "@/components/blogs/blog-detail-section";
import CtaBannerSection from "@/components/blogs/cta-banner-section";
import { blogPostsData } from "@/lib/site-data";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans text-neutral-900 bg-white">
      <BlogDetailSection post={post} />
      <CtaBannerSection />
    </main>
  );
}
