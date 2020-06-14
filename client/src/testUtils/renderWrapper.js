import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';
import theme from '../theme';

export const renderThemed = children =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
