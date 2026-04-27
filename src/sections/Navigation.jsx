import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            AURA <span className="text-gold">&</span> IVORY
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Stories', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm tracking-wider uppercase font-medium hover:text-gold transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                {item}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gray-900 transition-colors duration-300">
              Book Now
            </a>
          </div>

          <button className={`lg:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-gray-900 text-white transition-transform duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:text-gold transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full pb-20 space-y-8">
          <h2 className="font-serif text-3xl mb-8 text-gold">A & I</h2>
          {['Home', 'About', 'Services', 'Gallery', 'Stories', 'Packages', 'Contact'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-widest hover:text-gold transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
