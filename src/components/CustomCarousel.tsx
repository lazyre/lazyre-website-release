"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  loop?: boolean;
  navControls?: boolean;
  largeItems?: number;
  smallItems?: number;
  basis?: "BlogBasis" | "ImagePortraitBasis" | "ImageLandscapeBasis";
};

export default function CustomCarousel({
  children,
  loop = true,
  basis,
  navControls = true,
}: Props) {
  const { setCursorSticky, setCursorText, setCursorType } = useCursor();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setPrevBtnDisabled(!api.canScrollPrev());
      setNextBtnDisabled(!api.canScrollNext());
    });
  }, [api]);

  return (
    <>
      <div
        onMouseEnter={() => {
          setCursorType("text");
          setCursorText("Drag");
        }}
        onMouseLeave={() => {
          setCursorType("default");
          setCursorText("");
        }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: loop,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {React.Children.map(children, (child, index) => (
              <CarouselItem
                className={cn(
                  "ml-2 md:ml-4",
                  basis === "BlogBasis"
                    ? "basis-full md:basis-1/2 xl:basis-1/4"
                    : basis === "ImagePortraitBasis"
                    ? "basis-1/2 xl:basis-1/4"
                    : basis === "ImageLandscapeBasis"
                    ? "basis-full xl:basis-1/2"
                    : ""
                )}
              >
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {navControls && (
        <div className="flex gap-6 justify-end items-center pt-12 pr-6 sm:pr-12 xl:pr-36">
          <Button
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              setCursorType("text");
              setCursorText("LeftIcon");
              setCursorSticky(true, e.currentTarget);
            }}
            onMouseLeave={() => {
              setCursorType("default");
              setCursorText("");
              setCursorSticky(false);
            }}
            onClick={() => api?.scrollTo(current - 1)}
            disabled={prevBtnDisabled}
            aria-label="Previous items"
            variant="outline"
            size="icon"
            className="h-12 w-12 xl:h-24 xl:w-24 rounded-full border-2 border-foreground"
          >
            <ChevronLeft className="h-4 w-4 xl:h-8 xl:w-8" aria-hidden="true" />
          </Button>
          <Button
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              setCursorType("text");
              setCursorText("RightIcon");
              setCursorSticky(true, e.currentTarget);
            }}
            onMouseLeave={() => {
              setCursorType("default");
              setCursorText("");
              setCursorSticky(false);
            }}
            onClick={() => api?.scrollTo(current + 1)}
            disabled={nextBtnDisabled}
            aria-label="Next items"
            variant="outline"
            size="icon"
            className="h-12 w-12 xl:h-24 xl:w-24 rounded-full border-2 border-foreground"
          >
            <ChevronRight
              className="h-4 w-4 xl:h-8 xl:w-8"
              aria-hidden="true"
            />
          </Button>
        </div>
      )}
    </>
  );
}
