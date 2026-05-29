import React, { useState } from 'react';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  processes: string[];
}

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const servicesList: ServiceDetail[] = [
    {
      id: 'residential',
      title: 'Residential Interior',
      subtitle: '01 / PRIVATE LUXURY',
      description: 'Creation of tailored private homes, apartments, and villas. We focus on custom floor-to-ceiling wooden dividers, micro-cement finishes, and stone alignments that create fluid spatial volume.',
      processes: [
        'Detailed lifestyle & space utilization analysis',
        'Spatial zoning, layout plans, & furniture mockups',
        'Texture boards, plaster studies, & metal selection',
        'Curation of designer lighting & custom floor plans'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Spaces',
      subtitle: '02 / EXECUTIVE LOUNGES & GALLERIES',
      description: 'Design of corporate spaces, boutique galleries, and high-end workspaces. We sculpt low-stimulus environments with acoustically treated ash ribbing and neutral, commanding surfaces.',
      processes: [
        'Corporate brand mapping & programmatic analysis',
        'Acoustical engineering & spatial resonance analysis',
        'Dimmable gallery-grade smart lighting configuration',
        'Bespoke executive boardroom design & modular desks'
      ]
    },
    {
      id: 'furniture',
      title: 'Custom Furniture',
      subtitle: '03 / BESPOKE OBJECTS',
      description: 'Design and handcrafting of individual furniture pieces (tables, chairs, wall shelving). Created using solid oak, limestone, and copper joints following the 9999px lozenge pill radius rules.',
      processes: [
        'Proportion sketching & full-scale digital CAD mockups',
        'Timber slab sourcing (black European oak, solid ash)',
        'Traditional flush-joint joinery and bronze pin dowels',
        'Low-sheen organic matte oil hand application'
      ]
    },
    {
      id: 'space-planning',
      title: 'Space Planning',
      subtitle: '04 / VOLUME DESIGN',
      description: 'Rigorous geometric structuring of interior volumes. We map human traffic, natural light entries, and visual shadow paths to define flush boundaries and seamless corridor sightlines.',
      processes: [
        '3D laser scanning of existing raw environments',
        'Sightline optimization & structural load coordination',
        'Concealed framing, shadow gaps, & flush baseboards',
        'Visual rendering models & lighting direction map'
      ]
    },
    {
      id: 'turnkey',
      title: 'Turnkey Projects',
      subtitle: '05 / COMPLETE STEWARDSHIP',
      description: 'End-to-end design, sourcing, construction coordination, and staging. We manage the absolute details, ensuring the architectural blueprint is realized with zero visual compromise.',
      processes: [
        'Comprehensive timeline planning & vendor vetting',
        'Rigorous material sourcing & on-site inspection',
        'Precision installations & joinery adjustment supervision',
        'Interior final placement, curation, & visual handoff'
      ]
    },
    {
      id: 'renovation',
      title: 'Renovation',
      subtitle: '06 / ARCHITECTURAL RESTORATION',
      description: 'Careful preservation and structural modernization of historical, brutalist, or mid-century properties. We strip away past clutter to reveal original concrete, timber, and travertine layers.',
      processes: [
        'Preservation assessment of timber, stone, or iron',
        'Removal of non-structural divider blocks and drywall',
        'Modern structural glass, windows, & framing additions',
        'Restoration of original Douglas Fir or plaster work'
      ]
    }
  ];

  return (
    <div className="w-full bg-midnight-void pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Practices Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="subtle" className="mb-4">PRACTICES</Badge>
          <h1 className="font-bradford font-medium text-[42px] md:text-[72px] lg:text-[84px] leading-[1.05] text-cloud-whisper tracking-tighter uppercase mb-6">
            PRACTICES &<br />DISCIPLINARIES
          </h1>
          <p className="font-visueltpro text-light-ash text-[16px] leading-relaxed max-w-xl">
            We deliver complete interior design services across six major core pillars. Our processes follow a meticulous, non-compromising timeline that ensures absolute quality from blueprints to the final staging handoff.
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {servicesList.map((service) => {
            const isOpen = activeId === service.id;

            return (
              <Card
                key={service.id}
                variant="featured"
                className={`p-8 flex flex-col justify-between transition-all duration-500 border border-[rgba(255,255,255,0.04)] ${
                  isOpen 
                    ? 'border-action-violet bg-steel-gray/30 ring-1 ring-action-violet/30' 
                    : 'hover:border-[rgba(255,255,255,0.12)] hover:bg-steel-gray/20'
                }`}
                onClick={() => setActiveId(isOpen ? null : service.id)}
              >
                <div>
                  {/* Card Subtitle */}
                  <span className="font-visueltpro text-[10px] tracking-widest text-ash-accent block mb-6 uppercase">
                    {service.subtitle}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Toggle details link */}
                <div className="mt-4 flex items-center justify-between text-caption text-action-violet hover:text-cloud-whisper transition-colors duration-300 font-visueltpro tracking-widest uppercase pointer-events-none">
                  <span>{isOpen ? 'Close details' : 'Expand details'}</span>
                  <span>{isOpen ? '–' : '+'}</span>
                </div>

                {/* Animated expandable process content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-[rgba(255,255,255,0.06)] mt-6 pt-6"
                    >
                      <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-widest text-cloud-whisper mb-4">
                        Phase deliverables
                      </h4>
                      <ul className="space-y-3 font-visueltpro text-[13px] text-light-ash">
                        {service.processes.map((proc, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-3">
                            <span className="text-action-violet mt-1 font-bold">&bull;</span>
                            <span>{proc}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
