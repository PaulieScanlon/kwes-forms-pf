/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            label: {
              fontSize: theme('fontSize.sm'),
            },
            input: {
              border: `1px solid ${theme('colors.zinc.300')}`,
              borderRadius: theme('borderRadius.DEFAULT'),
            },
            button: {
              padding: `${(theme('spacing.2'), theme('spacing.2'))}`,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
