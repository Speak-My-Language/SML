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
    <div
      className="backgroundImageContainer"
      style={{ background: `url(${background})` }}
    >
      <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
          <div id="toptext">Speaking My Language</div>
          <div id="bottomtext">Find your next pair partner</div>
          <SignupContainer />
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingContainer;
