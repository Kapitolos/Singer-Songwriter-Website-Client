import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioPlayer from "./AudioPlayer";
import AlbumBlurb from "@/components/AlbumBlurb";

type Album = {
  id: number;
  title: string;
  imageUrl: string;
  previewUrl: string;
  blurbBackground: string;
  blurb: string;
};

type CarouselProps = {
  albums: Album[];
};


export default function Carousel({ albums }: CarouselProps) {
  const [currentPreviewUrl, setCurrentPreviewUrl] = useState(""); // Store the current song URL
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentBlurbBackground, setCurrentBlurbBackground] = useState("");
  const [currentBlurb, setCurrentBlurb] = useState("");

  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // arrows: true,

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 500,
    // fade: true,
    // waitForAnimate: false,


    afterChange: (index: number) => {
      setCurrentPreviewUrl(albums[index].previewUrl); // Update the current audio when the card changes
      setCurrentTitle(albums[index].title);
      setCurrentBlurbBackground(albums[index].blurbBackground);
      setCurrentBlurb(albums[index].blurb);
    },
  };

  return (
    <div>
   

      {/* The carousel */}
      <Slider {...settings}>
        {albums.map((album) => (
          <div key={album.id} className="p-1 mb-3">
            <motion.div
              className="rounded-lg shadow-md p-4 flex flex-col bg-red-50 items-center"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={album.imageUrl}
                alt={album.title}
                className="w-75 h-75 object-cover rounded-md mb-1"
              />
              {/* <h2 className="text-xl text-white font-semibold mb-2">{album.title}</h2> */}
         
            </motion.div>
          </div>
        ))}
      </Slider>
              {/* The shared audio player */}
              <AudioPlayer previewUrl={currentPreviewUrl} albumTitle ={currentTitle}/>
              <AlbumBlurb blurbBackground={currentBlurbBackground} blurb={currentBlurb}/>
    </div>
  );
}
