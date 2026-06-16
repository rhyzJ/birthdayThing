import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Theme color — light blue
        sky: {
          card: '#ADD8E6',
        },
      },
      fontFamily: {
        // Rounded playful font loaded in index.html (Fredoka), with safe fallbacks
        display: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(173, 216, 230, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 30px 12px rgba(173, 216, 230, 0.55)',
            transform: 'scale(1.04)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
