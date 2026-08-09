import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Send, Terminal, Mail, Github, Linkedin, MapPin, Phone, Cpu, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: '', type: '' });

    try {
      // Send JSON instead of FormData for better CORS support with formsubmit.co
      const response = await fetch('https://formsubmit.co/ajax/mathan112325@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Contact from ${formState.name}`,
          _template: 'box'
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setSubmitMessage({ text: 'Transmission successful! Message received.', type: 'success' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback for network/CORS issues
      setSubmitMessage({ 
        text: 'Network error. Please email directly at mathan112325@gmail.com', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <Section id="contact" className="relative z-10 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="section-number text-accent">04.</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
          >
            Initialize <span className="text-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, #f43f5e 0%, #8b5cf6 50%, #f43f5e 100%)' }}>Connection</span>
          </motion.h2>
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
              <p className="text-slate-400 max-w-md leading-relaxed text-lg">
                I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to connect, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email Network", value: "mathan112325@gmail.com", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
                { icon: <Phone size={20} />, label: "Direct Comm", value: "+91 9514338512", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
                { icon: <MapPin size={20} />, label: "Coordinates", value: "Tamil Nadu, India", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group glass-card p-4 rounded-xl border-transparent hover:border-white/10 transition-all cursor-default">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Cpu size={16} /> Digital Footprint
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/mathan1123", label: "Github" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mathan-s-649628383", label: "LinkedIn" },
                  { icon: <Mail size={20} />, href: "mailto:mathan112325@gmail.com", label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all shadow-lg"
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
            className="relative group perspective-1000"
          >
            {/* Ambient glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
              {/* Terminal Header */}
              <div className="bg-surface-2/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck size={14} className="text-green-400" /> secure-connection.exe
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 relative">
                {/* Background Grid inside form */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-primary uppercase tracking-wider">
                      User_Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-surface-2/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-2 transition-all placeholder:text-slate-600 font-mono text-sm"
                      placeholder='const name = "Mathan";' 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-primary uppercase tracking-wider">
                      Return_Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-surface-2/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-2 transition-all placeholder:text-slate-600 font-mono text-sm"
                      placeholder='user@network.com' 
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-wider">
                    Payload_Data
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-surface-2/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-2 transition-all placeholder:text-slate-600 font-mono text-sm resize-none"
                    placeholder='> Enter your message here...' 
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full btn-neon font-mono uppercase tracking-widest text-sm py-4 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <Cpu size={18} />
                      </motion.div>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Terminal size={18} />
                      <span>Execute Send</span>
                      <Send size={18} />
                   </>
                  )}
                </motion.button>
                
                {submitMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center font-mono text-sm relative z-10 ${
                      submitMessage.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                        : 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                    }`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}