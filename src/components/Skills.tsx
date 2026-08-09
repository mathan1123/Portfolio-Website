import React, { useEffect, useState } from 'react';
import { Section } from './ui/Section';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Layout,
  Server,
  Settings,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Computer
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend & UI',
    icon: <Layout className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'React.js', level: 90, icon: <Globe size={18} /> },
      { name: 'JavaScript (ES6+)', level: 85, icon: <Layers size={18} /> },
      { name: 'HTML5 / CSS3', level: 95, icon: <Code2 size={18} /> },
      { name: 'Tailwind CSS', level: 88, icon: <Layout size={18} /> },
    ],
  },
  {
    category: 'Backend & DB',
    icon: <Server className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Python', level: 85, icon: <Server size={18} /> },
      { name: 'Django / Flask', level: 80, icon: <Code2 size={18} /> },
      { name: 'Java (Spring Boot)', level: 75, icon: <Server size={18} /> },
      { name: 'MySQL', level: 85, icon: <Database size={18} /> },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: <Settings className="w-6 h-6" />,
    color: 'from-green-400 to-cyan-500',
    items: [
      { name: 'Git & GitHub', level: 90, icon: <GitBranch size={18} /> },
      { name: 'VS Code & Terminal', level: 95, icon: <Terminal size={18} /> },
      { name: 'Linux / Unix', level: 75, icon: <Cpu size={18} /> },
      { name: 'Canva Design', level: 80, icon: <Computer size={18} /> },
    ],
  },
];

const SkillBar = ({ name, level, icon, delay, color }: { name: string, level: number, icon: React.ReactNode, delay: number, color: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      let start = 0;
      const end = level;
      const duration = 1500;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCurrentLevel(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [controls, inView, level]);

  return (
    <div className="mb-6 last:mb-0" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="text-slate-400">{icon}</div>
          <span className="font-mono text-sm">{name}</span>
        </div>
        <span className="font-mono text-sm text-primary">{currentLevel}%</span>
      </div>
      <div className="h-2 w-full bg-surface-2 rounded-full overflow-hidden border border-white/5 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          {/* Animated glow on the edge */}
          <motion.div 
            className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <Section id="skills" className="relative z-10">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="section-number">01.</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
        >
          Technical <span className="text-shimmer">Arsenal</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skills.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden group"
          >
            {/* Background Gradient Blob */}
            <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-neon-cyan`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {category.category}
              </h3>
            </div>

            <div className="relative z-10">
              {category.items.map((item, itemIdx) => (
                <SkillBar 
                  key={item.name} 
                  name={item.name} 
                  level={item.level} 
                  icon={item.icon}
                  delay={0.2 + (itemIdx * 0.1)}
                  color={category.color}
                />
              ))}
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
      
      {/* Additional Stats/Info */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Lines of Code', value: '50k+', color: 'text-cyan-400' },
          { label: 'Coffees Drank', value: '∞', color: 'text-purple-400' },
          { label: 'Bugs Fixed', value: '404', color: 'text-pink-400' },
          { label: 'Fast Delivery', value: '100%', color: 'text-green-400' }
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-xl p-6 text-center group hover:border-glow-cyan hover:-translate-y-1 transition-all">
            <div className={`text-3xl font-black font-mono ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
              {stat.value}
            </div>
            <div className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}