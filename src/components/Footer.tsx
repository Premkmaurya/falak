import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-warm border-t border-border-subtle pt-28 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Ethos */}
          <div className="md:col-span-2">
            <h3 className="font-bradford font-medium text-display-sm text-text-primary mb-6 tracking-widest uppercase">
              HAVORA STUDIO
            </h3>
            <p className="font-visueltpro text-text-secondary text-[14px] leading-relaxed max-w-sm mb-6">
              Havora Studio creates elegant residential and commercial interiors that combine functionality, timeless aesthetics, and exceptional craftsmanship. We partner with clients to sculpt sanctuaries of quiet luxury.
            </p>
            <div className="text-[12px] font-medium font-visueltpro text-warm-oak uppercase tracking-wider">
              250+ Projects Delivered
            </div>
          </div>

          {/* Coordinates */}
          <div>
            <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-[0.2em] text-text-secondary/70 mb-6">
              Coordinates
            </h4>
            <ul className="space-y-4 font-visueltpro text-[13px] text-text-secondary">
              <li>
                <span className="block text-text-primary mb-1 font-medium">Consultation</span>
                By Appointment Only
              </li>
              <li>
                <span className="block text-text-primary mb-1 font-medium">Digital Desk</span>
                <a href="mailto:hello@havorastudio.in" className="hover:text-warm-oak transition-colors duration-300">
                  hello@havorastudio.in
                </a>
              </li>
              <li>
                <span className="block text-text-primary mb-1 font-medium">Website</span>
                <a href="https://havorastudio.in" target="_blank" rel="noopener noreferrer" className="hover:text-warm-oak transition-colors duration-300">
                  havorastudio.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-[0.2em] text-text-secondary/70 mb-6">
              Studio
            </h4>
            <ul className="space-y-3 font-visueltpro text-[13px]">
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-text-primary transition-colors duration-500">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-text-primary transition-colors duration-500">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text-secondary hover:text-text-primary transition-colors duration-500">
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-text-primary transition-colors duration-500">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Area */}
        <div className="border-t border-border-subtle pt-12 flex flex-col md:flex-row items-center justify-between font-visueltpro text-[10px] text-text-secondary/70 tracking-[0.2em] uppercase">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} HAVORA STUDIO. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-text-primary transition-colors duration-500">Privacy Policy</a>
            <a href="#terms" className="hover:text-text-primary transition-colors duration-500">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
