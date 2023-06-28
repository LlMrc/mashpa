import {
  PersonAdd,
  Group,
  StorefrontOutlined,
  AccountCircleOutlined,
  Newspaper,
  PagesSharp,
  Person2,
  Feed,
} from "@mui/icons-material";
import { Box, Divider, Drawer, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

const paperStyle = {
  height: 42,
  paddingTop: 1,
  boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)",
  },
};

const linkItems = [
  {
    name: "Feeds",
    href: "/",
    icon: <Feed/>,
  },
  {
    name: "Friends",
    href: "/users",
    icon: <Person2 />,
  },
  {
    name: "Pages",
    href: "/group",
    icon: <PagesSharp />,
  },
  {
    name: "News",
    href: "/news",
    icon: <Newspaper />,
  },

];
export default function MuiDrawer({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: () => void;
}) {
  return (
    <Drawer
      anchor="left"
      aria-label="mui drawer"
      open={isOpen}
      onClose={setOpen}
    >
      <Stack width={200} spacing={2} p={2}>
        <Link onClick={setOpen} href={"/"} style={{ textDecoration: "none" }}>
          <Box
            bgcolor={"#F8E8EE"}
            borderRadius={1}
            height="60px"
            textAlign={"center"}
          >
            <Typography variant="h5" color={"black"} align="center" pt={2}>
              Home
            </Typography>
          </Box>
        </Link>
        <Divider />

        {linkItems.map((item) => (
          <Link
            onClick={setOpen}
            key={item.name}
            href={item.href}
            style={{ textDecoration: "none", color: "black" }}
          >
         
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  padding:1,
                  "&:hover":{backgroundColor: "#E1AEFF"}
                }}
              >
                {item.icon}
                <Typography ml={4}>{item.name}</Typography>
              </Box>
         
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
}
