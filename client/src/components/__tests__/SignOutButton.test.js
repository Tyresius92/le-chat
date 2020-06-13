import React from 'react';
import { render } from '@testing-library/react';
import SignOutButton from '../SignOutButton';
import { ThemeProvider } from '@chakra-ui/core';

const renderThemed = children =>
  render(<ThemeProvider>{children}</ThemeProvider>);

describe('Sign Out Button', () => {
  it('exists', () => {
    const { getByText } = renderThemed(<SignOutButton />);

    expect(getByText('Sign Out')).toBeInTheDocument();
  });

  it('renders a button', () => {
    const { getByRole } = renderThemed(<SignOutButton />);

    expect(getByRole('button')).toBeInTheDocument();
  });
});
