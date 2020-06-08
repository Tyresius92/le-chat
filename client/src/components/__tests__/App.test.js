import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { useQuery } from '@apollo/react-hooks';
import Logger from '../../logger';

jest.mock('../../logger');
jest.mock('@apollo/react-hooks', () => ({ useQuery: jest.fn(() => ({})) }));

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = render(<App />);
    const componentText = getByText('Hello World!');
    expect(componentText).toBeInTheDocument();
  });

  it('logs an error once if there is a query error', () => {
    useQuery.mockReturnValue({ error: 'testsplosion' });
    expect(Logger.error).toHaveBeenCalledTimes(0);
    const { rerender } = render(<App />);
    expect(Logger.error).toHaveBeenCalledTimes(1);
    rerender();
    expect(Logger.error).toHaveBeenCalledTimes(1);
  });
});
