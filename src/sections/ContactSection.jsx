import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../components/common/Reveal';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Reveal direction="left">
          <h2 className="font-serif text-4xl text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 font-light mb-12">We would be honored to be part of your story. Please fill out the form below, and our creative director will be in touch within 24 hours.</p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Studio Location</h4>
                <p className="text-gray-500 font-light text-sm">The Ivory Suite, 404 Royal Avenue, Mumbai, IN 400001</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Email Us</h4>
                <p className="text-gray-500 font-light text-sm">hello@auraandivory.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-gold mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Call Us</h4>
                <p className="text-gray-500 font-light text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="bg-[#FAFAF8] p-8 md:p-10 rounded-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Names</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="Bride & Groom" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                <input type="tel" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="Your Number" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900" placeholder="DD/MM/YYYY" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Est. Budget</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900 cursor-pointer">
                  <option>Select Range</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tell us about your vision</label>
              <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors text-gray-900 resize-none" placeholder="Locations, ideas, dreams..."></textarea>
            </div>
            <button className="w-full py-4 bg-gray-900 text-white tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300 mt-4">
              Send Inquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
