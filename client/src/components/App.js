import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';
import SignOutButton from './SignOutButton';
import { Image } from '@chakra-ui/core';
import logoSmall from '../assets/logo_small.png';
import Message from './Message';
import Chef from '../assets/swedish_chef.jpg';
import Cat from '../assets/francois_placeholder.png';

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
      <Message
        senderIcon={Chef}
        senderName="Swedish Chef"
        timeSent="Now"
        messageText="BORK BORK BORK"
      />
      <Message
        senderIcon={Cat}
        senderName="François"
        timeSent="Now"
        messageText="miaou miaou"
      />
    </div>
  );
};

export default App;
