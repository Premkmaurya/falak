import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Card from "../components/Card";
import { portfolioProjects } from "../data/portfolio";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import CtaSection from "../components/home/CtaSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProject from "../components/home/FeaturedProject";

// Smooth eased animated counter component

export const Home: React.FC = () => {
  return (
    <div className="w-full bg-bg-warm">
      {/* 1. HERO SECTION (Luxury Editorial Layout) */}
      <HeroSection />

      {/* 2. ABOUT SECTION (Editorial Introduction) */}
      <AboutSection />

      {/* 3. STATS SECTION (Clean animated counters) */}
      <StatsSection />

      {/* 4. SERVICES SECTION (Disciplines Grid with elegant card hovers) */}
      <ServicesSection />
      
      {/* 5. FEATURED PROJECTS (Asymmetric Magazine Spread) */}
      <FeaturedProject />

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
              <Badge variant="subtle" className="mb-4">
                Materiality
              </Badge>
              <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight mb-8">
                Crafted Materials &<br />
                Bespoke Joinery
              </h2>
              <p className="font-visueltpro text-text-secondary text-[15px] leading-relaxed mb-6 font-light">
                We believe that a space becomes alive through the materials it
                displays. Using cropped visual panels, open-pore warm oaks, dark
                walnut veneers, textured stone masonry, and brass alignments, we
                achieve absolute tactile restraint.
              </p>
              <p className="font-visueltpro text-text-secondary text-[14px] leading-relaxed mb-8 font-light">
                Our design works close-up with joiners and stone sculptors to
                ensure that every seam, shadow gap, and hinge alignment sits
                perfectly flush, displaying the beauty of silence.
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
