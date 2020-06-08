import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';

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
      <p>Hello World!</p>
      <button
        onClick={() => {
          throw new Error('butts');
        }}
      >
        Butts
      </button>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default App;
