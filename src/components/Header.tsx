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
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border-subtle bg-bg-warm/75 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-bradford font-medium text-heading-lg tracking-widest text-text-primary transition-all duration-300 group-hover:text-warm-oak uppercase">
              HAVORA STUDIO
            </span>
          </Link>

          {/* Navigation Links — Desktop only */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }: { isActive: boolean }) => 
                  `font-visueltpro text-[11px] tracking-[0.2em] uppercase transition-all duration-500 ${
                    isActive 
                      ? 'text-text-primary font-medium relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-text-primary' 
                      : 'text-text-secondary hover:text-text-primary'
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
              <span className="font-visueltpro text-[10px] text-text-primary border border-border-medium hover:border-text-primary px-5 py-2.5 uppercase tracking-[0.15em] transition-all duration-500 bg-transparent hover:bg-text-primary hover:text-bg-warm active:scale-95">
                Inquire
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(true)} 
              className="md:hidden cursor-pointer focus:outline-none bg-transparent"
              aria-label="Open Menu"
            >
              <span className="font-visueltpro text-[10px] text-text-primary border border-border-medium hover:border-text-primary px-5 py-2.5 uppercase tracking-[0.15em] transition-all duration-500 bg-transparent hover:bg-text-primary hover:text-bg-warm active:scale-95">
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
            className="fixed inset-0 w-screen h-screen bg-bg-warm/98 backdrop-blur-xl z-[999] flex flex-col justify-between p-8"
          >
            {/* Mobile Menu Header Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-bradford font-medium text-heading-lg tracking-widest text-text-primary uppercase">
                  HAVORA STUDIO
                </span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer focus:outline-none bg-transparent"
                aria-label="Close Menu"
              >
                <span className="font-visueltpro text-caption text-text-primary border border-border-medium px-4 py-2 uppercase tracking-wider transition-all duration-300 active:scale-95 bg-black/5">
                  Close
                </span>
              </button>
            </div>

            {/* Staggered Nav Links */}
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
                          ? 'text-warm-oak pl-2 border-l border-warm-oak font-medium' 
                          : 'text-text-primary hover:text-warm-oak'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <motion.div 
              variants={linkVariants}
              className="grid grid-cols-2 gap-8 border-t border-border-subtle pt-6 pl-4 font-visueltpro text-[11px] text-text-secondary uppercase tracking-wider"
            >
              <div>
                <span className="block text-text-secondary/70 mb-1 text-[9px] uppercase tracking-widest font-medium">Consultation</span>
                By Appointment Only
              </div>
              <div>
                <span className="block text-text-secondary/70 mb-1 text-[9px] uppercase tracking-widest font-medium">Digital Desk</span>
                hello@havorastudio.in
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
