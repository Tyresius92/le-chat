import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Box, Flex, FormControl, Input } from '@chakra-ui/core';
import Card from './Card';
import Button from './Button';
import { gql } from 'apollo-boost';

const signUpMutation = gql`
  mutation signUp($input: NewUserInput!) {
    signUp(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

const boxProps = { width: '25em', m: 1 };

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [signUp, response] = useMutation(signUpMutation);

  // TODO: This is not a great sign up validator,
  // but will get us out the door for now
  const isButtonDisabled =
    !username || !email || password.length < 8 || password !== passwordConfirm;

  const onButtonClick = () => {
    signUp({
      variables: {
        input: {
          email,
          username,
          password,
        },
      },
    });
  };

  return (
    <Box m={4} p={2}>
      <Card pt={6}>
        <Flex align="center" justify="center" flexDirection="column">
          <Box {...boxProps}>
            <FormControl isRequired>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box {...boxProps}>
            <FormControl isRequired>
              <Input
                type="text"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box {...boxProps}>
            <FormControl isRequired>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box {...boxProps}>
            <FormControl isRequired>
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box {...boxProps}>
            <Button
              mr="0"
              ml="auto"
              display="block"
              disabled={isButtonDisabled}
              onClick={onButtonClick}
            >
              Sign Up
            </Button>
          </Box>
        </Flex>

        {/* TODO: Do something better with the response than this */}
        {response && JSON.stringify(response.data)}
      </Card>
    </Box>
  );
};

export default SignUp;
