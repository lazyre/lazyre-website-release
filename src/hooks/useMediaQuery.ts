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
