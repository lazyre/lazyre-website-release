"use client";

import React, { useCallback, useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useData from "@/hooks/useData";
import { blogDataType } from "@/types/types";
import { Button } from "@/components/ui/button";

export default function BlogList() {
  const { data, isLoading, error } = useData<"blog">("blog");
  const [accordionPosition, setAccordionPosition] = useState(0);
  const [accordionStatus, setAccordionStatus] = useState<
    "start" | "middle" | "end"
  >("start");

  const panelWidth = 424; // 400px + 24px gap
  const blogData = Array.isArray(data) ? data : [];
  const numOfBlog = blogData.length;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const numOfPanelsVisible = Math.floor(windowWidth / panelWidth);
  const maxPosition = Math.max(
    0,
    (numOfBlog - numOfPanelsVisible) * panelWidth
  );

  const onSliderButtonClick = useCallback(
    (direction: "left" | "right") => {
      setAccordionPosition((prevPosition) => {
        const newPosition =
          direction === "left"
            ? Math.max(0, prevPosition - panelWidth)
            : Math.min(maxPosition, prevPosition + panelWidth);

        setAccordionStatus(
          newPosition === 0
            ? "start"
            : newPosition === maxPosition
            ? "end"
            : "middle"
        );

        return newPosition;
      });
    },
    [maxPosition, panelWidth]
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setAccordionPosition(0);
      setAccordionStatus("start");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="mb-24 overflow-hidden">
      <motion.ul
        className="relative flex gap-6 px-6 sm:px-12 xl:px-24"
        animate={{ translateX: -accordionPosition }}
      >
        {blogData.map((blog: blogDataType) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </motion.ul>
      <div className="flex gap-6 justify-end items-center pt-12 pr-6 sm:pr-12 xl:pr-36">
        <Button
          onClick={() => onSliderButtonClick("left")}
          disabled={accordionStatus === "start"}
          aria-label="Previous blog posts"
          variant="outline"
          size="icon"
          className="h-24 w-24 rounded-full"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
        </Button>
        <Button
          onClick={() => onSliderButtonClick("right")}
          disabled={accordionStatus === "end"}
          aria-label="Next blog posts"
          variant="outline"
          size="icon"
          className="h-24 w-24 rounded-full"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
