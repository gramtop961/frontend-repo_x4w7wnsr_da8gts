import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, User, Github, Linkedin } from 'lucide-react';

const Item = ({ title, children }) => (
  <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-violet-100/80 text-sm leading-relaxed">{children}</p>
  </div>
);

const AboutContact = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative bg-[#0f0f17] text-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
            <p className="mt-3 text-violet-100/90 max-w-2xl">
              I’m a creative developer focused on crafting performant, accessible interfaces with a strong emphasis on 3D, animation, and delightful micro-interactions.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Item title="Performance-first">
                Code-splitting, texture compression, and motion fallbacks ensure a smooth experience across devices.
              </Item>
              <Item title="Accessible by design">
                Keyboard navigation, focus styles, and reduced-motion support built-in from the start.
              </Item>
              <Item title="3D & Motion">
                React Three Fiber, GSAP/Framer, shader toys, and procedural techniques for unique visuals.
              </Item>
              <Item title="Tooling">
                TypeScript, Vite, Storybook, Playwright, and CI for robust delivery.
              </Item>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h2 id="contact" className="text-3xl sm:text-4xl font-bold">Contact</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
              <label className="block">
                <span className="text-sm text-violet-100/80">Name</span>
                <div className="mt-1 flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 focus-within:ring-violet-400">
                  <User className="ml-2 h-4 w-4 text-violet-200" aria-hidden="true" />
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-transparent py-2 pr-3 text-white placeholder:text-violet-200/60 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm text-violet-100/80">Email</span>
                <div className="mt-1 flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 focus-within:ring-violet-400">
                  <Mail className="ml-2 h-4 w-4 text-violet-200" aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent py-2 pr-3 text-white placeholder:text-violet-200/60 focus:outline-none"
                    placeholder="you@domain.com"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm text-violet-100/80">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 w-full rounded-md bg-white/5 p-3 text-white ring-1 ring-white/10 placeholder:text-violet-200/60 focus:outline-none focus:ring-violet-400"
                  placeholder="Tell me about your project..."
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-violet-600 py-2.5 text-sm font-medium text-white hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Send message
              </button>
              <div className="flex items-center justify-center gap-4 pt-2 text-violet-200">
                <a href="https://github.com" className="inline-flex items-center gap-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"><Github className="h-4 w-4" /> GitHub</a>
                <a href="https://linkedin.com" className="inline-flex items-center gap-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-48 w-[80%] max-w-4xl rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl" />
        </motion.div>
      )}
    </section>
  );
};

export default AboutContact;
