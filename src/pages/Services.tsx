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
      title: 'Residential Interiors',
      subtitle: '01 / PRIVATE SANCTUARIES',
      description: 'Creation of tailored private homes, villas, and apartments. We focus on custom floor-to-ceiling wooden joinery, stone console details, and flow optimizations that shape open volumes.',
      processes: [
        'Detailed lifestyle analysis & room zoning layouts',
        'Custom modular kitchen & wardrobe joinery drawings',
        'Material palette curation (oak, travertine, plaster)',
        'Architectural lighting planning & fixture selection'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Interiors',
      subtitle: '02 / EXECUTIVE LOUNGES & STUDIOS',
      description: 'Design of high-end corporate offices, boutique retail, and galleries. We build low-stimulus, focused workspaces with wood acoustic paneling and Command-oriented stone elements.',
      processes: [
        'Brand coordinate translation & workflow analysis',
        'Acoustical panel design & spatial resonance control',
        'Smart lighting controls & high-rendering setups',
        'Custom executive conference tables & storage pieces'
      ]
    },
    {
      id: 'turnkey',
      title: 'Turnkey Solutions',
      subtitle: '03 / COMPLETE STEWARDSHIP',
      description: 'End-to-end design, purchasing coordination, and staging management. We coordinate local contractors and joiners to ensure the design blueprint is realized with zero visual deviation.',
      processes: [
        'Detailed cost estimating & vendor vetting',
        'Regular site inspections & construction checks',
        'Furniture, lighting & fabric ordering coordination',
        'Final staging, artwork placement, & handoff'
      ]
    },
    {
      id: 'space-planning',
      title: 'Space Planning',
      subtitle: '04 / VOLUME STRUCTURES',
      description: 'Rigorous geometric organization of interior layouts. We map circulation flow, structural walls, and window light openings to define clean corridors and flush transitions.',
      processes: [
        'Existing site dimension checking & CAD layouts',
        'Slab opening, wall location, & portal positioning',
        'Flush trimless frames, floor joints, & baseboard detail drawings',
        'Visual spatial walkthroughs & lighting path plans'
      ]
    },
    {
      id: 'furniture-design',
      title: 'Furniture Design',
      subtitle: '05 / CUSTOM OBJECTS',
      description: 'Bespoke design and production of stand-alone furniture items (dining tables, chairs, credenzas). Created with open-pore wood logs and textured fabric wraps.',
      processes: [
        'Draft sketch elevations & digital CAD drawings',
        'Timber selection (natural oak, dark walnut, ash logs)',
        'Traditional flush carpentry joinery & dowel detailing',
        'Organic low-sheen matte oil hand rub finish'
      ]
    },
    {
      id: 'material-consultation',
      title: 'Material Consultation',
      subtitle: '06 / TACTILE CURATION',
      description: 'Sourcing and specifying rich interior textures. We build curated material boards detailing wood veneers, natural stones, brushed plaster finishes, and accent metals.',
      processes: [
        'Physical sample board coordination & mockups',
        'Stone block selection at local quarries/dealers',
        'Plaster texture mockups & timber finish matching',
        'Material specification sheet templates for builders'
      ]
    }
  ];

  return (
    <div className="w-full bg-bg-warm pt-44 pb-36">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Practices Header */}
        <div className="max-w-3xl mb-24">
          <Badge variant="subtle" className="mb-4">Services</Badge>
          <h1 className="font-bradford font-normal text-[36px] md:text-[64px] lg:text-[76px] leading-[1.05] text-text-primary uppercase mb-6">
            PRACTICES &<br />DISCIPLINARIES
          </h1>
          <p className="font-visueltpro text-text-secondary text-[16px] leading-relaxed max-w-xl font-light">
            We deliver complete interior design services across six major core pillars. Our processes follow a meticulous, non-compromising workflow that ensures absolute quality from initial layout drawings to the final staging handoff.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {servicesList.map((service) => {
            const isOpen = activeId === service.id;

            return (
              <Card
                key={service.id}
                variant="featured"
                className={`p-8 flex flex-col justify-between transition-all duration-500 border border-border-subtle ${
                  isOpen 
                    ? 'border-warm-oak bg-white shadow-xl ring-1 ring-warm-oak/20' 
                    : 'hover:border-border-medium hover:bg-white/80'
                }`}
                onClick={() => setActiveId(isOpen ? null : service.id)}
              >
                <div>
                  {/* Card Subtitle */}
                  <span className="font-visueltpro text-[10px] tracking-widest text-text-secondary/70 block mb-6 uppercase">
                    {service.subtitle}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-bradford font-normal text-display-sm text-text-primary mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Toggle details link */}
                <div className="mt-4 flex items-center justify-between text-caption text-warm-oak hover:text-text-primary transition-colors duration-300 font-visueltpro tracking-widest uppercase pointer-events-none">
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
                      className="overflow-hidden border-t border-border-subtle mt-6 pt-6"
                    >
                      <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-widest text-text-primary mb-4">
                        Phase deliverables
                      </h4>
                      <ul className="space-y-3 font-visueltpro text-[13px] text-text-secondary">
                        {service.processes.map((proc, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-3">
                            <span className="text-warm-oak mt-1 font-bold">&bull;</span>
                            <span className="font-light">{proc}</span>
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
