"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const logoSets = [
  [
    "/images/client/almishkal-logo.svg",
    "/images/client/bw-logo.svg",
    "/images/client/netflix-logo.svg",
  ],
  [
    "/images/client/kupdae-logo.svg",
    "/images/client/toys-r-us-logo.svg",
    "/images/client/byte-logo.svg",
  ],
  [
    "/images/client/mc-logo.svg",
    "/images/client/aeon-logo.svg",
    "/images/client/midtec-logo.svg",
  ],
  [
    "/images/client/netflix-logo.svg",
    "/images/client/almishkal-logo.svg",
    "/images/client/byte-logo.svg",
  ],
  [
    "/images/client/bw-logo.svg",
    "/images/client/kupdae-logo.svg",
    "/images/client/mc-logo.svg",
  ],
  [
    "/images/client/toys-r-us-logo.svg",
    "/images/client/midtec-logo.svg",
    "/images/client/aeon-logo.svg",
  ],
  [
    "/images/client/byte-logo.svg",
    "/images/client/netflix-logo.svg",
    "/images/client/kupdae-logo.svg",
  ],
  [
    "/images/client/midtec-logo.svg",
    "/images/client/almishkal-logo.svg",
    "/images/client/bw-logo.svg",
  ],
];

const ClientLogos: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark"; // Default to 'light' for SSR

  // Start with a fixed initial state
  const [currentLogoArray, setCurrentLogoArray] = useState<string[]>(() =>
    logoSets.map((set) => set[0])
  );

  const updateLogos = useCallback(() => {
    setCurrentLogoArray((prevLogos) =>
      prevLogos.map((logo, index) => {
        const set = logoSets[index];
        let newLogo;
        do {
          newLogo = set[Math.floor(Math.random() * set.length)];
        } while (newLogo === logo);
        return newLogo;
      })
    );
  }, []);

  useEffect(() => {
    // Randomize logos on initial client-side render
    updateLogos();

    const interval = setInterval(updateLogos, 3000);
    return () => clearInterval(interval);
  }, [updateLogos]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-center items-center sm:gap-12 lg:gap-24 xl:gap-12 xl:px-24 md:grid-cols-3 xl:grid-cols-4 rounded-xl p-6 md:p-8 lg:p-12",
        currentTheme === "dark" ? "bg-black/50" : "bg-foreground"
      )}
    >
      {currentLogoArray.map((logo, index) => (
        <div
          key={index}
          className={`relative w-full max-w-[150px] h-[100px] mx-auto ${
            index >= 6 ? "md:hidden xl:block" : ""
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className="invert opacity-75"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;
