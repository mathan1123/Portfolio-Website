import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';
export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-primary">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
        style={{
          scaleX
        }} />


      {/* Navigation - Simple floating nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-mono font-bold text-xl tracking-tighter">
            &lt; PORFOLIO /&gt;
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#certifications"
              className="hover:text-primary transition-colors">

              Certifications
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors">

              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>
          © {new Date().getFullYear()} Mathan. Built with React.
        </p>
      </footer>
    </div>);

}