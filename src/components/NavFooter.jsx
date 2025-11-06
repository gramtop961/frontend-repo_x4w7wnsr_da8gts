import React from 'react';
import { motion } from 'framer-motion';

const NavFooter = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 text-white">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Flames.Blue</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Work</a>
          <a href="#about" className="hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">About</a>
          <a href="#contact" className="hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-violet-600 px-3 py-1.5 text-sm font-medium hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Hire me</a>
      </div>
    </header>
  );
};

export default NavFooter;
