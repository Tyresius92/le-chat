import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'https://6b09eade47d64550b0809731f881fb01@o404202.ingest.sentry.io/5267567',
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
