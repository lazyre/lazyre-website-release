"use client";

import React from "react";
import BlogItem from "./BlogItem";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedArticles } from "@/utils/api";
import CustomCarousel from "@/components/CustomCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogList() {
  const {
    data: blogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featuredArticles"],
    queryFn: getFeaturedArticles,
  });
  if (error) return <></>;

  return (
    <div className="mb-24">
      <CustomCarousel loop={false} basis="BlogBasis">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <BlogcardSkeleton key={index} />
            ))
          : blogData?.map((blog) => (
              <BlogItem
                key={blog.id}
                id={blog.article.slug}
                image={
                  blog.article.featured_image_url
                    ? blog.article.featured_image_url
                    : ""
                }
                title={blog.article.title}
                category={blog.category.name}
              />
            ))}
      </CustomCarousel>
    </div>
  );
}

function BlogcardSkeleton() {
  return (
    <div className="relative rounded-xl">
      <Skeleton className="h-80 lg:h-96 xl:h-[500px]" />
    </div>
  );
}
