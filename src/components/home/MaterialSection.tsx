import React, { useEffect } from "react";
import { Badge } from "../Badge";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const MaterialSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText("#material-section-heading", {
      type: "lines,words",
      linesClass: "line",
    });
    const split_2 = new SplitText("#material-section-description", {
      type: "lines,words",
      linesClass: "line",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#material-section-container",
        start: "top 50%",
        end: "bottom 70%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    tl.from(split.lines, {
      duration: 0.1,
      yPercent: 80,
      opacity: 0,
      stagger: 0.08,
      ease: "expo.out",
    })
      .from(split_2.lines, {
        duration: 0.1,
        yPercent: 80,
        opacity: 0,
        stagger: 0.08,
        ease: "expo.out",
      })
      .fromTo(
        "#material-section-img",
        { translateX: 0, scale: 1 },
        {
          scrollTrigger: {
            trigger: "#material-section-img",
            start: "top 50%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          translateX: "100rem",
          scale: 1.2,
          ease: "power2.out",
        },
        "<",
      );
  }, []);
  return (
    <section className="bg-white/40 border-t border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div id="material-section-container" className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image (Materials - Wood Panel) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="w-full aspect-[16/10] relative rounded-cards overflow-hidden shadow-lg">
              <div
                id="material-section-img"
                className="w-full h-full absolute z-10 bg-[#F8F6F2] border-none"
              />
              <img
                src="/images/materials-wood-panel.png"
                alt="Havora Studio Premium Wood Panel Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content (Materials Philosophy) */}
          <div
            id="material-section-content"
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <Badge variant="subtle" className="mb-4">
              Materiality
            </Badge>
            <h2
              id="material-section-heading"
              className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight mb-8"
            >
              Crafted Materials &<br />
              Bespoke Joinery
            </h2>
            <p
              id="material-section-description"
              className="font-visueltpro text-text-secondary relative text-[15px] leading-relaxed mb-6 font-light"
            >
              We believe that a space becomes alive through the materials it
              displays. Using cropped visual panels, open-pore warm oaks, dark
              walnut veneers, textured stone masonry, and brass alignments, we
              achieve absolute tactile restraint.
              <br />
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
  );
};

export default MaterialSection;
