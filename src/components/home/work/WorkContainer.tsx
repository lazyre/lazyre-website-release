"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useData from "@/hooks/useData";
import ArrowButton from "@/components/buttons/ArrowButton";
import { workDataType } from "@/types/types";
import { MoreWorkButton } from "./MoreWorkButton";
import { useIsLarge } from "@/hooks/useMediaQuery";
import TransitionLink from "@/components/TransitionLink";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function WorkContainer() {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevSelectedWork, setPrevSelectedWork] = useState<string | null>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const { data } = useData("work");
  const workData = (data as workDataType[]) || [];
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

  const selectedWorkDetails =
    workData.find((work) => work.id === selectedWork) || null;
  const prevWorkDetails =
    workData.find((work) => work.id === prevSelectedWork) || null;

  useEffect(() => {
    if (activeIndex === 0) {
      setSelectedWork(null);
    } else {
      setSelectedWork(workData[activeIndex - 1].id);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (selectedWork !== prevSelectedWork) {
      setPrevSelectedWork(selectedWork);
    }
  }, [selectedWork, prevSelectedWork]);
  useEffect(() => {
    if (selectedWork !== prevSelectedWork) {
      setPrevSelectedWork(selectedWork);
    }
  }, [selectedWork, prevSelectedWork]);

  const isBig = useIsLarge();

  useEffect(() => {
    if (!isBig) setActiveIndex(0);
  }, [isBig]);

  const moveCarousel = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(workData.length, activeIndex + 1);
    setActiveIndex(newIndex);

    if (carouselRef.current) {
      const itemWidth = 298; // 250px width + 48px gap
      carouselRef.current.style.transform = `translateX(-${
        newIndex * itemWidth
      }px)`;
    }
  };
  return (
    <section
      className={cn(
        "flex flex-col min-h-full xl:pl-32 relative overflow-hidden bg-transparent",
        currentTheme === "dark" ? "xl:bg-black/50" : "xl:bg-foreground"
      )}
    >
      <AnimatePresence mode="wait">
        {selectedWorkDetails && (
          <motion.div
            key={`work-${selectedWork}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden z-10 xl:block absolute inset-0 h-full w-full"
          >
            <Image
              src={selectedWorkDetails.image}
              fill
              alt={selectedWorkDetails.title}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-black from-20% via-black/60 to-black/30" />
          </motion.div>
        )}
      </AnimatePresence>
      {prevWorkDetails && (
        <div className="hidden z-0 xl:block absolute inset-0 h-full w-full">
          <Image
            src={prevWorkDetails.image}
            fill
            alt={prevWorkDetails.title}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 w-full bg-gradient-to-r from-black from-20% via-black/60 to-black/30" />
        </div>
      )}
      {!selectedWorkDetails && !prevWorkDetails && (
        <div className="hidden z-0 xl:block absolute inset-0 h-full w-full">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            fill
            alt="Cover Image"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          /> */}
          <div className="absolute inset-0 w-full bg-gradient-to-r from-black from-20% via-black/60 to-black/30" />
        </div>
      )}
      <div className=" items-center flex flex-row flex-1 relative z-20">
        <div className="w-full flex flex-col xl:flex-row xl:pb-0 xl:pr-24">
          <div className="mb-12 xl:mb-0 relative flex-shrink-0 xl:w-[40%] xl:p-12">
            {selectedWorkDetails ? (
              <Link
                href={`/work/${selectedWorkDetails.id}`}
                className="flex flex-col w-full xl:h-full xl:justify-center group"
              >
                <h2
                  className={cn(
                    "text-3xl mt-6 xl:text-4xl font-bold",
                    currentTheme === "dark" ? "" : "text-background"
                  )}
                >
                  {selectedWorkDetails.title}
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={cn(
                    "mt-6",
                    currentTheme === "dark" ? "" : "text-background"
                  )}
                >
                  {selectedWorkDetails.overview.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={cn(
                    "mt-6 w-full flex flex-wrap text-lg text-text/80 font-light list-none",
                    currentTheme === "dark" ? "" : "text-background"
                  )}
                >
                  {selectedWorkDetails.tags.slice(0, 4).map((tag, index) => (
                    <li
                      key={index}
                      className="relative flex pr-5 opacity-80 after:content-['|'] after:ml-2.5 last:after:content-none"
                    >
                      {tag}
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-6 flex items-center text-primary group-hover:underline"
                >
                  <ArrowButton buttonText="Know More" />
                </motion.div>
              </Link>
            ) : (
              <div className="flex flex-col w-full xl:h-full xl:justify-center">
                <h2
                  className={cn(
                    "text-5xl 2xl:text-7xl font-bold",
                    currentTheme === "dark" ? "" : "xl:text-background"
                  )}
                >
                  Unveiling Our Digital Legacy, Inspiring
                  <span className="block text-primary">Future Ventures</span>
                </h2>
                <p
                  className={cn(
                    "mt-6 text-xl max-w-sm md:max-w-md lg:max-w-lg",
                    currentTheme === "dark" ? "" : "xl:text-background"
                  )}
                >
                  Discover our digital portfolio, a testament to our expertise
                  in bleeding-edge technologies. From captivating designs to
                  groundbreaking software solutions, our past projects showcase
                  our commitment to innovation. Explore the realm of
                  possibilities we've created for our clients and be inspired
                  for your own digital journey.
                </p>
              </div>
            )}
          </div>
          <div className="xl:flex-shrink-0 xl:min-w-[60%] xl:overflow-hidden py-12 xl:py-0">
            <div className="xl:flex xl:flex-start xl:gap-6">
              <motion.ul
                ref={carouselRef}
                className="h-full flex flex-col items-center justify-center gap-12 md:grid md:grid-cols-2 md:gap-12 xl:flex xl:flex-row xl:h-[600px]"
                initial={{ x: 0 }}
                animate={{ x: -activeIndex * 298 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {workData.map((work, index) => (
                  <WorkItem
                    key={work.id}
                    {...work}
                    index={index}
                    isActive={index === activeIndex - 1}
                    onClick={() => setActiveIndex(index + 1)}
                    theme={currentTheme}
                  />
                ))}
                <MoreWorkButton />
              </motion.ul>
            </div>
            <div className="hidden xl:flex gap-6 items-center py-12 px-12">
              <button
                onClick={() => moveCarousel("left")}
                aria-label="Previous work"
                className="h-24 w-24 border-2 rounded-full flex justify-center items-center text-white"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="text-lg" />
              </button>
              <button
                onClick={() => moveCarousel("right")}
                aria-label="Next work"
                className="h-24 w-24 border-2 rounded-full flex justify-center items-center text-white"
                disabled={activeIndex === workData.length}
              >
                <ChevronRight className="text-lg" />
              </button>
              <div className="w-[30vw] max-w-lg bg-white">
                <motion.div
                  className="h-1 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(activeIndex / workData.length) * 100}%`,
                  }}
                />
              </div>
              <div className="text-6xl text-white">
                {selectedWorkDetails ? selectedWorkDetails.id.slice(-1) : "0"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkItemProps extends workDataType {
  index: number;
  isActive: boolean;
  onClick: () => void;
  theme: string | undefined;
}

function WorkItem({
  id,
  title,
  tags,
  image,
  index,
  isActive,
  theme,
}: WorkItemProps) {
  return (
    <li className="group w-full cursor-pointer" data-cursor-text="Uncover">
      <TransitionLink href={`/work/${id}`} className="block w-full h-full">
        <motion.div
          className={cn(
            "w-full flex flex-col overflow-hidden rounded-xl p-6  xl:rounded-none xl:p-0 xl:bg-transparent",
            theme === "dark" ? "bg-black/50" : "text-background bg-black"
          )}
          whileTap={{ scale: 0.99 }}
        >
          <motion.div
            layoutId={`work-${id}`}
            transition={{ duration: 0 }}
            className="relative w-full h-[300px] rounded-xl overflow-hidden xl:h-[500px] xl:w-[250px]"
          >
            <Image
              src={image}
              fill
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
          <div className="w-full xl:hidden ">
            <ArrowButton buttonText={title} justifyBetween />
          </div>
          <div className="w-full flex flex-col space-y-2 text-lg text-text/80 font-light xl:hidden mt-2">
            {tags.slice(0, 4).map((tag, index) => (
              <div key={index} className="relative flex opacity-80 w-full">
                <span className="w-full">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </TransitionLink>
    </li>
  );
}
