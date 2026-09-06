import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Brain, Code2, Cpu } from 'lucide-react';

// ===== FLOATING PARTICLE =====
interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

function FloatingParticles() {
  const colors = ['#06b6d4', '#8b5cf6', '#f43f5e', '#22d3ee', '#a78bfa'];
  const particles: FloatingParticle[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ===== AI ROLE TYPEWRITER =====
const ROLES = [
  'Full-Stack Developer',
  'React Specialist',
  'Python Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

function RoleTypewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIdx];

    if (waiting) {
      const t = setTimeout(() => setWaiting(false), 1200);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length < currentRole.length) {
      const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === currentRole.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWaiting(true);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }
  }, [displayed, deleting, waiting, roleIdx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent font-bold">
      {displayed}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle rounded-sm"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      />
    </span>
  );
}

// ===== HERO STAT =====
interface StatProps { label: string; value: string; icon: React.ReactNode }
function Stat({ label, value, icon }: StatProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-primary mb-1">{icon}</div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-xs text-slate-500 text-center">{label}</div>
    </div>
  );
}

// ===== MAIN HERO =====
export function Hero() {
  const [downloadingResume, setDownloadingResume] = useState(false);

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = `${import.meta.env.BASE_URL}Resume.pdf`;
      link.download = 'MATHAN(Resume).pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingResume(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 bg-grid pointer-events-none" />

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT COLUMN ===== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* AI Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ai-badge text-sm font-mono text-primary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={14} />
                </motion.div>
                <span>AI-Powered Portfolio</span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase mb-2">
                Hello, World 👋 — I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tight leading-none">
                <span className="text-white">MATHAN</span>
                <br />
                <span className="text-shimmer text-4xl md:text-5xl block mt-1">
                  S.
                </span>
              </h1>
            </motion.div>

            {/* Role typewriter */}
            <motion.div variants={itemVariants} className="text-xl md:text-2xl font-mono h-10 flex items-center">
              <span className="text-slate-400 mr-2">{'>'}</span>
              <RoleTypewriter />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
            >
              CS graduate & aspiring Full-Stack Developer. I build modern web apps, optimize performance,
              and solve real-world problems through clean code and{' '}
              <span className="text-primary font-semibold">creative engineering</span>.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {['React', 'Python', 'TypeScript', 'Django', 'MySQL', 'Java'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 rounded-md text-xs font-mono font-medium text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
              >
                View Projects <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost flex items-center gap-2 text-sm font-semibold"
              >
                Contact Me
              </motion.a>

              <motion.button
                onClick={handleResumeDownload}
                disabled={downloadingResume}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost flex items-center gap-2 text-sm font-semibold disabled:opacity-40"
              >
                {downloadingResume ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                    />
                    Downloading...
                  </>
                ) : (
                  <>Resume <Download size={14} /></>
                )}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { href: 'https://github.com/mathan1123', icon: <Github size={20} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/mathan-s-649628383/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { href: 'mailto:mathan112325@gmail.com', icon: <Mail size={20} />, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN: PROFILE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex flex-col items-center gap-8"
          >
            {/* Glow behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/15 blur-[80px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary/10 blur-[60px] animate-float" />

            {/* Orbiting icons */}
            {[
              { icon: <Brain size={16} />, delay: 0, color: '#06b6d4' },
              { icon: <Code2 size={16} />, delay: 2.5, color: '#8b5cf6' },
              { icon: <Cpu size={16} />, delay: 5, color: '#f43f5e' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ transformOrigin: 'center center', color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}40` }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: item.delay }}
              >
                <motion.div
                  style={{ originX: '50%', originY: '50%' }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: item.delay }}
                  className="translate-x-32"
                >
                  {item.icon}
                </motion.div>
              </motion.div>
            ))}

            {/* Photo frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Animated gradient border */}
              <div className="relative p-[2px] rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #f43f5e, #8b5cf6, #06b6d4)', backgroundSize: '200% 200%', animation: 'bg-pan 4s ease infinite' }}>
                <div className="rounded-[14px] overflow-hidden relative bg-surface group max-w-[300px]">
                  <img
                    src={`${import.meta.env.BASE_URL}MathanS.jpeg`}
                    alt="Mathan"
                    className="w-full h-[360px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.01] group-hover:scale-100"
                  />

                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Status badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                      </div>
                      <span className="text-xs font-mono text-slate-300">
                        <span className="text-green-400">AVAILABLE</span>
                        {' '}— Open to Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-card rounded-2xl p-5 w-full grid grid-cols-3 gap-4"
            >
              <Stat label="Projects Built" value="5+" icon={<Code2 size={18} />} />
              <Stat label="Certifications" value="4" icon={<Sparkles size={18} />} />
              <Stat label="Tech Stack" value="10+" icon={<Cpu size={18} />} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </div>
  );
}