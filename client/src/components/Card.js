import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';

const Card = ({ children, ...props }) => (
  <Box
    backgroundColor="gray.25"
    m={2}
    p={4}
    rounded="lg"
    px={20}
    border="2px solid"
    borderColor="gray.200"
    boxShadow="sm"
    {...props}
  >
    {children}
  </Box>
);
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
