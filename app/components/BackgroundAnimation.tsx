'use client';

const squares = Array.from({ length: 15 }, (_, id) => ({
  id,
  left: (id * 17 + 11) % 100,
  top: (id * 29 + 7) % 100,
  delay: id * 0.3,
}));

const pixels = Array.from({ length: 20 }, (_, id) => ({
  id,
  left: (id * 23 + 5) % 100,
  top: (id * 31 + 13) % 100,
  opacity: 0.12 + ((id * 7) % 30) / 100,
  delay: id * 0.2,
}));

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-purple-900/40"></div>

      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="w-full h-full bg-grid" />
      </div>

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
