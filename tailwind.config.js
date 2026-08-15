/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F17',
        panel: '#131926',
        panelAlt: '#0F1420',
        signal: {
          DEFAULT: '#F2A93B',
          soft: '#F7C87A',
        },
        wire: {
          DEFAULT: '#46C7B8',
          soft: '#8FE3D8',
        },
        ink2: '#8A93A6',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        pulseNode: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        pulseNode: 'pulseNode 2.4s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};
