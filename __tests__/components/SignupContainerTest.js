/**
 * @jest-environment jsdom
 */
// Above docblock is required in order to run tests in browser-like environment

import { render } from "@testing-library/react";
import React from "react";
import SignupContainer from "../../client/components/SignupContainer";


describe('Unit testing signupContainer component', () => {
  let component;
  beforeAll(() => component = render(<SignupContainer />));

  xtest('Button renders with text "sign in with github"', () => {
    expect(component.getAllByText('sign in with github').length).toEqual(1);
  });

  test('Button onClick event changes url to "/github/auth"', async () => {
    const user = userEvent.setup();
    const button = component.getByRole('button');
    console.log(global.window.location.pathname);
    await user.click(button);
    console.log(global.window.location.pathname);
  });
});
