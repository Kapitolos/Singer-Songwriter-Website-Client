import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioPlayer from "./AudioPlayer";
import AlbumBlurb from "./AlbumBlurb";

type Album = {
  id: number;
  title: string;
  imageUrl: string;
  previewUrl: string;
  blurbBackground: string;
  blurb: string;
  spotifyUrl: string;
  bandcampUrl: string;
};

type CarouselProps = {
  albums: Album[];
};

export default function Carousel({ albums }: CarouselProps) {
  const [currentPreviewUrl, setCurrentPreviewUrl] = useState(albums[0]?.previewUrl || "");
  const [currentTitle, setCurrentTitle] = useState(albums[0]?.title || "");
  const [currentBlurbBackground, setCurrentBlurbBackground] = useState(albums[0]?.blurbBackground || "");
  const [currentBlurb, setCurrentBlurb] = useState(albums[0]?.blurb || "");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSpotifyUrl, setCurrentSpotifyUrl] = useState(albums[0]?.spotifyUrl || "");
  const [currentBandcampUrl, setCurrentBandcampUrl] = useState(albums[0]?.bandcampUrl || "");

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    afterChange: (index: number) => {
      setCurrentPreviewUrl(albums[index].previewUrl);
      setCurrentTitle(albums[index].title);
      setCurrentBlurbBackground(albums[index].blurbBackground);
      setCurrentBlurb(albums[index].blurb);
      setCurrentSpotifyUrl(albums[index].spotifyUrl);
      setCurrentBandcampUrl(albums[index].bandcampUrl);
      setCurrentSlideIndex(index);
    },
  };

  return (
    <div className="space-y-8">
      {/* The carousel with artwork and blurb side by side */}
      <div className="mb-8">
        <Slider {...settings}>
          {albums.map((album, index) => (
            <div key={album.id} className="px-2">
              <motion.div
                className="rounded-xl shadow-lg overflow-hidden bg-white border border-amber-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                style={{ height: '400px' }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left side - Artwork */}
                  <div className="lg:w-1/2 flex items-center justify-center p-4">
                    <img
                      src={album.imageUrl}
                      alt={album.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Right side - Blurb */}
                  <div className="lg:w-1/2 h-full relative p-4">
                    <AlbumBlurb 
                      key={`${album.id}-${currentSlideIndex}`}
                      blurbBackground={album.blurbBackground} 
                      blurb={album.blurb} 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Streaming Links */}
      <div className="flex justify-center gap-4 mb-6">
        <a 
          href={currentSpotifyUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Spotify
        </a>
        <a 
          href={currentBandcampUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v2h-2v-2zm0-8h2v6h-2V8z"/>
          </svg>
          Bandcamp
        </a>
      </div>

      {/* Audio Player positioned below the carousel */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <AudioPlayer previewUrl={currentPreviewUrl} albumTitle={currentTitle} />
        </div>
      </div>
    </div>
  );
}
