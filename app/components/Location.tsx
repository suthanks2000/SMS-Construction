'use client';

import { useState } from 'react';
import { MapPin, Compass, Shield, HeartPulse, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Landmark {
  id: number;
  name: string;
  type: string;
  description: string;
  distance: string;
  coordinates: { x: number; y: number };
}

export default function Location() {
  const [activeLandmark, setActiveLandmark] = useState<Landmark | null>(null);

  const landmarks: Landmark[] = [
    {
      id: 1,
      name: 'SMS Palms Oceanfront',
      type: 'Our Coastal Project',
      description: 'Ultra-premium beachfront duplexes facing the sunrise over the Indian Ocean.',
      distance: '0 mins (On-site)',
      coordinates: { x: 78, y: 75 }
    },
    {
      id: 2,
      name: 'SMS Oasis Pavilion',
      type: 'Our Central Project',
      description: 'Exclusive villa enclaves situated near Court Road, Nagercoil.',
      distance: '0 mins (On-site)',
      coordinates: { x: 42, y: 44 }
    },
    {
      id: 3,
      name: 'SMS Summit Residences',
      type: 'Our Highrise Project',
      description: 'Luxury sky penthouses looking out onto the Vadasery hill ranges.',
      distance: '0 mins (On-site)',
      coordinates: { x: 50, y: 30 }
    },
    {
      id: 4,
      name: 'Trivandrum Airport',
      type: 'International Transit Hub',
      description: 'Connecting you globally. Easily accessible via the new NH-66 4-lane expressway.',
      distance: '75 mins (72 Km)',
      coordinates: { x: 12, y: 18 }
    },
    {
      id: 5,
      name: 'Sree Padmanabhapuram Palace',
      type: 'Heritage Landmark',
      description: 'A magnificent wooden palace showcasing historical Travancore architecture.',
      distance: '20 mins (18 Km)',
      coordinates: { x: 25, y: 38 }
    },
    {
      id: 6,
      name: 'Suchindram Temple Lake',
      type: 'Cultural Landmark',
      description: 'Famous heritage site renowned for its artistic musical pillars.',
      distance: '12 mins (8 Km)',
      coordinates: { x: 62, y: 55 }
    }
  ];

  const travelGuides = [
    {
      icon: <Compass className="w-5 h-5 text-luxury-gold" />,
      title: 'Seamless Connectivity',
      detail: 'Quick access to Trivandrum (TRV) International Airport. Direct national highway linkages (NH-66 & NH-44).'
    },
    {
      icon: <Shield className="w-5 h-5 text-luxury-gold" />,
      title: 'The Safest Haven',
      detail: 'Nagercoil is recognized as one of the cleanest, safest, and most tranquil municipal zones in Southern India.'
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-luxury-gold" />,
      title: 'Social Infrastructure',
      detail: 'Proximity to premier CBSE international academies, multi-specialty healthcare, and organic agricultural markets.'
    }
  ];

  return (
    <section 
      id="location" 
      className="py-24 bg-luxury-bg border-t border-luxury-graphite relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-gold/[0.015] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
            Geographical Privilege
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
            Nagercoil & Kanyakumari
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Geographical Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-luxury-champagne font-medium">
                Where the Western Ghats Meet Three Oceans.
              </h3>
              <p className="text-sm md:text-base text-luxury-text-secondary leading-relaxed font-light">
                Kanyakumari District holds a unique geographical position at the very tip of India. Here, the clean mountain air of the Western Ghats blends with fresh ocean currents from the Arabian Sea, the Bay of Bengal, and the Indian Ocean.
              </p>
              <p className="text-sm md:text-base text-luxury-text-secondary leading-relaxed font-light">
                Nagercoil offers a rare combination of serene natural living and highly developed social systems, making it the ideal choice for luxury custom villas and holiday homes.
              </p>
            </div>

            {/* Travel metrics cards */}
            <div className="space-y-5">
              {travelGuides.map((guide, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 p-4 border border-luxury-graphite/40 bg-luxury-secondary/15 rounded-xl hover:border-luxury-border-gold transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center shrink-0">
                    {guide.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-wider text-luxury-champagne font-semibold">{guide.title}</h4>
                    <p className="text-xs text-luxury-text-secondary leading-relaxed font-light">{guide.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Vector Map Box */}
          <div className="lg:col-span-6 bg-luxury-secondary/35 border border-luxury-border-gold rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[400px]">
            
            {/* Map Background Grid */}
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none" 
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(212,175,55,0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(212,175,55,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}
            />

            <div className="flex justify-between items-center z-10">
              <span className="text-[9px] font-mono text-luxury-gold uppercase tracking-widest bg-luxury-gold/5 border border-luxury-gold/20 px-3 py-1 rounded-full">
                Kanyakumari District Map Schematic
              </span>
              <span className="text-[9px] text-luxury-text-secondary font-mono">
                Click dots to explore locations
              </span>
            </div>

            {/* Vector Map Simulation Canvas */}
            <div className="flex-1 w-full relative min-h-[260px] my-6 z-10">
              
              {/* Map Outline paths representing coastline & hills (Stylized vector lines) */}
              <svg className="absolute inset-0 w-full h-full text-luxury-graphite/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                {/* Coastal tip outline */}
                <path d="M 10 10 Q 35 30 40 45 T 70 70 T 80 90 L 100 90 L 100 0 Z" fill="rgba(14,14,14,0.3)" stroke="rgba(212,175,55,0.06)" />
                {/* Hill outlines */}
                <path d="M 5 20 Q 15 10 25 25 T 45 15 T 65 30" stroke="rgba(212,175,55,0.1)" strokeDasharray="2,3" />
                <path d="M 10 35 Q 25 25 35 40 T 55 35" stroke="rgba(212,175,55,0.08)" strokeDasharray="2,3" />
              </svg>

              {/* Landmark Interactive Dots */}
              {landmarks.map((landmark) => {
                const isActive = activeLandmark?.id === landmark.id;
                const isProject = landmark.type.includes('Project');

                return (
                  <button
                    key={landmark.id}
                    onClick={() => setActiveLandmark(landmark)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ left: `${landmark.coordinates.x}%`, top: `${landmark.coordinates.y}%` }}
                    aria-label={`Show ${landmark.name}`}
                  >
                    {/* Ring glow */}
                    <span className={`absolute -inset-2.5 rounded-full transition-all duration-300 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${
                      isActive 
                        ? 'bg-luxury-gold/15 border border-luxury-gold/45 scale-100 opacity-100' 
                        : 'bg-luxury-text-secondary/10 border border-luxury-text-secondary/20'
                    }`} />
                    
                    {/* Active Pulsing Core */}
                    <span className={`relative block w-3.5 h-3.5 rounded-full border border-luxury-bg shadow-lg transition-transform duration-300 group-hover:scale-125 ${
                      isActive 
                        ? 'bg-luxury-gold scale-125' 
                        : isProject 
                          ? 'bg-luxury-champagne animate-pulse' 
                          : 'bg-luxury-graphite'
                    }`} />
                  </button>
                );
              })}

            </div>

            {/* Selected Landmark Details Panel */}
            <div className="border-t border-luxury-graphite pt-4 min-h-[80px] flex items-center justify-between z-10 relative">
              {activeLandmark ? (
                <div className="animate-fade-in space-y-1 max-w-[75%]">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider text-luxury-gold font-bold">
                      {activeLandmark.type}
                    </span>
                    <span className="text-[10px] text-luxury-text-secondary font-mono">
                      ({activeLandmark.distance} from Nagercoil)
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-luxury-text-primary font-serif">
                    {activeLandmark.name}
                  </h4>
                  <p className="text-xs text-luxury-text-secondary leading-normal font-light">
                    {activeLandmark.description}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-luxury-text-secondary font-light">
                  Click on the interactive map markers to inspect locations, travel times, and landmark highlights.
                </p>
              )}

              {activeLandmark && activeLandmark.type.includes('Project') && (
                <a 
                  href="#portfolio"
                  onClick={() => setActiveLandmark(null)}
                  className="flex items-center gap-1 text-[10px] text-luxury-gold hover:text-luxury-soft-gold uppercase tracking-widest font-semibold shrink-0 transition-colors duration-300"
                >
                  Dossier
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

          </div>

        </div>

        </motion.div>
      </div>
    </section>
  );
}
