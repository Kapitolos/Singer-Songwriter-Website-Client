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
  const [isSeeking, setIsSeeking] = useState(false);

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
      setDuration(0);
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

  // Handle seeking
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Handle seek start
  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  // Handle seek end
  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  // Update Time Progress
  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current && !isSeeking) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const updateDuration = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration || 0);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("loadedmetadata", updateDuration);
      audioRef.current.addEventListener("canplay", updateDuration);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
        audioRef.current.removeEventListener("canplay", updateDuration);
      }
    };
  }, [isSeeking]);

  // Format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-4 shadow-lg border border-amber-100">
      <div className="flex items-center gap-3">
        <audio ref={audioRef} className="hidden" preload="auto" />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5 text-white" />
          ) : (
            <PlayIcon className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate text-sm">
            {albumTitle || "Loading..."}
          </h3>
          <div className="text-gray-300 text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-32">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            onMouseDown={handleSeekStart}
            onMouseUp={handleSeekEnd}
            onTouchStart={handleSeekStart}
            onTouchEnd={handleSeekEnd}
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
}
