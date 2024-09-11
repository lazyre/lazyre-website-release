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
    <label data-cursor="none" className="inline-flex items-center">
      <input className="peer sr-only" {...props} />
      <span
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer border-2 border-transparent hover:border-primary",
          "bg-gray-200 text-gray-700",
          "peer-checked:bg-primary peer-checked:text-foreground",
          "hover:bg-gray-300",
          "peer-checked:hover:bg-primary-foreground",
          className
        )}
      >
        {label}
      </span>
    </label>
  );
}
