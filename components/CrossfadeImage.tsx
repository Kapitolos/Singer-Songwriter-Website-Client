"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/albums/Tub.jpg",
  "/albums/acoustic3.jpg",
  "/albums/bandcamp2.jpg",
  "/albums/spotifyabout.jpg"
];

export default function CrossfadeImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Half of transition time for smooth crossfade
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[31.5rem] mx-auto bg-white rounded-full p-4">
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-2000 ${
                index === currentIndex && fade ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

