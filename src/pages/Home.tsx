import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { portfolioProjects } from '../data/portfolio';

// Smooth eased animated counter component
const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1.5; // seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = progress * (2 - progress); // Ease Out Quad
      const current = Math.round(easedProgress * target);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Home: React.FC = () => {
  const teaserProjects = portfolioProjects.slice(0, 2);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full bg-bg-warm">
      
      {/* 1. HERO SECTION (Luxury Editorial Layout) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed background image with parallax effect */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            src="/images/hero-tv-wall.png" 
            alt="Havora Studio TV Wall Living Room" 
            className="w-full h-full object-cover"
          />
          {/* Gentle warm ambient overlay mask */}
          <div className="absolute inset-0 bg-brand-black/25 backdrop-brightness-[0.85] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-warm via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Hero Typography & Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="lozenge" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Havora Studio
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-bradford font-normal text-[44px] sm:text-[72px] lg:text-[96px] leading-[1.05] tracking-tight uppercase mb-8"
          >
            Crafting Timeless<br />Spaces
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-visueltpro text-[14px] sm:text-[18px] max-w-xl mx-auto mb-14 leading-relaxed font-light text-white/90"
          >
            Premium Residential, Commercial & Turnkey Interior Solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link to="/contact">
              <Button variant="violet" className="px-10 py-4">
                Book Consultation
              </Button>
            </Link>
            <button onClick={scrollToProjects}>
              <Button variant="ghost" className="text-white border-white hover:text-warm-oak hover:border-warm-oak px-10 py-4">
                View Projects
              </Button>
            </button>
          </motion.div>
        </div>

        {/* Scroll hint indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none opacity-60">
          <span className="font-visueltpro text-[9px] uppercase tracking-widest text-white/80">
            Scroll to begin
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. ABOUT SECTION (Editorial Introduction) */}
      <section className="py-32 sm:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* About Text block */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Badge variant="subtle" className="mb-4 self-start">Establishment</Badge>
            <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] lg:text-[54px] text-text-primary uppercase tracking-tight mb-8">
              Purity in Design,<br />Truth in Material
            </h2>
            <p className="font-visueltpro text-text-secondary text-[15px] sm:text-[16px] leading-[1.8] mb-8 font-light">
              Havora Studio creates elegant interiors that combine functionality, timeless aesthetics and exceptional craftsmanship. Every project is carefully designed to reflect the client's lifestyle while maintaining architectural harmony.
            </p>
            <p className="font-visueltpro text-text-secondary text-[14px] sm:text-[15px] leading-[1.8] font-light">
              We approach each space with a minimal, architectural eye, rejecting decorative noise. By letting the volume, proportions, and natural materials breathe, we establish residential and commercial sanctuaries of quiet, warm luxury.
            </p>
            <div className="mt-10 self-start">
              <Link to="/about">
                <Button variant="ghost">Learn Our Philosophy</Button>
              </Link>
            </div>
          </div>

          {/* About Showcase Image Block */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] rounded-cards overflow-hidden shadow-lg border border-border-subtle group">
              <img 
                src="/images/projects-sofa.png" 
                alt="Havora Studio Living Room Sofa" 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION (Clean animated counters) */}
      <section className="py-20 bg-white/50 border-t border-b border-border-subtle relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { target: 250, suffix: '+', title: 'Projects Delivered' },
              { target: 100, suffix: '%', title: 'Residential Projects' },
              { target: 100, suffix: '%', title: 'Commercial Quality' },
              { target: 100, suffix: '%', title: 'Turnkey Solutions' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-bradford text-[40px] sm:text-[54px] font-light text-warm-oak mb-2">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="font-visueltpro text-[11px] sm:text-[12px] uppercase tracking-widest text-text-secondary">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-32 sm:py-40 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <Badge variant="subtle" className="mb-4">Why Havora</Badge>
          <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight">
            Our Architectural Rigor
          </h2>
          <p className="font-visueltpro text-text-secondary text-[15px] mt-4 font-light">
            An unwavering commitment to execution, premium materials, and transparent schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-visueltpro">
          {[
            {
              title: 'Premium Materials',
              desc: 'We curate and source only genuine, high-grade natural timber, slabs of travertine marble, and luxury fabrics with natural patinas.'
            },
            {
              title: 'Attention to Detail',
              desc: 'Every junction is engineered. We specify shadow gaps, handle alignments, and flush frame margins down to the millimeter.'
            },
            {
              title: 'Experienced Team',
              desc: 'With over 250+ projects successfully delivered, our directors lead a vetted cohort of architectural draftspersons and joiners.'
            },
            {
              title: 'Tailored Designs',
              desc: 'We do not build templates. Each layout, custom furniture piece, and color board is developed specifically for your lifestyle.'
            },
            {
              title: 'Transparent Process',
              desc: 'We map detailed cost sheets, phase schedules, and material specs, ensuring you remain in control of the project details.'
            },
            {
              title: 'On-Time Delivery',
              desc: 'Our robust project management timeline structures construction updates and staging schedules to deliver on the target week.'
            }
          ].map((item, idx) => (
            <div key={idx} className="border-t border-border-subtle pt-6">
              <h3 className="font-bradford font-normal text-[20px] text-text-primary uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION (Clean Layout Banner) */}
      <section className="py-40 bg-white/40 border-t border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="subtle" className="mb-6">Engage</Badge>
          <h2 className="font-bradford font-normal text-[36px] sm:text-[64px] leading-[1.1] text-text-primary tracking-tighter uppercase mb-8">
            Let's design your<br />dream space.
          </h2>
          <p className="font-visueltpro text-text-secondary text-[16px] max-w-xl mx-auto mb-14 leading-relaxed font-light">
            We partner with visionary clients to cultivate spaces of absolute stillness. Book an initial consultation with our lead designers.
          </p>
          <Link to="/contact">
            <Button variant="violet">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
