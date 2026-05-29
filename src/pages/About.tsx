import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import Card from '../components/Card';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-midnight-void pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <Badge variant="subtle" className="mb-4">PHILOSOPHY</Badge>
          <h1 className="font-bradford font-medium text-[42px] md:text-[72px] lg:text-[84px] leading-[1.05] text-cloud-whisper tracking-tighter uppercase mb-6">
            SPACES OF<br />STILLNESS
          </h1>
          <p className="font-visueltpro text-light-ash text-[16px] leading-relaxed max-w-xl">
            Established in 2018, Sequel was born out of a desire to create silent architecture. We reject decorative visual noise, choosing instead to focus on raw spatial volumes, tactile honest materials, and precise geometric light.
          </p>
        </div>

        {/* Double-Height Visual Frame */}
        <div className="w-full h-[60vh] md:h-[70vh] rounded-cards overflow-hidden mb-24 border border-[rgba(255,255,255,0.06)]">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            src="/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_008.png"
            alt="Minimal Studio Spaces"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Pillars Section — Comfort Spacing, Strong Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32 border-b border-[rgba(255,255,255,0.06)] pb-24">
          
          <div>
            <span className="font-bradford text-action-violet text-display-lg block mb-4">01 /</span>
            <h3 className="font-bradford font-medium text-heading-lg text-cloud-whisper uppercase mb-4 tracking-tight">
              VOLUME OVER DECOR
            </h3>
            <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed">
              We believe a room's luxury is defined by its scale, proportions, and light circulation rather than custom ornamentation. We design empty volumes that breathe.
            </p>
          </div>

          <div>
            <span className="font-bradford text-action-violet text-display-lg block mb-4">02 /</span>
            <h3 className="font-bradford font-medium text-heading-lg text-cloud-whisper uppercase mb-4 tracking-tight">
              TACTILE RESTRAINT
            </h3>
            <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed">
              Material honesty is paramount. We employ raw brushed timbers, micro-cement plaster, and monolithic Travertine blocks, celebrating their natural patinas.
            </p>
          </div>

          <div>
            <span className="font-bradford text-action-violet text-display-lg block mb-4">03 /</span>
            <h3 className="font-bradford font-medium text-heading-lg text-cloud-whisper uppercase mb-4 tracking-tight">
              INTELLECTUAL WEIGHT
            </h3>
            <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed">
              We approach interior spaces with architectural rigor. Every shadow gap, flush pivot door, and lighting alignment is calculated to the millimeter.
            </p>
          </div>

        </div>

        {/* Team Leadership Grid */}
        <div>
          <div className="mb-16">
            <Badge variant="subtle" className="mb-4">CREATIVE LEADERSHIP</Badge>
            <h2 className="font-bradford font-medium text-display-lg md:text-[54px] text-cloud-whisper uppercase tracking-tight">
              The Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Founder 1 */}
            <Card variant="featured" className="p-8 border border-[rgba(255,255,255,0.04)] bg-steel-gray/10">
              <div className="aspect-[4/3] rounded-cards overflow-hidden mb-6">
                <img 
                  src="/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_011.png" 
                  alt="Kenji Sato"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-75"
                />
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper uppercase">
                  Kenji Sato
                </h3>
                <span className="font-visueltpro text-caption text-ash-accent tracking-widest uppercase">
                  Architectural Director
                </span>
              </div>
              <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed">
                Kenji studied architecture at the University of Tokyo and has spent over 15 years practicing raw minimalism. He oversees all spatial layouts, structural plans, and monolithic stone detailing for Sequel's projects.
              </p>
            </Card>

            {/* Founder 2 */}
            <Card variant="featured" className="p-8 border border-[rgba(255,255,255,0.04)] bg-steel-gray/10">
              <div className="aspect-[4/3] rounded-cards overflow-hidden mb-6">
                <img 
                  src="/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_024.png" 
                  alt="Elena Vujović"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-75"
                />
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper uppercase">
                  Elena Vujović
                </h3>
                <span className="font-visueltpro text-caption text-ash-accent tracking-widest uppercase">
                  Interior Director
                </span>
              </div>
              <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed">
                Elena received her design training in Milan. She focuses on material curation, textile architecture, custom furniture joints, and tactile interfaces, ensuring Sequel's quiet spaces feel profoundly warm and comfortable.
              </p>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
