"use client";

import React, { useState, useEffect } from "react";
import { assetPath } from "../utils/assetPath";

const images = [
  "/albums/Tub.jpg",
  "/albums/acoustic3.jpg",
  "/albums/bandcamp2.jpg",
  "/albums/spotifyabout.jpg"
];

export default function CrossfadeImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200); // Short hold so blending is nearly continuous

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-center md:justify-start">
      <div className="relative w-full max-w-[31.5rem] mx-auto md:mx-0 bg-black rounded-full p-4 border-2 border-white">
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          {images.map((image, index) => (
            <img
              key={image}
              src={assetPath(image)}
              alt={`Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-2000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } ${image === "/albums/bandcamp2.jpg" || image === "/albums/spotifyabout.jpg" ? "scale-[1.06]" : "scale-100"}`}
              style={{ transitionDuration: "6500ms" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

