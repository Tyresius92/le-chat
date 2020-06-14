import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import * as Sentry from '@sentry/browser';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from './theme';

Sentry.init({
  dsn:
    'https://6b09eade47d64550b0809731f881fb01@o404202.ingest.sentry.io/5267567',
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
