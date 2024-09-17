// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useCallback,
//   useEffect,
// } from "react";
// import { useSpring, useMotionValue } from "framer-motion";
// import { usePathname } from "next/navigation";

// type CursorContextType = {
//   isVisible: boolean;
//   isActive: boolean;
//   isPointer: boolean;
//   cursorText: string;
//   isTextVisible: boolean;
//   cursorXSpring: any;
//   cursorYSpring: any;
//   mousePosition: any;
//   setIsSticky: (isSticky: boolean) => void;
//   setStickyPosition: (position: { x: number; y: number }) => void;
//   resetCursorState: () => void;
//   handleElementEnter: (e: MouseEvent) => void;
//   handleElementLeave: (e: MouseEvent) => void;
// };

// const CursorContext = createContext<CursorContextType | undefined>(undefined);

// export const useCursor = () => {
//   const context = useContext(CursorContext);
//   if (context === undefined) {
//     throw new Error("useCursor must be used within a CursorProvider");
//   }
//   return context;
// };

// export const useSpringCursor = (left = 0, top = 0) => {
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 700 };
//   const { mousePosition } = useCursor();
//   const localXCursor = useSpring(cursorX, springConfig);
//   const localYCursor = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     cursorX.set(mousePosition.x - left);
//     cursorY.set(mousePosition.y - top);
//   }, [mousePosition]);

//   return { localXCursor, localYCursor };
// };

// export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [isPointer, setIsPointer] = useState(false);
//   const [cursorText, setCursorText] = useState("");
//   const [isTextVisible, setIsTextVisible] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [stickyPosition, setStickyPosition] = useState({ x: 0, y: 0 });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 700 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   const pathname = usePathname();

//   const resetCursorState = useCallback(() => {
//     setIsActive(false);
//     setIsPointer(false);
//     setCursorText("");
//     setIsTextVisible(false);
//     setIsSticky(false);
//   }, []);

//   const handleMouseEnter = useCallback(() => setIsVisible(true), []);
//   const handleMouseLeave = useCallback(() => setIsVisible(false), []);
//   const handleMouseDown = useCallback(() => setIsActive(true), []);
//   const handleMouseUp = useCallback(() => setIsActive(false), []);

//   const handleElementEnter = useCallback(
//     (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const interactiveElement = target.closest(
//         "[data-cursor], a, button"
//       ) as HTMLElement | null;

//       if (interactiveElement) {
//         const cursorType = interactiveElement.dataset.cursor;

//         if (cursorType) {
//           resetCursorState();

//           switch (cursorType) {
//             case "none":
//               setIsVisible(false);
//               break;
//             case "pointer":
//               setIsPointer(true);
//               break;
//             case "text":
//               setIsTextVisible(true);
//               break;
//           }
//         } else if (interactiveElement.matches("a, button")) {
//           const bound = interactiveElement.getBoundingClientRect();
//           const x = bound.left + interactiveElement.offsetWidth / 2;
//           const y = bound.top + interactiveElement.offsetHeight / 2;
//           setStickyPosition({ x, y });
//           setIsSticky(true);
//           setIsPointer(true);
//         }
//       }

//       const text =
//         target.dataset.cursorText ||
//         target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
//       if (text) {
//         setCursorText(text);
//         setIsTextVisible(true);
//       }
//     },
//     [resetCursorState]
//   );

//   const handleElementLeave = useCallback(
//     (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const interactiveElement = target.closest(
//         "[data-cursor], a, button"
//       ) as HTMLElement | null;

//       if (interactiveElement) {
//         const cursorType = interactiveElement.dataset.cursor;

//         resetCursorState();

//         if (cursorType === "none") {
//           setIsVisible(true);
//         }
//       }

//       if (target.dataset.cursorText || target.closest("[data-cursor-text]")) {
//         setCursorText("");
//         setIsTextVisible(false);
//       }
//     },
//     [resetCursorState]
//   );

//   useEffect(() => {
//     resetCursorState();
//   }, [pathname, resetCursorState]);

//   useEffect(() => {
//     const body = document.body;

//     setIsVisible(true);

//     body.addEventListener("mouseenter", handleMouseEnter);
//     body.addEventListener("mouseleave", handleMouseLeave);
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mouseup", handleMouseUp);
//     document.addEventListener("mouseover", handleElementEnter);
//     document.addEventListener("mouseout", handleElementLeave);

//     return () => {
//       body.removeEventListener("mouseenter", handleMouseEnter);
//       body.removeEventListener("mouseleave", handleMouseLeave);
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mouseup", handleMouseUp);
//       document.removeEventListener("mouseover", handleElementEnter);
//       document.removeEventListener("mouseout", handleElementLeave);
//     };
//   }, [
//     handleMouseEnter,
//     handleMouseLeave,
//     handleMouseDown,
//     handleMouseUp,
//     handleElementEnter,
//     handleElementLeave,
//   ]);

//   useEffect(() => {
//     const updateCursorPosition = (e: MouseEvent) => {
//       cursorX.set(isSticky ? stickyPosition.x - 24 : e.clientX - 24);
//       cursorY.set(isSticky ? stickyPosition.y - 24 : e.clientY - 24);
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", updateCursorPosition);

//     return () => {
//       document.removeEventListener("mousemove", updateCursorPosition);
//     };
//   }, [cursorX, cursorY, isSticky, stickyPosition]);

//   const value = {
//     isVisible,
//     isActive,
//     isPointer,
//     cursorText,
//     isTextVisible,
//     cursorXSpring,
//     cursorYSpring,
//     mousePosition,
//     setIsSticky,
//     setStickyPosition,
//     resetCursorState,
//     handleElementEnter,
//     handleElementLeave,
//   };

//   return (
//     <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
//   );
// };

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useSpring, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";

export type CursorType = "default" | "none" | "pointer" | "text";

type CursorContextType = {
  isVisible: boolean;
  isActive: boolean;
  isPointer: boolean;
  cursorText: string;
  isTextVisible: boolean;
  cursorXSpring: any;
  cursorYSpring: any;
  mousePosition: { x: number; y: number };
  setIsSticky: (isSticky: boolean) => void;
  setStickyPosition: (position: { x: number; y: number }) => void;
  resetCursorState: () => void;
  setCursorType: (type: CursorType) => void;
  setCursorText: (text: string) => void;
  setCursorSticky: (isSticky: boolean, element?: HTMLElement) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

export const useSpringCursor = (left = 0, top = 0) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const { mousePosition } = useCursor();
  const localXCursor = useSpring(cursorX, springConfig);
  const localYCursor = useSpring(cursorY, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x - left);
    cursorY.set(mousePosition.y - top);
  }, [mousePosition, left, top, cursorX, cursorY]);

  return { localXCursor, localYCursor };
};

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyPosition, setStickyPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = useMemo(() => ({ damping: 25, stiffness: 700 }), []);
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const pathname = usePathname();

  const resetCursorState = useCallback(() => {
    setIsActive(false);
    setIsPointer(false);
    setCursorText("");
    setIsTextVisible(false);
    setIsSticky(false);
  }, []);

  const setCursorType = useCallback(
    (type: CursorType) => {
      resetCursorState();
      switch (type) {
        case "none":
          setIsVisible(false);
          break;
        case "pointer":
          setIsPointer(true);
          setIsVisible(true);
          break;
        case "text":
          setIsTextVisible(true);
          setIsVisible(true);
          break;
        default:
          setIsVisible(true);
      }
    },
    [resetCursorState]
  );

  const setCursorSticky = useCallback(
    (sticky: boolean, element?: HTMLElement) => {
      setIsSticky(sticky);
      if (sticky && element) {
        const rect = element.getBoundingClientRect();
        setStickyPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseDown = useCallback(() => setIsActive(true), []);
  const handleMouseUp = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    resetCursorState();
  }, [pathname, resetCursorState]);

  useEffect(() => {
    const body = document.body;

    setIsVisible(true);

    body.addEventListener("mouseenter", handleMouseEnter);
    body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      body.removeEventListener("mouseenter", handleMouseEnter);
      body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (isSticky) {
        cursorX.set(stickyPosition.x - 24);
        cursorY.set(stickyPosition.y - 24);
      } else {
        cursorX.set(e.clientX - 24);
        cursorY.set(e.clientY - 24);
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [cursorX, cursorY, isSticky, stickyPosition]);

  const value = useMemo(
    () => ({
      isVisible,
      isActive,
      isPointer,
      cursorText,
      isTextVisible,
      cursorXSpring,
      cursorYSpring,
      mousePosition,
      setIsSticky,
      setStickyPosition,
      resetCursorState,
      setCursorType,
      setCursorText,
      setCursorSticky,
    }),
    [
      isVisible,
      isActive,
      isPointer,
      cursorText,
      isTextVisible,
      cursorXSpring,
      cursorYSpring,
      mousePosition,
      setIsSticky,
      setStickyPosition,
      resetCursorState,
      setCursorType,
      setCursorText,
      setCursorSticky,
    ]
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};
