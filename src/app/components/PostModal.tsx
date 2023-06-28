"use client";

import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

const style = {
  display: "block",
  borderRadius: 4,
  margin: "0 auto",
  border: "1px solide grey",
  maxWidth: "50rem",
  background: "rgba(0, 0, 0, 0.18)",
};

const PostModal = async ({ promise }: Props) => {
  const postData = await promise;

  return (
    <Box padding={2}>
      {postData.map((item) => {
        return (
          <Box key={item.id}  sx={style}>
            <Typography p={4} variant="h5" fontWeight={"600"}>
          
              {item.title}
            </Typography>
            <Divider />

            <Typography p={2} variant="h6">
              {item.body}
            </Typography>
          </Box>
        );
      })}
      <Box height={10}/>
    </Box>
  );
};

export default PostModal;
