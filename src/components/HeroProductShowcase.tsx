'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Play, X, ArrowRight, Film, Sparkles, AlertCircle, RotateCcw } from 'lucide-react';

export interface ProductShowcase {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  quality: string;
  description: string;
  posterUrl: string;
  videoUrl: string;
  highlightPill?: string;
}

// Editable Showcase Items
export const SHOWCASE_PRODUCTS: ProductShowcase[] = [
  {
    id: 'product-1',
    title: 'Aura // Autonomous Brand Film',
    client: 'Aura Luxury Studio',
    category: 'Cinematic AI Narrative',
    duration: '01:45',
    quality: '4K HDR',
    description:
      'Auteur-grade script-to-screen AI visual synthesis featuring hyper-realistic character continuity, dramatic volumetric lighting, and world-building.',
    posterUrl: '/images/product-1-poster.webp',
    videoUrl: '/videos/product-1.mp4',
    highlightPill: 'Featured Production',
  },
  {
    id: 'product-2',
    title: 'Lumina XR // Commercial Campaign',
    client: 'Lumina Spatial Hardware',
    category: 'High-Impact AI Commercial',
    duration: '00:45',
    quality: '60 FPS',
    description:
      'Multi-variant commercial spot crafted with photorealistic liquid chrome motion, sleek obsidian geometry, and high-conversion product reveal hooks.',
    posterUrl: '/images/product-2-poster.webp',
    videoUrl: '/videos/product-2.mp4',
    highlightPill: 'Product Launch',
  },
];

// Sample preview stream for instant testing if local MP4 hasn't been uploaded yet
const SAMPLE_TEST_STREAM =
  'https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-flowing-lines-and-light-particles-40812-large.mp4';

export default function HeroProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<ProductShowcase | null>(null);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [useDemoStream, setUseDemoStream] = useState(false);

  // Close modal handler
  const closeModal = useCallback(() => {
    setSelectedProduct(null);
    setHasVideoError(false);
    setUseDemoStream(false);
  }, []);

  // Keyboard accessibility (Escape to close) and body scroll lock
  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProduct, closeModal]);

  const handlePlayClick = (product: ProductShowcase) => {
    setHasVideoError(false);
    setUseDemoStream(false);
    setSelectedProduct(product);
  };

  return (
    <div className="w-full mt-14 sm:mt-16 md:mt-20">
      {/* Subtle Showcase Header / Section Divider */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 sm:mb-8 px-1">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-400/10 border border-amber-500/30">
            <Film className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-200/90">
            Client Product Showcase
          </span>
          <span className="inline-block w-1 h-1 rounded-full bg-amber-400" />
          <span className="text-xs text-neutral-400 hidden md:inline">
            Interactive Video Previews
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400 font-medium">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready for Video Drop-In
          </span>
        </div>
      </div>

      {/* Modern Cinematic 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {SHOWCASE_PRODUCTS.map((product, idx) => (
          <ShowcaseCard
            key={product.id}
            product={product}
            index={idx}
            onPlay={() => handlePlayClick(product)}
          />
        ))}
      </div>

      {/* Video Player Modal (Only loads video element on user demand) */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0E1017] border border-amber-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider shrink-0">
                  {selectedProduct.client}
                </span>
                <span className="text-neutral-500 shrink-0">•</span>
                <h3
                  id="video-modal-title"
                  className="text-sm sm:text-base font-bold text-white truncate"
                >
                  {selectedProduct.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close video player"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {!hasVideoError ? (
                <video
                  key={useDemoStream ? 'demo' : selectedProduct.videoUrl}
                  src={useDemoStream ? SAMPLE_TEST_STREAM : selectedProduct.videoUrl}
                  poster={selectedProduct.posterUrl}
                  controls
                  autoPlay
                  playsInline
                  onError={() => setHasVideoError(true)}
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                /* Production Asset Pending Placeholder Screen */
                <div className="flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-1">
                    Production Asset Ready
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Video Slot: {selectedProduct.videoUrl}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    This card is wired and waiting for your media. Drop your video file into{' '}
                    <code className="text-amber-300 bg-black/60 px-1.5 py-0.5 rounded font-mono text-xs">
                      public{selectedProduct.videoUrl}
                    </code>{' '}
                    to enable live playback.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        setHasVideoError(false);
                        setUseDemoStream(true);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 transition-all shadow-md shadow-amber-500/20"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Test Player with Sample Stream</span>
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="px-4 sm:px-6 py-4 border-t border-white/10 bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-neutral-400 max-w-xl">
                <span className="text-white font-medium">{selectedProduct.category}</span> —{' '}
                {selectedProduct.description}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {selectedProduct.duration}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300">
                  {selectedProduct.quality}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Individual Showcase Video Preview Card
interface ShowcaseCardProps {
  product: ProductShowcase;
  index: number;
  onPlay: () => void;
}

function ShowcaseCard({ product, index, onPlay }: ShowcaseCardProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback high-res abstract posters in case local image is still rendering
  const fallbackPoster =
    index === 0
      ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1280&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1280&auto=format&fit=crop';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onPlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay();
        }
      }}
      aria-label={`Play preview for ${product.title}`}
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-[#0E1017] transition-all duration-500 shadow-xl shadow-black/60 hover:shadow-[0_16px_40px_-10px_rgba(245,158,11,0.25)] hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer text-left"
    >
      {/* Aspect Ratio Container for Poster Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0A0C10]">
        {/* Poster Image */}
        <img
          src={imageError ? fallbackPoster : product.posterUrl}
          alt={product.title}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-[#0E1017]/40 to-black/30 group-hover:via-[#0E1017]/25 transition-colors duration-500" />
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Badges Bar */}
        <div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5 flex items-center justify-between pointer-events-none z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-amber-300 text-xs font-semibold shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{product.category}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-neutral-300 text-[11px] font-mono shadow-md">
            <span>{product.duration}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-amber-400 font-semibold">{product.quality}</span>
          </div>
        </div>

        {/* Center Interactive Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 shadow-xl shadow-black/80 group-hover:shadow-amber-500/40 transition-all duration-300">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 fill-current" />
            {/* Subtle Expanding Ripple Ring on Hover */}
            <span className="absolute inset-0 rounded-full border border-amber-400/0 group-hover:border-amber-400/40 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative p-5 sm:p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-[#0E1017] to-[#0A0C10] border-t border-white/5">
        <div>
          {/* Client & Category Sub-label */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">
              {product.client}
            </span>
            {product.highlightPill && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                {product.highlightPill}
              </span>
            )}
          </div>

          {/* Editable Product Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white group-hover:text-amber-200 transition-colors tracking-tight leading-snug">
            {product.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Card Action Link */}
        <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="font-medium text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
            <span>Play Client Showcase</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            {product.videoUrl}
          </span>
        </div>
      </div>
    </div>
  );
}

