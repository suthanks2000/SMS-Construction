'use client';

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0E0E0E] border-t border-luxury-gold/25 pt-20 pb-10 relative">
      
      {/* Scroll to Top Trigger */}
      <button 
        onClick={handleScrollTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-luxury-secondary border border-luxury-border-gold flex items-center justify-center text-luxury-gold hover:text-luxury-bg hover:bg-luxury-gold transition-all duration-300 shadow-lg cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 animate-pulse" />
      </button>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Block */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col select-none">
            <span className="font-serif text-3xl font-bold tracking-wide text-luxury-champagne">
              SMS
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-text-secondary mt-[-2px]">
              Construction
            </span>
          </div>
          <p className="text-sm text-luxury-text-secondary leading-relaxed font-light">
            Architecting iconic structures and curated luxury living environments across Nagercoil and Kanyakumari District. Creating legacies built to endure generations.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-text-secondary hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 bg-luxury-bg/50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-text-secondary hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 bg-luxury-bg/50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-text-secondary hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 bg-luxury-bg/50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h4 className="font-serif text-lg text-luxury-champagne font-medium tracking-wide mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-luxury-text-secondary font-light">
            <li>
              <a href="#about" className="hover:text-luxury-soft-gold transition-colors duration-300">About Our Legacy</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-luxury-soft-gold transition-colors duration-300">Curated Showcase</a>
            </li>
            <li>
              <a href="#floor-plans" className="hover:text-luxury-soft-gold transition-colors duration-300">Floor Layouts</a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-luxury-soft-gold transition-colors duration-300">Premium Amenities</a>
            </li>
            <li>
              <a href="#location" className="hover:text-luxury-soft-gold transition-colors duration-300">Heritage Locations</a>
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h4 className="font-serif text-lg text-luxury-champagne font-medium tracking-wide mb-6">
            Corporate Office
          </h4>
          <ul className="space-y-4 text-sm text-luxury-text-secondary leading-relaxed font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <span>
                SMS Tower, Court Road,<br />
                Nagercoil, Kanyakumari District,<br />
                Tamil Nadu - 629001, India.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
              <a href="tel:+914652234567" className="hover:text-luxury-soft-gold transition-colors duration-300">+91 (4652) 234567</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
              <a href="mailto:sales@smsconstruction.in" className="hover:text-luxury-soft-gold transition-colors duration-300">sales@smsconstruction.in</a>
            </li>
          </ul>
        </div>

        {/* Site Hours & Certifications */}
        <div>
          <h4 className="font-serif text-lg text-luxury-champagne font-medium tracking-wide mb-6">
            Lounge Hours
          </h4>
          <p className="text-sm text-luxury-text-secondary font-light leading-relaxed mb-4">
            Visit our experience center in Nagercoil for a physical tour of mock villas.
          </p>
          <div className="bg-luxury-bg/50 border border-luxury-graphite rounded-lg p-4 text-xs space-y-2 text-luxury-text-secondary font-light">
            <div className="flex justify-between">
              <span>Mon - Sat:</span>
              <span className="text-luxury-soft-gold font-medium">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between border-t border-luxury-graphite/40 pt-2">
              <span>Sunday:</span>
              <span className="text-luxury-gold font-medium">By Appointment Only</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-luxury-graphite/40 flex flex-col md:flex-row items-center justify-between text-xs text-luxury-text-secondary font-light gap-4">
        <div>
          &copy; {new Date().getFullYear()} SMS Construction. All rights reserved. Nagercoil, Kanyakumari, Tamil Nadu, India.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Terms of Use</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">TN RERA Registered</a>
        </div>
      </div>
    </footer>
  );
}
