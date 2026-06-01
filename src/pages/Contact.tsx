import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate luxury API response lag
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-midnight-void pt-44 pb-36 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coordinates and Information: Spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Badge variant="subtle" className="mb-4">ENGAGE</Badge>
              <h1 className="font-bradford font-medium text-[36px] md:text-[54px] lg:text-[64px] leading-[1.05] text-cloud-whisper tracking-tighter uppercase mb-8">
                Cultivate<br />stillness.
              </h1>
              <p className="font-visueltpro text-light-ash/85 text-[15px] leading-relaxed max-w-sm mb-12">
                We partner with select individuals and organizations worldwide to develop premium sanctuaries. Contact our studios below or fill out the digital inquiry sheet.
              </p>
            </div>

            {/* Geographic Studios Coordinates */}
            <div className="space-y-8 border-t border-[rgba(255,255,255,0.06)] pt-12 font-visueltpro text-[13px] text-light-ash">
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-cloud-whisper font-medium uppercase tracking-widest text-[11px] text-ash-accent mb-3">
                    Kyoto Studio
                  </h3>
                  <p className="mb-2">Gionmachi Minamigawa, Kyoto</p>
                  <a href="tel:+81755550190" className="hover:text-action-violet transition-colors duration-300 block">+81 75 555 0190</a>
                  <a href="mailto:kyoto@sequel.studio" className="hover:text-action-violet transition-colors duration-300 block">kyoto@sequel.studio</a>
                </div>

                <div>
                  <h3 className="text-cloud-whisper font-medium uppercase tracking-widest text-[11px] text-ash-accent mb-3">
                    Zurich Studio
                  </h3>
                  <p className="mb-2">Seefeldstrasse 120, Zürich</p>
                  <a href="tel:+41445550180" className="hover:text-action-violet transition-colors duration-300 block">+41 44 555 0180</a>
                  <a href="mailto:zurich@sequel.studio" className="hover:text-action-violet transition-colors duration-300 block">zurich@sequel.studio</a>
                </div>
              </div>

              <div>
                <h3 className="text-cloud-whisper font-medium uppercase tracking-widest text-[11px] text-ash-accent mb-3">
                  Digital Media Coordinates
                </h3>
                <div className="flex space-x-6 text-ash-accent uppercase text-[11px] tracking-wider">
                  <a href="#instagram" className="hover:text-cloud-whisper transition-colors duration-300">Instagram</a>
                  <a href="#journal" className="hover:text-cloud-whisper transition-colors duration-300">Journal</a>
                  <a href="#behance" className="hover:text-cloud-whisper transition-colors duration-300">Behance</a>
                </div>
              </div>

            </div>
          </div>

          {/* Luxury consultation sheet: Spans 7 cols */}
          <div className="lg:col-span-7">
            <Card variant="featured" className="p-8 md:p-12 border border-[rgba(255,255,255,0.04)] bg-steel-gray/10">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 font-visueltpro">
                  
                  <div className="border-b border-[rgba(255,255,255,0.06)] pb-4 mb-4">
                    <h2 className="font-bradford font-medium text-display-sm text-cloud-whisper uppercase tracking-tight">
                      INQUIRY SHEET
                    </h2>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-ash-accent">
                      Your Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Alexander Sterling" 
                      className="w-full bg-midnight-void text-[14px] text-cloud-whisper border border-[rgba(255,255,255,0.12)] rounded-[6px] px-4 py-3 placeholder-cadet-gray/40 focus:outline-none focus:border-action-violet focus:ring-1 focus:ring-action-violet transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-ash-accent">
                      Your Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. alexander@sterling.co" 
                      className="w-full bg-midnight-void text-[14px] text-cloud-whisper border border-[rgba(255,255,255,0.12)] rounded-[6px] px-4 py-3 placeholder-cadet-gray/40 focus:outline-none focus:border-action-violet focus:ring-1 focus:ring-action-violet transition-all duration-300"
                    />
                  </div>

                  {/* Project Type select */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-ash-accent">
                      Practice of Interest
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-midnight-void text-[14px] text-cloud-whisper border border-[rgba(255,255,255,0.12)] rounded-[6px] px-4 py-3 focus:outline-none focus:border-action-violet focus:ring-1 focus:ring-action-violet transition-all duration-300"
                    >
                      <option value="Residential">Residential Interior Design</option>
                      <option value="Commercial">Commercial Venues</option>
                      <option value="Custom Furniture">Bespoke Furniture Objects</option>
                      <option value="Space Planning">Spatial Volume Analysis</option>
                      <option value="Turnkey">Full Turnkey Construction</option>
                      <option value="Renovation">Historical Renovation</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-ash-accent">
                      Project Details & Timeline
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Outline your location, surface area m², and creative ambitions..." 
                      className="w-full bg-midnight-void text-[14px] text-cloud-whisper border border-[rgba(255,255,255,0.12)] rounded-[6px] px-4 py-3 placeholder-cadet-gray/40 focus:outline-none focus:border-action-violet focus:ring-1 focus:ring-action-violet transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="violet" 
                      className="w-full py-4 tracking-widest uppercase font-medium text-[13px]"
                      disabled={loading}
                    >
                      {loading ? 'Transmitting Inquiries...' : 'Transmit Inquiry'}
                    </Button>
                  </div>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12 font-visueltpro"
                >
                  <div className="w-16 h-16 rounded-full bg-action-violet/10 border border-action-violet/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-action-violet text-[24px]">&check;</span>
                  </div>
                  
                  <h3 className="font-bradford font-medium text-display-sm text-cloud-whisper mb-3 uppercase">
                    Inquiry Received
                  </h3>
                  
                  <p className="text-light-ash text-[14px] leading-relaxed max-w-sm mx-auto mb-8">
                    Your details have been successfully transmitted to our director's secure terminal. Elena or Kenji will reach out within 48 business hours.
                  </p>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Residential', message: '' });
                    }}
                    className="font-visueltpro text-[11px] uppercase tracking-widest text-ash-accent hover:text-cloud-whisper border-b border-[rgba(255,255,255,0.2)] hover:border-cloud-whisper pb-1 transition-all duration-300 cursor-pointer"
                  >
                    Submit another sheet
                  </button>
                </motion.div>
              )}

            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
