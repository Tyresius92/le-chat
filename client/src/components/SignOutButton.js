import React from 'react';
import { Button } from '@chakra-ui/core';

const signOut = () => 'im signed out';

const SignOutButton = () => <Button onClick={signOut}>Sign Out</Button>;

export default SignOutButton;
