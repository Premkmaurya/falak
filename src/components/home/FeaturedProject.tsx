import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge";
import Card from "../Card";
import { portfolioProjects } from "../../data/portfolio";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const FeaturedProject = () => {
  const teaserProjects = portfolioProjects.slice(0, 2);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText(".featured-projects", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#featured-projects-div",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.1,
    });
    gsap.fromTo(
      "#about-section-img-2",
      {
        translateX: 0,
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: "#about-section-img-2",
          start: "top 50%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        translateX: "-100rem",
        scale: 1.2,
        ease: "power2.out",
      },
    );
    gsap.fromTo(
      "#about-section-img-1",
      {
        translateX: 0,
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: "#about-section-img-1",
          start: "top 50%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        translateX: "100rem",
        scale: 1.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section
      ref={projectsSectionRef}
      className="py-32 sm:py-40 max-w-7xl mx-auto px-6"
    >
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-border-subtle pb-10">
        <div id="featured-projects-div">
          <Badge variant="subtle" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="featured-projects font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight">
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
      <div
        id="portfolio-card"
        className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24"
      >
        {/* Card 1: Spans 7 cols, aligned left */}
        <div className="md:col-span-7 flex flex-col justify-start">
          <Card variant="featured" className="group">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <div
                id="about-section-img-1"
                className="w-full h-full absolute z-10 bg-[#F8F6F2] border-none"
              />
              <img
                src={teaserProjects[0].image}
                alt={teaserProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-102"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="lozenge"
                  className="bg-bg-warm/90 text-text-primary backdrop-blur-sm border-border-subtle"
                >
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
              <div
                id="about-section-img-2"
                className="w-full h-full absolute z-10 bg-[#F8F6F2] border-none"
              />
              <img
                src={teaserProjects[1].image}
                alt={teaserProjects[1].title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-102"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="lozenge"
                  className="bg-bg-warm/90 text-text-primary backdrop-blur-sm border-border-subtle"
                >
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
  );
};

export default FeaturedProject;
