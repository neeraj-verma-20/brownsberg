import React from 'react';
import { Compass, FileCode2, GraduationCap, ArrowRight, BookOpen, Sparkles, Check } from 'lucide-react';

interface SolutionItem {
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  features: string[];
  metricLabel: string;
  metricValue: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    icon: Compass,
    tag: 'Strategic Architecture',
    title: 'Instructional Design & Learning Strategy',
    description:
      'We combine cognitive psychology, adult learning principles, and modern instructional design frameworks (ADDIE, Agile SAM) to construct impactful learning ecosystems aligned with business KPIs.',
    features: [
      'Comprehensive Learner Needs Analysis & Skill Audits',
      'Cognitive Load Optimization & Pedagogical Blueprints',
      'Competency Frameworks & Measurable Skill Taxonomies',
      'Kirkpatrick Level 1-4 Impact & Retention Metrics',
    ],
    metricValue: '94%',
    metricLabel: 'Learner Engagement Benchmark',
  },
  {
    icon: FileCode2,
    tag: 'Asset Modernization',
    title: 'Content Digitization',
    description:
      'Breathe new life into legacy training binders, classroom manuals, PDFs, and slide decks. We convert static corporate knowledge into interactive, modular, cloud-ready e-learning formats.',
    features: [
      'Conversion of Static Binders & PDFs into Microlearning',
      'Interactive AI Voiceovers, Multi-Language Dubbing & Subtitles',
      'SCORM, xAPI, and cmi5 Standards-Compliant Packaging',
      'Seamless Integration with Leading Enterprise LMS Platforms',
    ],
    metricValue: '4x',
    metricLabel: 'Faster Digital Content Deployment',
  },
  {
    icon: GraduationCap,
    tag: 'Turnkey Programs',
    title: 'Training Courses',
    description:
      'End-to-end bespoke workforce training programs tailored to your organizational goals. From AI literacy masterclasses to compliance, onboarding, and high-stakes executive leadership development.',
    features: [
      'Tailored Role-Based Upskilling & AI Literacy Curricula',
      'Branching Simulations with Real-World Workplace Scenarios',
      'Gamified Knowledge Checkpoints & Verifiable Badging',
      'Progress Dashboards & Enterprise Analytics Reporting',
    ],
    metricValue: '100%',
    metricLabel: 'Tailored to Enterprise Workflows',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#0B0E14] border-t border-white/5">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Content &amp; Learning</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Scalable learning solutions engineered to empower your workforce, modernize knowledge assets, and drive measurable behavioral change.
          </p>
        </div>

        {/* 3 Solutions Service Blocks */}
        <div className="space-y-8">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={solution.title}
                className="group relative rounded-2xl bg-[#11151F]/90 backdrop-blur-md border border-white/10 p-8 sm:p-10 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column: Solution Details */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-300/90 bg-amber-400/10 px-3 py-1 rounded-full">
                          {solution.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {solution.title}
                      </h3>

                      <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                        {solution.description}
                      </p>

                      {/* Features 2-column list */}
                      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-neutral-300 leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>Discuss this solution with our team</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Metric Showcase Card */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-[#090C12] border border-white/5 text-center relative overflow-hidden group-hover:border-amber-500/20 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                    <Sparkles className="w-8 h-8 text-amber-400/40 mb-3" />
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
                      {solution.metricValue}
                    </div>
                    <p className="mt-2 text-sm text-neutral-400 font-medium max-w-[200px]">
                      {solution.metricLabel}
                    </p>
                    <div className="mt-6 w-full py-2.5 px-4 rounded-lg bg-white/5 text-xs text-neutral-300 font-mono text-center border border-white/5">
                      Enterprise Ready &bull; Scalable
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

