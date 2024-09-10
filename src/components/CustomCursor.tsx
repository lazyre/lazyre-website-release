"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "../contexts/CursorContext";

export default function CustomCursor() {
  const {
    isVisible,
    isActive,
    isPointer,
    cursorText,
    isTextVisible,
    cursorXSpring,
    cursorYSpring,
  } = useCursor();

  return (
    <motion.div
      className={cn(
        "lz-cursor",
        isVisible ? "lz-cursor-visible" : "lz-cursor-hidden",
        isActive && "lz-cursor-active",
        isPointer && "lz-cursor-pointer",
        isTextVisible && "lz-cursor-text"
      )}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      aria-hidden="true"
    >
      <AnimatePresence>
        {isTextVisible && !isActive && (
          <motion.div
            className="absolute font-bold text-sm w-12 h-12 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
