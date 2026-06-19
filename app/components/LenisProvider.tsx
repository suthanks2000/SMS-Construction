'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally on load
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium slide feel
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Link Lenis scroll to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Frame update loop
    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // Set globally on window for other scripts to hook into if needed
    (window as any).lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

