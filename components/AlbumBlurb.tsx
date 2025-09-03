import React, { useState, useEffect } from "react";

type AlbumBlurbProps = {
  blurbBackground: string;
  blurb: string;
};

export default function AlbumBlurb({ blurbBackground, blurb }: AlbumBlurbProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset typing animation when blurb changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [blurb]);

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

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Background Image */}
      <img 
        src={blurbBackground} 
        alt="Album Background" 
        className="w-full h-full object-cover"
      />

      {/* Beige Paper Overlay */}
      <div className="absolute inset-0 bg-amber-50/90"></div>

      {/* Blurb Text with Typing Animation - Fixed Position */}
      <div className="absolute inset-0 p-3 lg:p-6">
        <div className="grid place-items-center w-full h-full">
          <div className="relative w-full max-w-2xl">
            {/* Invisible text to establish container size and position */}
            <div className="invisible text-black text-base lg:text-lg xl:text-xl font-medium leading-relaxed font-serif italic">
              {blurb}
            </div>
            
            {/* Visible animated text positioned absolutely */}
            <div className="absolute inset-0 text-black text-base lg:text-lg xl:text-xl font-medium leading-relaxed font-serif italic">
              {displayedText}
              <span className="animate-pulse text-gray-600">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
