import React, { useEffect, useRef } from "react";
import { Badge } from "../Badge";
import Card from "../Card";
import Button from "../Button";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const split_1 = new SplitText("#service-section-heading", {
      type: "lines,words",
      linesClass: "line",
    });
    const split_2 = new SplitText("#service-section-subheading", {
      type: "words,lines",
      linesClass: "line",
    });

    // Timeline for heading + subheading
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#service-section-header",
        start: "top 70%",
        end: "bottom 60%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      split_1.lines,
      {
        duration: 0.1,
        yPercent: 80,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      },
      "<",
    ).from(
      split_2.lines,
      {
        duration: 0.1,
        yPercent: 80,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2,
      },
      "<",
    );

    // Separate timeline for cards
    gsap.fromTo(
      ".container-card",
      {
        opacity: 0,
        scale: 0.95,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
        ease: "expo.out",
      },
    );
  }, []);

  return (
    <section className="py-32 sm:py-40 bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div id="service-section-header" className="max-w-2xl mb-24">
          <Badge variant="subtle" className="mb-4">
            Disciplines
          </Badge>
          <h2
            id="service-section-heading"
            className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight mb-6"
          >
            Our Interior Services
          </h2>
          <p
            id="service-section-subheading"
            className="font-visueltpro text-text-secondary text-[15px] leading-relaxed font-light"
          >
            We coordinate structural spatial layouts, custom wood furniture
            installations, and holistic turnkey designs for select residential
            and executive commercial spaces.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              id: 1,
              num: "01",
              title: "Residential Interiors",
              desc: "Tailored living environments crafted around natural light, refined materials, and spatial harmony for everyday luxury.",
              image: "/images/services/residential.avif",
            },
            {
              id: 2,
              num: "02",
              title: "Commercial Interiors",
              desc: "Premium workspaces, hospitality venues, and retail environments designed to elevate brand presence and user experience.",
              image: "/images/services/commercial.webp",
            },
            {
              id: 3,
              num: "03",
              title: "Turnkey Solutions",
              desc: "From concept to completion, we manage every detail including sourcing, execution, vendor coordination, and final styling.",
              image: "/images/services/turnkey.webp",
            },
            {
              id: 4,
              num: "04",
              title: "Space Planning",
              desc: "Thoughtfully structured layouts that improve circulation, maximize functionality, and enhance natural light.",
              image: "/images/services/planning.webp",
            },
            {
              id: 5,
              num: "05",
              title: "Furniture Design",
              desc: "Bespoke furniture pieces crafted to complement each interior with timeless materials and exceptional craftsmanship.",
              image: "/images/services/furniture.webp",
            },
            {
              id: 6,
              num: "06",
              title: "Material Consultation",
              desc: "Curated selections of stone, timber, metals, fabrics, and finishes that define the atmosphere of every space.",
              image: "/images/services/material.webp",
            },
          ].map((srv, idx) => (
            <Card
              key={idx}
              variant="featured"
              className="container-card p-8 aspect-square flex flex-col justify-between group border border-border-subtle hover:border-warm-oak/30 transition-all duration-500"
            >
              <span className="font-bradford text-warm-oak text-[24px] font-light">
                {srv.num}
              </span>
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
  );
};

export default ServicesSection;
