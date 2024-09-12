"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ParallaxTextProps = {
  baseVelocity: number;
  children: React.ReactNode;
  text: string;
};

export default function ParallaxText({
  baseVelocity,
  children,
  text,
}: ParallaxTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const maxWrap = text.length < 15 ? -32.5 : -40;
  const timesToRepeat = text.length < 15 ? 8 : 5;

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, maxWrap, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    if (shouldReduceMotion) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap"
      aria-hidden="true"
    >
      <motion.div
        className="flex flex-nowrap whitespace-nowrap [&>span]:block [&>span]:mr-12"
        style={{ x: shouldReduceMotion ? 0 : x }}
      >
        {Array.from({ length: timesToRepeat }).map((_, index) => (
          <span key={index}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}
