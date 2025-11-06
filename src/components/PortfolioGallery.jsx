import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nebula Quest',
    subtitle: 'WebGL dungeon runner',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    tags: ['Three.js', 'R3F', 'GLSL'],
    url: '#',
  },
  {
    id: 2,
    title: 'Arcane UI',
    subtitle: 'Design system with motion',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'A11y'],
    url: '#',
  },
  {
    id: 3,
    title: 'Star Forge',
    subtitle: 'Procedural planet generator',
    cover: 'https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Noise', 'Shaders', 'Instancing'],
    url: '#',
  },
];

const Card = ({ item, onOpen }) => {
  return (
    <motion.button
      onClick={() => onOpen(item)}
      className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={item.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
        <p className="text-violet-100/80 text-sm">{item.subtitle}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-[11px] rounded-full bg-white/10 px-2 py-0.5 text-violet-100 ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

const Modal = ({ item, onClose }) => {
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0f0f17] ring-1 ring-white/10"
        initial={{ y: prefersReducedMotion ? 0 : 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: prefersReducedMotion ? 0 : 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 26 }}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full">
            <img src={item.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0f17] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-violet-100/90">{item.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="text-[11px] rounded-full bg-white/10 px-2 py-0.5 text-violet-100 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={item.url}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Visit project <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioGallery = () => {
  const [active, setActive] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const el = gridRef.current;
    const onMove = (e) => {
      const cards = el.querySelectorAll('[data-tilt]');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--rx', `${-y * 8}deg`);
        card.style.setProperty('--ry', `${x * 10}deg`);
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="work" className="relative py-16 sm:py-20 bg-[#0b0b12] text-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
            <p className="text-violet-100/80 mt-1">Hover for parallax. Click for details.</p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              data-tilt
              style={{ transform: 'perspective(900px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}
            >
              <Card item={p} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <Modal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
