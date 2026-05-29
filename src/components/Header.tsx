import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  // Motion variants for mobile menu stagger reveals
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: 'afterChildren',
        staggerChildren: 0.05
      }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20, filter: 'blur(5px)' },
    opened: { opacity: 1, y: 0, filter: 'blur(0px)' }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-[rgba(255,255,255,0.06)] bg-midnight-void/60 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Minimalist Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="font-bradford font-medium text-heading-lg tracking-tight text-cloud-whisper transition-all duration-300 group-hover:text-action-violet">
              SEQUEL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-action-violet"></span>
          </Link>

          {/* Navigation Links — Desktop only */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }: { isActive: boolean }) => 
                  `font-visueltpro text-[13px] tracking-widest uppercase transition-all duration-300 ${
                    isActive 
                      ? 'text-cloud-whisper font-medium relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1px] after:bg-cloud-whisper' 
                      : 'text-ash-accent hover:text-cloud-whisper'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action and Menu Toggles */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="inline-flex cursor-pointer focus:outline-none">
              <span className="font-visueltpro text-caption text-cloud-whisper border border-[rgba(255,255,255,0.3)] hover:border-cloud-whisper px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 bg-midnight-void/25 active:scale-95">
                Inquire
              </span>
            </Link>
            
            {/* Fully Functional Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(true)} 
              className="md:hidden cursor-pointer focus:outline-none"
              aria-label="Open Menu"
            >
              <span className="font-visueltpro text-caption text-cloud-whisper border border-[rgba(255,255,255,0.3)] hover:border-cloud-whisper px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 bg-midnight-void/25 active:scale-95">
                Menu
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Premium Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-screen h-screen bg-midnight-void/98 backdrop-blur-xl z-[999] flex flex-col justify-between p-8"
          >
            {/* Mobile Menu Header Bar */}
            <div className="flex items-center justify-between">
              {/* Minimal Logo */}
              <div className="flex items-center space-x-3">
                <span className="font-bradford font-medium text-heading-lg tracking-tight text-cloud-whisper uppercase">
                  SEQUEL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-action-violet"></span>
              </div>

              {/* Close Overlay Button */}
              <button 
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer focus:outline-none bg-transparent"
                aria-label="Close Menu"
              >
                <span className="font-visueltpro text-caption text-cloud-whisper border border-cloud-whisper px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 active:scale-95 bg-white/5">
                  Close
                </span>
              </button>
            </div>

            {/* Staggered display navLinks */}
            <nav className="flex flex-col space-y-6 md:space-y-8 my-auto text-left pl-4">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.path} 
                  variants={linkVariants}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }: { isActive: boolean }) => 
                      `font-bradford text-[36px] md:text-[48px] uppercase tracking-tight block transition-all duration-300 ${
                        isActive 
                          ? 'text-action-violet pl-2 border-l border-action-violet font-medium' 
                          : 'text-cloud-whisper hover:text-action-violet'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Mobile menu bottom coordinates */}
            <motion.div 
              variants={linkVariants}
              className="grid grid-cols-2 gap-8 border-t border-[rgba(255,255,255,0.06)] pt-6 pl-4 font-visueltpro text-[11px] text-light-ash uppercase tracking-wider"
            >
              <div>
                <span className="block text-ash-accent mb-1 text-[9px] uppercase tracking-widest">Kyoto Studio</span>
                Gionmachi, Higashiyama
              </div>
              <div>
                <span className="block text-ash-accent mb-1 text-[9px] uppercase tracking-widest">Zurich Studio</span>
                Seefeldstrasse 120
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
