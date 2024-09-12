"use client";

import React from "react";
import HeroHeading from "./HeroHeading";
import RoundedImage from "./RoundedImage";
import VideoPlayer from "./VideoPlayer";

type FixedHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  altText: string;
  workHero?: boolean;
};

export default function FixedHero({
  title,
  subtitle,
  image,
  video,
  altText,
  workHero = false,
}: FixedHeroProps) {
  return (
    <section className="relative" aria-labelledby="hero-title">
      <HeroHeading title={title} subtitle={subtitle} workHero={workHero} />
      {image && (
        <div className="mt-8">
          <RoundedImage image={image} alt={altText} priority />
        </div>
      )}
      {video && (
        <div className="container max-w-[100rem] mt-8">
          <VideoPlayer
            src={video}
            autoPlay={true}
            loop={false}
            muted={true}
            className="w-full"
          />
        </div>
      )}
    </section>
  );
}
