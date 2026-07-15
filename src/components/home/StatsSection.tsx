import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from 'framer-motion';


const Counter: React.FC<{ target: number; suffix?: string }> = ({
  target,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1.5; // seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = progress * (2 - progress); // Ease Out Quad
      const current = Math.round(easedProgress * target);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white/50 border-t border-b border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { target: 250, suffix: "+", title: "Projects Delivered" },
            { target: 100, suffix: "%", title: "Residential Projects" },
            { target: 100, suffix: "%", title: "Commercial Quality" },
            { target: 100, suffix: "%", title: "Turnkey Solutions" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-bradford text-[40px] sm:text-[54px] font-light text-warm-oak mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="font-visueltpro text-[11px] sm:text-[12px] uppercase tracking-widest text-text-secondary">
                {stat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
