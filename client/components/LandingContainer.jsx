import React from 'react';
import SignupContainer from './SignupContainer';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function LandingContainer() {
  const [ background, setBackground ] = React.useState('https://eyeondesign.aiga.org/wp-content/uploads/2020/09/2.jpg')

  // React.useEffect(() => {
  //   document.body.style.backgroundimage
  // })
  return (
    <div className="mainContainer">
    {/* style={{ background: `url(${})` }} */}
      <div id="toptext"> 
        <i class="fa-solid fa-terminal"></i>          
        Speaking My Language 
      </div>
      <div id="bottomtext"> 
      Find your next pair partner
      </div>
      <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
          <SignupContainer />
        </CardContent>
      </Card>
    </div>
  )
}

export default LandingContainer;