// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { useIsLarge, useIsMedium, useIsSmall } from "@/hooks/useMediaQuery";

// interface VideoSource {
//   src: string;
//   loopStart: number;
// }

// const videoSources = {
//   dark: {
//     large: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-large-dark.mp4",
//       loopStart: 23.8,
//     },
//     medium: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-medium-dark.mp4",
//       loopStart: 23.8,
//     },
//     small: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-small-dark.mp4",
//       loopStart: 23.8,
//     },
//   },
//   light: {
//     large: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-large-light.mp4",
//       loopStart: 23.8,
//     },
//     medium: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-medium-light.mp4",
//       loopStart: 23.8,
//     },
//     small: {
//       src: "https://cdn.lazyre.com/videos/mascot/mascot-small-light.mp4",
//       loopStart: 23.8,
//     },
//   },
// };

// const imageSources = {
//   dark: {
//     large: "https://cdn.lazyre.com/images/mascot/mascot-large-dark.webp",
//     medium: "https://cdn.lazyre.com/images/mascot/mascot-medium-dark.webp",
//     small: "https://cdn.lazyre.com/images/mascot/mascot-small-dark.webp",
//   },
//   light: {
//     large: "https://cdn.lazyre.com/images/mascot/mascot-large-light.webp",
//     medium: "https://cdn.lazyre.com/images/mascot/mascot-medium-light.webp",
//     small: "https://cdn.lazyre.com/images/mascot/mascot-small-light.webp",
//   },
// };

// export default function HeroBackground() {
//   const [mounted, setMounted] = useState(false);
//   const { resolvedTheme } = useTheme();
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [videoError, setVideoError] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [currentSource, setCurrentSource] = useState<VideoSource | null>(null);
//   const [isFirstPlay, setIsFirstPlay] = useState(true);

//   const isLarge = useIsLarge();
//   const isMedium = useIsMedium();
//   const isSmall = useIsSmall();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       const theme = resolvedTheme === "dark" ? "dark" : "light";
//       let size: "small" | "medium" | "large" = "small";

//       if (isLarge) {
//         size = "large";
//       } else if (isMedium) {
//         size = "medium";
//       }

//       const newSource = videoSources[theme][size];
//       setCurrentSource(newSource);

//       if (videoRef.current) {
//         const currentTime = videoRef.current.currentTime;
//         const isPlaying = !videoRef.current.paused;
//         videoRef.current.src = newSource.src;
//         videoRef.current.load();
//         videoRef.current.currentTime = currentTime;
//         // if (isPlaying) {
//         //   videoRef.current.play().catch(() => {
//         //     setVideoError(true);
//         //   });
//         // }
//       }
//     }
//   }, [resolvedTheme, isLarge, isMedium, isSmall, mounted]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video || !currentSource) return;

//     const handleTimeUpdate = () => {
//       if (!isFirstPlay && video.currentTime < currentSource.loopStart) {
//         video.currentTime = currentSource.loopStart;
//       }
//     };

//     const handleEnded = () => {
//       setIsFirstPlay(false);
//       video.currentTime = currentSource.loopStart;
//       video.play().catch(() => {
//         setVideoError(true);
//       });
//     };

//     const handleError = () => {
//       setVideoError(true);
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);
//     video.addEventListener("ended", handleEnded);
//     video.addEventListener("error", handleError);

//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//       video.removeEventListener("ended", handleEnded);
//       video.removeEventListener("error", handleError);
//     };
//   }, [currentSource, isFirstPlay]);

//   if (!mounted) {
//     return null;
//   }

//   const theme = resolvedTheme === "dark" ? "dark" : "light";

//   return (
//     <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
//       {/* Video Background */}
//       {currentSource && !videoError && (
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           playsInline
//           onCanPlay={() => {
//             setVideoLoaded(true);
//             setVideoError(false);
//           }}
//           onError={() => setVideoError(true)}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//             videoLoaded && !videoError ? "opacity-100" : "opacity-0"
//           }`}
//           aria-hidden="true"
//         >
//           <source src={currentSource.src} type="video/mp4" />
//         </video>
//       )}

//       {/* Image Fallback */}
//       <picture
//         className={`absolute inset-0 transition-opacity duration-500 ${
//           videoLoaded && !videoError ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <source
//           srcSet={imageSources[theme].large}
//           media="(min-width: 1280px)"
//         />
//         <source
//           srcSet={imageSources[theme].medium}
//           media="(min-width: 1024px)"
//         />
//         <Image
//           src={imageSources[theme].small}
//           alt="Hero background"
//           fill
//           style={{ objectFit: "cover" }}
//           priority
//         />
//       </picture>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsLarge, useIsMedium, useIsSmall } from "@/hooks/useMediaQuery";

interface VideoSource {
  src: string;
  loopStart: number;
}

const videoSources = {
  dark: {
    large: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-large-dark.mp4",
      loopStart: 23.8,
    },
    medium: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-medium-dark.mp4",
      loopStart: 23.8,
    },
    small: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-small-dark.mp4",
      loopStart: 23.8,
    },
  },
  light: {
    large: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-large-light.mp4",
      loopStart: 23.8,
    },
    medium: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-medium-light.mp4",
      loopStart: 23.8,
    },
    small: {
      src: "https://cdn.lazyre.com/videos/mascot/mascot-small-light.mp4",
      loopStart: 23.8,
    },
  },
};

const imageSources = {
  dark: {
    large: "https://cdn.lazyre.com/images/mascot/mascot-large-dark.webp",
    medium: "https://cdn.lazyre.com/images/mascot/mascot-medium-dark.webp",
    small: "https://cdn.lazyre.com/images/mascot/mascot-small-dark.webp",
  },
  light: {
    large: "https://cdn.lazyre.com/images/mascot/mascot-large-light.webp",
    medium: "https://cdn.lazyre.com/images/mascot/mascot-medium-light.webp",
    small: "https://cdn.lazyre.com/images/mascot/mascot-small-light.webp",
  },
};

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
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
        videoRef.current.src = newSource.src;
        videoRef.current.load();
        videoRef.current.currentTime = currentTime;
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
