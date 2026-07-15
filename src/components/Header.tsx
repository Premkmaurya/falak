import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' }
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
      {/* A. DESKTOP HEADER (Floating Pill Style — Center-positioned, matching layout request) */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl items-center justify-between bg-black/90 backdrop-blur-md px-8 py-3.5 rounded-full border border-white/10 shadow-2xl text-white font-visueltpro">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1 group">
          <span className="font-bradford font-medium text-[20px] tracking-widest text-white transition-all duration-300 group-hover:text-warm-oak uppercase">
            HAVORA&middot;STUDIO
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }: { isActive: boolean }) => 
                `text-[13px] tracking-wider transition-colors duration-300 ${
                  isActive 
                    ? 'text-white font-medium relative after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-warm-oak' 
                    : 'text-white/60 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section (Language & Contact button) */}
        <div className="flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 text-[12px] font-medium tracking-wider select-none">
            <span className="text-warm-oak cursor-pointer">EN</span>
            
          </div>

          {/* Contact Button */}
          <Link to="/contact">
            <button className="border border-white/20 hover:border-white text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-[11px] font-medium tracking-widest uppercase transition-all duration-300 active:scale-95 cursor-pointer">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* B. MOBILE HEADER (Standard top bar for clean layouts) */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 border-b border-border-subtle bg-bg-warm/75 backdrop-blur-md h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bradford font-medium text-heading-lg tracking-widest text-text-primary uppercase">
            HAVORA STUDIO
          </span>
        </Link>

        {/* Menu Toggle */}
        <button 
          onClick={() => setMenuOpen(true)} 
          className="cursor-pointer focus:outline-none bg-transparent"
          aria-label="Open Menu"
        >
          <span className="font-visueltpro text-[10px] text-text-primary border border-border-medium hover:border-text-primary px-4 py-2 uppercase tracking-[0.12em] transition-all duration-500 bg-transparent active:scale-95">
            Menu
          </span>
        </button>
      </header>

      {/* C. MOBILE FULL-SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-screen h-screen bg-bg-warm/98 backdrop-blur-xl z-[999] flex flex-col justify-between p-8"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-bradford font-medium text-heading-lg tracking-widest text-text-primary uppercase">
                  HAVORA STUDIO
                </span>
              </div>

              {/* Close button */}
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

            {/* Staggered Links */}
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
              
              {/* Extra Contact Link in Mobile Menu list */}
              <motion.div variants={linkVariants} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }: { isActive: boolean }) => 
                    `font-bradford text-[36px] md:text-[48px] uppercase tracking-tight block transition-all duration-300 ${
                      isActive 
                        ? 'text-warm-oak pl-2 border-l border-warm-oak font-medium' 
                        : 'text-text-primary hover:text-warm-oak'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </motion.div>
            </nav>

            {/* Mobile Footer */}
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
