/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
        'accent-light': 'rgb(var(--accent-light) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--bg-tertiary) / <alpha-value>)',
        'card-bg': 'rgb(var(--card-bg) / <alpha-value>)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-quaternary': 'var(--text-quaternary)',
      },
      keyframes: {
        /* ── Gradient text sweep ── */
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        /* ── Aurora blobs ── */
        aurora1: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%':      { transform: 'translate(3%, -2%) scale(1.05)' },
          '66%':      { transform: 'translate(-2%, 3%) scale(0.97)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%':      { transform: 'translate(-4%, 2%) scale(1.08)' },
          '66%':      { transform: 'translate(3%, -3%) scale(0.95)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%':      { transform: 'translate(2%, 4%) scale(1.04)' },
        },
        /* ── Preloader bar ── */
        preloaderBar: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        /* ── Float ── */
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        /* ── Marquee ── */
        marqueeLeft: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
        /* ── Pulse ── */
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        /* ── Spin ── */
        spin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'gradient':      'gradientShift 6s ease infinite',
        'aurora-1':      'aurora1 12s ease-in-out infinite',
        'aurora-2':      'aurora2 15s ease-in-out infinite',
        'aurora-3':      'aurora3 10s ease-in-out infinite',
        'preloader-bar': 'preloaderBar 1.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'float':         'float 3s ease-in-out infinite',
        'marquee-left':  'marqueeLeft 50s linear infinite',
        'marquee-right': 'marqueeRight 60s linear infinite',
        'pulse':         'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin':          'spin 1s linear infinite',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
};