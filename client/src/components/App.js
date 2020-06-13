import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';
import SignOutButton from './SignOutButton';
import { Image } from '@chakra-ui/core';
import logoSmall from '../assets/logo_small.png';
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
      <Image src={logoSmall} alt="Le Chat" />
      <p>Hello World!</p>
      {data && <p>{JSON.stringify(data)}</p>}
      <hr />
      <SignOutButton />
    </div>
  );
};

export default App;
