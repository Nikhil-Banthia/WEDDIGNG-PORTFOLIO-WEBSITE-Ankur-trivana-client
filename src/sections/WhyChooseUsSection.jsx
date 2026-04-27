import React from 'react';
import { Award, Clock, Heart, ShieldCheck } from 'lucide-react';
import Reveal from '../components/common/Reveal';

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl text-gray-900 mb-16">The Aura & Ivory Standard</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { icon: <Award className="w-8 h-8" />, title: 'Premium Quality' },
            { icon: <Clock className="w-8 h-8" />, title: 'On-Time Execution' },
            { icon: <ShieldCheck className="w-8 h-8" />, title: 'Stress-Free Planning' },
            { icon: <Heart className="w-8 h-8" />, title: 'Emotional Storytelling' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F8F7F4] text-gold flex items-center justify-center mb-4">{item.icon}</div>
              <h4 className="font-serif text-lg text-gray-900">{item.title}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
