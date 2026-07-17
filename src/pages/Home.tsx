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
import MaterialSection from "../components/home/MaterialSection";

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
      <MaterialSection />      

      {/* 7. WHY CHOOSE US (Commanding Editorial Grid) */}
      <WhyChooseUsSection />

      {/* 8. CTA SECTION (Clean Layout Banner) */}
      <CtaSection />
    </div>
  );
};

export default Home;
