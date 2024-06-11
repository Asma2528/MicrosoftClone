/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '860px',
      lg: '935px',
      xl: '1084px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        xxs: ['0.65rem', { lineHeight: '1rem' }],
      },
      borderWidth: {
        0.5:'0.5px',
      }
    },
  },
  plugins: [],
}

