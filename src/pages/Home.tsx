import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Card from '../components/Card';
import CanvasSequence from '../components/CanvasSequence';
import { portfolioProjects } from '../data/portfolio';

interface HomeProps {
  preloadedImages: HTMLImageElement[];
}

export const Home: React.FC<HomeProps> = ({ preloadedImages }) => {
  // Grab two projects for the homepage teaser
  const teaserProjects = portfolioProjects.slice(0, 2);

  return (
    <div className="w-full bg-midnight-void">
      
      {/* Pinned Cinematic Canvas Sequence containing unified Hero */}
      <CanvasSequence preloadedImages={preloadedImages} />

      {/* Solid Black Canvas Stacking Layer (Scrolls directly over the pinned canvas scroller cleanly) */}
      <div className="relative z-20 bg-midnight-void w-full">
        {/* 3. Featured Projects Preview (Asymmetric Magazine Spread) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-[rgba(255,255,255,0.06)] pb-8">
            <div>
              <Badge variant="subtle" className="mb-4">ARCHIVE</Badge>
              <h2 className="font-bradford font-medium text-display-lg md:text-[54px] text-cloud-whisper uppercase tracking-tight">
                Featured Work
              </h2>
            </div>
            <Link 
              to="/projects" 
              className="font-visueltpro text-[13px] tracking-wider uppercase text-ash-accent hover:text-cloud-whisper mt-4 md:mt-0 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View Catalog</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Asymmetric Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Card 1: Spans 7 cols, aligned left */}
            <div className="md:col-span-7 flex flex-col justify-start">
              <Card variant="featured" className="group">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img 
                    src={teaserProjects[0].image} 
                    alt={teaserProjects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="lozenge">{teaserProjects[0].category}</Badge>
                  </div>
                </div>
                <div className="py-6 px-4">
                  <div className="flex items-center justify-between text-caption text-ash-accent mb-2">
                    <span>{teaserProjects[0].location}</span>
                    <span>{teaserProjects[0].year}</span>
                  </div>
                  <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-3 uppercase group-hover:text-action-violet transition-colors duration-300">
                    {teaserProjects[0].title}
                  </h3>
                  <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed line-clamp-2">
                    {teaserProjects[0].description}
                  </p>
                </div>
              </Card>
            </div>

            {/* Card 2: Spans 5 cols, padded vertically for offset layout */}
            <div className="md:col-span-5 md:mt-24 flex flex-col justify-start">
              <Card variant="featured" className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img 
                    src={teaserProjects[1].image} 
                    alt={teaserProjects[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="lozenge">{teaserProjects[1].category}</Badge>
                  </div>
                </div>
                <div className="py-6 px-4">
                  <div className="flex items-center justify-between text-caption text-ash-accent mb-2">
                    <span>{teaserProjects[1].location}</span>
                    <span>{teaserProjects[1].year}</span>
                  </div>
                  <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-3 uppercase group-hover:text-action-violet transition-colors duration-300">
                    {teaserProjects[1].title}
                  </h3>
                  <p className="font-visueltpro text-[14px] text-light-ash leading-relaxed line-clamp-2">
                    {teaserProjects[1].description}
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </section>

        {/* 4. Services Teaser Section */}
        <section className="py-24 bg-steel-gray/10 border-t border-b border-[rgba(255,255,255,0.06)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <Badge variant="subtle" className="mb-4">PRACTICES</Badge>
              <h2 className="font-bradford font-medium text-display-lg md:text-[54px] text-cloud-whisper uppercase tracking-tight mb-6">
                Our Disciplines
              </h2>
              <p className="font-visueltpro text-light-ash text-[15px] leading-relaxed">
                We specialize in full-scale architectural spatial planning, turnkey project management, and custom furniture construction, strictly adhering to absolute minimalism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Residential Architecture',
                  desc: 'Tailored private sanctuaries shaped strictly around texture, volume, and daylight. Complete layout renovations that create flow.'
                },
                {
                  num: '02',
                  title: 'Commercial Venues',
                  desc: 'Low-stimulus, premium corporate lounges, galleries, and hospitality spaces designed to convey severe intellectual authority.'
                },
                {
                  num: '03',
                  title: 'Bespoke Furniture',
                  desc: 'Sculpted chairs, slab tables, and structural elements crafted with cylindrical support bases and rounded lozenge pill contours.'
                }
              ].map((srv, idx) => (
                <Card key={idx} variant="featured" className="p-8 flex flex-col justify-between aspect-square group border border-[rgba(255,255,255,0.04)] hover:border-action-violet/30">
                  <span className="font-bradford text-ash-accent text-display-sm">{srv.num}</span>
                  <div>
                    <h3 className="font-bradford font-medium text-heading-lg text-cloud-whisper mb-3 uppercase group-hover:text-action-violet transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="font-visueltpro text-[13px] text-light-ash leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/services">
                <Button variant="ghost">
                  Discover Practices
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Contact Consultation Call-to-Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge variant="subtle" className="mb-6">ENGAGE</Badge>
            <h2 className="font-bradford font-medium text-[36px] md:text-[64px] lg:text-[76px] leading-[1.1] text-cloud-whisper tracking-tighter uppercase mb-8">
              Let's sculpt your sanctuary.
            </h2>
            <p className="font-visueltpro text-light-ash text-[16px] max-w-xl mx-auto mb-10 leading-relaxed font-light">
              We partner with visionary clients to cultivate spaces of absolute stillness. Book an initial consultation with our lead designers in Kyoto or Zurich.
            </p>
            <Link to="/contact">
              <Button variant="violet">
                Book Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
