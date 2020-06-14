import React from 'react';
import { renderThemed } from '../../testUtils/renderWrapper';
import Button from '../Button';

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = renderThemed(<Button>Button</Button>);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
