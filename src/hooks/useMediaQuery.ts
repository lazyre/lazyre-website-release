// import { useEffect, useState, useCallback, useMemo } from "react";

// const DEFAULT_MATCHES = false;

// /**
//  * Custom hook for detecting if a media query matches the current viewport.
//  *
//  * @param query - The media query string to evaluate
//  * @returns A boolean indicating whether the media query matches
//  */
// export function useMediaQuery(query: string): boolean {
//   const getMatches = useCallback((query: string): boolean => {
//     // Prevents SSR issues
//     if (typeof window !== "undefined") {
//       return window.matchMedia(query).matches;
//     }
//     return DEFAULT_MATCHES;
//   }, []);

//   const [matches, setMatches] = useState<boolean>(() => getMatches(query));

//   const matchMedia = useMemo(() => {
//     if (typeof window !== "undefined") {
//       return window.matchMedia(query);
//     }
//     return null;
//   }, [query]);

//   const handleChange = useCallback(() => {
//     setMatches(getMatches(query));
//   }, [getMatches, query]);

//   useEffect(() => {
//     if (!matchMedia) {
//       return;
//     }

//     // Set initial value
//     handleChange();

//     // Listen for changes
//     matchMedia.addEventListener("change", handleChange);

//     // Cleanup
//     return () => {
//       matchMedia.removeEventListener("change", handleChange);
//     };
//   }, [handleChange, matchMedia]);

//   return matches;
// }

// /**
//  * Custom hook to check if the viewport is considered "large" (min-width: 1024px).
//  *
//  * @returns A boolean indicating whether the viewport is "large"
//  */
// export const useIsLarge = (): boolean => useMediaQuery("(min-width: 1280px)");

// /**
//  * Custom hook to check if the viewport is considered "medium" (min-width: 640px and max-width: 1023px).
//  *
//  * @returns A boolean indicating whether the viewport is "medium"
//  */
// export const useIsMedium = (): boolean =>
//   useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");

// /**
//  * Custom hook to check if the viewport is considered "small" (max-width: 639px).
//  *
//  * @returns A boolean indicating whether the viewport is "small"
//  */
// export const useIsSmall = (): boolean => useMediaQuery("(max-width: 1023px)");

import { useEffect, useState, useCallback, useMemo } from "react";

const DEFAULT_MATCHES = false;

export function useMediaQuery(query: string): boolean {
  const getMatches = useCallback((query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return DEFAULT_MATCHES;
  }, []);

  const [matches, setMatches] = useState<boolean>(() => getMatches(query));

  const matchMedia = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query);
    }
    return null;
  }, [query]);

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [getMatches, query]);

  useEffect(() => {
    if (!matchMedia) {
      return;
    }

    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [handleChange, matchMedia]);

  return matches;
}

export const useIsLarge = (): boolean => useMediaQuery("(min-width: 1280px)");
export const useIsMedium = (): boolean =>
  useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
export const useIsSmall = (): boolean => useMediaQuery("(max-width: 1023px)");
