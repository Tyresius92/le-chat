import { theme } from '@chakra-ui/core';

const turqouiseBase = '#45d4be';
const grayBase = '#404040';
const greenBase = '#4F772D';
const purpleBase = '#8789C0';
const redBase = '#902322';

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

const gray = {
  base: grayBase,
  25: '#fff5f7',
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

const green = {
  base: greenBase,
  50: '#effae4',
  100: '#d5ebc4',
  200: '#bcdca1',
  300: '#a2ce7d',
  400: '#89c059',
  500: '#70a740',
  600: greenBase,
  700: '#3c5d22',
  800: '#233812',
  900: '#071400',
};

const purple = {
  base: purpleBase,
  50: '#ecefff',
  100: '#cccee9',
  200: '#abadd4',
  300: purpleBase,
  400: '#696baf',
  500: '#4f5295',
  600: '#3d3f75',
  700: '#2c2d55',
  800: '#191b35',
  900: '#080818',
};

// Use this red when doing delete account/danger things
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

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: turqouiseBase,
    secondary: greenBase,
    turquoise,
    green,
    purple,
    red,
    gray,
  },
};

export default customTheme;
