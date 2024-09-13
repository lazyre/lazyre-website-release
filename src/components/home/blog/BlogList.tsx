"use client";

import React from "react";
import BlogItem from "./BlogItem";
import { blogDataType } from "@/types/types";
import { getData } from "@/lib/getData";
import CustomCarousel from "@/components/CustomCarousel";

export default function BlogList() {
  const blogData = getData("blog") as blogDataType[];

  return (
    <div className="mb-24">
      <CustomCarousel loop={false} basis="BlogBasis">
        {blogData.map((blog: blogDataType) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </CustomCarousel>
    </div>
  );
}
