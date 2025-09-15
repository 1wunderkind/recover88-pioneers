/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
        },
        red: {
          400: '#f87171',
        },
        yellow: {
          400: '#facc15',
        },
        gray: {
          400: '#9ca3af',
          800: '#1f2937',
          900: '#111827',
        }
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

