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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = (href: string, name?: string) => {
    if (name === 'Order') {
      return false;
    }
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return pathname === '/';
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === '/' ? window.innerHeight - 80 : 20;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Order', href: '/contact' },
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

  const phoneIconVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, -20, 20, -20, 20, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  };

  const callBtnVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0 4px 12px rgba(212, 175, 55, 0.15)" },
    hover: { scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)" }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 shine-white ${
          scrolled
            ? 'top-0 w-full max-w-full rounded-none py-3.5 px-8 bg-gradient-to-r from-[#0C1220]/95 via-[#070B14]/98 to-[#0C1220]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
            : 'top-6 w-[92%] max-w-5xl rounded-full py-4 px-6 bg-gradient-to-r from-[#0C1220]/75 via-[#070B14]/80 to-[#0C1220]/75 backdrop-blur-md border border-white/[0.05] hover:border-white/[0.1] shadow-lg'
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

          <nav className="hidden lg:flex gap-1.5 items-center">
            {navLinks.map((link, index) => {
              const active = isActive(link.href, link.name);
              return (
                <motion.div
                  key={link.name}
                  variants={navItem}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-[15px] font-semibold tracking-wide relative block rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 shine-white ${
                      active ? 'text-[#D4AF37]' : 'text-[#8B95A5] hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!active && hoveredIndex === index && (
                      <motion.span
                        layoutId="hoverPill"
                        className="absolute inset-0 bg-white/[0.06] border border-white/5 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.div variants={navItem} className="hidden lg:flex items-center">
            <motion.a
              href="tel:+919443200000"
              variants={callBtnVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold text-[13px] px-5 py-2.5 rounded-full shine-gold transition-all duration-300 cursor-pointer"
            >
              <motion.span variants={phoneIconVariants} className="flex items-center justify-center">
                <PhoneCall size={13} />
              </motion.span>
              <span>Call Now</span>
            </motion.a>
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
                const active = isActive(link.href, link.name);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-serif font-semibold transition-colors duration-300 ${
                      active ? 'text-[#D4AF37]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <motion.a
              href="tel:+919443200000"
              onClick={() => setIsOpen(false)}
              variants={callBtnVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold px-8 py-3 rounded-full shine-gold transition-all duration-300 cursor-pointer"
            >
              <motion.span variants={phoneIconVariants} className="flex items-center justify-center">
                <PhoneCall size={18} />
              </motion.span>
              <span>Call Now</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
