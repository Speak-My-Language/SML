/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '../../client/components/NavContainer';

describe('NavContainer component', () => {
  beforeAll(() => {
    render(<Nav />);
  });

  it('Renders four anchor links', () => {
    const linksList = ['Pair', 'Matches', 'Profile', 'Logout'];
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
    links.forEach((link, i) => expect(link).toHaveTextContent(linksList[i]));
  });
});
