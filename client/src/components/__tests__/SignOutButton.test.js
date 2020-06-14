import React from 'react';
import { renderThemed } from '../../testUtils/renderWrapper';
import SignOutButton from '../SignOutButton';

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
