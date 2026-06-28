'use client';

import Image from 'next/image';
import { Target, Compass, Milestone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-28 bg-[#0A0F18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5"
          >
            Crafting Architectures of Trust
          </motion.h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Two Image + Text Grid — matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left large image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative h-[300px] sm:h-[400px] lg:min-h-[450px] rounded-[24px] overflow-hidden group"
          >
            <Image
              src="/about-arch.png"
              alt="Luxury architecture detailing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 to-transparent" />
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center gap-6"
          >
            <p className="text-[15px] text-[#8B95A5] leading-[1.8]">
              SMS Construction has spent over a decade redefining luxury builds and corporate spaces. Through rigorous planning, precision engineering, and high-end aesthetics, we guide projects from initial sketch to completion.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-[16px]">
                <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                  <Target size={16} strokeWidth={1.5} />
                  <h4 className="font-bold text-white text-[13px]">Our Mission</h4>
                </div>
                <p className="text-[12px] text-[#8B95A5] leading-relaxed">
                  Build high-end spaces combining timeless luxury and strict safety.
                </p>
              </div>
              <div className="glass-card p-5 rounded-[16px]">
                <div className="flex items-center gap-2 text-[#FBBF24] mb-2">
                  <Compass size={16} strokeWidth={1.5} />
                  <h4 className="font-bold text-white text-[13px]">Our Vision</h4>
                </div>
                <p className="text-[12px] text-[#8B95A5] leading-relaxed">
                  The top choice for luxury construction and custom designs across the state.
                </p>
              </div>
            </div>

            {/* Experience badge */}
            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
              <Milestone size={20} className="text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-sm font-bold text-white">15+ Years of Execution</span>
                <span className="text-[12px] text-[#8B95A5] block mt-0.5">Residential, interior, and commercial excellence.</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#D4AF37] text-[13px] font-semibold hover:gap-3 transition-all duration-300 w-fit"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
