import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Styling resets
import './index.css';

// Hooks & Data
import { usePreloadImages } from './hooks/usePreloadImages';

// Components & Global Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Resolve 40 frame paths served statically in the public folder
const FRAME_COUNT = 40;
const frameUrls = Array.from({ length: FRAME_COUNT }, (_, i) => 
  `/frames/watermark_removed_0d8bc9a5-3c22-4ce5-97ce-a9d9171353c4_${String(i + 1).padStart(3, '0')}.png`
);

// Page Transition Animation Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-[80vh]"
    >
      {children}
    </motion.div>
  );
};

// Route wrapper that handles location changes, transitions, and Lenis resets
const AnimatedRoutes: React.FC<{ preloadedImages: HTMLImageElement[] }> = ({ preloadedImages }) => {
  const location = useLocation();

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), /* Expensive momentum scroll */
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    // Note: ScrollTrigger will capture normal wheel scroll naturally on pinned sections

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Scroll restoration to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Routed Pages with Fluid Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home preloadedImages={preloadedImages} />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/projects" 
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/services" 
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/contact" 
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } 
            />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  const { loaded, progress, images } = usePreloadImages(frameUrls);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(15px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-full bg-midnight-void z-[9999] flex flex-col items-center justify-center font-visueltpro"
          >
            {/* Minimalist Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <span className="font-bradford font-medium text-display-lg tracking-tight text-cloud-whisper uppercase">
                SEQUEL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-action-violet animate-ping"></span>
            </div>

            {/* loading Percentage Progress */}
            <div className="relative flex flex-col items-center space-y-4">
              <span className="text-[12px] tracking-widest text-ash-accent uppercase">
                Loading Cinematic Chapters
              </span>
              
              {/* Floating numbers */}
              <span className="font-bradford text-[54px] font-medium text-cloud-whisper select-none">
                {String(progress).padStart(3, '0')}%
              </span>

              {/* Minimal bar */}
              <div className="w-32 h-[1px] bg-[rgba(255,255,255,0.08)] relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-action-violet"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render core app router once images are fully pre-cached */}
      <BrowserRouter>
        <AnimatedRoutes preloadedImages={images} />
      </BrowserRouter>
    </>
  );
};

export default App;
