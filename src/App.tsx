import { useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Zap } from 'lucide-react';

// ===== NEURAL NETWORK CANVAS =====
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 70;
    const CONNECTION_DISTANCE = 150;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(6,182,212,${opacity})`);
            gradient.addColorStop(1, `rgba(139,92,246,${opacity})`);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.alpha})`;
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="neural-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ===== NAV LINKS =====
const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-background min-h-screen text-white relative overflow-x-hidden">
      {/* Neural Network Background */}
      <NeuralCanvas />

      {/* Global Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent/4 blur-[100px] animate-float" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f43f5e)',
        }}
      />

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto px-4 md:px-8 h-16 max-w-7xl flex items-center justify-between">
          {/* Glassmorphism nav bg */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-white/5" />

          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon-cyan">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight gradient-text">
              MATHAN.DEV
            </span>
          </motion.a>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 hidden md:flex items-center gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 py-10 text-center border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary font-mono text-sm">{'</>'}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-slate-500 text-sm font-mono">
            © {new Date().getFullYear()} <span className="text-primary">Mathan</span> — Built with{' '}
            <span className="gradient-text font-semibold">React + AI Vision</span>
          </p>
          <p className="text-slate-700 text-xs mt-2 font-mono">Designed to impress. Built to perform.</p>
        </div>
      </footer>
    </div>
  );
}