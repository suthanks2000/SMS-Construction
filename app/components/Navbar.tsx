'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Navbar hide/show scroll logic
      if (window.scrollY > 120) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true); // at the top
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Our Legacy', href: '#about' },
    { name: 'Curated Showcase', href: '#portfolio' },
    { name: 'Floor Layouts', href: '#floor-plans' },
    { name: 'Premium Amenities', href: '#amenities' },
    { name: 'Heritage Locations', href: '#location' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxury-glass border-b border-luxury-border-gold py-4 backdrop-blur-md' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex flex-col select-none group">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-luxury-champagne group-hover:text-luxury-soft-gold transition-colors duration-300">
            SMS
          </span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-luxury-text-secondary mt-[-2px] group-hover:text-luxury-gold transition-colors duration-300">
            Construction
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-widest text-luxury-text-secondary hover:text-luxury-soft-gold transition-colors duration-300 font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group flex items-center gap-2 border border-luxury-gold/50 bg-luxury-secondary/50 text-luxury-soft-gold hover:text-luxury-bg hover:bg-luxury-gold hover:border-luxury-gold px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            Inquire Now
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-luxury-text-primary hover:text-luxury-gold transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Panel */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-luxury-secondary border-l border-luxury-border-gold z-40 transform transition-transform duration-500 ease-out lg:hidden flex flex-col p-8 pt-24 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm uppercase tracking-widest text-luxury-text-primary hover:text-luxury-gold transition-colors duration-300 font-semibold border-b border-luxury-graphite pb-3"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group flex items-center justify-center gap-2 border border-luxury-gold bg-luxury-secondary text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 mt-4"
          >
            Inquire Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-auto text-center border-t border-luxury-graphite pt-6">
          <p className="font-serif text-lg font-semibold text-luxury-champagne">SMS Construction</p>
          <p className="text-[10px] text-luxury-text-secondary uppercase tracking-wider mt-1">Nagercoil, Kanyakumari</p>
        </div>
      </div>
    </motion.nav>
  );
}
