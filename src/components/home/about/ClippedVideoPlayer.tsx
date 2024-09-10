"use client";

import { useSpringCursor } from "@/contexts/CursorContext";
import { motion, useInView } from "framer-motion";
import React, { RefObject, useEffect, useRef, useState } from "react";

type ClippedVideoPlayerProps = {
  isVideoClicked: boolean;
  isDivHovered: boolean;
  setIsDivHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClippedVideoPlayer: React.FC<ClippedVideoPlayerProps> = ({
  isVideoClicked,
  isDivHovered,
  setIsDivHovered,
}) => {
  const clippedVideoRef = useRef<HTMLDivElement>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoElement, { amount: "some" });

  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    top: 0,
  });

  const { localXCursor, localYCursor } = useSpringCursor(
    cursorPosition.left,
    cursorPosition.top
  );

  const handleMouseEnter = () => setIsDivHovered(true);
  const handleMouseLeave = () => setIsDivHovered(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDivHovered(true);
    if (isDivHovered) {
      const outerDivRect = e.currentTarget.getBoundingClientRect();
      const x = outerDivRect.left;
      const y = outerDivRect.top;

      // Update the cursor position in state
      setCursorPosition({ left: x, top: y });
    }
  };

  useEffect(() => {
    if (videoElement.current) {
      isVideoClicked && videoInView
        ? videoElement.current.play()
        : videoElement.current.pause();
    }
  }, [isVideoClicked, videoInView]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={clippedVideoRef}
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onKeyDown={(e) => e.key === "Enter" && setIsDivHovered(!isDivHovered)}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          height="600px"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="relative z-10"
        />
        <svg
          xmlns="https://www.w3.org/2000/svg"
          className="absolute z-20 top-0 left-0 w-full h-full overflow-visible rounded-xl pointer-events-none"
        >
          <defs>
            <mask id="video-mask" className="clippy">
              <motion.g
                className="z-30"
                style={{
                  x: localXCursor,
                  y: localYCursor,
                }}
              >
                <motion.circle
                  id="video-mask-circle"
                  cx="0"
                  cy="0"
                  r="0"
                  fill="white"
                  animate={
                    isVideoClicked
                      ? {}
                      : isDivHovered
                      ? { r: "6rem" }
                      : { r: "0rem" }
                  }
                />
              </motion.g>
            </mask>
          </defs>
          <g mask="url(#video-mask)" className="hovering-cursor">
            <motion.rect
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              fill="rgb(0 173 181)"
              animate={
                isVideoClicked
                  ? {
                      fill: "rgb(0 86 90)",
                      transition: { delay: 0.8, duration: 0.8 },
                    }
                  : {
                      fill: "rgb(0 173 181)",
                      transition: { delay: 0.8, duration: 0.8 },
                    }
              }
            />
            <foreignObject width="100%" height="100%">
              <div className="h-full flex">
                <video
                  ref={videoElement}
                  preload="auto"
                  muted
                  playsInline
                  width="100%"
                  height="100%"
                  loop
                >
                  <source
                    src="/videos/mascot/mascot_large_dark.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </foreignObject>
            <motion.g
              animate={isVideoClicked ? { opacity: 0 } : { opacity: 1 }}
            >
              <foreignObject width="100%" height="100%">
                <div
                  className="absolute inset-0 bg-[url(/images/mascot/mascot_large_dark.png)] bg-[0] rounded-xl"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </foreignObject>
            </motion.g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ClippedVideoPlayer;
