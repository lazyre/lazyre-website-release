"use client";

import { motion } from "framer-motion";
import React, { RefObject, useCallback, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

interface HeroButtonProps {
  heroRef: RefObject<HTMLElement>;
}

const scrollBackgroundMotion = {
  initial: {},
  hover: {
    scale: 0.3,
    borderOpacity: 0,
    backgroundColor: "#00ABD5",
  },
};

const scrollArrowMotion = {
  initial: {},
  hover: {
    translateY: "100%",
  },
};

const scrollArrowHoverMotion = {
  initial: { translateY: "-100%" },
  hover: {
    translateY: "0%",
  },
};

export default function HeroButton({ heroRef }: HeroButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollSection = useCallback(() => {
    if (heroRef.current) {
      const { height } = heroRef.current.getBoundingClientRect();
      window.scrollTo({
        top: height,
        behavior: "smooth",
      });
    }
  }, [heroRef]);

  return (
    <div ref={ref}>
      <motion.button
        className="hidden xl:block z-50 absolute bottom-0 left-0 h-[30vh] w-[30vh] cursor-pointer ml-[-3.5rem]"
        whileHover="hover"
        initial="initial"
        onClick={scrollSection}
        aria-label="Scroll to discover more"
      >
        <motion.div
          className="rounded-full absolute bottom-0 left-0 h-full w-full bg-transparent border-2 border-primary border-opacity-100"
          variants={scrollBackgroundMotion}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative overflow-hidden h-14 w-14">
            <motion.div
              className="h-14 flex items-center justify-center"
              variants={scrollArrowMotion}
              aria-hidden="true"
            >
              <ChevronDown className="h-10 w-10 text-foreground" />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 h-14 w-14 flex items-center justify-center"
              variants={scrollArrowHoverMotion}
              aria-hidden="true"
            >
              <ChevronDown className="h-10 w-10 text-foreground" />
            </motion.div>
          </div>
        </div>
      </motion.button>
      <div className=" absolute bottom-0 w-full xl:hidden mb-12 flex items-center justify-center z-30">
        <Card className=" border-0 shadow-none bg-transparent">
          <CardHeader className="p-3">
            <p className="text-xl text-center">
              We create impactful digital experiences & deliver digital products
            </p>
          </CardHeader>
          <CardFooter className="flex justify-center p-0 pb-3">
            <Button onClick={scrollSection}>Discover Us</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
