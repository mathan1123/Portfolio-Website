import { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react';
const BASE = import.meta.env.BASE_URL;

const certifications = [
  {
    id: '01',
    title: 'Full-Stack Development',
    issuer: 'VDart Academic Internship',
    date: 'Dec 2025 - Jan 2026',
    color: 'from-orange-500 to-red-600',
    verificationUrl: 'https://infosysspringboard.onwingspan.com/',
    imageUrl: `${BASE}cert-java.jpeg`
  },
  {
    id: '02',
    title: 'App Developer Web & Mobile',
    issuer: 'Skill Competency Council of India',
    date: '2025',
    color: 'from-cyan-500 to-blue-600',
    verificationUrl: 'https://www.coursera.org/meta',
    imageUrl: `${BASE}cert-web.jpeg`
  },
  {
    id: '03',
    title: 'Python Programming',
    issuer: 'CodeFobe',
    date: '2025',
    color: 'from-blue-500 to-green-500',
    verificationUrl: 'https://nptel.ac.in/',
    imageUrl: `${BASE}cert-python.jpeg`
  },
  {
    id: '04',
    title: 'Data Analytics',
    issuer: 'National Skill Development Corporation',
    date: '2026',
    color: 'from-purple-500 to-pink-500',
    imageUrl: `${BASE}cert-data-analytics.jpeg`
  }
];

export function Certifications() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <Section id="certifications" className="relative z-10">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-secondary" />
          <span className="section-number text-secondary">03.</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
        >
          Verified <span className="text-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #8b5cf6 100%)' }}>Credentials</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onClick={() => cert.imageUrl && setSelectedImg(cert.imageUrl)}
            className={`group relative h-full ${cert.imageUrl ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {/* Holographic glowing background on hover */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`} />
            
            <div className="relative h-full glass-card rounded-2xl p-6 flex flex-col overflow-hidden border border-white/10 group-hover:border-transparent transition-all">
              
              {/* Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              {/* Decorative icon watermark */}
              <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-500" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 backdrop-blur-sm border border-white/10 shadow-lg`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-surface-2 px-2 py-1 rounded-md border border-white/5">
                    {cert.date}
                  </span>
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono text-slate-500 opacity-50">
                  ID_{cert.id}
                </span>
                
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-secondary transition-colors"
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
              
              <div className="p-1 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 shadow-2xl">
                <img
                  src={selectedImg}
                  alt="Certification"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}