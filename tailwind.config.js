const primary = {
  light: {
    100: '#3A3C43',
    200: '#1D2024',
  },
  dark: {
    100: '#FFFFFF',
    200: '#D8D8D8',
  },
};

const secondary = {
  light: {
    100: '#7AC231',
  },
  dark: {
    100: '#2A2B31',
  },
};

const tertiary = {
  light: {
    100: '#979797',
    200: '#F1F1F1',
  },
  dark: {
    100: '#1D2024',
    200: '#979797',
  },
};

const surface = {
  light: {
    100: '#FFFFFF',
  },
  dark: {
    100: '#18191D',
  },
};

// const green = {
//   100: '#7AC231',
//   200: '#65A028',
//   300: '#498110',
//   400: '#2E5B00',
// };

// const red = {
//   100: '#CD021B',
//   200: '#D0021B',
//   300: '#A70014',
//   400: '#81000F',
// };

// const orange = {
//   100: '#F2921B',
//   200: '#C36F07',
//   300: '#9A5500',
//   400: '#764100',
// };

// const blue = {
//   100: '#2878D7',
//   200: '#0C62C8',
//   300: '#074794',
//   400: '#053874',
// };

// const purple = {
//   100: '#939ABE',
//   200: '#494AA7',
//   300: '#303099',
//   400: '#1D1D79',
// };

// const grey = {
//   100: '#B4B2B2',
//   200: '#838383',
//   300: '#525252',
//   400: '#121212',
// };

const theme = {
  name: 'cryptocurrency-theme',
  colors: {
    primaryDefault: {
      light: primary.light[100],
      dark: primary.dark[100],
    },
    primarySubdued: {
      light: primary.light[200],
      dark: primary.dark[200],
    },
    secondaryDefault: {
      light: secondary.light[100],
      dark: secondary.dark[100],
    },
    tertiaryDefault: {
      light: tertiary.light[100],
      dark: tertiary.dark[100],
    },
    tertiaryHighlight: {
      light: tertiary.light[200],
      dark: tertiary.dark[200],
    },
    surfaceDefault: {
      light: surface.light[100],
      dark: surface.dark[100],
    },
  },
};

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: theme.colors.primaryDefault.light,
        'primary-dark': theme.colors.primaryDefault.dark,
        'primary-subdued': theme.colors.primarySubdued.light,
        'primary-subdued-dark': theme.colors.primarySubdued.dark,
        secondary: theme.colors.secondaryDefault.light,
        'secondary-dark': theme.colors.secondaryDefault.dark,
        tertiary: theme.colors.tertiaryDefault.light,
        'tertiary-dark': theme.colors.tertiaryDefault.dark,
        'tertiary-highlight': theme.colors.tertiaryHighlight.light,
        'tertiary-highlight-dark': theme.colors.tertiaryHighlight.dark,
        surface: theme.colors.surfaceDefault.light,
        'surface-dark': theme.colors.surfaceDefault.dark,
      },
      backgroundImage: {
        'background-1': "url('../../public/assets/images/background-1.png')",
        'background-2': "url('../../public/assets/images/background-2.png')",
        'background-3': "url('../../public/assets/images/background-3.png')",
        'background-4': "url('../../public/assets/images/background-4.png')",
      },
    },
    fontFamily: {
      inter: ['inter'],
    },
  },
  plugins: [],
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
};
