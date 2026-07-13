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

// Resolve Havora Studio core images to preload for premium zero-CLS initial load
const PRELOAD_IMAGES = [
  '/images/hero-tv-wall.png',
  '/images/projects-sofa.png',
  '/images/materials-wood-panel.png',
  '/images/furniture-chairs.png',
  '/images/craftsmanship-door.png'
];

// Page Transition Animation Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-[80vh]"
    >
      {children}
    </motion.div>
  );
};

// Route wrapper that handles location changes, transitions, and Lenis resets
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.04,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Scroll restoration to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-bg-warm">
      <Header />
      
      {/* Routed Pages with Fluid Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home />
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
  const { loaded, progress } = usePreloadImages(PRELOAD_IMAGES);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(15px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-full bg-bg-warm z-[9999] flex flex-col items-center justify-center font-visueltpro"
          >
            {/* Minimalist Logo */}
            <div className="flex flex-col items-center mb-8">
              <span className="font-bradford font-medium text-display-lg tracking-widest text-text-primary uppercase">
                HAVORA STUDIO
              </span>
              <div className="w-12 h-[1px] bg-warm-oak mt-2" />
            </div>

            {/* Loading Percentage Progress */}
            <div className="relative flex flex-col items-center space-y-4">
              <span className="text-[10px] tracking-[0.3em] text-text-secondary uppercase">
                Crafting Timeless Spaces
              </span>
              
              {/* Floating numbers */}
              <span className="font-bradford text-[54px] font-medium text-text-primary select-none">
                {String(progress).padStart(3, '0')}%
              </span>

              {/* Minimal bar */}
              <div className="w-32 h-[1px] bg-border-subtle relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-warm-oak"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render core app router once images are pre-cached */}
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
