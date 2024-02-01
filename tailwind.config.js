/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'updown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100px)' },
        },
        'xside': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100px)' },
        },
      },

      animation: {
        'xside-slow': 'xside 8s ease-in-out infinite',
        'updown-slow': 'updown 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'spin-slow': 'spin 6s linear infinite',
      },
      
    },
  },
  plugins: [],
}
