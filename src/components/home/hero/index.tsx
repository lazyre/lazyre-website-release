"use client";

import React, { useRef, useEffect, useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroButton from "./HeroButton";
import { useTheme } from "next-themes";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark";

  return (
    <section ref={heroRef} className="relative min-h-screen w-full">
      <div
        className={`absolute inset-0 z-20 bg-gradient-to-t from-background ${
          currentTheme === "dark"
            ? "via-black/30 to-50% xl:to-20%"
            : "via-white/30 to-20%"
        } to-transparent`}
      />
      <div className="z-30 absolute h-full flex flex-col justify-between pt-32 xl:pt-0 pb-6 px-6 md:px-12 xl:justify-center w-full ">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-center font-bold uppercase xl:text-left  drop-shadow ">
          Your Digital Presence
          <span className={`block text-primary`}>Redefined</span>
        </h1>
        <p className="hidden xl:block text-xl text-center xl:text-left xl:text-2xl ">
          We create impactful digital experiences & deliver digital products
        </p>
      </div>
      <HeroBackground />
      <HeroButton heroRef={heroRef} />
    </section>
  );
}
