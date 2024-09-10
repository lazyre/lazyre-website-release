"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const startTransition = useCallback(
    (href: string) => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500); // Adjust this timing to match your exit animation duration
      }, 500); // Adjust this timing to match your enter animation duration
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}
