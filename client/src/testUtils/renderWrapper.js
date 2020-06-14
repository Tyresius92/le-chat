import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import theme from '../theme';
import { render } from '@testing-library/react';

export const renderThemed = children =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
