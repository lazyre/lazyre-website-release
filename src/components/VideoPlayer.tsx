"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useCursor } from "../contexts/CursorContext";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  autoPlay = false,
  loop = false,
  muted = true,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const { setCursorType, setCursorText } = useCursor();

  useEffect(() => {
    if (videoRef.current) {
      if (isInView && autoPlay) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, do nothing
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, autoPlay]);

  useEffect(() => {
    setCursorText(isPlaying ? "PauseIcon" : "PlayIcon");
  }, [isPlaying, setCursorText]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Play was prevented, do nothing
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        setCursorType("text");
        setCursorText(isPlaying ? "PauseIcon" : "PlayIcon");
      }}
      onMouseLeave={() => {
        setCursorType("default");
        setCursorText("");
      }}
    >
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label="Video player"
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      {!autoPlay && !isPlaying && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="text-white p-4 rounded-full bg-opacity-50 bg-black hover:bg-opacity-75 transition-colors"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Play video"
          >
            <Play size={32} />
          </motion.button>
        </motion.div>
      )}
      {isPlaying && (
        <motion.button
          className="absolute bottom-4 right-4 text-white p-2 rounded-full bg-opacity-50 bg-black hover:bg-opacity-75 transition-colors"
          onClick={togglePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          aria-label="Pause video"
        >
          <Pause size={24} />
        </motion.button>
      )}
    </motion.div>
  );
}
