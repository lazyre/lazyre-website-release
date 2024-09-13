"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

type HeroHeadingProps = {
  title: string;
  subtitle: string;
  workHero?: boolean;
  className?: string;
};

export default function HeroHeading({
  title,
  subtitle,
  workHero = false,
  className,
}: HeroHeadingProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={targetRef}
      className={cn(
        "min-h-[80vh] w-full flex items-center justify-center overflow-hidden pointer-events-none",
        className
      )}
      aria-labelledby="hero-title"
    >
      {isMounted && (
        <motion.div
          className={cn(
            "flex flex-col justify-center gap-6 sm:gap-8 md:gap-12 w-full px-4 sm:px-6 lg:px-8 max-w-7xl",
            workHero
              ? "flex-col-reverse"
              : "lg:flex-row lg:justify-between lg:items-center"
          )}
          style={{ opacity, scale, position }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            id="hero-title"
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
              workHero ? "lg:w-full" : "lg:w-1/2"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6",
              workHero ? "lg:w-full" : "lg:w-1/2"
            )}
          >
            {subtitle}
          </p>
        </motion.div>
      )}
    </section>
  );
}
