import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function ProfileInput({ profiles, setProfiles }) {
  const history = useHistory();
  const [name, setName] = useState(profiles[0].name);
  const [picture, setPicture] = useState(profiles[0].picture);
  const [age, setAge] = useState(profiles[0].age);
  const [gender, setGender] = useState(profiles[0].gender);
  return (
    <div className="profile-input">
    <TextField placeholder="Enter the Person's name"
      onChange={(event) => setName(event.target.value)} variant="standard" />
    <TextField placeholder="Enter the Person's image address"
      onChange={(event) => setPicture(event.target.value)} variant="standard"/>
    <TextField placeholder="Enter the Person's age"
      onChange={(event) => setAge(event.target.value)} variant="standard" />
    <TextField placeholder="Enter the Person's gender"
      onChange={(event) => setGender(event.target.value)} variant="standard" />
    <Button onClick={() => {
      setProfiles([...profiles, { name, picture, age, gender }]);
      history.push("/Mvs")

    }
    } variant="contained" className="add-button">Add Profile</Button>
    
  </div>);
}