import React from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CustomInputButton({
  label,
  className,
  ...props
}: CustomInputProps) {
  return (
    <label className="inline-flex items-center">
      <input className="peer sr-only" {...props} />
      <span
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
          "bg-gray-200 text-gray-700",
          "peer-checked:bg-primary peer-checked:text-white",
          "hover:bg-gray-300",
          "peer-checked:hover:bg-purple-700",
          className
        )}
      >
        {label}
      </span>
    </label>
  );
}
