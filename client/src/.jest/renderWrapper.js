import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { render } from '@testing-library/react';

export const renderThemed = children =>
    render(<ThemeProvider>{children}</ThemeProvider>);