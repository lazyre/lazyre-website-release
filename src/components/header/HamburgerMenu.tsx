"use client";

import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: object;
}

export default function HamburgerMenu({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "currentColor",
  transition = {},
  lineProps = {},
  ...props
}: Props) {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 2 },
  };
  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -2 },
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      aria-hidden="true"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      role="img"
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        stroke={color}
        strokeWidth={strokeWidth as number}
        vectorEffect="non-scaling-stroke"
        initial="closed"
        animate={variant}
        transition={transition}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        stroke={color}
        strokeWidth={strokeWidth as number}
        vectorEffect="non-scaling-stroke"
        initial="closed"
        animate={variant}
        transition={transition}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        stroke={color}
        strokeWidth={strokeWidth as number}
        vectorEffect="non-scaling-stroke"
        initial="closed"
        animate={variant}
        transition={transition}
        {...lineProps}
      />
    </motion.svg>
  );
}
