'use client';

import { useState, useRef } from 'react';

interface GameFrameProps {
  src: string;
  title?: string;
}

export default function GameFrame({ src, title = 'Steal Brainrot 67' }: GameFrameProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!iframeRef.current) return;

    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen().catch(() => {
        // Fallback for browsers that don't support fullscreen
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const shareGame = (platform: string) => {
    const url = 'https://stealbrainrot67.com';
    const text = 'Check out Steal Brainrot 67 - the ultimate rare meme collection game!';

    const urls: { [key: string]: string } = {
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      tiktok: `https://www.tiktok.com/`,
      youtube: `https://www.youtube.com/`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <div className="w-full mt-0">
      <div className="flex flex-col gap-3">
        {/* Loading Bar */}
        {isLoading && (
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="loading-bar w-full"></div>
          </div>
        )}

        {/* Game Container */}
        <div className={`relative w-full bg-black rounded-lg neon-border overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`}>
          <div className="aspect-video w-full relative">
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              onLoad={handleLoad}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={toggleFullscreen}
              className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 px-3 py-2 rounded-lg text-sm font-semibold transition-colors border border-cyan-500/50"
            >
              ⛶ Fullscreen
            </button>
          </div>
        </div>

        {/* Title & Description - Below Game */}
        <div className="text-center mt-2">
          <h2 className="text-2xl md:text-3xl font-black neon-text mb-1">
            {title}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Collect rare Roblox memes and unlock the legendary item 67. Play now!
          </p>
        </div>
      </div>
    </div>
  );
}