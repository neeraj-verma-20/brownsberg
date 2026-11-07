'use client';

import React from 'react';
import { ArrowRight, Play, Sparkles, Video, Layers, BrainCircuit } from 'lucide-react';
import HeroVideo from './HeroVideo';
import HeroProductShowcase from './HeroProductShowcase';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08090C]"
    >
      {/* Background Video with Dark Gradient Overlay & Static Poster Fallback */}
      <HeroVideo
        posterUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-flowing-lines-and-light-particles-40812-large.mp4"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center w-full">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-500/30 backdrop-blur-md mb-8 hover:border-amber-400/50 transition-colors">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-amber-200">
            Next-Gen AI Creative Studio &amp; Learning Architect
          </span>
        </div>

        {/* Premium Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          AI That Tells Stories,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
            Ignites Brands,
          </span>{' '}
          &amp; Transforms Learning.
        </h1>

        {/* Short Engaging Introduction */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Brownsberg engineers cinematic AI-driven videos, high-impact commercial campaigns, and bespoke digital training solutions designed to captivate audiences and elevate organizational intelligence.
        </p>

        {/* Dual CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollTo('#what-we-do')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-[length:200%_auto] hover:bg-right shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>Explore What We Do</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>Let&apos;s Talk</span>
          </button>
        </div>

        {/* Two-Product Client Video Showcase */}
        <HeroProductShowcase />

        {/* Proof / Value Metrics Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-2xl sm:text-3xl">
              <Video className="w-5 h-5 text-amber-400" />
              <span>10x</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Faster Production Velocity</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-2xl sm:text-3xl">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>100%</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Bespoke AI Workflows</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-2xl sm:text-3xl">
              <BrainCircuit className="w-5 h-5 text-amber-400" />
              <span>Enterprise</span>
            </div>
            <span className="text-xs sm:text-sm text-neutral-400 mt-1">Pedagogy &amp; Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
