import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}
export function Section({
  children,
  className = '',
  id,
  delay = 0
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          delay,
          ease: 'easeOut'
        }}>

        {children}
      </motion.div>
    </section>);

}