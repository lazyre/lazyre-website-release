"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsLarge, useIsMedium, useIsSmall } from "@/hooks/useMediaQuery";

interface VideoSource {
  src: string;
  loopStart: number;
}

//! Fix timing, cover pages and add webM format. (also recompress dark mode videos)

const videoSources = {
  dark: {
    large: { src: "/videos/mascot/mascot_large_dark.mp4", loopStart: 22.5 },
    medium: { src: "/videos/mascot/mascot_medium_dark.mp4", loopStart: 22.5 },
    small: { src: "/videos/mascot/mascot_small_dark.mp4", loopStart: 22.5 },
  },
  light: {
    large: { src: "/videos/mascot/mascot_large_light.mp4", loopStart: 22.5 },
    medium: { src: "/videos/mascot/mascot_medium_light.mp4", loopStart: 22.5 },
    small: { src: "/videos/mascot/mascot_small_light.mp4", loopStart: 22.5 },
  },
};

const imageSources = {
  dark: {
    large: "/images/mascot/mascot_large_dark.png",
    medium: "/images/mascot/mascot_medium_dark.png",
    small: "/images/mascot/mascot_small_dark.png",
  },
  light: {
    large: "/images/mascot/mascot_large_light.png",
    medium: "/images/mascot/mascot_medium_light.png",
    small: "/images/mascot/mascot_small_light.png",
  },
};

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  //! Change this to false
  const [videoError, setVideoError] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSource, setCurrentSource] = useState<VideoSource | null>(null);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const isLarge = useIsLarge();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const theme = resolvedTheme === "dark" ? "dark" : "light";
      let size: "small" | "medium" | "large" = "small";

      if (isLarge) {
        size = "large";
      } else if (isMedium) {
        size = "medium";
      }

      const newSource = videoSources[theme][size];
      setCurrentSource(newSource);

      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const isPlaying = !videoRef.current.paused;
        videoRef.current.src = newSource.src;
        videoRef.current.load();
        videoRef.current.currentTime = currentTime;
        // if (isPlaying) {
        //   videoRef.current.play().catch(() => {
        //     setVideoError(true);
        //   });
        // }
      }
    }
  }, [resolvedTheme, isLarge, isMedium, isSmall, mounted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentSource) return;

    const handleTimeUpdate = () => {
      if (!isFirstPlay && video.currentTime < currentSource.loopStart) {
        video.currentTime = currentSource.loopStart;
      }
    };

    const handleEnded = () => {
      setIsFirstPlay(false);
      video.currentTime = currentSource.loopStart;
      video.play().catch(() => {
        setVideoError(true);
      });
    };

    const handleError = () => {
      setVideoError(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, [currentSource, isFirstPlay]);

  if (!mounted) {
    return null;
  }

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      {/* Video Background */}
      {currentSource && !videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onCanPlay={() => {
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded && !videoError ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <source src={currentSource.src} type="video/mp4" />
        </video>
      )}

      {/* Image Fallback */}
      <picture
        className={`absolute inset-0 transition-opacity duration-500 ${
          videoLoaded && !videoError ? "opacity-0" : "opacity-100"
        }`}
      >
        <source
          srcSet={imageSources[theme].large}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={imageSources[theme].medium}
          media="(min-width: 1024px)"
        />
        <Image
          src={imageSources[theme].small}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </picture>
    </div>
  );
}
