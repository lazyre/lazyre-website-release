"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { brandDataType } from "@/types/types";
import TransitionLink from "@/components/TransitionLink";
import ArrowButton from "@/components/buttons/ArrowButton";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface BrandItemProps extends brandDataType {
  setBrandInView: React.Dispatch<React.SetStateAction<string>>;
}

export default function BrandItem({
  id,
  title,
  image,
  services,
  setBrandInView,
  lightAccentColor,
}: BrandItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { theme } = useTheme();

  useEffect(() => {
    if (isInView) {
      setBrandInView(id);
    }
  }, [isInView, id, setBrandInView]);

  return (
    <TransitionLink
      data-cursor="none"
      href={`/brand/${id}`}
      ref={ref}
      className={cn(
        "relative flex flex-col items-center w-full min-h-[unset] xl:min-h-[calc(100vh-12rem)]",
        theme === "dark" ? "bg-black/50" : "bg-foreground text-background",
        "rounded-xl p-6 xl:p-12 group cursor-pointer overflow-hidden"
      )}
      aria-labelledby={`brand-title-${id}`}
    >
      <div className="flex flex-col items-center w-full xl:h-full xl:justify-center">
        <div className="relative w-full rounded-xl h-[250px] xl:hidden overflow-hidden">
          <Image
            src={image}
            fill
            alt={`${title} brand image`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="w-full">
          <h3
            id={`brand-title-${id}`}
            className="text-3xl xl:text-5xl mt-6 font-bold"
          >
            {title}
          </h3>
          <p className="mt-6 xl:hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            laboriosam consequuntur architecto asperiores perspiciatis
            dignissimos temporibus eius eum vel est maxime tempore voluptates
            animi quo ut, sint repellendus totam libero!
          </p>
          <p className="mt-6 2xl:text-lg hidden xl:block">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            laboriosam consequuntur architecto asperiores perspiciatis
            dignissimos temporibus eius eum vel est maxime tempore voluptates
            animi quo ut, sint repellendus totam libero! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eaque ipsa voluptatem explicabo
            aut rem inventore tempora sed magnam veritatis, similique omnis,
            porro quidem laborum ullam, praesentium fugiat soluta ipsam quod!
          </p>
          <ul className="mt-6">
            {services.map((service) => (
              <li
                key={service.id}
                className="text-[var(--light-accent-color)]"
                style={
                  {
                    "--light-accent-color": lightAccentColor,
                  } as React.CSSProperties
                }
              >
                {service.name}
              </li>
            ))}
          </ul>
          <ArrowButton
            buttonText="Know More"
            arrowColor={`text-[${lightAccentColor}]`}
          />
        </div>
      </div>
      <div
        className="hidden xl:block absolute h-12 w-12 left-12 bottom-12 rounded-full group-hover:w-96 group-hover:h-96 group-hover:-left-24 group-hover:-bottom-24 group-hover:opacity-80 bg-blend-subtract transition-all"
        style={{ backgroundColor: lightAccentColor }}
      />
    </TransitionLink>
  );
}
