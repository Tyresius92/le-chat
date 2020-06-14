import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';
import SignOutButton from './SignOutButton';
import { Image } from '@chakra-ui/core';
import logoSmall from '../assets/logo_small.png';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

const TEST_QUERY = gql`
  {
    users {
      id
      email
      username
    }
  }
`;
const MockSignIn = () => <p>Sign In</p>;
const MockSignUp = () => <p>Sign Up</p>;
const MockHome = () => <p>Home</p>;
const Mock404 = () => <p>404</p>;

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
      <SignOutButton />
      <hr />
      <br />
      <Switch>
        <Route exact path="/">
          <p>Hello World!</p>
          {data && <p>{JSON.stringify(data)}</p>}
        </Route>
        <Route path="/signin" component={MockSignIn} />
        <Route path="/signup" component={MockSignUp} />
        <Route path="/home" component={MockHome} />
        <Route path="*" component={Mock404} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
