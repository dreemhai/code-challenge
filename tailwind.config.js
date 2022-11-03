/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'first-list-animate': 'pluse 3s linear infinite',
      },
      keyframes: {
        pluse: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': {transform: 'scale(1)' },
        }
      }
    }
  },
  plugins: [],
}