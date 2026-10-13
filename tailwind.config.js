/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0C0C0C',
        textMuted: '#D7E2EA',
        dashboard: {
          bg: '#F4F6F9',
          card: '#FFFFFF',
          sidebar: '#FFFFFF',
          border: '#E2E8F0',
          darkBg: '#0B0F17',
          darkCard: '#131B26',
          darkSidebar: '#0E1520',
          darkBorder: '#1E293B',
          teal: '#008080',
          tealHover: '#006666',
          tealLight: '#E6F4F4',
          accent: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.04)',
        'glow-teal': '0 0 25px -5px rgba(13, 148, 136, 0.4)',
        'hologram': '0 0 35px rgba(99, 102, 241, 0.25), 0 0 15px rgba(45, 212, 191, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cloud-left': 'cloudMoveLeft 25s linear infinite',
        'cloud-right': 'cloudMoveRight 30s linear infinite',
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'scanline': 'scanline 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cloudMoveLeft: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25px)' },
          '100%': { transform: 'translateX(0)' },
        },
        cloudMoveRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
