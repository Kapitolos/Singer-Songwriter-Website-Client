import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

type AudioPlayerProps = {
  previewUrl: string;
  albumTitle: string;
};

export default function AudioPlayer({ previewUrl, albumTitle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Ensure previewUrl always has a valid value
  const validPreviewUrl = previewUrl || "/albums/Nothing.mp3"; // Default track

  // Load audio when previewUrl changes
  useEffect(() => {
    console.log("New previewUrl received:", validPreviewUrl);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = validPreviewUrl;
      audioRef.current.load(); // Ensure browser reloads the new source
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [previewUrl, albumTitle]);

  // Play/Pause Toggle
  const togglePlay = () => {
    if (!validPreviewUrl) {
      console.error("No audio source available");
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update Time Progress
  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
      setDuration(audioRef.current.duration || 0);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  return (
    <div className="mt-10">
    <div className="bg-black p-3 rounded-lg shadow-md text-white w-full flex items-center gap-3">
      <audio ref={audioRef} className="hidden" preload="auto" />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6 text-white" />
        ) : (
          <PlayIcon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Progress Bar */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => setCurrentTime(Number(e.target.value))}
        className="w-full h-1 bg-white rounded-lg appearance-none cursor-pointer"
      />

        {/* Time Display */}
        <div className="text-xs w-20 text-right">
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </div>
      </div>
    </div>
  );
}
