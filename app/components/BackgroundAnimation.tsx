'use client';

import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);
  const [pixels, setPixels] = useState<Array<{ id: number; left: number; top: number; opacity: number; delay: number }>>([]);

  useEffect(() => {
    // Generate squares
    setSquares(
      [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 0.3,
      }))
    );

    // Generate pixels
    setPixels(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.5,
        delay: i * 0.2,
      }))
    );

    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-purple-900/40"></div>
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          {/* Decorative grid via CSS background to avoid <svg> being flagged as image */}
          <div className="w-full h-full bg-grid" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-purple-900/40"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        {/* Decorative grid via CSS background to avoid <svg> being flagged as image */}
        <div className="w-full h-full bg-grid" />
      </div>

      {/* Floating squares (meme wall effect) */}
      <div className="absolute inset-0">
        {squares.map((square) => (
          <div
            key={square.id}
            className="absolute w-16 h-16 border-2 border-cyan-500/30 rounded-lg opacity-20"
            style={{
              left: `${square.left}%`,
              top: `${square.top}%`,
              animation: `mosaic ${8 + (square.id % 4)}s ease-in-out infinite`,
              animationDelay: `${square.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Pixel effects */}
      <div className="absolute inset-0 opacity-10">
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="absolute w-2 h-2 bg-cyan-400"
            style={{
              left: `${pixel.left}%`,
              top: `${pixel.top}%`,
              opacity: pixel.opacity,
              animation: `float ${4 + (pixel.id % 4)}s ease-in-out infinite`,
              animationDelay: `${pixel.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
