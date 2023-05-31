"use client";

import { Box, Divider, Typography } from "@mui/material";


import SideMenu from "./commun/SideMenu";
import Link from "next/link";


export default function GroupMenu() {
  return (
    <>
      <Box
        sx={{
          width: "18%",
          maxHheight: "100vh",
          p: "14px",
          backgroundColor: "#27374D",
          color: "white",
          borderRadius: {xs: 0, md:2},
          display: { md: "block", xs: "none" },
          overflowY: "scroll",
         
          msOverflowStyle: "none",
          height: '100%',
          '&::-webkit-scrollbar':{
            width:0,
        }
        }}
      >
        <Typography m={2} variant="h4" textTransform="uppercase">
          CATEGORY
        </Typography>

        <Divider variant="middle" sx={{ background: "white" }} />
        <Box m={2} />
        <Link
          href="/group/pages/photography"
          style={{ textDecoration: "none" }}
        >
          <SideMenu title="Photography" />
        </Link>

        <Link href="/group/pages/finance" style={{ textDecoration: "none" }}>
          <SideMenu  title="finance" />
        </Link>

        <Link href="/group/pages/travel" style={{ textDecoration: "none" }}>
          <SideMenu  title="Travel" />
        </Link>

        <Link href="/group/pages/cinema" style={{ textDecoration: "none" }}>
          <SideMenu  title="Cinema" />
        </Link>

        <Link href="/group/pages/sport" style={{ textDecoration: "none" }}>
          <SideMenu  title="Sport" />
        </Link>

        <Link href="/group/pages/art" style={{ textDecoration: "none" }}>
          <SideMenu  title="Street Art" />
        </Link>

        <Link href="/group/pages/car" style={{ textDecoration: "none" }}>
          <SideMenu  title="Car trick" />
        </Link>
      </Box>
    </>
  );
}
