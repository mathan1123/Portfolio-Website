import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  Settings,
  Smartphone,
  Cpu,
  Globe,
  Layers,
  Terminal,
  GitBranch, 
  Computer} from
'lucide-react';
const skills = [
{
  category: 'Frontend',
  icon: <Layout className="w-6 h-6" />,
  items: [
  {
    name: 'HTML5',
    icon: <Code2 />
  },
  {
    name: 'CSS3',
    icon: <Terminal />
  },
  {
    name: 'Javascript',
    icon: <Layers />
  },
  {
    name: 'React',
    icon: <Globe />
  }]

},
{
  category: 'Backend',
  icon: <Server className="w-6 h-6" />,
  items: [
  {
    name: 'Python',
    icon: <Server />
  },
  {
    name: 'Java',
    icon: <Server />
  },
  {
    name: 'Django',
    icon: <Code2 />
  },
  {
    name: 'Springboot',
    icon: <Code2 />
  }]

},
{
  category: 'Tools & DevOps',
  icon: <Settings className="w-6 h-6" />,
  items: [
  {
    name: 'VS Code',
    icon: <Terminal />
  },
  {
    name: 'Terminal',
    icon: <Cpu />
  },
  {
    name: 'Git & Github',
    icon: <GitBranch />
  },
  {
    name: 'Canva',
    icon: <Computer />
  }]

}];

export function Skills() {
  return (
    <Section id="skills" className="bg-background">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-primary font-mono">01.</span> Skills & Tech
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((category, idx) =>
        <motion.div
          key={category.category}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: idx * 0.1
          }}
          viewport={{
            once: true
          }}
          className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors group">

            <div className="flex items-center gap-3 mb-6 text-primary">
              {category.icon}
              <h3 className="text-xl font-bold text-white">
                {category.category}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {category.items.map((item) =>
            <motion.div
              key={item.name}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-background border border-white/5 text-center gap-2 transition-colors cursor-default">

                  <div className="text-gray-400 group-hover:text-primary transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {item.name}
                  </span>
                </motion.div>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </Section>);

}