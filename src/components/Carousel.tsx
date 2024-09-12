"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResizeObserver } from "@/hooks/useResizeObserver";

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [firstItemRef, firstItemSize] = useResizeObserver<HTMLLIElement>();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === scrollContainer.firstElementChild) {
            setCanScrollLeft(!entry.isIntersecting);
          }
          if (entry.target === scrollContainer.lastElementChild) {
            setCanScrollRight(!entry.isIntersecting);
          }
        });
      },
      { root: scrollContainer, threshold: 1 }
    );

    if (scrollContainer.firstElementChild) {
      observer.observe(scrollContainer.firstElementChild);
    }
    if (scrollContainer.lastElementChild) {
      observer.observe(scrollContainer.lastElementChild);
    }

    return () => observer.disconnect();
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount =
        direction === "left" ? -firstItemSize.width : firstItemSize.width;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <ul
        ref={scrollContainerRef}
        className="flex gap-6  overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {React.Children.map(children, (child, index) => (
          <li ref={index === 0 ? firstItemRef : null} className="snap-start">
            {child}
          </li>
        ))}
      </ul>
      <div className="flex gap-6 justify-end items-center pt-12 pr-6 sm:pr-12 xl:pr-36">
        <Button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous items"
          variant="outline"
          size="icon"
          className="h-24 w-24 rounded-full"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
        </Button>
        <Button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next items"
          variant="outline"
          size="icon"
          className="h-24 w-24 rounded-full"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
        </Button>
      </div>
    </>
  );
}
