import React from 'react';
import Button from '@mui/material/Button';
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
      {/* <p>signupContainer</p> */}
      {/* <Button onClick={oAuthGo} variant="contained">Sign Up</Button> */}
      <button className='githubButton'
        data-testid='OAuth-2'
        //variant='contained'
        // color='secondary'
        //size='large'
        startIcon={<GitHubIcon />}
        // sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
        onClick={oAuthGo}
      >
        sign in with github
      </button>
    </div>
  );
}

export default SignupContainer;
