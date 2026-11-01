import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquareQuote, Sparkles } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B0E14] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                  Extraordinary
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
                Whether you need a high-concept AI brand film, a high-converting ad blitz, or an enterprise-grade learning curriculum, we are ready to bring your vision to life.
              </p>

              {/* Direct Info List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">Email Inquiries</span>
                    <a href="mailto:hello@brownsberg.com" className="text-sm sm:text-base font-medium text-white hover:text-amber-400 transition-colors">
                      hello@brownsberg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">Direct Line</span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      +1 (800) 555-BROWNS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">Turnaround Time</span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      First response within 24 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Client Promise Box */}
              <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-2 border-amber-400">
                <div className="flex gap-3">
                  <MessageSquareQuote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    &ldquo;Every Brownsberg engagement begins with an exploratory creative or pedagogical consultation to identify exact deliverables, timelines, and measurable goals.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

