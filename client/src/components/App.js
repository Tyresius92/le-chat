import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const TEST_QUERY = gql`
  {
    users {
      id
      email
      username
    }
  }
`;

const App = () => {
  const { data } = useQuery(TEST_QUERY);

  return (
    <div>
      <p>Hello World!</p>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default App;
