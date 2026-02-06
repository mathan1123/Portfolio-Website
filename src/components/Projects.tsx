import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
const projects = [
{
  title: 'Smart Ration Shop Management System',
  description:
  'Feature including Card verification,Entitlement check ,Stock Management,  Reciept generation and admin Dashboard.',
  tags: ['React', 'Typescript', 'java', 'Spring Boot', 'MySql'],
  links: {
    demo: '#',
    code: 'https://github.com/mathan1123/Smart-Ration.git'
  },
  color: 'bg-blue-500'
},
{
  title: 'Parking Management System',
  description:
  'Vehicle Entry and Exit Management,parking slot allocation and billing.',
  tags: ['React', 'Python', 'Django', 'MySql', 'Excel'],
  links: {
    demo: '#',
    code: 'https://github.com/mathan1123/Parking-Management.git'
  },
  color: 'bg-blue-500'
},

{
  title: 'Portfolio Website',
  description:
  'Designed and developed a responsive portfolio website using React to showcase projects and skills.',
  tags: ['React', 'Tailwind CSS'],
  links: {
    demo: 'https://portfolio-website-ten-mauve-36.vercel.app/',
    code: 'https://github.com/mathan1123/Portfolio-Website.git'
  },
  color: 'bg-pink-500'
}];

export function Projects() {
  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-primary font-mono">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) =>
        <motion.div
          key={project.title}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: idx * 0.1
          }}
          viewport={{
            once: true
          }}
          className="group relative bg-surface rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors">

            {/* Project Image Placeholder */}
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className={`absolute inset-0 opacity-20 ${project.color}`} />
              <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:scale-110 transition-transform duration-500">
                <Folder size={64} />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a
                href={project.links.code}
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-background transition-colors">

                  <Github size={20} />
                </a>
                <a
                href={project.links.demo}
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-background transition-colors">

                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) =>
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-primary border border-primary/20">

                    {tag}
                  </span>
              )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Section>);

}