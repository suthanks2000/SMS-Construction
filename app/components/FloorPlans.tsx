'use client';

import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, CheckCircle2, Bed, Bath, Compass, Square } from 'lucide-react';
import { motion } from 'framer-motion';

interface Room {
  id: string;
  name: string;
  dimensions: string;
  path: string;
  textCoords: { x: number; y: number };
}

interface Floor {
  name: string;
  description: string;
  area: string;
  rooms: Room[];
  svgViewBox: string;
}

interface ProjectPlans {
  title: string;
  beds: string;
  baths: string;
  facing: string;
  totalArea: string;
  floors: Floor[];
}

export default function FloorPlans() {
  const [activePlanIdx, setActivePlanIdx] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<Room | null>(null);

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const planOptions: ProjectPlans[] = [
    {
      title: 'The Palms Oceanfront Duplex',
      beds: '4 Bedrooms',
      baths: '5 Bathrooms',
      facing: 'East Facing Vastu',
      totalArea: '5,500 Sq. Ft.',
      floors: [
        {
          name: 'Ground Floor',
          description: 'Social and living space featuring double-height lounge, private guest suite, kitchen and dining opening onto a beachfront deck.',
          area: '2,800 Sq. Ft.',
          svgViewBox: '0 0 100 80',
          rooms: [
            { id: 'living', name: 'Grand Living Lounge', dimensions: '22\' x 18\'', path: 'M 10 10 L 50 10 L 50 45 L 10 45 Z', textCoords: { x: 30, y: 28 } },
            { id: 'dining', name: 'Dining Room', dimensions: '16\' x 14\'', path: 'M 50 10 L 90 10 L 90 35 L 50 35 Z', textCoords: { x: 70, y: 23 } },
            { id: 'kitchen', name: 'Show Kitchen & Dry Pantry', dimensions: '12\' x 12\'', path: 'M 70 35 L 90 35 L 90 70 L 70 70 Z', textCoords: { x: 80, y: 53 } },
            { id: 'guest', name: 'Oceanfront Guest Suite', dimensions: '16\' x 16\'', path: 'M 10 45 L 45 45 L 45 70 L 10 70 Z', textCoords: { x: 27, y: 58 } },
            { id: 'deck', name: 'Indian Ocean Lounge Deck', dimensions: '40\' x 10\'', path: 'M 10 70 L 90 70 L 90 78 L 10 78 Z', textCoords: { x: 50, y: 74 } }
          ]
        },
        {
          name: 'First Floor',
          description: 'Private family chambers including master sanctuary with sea views, secondary ensuite kids room, and a private media lounge.',
          area: '2,700 Sq. Ft.',
          svgViewBox: '0 0 100 80',
          rooms: [
            { id: 'master', name: 'Grand Master Sanctuary', dimensions: '24\' x 20\'', path: 'M 10 10 L 60 10 L 60 45 L 10 45 Z', textCoords: { x: 35, y: 28 } },
            { id: 'kids', name: 'Ensuite Kids Chamber', dimensions: '15\' x 14\'', path: 'M 60 10 L 90 10 L 90 45 L 60 45 Z', textCoords: { x: 75, y: 28 } },
            { id: 'lounge', name: 'Acoustic Media Lounge', dimensions: '18\' x 16\'', path: 'M 10 45 L 50 45 L 50 70 L 10 70 Z', textCoords: { x: 30, y: 58 } },
            { id: 'wardrobe', name: 'Master Walk-in Wardrobe', dimensions: '12\' x 10\'', path: 'M 50 45 L 75 45 L 75 70 L 50 70 Z', textCoords: { x: 62, y: 58 } },
            { id: 'balcony', name: 'Sunrise Sea Balcony', dimensions: '25\' x 8\'', path: 'M 75 45 L 90 45 L 90 70 L 75 70 Z', textCoords: { x: 82, y: 58 } }
          ]
        }
      ]
    },
    {
      title: 'Oasis Royal Pavilion',
      beds: '4 Bedrooms',
      baths: '4 Bathrooms',
      facing: 'North Facing Vastu',
      totalArea: '4,800 Sq. Ft.',
      floors: [
        {
          name: 'Ground Level',
          description: 'Spacious layout with central courtyard open to the sky, double garages, premium kitchen, and open living zones.',
          area: '2,500 Sq. Ft.',
          svgViewBox: '0 0 100 80',
          rooms: [
            { id: 'garage', name: 'Triple Car Port', dimensions: '20\' x 18\'', path: 'M 10 10 L 40 10 L 40 40 L 10 40 Z', textCoords: { x: 25, y: 25 } },
            { id: 'courtyard', name: 'Open-Air Central Courtyard', dimensions: '16\' x 16\'', path: 'M 40 25 L 70 25 L 70 55 L 40 55 Z', textCoords: { x: 55, y: 40 } },
            { id: 'living', name: 'Double-Height Living', dimensions: '22\' x 18\'', path: 'M 40 10 L 90 10 L 90 25 L 70 25 L 70 55 L 40 55 L 40 40 Z', textCoords: { x: 75, y: 18 } },
            { id: 'dining', name: 'Dining Zone', dimensions: '14\' x 12\'', path: 'M 70 25 L 90 25 L 90 55 L 70 55 Z', textCoords: { x: 80, y: 40 } },
            { id: 'bedroom', name: 'Ensuite Bedroom 1', dimensions: '14\' x 14\'', path: 'M 10 40 L 40 40 L 40 70 L 10 70 Z', textCoords: { x: 25, y: 55 } }
          ]
        },
        {
          name: 'First Level',
          description: 'Houses 3 bedrooms with ensuite bathrooms, master lounge, office study room, and multi-layered landscaping.',
          area: '2,300 Sq. Ft.',
          svgViewBox: '0 0 100 80',
          rooms: [
            { id: 'master', name: 'Grand Master Suite', dimensions: '22\' x 16\'', path: 'M 10 10 L 55 10 L 55 40 L 10 40 Z', textCoords: { x: 32, y: 25 } },
            { id: 'study', name: 'Bespoke Home Office', dimensions: '12\' x 12\'', path: 'M 55 10 L 90 10 L 90 40 L 55 40 Z', textCoords: { x: 72, y: 25 } },
            { id: 'bed3', name: 'Ensuite Bedroom 2', dimensions: '14\' x 14\'', path: 'M 10 40 L 40 40 L 40 70 L 10 70 Z', textCoords: { x: 25, y: 55 } },
            { id: 'bed4', name: 'Ensuite Bedroom 3', dimensions: '14\' x 14\'', path: 'M 40 40 L 70 40 L 70 70 L 40 70 Z', textCoords: { x: 55, y: 55 } },
            { id: 'terrace', name: 'Sky Terrace Garden', dimensions: '20\' x 12\'', path: 'M 70 40 L 90 40 L 90 70 L 70 70 Z', textCoords: { x: 80, y: 55 } }
          ]
        }
      ]
    }
  ];

  const currentPlan = planOptions[activePlanIdx];

  return (
    <section 
      id="floor-plans" 
      className="py-24 bg-luxury-bg border-t border-luxury-graphite relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        
        {/* Title and switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Spatial Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
              Premium Floor Layouts
            </h2>
            <div className="w-16 h-[1px] bg-luxury-gold mt-6" />
          </div>

          {/* Plan selectors */}
          <div className="flex bg-luxury-secondary/60 border border-luxury-graphite p-1.5 rounded-full backdrop-blur-md">
            {planOptions.map((plan, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePlanIdx(idx);
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activePlanIdx === idx 
                    ? 'bg-luxury-gold text-luxury-bg shadow-md' 
                    : 'text-luxury-text-secondary hover:text-luxury-text-primary'
                }`}
              >
                {plan.title.split(' ')[0] + ' ' + plan.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-luxury-secondary/35 border border-luxury-border-gold rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center text-luxury-gold shrink-0">
              <Square className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Total Area</p>
              <p className="text-sm font-semibold text-luxury-text-primary font-serif">{currentPlan.totalArea}</p>
            </div>
          </div>
          <div className="bg-luxury-secondary/35 border border-luxury-border-gold rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center text-luxury-gold shrink-0">
              <Bed className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Beds</p>
              <p className="text-sm font-semibold text-luxury-text-primary font-serif">{currentPlan.beds}</p>
            </div>
          </div>
          <div className="bg-luxury-secondary/35 border border-luxury-border-gold rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center text-luxury-gold shrink-0">
              <Bath className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Baths</p>
              <p className="text-sm font-semibold text-luxury-text-primary font-serif">{currentPlan.baths}</p>
            </div>
          </div>
          <div className="bg-luxury-secondary/35 border border-luxury-border-gold rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center text-luxury-gold shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Vastu Direction</p>
              <p className="text-sm font-semibold text-luxury-text-primary font-serif">{currentPlan.facing}</p>
            </div>
          </div>
        </div>

        {/* Embla Slider: Floor sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Layout Embla Carousel */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex select-none">
                {currentPlan.floors.map((floor, floorIdx) => (
                  <div key={floorIdx} className="flex-[0_0_100%] min-w-0 pr-4">
                    <div className="bg-luxury-secondary/30 border border-luxury-border-gold rounded-2xl p-8 h-full flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-serif text-2xl font-bold text-luxury-champagne">{floor.name}</h3>
                          <span className="text-xs font-mono text-luxury-gold bg-luxury-gold/5 border border-luxury-gold/20 px-3 py-1 rounded-full font-semibold">
                            {floor.area}
                          </span>
                        </div>
                        <p className="text-sm text-luxury-text-secondary font-light leading-relaxed">
                          {floor.description}
                        </p>
                      </div>

                      {/* Key features of this floor */}
                      <div className="space-y-3">
                        <h4 className="text-xs uppercase tracking-widest text-luxury-gold font-bold">Included Zones</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {floor.rooms.map((room) => (
                            <div 
                              key={room.id}
                              onMouseEnter={() => setHoveredRoom(room)}
                              onMouseLeave={() => setHoveredRoom(null)}
                              className={`flex items-center justify-between border rounded-lg px-4 py-2.5 transition-all duration-300 cursor-pointer ${
                                hoveredRoom?.id === room.id 
                                  ? 'border-luxury-gold bg-luxury-secondary/90 text-luxury-soft-gold scale-[1.02]' 
                                  : 'border-luxury-graphite bg-luxury-secondary/10 text-luxury-text-secondary hover:border-luxury-border-gold'
                              }`}
                            >
                              <span className="text-xs font-medium truncate">{room.name}</span>
                              <span className="text-[10px] font-mono text-luxury-gold shrink-0">{room.dimensions}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button 
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-text-secondary hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 bg-luxury-secondary/20 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-text-secondary hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 bg-luxury-secondary/20 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-luxury-text-secondary font-light font-mono">
                Swipe to view alternate floor layers
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Room Map SVG */}
          <div className="lg:col-span-6 bg-luxury-secondary/20 border border-luxury-border-gold rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[350px] sm:min-h-[420px]">
            <div className="absolute top-4 right-4 z-10 text-[9px] uppercase tracking-widest text-luxury-gold bg-luxury-gold/5 border border-luxury-border-gold px-3 py-1 rounded-full font-mono font-semibold">
              Interactive Schematic
            </div>

            {/* Vector Blueprint View */}
            <div className="flex-1 flex items-center justify-center p-4">
              <svg 
                className="w-full max-w-md text-luxury-text-secondary" 
                viewBox={currentPlan.floors[0].svgViewBox} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
              >
                {/* Outer Wall Boundaries */}
                <rect x="9" y="9" width="82" height="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                
                {/* Rooms paths */}
                {currentPlan.floors[0].rooms.map((room) => {
                  const isHovered = hoveredRoom?.id === room.id;
                  return (
                    <g 
                      key={room.id}
                      onMouseEnter={() => setHoveredRoom(room)}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      {/* Room Area Path */}
                      <path 
                        d={room.path} 
                        fill={isHovered ? 'rgba(212, 175, 55, 0.08)' : 'rgba(22, 22, 22, 0.4)'} 
                        stroke={isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)'} 
                        strokeWidth={isHovered ? '1' : '0.6'}
                        className="transition-all duration-300"
                      />
                      
                      {/* Room labels */}
                      <text 
                        x={room.textCoords.x} 
                        y={room.textCoords.y} 
                        textAnchor="middle" 
                        fill={isHovered ? '#F5D98E' : 'rgba(248, 248, 248, 0.6)'} 
                        fontSize="3" 
                        className="font-sans font-medium transition-colors duration-300 pointer-events-none select-none"
                      >
                        {room.name.split(' ').slice(-1)[0]}
                      </text>
                      
                      {/* Sub-label dimensions */}
                      <text 
                        x={room.textCoords.x} 
                        y={room.textCoords.y + 3.5} 
                        textAnchor="middle" 
                        fill="rgba(212, 175, 55, 0.5)" 
                        fontSize="2" 
                        className="font-mono transition-colors duration-300 pointer-events-none select-none"
                      >
                        {room.dimensions}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Room Tooltip Panel (Bottom) */}
            <div className="mt-4 border-t border-luxury-graphite pt-4 min-h-[60px] flex items-center justify-between">
              {hoveredRoom ? (
                <div className="animate-fade-in space-y-1">
                  <p className="text-xs uppercase tracking-wider text-luxury-gold font-bold">Selected Zone</p>
                  <p className="text-sm font-semibold text-luxury-text-primary font-serif">{hoveredRoom.name}</p>
                </div>
              ) : (
                <p className="text-xs text-luxury-text-secondary font-light">
                  Hover over room panels or structural sections on the blueprint to highlight zones.
                </p>
              )}
              {hoveredRoom && (
                <span className="text-xs font-mono text-luxury-soft-gold border border-luxury-gold/30 bg-luxury-gold/10 px-3 py-1 rounded-full animate-pulse">
                  {hoveredRoom.dimensions} Area
                </span>
              )}
            </div>

          </div>

        </div>

        </motion.div>
      </div>
    </section>
  );
}
