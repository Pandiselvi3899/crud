// import { Input } from '@mui/material';
import './App.css';

import { useState } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  const pov = [
    {name:"Selvi",picture:"https://i.pinimg.com/originals/80/91/83/80918382c5aa728cdc7401dfbe3f97c4.gif",age:"22",gender:"Female"},
    {name:"Sneha",picture:"https://4.bp.blogspot.com/-hKKnuJHPxkM/XUrKMCxniuI/AAAAAAAWHcM/0EvZsht7DmsyUCF0T7ly2FGEyA677SYCQCLcBGAs/s1600/AW3969395_00.gif",age:"21",gender:"Female"},
    {name:"Raj",picture:"https://3.bp.blogspot.com/-inK9JWJ7gMg/XgAG_hHruiI/AAAAAAAWdGQ/0_HIQ7IwvpsN2G0SldkZFInNC-F1W5eCACLcBGAsYHQ/s1600/AW4119690_03.gif",age:"30",gender:"Male"},
    {name:"Aji",picture:"https://i.pinimg.com/originals/1e/c5/cc/1ec5cc2c0bd9c558781dec2da40a4ed9.gif",age:"23",gender:"Female"},
    {name:"Prakash",picture:"https://i.pinimg.com/originals/ea/6e/60/ea6e603c4204ecb4664901d7f9edf452.gif",age:"22",gender:"Male"},
    {name:"Vijay",picture:"https://i.pinimg.com/originals/1b/33/ca/1b33ca82a5583e35a7385db5f09f5e8a.gif",age:"32",gender:"Male"},
    {name:"Sammu",picture:"https://i.pinimg.com/originals/dc/a2/9c/dca29ce059d75490fb8e3140c2ae5c81.gif",age:"27",gender:"Female"},
  ]
  const [profiles,setProfiles] = useState(pov);
  console.log(profiles[0].name)
  return(
    <div className="App">
        <MiniDrawer profiles={profiles} setProfiles={setProfiles}/>
    </div>
  )
}



