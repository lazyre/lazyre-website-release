"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  AiOutlineCopy,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineX,
  AiOutlineLink,
} from "react-icons/ai";

type Props = {
  title: string;
  shareUrl: string;
};

export default function ShareLinks({ title, shareUrl }: Props) {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        toast({ title: "Link copied to clipboard!" });
      } catch (err) {
        console.error("Failed to copy: ", err);
        toast({ title: "Failed to copy link", variant: "destructive" });
      }
    } else {
      // Fallback for older browsers or non-HTTPS environments
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        // Use a type assertion to avoid the deprecation warning
        (document as any).execCommand("copy");
        toast({ title: "Link copied to clipboard!" });
      } catch (err) {
        console.error("Failed to copy: ", err);
        toast({ title: "Failed to copy link", variant: "destructive" });
      }
      document.body.removeChild(textArea);
    }
  };

  const shareContent = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: shareUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      copyToClipboard(shareUrl);
    }
  };

  return (
    <div className="flex space-x-2 my-4">
      <Button
        className="text-muted-foreground"
        variant="ghost"
        size="icon"
        onClick={() =>
          window.open(
            `https://wa.me/?text=${encodeURIComponent(
              title
            )}%20${encodeURIComponent(shareUrl)}`,
            "_blank"
          )
        }
      >
        <AiOutlineWhatsApp className="h-4 w-4" />
        <span className="sr-only">Share on WhatsApp</span>
      </Button>
      <Button
        className="text-muted-foreground"
        variant="ghost"
        size="icon"
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`,
            "_blank"
          )
        }
      >
        <AiOutlineFacebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button
        className="text-muted-foreground"
        variant="ghost"
        size="icon"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              title
            )}&url=${encodeURIComponent(shareUrl)}`,
            "_blank"
          )
        }
      >
        <AiOutlineX className="h-4 w-4" />
        <span className="sr-only">Share on X (Twitter)</span>
      </Button>
      <Button
        className="text-muted-foreground"
        variant="ghost"
        size="icon"
        onClick={() =>
          window.open(
            `mailto:?subject=${encodeURIComponent(
              title
            )}&body=${encodeURIComponent(shareUrl)}`,
            "_blank"
          )
        }
      >
        <AiOutlineMail className="h-4 w-4" />
        <span className="sr-only">Share via Email</span>
      </Button>
      <Button
        className="text-muted-foreground"
        variant="ghost"
        size="icon"
        onClick={shareContent}
      >
        <AiOutlineLink className="h-4 w-4" />
        <span className="sr-only">Copy or Share Link</span>
      </Button>
    </div>
  );
}
