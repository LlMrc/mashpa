"use client";

import { Box, Stack, styled } from "@mui/material";
import React from "react";
import GroupMenu from "./GroupMenu";

import Footer from "../Footer";



const boxstyle = {
  display: "flex",
  flexPositon: "row",
  height: "100vh",
  width: "100%",
};

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   
     
      <Box sx={boxstyle}>
        <GroupMenu />
        <Box flex={1}>{children}</Box>
      </Box>
      <Footer />
    </>
  );
};

export default GroupLayout;
