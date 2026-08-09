import React, { useRef, useState } from 'react';
import { Section } from './ui/Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Where TO Watch',
    description: 'Full-stack Movie finder application that displays movie information, rating, real-time movie details and OTT Streaming Availability.',
    tags: ['React', 'TypeScript', 'Python', 'Flask', 'MySQL', 'TMDB API'],
    links: {
      demo: 'https://where-to-watch-47xy.vercel.app/',
      code: 'https://github.com/mathan1123/Where-TO-Watch.git'
    },
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Student Performance Analytics',
    description: 'Streamlit app built using Python and Pandas to analyze student results. Calculates grades, pass/fail status, and shows class analytics & reports.',
    tags: ['Streamlit', 'Python', 'Pandas', 'Data Analysis'],
    links: {
      demo: 'https://student-performance-analytics-system-m.streamlit.app/',
      code: 'https://github.com/mathan1123/Student-Performance-Analytics-System.git'
    },
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Smart Ration System',
    description: 'Feature including Card verification, Entitlement check, Stock Management, Receipt generation and admin Dashboard.',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'REST API'],
    links: {
      demo: 'https://smart-ration-system-one.vercel.app',
      code: 'https://github.com/mathan1123/Smart-Ration.git'
    },
    color: 'from-green-400 to-cyan-500'
  },
  {
    title: 'Parking Management',
    description: 'Vehicle Entry and Exit Management, parking slot allocation and billing system.',
    tags: ['React', 'Python', 'Django', 'MySQL', 'Excel'],
    links: {
      demo: 'https://parking-management-gca6.onrender.com/',
      code: 'https://github.com/mathan1123/Parking-Management.git'
    },
    color: 'from-orange-500 to-red-500'
  }
];

const TiltCard = ({ project, idx }: { project: any, idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative z-10 w-full h-full cursor-pointer perspective-1000"
    >
      <div 
        className="glass-card h-full rounded-2xl overflow-hidden group transition-all duration-300"
        style={{ 
          transform: "translateZ(30px)",
          boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)" : ""
        }}
      >
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-[10px] opacity-30 animate-pulse" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Top visual section */}
          <div className="h-48 relative overflow-hidden bg-surface-2 p-6 flex flex-col justify-between">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="p-3 bg-surface/80 backdrop-blur-md rounded-xl border border-white/5 text-primary">
                <Folder size={24} />
              </div>
              <div className="flex gap-2">
                {project.links.github && (
                  <a href={project.links.github} className="p-2 bg-surface/80 backdrop-blur-md rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} className="p-2 bg-surface/80 backdrop-blur-md rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white relative z-10 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Content section */}
          <div className="p-6 flex-1 flex flex-col justify-between bg-surface/50">
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono text-primary bg-primary/5 border border-primary/20 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  return (
    <Section id="projects" className="relative z-10">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="section-number">02.</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
        >
          Featured <span className="text-shimmer">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
        {projects.map((project, idx) => (
          <TiltCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a 
          href="https://github.com/mathan1123" 
          className="btn-ghost inline-flex items-center gap-2"
        >
          <Github size={18} />
          View More on GitHub
        </a>
      </motion.div>
    </Section>
  );
}