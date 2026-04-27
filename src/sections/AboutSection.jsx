import React from 'react';
import PremiumImage from '../components/common/PremiumImage';
import Reveal from '../components/common/Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left" className="relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 relative">
              <PremiumImage
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
                alt="About Us"
                className="w-full h-full object-cover rounded-t-full"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-l border-t border-gold rounded-tl-[40px] hidden md:block"></div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-4">Our Heritage</p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
              Crafting Luxury <br />Weddings With <i className="text-gold">Heart</i>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              At Aura & Ivory, we believe that a wedding is more than an event; it's a profound emotional journey. For over a decade, our visionary team of designers, planners, and cinematographers have dedicated themselves to translating love stories into breathtaking visual masterpieces.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-light">
              From the royal palaces of Rajasthan to serene coastal shores, we merge traditional grandeur with modern minimalist aesthetics, ensuring your day is flawlessly executed and authentically yours.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <h4 className="font-serif text-3xl text-gray-900 mb-1">100+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Weddings</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-gray-900 mb-1">
                  10<span className="text-gold">+</span>
                </h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-gray-900 mb-1">
                  5k<span className="text-gold">+</span>
                </h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Memories</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
