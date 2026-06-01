import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { portfolioProjects, Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Custom Furniture', 'Renovation'];

  const filteredProjects = filter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <div className="w-full bg-midnight-void pt-44 pb-36">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <Badge variant="subtle" className="mb-4">ARCHIVE</Badge>
          <h1 className="font-bradford font-medium text-[36px] md:text-[64px] lg:text-[76px] leading-[1.05] text-cloud-whisper tracking-tighter uppercase mb-6">
            SPATIAL<br />WORKS
          </h1>
          <p className="font-visueltpro text-light-ash/85 text-[16px] leading-relaxed max-w-xl">
            A comprehensive catalog of private residences, corporate sanctuaries, and custom furniture objects. Each project stands as a testament to absolute restraint, precise detail, and natural volumes.
          </p>
        </div>

        {/* Filter Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-24 border-b border-[rgba(255,255,255,0.06)] pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="cursor-pointer"
            >
              <Badge 
                variant={filter === cat ? 'lozenge' : 'subtle'} 
                className={`text-[11px] px-5 py-2.5 transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-cloud-whisper text-midnight-void border border-cloud-whisper font-medium' 
                    : 'bg-transparent text-ash-accent border border-[rgba(255,255,255,0.1)] hover:border-cloud-whisper'
                }`}
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>

        {/* Asymmetrical Visual Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-28 gap-x-8 lg:gap-x-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx: number) => {
              // Create asymmetrical visual rhythm by shifting columns based on index
              // We alternate column spans (e.g. 7 cols and 5 cols, then 5 cols and 7 cols)
              const isEven = idx % 2 === 0;
              const colSpan = isEven ? 'md:col-span-7' : 'md:col-span-5';
              const mtOffset = !isEven ? 'md:mt-16' : '';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan} ${mtOffset} flex flex-col justify-start`}
                >
                  <Card variant="featured" className="group h-full flex flex-col justify-between">
                    <div>
                      {/* Image container with strict card border radius */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:scale-102"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="lozenge" className="bg-midnight-void/60 backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className="py-6 px-4">
                        <div className="flex items-center justify-between text-caption text-ash-accent mb-2">
                          <span>{project.location}</span>
                          <span>{project.year}</span>
                        </div>
                        
                        <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-3 uppercase tracking-tight group-hover:text-action-violet transition-colors duration-500">
                          {project.title}
                        </h3>
                        
                        <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Details overlay list */}
                    <div className="px-4 pb-6 pt-2 border-t border-[rgba(255,255,255,0.04)]">
                      <ul className="space-y-2">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="font-visueltpro text-[12px] text-ash-accent flex items-start space-x-2">
                            <span className="text-action-violet mt-1">&bull;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Projects;
