'use client'

import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { purple } from '@mui/material/colors';





const color = purple[400];


const styleBox = {
  display: "flex",
  flexDirection: 'column',
  gap: 4,
  background: '#ffffff',
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  margin: '50px auto',
  padding: 4,
  boxShadow: `6px 14px 40px -5px rgba(0,0,0,0.34);
  -webkit-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34);
  -moz-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34)`
  
};

const Settings = () => {
  return (
    <Box sx={styleBox} maxWidth={400}>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="name"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Box
          width={'50%'}
        borderRadius={1}
        bgcolor= {color}
        padding={"10px 10px"}
        textAlign={"center"}
        sx={{'&:hover': {transform: 'scale(1.1)', transition: `all 0.5s ease-out`}}}
    
      >
        Logout
      </Box>
      <Typography>Lost your Password?</Typography>
    </Box>
  );
};

export default Settings;
