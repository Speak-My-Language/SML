/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import regeneratorRunner from 'regenerator-runtime';
import { async } from 'regenerator-runtime';
import { mark } from 'regenerator-runtime';

import ProgramContainer from '../../client/components/ProgramContainer';

describe('Unit Testing Program Container Components', () => {

  describe('Program/Main Page', () => {
    //integration test needed to render potential match info

    test('should have two buttons for approving and rejecting the match', async () => {
      render(<ProgramContainer />);
      const allButtons = await screen.findAllByRole('button')
      expect(allButtons.length).toBe(2);
      expect(allButtons[0]).toHaveTextContent('0');
      expect(allButtons[1]).toHaveTextContent('1');
    })

    test('Functions invoked on click', () => {
     //set some dummy functions for the two buttons 
     const choice = {
       reject: jest.fn(),
       accept: jest.fn(),
     }
     render(<ProgramContainer />)
     
     //trigger user events
     userEvent.click(screen.getByText('0'));
     userEvent.click(screen.getByText('1'));
     //check expect to have been called (PROGRAM CONTAINER BUTTONS CALL A SETSTATE REACT HOOK. HOW DO YOU TEST?)
     expect(choice.reject).toHaveBeenCalledTimes(1);
     expect(choice.accept).toHaveBeenCalledTimes(1);
    });

  })
 })