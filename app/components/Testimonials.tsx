'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jameson Sterling',
      role: 'CEO, Zenith Realty Group',
      feedback: 'SMS Construction exceeded all expectations. Their structural design team took our initial drafts and turned them into a luxurious modern glass penthouse. Precision, transparency, and top-tier execution.',
      rating: 5,
      initials: 'JS',
    },
    {
      name: 'Elena Laurent',
      role: 'Principal Architect, Atelier EL',
      feedback: 'Working with SMS on municipal approvals and 3D visualization was seamless. They handled everything without delays, showing absolute compliance and professionalism.',
      rating: 5,
      initials: 'EL',
    },
    {
      name: 'Dr. Anand Kumar',
      role: 'Director, Kumar Hospitals',
      feedback: 'Our commercial clinic expansion required strict safety guidelines and exact planning. SMS Construction delivered the project on time and with outstanding quality controls.',
      rating: 5,
      initials: 'AK',
    },
  ];

  const handleNext = () => setActiveIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  const handlePrev = () => setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section id="testimonials" className="py-14 sm:py-28 bg-[#0A0F18] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5">
            Trusted By Visionaries
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-6 sm:p-10 rounded-[24px] relative text-left max-w-2xl mx-auto"
            >
              <Quote className="absolute right-8 top-8 text-white/[0.03] w-20 h-20 pointer-events-none" />

              <div className="flex gap-1 text-[#D4AF37] mb-5">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-[15px] text-white/90 leading-[1.8] mb-8 relative z-10">
                &quot;{testimonials[activeIndex].feedback}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-white/[0.06] pt-5">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#080C14] font-bold text-sm">
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonials[activeIndex].name}</h4>
                  <p className="text-[12px] text-[#8B95A5] mt-0.5">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 justify-center mt-8">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#8B95A5] hover:text-[#D4AF37] hover:border-[#D4AF37]/20 active:scale-95 transition-all cursor-pointer" aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'bg-[#D4AF37] scale-125' : 'bg-white/10'}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
          <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#8B95A5] hover:text-[#D4AF37] hover:border-[#D4AF37]/20 active:scale-95 transition-all cursor-pointer" aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
