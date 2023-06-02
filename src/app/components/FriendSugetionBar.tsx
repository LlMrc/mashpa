"use clent";

import React from "react";
import FrienSuggetion from "./FrienSuggetion";
import { Box, Typography } from "@mui/material";

const FriendSugetionBar = () => {
  return (
    <Box
      sx={{
        height: "100vh",

        width: '275px',
      
        display: {
          md: "none",
          sm: "none",
          xs: "none",
          lg: "block",
          padding: " 10px",
          background: "#EAEAEA",
        },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          background: "#EAEAEA",
          height: "100vh",
          overflowY: "scroll",
       
          msOverflowStyle: "none",
          
         
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >  <Typography variant={'h5'} m={3}> Friends request </Typography>
        <FrienSuggetion
          image="https://th.bing.com/th/id/OIP.7_vFuIaRgNa572CgDlvmCgHaE6?pid=ImgDet&rs=1"
          name="Joe Biden"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/OIP.O3ykWm5Vg161qdrO2DhcAgHaGl?pid=ImgDet&rs=1"
          name="smeagol hobbit"
        />
        <FrienSuggetion
          image="https://de10.com.mx/sites/default/files/2019/12/30/mr_bean_serie.jpg"
          name="bean"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/R.b7c0e76591d3119ecb5fe69c934d3e77?rik=JtD0F9TAvzeRdw&pid=ImgRaw&r=0"
          name="leonardo da vinci"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/OIP.c-Anv839rAj1SqvOpCLO2wHaLK?pid=ImgDet&rs=1"
          name="beethoven"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/R.2a6ed2d233fcd1fe909f62ccadf28b45?rik=vBz7h3LKnI7EyA&pid=ImgRaw&r=0"
          name="marck"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/OIP.HwFplAzwVOONlXYvMVbO7QHaMH?pid=ImgDet&rs=1"
          name="steev jobs"
        />
        <FrienSuggetion
          image="https://th.bing.com/th/id/R.fce6f764f61d7250b5c02a997c999e1b?rik=ExxHT8IXB4g1TQ&pid=ImgRaw&r=0"
          name="bill gates"
        />
      </Box>
    </Box>
  );
};

export default FriendSugetionBar;
