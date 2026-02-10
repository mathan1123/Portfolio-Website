import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, Linkedin, Mail, Download } from 'lucide-react';
export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Software Developer = "Mathan";';
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] bg-grid pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="space-y-6">

            {/* Terminal Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-sm text-gray-400 font-mono mb-4">
              <Terminal size={14} className="text-primary" />
              <span>~/Mathan/portfolio</span>
            </div>

            {/* Main Title with Typing Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                {text}
              </span>
              <motion.span
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8
                }}
                className="inline-block w-3 h-8 md:h-12 bg-primary ml-1 align-middle" />

            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Hello! My Name is Mathan.I am a passionate Computer Science Student and aspiring Full-Stack Developer.I specialize in Frontend and Backend Development using modern technologies.Apart from coding,I like Learning new Tools,Improving System performance and Working on Challenging Projects.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['HTML & CSS', 'JavaScript', 'React', 'Python', 'MySql'].map((tech, i) =>
                <motion.span
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.5 + i * 0.1
                  }}
                  className="px-4 py-2 rounded-md bg-surface border border-white/5 text-sm text-gray-300 font-mono hover:border-primary/50 transition-colors cursor-default">

                  {tech}
                </motion.span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-4 rounded-lg bg-primary text-background font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">

                View Projects <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-4 rounded-lg bg-surface border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">

                Contact Me
              </motion.a>
              <motion.a
                href="/MATHAN-RESUME.jpeg"
                download="MATHAN-RESUME.jpeg"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-4 rounded-lg bg-surface border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                Resume <Download size={20} />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-12 text-gray-500">
              <a href="https://github.com/mathan1123" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mathan-s-649628383/" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mathan112325@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

            <div className="relative">
              {/* Animated Border/Frame */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-[-10px] rounded-2xl border border-white/5 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"
              />

              {/* Photo Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface group max-w-sm mx-auto"
              >
                <img
                  src="/MathanS.jpeg"
                  alt="Mathan"
                  className="w-full h-[400px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Overlay with scanlines effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                      <span className="text-xs font-mono text-gray-400">STATUS: AVAILABLE_FOR_HIRE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}