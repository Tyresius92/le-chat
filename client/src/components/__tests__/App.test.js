import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { useQuery } from '@apollo/react-hooks';
import Logger from '../../logger';
import { ThemeProvider } from '@chakra-ui/core';

jest.mock('../../logger');
jest.mock('@apollo/react-hooks', () => ({ useQuery: jest.fn(() => ({})) }));

const renderThemed = children =>
  render(<ThemeProvider>{children}</ThemeProvider>);

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = renderThemed(<App />);
    const componentText = getByText('Hello World!');
    expect(componentText).toBeInTheDocument();
  });

  it('logs an error once if there is a query error', () => {
    useQuery.mockReturnValue({ error: 'testsplosion' });
    expect(Logger.error).toHaveBeenCalledTimes(0);
    const { rerender } = renderThemed(<App />);
    expect(Logger.error).toHaveBeenCalledTimes(1);
    rerender();
    expect(Logger.error).toHaveBeenCalledTimes(1);
  });
});
