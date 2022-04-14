/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from '../../client/App';
import MatchesInfo from '../../client/components/MatchesInfo';


describe('Unit Testing MatchInfo Components', () => {
  describe('Matches', () => {
    let text;
    const props = {
      matches: {
        match1: {name: 'match1 name', language: 'Javascript'},
        match2: {name: 'match2 name', language: 'C++'},
        match3: {name: 'match3 name', language: 'Python'}
      }
    }

    beforeEach(() => {
      text = render(<MatchesInfo {...props}/>)
    });

    test('Should render each match, with props passed, in order', () => {
      expect(text.getByText(`match1: {"name":"match1 name","language":"Javascript"}`)).toBeTruthy();
      expect(text.getByText(`match2: {"name":"match2 name","language":"C++"}`)).toBeTruthy();
      expect(text.getByText(`match2: {"name":"match2 name","language":"C++"}`).nextSibling).toHaveTextContent(`match3: {"name":"match3 name","language":"Python"}`)
    })
  })
})
