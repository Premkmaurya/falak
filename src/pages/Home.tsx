import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { portfolioProjects } from '../data/portfolio';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/home/CtaSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';

// Smooth eased animated counter component


export const Home: React.FC = () => {
  const teaserProjects = portfolioProjects.slice(0, 2);
    const projectsSectionRef = useRef<HTMLDivElement>(null);
  
  
  return (
    <div className="w-full bg-bg-warm">
      
      {/* 1. HERO SECTION (Luxury Editorial Layout) */}
      <HeroSection />

      {/* 2. ABOUT SECTION (Editorial Introduction) */}
      <AboutSection />

      {/* 3. STATS SECTION (Clean animated counters) */}
      <StatsSection />

      {/* 4. SERVICES SECTION (Disciplines Grid with elegant card hovers) */}
      <section className="py-32 sm:py-40 bg-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-24">
            <Badge variant="subtle" className="mb-4">Disciplines</Badge>
            <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight mb-6">
              Our Interior Services
            </h2>
            <p className="font-visueltpro text-text-secondary text-[15px] leading-relaxed font-light">
              We coordinate structural spatial layouts, custom wood furniture installations, and holistic turnkey designs for select residential and executive commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Residential Interiors',
                desc: 'Tailored private sanctuaries shaped strictly around texture, volume, and daylight. Complete layout renovations that create flow.'
              },
              {
                num: '02',
                title: 'Commercial Interiors',
                desc: 'Low-stimulus, premium corporate lounges, galleries, and hospitality spaces designed to convey severe intellectual authority.'
              },
              {
                num: '03',
                title: 'Turnkey Solutions',
                desc: 'End-to-end design, sourcing, vendor coordination, and staging management, ensuring flawless realization without compromise.'
              },
              {
                num: '04',
                title: 'Space Planning',
                desc: 'Laser-accurate geometric structuring of interior volumes. We optimize sightlines, traffic flow, and light distribution.'
              },
              {
                num: '05',
                title: 'Furniture Design',
                desc: 'Custom-sculpted dining tables, chairs, and joinery elements crafted from hand-sourced oak, walnut, and metal hardware.'
              },
              {
                num: '06',
                title: 'Material Consultation',
                desc: 'Curation of rich natural material palettes—textured stones, brushed plaster finishes, timber slabs, and tactile fabrics.'
              }
            ].map((srv, idx) => (
              <Card 
                key={idx} 
                variant="featured" 
                className="p-8 aspect-square flex flex-col justify-between group border border-border-subtle hover:border-warm-oak/30 transition-all duration-500"
              >
                <span className="font-bradford text-warm-oak text-[24px] font-light">{srv.num}</span>
                <div>
                  <h3 className="font-bradford font-normal text-[22px] text-text-primary mb-3 uppercase group-hover:text-warm-oak transition-colors duration-500">
                    {srv.title}
                  </h3>
                  <p className="font-visueltpro text-[13px] text-text-secondary leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/services">
              <Button variant="ghost">Discover Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Asymmetric Magazine Spread) */}
      <section ref={projectsSectionRef} className="py-32 sm:py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-border-subtle pb-10">
          <div>
            <Badge variant="subtle" className="mb-4">Portfolio</Badge>
            <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight">
              Featured Work
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="font-visueltpro text-[11px] tracking-[0.2em] uppercase text-text-secondary hover:text-text-primary mt-4 md:mt-0 transition-colors duration-500 flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Card 1: Spans 7 cols, aligned left */}
          <div className="md:col-span-7 flex flex-col justify-start">
            <Card variant="featured" className="group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img 
                  src={teaserProjects[0].image} 
                  alt={teaserProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-102"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="lozenge" className="bg-bg-warm/90 text-text-primary backdrop-blur-sm border-border-subtle">
                    {teaserProjects[0].category}
                  </Badge>
                </div>
              </div>
              <div className="py-6 px-4">
                <div className="flex items-center justify-between text-caption text-text-secondary mb-2">
                  <span>{teaserProjects[0].location}</span>
                  <span>{teaserProjects[0].year}</span>
                </div>
                <h3 className="font-bradford font-normal text-display-sm text-text-primary mb-3 uppercase group-hover:text-warm-oak transition-colors duration-500">
                  {teaserProjects[0].title}
                </h3>
                <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed line-clamp-2 font-light">
                  {teaserProjects[0].description}
                </p>
              </div>
            </Card>
          </div>

          {/* Card 2: Spans 5 cols, padded vertically for offset layout */}
          <div className="md:col-span-5 md:mt-32 flex flex-col justify-start">
            <Card variant="featured" className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={teaserProjects[1].image} 
                  alt={teaserProjects[1].title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-102"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="lozenge" className="bg-bg-warm/90 text-text-primary backdrop-blur-sm border-border-subtle">
                    {teaserProjects[1].category}
                  </Badge>
                </div>
              </div>
              <div className="py-6 px-4">
                <div className="flex items-center justify-between text-caption text-text-secondary mb-2">
                  <span>{teaserProjects[1].location}</span>
                  <span>{teaserProjects[1].year}</span>
                </div>
                <h3 className="font-bradford font-normal text-display-sm text-text-primary mb-3 uppercase group-hover:text-warm-oak transition-colors duration-500">
                  {teaserProjects[1].title}
                </h3>
                <p className="font-visueltpro text-[14px] text-text-secondary leading-relaxed line-clamp-2 font-light">
                  {teaserProjects[1].description}
                </p>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* 6. MATERIALS & CRAFTSMANSHIP (Tactile Wood Details Showcase) */}
      <section className="py-32 sm:py-40 bg-white/40 border-t border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image (Materials - Wood Panel) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full aspect-[16/10] rounded-cards overflow-hidden shadow-lg border border-border-subtle">
                <img 
                  src="/images/materials-wood-panel.png" 
                  alt="Havora Studio Premium Wood Panel Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content (Materials Philosophy) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Badge variant="subtle" className="mb-4">Materiality</Badge>
              <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight mb-8">
                Crafted Materials &<br />Bespoke Joinery
              </h2>
              <p className="font-visueltpro text-text-secondary text-[15px] leading-relaxed mb-6 font-light">
                We believe that a space becomes alive through the materials it displays. Using cropped visual panels, open-pore warm oaks, dark walnut veneers, textured stone masonry, and brass alignments, we achieve absolute tactile restraint.
              </p>
              <p className="font-visueltpro text-text-secondary text-[14px] leading-relaxed mb-8 font-light">
                Our design works close-up with joiners and stone sculptors to ensure that every seam, shadow gap, and hinge alignment sits perfectly flush, displaying the beauty of silence.
              </p>
              
              <div className="grid grid-cols-3 gap-6 font-visueltpro text-[11px] uppercase tracking-wider text-text-primary font-medium">
                <div>
                  <div className="w-6 h-[1px] bg-warm-oak mb-2" />
                  Natural Oak
                </div>
                <div>
                  <div className="w-6 h-[1px] bg-warm-oak mb-2" />
                  Stone Textures
                </div>
                <div>
                  <div className="w-6 h-[1px] bg-warm-oak mb-2" />
                  Custom Joinery
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Commanding Editorial Grid) */}
      <WhyChooseUsSection />

      {/* 8. CTA SECTION (Clean Layout Banner) */}
      <CtaSection />

    </div>
  );
};

export default Home;
