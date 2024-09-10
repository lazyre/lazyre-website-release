"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../contexts/TransitionContext";

export default function FullScreenTransition() {
  const { isTransitioning } = useTransition();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-background z-[200]"
        />
      )}
    </AnimatePresence>
  );
}
