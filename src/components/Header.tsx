import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[rgba(255,255,255,0.06)] bg-midnight-void/60 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <span className="font-bradford font-medium text-heading-lg tracking-tight text-cloud-whisper transition-all duration-300 group-hover:text-action-violet">
            SEQUEL
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-action-violet"></span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/contact' }
          ].map((link) => (
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

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <Button variant="ghost" className="hidden sm:inline-flex text-[12px] uppercase tracking-wider px-4 py-2">
              Inquire
            </Button>
          </Link>
          
          {/* Mobile Menu Button placeholder (can expand if needed, or keep minimal) */}
          <Link to="/contact" className="md:hidden">
            <span className="font-visueltpro text-caption text-cloud-whisper border border-cloud-whisper px-3 py-1.5 rounded-full uppercase">
              Menu
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
};
export default Header;
