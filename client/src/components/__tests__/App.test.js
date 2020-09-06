import React from 'react';
import App from '../App';
import { useQuery } from '@apollo/react-hooks';
import Logger from '../../logger';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderThemed } from '../../testUtils/renderWrapper';

jest.mock('../../logger');
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({})),
  useMutation: jest.fn(() => []),
}));

const renderPath = (route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return renderThemed(
    <Router history={history}>
      <App />
    </Router>
  );
};
describe('App', () => {
  it('renders the logo as an image', () => {
    const { getByAltText, getAllByRole } = renderPath();
    const logo = getByAltText('Le Chat');
    const images = getAllByRole('img');
    expect(images).toContain(logo);
    expect(logo).toBeInTheDocument();
  });

  it('logs an error once if there is a query error', () => {
    useQuery.mockReturnValue({ error: 'testsplosion' });
    expect(Logger.error).toHaveBeenCalledTimes(0);
    const { rerender } = renderPath();
    expect(Logger.error).toHaveBeenCalledTimes(1);
    rerender();
    expect(Logger.error).toHaveBeenCalledTimes(1);
  });

  it('renders hello world on base route', () => {
    const { getByText } = renderPath();
    const componentText = getByText('Hello World!');
    expect(componentText).toBeInTheDocument();
  });

  it('shows sign in page on expected route', () => {
    const { getByText } = renderPath('/signin');
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('shows sign up page on expected route', () => {
    const { getByText } = renderPath('/signup');
    expect(getByText('Sign Up')).toBeInTheDocument();
  });

  it('shows user home page on expected route', () => {
    const { getByText } = renderPath('/home');
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('shows 404 on unexpected route', () => {
    const { getByText } = renderPath('/some_random_url');
    expect(getByText('404')).toBeInTheDocument();
  });
});
