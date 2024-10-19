"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAnimate, useInView, motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { useCursor } from "@/contexts/CursorContext";
import TransitionLink from "../TransitionLink";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HamburgerMenu from "./HamburgerMenu";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import { capitalizeWords } from "@/utils/capitalizeWord";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const brandItems = [
  { href: "/brand/tech", label: "Lazyre Tech" },
  { href: "/brand/design", label: "Lazyre Design" },
  { href: "/brand/build", label: "Lazyre Build" },
  { href: "/brand/mechatronics", label: "Lazyre Mechatronics" },
  { href: "/brand/web", label: "Lazyre Web" },
  { href: "/brand/digitalytics", label: "Lazyre Digitalytics" },
  { href: "/brand/studio", label: "Lazyre Studio" },
  { href: "/brand/lab", label: "Lazyre Lab" },
] as const;

function useAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    animate("#open-nav", {
      clipPath: isOpen
        ? isMobile
          ? "inset(0 0 0 0)"
          : "inset(0 0 0 50%)"
        : "inset(0 0 0 100%)",
    });
  }, [isOpen, animate]);

  return scope;
}

const textRevealVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [isThreshold, setThreshold] = useState(false);
  const scope = useAnimation(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { setCursorType, setCursorSticky } = useCursor();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = useMemo(() => {
    return mounted ? (theme === "system" ? resolvedTheme : theme) : "dark";
  }, [mounted, theme, resolvedTheme]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    setThreshold(!isInView);
  }, [isInView]);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
    document.body.style.overflow = isOpen ? "" : "hidden";
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    if (isOpen) {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const navClasses = useMemo(
    () =>
      cn(
        "fixed top-0 inset-x-0 h-24 xl:h-36 z-40 px-6 md:px-12 flex justify-center items-center transition-all duration-500",
        isThreshold && "xl:h-24"
      ),
    [isThreshold]
  );

  const containerClasses = useMemo(
    () =>
      cn(
        "pl-6 w-full max-w-2xl xl:max-w-[100rem] flex items-center justify-between rounded-full transition-all",
        isOpen && "bg-transparent backdrop-blur-none border-transparent",
        !isThreshold && "xl:max-w-full"
      ),
    [isOpen, isThreshold]
  );

  const hamburgerClasses = useMemo(
    () =>
      cn(
        "bg-black/80 p-4 border border-white/[0.08] hover:border-transparent hover:bg-primary rounded-full cursor-pointer transition-colors h-12",
        isOpen &&
          `border-transparent ${
            currentTheme === "light"
              ? "hover:bg-black"
              : "hover:bg-white/[0.08]"
          }`
      ),
    [isOpen, currentTheme]
  );

  // const paths = useMemo(
  //   () => pathname.split("/").filter((path) => path),
  //   [pathname]
  // );

  const paths = useMemo(() => {
    const pathArray = pathname.split("/").filter((path) => path);

    // Check if the path starts with /blog/tag/
    if (pathArray[0] === "blog" && pathArray[1] === "tag") {
      // Remove the "tag" part
      return ["blog", ...pathArray.slice(2)];
    }

    return pathArray;
  }, [pathname]);

  return (
    <header>
      <div ref={ref} className="absolute h-36 w-full top-0" />
      <motion.nav
        style={{
          opacity: isOpen ? 0 : 1,
        }}
        className={cn(navClasses, isOpen && "z-40 pointer-events-none")}
      >
        <div
          className={cn(
            containerClasses,
            "h-12 bg-white/[0.08] border border-white/[0.08] backdrop-blur-lg",
            currentTheme === "light" && "bg-white/80"
          )}
        ></div>
      </motion.nav>
      <nav className={cn(navClasses, "z-[90]")}>
        <div className={containerClasses}>
          <TransitionLink href="/" aria-label="Home">
            <Image
              src="https://cdn.lazyre.com/logos/lazyre_logo.svg"
              alt="Lazyre logo"
              width={100}
              height={100}
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority
              className={cn(currentTheme === "dark" && "filter invert")}
            />
          </TransitionLink>
          <motion.ul
            variants={{
              open: {
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="hidden md:flex flex-[8] relative opacity-100 justify-evenly uppercase max-w-5xl pointer-events-auto"
          >
            {menuItems.map(({ href, label }) => (
              <motion.li
                className="h-12"
                key={label}
                variants={{
                  open: { opacity: 0, y: "-4rem" },
                  closed: { opacity: 1, y: "0rem" },
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                  setCursorType("text");
                  setCursorSticky(true, e.currentTarget);
                }}
                onMouseLeave={() => {
                  setCursorType("default");
                  setCursorSticky(false);
                }}
              >
                <TransitionLink
                  href={href}
                  className="h-12 text-center flex items-center justify-center hover:text-background"
                >
                  {label}
                </TransitionLink>
              </motion.li>
            ))}
            <ToggleThemeButton />
          </motion.ul>
          <button
            className={hamburgerClasses}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerMenu
              isOpen={isOpen}
              strokeWidth="4"
              color="white"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="24"
              height="16"
            />
          </button>
        </div>
      </nav>
      <div className={cn(navClasses, "z-[60]")} ref={scope}>
        <div
          id="open-nav"
          className="fixed inset-0 -z-10 bg-background"
          style={{ clipPath: "inset(0 0 0 100%)" }}
          aria-hidden="true"
        />
      </div>
      <nav
        className={cn(
          navClasses,
          "z-[80]",
          isInView ? "" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "lg:w-1/2 w-full h-screen fixed top-0 right-0 overflow-y-auto lg:overflow-y-hidden",
            !isOpen && "pointer-events-none"
          )}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col h-full w-full pt-24 lg:pt-24"
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                <div className="flex-grow flex flex-col-reverse lg:flex-row gap-6 p-6 lg:px-12 py-6">
                  <motion.div
                    className="lg:w-1/3 p-4 flex flex-col"
                    variants={itemVariants}
                  >
                    <h2 className="text-xl font-bold mb-4 opacity-50">
                      Our Brands
                    </h2>
                    <ul className="space-y-2 flex-grow overflow-y-auto">
                      {brandItems.map(({ href, label }) => (
                        <motion.li key={label} variants={itemVariants}>
                          <TransitionLink
                            href={href}
                            className="hover:underline"
                            onCustomClick={handleLinkClick}
                          >
                            <span className="text-xl lg:3xl">{label}</span>
                          </TransitionLink>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    className="lg:w-2/3 p-4 flex flex-col"
                    variants={itemVariants}
                  >
                    <h2 className="text-2xl font-bold mb-6 opacity-50">Menu</h2>
                    <ul className="flex flex-col gap-4 flex-grow justify-between">
                      {menuItems.map(({ href, label }) => (
                        <motion.li key={label} variants={itemVariants}>
                          <TransitionLink
                            href={href}
                            className="group hover:underline"
                            onCustomClick={handleLinkClick}
                          >
                            <span className="text-4xl lg:text-6xl xl:text-7xl font-bold">
                              {label}
                            </span>
                            <span className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                              <ArrowUpRight
                                className="text-primary"
                                aria-hidden="true"
                              />
                            </span>
                          </TransitionLink>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <motion.div
                  className="p-4 mx-6 lg:mx-12"
                  variants={itemVariants}
                >
                  <h2 className="text-xl font-bold mb-4 opacity-50">
                    Say Hello
                  </h2>
                  <ul className="flex flex-wrap gap-x-6 justify-between">
                    <motion.li
                      className="text-xl lg:2xl"
                      variants={itemVariants}
                    >
                      <p className="mb-2">
                        Email us at: <br />
                        <a
                          href="mailto:info@lazyre.com"
                          className="text-xl font-bold hover:text-white transition-colors"
                        >
                          info@lazyre.com
                        </a>
                      </p>
                    </motion.li>
                    <motion.li
                      className="text-xl lg:2xl"
                      variants={itemVariants}
                    >
                      <p>
                        Call us at: <br />
                        <a
                          href="tel:+911234567890"
                          className="text-xl font-bold hover:text-white transition-colors"
                        >
                          +91 1234567890
                        </a>
                      </p>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full bg-transparent"
          />
        </motion.div>
      )}
      {pathname !== "/" && !isOpen && (
        <div className="absolute top-24 xl:top-36 z-[90] w-screen px-8 md:px-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </BreadcrumbSeparator>
              {paths.map((path, index) => {
                const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
                const isLast = index === paths.length - 1;
                return (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{capitalizeWords(path)}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={fullPath}>
                          {capitalizeWords(path)}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
