import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Badge } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const CtaSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText("#cta-section-heading", {
      type: "lines,words",
      linesClass: "line",
    });
    const split_2 = new SplitText("#cta-section-description", {
      type: "lines,words",
      linesClass: "line",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cta-section-header",
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
        "#cta-btn",
        {
          yPercent: 80,
          opacity: 0,
        },
        {
          duration: 0.1,
          yPercent: 0,
          opacity: 1,
          ease: "expo.out",
        },
      );
  }, []);
  return (
    <section className="py-40 bg-white/40 border-t border-b border-border-subtle relative overflow-hidden">
      <div
        id="cta-section-header"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <Badge variant="subtle" className="mb-6">
          Engage
        </Badge>
        <h2
          id="cta-section-heading"
          className="font-bradford font-normal text-[36px] sm:text-[64px] leading-[1.1] text-text-primary tracking-tighter uppercase mb-8"
        >
          Let's design your
          <br />
          dream space.
        </h2>
        <p
          id="cta-section-description"
          className="font-visueltpro text-text-secondary text-[16px] max-w-xl mx-auto mb-14 leading-relaxed font-light"
        >
          We partner with visionary clients to cultivate spaces of absolute
          stillness. Book an initial consultation with our lead designers.
        </p>
        <Link to="/contact">
          <Button id="cta-btn" variant="violet">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
