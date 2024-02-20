/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#d9dbdf',
          primary: '#f056c7',
          secondary: '#a4a0fb',
          tertiary: '#58e6d9',
          muted: '#605c9d',
          salmon: '#ff6090',
          mauve: '#4871e3',
          teal: '#00bcd4',
          lime: '#8bc34a',
          yellow: '#ffc107',
          fuchsia: '#7B1FA2',
          blood: '#fc5656',
          starfleet: '#0091f7',
          electric: '#b900f7',
          pink: '#ee3373',
          background: '#131127',
          outline: '#312e59',
          surface: '#16142c',
          guide: '#2d2a58',
        },
      },
      fontFamily: {
        sans: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.brand.text'),
            },
            h1: {
              color: theme('colors.brand.text'),
              fontWeight: 900,
            },
            'h2, h3, h4, h5, h6': {
              color: theme('colors.brand.primary'),
              fontWeight: 900,
            },
            label: {
              fontSize: theme('fontSize.sm'),
            },
            'input, select': {
              border: `1px solid ${theme('colors.brand.outline')}`,
              background: theme('colors.brand.background'),
              borderRadius: theme('borderRadius.DEFAULT'),
              padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
              minHeight: theme('minHeight.10'),
            },

            hr: {
              margin: `${theme('spacing.8')} 0px`,
              borderColor: theme('colors.brand.guide'),
            },
            button: {
              padding: `${theme('spacing.2')} ${theme('spacing.2')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
