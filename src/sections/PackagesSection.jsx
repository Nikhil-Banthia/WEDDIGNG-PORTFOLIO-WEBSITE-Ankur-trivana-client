import React from 'react';
import Reveal from '../components/common/Reveal';

const PackagesSection = ({ packagesData }) => {
  return (
    <section id="packages" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Investment</h2>
          <p className="text-gray-500 font-light">Transparent pricing for unparalleled luxury.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packagesData.map((pkg, idx) => (
            <Reveal key={idx} delay={idx * 150} className={`bg-white p-8 md:p-10 border ${pkg.recommended ? 'border-gold shadow-2xl scale-105 relative z-10' : 'border-gray-100'} hover-lift`}>
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 text-xs uppercase tracking-widest font-semibold">
                  Signature
                </div>
              )}
              <h3 className="font-serif text-2xl text-gray-900 mb-2">{pkg.title}</h3>
              <p className="text-sm text-gray-500 font-light mb-6">{pkg.desc}</p>
              <div className="text-3xl font-serif text-gold mb-8 pb-8 border-b border-gray-100">{pkg.price}</div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-light text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-sm tracking-widest uppercase transition-colors duration-300 ${pkg.recommended ? 'bg-gold text-white hover:bg-gray-900' : 'bg-[#F8F7F4] text-gray-900 hover:bg-gold hover:text-white'}`}>
                Inquire Now
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
