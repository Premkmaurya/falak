import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import Card from '../components/Card';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-bg-warm pt-44 pb-36">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <Badge variant="subtle" className="mb-4">Philosophy</Badge>
          <h1 className="font-bradford font-normal text-[36px] md:text-[64px] lg:text-[76px] leading-[1.05] text-text-primary uppercase mb-6">
            SANCTUARIES OF<br />STILLNESS
          </h1>
          <p className="font-visueltpro text-text-secondary text-[16px] leading-relaxed max-w-xl font-light">
            Founded with a vision to challenge noisy design, Havora Studio creates environments of quiet restraint. We focus on raw spatial volumes, honest natural materials, and precise geometric lighting to build homes and workspaces that feel architectural, editorial, and deeply comforting.
          </p>
        </div>

        {/* Double-Height Visual Frame */}
        <div className="w-full h-[60vh] md:h-[70vh] rounded-cards overflow-hidden mb-32 border border-border-subtle shadow-md">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            src="/images/materials-wood-panel.png"
            alt="Havora Studio Material Detail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40 border-b border-border-subtle pb-28">
          
          <div>
            <span className="font-bradford text-warm-oak text-display-lg block mb-4">01 /</span>
            <h3 className="font-bradford font-normal text-heading-lg text-text-primary uppercase mb-4 tracking-tight">
              Volume & Light
            </h3>
            <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed font-light">
              We believe a room's luxury is defined by its proportions, flow, and how daylight circulates rather than ad-hoc ornamentation. We design empty spatial volumes that breathe.
            </p>
          </div>

          <div>
            <span className="font-bradford text-warm-oak text-display-lg block mb-4">02 /</span>
            <h3 className="font-bradford font-normal text-heading-lg text-text-primary uppercase mb-4 tracking-tight">
              Material Honesty
            </h3>
            <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed font-light">
              We employ open-pore natural oaks, dark walnut logs, textured plaster, and monolithic travertine slabs. We let materials speak for themselves, celebrating their natural textures.
            </p>
          </div>

          <div>
            <span className="font-bradford text-warm-oak text-display-lg block mb-4">03 /</span>
            <h3 className="font-bradford font-normal text-heading-lg text-text-primary uppercase mb-4 tracking-tight">
              Execution Rigor
            </h3>
            <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed font-light">
              We approach interior spaces with architectural precision. Every shadow gap, flush pivot door, custom handle, and lighting alignment is calculated to the millimeter.
            </p>
          </div>

        </div>

        {/* Creative Leadership Grid */}
        <div>
          <div className="mb-24">
            <Badge variant="subtle" className="mb-4">Creative Leadership</Badge>
            <h2 className="font-bradford font-normal text-[32px] md:text-[44px] lg:text-[48px] text-text-primary uppercase tracking-tight">
              The Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Founder 1 */}
            <Card variant="featured" className="p-8 border border-border-subtle bg-white/40">
              <div className="aspect-[4/3] rounded-cards overflow-hidden mb-6 border border-border-subtle">
                <img 
                  src="/images/furniture-chairs.png" 
                  alt="Kenji Sato — Principal Architect"
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-out"
                />
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-bradford font-normal text-display-sm text-text-primary uppercase">
                  Kenji Sato
                </h3>
                <span className="font-visueltpro text-caption text-text-secondary tracking-widest uppercase">
                  Principal Architect
                </span>
              </div>
              <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed font-light">
                Kenji studied architecture at the University of Tokyo and has spent over 15 years practicing minimal space planning. He oversees all structural layouts, technical elevations, and monolithic stone detailing for Havora Studio's premium residential designs.
              </p>
            </Card>

            {/* Founder 2 */}
            <Card variant="featured" className="p-8 border border-border-subtle bg-white/40">
              <div className="aspect-[4/3] rounded-cards overflow-hidden mb-6 border border-border-subtle">
                <img 
                  src="/images/craftsmanship-door.png" 
                  alt="Elena Vujović — Creative Director"
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-out"
                />
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-bradford font-normal text-display-sm text-text-primary uppercase">
                  Elena Vujović
                </h3>
                <span className="font-visueltpro text-caption text-text-secondary tracking-widest uppercase">
                  Creative Director
                </span>
              </div>
              <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed font-light">
                Elena received her interior design training in Milan. She focuses on tactile material curation, wood textures, bespoke custom joinery details, and staging, ensuring Havora's spaces feel profoundly warm, welcoming, and editorial.
              </p>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
