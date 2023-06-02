"use client";



import { Box, Button, Container, Paper, Snackbar, Stack, Typography, styled } from "@mui/material";
import React from "react";
import BasicMenu from "./MbileMenuGroup";

type Props = {
  img: string;
  headerTitle: string;
  subTitle: string;
};

const cardStyle = {
  borderRadius: "10px",
  border: "2px solid black",
  padding: "20px",
  minWidth: "6rem",
  opacity: "0.8",
  background: "gray",
  margin: "10px",
  overflow: "hidden",
  '&:hover':{
    opacity: ".2",
  }
};

const StyleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px auto",
});

const boxStyle = {
  background: "white",
  opacity: "0.7",
  height: "120px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const groupTitle = [
  {title: 'title 1', description:'desc'},
  {title: 'title 2', description:'desc0'},
  {title: 'title 3', description:'desc3'},
  {title: 'title 4', description:'desc4'},
  {title: 'title 5', description:'desc5'},
  {title: 'title 6', description:'desc6'},
  {title: 'title 7', description:'desc7'},
  {title: 'title 8', description:'desc8'},
  {title: 'title 9', description:'desc9'}
]

const GroupList = ({ img, headerTitle, subTitle }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        textAlign: "Center",
        borderRadius: 4,
        margin: "0 6px",
        overflow: "hidden",
      }}
    >
    
      <Container  sx={boxStyle}>
        <Box  flexDirection={'row'} display={'flex'}>
          <Typography noWrap={true} pr={'10px'} variant="h4"  fontWeight={900} letterSpacing={2}>
            {headerTitle}
          </Typography>
          <Typography variant="h4"  fontWeight={900} style={{ color: "red" }}>
            Group
          </Typography>
  {/* category button display in mobile mode */}
         <BasicMenu/>
      
        </Box>

        <Typography variant="body2" letterSpacing={2}>
          {subTitle}
        </Typography>
      </Container>

      <Box
        sx={{
          overflowY: "scroll",
         
          msOverflowStyle: "none",
          height: '100%',
          '&::-webkit-scrollbar':{
            width:0,
        }
        }}
      >
        <StyleBox>
       
         {groupTitle.map(item=>{
          return (
            <Paper key={item.description} variant="outlined"  sx={cardStyle}>
              <Button sx={{color:'white'}} variant="text" onClick={handleClick}>{item.title}</Button>  
            </Paper>
          )
         })}
        
        </StyleBox>
      </Box>
      <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="This page was not added by the developer"
  
/>
    </Box>
  );
};


export default GroupList;
