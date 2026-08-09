
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#0d1117",
        'surface-2': "#111827",
        primary: "#06b6d4",       // Electric Cyan
        secondary: "#8b5cf6",     // Neon Purple
        accent: "#f43f5e",        // Hot Pink / AI glow
        muted: "#1e293b",
        'text-muted': "#64748b",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(to right, rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px)",
        'gradient-ai': 'linear-gradient(135deg, #06b6d4, #8b5cf6, #f43f5e)',
        'gradient-neural': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #06b6d4 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(6,182,212,0.3), 0 0 20px rgba(6,182,212,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(6,182,212,0.2), 0 0 60px rgba(139,92,246,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        'border-spin': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(6,182,212,0.5)' },
          '50%': { textShadow: '0 0 20px rgba(6,182,212,0.9), 0 0 40px rgba(139,92,246,0.5)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px) blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0) blur(0)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '25%': { transform: 'translateY(-30px) translateX(10px)', opacity: '0.8' },
          '75%': { transform: 'translateY(15px) translateX(-10px)', opacity: '0.6' },
        },
        'neon-border': {
          '0%, 100%': { borderColor: 'rgba(6,182,212,0.4)' },
          '50%': { borderColor: 'rgba(139,92,246,0.8)' },
        },
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
        orbit: 'orbit 8s linear infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'neon-border': 'neon-border 2s ease-in-out infinite',
        'bg-pan': 'bg-pan 6s ease infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.3)',
        'neon-purple': '0 0 5px rgba(139,92,246,0.5), 0 0 20px rgba(139,92,246,0.3)',
        'neon-pink': '0 0 5px rgba(244,63,94,0.5), 0 0 20px rgba(244,63,94,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
