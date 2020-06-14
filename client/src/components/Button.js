import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const LeChatButton = ({ children, ...props }) => {
  const defaults = {
    variant: 'solid',
    variantColor: 'turquoise',
  };
  return (
    <Button {...defaults} {...props}>
      {children}
    </Button>
  );
};

LeChatButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeChatButton;
