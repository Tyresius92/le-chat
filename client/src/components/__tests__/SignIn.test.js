import React from 'react';
import SignIn from '../SignIn';
import { renderThemed } from '../../testUtils/renderWrapper';

describe('Sign In', () => {
  it('shows the expected inputs and button', () => {
    const { getByText, getByPlaceholderText } = renderThemed(<SignIn />);
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByPlaceholderText('Username/email address')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
