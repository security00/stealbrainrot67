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
    <div className="w-full mt-4">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black neon-text mb-2">
            {title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Collect rare Roblox memes and unlock the legendary item 67. Play now!
          </p>
        </div>

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

        {/* Quick Tips */}
        <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-3">💡 Quick Tips</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• <strong>Find Item 67:</strong> The rarest item in the game! Search hidden locations.</li>
            <li>• <strong>Collect All Items:</strong> Gather all meme items to unlock special rewards.</li>
            <li>• <strong>Time Challenges:</strong> Complete daily challenges for bonus points.</li>
            <li>• <strong>Secret Locations:</strong> Explore every corner of the map to find Easter eggs.</li>
          </ul>
        </div>

        {/* Share Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => shareGame('x')}
            className="bg-black border border-cyan-400 hover:bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            𝕏 Share on X
          </button>
          <button
            onClick={() => shareGame('tiktok')}
            className="bg-black border border-pink-500 hover:bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            ♪ TikTok
          </button>
          <button
            onClick={() => shareGame('youtube')}
            className="bg-black border border-red-500 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            ▶ YouTube
          </button>
        </div>
      </div>
    </div>
  );
}