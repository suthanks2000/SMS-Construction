'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ArchitecturalCanvas from './ArchitecturalCanvas';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP text and canvas reveal timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, delay: 0.2 }
      )
      .fromTo(
        titleLine1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        '-=1.0'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '-=1.0'
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0 },
        '-=1.0'
      )
      .fromTo(
        canvasContainerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1 },
        '-=1.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#portfolio');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-luxury-bg flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-luxury-gold" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-luxury-gold" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-luxury-gold" />
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-luxury-champagne/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
        >
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left">
          
          <div>
            <span 
              ref={tagRef}
              className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-luxury-gold mb-2 select-none"
            >
              SMS Construction • Nagercoil
            </span>
            <h1 
              ref={titleLine1Ref}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-luxury-text-primary tracking-tight"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-champagne via-luxury-soft-gold to-luxury-gold">
                Legacies of Luxury
              </span>
            </h1>
          </div>

          <p 
            ref={descRef}
            className="text-sm md:text-base text-luxury-text-secondary font-light max-w-xl leading-relaxed"
          >
            From the serene, green foothills of the Western Ghats to the stunning coastlines of Kanyakumari, we craft bespoke residences, premium villas, and landmark luxury developments built to last generations.
          </p>

          {/* Button Group */}
          <div 
            ref={btnsRef}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#portfolio"
              onClick={handleScrollToPortfolio}
              className="group flex items-center justify-center bg-luxury-gold border border-luxury-gold text-luxury-bg hover:bg-transparent hover:text-luxury-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.3)]"
            >
              Explore Portfolio
            </a>
            
            <a
              href="#contact"
              className="group flex items-center justify-center border border-luxury-graphite hover:border-luxury-gold text-luxury-text-primary hover:text-luxury-soft-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 bg-luxury-secondary/40 backdrop-blur-sm"
            >
              Request Presentation
            </a>
          </div>

        </div>

        {/* Right Column: 3D Architectural Canvas */}
        <div 
          ref={canvasContainerRef}
          className="lg:col-span-5 h-[350px] md:h-[500px] w-full flex items-center justify-center relative rounded-2xl bg-gradient-to-b from-luxury-secondary/35 to-transparent border border-luxury-border-gold shadow-[0_24px_50px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-luxury-bg/60 border border-luxury-border-gold backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-wider text-luxury-soft-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            3D Wireframe Explorer
          </div>

          <ArchitecturalCanvas />

          <div className="absolute bottom-4 right-4 text-[9px] text-luxury-text-secondary uppercase tracking-widest select-none pointer-events-none font-mono">
            Drag to Rotate
          </div>
        </div>

        </motion.div>
      </div>

      {/* Downward Navigation Pointer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a 
          href="#about"
          className="flex flex-col items-center text-[10px] text-luxury-text-secondary hover:text-luxury-gold uppercase tracking-[0.2em] transition-colors duration-300 gap-2"
        >
          Scroll Down
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-luxury-gold" />
        </a>
      </div>
    </section>
  );
}
