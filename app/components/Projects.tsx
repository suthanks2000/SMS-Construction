'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'homes' | 'commercial' | 'interiors'>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'homes', name: 'Luxury Homes' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'interiors', name: 'Interiors' },
  ];

  const projects = [
    { id: 1, title: 'Solarium Coast Villa', category: 'homes', categoryLabel: 'Luxury Home', image: '/project-home.png', location: 'Nagercoil, TN' },
    { id: 2, title: 'The Azure Spire', category: 'commercial', categoryLabel: 'Commercial', image: '/project-commercial.png', location: 'Kanyakumari, TN' },
    { id: 3, title: 'The Velvet Loft', category: 'interiors', categoryLabel: 'Interior', image: '/project-interior.png', location: 'Chennai, TN' },
    { id: 4, title: 'Oceancrest Villa', category: 'homes', categoryLabel: 'Luxury Home', image: '/hero-villa.png', location: 'Muttom, TN' },
    { id: 5, title: 'Metropolitan Square', category: 'commercial', categoryLabel: 'Commercial', image: '/project-commercial.png', location: 'Nagercoil, TN' },
    { id: 6, title: 'Monochrome Penthouse', category: 'interiors', categoryLabel: 'Interior', image: '/project-interior.png', location: 'Kanyakumari, TN' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-14 sm:py-28 bg-[#080C14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5">
            Landmark Constructions
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#D4AF37] text-[#080C14]'
                  : 'bg-white/[0.04] text-[#8B95A5] border border-white/5 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative h-[380px] rounded-[20px] overflow-hidden cursor-pointer border border-white/[0.04]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/90 via-[#080C14]/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-[#8B95A5]">{project.location}</p>

                  <div className="overflow-hidden h-0 group-hover:h-6 group-hover:mt-3 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#D4AF37]">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 rounded-[20px] pointer-events-none transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
