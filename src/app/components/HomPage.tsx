"use client";

import React from "react";
import {
  Box,

  styled,
} from "@mui/material";
import Post from "./Post";

import AddPost from "./AddPost";

const StyleMargin = styled("div")(({ theme }) => ({
  root: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
}));
const HomePage = () => {
  return (
    <>
      <StyleMargin>
        <Box flex={1} sx={{ padding: { xs: 0, sm: 0, md: 2 } }}>
          <Post img="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=400" />
          <Post img="https://images.pexels.com/photos/164287/pexels-photo-164287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/5036698/pexels-photo-5036698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/5254651/pexels-photo-5254651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/8101834/pexels-photo-8101834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400" />
          <Post img="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

          <Post img="https://images.pexels.com/photos/1228497/pexels-photo-1228497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Post img="https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Box>

        <AddPost />
      </StyleMargin>
    </>
  );
};

export default HomePage;
