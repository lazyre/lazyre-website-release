"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "Olá",
  "Namaste",
  "Konnichiwa",
  "Merhaba",
  "Salam",
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
      <div className="flex flex-row">
        <h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold mb-8">Say</h1>
        <div aria-live="polite" className="h-32 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={currentGreeting}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="ml-4 text-4xl lg:text-6xl xl:text-8xl font-bold"
            >
              {greetings[currentGreeting].split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
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
