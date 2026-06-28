'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return pathname === '/';
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const navContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const navItem = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-500 rounded-full ${
          scrolled
            ? 'top-4 py-3 px-6 bg-[#080C14]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'top-6 py-4 px-6 bg-[#080C14]/50 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        <motion.div 
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center w-full"
        >
          <motion.div variants={navItem}>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="SMS Construction Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-serif font-bold text-base tracking-wide text-gradient-gold">
                SMS CONSTRUCTION
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <motion.div key={link.name} variants={navItem}>
                  <Link
                    href={link.href}
                    className={`text-[13px] font-semibold transition-colors duration-300 tracking-wide relative pb-1.5 ${
                      active ? 'text-[#D4AF37]' : 'text-[#8B95A5] hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.div variants={navItem} className="hidden lg:flex items-center">
            <a
              href="tel:+919443200000"
              className="flex items-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold text-[12px] px-5 py-2 rounded-full hover:bg-[#FBBF24] active:scale-95 transition-all duration-300"
            >
              <PhoneCall size={12} />
              <span>Call Now</span>
            </a>
          </motion.div>

          <motion.button
            variants={navItem}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#080C14]/98 z-40 lg:hidden flex flex-col justify-center items-center gap-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-serif font-semibold transition-colors ${
                      active ? 'text-[#D4AF37]' : 'text-white/80 hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <a
              href="tel:+919443200000"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold px-8 py-3 rounded-full"
            >
              <PhoneCall size={18} />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
