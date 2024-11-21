import React from 'react';
import Background from './Background';

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Background />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout; 