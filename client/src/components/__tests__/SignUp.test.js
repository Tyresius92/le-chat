import React from 'react';
import { renderThemed } from '../../testUtils/renderWrapper';
import SignUp from '../SignUp';

jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => []),
}));

describe('Sign Up Component', () => {
  it('renders two text inputs input', () => {
    const { getAllByRole, getByPlaceholderText } = renderThemed(<SignUp />);

    expect(getAllByRole('textbox')).toHaveLength(2);

    // textbox doesn't grab the password boxes for some reason
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirm Password')).toBeInTheDocument();
  });

  it('renders the sign up button', () => {
    const { getByRole } = renderThemed(<SignUp />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Sign Up');
  });
});
