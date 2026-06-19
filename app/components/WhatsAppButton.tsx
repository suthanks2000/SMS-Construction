'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { WhatsappLogo } from '@phosphor-icons/react';

export default function WhatsAppButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      // Infinite pulse animation using anime.js v4 animate
      animate(buttonRef.current, {
        scale: [1, 1.06, 1],
        boxShadow: [
          '0 0 0 0 rgba(212,175,55,0.25)',
          '0 0 0 14px rgba(212,175,55,0.45)',
          '0 0 0 0 rgba(212,175,55,0)'
        ],
        duration: 1600,
        loop: true,
        ease: 'inOutSine'
      });
    }
  }, []);

  return (
    <a
      ref={buttonRef}
      href="https://wa.me/919443423345"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-luxury-secondary border border-luxury-border-gold flex items-center justify-center text-luxury-gold cursor-pointer shadow-lg shadow-black/40 hover:text-luxury-soft-gold"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappLogo className="w-8 h-8" weight="fill" />
    </a>
  );
}
