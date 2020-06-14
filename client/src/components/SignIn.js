import React from 'react';
import { Box, Flex, FormControl, Input } from '@chakra-ui/core';
import Card from './Card';
import Button from './Button';

const boxProps = { width: '25em', m: 1 };
const SignIn = () => (
  <Box m={4} p={2}>
    <Card pt={6}>
      <Flex align="center" justify="center" flexDirection="column">
        <Box {...boxProps}>
          <FormControl isRequired>
            <Input
              type="text"
              id="identity"
              placeholder="Username/email address"
            />
          </FormControl>
        </Box>
        <Box {...boxProps}>
          <FormControl isRequired>
            <Input type="password" id="password" placeholder="Password" />
          </FormControl>
        </Box>
        <Box {...boxProps}>
          <Button mr="0" ml="auto" display="block">
            Sign In
          </Button>
        </Box>
      </Flex>
    </Card>
  </Box>
);

export default SignIn;
