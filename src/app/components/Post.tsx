
'use client'

import React from 'react'
import {Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, IconButtonProps, Typography} from '@mui/material'

import {  Favorite, FavoriteBorder, Instagram, MoreVert, Pinterest, Scale, Share, Telegram, Twitter } from '@mui/icons-material'
import { red } from '@mui/material/colors';


export type Props = {
    img: string
};



const Post: React.FC<Props>= ({img}) => {
  return (
    <Card sx={{m:{xs: 0, sm:4, md: 6},
     background: "#F0F0F0" }} >
    <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert />
      </IconButton>
     
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
    />

    <CardMedia
    
    component="img" 
     height="10%"
    image={img}
    alt="Paella dish"
    sx={{  maxHeight:'400px', 
    
    transition: " 1s  ease-in-out",
      "&:hover":{transform: "scale(1.01)"}}}
      
    
  />
    <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites" >
    <Checkbox icon={<FavoriteBorder  />} checkedIcon={<Favorite color='secondary' />} />
    </IconButton>
    <IconButton aria-label="share">
      <Share />
    </IconButton>
<Box sx={{display:'flex', flex:1}}/>
<Pinterest sx={{color:'gray'}}/>
<Instagram sx={{color:'gray'}}/>
<Twitter sx={{color:'gray'}}/>
<Telegram sx={{color:'gray'}}/>
  </CardActions>

  </Card>
  )
}

export default Post