"use client";
import ArrowButton from "@/components/buttons/ArrowButton";
import ContentWrapper from "@/components/ContentWrapper";
import HeroHeading from "@/components/HeroHeading";
import TransitionLink from "@/components/TransitionLink";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useCursor } from "@/contexts/CursorContext";

type BrandItem = {
  id: string;
  title: string;
  services: {
    id: string;
    name: string;
  }[];
  image: string;
  lightAccentColor: string;
};

type Props = {
  brandData: BrandItem[];
};

function AllBrand({ brandData }: Props) {
  const { setCursorText, setCursorType } = useCursor();
  return (
    <ContentWrapper>
      <section className="relative min-h-screen" aria-labelledby="All Brands">
        <HeroHeading
          title="All brands"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan consectetur posuere. Vestibulum fermentum iaculis libero, non venenatis nibh mattis sit amet."
          workHero
        />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brandData.map((brand, index) => (
            <TransitionLink
              key={`${brand}-item-key`}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                setCursorType("text");
                setCursorText("LinkIcon");
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
              href={`/brand/${brand.id}`}
              className={cn(
                "relative flex flex-col items-center w-full min-h-[unset] xl:min-h-[calc(100vh-12rem)]",
                "rounded-xl p-6 xl:p-12 group cursor-pointer overflow-hidden",
                "bg-foreground text-background"
              )}
              aria-labelledby={`brand-title-${brand.id}`}
            >
              <div className="flex flex-col items-center w-full xl:h-full xl:justify-center">
                <div className="relative w-full rounded-xl h-[250px] xl:h-[500px] overflow-hidden">
                  <Image
                    src={brand.image}
                    fill
                    alt={`${brand.title} brand image`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full">
                  <h3
                    id={`brand-title-${brand.id}`}
                    className="text-3xl xl:text-5xl mt-6 font-bold"
                  >
                    {brand.title}
                  </h3>
                  <p className="mt-6 xl:hidden">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta laboriosam consequuntur architecto asperiores
                    perspiciatis dignissimos temporibus eius eum vel est maxime
                    tempore voluptates animi quo ut, sint repellendus totam
                    libero!
                  </p>
                  <p className="mt-6 2xl:text-lg hidden xl:block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta laboriosam consequuntur architecto asperiores
                    perspiciatis dignissimos temporibus eius eum vel est maxime
                    tempore voluptates animi quo ut, sint repellendus totam
                    libero! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eaque ipsa voluptatem explicabo aut rem inventore
                    tempora sed magnam veritatis, similique omnis, porro quidem
                    laborum ullam, praesentium fugiat soluta ipsam quod!
                  </p>
                  <ul className="mt-6">
                    {brand.services.map((service) => (
                      <li
                        key={service.id}
                        className="text-[var(--light-accent-color)]"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                  <ArrowButton
                    buttonText="Know More"
                    arrowColor={`text-[${brand.lightAccentColor}]`}
                  />
                </div>
              </div>
              <div
                className="hidden xl:block absolute h-0 w-0 left-12 bottom-12 rounded-full group-hover:w-96 group-hover:h-96 group-hover:-left-24 group-hover:-bottom-24 group-hover:opacity-80 bg-blend-subtract transition-all"
                style={{ backgroundColor: brand.lightAccentColor }}
              />
            </TransitionLink>
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
}

export default AllBrand;
