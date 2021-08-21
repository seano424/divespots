module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class', or false
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        1100: '1100ms',
        1200: '1200ms',
        1300: '1300ms',
        1500: '1500ms',
        2000: '2000ms',
      },
      colors: {
        fuschia: '#f984ef',
        'primary-black': '#242C3B',
        secondary: '#65EBF9',
        primary: '#3E83F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
