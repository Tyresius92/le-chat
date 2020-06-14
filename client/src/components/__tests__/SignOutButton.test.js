import React from 'react';
import SignOutButton from '../SignOutButton';
import { renderThemed } from '../../testUtils/renderWrapper';

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
