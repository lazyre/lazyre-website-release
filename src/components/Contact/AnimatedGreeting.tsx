"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello", // English
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "Hallo", // German
  "Olá", // Portuguese
  "Namaste", // Hindi
  "Konnichiwa", // Japanese
  "Merhaba", // Turkish
  "Salam", // Arabic
  "Nǐ hǎo", // Chinese (Mandarin)
  "Annyeong", // Korean
  "Sawubona", // Zulu
  "Jambo", // Swahili
  "Hej", // Swedish
  "Xin chào", // Vietnamese
  "Guten Tag", // German (Formal)
];

export default function AnimatedGreeting() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full text-foreground p-6 xl:p-20">
      <div className="flex flex-row gap-2 lg:gap-4 items-center">
        <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold ">
          Say
        </h1>
        <div
          aria-live="polite"
          className="h-20 sm:h-28 lg:h-32 overflow-hidden flex justify-center items-center"
        >
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={currentGreeting}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold"
            >
              {greetings[currentGreeting].split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: index * 0.05 },
                  }}
                  exit={{
                    y: 50,
                    opacity: 0,
                    transition: { duration: 0.3, delay: index * -0.05 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="text-base xl:text-4xl">
        <div className="flex justify-between w-full mb-8 pt-8 border-t-2 border-primary">
          <span className="">Email Us:</span>
          <a
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            info@da.com
          </a>
        </div>
        <div className="flex justify-between w-full mb-8 pt-8 border-t-2 border-primary">
          <span className="">Call Us:</span>
          <a
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +1 1234567890
          </a>
        </div>
      </div>
    </div>
  );
}
