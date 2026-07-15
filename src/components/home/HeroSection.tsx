import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "../Badge";
import { Button } from "../Button";

const HeroSection = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
        {/* Dark ambient overlay mask */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-[0.75] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Hero Typography & Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-bradford font-normal text-[44px] sm:text-[72px] lg:text-[96px] leading-[1.05] tracking-tight uppercase mb-8"
        >
          Crafting Timeless
          <br />
          Spaces
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
            <Button
              variant="ghost"
              className="text-white border-white hover:text-warm-oak hover:border-warm-oak px-10 py-4"
            >
              View Projects
            </Button>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
