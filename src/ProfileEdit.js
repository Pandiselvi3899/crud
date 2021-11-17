import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

    
export function ProfileEdit({ profiles, setProfiles }) {
    const history = useHistory();
    const { id } = useParams();
    const profile = profiles[id];
    const [name, setName] = useState(profile.name);
    const [picture, setPicture] = useState(profile.picture);
    const [age, setAge] = useState(profile.age);
    const [gender, setGender] = useState(profile.gender);


    return (
        <div className="profile-edit">
            <TextField className="profile-name" value={name} placeholder="Edit profile name"
                onChange={(event) => { setName(event.target.value); }} variant="standard" />
            <TextField className="profile-name" value={picture} placeholder="Edit profile picture"
                onChange={(event) => { setPicture(event.target.value); }} variant="standard" />
            <TextField className="profile-name" value={age} placeholder="Edit profile age"
                onChange={(event) => { setAge(event.target.value); }} variant="standard" />
            <TextField className="profile-name" value={gender} placeholder="Edit profile gender"
                onChange={(event) => { setGender(event.target.value); }} variant="standard" />
            <Button onClick={() => {
                const mcopy = [...profiles];
                mcopy[id] = {name,picture,age,gender};
                setProfiles(mcopy);
                history.push("/Mvs")
            }} variant="contained" className="add-button">Edit profile</Button>
        </div >
    );  
}