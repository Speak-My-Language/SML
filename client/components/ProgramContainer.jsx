import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChartContainer from './ChartContainer';

const fetch = require('node-fetch');

function ProgramContainer() {
  const [choice, setChoice] = React.useState({});
  const [userList, setUserList] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();
  const [message, setMessage] = React.useState('Loading');
  const [userId, setUserId] = React.useState(Cookies.get('user_session'));
  const [loggedUser, setLoggedUser] = useState();

  // Create child component
  const userProfile = () => (
    <div>
      <div className="languageChartDiv">
        <ChartContainer user={loggedUser} match={currentUser} />
      </div>
      <div>{`${currentUser.name}`}</div>
      <div style={{ fontSize: '1rem' }}>{`${currentUser.languages}`}</div>
    </div>
  );

  React.useEffect(() => {
    async function asyncSetUser() {
      let response = await fetch('http://localhost:3000/newProgrammer');
      let myProfile = await fetch(`http://localhost:3000/user/${userId}`);
      response = await response.json();
      myProfile = await myProfile.json();
      setLoggedUser(myProfile);
      setUserId(response[1]);
      const nextUser = response[0].pop();
      setUserList(response[0]);
      setCurrentUser(nextUser);
    }
    asyncSetUser();
  }, []);

  React.useEffect(() => {
    async function displayNewUser() {
      if (currentUser !== undefined) {
        setMessage(userProfile());
      } else {
        setMessage('No more users.');
      }
    }
    displayNewUser();
  }, [currentUser, userList]);

  // {
  //   node_id // -> SELECT uuid from users where node_id=node_id
  //   match_uuid => currentUser.id
  //   is_matched => choice.choice
  // }

  React.useEffect(() => {
    async function getNextUser() {
      if (userList) {
        let response = await fetch(`http://localhost:3000/matches`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            node_id: userId,
            match_uuid: currentUser.id,
            choice: choice.choice,
            matchedName: currentUser.name,
          }),
        });
        const nextUser = userList.pop();
        setUserList(userList);
        setCurrentUser(nextUser);
      }
    }
    getNextUser();
  }, [choice]);

  /*
  charts.js
  */

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Doughnut Chart'
  //       }
  //     }
  //   },
  // };
  // const DATA_COUNT = 5;
  // const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  return (
    <>
      <div id="program-container" >
        <CardContent>
          <div>{message}</div>
          <Button
            variant='contained'
            color='secondary'
            // size='large'
            sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
            className="matchButtons"
            onClick={() => setChoice({ name: currentUser.name, choice: 0 })}
          >
            0
          </Button>
          <Button
            variant='contained'
            color='secondary'
            // size='large'
            sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
            className="matchButtons"
            onClick={() => setChoice({ name: currentUser.name, choice: 1 })}
          >
            1
          </Button>
          {/* <Button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 0 })}>0</Button>  */}
          {/* <Button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 1 })}>1</Button>  */}
        </CardContent>
      </div>
    </>
  );
}

export default ProgramContainer;
