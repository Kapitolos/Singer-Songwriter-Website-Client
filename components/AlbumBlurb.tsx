import React, { useState, useEffect } from "react";
import { assetPath } from "../utils/assetPath";

type AlbumBlurbProps = {
  blurbBackground: string;
  blurb: string;
  backgroundImages?: string[];
};

export default function AlbumBlurb({ blurbBackground, blurb, backgroundImages = [] }: AlbumBlurbProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Reset typing animation when blurb changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [blurb]);

  useEffect(() => {
    setBgIndex(0);
  }, [backgroundImages]);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 14000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < blurb.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(blurb.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Speed of typing (50ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, blurb]);

  const activeBackground = backgroundImages.length > 0 ? backgroundImages[bgIndex] : blurbBackground;

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Background Image */}
      <img 
        src={assetPath(activeBackground)} 
        alt="Album Background" 
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Blurb Text with Typing Animation and internal scroll */}
      <div className="absolute inset-0 p-3 lg:p-6">
        <div className="w-full h-full max-w-2xl mx-auto overflow-y-auto pr-1">
          <div className="text-xs font-medium italic leading-relaxed text-white sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {displayedText}
          </div>
        </div>
      </div>
    </div>
  );
}
