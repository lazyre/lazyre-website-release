"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React from "react";
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

function ShareLinks({ title, shareUrl }: Props) {
  const { toast } = useToast();
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
            )}+${encodeURIComponent(shareUrl)}`,
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
              title
            )}+${encodeURIComponent(shareUrl)}`,
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
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              title
            )}+${encodeURIComponent(shareUrl)}`,
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
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          toast({
            title: "Link copied to clipboard!",
          });
        }}
      >
        <AiOutlineLink className="h-4 w-4" />
        <span className="sr-only">Copy Link</span>
      </Button>
    </div>
  );
}

export default ShareLinks;
