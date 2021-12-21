const color = require('tailwindcss/colors');

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {},
      colors: {
        primary: color.green[400],
        success: color.green[400],
        dark: color.black,
        light: color.white,
        gradient: {
          from: 'rgba(196, 196, 196, 0.24)',
          to: 'rgba(196, 196, 196, 0)',
        },
      },
      fontSize: {
        //font - line-height
        caption: [12, '20px'],
        xs: [12, 0],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
