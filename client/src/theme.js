import { theme } from '@chakra-ui/core';

const grayBase = '#404040';
const redBase = '#902322';
const turqouiseBase = '#45d4be';

const turquoise = {
  base: turqouiseBase,
  50: '#ddfdf9',
  100: '#baf3e9',
  200: '#93e8db',
  300: '#6bddcd',
  400: turqouiseBase,
  500: '#2bbaa5',
  600: '#1d9180',
  700: '#0e695c',
  800: '#003f37',
  900: '#001812',
};

const red = {
  base: redBase,
  50: '#ffe8e6',
  100: '#f4c1c0',
  200: '#e89898',
  300: '#dd706f',
  400: '#d24846',
  500: '#b92e2d',
  600: redBase,
  700: '#681817',
  800: '#400d0d',
  900: '#1c0101',
};

const gray = {
  base: grayBase,
  50: '#fbf0f2',
  100: '#dcd8d9',
  200: '#bfbfbf',
  300: '#a6a6a6',
  400: '#8c8c8c',
  500: '#737373',
  600: '#595959',
  700: grayBase,
  800: '#282626',
  900: '#150a0d',
};

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: turqouiseBase,
    secondary: redBase,
    turquoise,
    red,
    gray,
  },
};

export default customTheme;
