import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Logger from '../logger';
import Header from './Header';
import Message from './Message';
import Chef from '../assets/swedish_chef.jpg';
import Cat from '../assets/francois_placeholder.png';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';

const TEST_QUERY = gql`
  {
    users {
      id
      email
      username
    }
  }
`;

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
      <Header />
      <Switch>
        <Route exact path="/">
          <p>Hello World!</p>
          {data && <p>{JSON.stringify(data)}</p>}
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
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={MockSignUp} />
        <Route path="/home" component={MockHome} />
        <Route path="*" component={Mock404} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
