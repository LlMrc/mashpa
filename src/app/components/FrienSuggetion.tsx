import { Card, Box, CardContent, Typography, CardMedia, Button } from '@mui/material'
import React from 'react'


type Props={
    image: string,
    name: string
}
const FrienSuggetion = ({image , name}: Props) => {
  return (
    <Card sx={{ display: 'flex', 
    gap: 2, m:2, 
    maxHeight: 120, 
 
     transition: " .5s  ease-in-out", 
   
     "&:hover":{ transform: "scale(1.02)", background: "#ECC9EE"}}}>
         <CardMedia
        component="img"
        sx={{ width: 128, height:85 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="body1">
          {name}
          </Typography>
       
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: "flex-end", gap:1, }}>
           <Button size='small' sx={{ textTransform: "none"}}> Decline</Button>
           <Button size='small' sx={{  textTransform: "none" }} variant='contained'> Accept</Button>
     
         
        </Box>
      </Box>
     
    </Card>
  )
}

export default FrienSuggetion