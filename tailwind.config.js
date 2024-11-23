/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        },
        secondary: {
          DEFAULT: '#EC4899',
          dark: '#DB2777',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 