import React from 'react';
import Hero3D from './components/Hero3D';
import PortfolioGallery from './components/PortfolioGallery';
import AboutContact from './components/AboutContact';
import NavFooter from './components/NavFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white antialiased selection:bg-violet-500/40 selection:text-white">
      <NavFooter />
      <Hero3D />
      <PortfolioGallery />
      <AboutContact />
      <footer className="border-t border-white/10 bg-[#0b0b12]">
        <div className="container mx-auto px-6 py-6 text-sm text-violet-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames.Blue — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Top</a>
            <a href="#work" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Work</a>
            <a href="#about" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
