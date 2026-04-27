import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917737671719"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[70] group"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md scale-110 group-hover:scale-125 transition-transform duration-500"></span>
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_30px_rgba(18,140,126,0.4)] flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-[0_14px_38px_rgba(18,140,126,0.5)]">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsAppButton;
