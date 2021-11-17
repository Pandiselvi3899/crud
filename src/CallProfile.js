import { Counter } from './Counter';
import InfoButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';





export function Callprofile({ pv, id, profiles, setProfiles }) {
    const history = useHistory();
    return (
        <Card sx={{ maxWidth: 400, minWidth: 400 }}>
            <CardHeader
                title={pv.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={pv.picture}
                alt={pv.name}
            />
            <InfoButton
                color="secondary"
                onClick={() => {
                    console.log(id)
                    history.push("/Mvs/" + id)
                }}>
                <InfoIcon />
            </InfoButton>
            <h3 className="profile-rating"> Age: {pv.age} </h3>
            <h4 className="profile-rating"> Gender: {pv.gender} </h4>

            <CardContent>

                <InfoButton

                    onClick={() => {
                        console.log(id)
                        history.push("/Edit/" + id)
                    }}>
                    <EditSharpIcon />
                </InfoButton>
                <InfoButton
                    onClick={() => {
                        const rem = profiles.filter((pvx, idx) => idx !== id);
                        setProfiles(rem);

                    }}>
                    <DeleteSharpIcon />
                </InfoButton>
                <Counter />
            </CardContent>
        </Card>
    );
}