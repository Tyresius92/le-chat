import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Flex, Box, Text } from '@chakra-ui/core';

const Message = ({ senderIcon, senderName, messageText, timeSent }) => (
  <Flex m={1}>
    <Box>
      <Avatar src={senderIcon} name={senderName} />
    </Box>
    <Box ml={2}>
      <Box>
        <Text as="b" fontSize="sm">
          {senderName}
        </Text>{' '}
        <Text color="gray.500" as="i" fontSize="xs">
          {timeSent}
        </Text>
      </Box>
      <Text>{messageText}</Text>
    </Box>
  </Flex>
);

Message.propTypes = {
  messageText: PropTypes.string.isRequired,
  timeSent: PropTypes.string.isRequired,
  senderName: PropTypes.string.isRequired,
  senderIcon: PropTypes.string,
};

Message.defaultProps = {
  senderIcon: null,
};

export default Message;
