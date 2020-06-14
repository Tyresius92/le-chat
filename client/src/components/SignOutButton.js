import React from 'react';
import { Button, useTheme } from '@chakra-ui/core';

const signOut = () => 'im signed out';

const SignOutButton = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <Button onClick={signOut} variantColor="turquoise">
      Sign Out
    </Button>
  );
};

export default SignOutButton;
