import React from 'react';
import { Film, Zap, Brain, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  gradient: string;
  glowClass: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Film,
    badge: 'Cinematic Storytelling',
    title: 'Telling Stories with AI',
    description:
      'We merge auteur-grade cinematic direction with breakthrough generative AI video models. From world-building and character consistency to emotional brand films, we bring high-concept narratives to life at unprecedented scale.',
    deliverables: [
      'Script-to-Screen Visual Synthesis',
      'Hyper-Realistic Character & Scene Continuity',
      'Cinematic Brand Documentaries & Fiction',
      'AI-Assisted Direction & Soundscapes',
    ],
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
    glowClass: 'group-hover:border-amber-500/40',
  },
  {
    icon: Zap,
    badge: 'High-Impact Performance',
    title: 'Ads with AI',
    description:
      'Supercharge your marketing pipeline with high-converting, visually arresting commercials. We rapidly produce multi-variant creative assets optimized for YouTube, TikTok, Meta, and broadcast television.',
    deliverables: [
      'Rapid Multi-Variant Creative Testing',
      'Multi-Format Deliverables (9:16, 16:9, 1:1, 4:5)',
      'Photorealistic Product Visual Effects & Motion',
      'High-Conversion Hooks & Emotional Angles',
    ],
    gradient: 'from-amber-400/20 via-amber-400/5 to-transparent',
    glowClass: 'group-hover:border-amber-400/40',
  },
  {
    icon: Brain,
    badge: 'Next-Gen Education',
    title: 'Learning with AI',
    description:
      'Transform complex knowledge into addictive, learner-centric experiences. We build synthetic AI tutors, interactive scenario simulators, and responsive micro-learning modules that maximize information retention.',
    deliverables: [
      'Synthetic AI Facilitators & Voice Avatars',
      'Branching Scenario-Based Decision Labs',
      'Adaptive Micro-Learning Pathways',
      'Interactive Retention & Skill Checkpoints',
    ],
    gradient: 'from-amber-600/20 via-amber-600/5 to-transparent',
    glowClass: 'group-hover:border-amber-600/40',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-24 sm:py-32 bg-[#08090C] border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Harnessing state-of-the-art artificial intelligence to conceive, produce, and deploy premium creative content and dynamic educational experiences.
          </p>
        </div>

        {/* 3 Service Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between rounded-2xl bg-[#0F1218]/80 backdrop-blur-md border border-white/10 p-8 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60`}
              >
                {/* Subtle top card gradient highlight */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top row: Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 group-hover:scale-105 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-mono font-bold text-neutral-700 group-hover:text-amber-500/50 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-xs font-medium tracking-wide text-amber-300/90 uppercase mb-3">
                    {service.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Key Highlights
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="relative z-10 mt-8 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

