import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Send, Terminal, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-secondary font-mono">04.</span> Get In Touch
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-gray-200">mathan112325@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="text-gray-200">+91 9514338512</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-gray-200">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/mathan1123", label: "Github" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mathan-s-649628383", label: "LinkedIn" },
                  { icon: <Mail size={20} />, href: "mailto:mathan112325@gmail.com", label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-surface border border-white/5 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/30 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-xs font-mono text-gray-500">
                contact-form.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-primary">
                    Name =
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value
                      })
                    }
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-700"
                    placeholder='"Mathan"' />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-primary">
                    Email =
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value
                      })
                    }
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-700"
                    placeholder='EMAIL_ADDRESS' />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-primary">
                  Message =
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value
                    })
                  }
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-700 resize-none"
                  placeholder='"Hello, I would like to discuss..."' />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-primary text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Terminal size={18} />
                    <span>Execute Send</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );

}