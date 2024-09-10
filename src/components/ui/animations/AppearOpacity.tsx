"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type AppearOpacityProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  fromDirection?: "top" | "right" | "bottom" | "left" | "";
};

export default function AppearOpacity({
  children,
  duration = 0.5,
  delay = 0,
  fromDirection = "",
}: AppearOpacityProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    switch (fromDirection) {
      case "top":
        return { y: -20 };
      case "right":
        return { x: 20 };
      case "bottom":
        return { y: 20 };
      case "left":
        return { x: -20 };
      default:
        return {};
    }
  };

  const initialState = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 0, ...getInitialPosition() };

  const animateState = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initialState}
      animate={animateState}
      transition={shouldReduceMotion ? { duration: 0 } : { duration, delay }}
    >
      {children}
    </motion.div>
  );
}
