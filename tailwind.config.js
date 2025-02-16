/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' }
        }
      },
      animation: {
        flip: 'flip 2s infinite ease-in-out',
        wiggle: 'wiggle 1s infinite ease-in-out'
      }
    }
  },
  plugins: [],
}