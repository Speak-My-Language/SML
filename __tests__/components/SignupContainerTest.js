/**
 * @jest-environment jsdom
 */
// Above docblock is required in order to run tests in browser-like environment

import { render } from "@testing-library/react";
import React from "react";
import SignupContainer from "../../client/components/SignupContainer";


describe('Unit testing signupContainer component', () => {
  let component;

  beforeAll(() => {
    component = render(<SignupContainer />);
  });

  test('Button renders with text "sign in with github"', () => {
    expect(component.getAllByText('sign in with github').length).toEqual(1);
  });
});
