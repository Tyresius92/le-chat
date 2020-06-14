import React from 'react';
import Button from './Button';

const signOut = () => 'im signed out';

const SignOutButton = () => (
  <Button onClick={signOut} variantColor="turquoise">
    Sign Out
  </Button>
);

export default SignOutButton;
