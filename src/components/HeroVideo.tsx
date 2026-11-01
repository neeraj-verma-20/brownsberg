'use client';

import React, { useState, useEffect, useRef } from 'react';

interface HeroVideoProps {
  posterUrl: string;
  videoUrl?: string;
}

export default function HeroVideo({ posterUrl, videoUrl }: HeroVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Check for slow connection or data saver
    const nav = navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } };
    if (nav.connection?.saveData || nav.connection?.effectiveType === 'slow-2g' || nav.connection?.effectiveType === '2g') {
      return;
    }

    // On mobile screens (<640px), keep the poster image for fastest loading & zero battery/data drain
    if (window.innerWidth < 640) {
      return;
    }

    // Lazy load video only when container is near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback; fallback safely to poster
      });
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Static High-Performance Poster Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('${posterUrl}')`,
          opacity: isVideoLoaded ? 0.35 : 0.85,
        }}
        aria-hidden="true"
      />

      {/* Lazy-loaded Hero Video */}
      {shouldLoadVideo && videoUrl && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoaded}
          aria-hidden="true"
        />
      )}

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/80 via-[#08090C]/60 to-[#08090C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090C] to-transparent" />
    </div>
  );
}

