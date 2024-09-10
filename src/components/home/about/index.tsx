"use client";

import { useAnimate, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import sectionHeadingData from "@/data/SectionHeadingData";
import ClippedVideoPlayer from "./ClippedVideoPlayer";
import { sectionHeadingDataType } from "@/types/types";
import { Pause, Play } from "lucide-react";
import HomeContentWrapper from "@/components/HomeContentWrapper";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type AboutProps = {};

type MobileViewProps = {
  headingData: sectionHeadingDataType;
  handleThumbnailClick: () => void;
  isVideoOpen: boolean;
  isVideoVisible: boolean;
  handleCloseVideo: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
  handleVideoClick: () => void;
  isVideoPaused: boolean;
  theme: string | undefined;
};

type DesktopViewProps = {
  headingData: sectionHeadingDataType;
  isVideoExpanded: boolean;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  handleVideoExpand: () => void;
  theme: string | undefined;
};

const About: React.FC<AboutProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateVideo = async () => {
      if (isVideoExpanded) {
        await animate("#VideoPlayButton", { opacity: 0 }, { duration: 0.4 });
        await animate(
          "#AboutTitle, #AboutSubtitle",
          { opacity: 0, top: -10 },
          { duration: 0.4 }
        );
        await animate("#video-mask-circle", { r: "200%" }, { duration: 0.4 });
      } else {
        await animate(
          "#video-mask-circle",
          { r: isHovered ? "6rem" : "0rem" },
          { duration: 0.4 }
        );
        await animate(
          "#AboutTitle, #AboutSubtitle",
          { opacity: 1, top: 0 },
          { duration: 0.4 }
        );
        await animate("#VideoPlayButton", { opacity: 1 }, { duration: 0.4 });
      }
    };

    animateVideo();
  }, [isVideoExpanded, isHovered, animate]);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsVideoVisible(true), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  const handleVideoExpand = () => setIsVideoExpanded(!isVideoExpanded);

  const handleThumbnailClick = () => {
    setIsVideoOpen(true);
    setIsVideoPaused(false);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsVideoPaused(!isVideoPaused);
    }
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
    setTimeout(() => {
      setIsVideoOpen(false);
      setIsVideoPaused(true);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, 300);
  };

  const headingData = sectionHeadingData.find(
    (sectionHeading) => sectionHeading.id === "about"
  )!;

  return (
    <HomeContentWrapper>
      <div
        ref={scope}
        className=" xl:mt-0 relative xl:min-h-screen overflow-hidden flex justify-center items-center"
      >
        <MobileView
          headingData={headingData}
          handleThumbnailClick={handleThumbnailClick}
          isVideoOpen={isVideoOpen}
          isVideoVisible={isVideoVisible}
          handleCloseVideo={handleCloseVideo}
          videoRef={videoRef}
          handleVideoClick={handleVideoClick}
          isVideoPaused={isVideoPaused}
          theme={theme}
        />
        <DesktopView
          headingData={headingData}
          isVideoExpanded={isVideoExpanded}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleVideoExpand={handleVideoExpand}
          theme={theme}
        />
      </div>
    </HomeContentWrapper>
  );
};

const MobileView: React.FC<MobileViewProps> = ({
  headingData,
  handleThumbnailClick,
  isVideoOpen,
  isVideoVisible,
  handleCloseVideo,
  videoRef,
  handleVideoClick,
  isVideoPaused,
  theme,
}) => (
  <div
    className={cn(
      "xl:hidden w-full",
      theme === "dark" ? "bg-black/50" : " bg-black",
      "rounded-xl p-6 flex flex-col justify-center"
    )}
  >
    <h2
      className={cn(
        "text-5xl font-bold",
        theme === "dark" ? "" : " text-background"
      )}
    >
      {headingData.title
        .split(" ")
        .slice(0, headingData.titleHighlight)
        .join(" ")}
      <span className="mt-2 block text-primary">
        {headingData.title
          .split(" ")
          .slice(headingData.titleHighlight)
          .join(" ")}
      </span>
    </h2>
    <p
      className={cn(
        "mt-12 text-xl leading-normal",
        theme === "dark" ? "" : " text-background"
      )}
    >
      {headingData.subtitle}
    </p>
    <div
      className="relative w-full mt-6 h-64 rounded-lg cursor-pointer overflow-hidden"
      onClick={handleThumbnailClick}
    >
      <img
        src="/images/mascot/mascot_large_dark.png"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="text-white text-4xl" />
      </div>
    </div>
    <AnimatePresence>
      {isVideoOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={handleCloseVideo}
        >
          <motion.div
            className="relative w-full h-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src="/videos/mascot/mascot_large_dark.mp4"
              onClick={handleVideoClick}
              preload="auto"
              autoPlay
              muted
              playsInline
              loop
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseVideo}
              aria-label="Close video"
            >
              ✕
            </button>
            <button
              className="absolute bottom-4 left-4 text-white text-4xl"
              onClick={handleVideoClick}
              aria-label={isVideoPaused ? "Play video" : "Pause video"}
            >
              {isVideoPaused ? <Play /> : <Pause />}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DesktopView: React.FC<DesktopViewProps> = ({
  headingData,
  isVideoExpanded,
  isHovered,
  setIsHovered,
  handleVideoExpand,
  theme,
}) => (
  <div
    className="hidden xl:block relative h-[600px] w-full max-w-[100rem]"
    onClick={handleVideoExpand}
  >
    <div
      className={cn(
        "absolute h-full z-10 pointer-events-none p-6 xl:p-24 w-full rounded-xl",
        theme === "dark" ? "bg-black/50" : "bg-black"
      )}
    >
      <div className="flex flex-col xl:flex-row gap-12 w-full">
        <div>
          <h2
            id="AboutTitle"
            className={cn(
              "relative text-5xl xl:text-7xl font-bold",
              theme === "dark" ? "" : "text-white"
            )}
          >
            {headingData.title
              .split(" ")
              .slice(0, headingData.titleHighlight)
              .join(" ")}
            <span className="mt-2 block text-primary">
              {headingData.title
                .split(" ")
                .slice(headingData.titleHighlight)
                .join(" ")}
            </span>
          </h2>
          <p
            id="AboutSubtitle"
            className={cn(
              "relative mt-12 text-xl leading-normal min-w-[250px] w-full lg:max-w-2xl xl:max-w-5xl",
              theme === "dark" ? "" : "text-white"
            )}
          >
            {headingData.subtitle}
          </p>
        </div>
      </div>
    </div>
    <ClippedVideoPlayer
      isVideoClicked={isVideoExpanded}
      isDivHovered={isHovered}
      setIsDivHovered={setIsHovered}
    />
    <VideoPlayButton />
  </div>
);

const VideoPlayButton = () => (
  <div
    id="VideoPlayButton"
    className="absolute z-30 left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 h-48 w-48 -bottom-16 cursor-pointer bg-primary rounded-full flex justify-center items-center"
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Play className="text-text text-5xl" />
    </div>
    <motion.div
      className="absolute w-full h-full"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 180 }}
    >
      <p>
        {"Play   Showreel"
          .toUpperCase()
          .split("")
          .map((char, index) => (
            <span
              className="absolute left-1/2 text-xl origin-[0_6rem] pt-3"
              style={{ rotate: `${index * 20}deg` }}
              key={index}
            >
              {char}
            </span>
          ))}
      </p>
    </motion.div>
  </div>
);

export default About;
