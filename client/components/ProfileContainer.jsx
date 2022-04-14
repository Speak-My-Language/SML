import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Cookies from 'js-cookie';
import { FormControl, FormLabel, TextField } from '@mui/material';

function ProfileContainer() {
  // ---------- Default state and hooks ----------
  const defaultProfile = {
    name: '',
    email: '',
    location: '',
    website: '',
    bio: '',
    handle: '',
  };
  const [profile, setProfile] = React.useState(defaultProfile);
  const [changed, setChanged] = React.useState(true);

  // ---------- Initial get user info ----------
  React.useEffect(() => {
    async function asyncGetUser() {
      let response = await fetch(
        `http://localhost:3000/user/${Cookies.get('user_session')}`,
        {
          method: 'GET',
        }
      );
      response = await response.json();
      const newProfile = {};
      Object.keys(profile).map((prop) => {
        if (response[prop]) newProfile[prop] = response[prop];
      });
      setProfile({ ...profile, ...newProfile });
    }
    asyncGetUser();
  }, []);

  // ---------- Handle change in text input fields ----------
  function changeHandler(event) {
    const section = event.target.name;
    const value = event.target.value;
    setProfile({ ...profile, [section]: value });
    // Change state to switch Updated! button to Update
    setChanged(true);
  }

  // ---------- Handle onClick submit button ----------
  function submitHandler() {
    // Construct the request body with the current message, turned into a JSON string
    const body = JSON.stringify({ profile });

    // Construct the POST request with the request body
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    };

    async function asyncSetUser() {
      let response = await fetch(
        `http://localhost:3000/user/${Cookies.get('user_session')}`,
        request
      );
    }
    asyncSetUser();
    // Change state to switch Update button to Updated!
    setChanged(false);
  }

  const profileForm = Object.keys(profile).map(ele =>
    (
      <TextField
        key={ele}
        className="updateProfileInput"
        variant="standard"
        margin="dense"
        label={profile[ele]}
        helperText={ele}
      />
    )
  );
  
  return (
    <div id="profile-container">
      <Card id="sml" sx={{ minHeight: 700, minWidth: 550, borderRadius: 2 }}>
        <CardContent>
          <FormControl action="/user" method="PUT" sx={{p: 8}}>
            { profileForm }
            <Button
              className="updateProfileBtn"
              data-testid="OAuth-2"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                borderRadius: 1,
                fontWeight: 'bold',
                margin: 5,
                padding: 1,
                backgroundColor: "#8ccfde",
              }}
              onClick={() => setChoice({ name: currentUser.name, choice: 0 })}
            >
              Update
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileContainer;
