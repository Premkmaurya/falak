import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../Badge";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import AnimatedText from "../AnimatedText";

const splitText = `Havora Studio creates elegant interiors that combine functionality,
  timeless aesthetics and exceptional craftsmanship. Every project is
  carefully designed to reflect the client's lifestyle while
  maintaining architectural harmony.We approach each space with a minimal, architectural eye, rejecting
  decorative noise. By letting the volume, proportions, and natural
  materials breathe, we establish residential and commercial
  sanctuaries of quiet, warm luxury.
  `;

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText("#about-section-heading", {
      type: "lines,words",
      linesClass: "line",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 50%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
    tl.from(split.lines, {
      duration: 0.1,
      yPercent: 80,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });

    tl.fromTo(
      "#about-section-img",
      {
        translateX: 0,
        scale: 1,
        ease: "power2.out",
      },
      {
        translateX: "100rem",
        scale: 1.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section className="py-32 sm:py-40 max-w-7xl mx-auto px-6">
      <div
        id="about-section"
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
      >
        {/* About Text block */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <Badge variant="subtle" className="mb-4 self-start">
            Establishment
          </Badge>
          <h2
            id="about-section-heading"
            className="font-bradford font-normal text-[36px] sm:text-[48px] lg:text-[54px] text-text-primary uppercase tracking-tight mb-8"
          >
            Purity in Design,
            <br />
            Truth in Material
          </h2>
          <p className="font-visueltpro text-text-secondary text-[15px] sm:text-[16px] leading-[1.8] mb-8 font-light">
            <AnimatedText
              text={splitText}
              className="text-black font-medium leading-relaxed max-w-[560px]"
              style={{ fontSize: "clamp(0.7rem, 2vw, 1.35rem)" }}
            />
          </p>
          <div className="mt-10 self-start">
            <Link
              to="/about"
              className="philosophy-link group inline-flex items-center"
            >
              <span className="philosophy-label">Learn Our Philosophy</span>
              <svg
                className="philosophy-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
                aria-hidden="true"
              >
                <path
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* About Showcase Image Block */}
        <div className="lg:col-span-6">
          <div
            id="about-section-img-block"
            className="w-full aspect-[4/3] relative rounded-cards overflow-hidden group"
          >
            <div
              id="about-section-img"
              className="w-full h-full absolute z-10 bg-[#F8F6F2] border-none"
            />
            <img
              src="/images/projects-sofa.png"
              alt="Havora Studio Living Room Sofa"
              className="w-full h-full object-cover shadow-lg transition-transform duration-[1500ms] z-1 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
