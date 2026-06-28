'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#060A10] border-t border-white/[0.04] pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Scroll to Top Button */}
      <div className="absolute right-8 top-0 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0D1117] border border-white/[0.06] flex items-center justify-center text-[#D4AF37] hover:bg-white/[0.05] active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left relative z-10">
        
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="SMS Construction Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-bold text-lg text-gradient-gold tracking-wide">SMS CONSTRUCTION</span>
          </Link>
          <p className="text-[13px] text-[#8B95A5] leading-[1.7]">
            Redefining luxury building and industrial developments through digital blueprint precision and elite engineering execution.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Projects', href: '/projects' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13px] text-[#8B95A5] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Land Surveying', href: '/services#surveying' },
              { name: 'Architectural Planning', href: '/services#planning' },
              { name: 'Building Construction', href: '/services#construction' },
              { name: 'Fabrication Works', href: '/services#fabrication' },
              { name: 'Elevation & Design', href: '/services#design' },
              { name: 'Premium Interior Works', href: '/services#interiors' },
              { name: 'Railing Systems', href: '/services#railing' },
            ].map((srv) => (
              <li key={srv.name}>
                <Link
                  href={srv.href}
                  className="text-[13px] text-[#8B95A5] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {srv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            Helpline
          </h4>
          <ul className="flex flex-col gap-4 text-[13px] text-[#8B95A5]">
            <li className="flex items-center gap-2.5">
              <Phone size={13} className="text-[#D4AF37] shrink-0" />
              <a href="tel:+919443200000" className="hover:text-[#D4AF37] transition-colors duration-300">
                +91 94432 00000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={13} className="text-[#D4AF37] shrink-0" />
              <a href="mailto:info@smsconstruction.in" className="hover:text-[#D4AF37] transition-colors duration-300">
                info@smsconstruction.in
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <a href="https://www.google.com/maps/place/SMS+CONSTRUCTION/@8.1806879,77.4308973,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f108ea52fa71:0x479afff108b86846!8m2!3d8.1806879!4d77.4308973!16s%2Fg%2F11jt3gf8tv" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300">
                Nagercoil, TN, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer copyright & socials */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[11px] text-[#8B95A5]">
          © {new Date().getFullYear()} SMS Construction Group. All rights reserved.
        </p>
        
        <div className="flex gap-3">
          {[
            { label: 'Facebook', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z' },
            { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
          ].map((soc) => (
            <a
              key={soc.label}
              href="#"
              className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-[#8B95A5] hover:text-[#D4AF37] hover:border-[#D4AF37]/20 hover:scale-105 transition-all duration-300"
              aria-label={soc.label}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                <path d={soc.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
