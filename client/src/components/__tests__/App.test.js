import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import App, { TEST_QUERY } from '../App';

const mocks = [
  {
    request: {
      query: TEST_QUERY,
    },
    result: {
      data: {
        users: [
          {
            id: '1',
            email: 'hello@goodbye.com',
            username: 'stuffnthings',
          },
          {
            id: '2',
            email: 'goodbye@hello.com',
            username: 'thingsnstuff',
          },
        ],
      },
    },
  },
];

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = render(
      <MockedProvider mock={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const componentText = getByText('Hello World!');
    expect(componentText).toBeInTheDocument();
  });
});
