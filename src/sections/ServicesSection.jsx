import React from 'react';
import Reveal from '../components/common/Reveal';

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Bespoke Services</h2>
          <p className="text-gray-600 font-light">Comprehensive, luxury solutions tailored to make your celebration extraordinary, stress-free, and visually stunning.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <Reveal key={idx} delay={idx * 150} className="group hover-lift bg-white p-8 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0">
                <img src={srv.img} alt="bg" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#FAFAF8] rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  {srv.icon}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">{srv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{srv.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500"></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
