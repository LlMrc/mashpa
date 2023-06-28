"use client";

import { Box, Stack } from "@mui/material";
import React from "react";

import Footer from "../Footer";
import GroupMenu from "./SideMenu";

import Link from "next/link";
import { styled } from "@mui/material/styles";

const BoxStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
    visibility: "hidden",
  },
 
  height: 130,
  paddingTop: 14,
}));

const pagess = [
  {
    name: "Finance",
    href: "/group/pages/finance",
  },
  {
    name: "Cinema",
    href: "/group/pages/cinema",
  },
  {
    name: "entertainment",
    href: "/group/pages/entertainment",
  },
  {
    name: "Travel",
    href: "/group/pages/travel",
  },
  {
    name: "Sport",
    href: "/news",
  },
];

const boxstyle = {
  display: "flex",
  flexPositon: "row",
  height: "100vh",
  width: "100%",
};

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BoxStyle>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {pagess.map((item) => (
            <Box
              key={item.name}
              py={1}
              px={2}
              m={1}
              bgcolor={"#E5E0FF"}
              borderRadius={30}
            >
              <Link style={{ textDecoration: "none" }} href={item.href}>
                {item.name}
              </Link>
            </Box>
          ))}
        </Box>
      </BoxStyle>
      <Box sx={boxstyle}>
        <GroupMenu />
        <Box flex={1}>{children}</Box>
      </Box>
   
    </>
  );
};

export default GroupLayout;
