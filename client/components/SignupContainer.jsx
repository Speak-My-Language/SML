import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function SignupContainer() {
  const oAuthGo = () => {
    window.location = 'http://localhost:3000/signup/github/auth';
  };

  return (
    <div id="signupContainer">
      <Button className='githubButton'
        data-testid='OAuth-2'
        variant='contained'
        color='secondary'
        size='large'
        startIcon={<GitHubIcon />}
        sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
        onClick={oAuthGo}
      >
        sign in with github
      </Button>
    </div>
  );
}

export default SignupContainer;
