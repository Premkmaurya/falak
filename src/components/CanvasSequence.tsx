import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyChapters } from '../data/story';
import type { StoryChapter } from '../data/story';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from './Badge';
import Button from './Button';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CanvasSequenceProps {
  preloadedImages: HTMLImageElement[];
}

export const CanvasSequence: React.FC<CanvasSequenceProps> = ({ preloadedImages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [activeChapter, setActiveChapter] = useState<StoryChapter | null>(null);
  const [showChapter, setShowChapter] = useState(false);
  const activeChapterIdRef = useRef<string | null>(null);
  const scrollTriggerRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const hero = heroRef.current;
    
    if (!canvas || !container || preloadedImages.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set stable internal drawing resolution (16:9 1080p)
    const renderWidth = 1920;
    const renderHeight = 1080;
    canvas.width = renderWidth;
    canvas.height = renderHeight;

    // Highly optimized drawing callback (caches last drawn frame index to prevent redundant clears/paints)
    let lastDrawnFrame = -1;
    const drawFrame = (index: number) => {
      if (index === lastDrawnFrame) return;
      const img = preloadedImages[index];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      lastDrawnFrame = index;
    };

    // Draw first frame immediately
    drawFrame(0);

    // Dynamic scroll timeline
    const scrollObj = { frame: 0 };
    
    // Master timeline coordinating Hero fade-out and Canvas scroll sequence (scrub: true for 1:1 input responsiveness)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: false,
        onUpdate: (self) => {
          const currentFrame = Math.round(scrollObj.frame);

          // Find if there is an active chapter at this frame index
          const chapter = storyChapters.find(
            (c) => currentFrame >= c.startFrame && currentFrame <= c.endFrame
          );

          const nextChapterId = chapter ? chapter.id : null;
          
          // CRITICAL OPTIMIZATION: Only update React state on actual chapter changes
          if (nextChapterId !== activeChapterIdRef.current) {
            activeChapterIdRef.current = nextChapterId;
            if (chapter) {
              setActiveChapter(chapter);
              setShowChapter(true);
            } else {
              setActiveChapter(null);
              setShowChapter(false);
            }
          }
        }
      }
    });

    // 1. Fade and translate the Hero text at the start of the scroll (highly performant transform + opacity)
    if (hero) {
      tl.to(hero, {
        opacity: 0,
        y: -60,
        duration: 1,
        ease: 'power1.out',
      }, 0);
    }

    // 2. Play the canvas sequential frames starting slightly after the Hero fade begins
    tl.to(scrollObj, {
      frame: preloadedImages.length - 1,
      ease: 'none',
      duration: 5, // Relates to the remainder of the timeline
      onUpdate: () => {
        drawFrame(Math.round(scrollObj.frame));
      }
    }, 0.5); // Staggered start to let Hero fade first

    scrollTriggerRef.current = tl.scrollTrigger;

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [preloadedImages]);

  // Translate position names to strict alignment CSS classes
  const getPositionStyles = (pos: StoryChapter['position']) => {
    switch (pos) {
      case 'left':
        return 'left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 text-left max-w-lg';
      case 'right':
        return 'right-6 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 text-left max-w-lg';
      case 'asymmetric-right':
        return 'right-6 md:right-[15%] top-1/3 text-left max-w-lg';
      case 'center-bottom':
        return 'left-1/2 bottom-16 md:bottom-28 -translate-x-1/2 text-center max-w-2xl';
      default:
        return 'left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 text-left max-w-lg';
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-midnight-void"
      style={{ height: '850vh' }} /* extended scroll depth for a luxurious reading duration */
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-midnight-void">
        
        {/* Responsive Drawing Canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover opacity-60 md:opacity-75 transition-opacity duration-300"
        />

        {/* Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-void via-transparent to-midnight-void pointer-events-none opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-void/40 via-transparent to-midnight-void/40 pointer-events-none" />

        {/* A. Unified HERO Overlay (Pins in place and fades on initial scroll) */}
        <div 
          ref={heroRef}
          className="absolute inset-0 w-full h-full flex items-center justify-center z-20 px-6 max-w-5xl mx-auto text-center"
        >
          <div>
            <div className="my-6">
              <Badge variant="lozenge">Sequel Interior Studio</Badge>
            </div>

            <h1 className="font-bradford font-medium text-[36px] md:text-[72px] lg:text-[88px] leading-[1.1] text-cloud-whisper tracking-tighter mb-8 uppercase select-none">
              Spaces that<br />feel alive.
            </h1>

            <p className="font-visueltpro text-light-ash/85 text-[14px] md:text-[16px] max-w-md mx-auto mb-12 leading-relaxed font-light">
              A physical manifestation of restraint. We build editorial, architectural sanctuaries where silent details formulate an absolute expression.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => {
                  const trigger = scrollTriggerRef.current;
                  let destination = window.innerHeight * 1.37; // Mathematically precise fallback
                  if (trigger) {
                    const start = trigger.start;
                    const end = trigger.end;
                    // Target t = 1.01 out of 5.5 total duration in the timeline (where Hero is 100% faded and Chapter 1 begins)
                    destination = start + (1.01 / 5.5) * (end - start);
                  }
                  
                  window.scrollTo({
                    top: destination,
                    behavior: 'smooth'
                  });
                }}
                className="cursor-pointer"
              >
                <Button variant="primary">
                  Enter Residence
                </Button>
              </button>
              
              <Link to="/projects">
                <Button variant="ghost">
                  View Gallery
                </Button>
              </Link>
            </div>

            {/* Mouse scroll hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none opacity-40">
              <span className="font-visueltpro text-[9px] uppercase tracking-widest text-ash-accent">
                Scroll to begin
              </span>
              <div className="w-[1px] h-10 bg-gradient-to-b from-cloud-whisper to-transparent" />
            </div>
          </div>
        </div>

        {/* B. Narrative CHAPTERS Overlay (Reveals in sequences after Hero fades) */}
        <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-6 pointer-events-none z-10">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {showChapter && activeChapter && (
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute pointer-events-auto ${getPositionStyles(activeChapter.position)}`}
                >
                  
                  {/* Chapter Tag */}
                  <div className="mb-4">
                    <Badge variant="subtle" className="text-[10px] py-1 border-[rgba(255,255,255,0.08)]">
                      {activeChapter.subtitle}
                    </Badge>
                  </div>

                  {/* Custom Serif Display Headline */}
                  <h2 className="font-bradford font-medium text-[32px] md:text-[54px] lg:text-[64px] leading-[1.05] text-cloud-whisper tracking-tight mb-5 uppercase">
                    {activeChapter.title}
                  </h2>

                  {/* Body Text / Architectural Ethos */}
                  <p className={`font-visueltpro text-light-ash text-[14px] md:text-[15px] leading-[1.6] max-w-md ${
                    activeChapter.position === 'center-bottom' ? 'mx-auto text-center' : 'text-left'
                  }`}>
                    {activeChapter.description}
                  </p>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CanvasSequence;
