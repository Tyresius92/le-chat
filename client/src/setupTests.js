// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';

global.renderThemed = children =>
  render(<ThemeProvider>{children}</ThemeProvider>);
