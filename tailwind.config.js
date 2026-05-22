/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'navy':       '#0f172a',
        'navy-light': '#152032',
        'sky-brand':  '#3b82f6',
        'violet':     '#a855f7',
        'emerald-brand': '#22c55e',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        float:       'float 6s ease-in-out infinite',
        'pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up':   'fadeInUp 0.7s ease forwards',
        'fade-right':'fadeInRight 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'grid-blue': `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
