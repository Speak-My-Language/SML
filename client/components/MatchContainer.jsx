import React, { useEffect } from 'react';
import MatchesInfo from './MatchesInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function MatchContainer() {
  //const background = 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg'
  // const [background, setBackground] = React.useState(
  //   'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg'
  // );
  // const [matches, setMatches] = React.useState([]);
  const [renderedMatches, setRenderedMatches] = React.useState();

  useEffect(() => {
    async function getMatches() {
      console.log('SOME LOG HERE FOR GETMATCHES');
      let response = await fetch('http://localhost:3000/matches',{
        credentials: 'include',
      });
      response = await response.json();
      console.log('matches list', response);
      const rendered = [];
      response.map((el, ind) => {
        rendered.push(<MatchesInfo key={el.name} matches={el} />);
      });
      setRenderedMatches(rendered);
      // setMatches(response);
    }
    getMatches();
  }, []);
  return (
    <>
      <p id="matches-title"> Your Matches</p>
      <div id="matches-container">
          {renderedMatches}
      </div>
    </>
  );
}

export default MatchContainer;
