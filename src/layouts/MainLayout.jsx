import React from 'react';

const MainLayout = ({ children }) => {
  return <div className="min-h-screen relative selection:bg-gold selection:text-white">{children}</div>;
};

export default MainLayout;
