"use client";

import React from "react";
import { useTransition } from "../contexts/TransitionContext";
import Link from "next/link";

interface TransitionLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onCustomClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const TransitionLink = React.forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, children, onCustomClick, ...props }, ref) => {
    const { startTransition } = useTransition();

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      e.preventDefault();
      if (onCustomClick) {
        onCustomClick(e);
      }
      startTransition(href);
    };

    return (
      <Link ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
