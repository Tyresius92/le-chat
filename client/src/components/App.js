import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';
import { Box } from '@chakra-ui/core';
import Header from './Header';

const TEST_QUERY = gql`
  {
    users {
      id
      email
      username
    }
  }
`;

const App = () => {
  const { data, error } = useQuery(TEST_QUERY);
  useEffect(() => {
    if (error) {
      Logger.error(error);
    }
  }, [error]);

  return (
    <div>
      <Header />
      <Box p={4}>
        <p>Hello World!</p>
        {data && <p>{JSON.stringify(data)}</p>}
        <hr />
      </Box>
    </div>
  );
};

export default App;
