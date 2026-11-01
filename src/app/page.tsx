import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Solutions from '@/components/Solutions';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F8FAFC] overflow-x-hidden selection:bg-amber-500/30">
      {/* 1. Header Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero with Cinematic Video & Fallback */}
        <Hero />

        {/* 3. What We Do (Telling Stories with AI, Ads with AI, Learning with AI) */}
        <WhatWeDo />

        {/* 4. Our Solutions (Instructional Design, Content Digitization, Training Courses) */}
        <Solutions />

        {/* 5. About (Brand Philosophy & Value Pillars) */}
        <About />

        {/* 6. Contact & Google Forms Integrated Enquiry */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

