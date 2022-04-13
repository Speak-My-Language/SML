import React from 'react';
import { useState } from 'react';
import SignupContainer from './SignupContainer';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const LandingContainer = () => {
  const backgroundImage =
    'https://eyeondesign.aiga.org/wp-content/uploads/2020/09/2.jpg';
  const [background, setBackground] = useState(backgroundImage);

  return (
    <div className="main-login-container">
      <div id="toptext"> 
        <i class="fa-solid fa-terminal"></i>          
        Speaking My Language 
      </div>
      <div id="bottomtext"> 
      Find your next pair partner
      </div>
      <div id="signupContainer" sx={{ minWidth: 275 }}>
        <CardContent>
          
          <SignupContainer />
        </CardContent>
      </div>
    </div>
  );
};

export default LandingContainer;
