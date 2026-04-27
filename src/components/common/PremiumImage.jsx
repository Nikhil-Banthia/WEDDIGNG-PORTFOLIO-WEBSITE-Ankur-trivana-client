import React, { useState } from 'react';

const PremiumImage = ({ src, alt, className, imgClass = 'object-cover', onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} onClick={onClick}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50 animate-[shimmer_1.5s_infinite]"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${imgClass} transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
    </div>
  );
};

export default PremiumImage;
