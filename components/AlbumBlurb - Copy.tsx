import React from "react";

type AlbumBlurbProps = {
  blurbBackground: string;
  blurb: string;
};

export default function AlbumBlurb({ blurbBackground, blurb }: AlbumBlurbProps) {
  return (
    <div className="relative w-full h-64 ml-20">
      {/* Background Image */}
      <img 
        src={blurbBackground} 
        alt="Album Background" 
        className="w-full h-full object-cover rounded-md"
      />

      {/* Blurb Text (Overlay) */}
      <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black/50 p-4 rounded-md">
        {blurb}
      </h3>
    </div>
  );
}
