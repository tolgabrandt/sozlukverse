/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
        addBase({
            '.scrollbar': {
                overflowY: 'auto',
                scrollbarColor: `${theme('colors.gray.300')} ${theme('colors.gray.100')}`,
                scrollbarWidth: 'thin',
            },
            '.scrollbar::-webkit-scrollbar': {
                height: '3px',
                width: '3px',
            },
            '.scrollbar::-webkit-scrollbar-thumb': {
                backgroundColor: theme('colors.gray.300'),
            },
            '.scrollbar::-webkit-scrollbar-track-piece': {
                backgroundColor: theme('colors.gray.100'),
            },
        });
    }),
],
};
