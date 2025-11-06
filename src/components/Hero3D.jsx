import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const Hero3D = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0c0c1a] to-[#0b0b12] text-white"
      aria-label="Hero section with interactive 3D scene"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.35),_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <Star className="h-4 w-4 text-violet-300" aria-hidden="true" />
            <span className="text-xs text-violet-100">Available for freelance projects</span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Game-inspired portfolio in a cyber-fantasy world
          </h1>
          <p className="mt-4 text-violet-100/90 text-base sm:text-lg max-w-xl">
            I craft immersive web experiences with 3D, motion, and accessibility in mind. Explore my work below.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-400 focus-visible:ring-offset-[#0b0b12] px-5 py-2.5 text-sm font-medium shadow-lg shadow-violet-900/40 transition"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 focus-visible:ring-offset-[#0b0b12]"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pointer-events-none absolute right-6 bottom-8 hidden md:block"
          >
            <motion.div
              className="h-28 w-28 rounded-full bg-gradient-to-tr from-violet-500/30 to-fuchsia-400/30 blur-2xl"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero3D;
