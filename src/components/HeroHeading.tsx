"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";

type HeroHeadingProps = {
  title: string;
  subtitle: string;
  workHero?: boolean;
};

export default function HeroHeading({
  title,
  subtitle,
  workHero = false,
}: HeroHeadingProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 ? "relative" : "fixed"
  );

  // useEffect(() => {
  //   if (targetRef.current) {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("in-view");
  //         } else {
  //           entry.target.classList.remove("in-view");
  //         }
  //       },
  //       { threshold: 0.1 }
  //     );
  //     observer.observe(targetRef.current);
  //     return () => observer.disconnect();
  //   }
  // }, []);

  return (
    <section
      ref={targetRef}
      className="h-[80vh] w-full flex"
      aria-labelledby="hero-title"
    >
      <motion.div
        className={cn(
          "flex h-full top-1/2 flex-col justify-center gap-12 p-4",
          workHero
            ? "flex-col-reverse"
            : "xl:flex-row xl:justify-between xl:items-center"
        )}
        style={{ opacity, scale, y: "-60%", position }}
      >
        <h1
          id="hero-title"
          className={cn(
            "text-4xl sm:text-5xl xl:text-7xl font-bold",
            workHero ? "xl:w-full" : "xl:w-1/2"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-lg sm:text-xl xl:mt-0 w-full sm:w-[80%]",
            workHero ? "xl:w-full" : "xl:w-1/2"
          )}
        >
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
