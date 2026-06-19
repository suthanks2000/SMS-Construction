'use client';

import { useState } from 'react';
import ProjectVisual from './ProjectVisual';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { MapPin, Expand, Layers, FileText, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Project {
  id: number;
  image: string;
  title: string;
  location: string;
  type: string;
  area: string;
  status: string;
  description: string;
  specifications: string[];
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      image: '/1.jpeg',
      title: 'The Palms Oceanfront Estate',
      location: 'Kanyakumari Beachside, TN',
      type: 'Private Beachfront Villas',
      area: '5,500 Sq. Ft.',
      status: 'Ready for Fitouts',
      description: 'An elite collection of high-end duplex villas overlooking the confluence of the three oceans. Designed with floor-to-ceiling structural glass facades to capture the coastal sunrises.',
      specifications: [
        '4 Ensuite Bedrooms with Walk-in Closets',
        'Private Glass-walled Infinity Pool',
        'Imported Italian Marble Flooring',
        'Automated Smart-Home Control Panels',
        'Double-height Living Lounge'
      ]
    },
    {
      id: 2,
      image: '/2.jpeg',
      title: 'Oasis Royal Pavilion',
      location: 'Court Road Enclave, Nagercoil',
      type: 'Bespoke Premium Villas',
      area: '4,800 Sq. Ft.',
      status: 'Under Construction',
      description: 'Tucked away in the most prestigious residential enclave of Nagercoil. Modernist architecture featuring massive cantilevers, private courtyard gardens, and structural metal columns.',
      specifications: [
        '4 BHK Duplex Layout + Home Theatre room',
        'Premium Seasoned Teak Wood Entrance Portal',
        'Sunken Lounge with Outdoor Firepit',
        'Fully Modular Kitchen with German Fitments',
        'Triple Car Automated Garage'
      ]
    },
    {
      id: 3,
      image: '/3.jpeg',
      title: 'The Summit Penthouses',
      location: 'Vadasery Heights, Nagercoil',
      type: 'Luxury Sky Residences',
      area: '3,200 Sq. Ft.',
      status: 'Ready to Move',
      description: 'Elevated lifestyle units on the highest floors offering sweeping views of the Western Ghats. Crafted for individuals who appreciate architectural scale and minimalist luxury.',
      specifications: [
        '3 BHK + Multipurpose Family Den',
        'Rooftop Skypark Access & Jogging Track',
        'Private Terrace Plunge Pool',
        'Acoustically Treated Glass Windows',
        '24/7 Premium Concierge Service'
      ]
    },
    {
      id: 4,
      image: '/4.jpeg',
      title: 'The Teakwood Manor',
      location: 'Heritage Valley, Suchindram',
      type: 'Modern Countryside Villas',
      area: '6,200 Sq. Ft.',
      status: 'Pre-launch Phase',
      description: 'Blending local architectural vernacular with contemporary geometry. Features extensive use of seasoned teak, granite arches, and courtyards designed for natural cross-ventilation.',
      specifications: [
        '5 BHK with Private Elevators',
        'Traditional Central Courtyard (Muttram)',
        'Eco-friendly Solar Grid & Water Treatment',
        'Vastu-Compliant Space Orientations',
        'Private Landscaped Orchard'
      ]
    },
    {
      id: 5,
      image: '/5.jpeg',
      title: 'Aura Grand Crest',
      location: 'Marthandam Hillside, Kanyakumari',
      type: 'Boutique Forest Estates',
      area: '5,000 Sq. Ft.',
      status: 'Under Construction',
      description: 'Ultra-exclusive villas sitting on gentle hill slopes, surrounded by dense greenery. Employs sustainable green concrete and local stone structures that integrate with the geography.',
      specifications: [
        '4 BHK + Office Space & Lounge Room',
        'Solar Roof Panels Generating 12KW',
        'Rainwater Harvesting & Filtration System',
        'Floor-to-ceiling Glass overlooking Valleys',
        'Wrap-around Wooden Deck'
      ]
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-luxury-secondary border-t border-luxury-graphite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        
        {/* Title and Controls header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
              SMS Architectural Portfolio
            </h2>
            <div className="w-16 h-[1px] bg-luxury-gold mt-6" />
          </div>
          <p className="text-sm text-luxury-text-secondary font-light max-w-sm leading-relaxed">
            Discover our collection of premier real estate developments across Nagercoil and Kanyakumari, built to global standards of structural aesthetics.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative rounded-2xl overflow-hidden border border-luxury-border-gold shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              }
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-[500px] md:h-[650px]"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="relative w-full h-full">
                {/* Animated Canvas background */}
                <div className="absolute inset-0 select-none">
                  <ProjectVisual id={project.id} />
                  {/* Subtle Dark Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
                </div>

                {/* Floating Glassmorphic Details Card */}
                <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-auto md:max-w-lg glass-panel rounded-xl p-6 md:p-8 flex flex-col space-y-4 shadow-2xl animate-fade-in relative z-20">
                  <div className="flex justify-between items-start gap-4">
                    <span className="bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-soft-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
                      {project.type}
                    </span>
                    <span className="text-[10px] text-luxury-gold uppercase tracking-wider font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-text-primary">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-luxury-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-xs md:text-sm text-luxury-text-secondary leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-luxury-graphite/40 pt-4 mt-2">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-luxury-text-primary">
                        <Expand className="w-4 h-4 text-luxury-gold" />
                        <span>{project.area}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveProject(project)}
                      className="group flex items-center gap-1.5 text-xs text-luxury-gold hover:text-luxury-soft-gold font-semibold uppercase tracking-wider transition-colors duration-300"
                    >
                      <Layers className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Bottom Right) */}
          <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center space-x-3">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-luxury-border-gold bg-luxury-secondary/80 backdrop-blur-sm flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all duration-300 cursor-pointer shadow-lg">
              &larr;
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-luxury-border-gold bg-luxury-secondary/80 backdrop-blur-sm flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg transition-all duration-300 cursor-pointer shadow-lg">
              &rarr;
            </button>
          </div>

          {/* Pagination (Bottom Center on Mobile / Left aligned on Desktop) */}
          <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-30 flex space-x-2" />
        </div>

        </motion.div>
      </div>

      {/* Project Details Modal Popup */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-luxury-secondary border border-luxury-border-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-luxury-graphite">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Project Dossier
              </span>
              <button 
                onClick={() => setActiveProject(null)}
                className="text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-300 p-1.5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-text-primary">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-luxury-gold uppercase tracking-wider mt-1">{activeProject.type} ({activeProject.area})</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-luxury-champagne">
                  Executive Summary
                </h4>
                <p className="text-sm text-luxury-text-secondary leading-relaxed font-light">
                  {activeProject.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-luxury-champagne">
                  Technical Specifications
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeProject.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-luxury-text-secondary bg-luxury-bg/50 border border-luxury-graphite rounded-lg p-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-luxury-graphite flex justify-end gap-3 bg-luxury-bg/50">
              <button 
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-full border border-luxury-graphite hover:border-luxury-gold text-luxury-text-secondary hover:text-luxury-gold text-xs font-semibold uppercase tracking-widest transition-all duration-300"
              >
                Close Dossier
              </button>
              <a 
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-full bg-luxury-gold text-luxury-bg hover:bg-transparent hover:text-luxury-gold border border-luxury-gold text-xs font-semibold uppercase tracking-widest transition-all duration-300"
              >
                Request Digital Brochure
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Swiper Bullet Customization styles */}
      <style jsx global>{`
        .custom-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(248, 248, 248, 0.3) !important;
          transition: all 0.3s ease;
          cursor: pointer;
          opacity: 1 !important;
        }
        .custom-bullet.swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          width: 24px;
        }
      `}</style>
    </section>
  );
}
