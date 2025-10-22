'use client';
import { useEffect, useState } from "react";

export default function Game2(){
  const [player, setPlayer] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player("yt-audio", {
        height: "0",
        width: "0",
        videoId: "KGtMuxBP4CY",
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            setDuration(event.target.getDuration());
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    let interval;
    if (player) {
      interval = setInterval(() => {
        setCurrentTime(player.getCurrentTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [player]);

  const playAudio = () => player?.playVideo();
  const pauseAudio = () => player?.pauseVideo();

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    player?.seekTo(time, true);
    setCurrentTime(time);
  };

   const thumbnailUrl = `https://img.youtube.com/vi/hRyy9BxAYeQ/hqdefault.jpg`;

  return(
    <div className="flex flex-col items-center min-h-screen pt-20">

      <div className="relative w-80 h-80 bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white font-semibold">
        <img src={thumbnailUrl}
          alt="YouTube Thumbnail"
          className="absolute inset-0 w-full h-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div> {/* overlay transparan opsional */}
      </div>

      <div className="mt-10 p-10 bg-gray-100 rounded-lg shadow-md w-[300px] flex flex-col items-center">
        <div id="yt-audio"></div>

        <div className="flex gap-2 mb-3">
          <button onClick={playAudio} className="px-3 py-1 bg-green-500 text-white rounded">
            ▶️ Play
          </button>
          <button onClick={pauseAudio} className="px-3 py-1 bg-red-500 text-white rounded">
            ⏸ Pause
          </button>
        </div>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full"
        />
        <div className="text-sm text-gray-700 mt-1">
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </div>
      </div>
    </div>
  );
}
