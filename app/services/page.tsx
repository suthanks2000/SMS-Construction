'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Compass, Layers, HardHat, Hammer, Box, Paintbrush, Shield, Check, PhoneCall, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ServiceData {
  id: string;
  title: string;
  seoHeading: string;
  description: string;
  icon: React.ComponentType<{ size?: number | string; strokeWidth?: number }>;
  subServices: string[];
  image: string;
}

export default function ServicesPage() {
  const services: ServiceData[] = [
    {
      id: 'surveying',
      title: 'Surveying',
      seoHeading: 'Professional Land Surveying & Boundary Analysis',
      description: 'Professional land surveying services using modern equipment for accurate land measurement, boundary identification, layout marking, and construction planning. We establish absolute site coordinates to ensure structural safety and smooth layout mapping.',
      icon: Compass,
      subServices: [
        'Tape Survey',
        'Digital Survey',
        'Total Station Survey',
        'Contour Survey',
        'Topographic Survey',
        'Layout Survey',
        'FMB Survey',
        'Building Marking',
      ],
      image: '/about-arch.png',
    },
    {
      id: 'planning',
      title: 'Architectural Planning',
      seoHeading: 'Precision Architectural Planning & Structural Engineering',
      description: 'Complete architectural planning and engineering drawings for residential, commercial, and industrial projects with approval-ready documentation. We combine space optimization with Vastu principles to deliver layouts tailored to modern lifestyles.',
      icon: Layers,
      subServices: [
        'House Plans',
        'Commercial Plans',
        'Villa Plans',
        'Vastu Plans',
        '3D Floor Plans',
        'Electrical Drawings',
        'Plumbing Drawings',
        'Landscape Drawings',
      ],
      image: '/project-home.png',
    },
    {
      id: 'construction',
      title: 'Construction',
      seoHeading: 'Elite Building Contractors & Residential Construction',
      description: 'Complete end-to-end construction services for residential, commercial, and industrial projects with quality workmanship, strict safety compliance, and timely delivery. From foundations to final finishes, we manage turnkey structures with excellence.',
      icon: HardHat,
      subServices: [
        'Residential Construction',
        'Commercial Construction',
        'Industrial Construction',
        'Renovation Works',
        'Turnkey Projects',
      ],
      image: '/hero-villa.png',
    },
    {
      id: 'fabrication',
      title: 'Fabrication',
      seoHeading: 'Custom Steel, Glass & Aluminium Fabrication Works',
      description: 'Custom fabrication solutions using premium materials for modern buildings and commercial spaces. Our engineers deliver durable canopy systems, claddings, and elevation glazing designed to withstand high environmental loads.',
      icon: Hammer,
      subServices: [
        'ACP Elevation',
        'Roofing',
        'Glass Fabrication',
        'Aluminium Fabrication',
        'Structural Fabrication',
      ],
      image: '/project-commercial.png',
    },
    {
      id: 'design',
      title: 'Design',
      seoHeading: 'High-End 3D Elevation Design & Spatial Interior Concepts',
      description: 'Creative architectural and interior design solutions that combine functionality, aesthetics, and innovation. We utilize advanced rendering software to let you explore materials, colors, and layout configurations before construction starts.',
      icon: Box,
      subServices: [
        '3D Elevation Design',
        'Interior Design',
        'Exterior Design',
        'Wall Design',
        'Landscape Design',
      ],
      image: '/project-interior.png',
    },
    {
      id: 'interiors',
      title: 'Interior Works',
      seoHeading: 'Bespoke Interior Work & Modular Fit-Out Solutions',
      description: 'Premium interior solutions to create elegant, modern, and functional living and commercial spaces. From high-finish false ceilings to spacious modular kitchens, we bring luxury detailing into every room.',
      icon: Paintbrush,
      subServices: [
        'False Ceiling',
        'Modular Kitchen',
        'Wardrobe',
        'TV Unit',
        'Glass Work',
        'Texture Painting',
        'Wallpaper',
        'Vinyl Flooring',
      ],
      image: '/project-interior.png',
    },
    {
      id: 'railing',
      title: 'Railing',
      seoHeading: 'Architectural Railing Systems & Balcony Guarding',
      description: 'Stylish and durable railing solutions for homes, commercial buildings, balconies, staircases, and terraces. Built with anti-corrosive stainless steel and toughened structural glass for safety and architectural elegance.',
      icon: Shield,
      subServices: [
        'SS Railing',
        'Glass Railing',
        'Aluminium Railing',
        'Toughened Glass Railing',
      ],
      image: '/about-arch.png',
    },
  ];

  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Services Sub Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-villa.png"
            alt="SMS Construction Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#080C14]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            Services Suite
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight"
          >
            Timeless Design, <span className="italic text-gradient-gold">Precision Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto"
          >
            SMS Construction offers end-to-end building services across Tamil Nadu, from boundary land surveying and architectural layout plans to custom construction claddings.
          </motion.p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-36">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Frame */}
              <div
                className={`lg:col-span-5 relative h-[300px] sm:h-[380px] rounded-[24px] overflow-hidden border border-white/[0.04] group shadow-lg ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.seoHeading}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 to-transparent" />
              </div>

              {/* Text Content */}
              <div
                className={`lg:col-span-7 flex flex-col items-start ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Heading with Icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
                    {service.title}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-5 leading-snug">
                  {service.seoHeading}
                </h2>

                <p className="text-[14px] text-[#8B95A5] leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>

                {/* Sub Services Grid */}
                <div className="w-full mb-8">
                  <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
                    Specializations &amp; Deliverables
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub}
                        className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl hover:border-[#D4AF37]/20 transition-all duration-300"
                      >
                        <Check size={12} className="text-[#D4AF37] shrink-0" />
                        <span className="text-[12px] text-white/90 font-medium truncate">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#080C14] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#FBBF24] active:scale-95 transition-all duration-300"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="tel:+919443200000"
                    className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 text-white font-medium text-[13px] px-6 py-3 rounded-full hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <PhoneCall size={12} className="text-[#D4AF37]" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      {/* Bottom Final CTA */}
      <section className="bg-[#060A10] border-t border-white/[0.04] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4 mb-5">
            Planning Your Development Project?
          </h2>
          <p className="text-sm text-[#8B95A5] max-w-xl mx-auto mb-8">
            Consult with our land surveyors, blueprint draftsmen, and building engineers. We offer complimentary initial estimates and layouts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#FBBF24] active:scale-95 transition-all duration-300"
          >
            <span>Request Free Quotation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
