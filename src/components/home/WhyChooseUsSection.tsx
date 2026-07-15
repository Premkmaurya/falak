import { Badge } from "lucide-react";
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-32 sm:py-40 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-24">
        <Badge variant="subtle" className="mb-4">
          Why Havora
        </Badge>
        <h2 className="font-bradford font-normal text-[36px] sm:text-[48px] text-text-primary uppercase tracking-tight">
          Our Architectural Rigor
        </h2>
        <p className="font-visueltpro text-text-secondary text-[15px] mt-4 font-light">
          An unwavering commitment to execution, premium materials, and
          transparent schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-visueltpro">
        {[
          {
            title: "Premium Materials",
            desc: "We curate and source only genuine, high-grade natural timber, slabs of travertine marble, and luxury fabrics with natural patinas.",
          },
          {
            title: "Attention to Detail",
            desc: "Every junction is engineered. We specify shadow gaps, handle alignments, and flush frame margins down to the millimeter.",
          },
          {
            title: "Experienced Team",
            desc: "With over 250+ projects successfully delivered, our directors lead a vetted cohort of architectural draftspersons and joiners.",
          },
          {
            title: "Tailored Designs",
            desc: "We do not build templates. Each layout, custom furniture piece, and color board is developed specifically for your lifestyle.",
          },
          {
            title: "Transparent Process",
            desc: "We map detailed cost sheets, phase schedules, and material specs, ensuring you remain in control of the project details.",
          },
          {
            title: "On-Time Delivery",
            desc: "Our robust project management timeline structures construction updates and staging schedules to deliver on the target week.",
          },
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
  );
};

export default WhyChooseUsSection;
