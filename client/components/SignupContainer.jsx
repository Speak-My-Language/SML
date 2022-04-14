import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function SignupContainer() {
  const oAuthGo = () => {
    window.location = 'http://localhost:3000/signup/github/auth';
  };

  return (
    <div id="signupContainer">
      <p id='termText'>
            By tapping Sign In, you agree to our Terms, Learn how we process your data in our Privacy Policy and Cookie Policy.
          </p>
      <button className='githubButton'
        data-testid='OAuth-2'
        start-icon={<GitHubIcon />}
        onClick={oAuthGo}
      >
        sign in with github
      </button>
    </div>
  );
}

export default SignupContainer;
