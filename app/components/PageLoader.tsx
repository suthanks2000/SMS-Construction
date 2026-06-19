'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 w-screen h-screen bg-luxury-bg z-[9999] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle glowing radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />

          {/* Central Logo Content */}
          <div className="flex flex-col items-center relative z-10 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15, letterSpacing: '0.15em' }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                letterSpacing: '0.35em',
                transition: { duration: 1.2, ease: 'easeOut' }
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-gold text-center tracking-[0.35em]"
            >
              SMS CONSTRUCTION
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
              className="h-[1px] bg-luxury-gold/50 w-24 origin-center"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-luxury-champagne font-sans"
            >
              Nagercoil • Kanyakumari
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
