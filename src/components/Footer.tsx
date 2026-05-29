import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-void border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Ethos */}
          <div className="md:col-span-2">
            <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-6">
              SEQUEL STUDIO
            </h3>
            <p className="font-visueltpro text-light-ash text-[14px] leading-relaxed max-w-sm mb-6">
              An architectural practice dedicated to restraint, premium volumes, and absolute spatial stillness. Creating sanctuaries of quiet elegance since 2018.
            </p>
          </div>

          {/* Studio Coordinates */}
          <div>
            <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-widest text-ash-accent mb-6">
              Coordinates
            </h4>
            <ul className="space-y-4 font-visueltpro text-[13px] text-light-ash">
              <li>
                <span className="block text-cloud-whisper">Kyoto Office</span>
                Gionmachi Minamigawa, Higashiyama, Kyoto
              </li>
              <li>
                <span className="block text-cloud-whisper">Zurich Office</span>
                Seefeldstrasse 120, 8008 Zürich
              </li>
            </ul>
          </div>

          {/* Quick Nav & Inquiry */}
          <div>
            <h4 className="font-visueltpro font-medium text-[11px] uppercase tracking-widest text-ash-accent mb-6">
              Studio
            </h4>
            <ul className="space-y-3 font-visueltpro text-[13px]">
              <li>
                <Link to="/projects" className="text-light-ash hover:text-cloud-whisper transition-colors duration-300">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-ash hover:text-cloud-whisper transition-colors duration-300">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-ash hover:text-cloud-whisper transition-colors duration-300">
                  Practices & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-ash hover:text-cloud-whisper transition-colors duration-300">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Area */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between font-visueltpro text-[11px] text-ash-accent tracking-wider uppercase">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} SEQUEL STUDIO. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-cloud-whisper transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-cloud-whisper transition-colors duration-300">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
