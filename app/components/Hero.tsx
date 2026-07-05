'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {


  const wordsLine1 = "Building Excellence,".split(" ");
  const wordsLine2 = "Crafting Luxury".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      }
    }
  };

  const wordVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const contentFadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero 4.png"
          alt="SMS Construction Luxury Villa"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 via-[#080C14]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/35 via-transparent to-transparent" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 md:pt-0">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight flex flex-wrap justify-center gap-x-4 overflow-hidden"
        >
          <span className="flex flex-wrap justify-center gap-x-3 w-full">
            {wordsLine1.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-1">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-3 w-full">
            {wordsLine2.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-1">
                <motion.span variants={wordVariants} className="inline-block text-gradient-gold italic">
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          variants={contentFadeIn}
          initial="hidden"
          animate="visible"
          className="text-[14px] sm:text-lg text-white/70 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
        >
          Premium construction, bespoke interior design, and seamless project management — transforming architectural visions into enduring masterpieces.
        </motion.p>

        <motion.div
          variants={contentFadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xs sm:max-w-none mx-auto w-full"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#D4AF37] text-[#080C14] font-semibold text-[13px] sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#FBBF24] transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(212,175,55,0.15)] group"
          >
            <span>Get Free Quote</span>
            <ArrowRight size={16} className="group-hover:translate-x-2.5 transition-transform duration-300" />
          </motion.a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/15 text-white font-medium text-[13px] sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/15 active:scale-95 transition-all duration-300 group relative overflow-hidden"
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-[260px] pointer-events-none"
            />
            <span>View Projects</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 sm:gap-2"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-4 sm:h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
