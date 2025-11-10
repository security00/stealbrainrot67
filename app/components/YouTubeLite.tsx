'use client';

import { useState } from 'react';

type Props = {
  id: string; // YouTube video id (11 chars)
  title: string;
  start?: number;
  className?: string;
  analyticsId?: string;
};

function isValidId(id: string) {
  return /^[A-Za-z0-9_-]{11}$/.test(id);
}

export default function YouTubeLite({ id, title, start, className = '', analyticsId }: Props) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1${
    start ? `&start=${start}` : ''
  }`;

  if (!isValidId(id)) return null;

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-lg border border-cyan-500/40 ${className}`}>
      {loaded ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          aria-label={`Play video: ${title}`}
          title={title}
          data-analytics-id={analyticsId}
          onClick={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full group"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="sr-only">Play video: {title}</span>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600/90 group-hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="white" />
              </svg>
            </div>
          </div>
        </button>
      )}
      {/* Caption bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur px-3 py-2 text-xs md:text-sm text-white">
        {title}
      </div>
    </div>
  );
}

