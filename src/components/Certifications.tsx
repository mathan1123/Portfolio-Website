import { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
const certifications = [
  {
    title: 'Full-Stack Development',
    issuer: 'VDart Academic Internship.',
    date: 'Dec 2025-Jan 2026',
    color: 'from-orange-500 to-red-600',
    verificationUrl: 'https://infosysspringboard.onwingspan.com/',
    imageUrl: '/cert-java.jpeg'
  },
  {
    title: 'Application Developer Web & Mobile',
    issuer: 'By Skill Competency Council of India under PMKVY.',
    date: '2025',
    color: 'from-cyan-500 to-blue-600',
    verificationUrl: 'https://www.coursera.org/meta',
    imageUrl: '/cert-web.jpeg'
  },
  {
    title: 'Python Programming',
    issuer: 'Complete the Foundational Python Programming Course in CodeFobe.',
    date: '2025',
    color: 'from-blue-500 to-green-500',
    verificationUrl: 'https://nptel.ac.in/',
    imageUrl: '/cert-python.jpeg'
  }
];

export function Certifications() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <Section id="certifications">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-secondary font-mono">02.</span> Certifications
        </h2>
        <div className="h-1 w-20 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) =>
          <motion.div
            key={cert.id}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: idx * 0.1
            }}
            viewport={{
              once: true
            }}
            whileHover={{
              y: -5
            }}
            onClick={() => setSelectedImg(cert.imageUrl)}
            className="relative group cursor-pointer">

            <div
              className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="relative bg-surface border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between overflow-hidden">
              {/* Decorative background icon */}
              <Award className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-10`}>

                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-gray-500">
                  ID: {cert.id}
                </span>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImg}
                alt="Certification"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>);

}