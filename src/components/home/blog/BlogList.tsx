"use client";

import React from "react";
import BlogItem from "./BlogItem";
import { blogDataType } from "@/types/types";
import Carousel from "@/components/Carousel";
import { getData } from "@/lib/getData";

export default function BlogList() {
  const blogData = getData("blog") as blogDataType[];

  return (
    <div className="mb-24">
      <Carousel>
        {blogData.map((blog: blogDataType) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </Carousel>
    </div>
  );
}
