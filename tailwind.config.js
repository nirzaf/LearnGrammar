/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0B1426',
        'cosmic-purple': '#6B46C1',
        'star-yellow': '#FCD34D',
        'nebula-pink': '#EC4899',
        'galaxy-green': '#10B981',
        'asteroid-gray': '#6B7280',
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
        'cosmic': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}