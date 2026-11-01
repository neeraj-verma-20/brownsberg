import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Zap, Award, Target } from 'lucide-react';

const PILLARS = [
  {
    icon: Award,
    title: 'Auteur Directorial Vision',
    description: 'AI generates possibilities; human directors craft soul, emotion, and cinematic cadence.',
  },
  {
    icon: Target,
    title: 'Cognitive Science Grounded',
    description: 'Every learning module is built upon proven adult learning and memory retention principles.',
  },
  {
    icon: Zap,
    title: '10x Production Agility',
    description: 'Accelerate turnaround from quarterly roadmaps down to days with bespoke AI pipelines.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise IP & Confidentiality',
    description: 'Commercial clearances, private models, and strict enterprise security standards.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#08090C] border-t border-white/5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Brownsberg</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Where High-End Artistry Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Cognitive Intelligence
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Brownsberg was founded on a singular conviction: artificial intelligence does not replace human ingenuity — it unlocks its highest dimension. We bridge the world of top-tier cinematic production with modern cognitive learning science.
            </p>

            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              Whether conceptualizing emotional brand documentaries, launching viral multi-variant ad campaigns, or architecting enterprise-scale training curricula, our multidisciplinary team orchestrates state-of-the-art generative pipelines to deliver unmatched quality at 10x traditional speed.
            </p>

            {/* Core Values / Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">{pillar.title}</h4>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Supporting Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121622] shadow-2xl group">
              {/* Supporting visual image */}
              <div className="relative h-96 sm:h-[480px] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
                  alt="Brownsberg AI Creative & Learning Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent" />
              </div>

              {/* Overlay Glass Floating Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0F131D]/90 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                      Creative &bull; Learning &bull; AI
                    </p>
                    <p className="text-base font-bold text-white mt-1">
                      Crafting the future of human capability
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-[#0F131D] flex items-center justify-center text-black font-bold text-xs">
                      AI
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#0F131D] flex items-center justify-center text-amber-400 font-bold text-xs">
                      ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

