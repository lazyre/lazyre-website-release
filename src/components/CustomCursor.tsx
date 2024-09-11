"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCursor } from "../contexts/CursorContext";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

type CursorIcon = "UpIcon" | "DownIcon" | "LeftIcon" | "RightIcon" | "LinkIcon";

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

  const allowedIcons: CursorIcon[] = [
    "UpIcon",
    "DownIcon",
    "LeftIcon",
    "RightIcon",
    "LinkIcon",
  ];

  const iconMap: Record<CursorIcon, React.ReactElement> = {
    UpIcon: <ChevronUp className="w-6 h-6" />,
    DownIcon: <ChevronDown className="w-6 h-6" />,
    LeftIcon: <ChevronLeft className="w-6 h-6" />,
    RightIcon: <ChevronRight className="w-6 h-6" />,
    LinkIcon: <ArrowUpRight className="w-6 h-6" />,
  };
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
            {allowedIcons.includes(cursorText as CursorIcon)
              ? iconMap[cursorText as CursorIcon]
              : cursorText}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
