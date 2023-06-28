"use client";
import { Box, Divider, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
};

const style = {
  "&:hover": { background: "#ECC9EE" },
};
const SideMenu = ({ title }: Props) => {
  return (
    <Paper sx={style}>
      <Box display="flex" gap={2} p={2} mt={2}>
        <Typography variant="h6" textTransform="uppercase">
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default function GroupMenu() {
  return (
    <Box width={"210px"} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        sx={{
          marginTop: 10,
          marginLeft:2,
          borderRadius: 2,
          width: "200px",
          p: "14px",
          backgroundColor: "#27374D",
          color: "white",
          position: "fixed",
          display: { md: "block", xs: "none" },
        }}
      >
        <Typography m={2} variant="h6" textTransform="uppercase">
          CATEGORY
        </Typography>

        <Divider variant="middle" sx={{ background: "white" }} />
        <Box m={2} />

        <Link
          href="/group/pages/entertainment"
          style={{ textDecoration: "none" }}
        >
          <SideMenu title="entertainment" />
        </Link>

        <Link href="/group/pages/finance" style={{ textDecoration: "none" }}>
          <SideMenu title="finance" />
        </Link>

        <Link href="/group/pages/cinema" style={{ textDecoration: "none" }}>
          <SideMenu title="Cinema" />
        </Link>

        <Link href="/group/pages/sport" style={{ textDecoration: "none" }}>
          <SideMenu title="Sport" />
        </Link>

        <Link href="/group/pages/travel" style={{ textDecoration: "none" }}>
          <SideMenu title="Travel" />
        </Link>
      </Box>
    </Box>
  );
}
