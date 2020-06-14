import React from 'react';
import { Box, Heading, Flex, Text, Image } from '@chakra-ui/core';
import SmallLogo from '../assets/face_35.png';
import SignOutButton from './SignOutButton';

const Header = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="0.5rem"
    bg="turquoise.700"
    color="white"
  >
    <Flex align="center">
      <Box m={2}>
        <Image src={SmallLogo} alt="Le Chat" />
      </Box>
      <Heading mt={3} size="lg">
        Le Chat
      </Heading>
    </Flex>
    <Flex>
      <Text>Links</Text>
      <Text>More Links</Text>
      <Text>Definitely not MORE links</Text>
    </Flex>
    <Box>
      <SignOutButton />
    </Box>
  </Flex>
);

export default Header;
