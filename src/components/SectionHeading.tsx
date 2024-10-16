import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Quote } from "lucide-react";
import ArrowButton from "./buttons/ArrowButton";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

interface SectionHeadingProps {
  title: string;
  titleHighlight?: number;
  subtitle: string;
  titleId?: string;
  subtitleId?: string;
  ctaButton?: string;
  ctaLink?: string;
  workHeading?: boolean;
  stackContent?: boolean;
  testimonialAuthor?: string;
  authorDesignation?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  titleHighlight,
  subtitle,
  titleId,
  subtitleId,
  ctaButton,
  ctaLink,
  workHeading,
  stackContent,
  testimonialAuthor,
  authorDesignation,
}) => {
  return (
    <section
      className={cn(
        " flex items-center",
        workHeading ? "justify-start" : "justify-center"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full",
          workHeading ? "" : "xl:justify-between",
          stackContent ? "" : "xl:flex-row xl:items-start"
        )}
      >
        <div className={cn("w-full ", workHeading ? "xl:w-1/4" : "xl:w-1/2")}>
          <h1
            id={titleId}
            className={cn(
              workHeading
                ? "text-lg sm:text-xl md:text-2xl opacity-80"
                : "text-5xl lg:text-6xl xl:text-7xl font-bold"
            )}
          >
            {titleHighlight ? (
              <>
                {title.split(" ").slice(0, titleHighlight).join(" ")}
                <span className="block text-primary">
                  {title.split(" ").slice(titleHighlight).join(" ")}
                </span>
              </>
            ) : (
              title
            )}
          </h1>

          {ctaButton && ctaLink && (
            // <div className="mt-4 sm:mt-6 group">
            //   <ArrowButton buttonText={ctaButton} />
            // </div>
            <TransitionLink
              href={ctaLink}
              className="group inline-flex items-center mt-4 text-2xl  sm:mt-6 hover:text-primary transition-colors"
            >
              <span className="underline decoration-primary">{ctaButton}</span>
              <span className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="text-primary" aria-hidden="true" />
              </span>
            </TransitionLink>
          )}
        </div>
        <div
          id={subtitleId}
          className={cn(
            "text-base sm:text-lg md:text-xl",
            workHeading ? "xl:w-3/4" : "xl:w-1/2"
          )}
        >
          {testimonialAuthor && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                - {testimonialAuthor.toUpperCase()}
                <span className="opacity-50">
                  , {authorDesignation?.split(",")[0]}
                </span>
              </h3>
            </div>
          )}
          <div>
            {testimonialAuthor && (
              <Quote
                className="inline-block align-top mr-2 opacity-50"
                aria-hidden="true"
              />
            )}
            <p className="inline">{subtitle}</p>
            {testimonialAuthor && (
              <Quote
                className="inline-block align-top ml-2 opacity-50"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeading;
