"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary ${
          theme === "dark" ? "bg-primary" : "bg-gray-200"
        }`}
        animate={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }}
      >
        <motion.div
          className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center"
          animate={{
            x: theme === "dark" ? 32 : 0,
            backgroundColor: theme === "dark" ? "#fff" : "#000",
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-background" />
          ) : (
            <Sun className="h-4 w-4 text-background" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
