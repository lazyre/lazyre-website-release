"use client";

import React from "react";
import BlogItem from "./BlogItem";
import useData from "@/hooks/useData";
import { blogDataType } from "@/types/types";
import Carousel from "@/components/Carousel";

export default function BlogList() {
  const { data, isLoading, error } = useData<"blog">("blog");

  const blogData = Array.isArray(data) ? data : [];

  if (isLoading) {
    return <div className="text-center py-12">Loading blog posts...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        Error loading blog posts: {error.message}
      </div>
    );
  }

  if (!blogData || blogData.length === 0) {
    return <div className="text-center py-12">No blog posts available.</div>;
  }

  return (
    <Carousel>
      {blogData.map((blog: blogDataType) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </Carousel>
  );
}
