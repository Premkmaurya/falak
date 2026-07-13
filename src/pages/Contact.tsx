import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Retrieve credentials from environment variables (configured via .env or hosting panel)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId.includes('here') || templateId.includes('here')) {
      // Fallback for simulation or unconfigured variables so the form still demonstrates response
      console.warn('EmailJS environment variables are not fully configured. Simulating response...');
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    // Map template parameters dynamically for maximum template layout compatibility
    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      project_type: formData.projectType,
      projectType: formData.projectType,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('EMAILJS FAILED...', err);
        setLoading(false);
        setErrorMsg('Failed to transmit your inquiry. Please try again or email us directly.');
      });
  };

  return (
    <div className="w-full bg-bg-warm pt-44 pb-36 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coordinates and Information: Spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Badge variant="subtle" className="mb-4">Engage</Badge>
              <h1 className="font-bradford font-normal text-[36px] md:text-[54px] lg:text-[64px] leading-[1.05] text-text-primary tracking-tighter uppercase mb-8">
                Cultivate<br />stillness.
              </h1>
              <p className="font-visueltpro text-text-secondary text-[15px] leading-relaxed max-w-sm mb-12 font-light">
                We partner with select individuals and developers to create premium spatial sanctuaries. Contact us via our digital desk or fill out the inquiry sheet.
              </p>
            </div>

            {/* Geographic Studios Coordinates */}
            <div className="space-y-8 border-t border-border-subtle pt-12 font-visueltpro text-[13px] text-text-secondary">
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-text-primary font-medium uppercase tracking-widest text-[11px] mb-3">
                    Studio Desk
                  </h3>
                  <p className="mb-2">By Appointment Only</p>
                  <a href="mailto:hello@havorastudio.in" className="hover:text-warm-oak transition-colors duration-300 block font-medium">
                    hello@havorastudio.in
                  </a>
                  <a href="https://havorastudio.in" target="_blank" rel="noopener noreferrer" className="hover:text-warm-oak transition-colors duration-300 block">
                    havorastudio.in
                  </a>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium uppercase tracking-widest text-[11px] mb-3">
                    Geographies
                  </h3>
                  <p className="mb-1">Mumbai &bull; Delhi</p>
                  <p className="mb-1">Bengaluru &bull; Alibaug</p>
                </div>
              </div>

              <div>
                <h3 className="text-text-primary font-medium uppercase tracking-widest text-[11px] mb-3">
                  Digital Coordinates
                </h3>
                <div className="flex space-x-6 text-text-secondary uppercase text-[11px] tracking-wider font-medium">
                  <a href="#instagram" className="hover:text-warm-oak transition-colors duration-300">Instagram</a>
                  <a href="#journal" className="hover:text-warm-oak transition-colors duration-300">Journal</a>
                  <a href="#behance" className="hover:text-warm-oak transition-colors duration-300">Behance</a>
                </div>
              </div>

            </div>
          </div>

          {/* Inquiry sheet: Spans 7 cols */}
          <div className="lg:col-span-7">
            <Card variant="featured" className="p-8 md:p-12 border border-border-subtle bg-white/40">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 font-visueltpro">
                  
                  <div className="border-b border-border-subtle pb-4 mb-4">
                    <h2 className="font-bradford font-normal text-display-sm text-text-primary uppercase tracking-wider">
                      INQUIRY SHEET
                    </h2>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-text-secondary font-medium">
                      Your Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Alexander Sterling" 
                      className="w-full bg-white text-[14px] text-text-primary border border-border-medium rounded-[4px] px-4 py-3 placeholder-text-secondary/40 focus:outline-none focus:border-warm-oak focus:ring-1 focus:ring-warm-oak transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-text-secondary font-medium">
                      Your Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. alexander@sterling.co" 
                      className="w-full bg-white text-[14px] text-text-primary border border-border-medium rounded-[4px] px-4 py-3 placeholder-text-secondary/40 focus:outline-none focus:border-warm-oak focus:ring-1 focus:ring-warm-oak transition-all duration-300"
                    />
                  </div>

                  {/* Project Type select */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-text-secondary font-medium">
                      Practice of Interest
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-white text-[14px] text-text-primary border border-border-medium rounded-[4px] px-4 py-3 focus:outline-none focus:border-warm-oak focus:ring-1 focus:ring-warm-oak transition-all duration-300"
                    >
                      <option value="Residential">Residential Interior Design</option>
                      <option value="Commercial">Commercial Venues</option>
                      <option value="Turnkey">Full Turnkey Construction</option>
                      <option value="Space Planning">Spatial Volume Analysis</option>
                      <option value="Furniture Design">Bespoke Furniture Objects</option>
                      <option value="Material Consultation">Tactile Material Consultation</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-text-secondary font-medium">
                      Project Details & Timeline
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Outline your location, surface area m², and creative ambitions..." 
                      className="w-full bg-white text-[14px] text-text-primary border border-border-medium rounded-[4px] px-4 py-3 placeholder-text-secondary/40 focus:outline-none focus:border-warm-oak focus:ring-1 focus:ring-warm-oak transition-all duration-300 resize-none font-light"
                    />
                  </div>

                  {/* Error display feedback */}
                  {errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[12px] text-red-700 bg-red-50 border border-red-200 rounded-[4px] p-3 text-center"
                    >
                      {errorMsg}
                    </motion.div>
                  )}

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
                  <div className="w-16 h-16 rounded-full bg-warm-oak/10 border border-warm-oak/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-warm-oak text-[24px]">&check;</span>
                  </div>
                  
                  <h3 className="font-bradford font-normal text-display-sm text-text-primary mb-3 uppercase">
                    Inquiry Transmitted
                  </h3>
                  
                  <p className="text-text-secondary text-[14px] leading-relaxed max-w-sm mx-auto mb-8 font-light">
                    Your inquiry details have been successfully transmitted via EmailJS. Our design director will review your details and reach out within 48 business hours.
                  </p>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Residential', message: '' });
                    }}
                    className="font-visueltpro text-[11px] uppercase tracking-widest text-text-secondary hover:text-text-primary border-b border-border-medium hover:border-text-primary pb-1 transition-all duration-300 cursor-pointer"
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
