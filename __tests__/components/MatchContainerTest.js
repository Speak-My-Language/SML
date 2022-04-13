/**
 * @jest-environment jsdom
 */
// Above docblock is required in order to run tests in browser-like environment

import { render } from '@testing-library/react';
import React from 'react';
import MatchContainer from '../../client/components/MatchContainer';

// Requires some more tests, specifically, what is our plan for this page?
describe('Unit testing MatchesContainer component', () => {
  let component;
  beforeAll(() => component = render(<MatchContainer />));

  test('Matches container renders on screen', () => {
    const container = component.getByTestId('matches-container');
    expect(container.toBeInTheDocument());
  });
});
