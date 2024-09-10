import React from "react";
import HeroBackground from "./HeroBackground";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-20 bg-gradient-to-b xl:bg-gradient-to-r from-black/60 via-black/30 to-50% to-transparent" />
      <div className="z-30 absolute h-full flex flex-col justify-between pt-32 xl:pt-0 pb-6 px-6 md:px-12 xl:justify-center w-full ">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-center font-bold uppercase xl:text-left ">
          Your Digital Presence
          <span className="block text-primary">Redefined</span>
        </h1>
        <p className="hidden xl:block text-xl text-center xl:text-left xl:text-2xl">
          We create impactful digital experiences & deliver digital products
        </p>
      </div>
      <HeroBackground />
      <HeroButton />
    </section>
  );
}
