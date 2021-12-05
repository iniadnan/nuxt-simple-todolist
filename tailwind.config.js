module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '-5': '-5',
        '-4': '-4',
        '-3': '-3',
        '-2': '-2',
        '-1': '-1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      colors: {
        'color-dark-0d2538': '#0d2538',
        'color-dark-0d2538-75': 'rgba(13, 37, 56, 0.75)',
        'color-dark-1f1d36': '#1f1d36',
        'color-dark-1c0c5b': '#1c0c5b',
        'color-dark-3f3351': '#3f3351',
        'color-blue-1f4068': '#1f4068',
        'color-black-1b262c': '#1b262c',
        'color-purple-af9cef': '#af9cef',
        'color-orange-ff4c29': '#ff4c29',
        'color-yellow-fec260': '#fec260',
        'color-purple-70': 'rgba(109, 40, 217, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      inset: ['hover', 'focus', 'dark', 'group-hover'],
      transitionProperty: ['hover', 'focus', 'group-hover', 'dark'],
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
