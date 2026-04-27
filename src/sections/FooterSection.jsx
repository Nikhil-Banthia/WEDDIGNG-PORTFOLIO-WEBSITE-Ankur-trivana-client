import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-wide mb-6">
              AURA <span className="text-gold">&</span> IVORY
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Curating ultra-premium wedding experiences worldwide. Turning fleeting moments into timeless art.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Portfolio', 'Cinematography', 'Investment', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Luxury Decor', 'Destination Weddings', 'Candid Photography', 'Drone Films'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Newsletter</h4>
            <p className="text-gray-400 font-light text-sm mb-4">Subscribe for wedding inspirations & exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-gray-800 py-2 px-0 w-full focus:outline-none focus:border-gold text-sm text-white transition-colors" />
              <button className="text-gold uppercase tracking-widest text-xs font-semibold ml-4 hover:text-white transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Aura & Ivory. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
