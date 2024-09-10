"use client";
import React, { useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroButton from "./HeroButton";
import { useTheme } from "next-themes";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  return (
    <section ref={heroRef} className="relative min-h-screen w-full">
      {theme === "dark" ? (
        <>
          {/* <div className="absolute inset-0 z-20 bg-gradient-to-b xl:bg-gradient-to-r from-black/60 via-black/30 to-50% to-transparent" /> */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-black/30 to-50% xl:to-20% to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-white/30 to-20% to-transparent" />
      )}
      <div className="z-30 absolute h-full flex flex-col justify-between pt-32 xl:pt-0 pb-6 px-6 md:px-12 xl:justify-center w-full ">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-center font-bold uppercase xl:text-left text-white drop-shadow ">
          Your Digital Presence
          <span
            className={`block ${
              theme === "dark" ? "text-primary" : "text-foreground"
            } `}
          >
            Redefined
          </span>
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
