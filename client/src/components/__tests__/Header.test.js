import React from 'react';
import Header from '../Header';
import { renderThemed } from '../../testUtils/renderWrapper';

describe('Header', () => {
  it('renders the logo as an image', () => {
    const { getByAltText, getAllByRole } = renderThemed(<Header />);
    const logo = getByAltText('Le Chat');
    const images = getAllByRole('img');
    expect(images).toContain(logo);
    expect(logo).toBeInTheDocument();
  });
});
