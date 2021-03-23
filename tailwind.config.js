/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { max: '767px' },
      },
      fontFamily: {
        sans: [ 'Montserrat', ...defaultTheme.fontFamily.sans ],
        title: 'Khula',
      },
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#C79EF9',
          400: '#c084fc',
          500: '#6E56A4',
          600: '#a855f7',
          700: '#7648AF',
          800: '#533A72',
          900: '#330066',
        },
        black: {
          DEFAULT: '#000',
          200: '#2C2F33',
        },
        white: 'var(--color-gray-50)',
        theme: {
          bg: 'var(--color-theme-bg)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
