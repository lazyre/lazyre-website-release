"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPopulated, setIsPopulated] = useState(false);

  useEffect(() => {
    setIsPopulated(!!props.value);
  }, [props.value]);

  return (
    <div className="relative h-16">
      <Input
        {...props}
        ref={ref}
        id={id}
        className="h-16 pt-4 pb-2 px-4 border-b-2 border-slate-200 bg-background peer"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          if (props.onBlur) props.onBlur(e);
        }}
        onChange={(e) => {
          setIsPopulated(!!e.target.value);
          if (props.onChange) props.onChange(e);
        }}
      />
      <Label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 ${
          isFocused || isPopulated
            ? "top-2 text-xs text-primary"
            : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
        } peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary`}
      >
        {label}
      </Label>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";
