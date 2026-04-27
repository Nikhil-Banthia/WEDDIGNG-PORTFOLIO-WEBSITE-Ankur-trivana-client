import React from 'react';
import { Phone } from 'lucide-react';
import Reveal from '../components/common/Reveal';

const CtaBannerSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover blur-[2px]" alt="Background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
            Let's Design Your <br />
            <i className="text-gold">Dream Celebration</i>
          </h2>
          <p className="text-white/80 font-light mb-10 max-w-2xl mx-auto text-lg">
            Our calendar is selective to ensure every couple receives our undivided attention and artistry. Connect with us to begin your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-10 py-4 bg-gold text-white tracking-widest uppercase text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Book Consultation
            </a>
            <a href="#" className="px-10 py-4 border border-white text-white tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBannerSection;
