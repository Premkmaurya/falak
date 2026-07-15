import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Badge } from "lucide-react";


const CtaSection = () => {
  return (
    <section className="py-40 bg-white/40 border-t border-b border-border-subtle relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Badge variant="subtle" className="mb-6">
          Engage
        </Badge>
        <h2 className="font-bradford font-normal text-[36px] sm:text-[64px] leading-[1.1] text-text-primary tracking-tighter uppercase mb-8">
          Let's design your
          <br />
          dream space.
        </h2>
        <p className="font-visueltpro text-text-secondary text-[16px] max-w-xl mx-auto mb-14 leading-relaxed font-light">
          We partner with visionary clients to cultivate spaces of absolute
          stillness. Book an initial consultation with our lead designers.
        </p>
        <Link to="/contact">
          <Button variant="violet">Book a Consultation</Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
