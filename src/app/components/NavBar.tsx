"use client";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Stack,
  Menu,
  Modal,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Home,
  MailOutline,
  Menu as MenuIcon,
  Notifications,
} from "@mui/icons-material";
import { useState } from "react";

import React from "react";
import MuiDrawer from "./MuiDrawer";
import Link from "next/link";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));
const paperStyle = {
  fontSize: "1.5rem",
  fontWeight: 900,
  width: 400,
  borderRadius: 6,
};
const Shearch = styled("div")(({ theme }) => ({
  padding: "0 10px",
  borderRadius: "40px",
  width: "40%",
  backgroundColor: "white",
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
  gap: "20px",
}));

const UseAvatar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
  gap: "10px",
}));

function NavBar() {
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [notifyNumber, setNotifyNumber] = useState(1);

  const handleOpenDrawer = () => {
    setDrawer(true);
  };
  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  const handleClickOpen = () => {
    setNotify(true);
    setNotifyNumber(0);
  };

  const handleClose = () => {
    setNotify(false);
  };

  const CssToolbar = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

  return (
    <>
<>
      <AppBar position="sticky" sx={{ top: 0, margin: 0 }} elevation={0}>

        <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
          <Stack >
            <Link passHref href="/" style={{ textDecoration: "none", color: "white" }}>
              <Home sx={{ display: { xs: "block", sm: "none" } }} />
            </Link>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "white" }} >
               HOME
              </Link>
            </Typography>
          </Stack>
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon  sx={{color:"white", display: { xs: "block", sm: "none" }}} />
          </IconButton>

          <MuiDrawer isOpen={drawer} setOpen={handleCloseDrawer} />
          <Shearch>
            <InputBase placeholder="..search" />
          </Shearch>

          <Icon>
            <Badge badgeContent={notifyNumber} color="warning">
              <MailOutline onClick={handleClickOpen} />
            </Badge>

            <Badge badgeContent={0} color="warning">
              <Notifications />
            </Badge>
            <Avatar
              onClick={() => setOpen(true)}
              alt="Louis Marc"
              sx={{ width: 30, height: 30 }}
              src="https://media.licdn.com/dms/image/C4E03AQE3sHdhl_gFbA/profile-displayphoto-shrink_800_800/0/1569078145649?e=2147483647&v=beta&t=h3OA1jGhRaPmsHSMa2INoFolQ602Z6tOmy2rtjDrowA"
            />
          </Icon>
          <UseAvatar onClick={() => setOpen(true)}>
            <Avatar
              alt="Louis Marc"
              sx={{ width: 30, height: 30 }}
              src="https://media.licdn.com/dms/image/C4E03AQE3sHdhl_gFbA/profile-displayphoto-shrink_800_800/0/1569078145649?e=2147483647&v=beta&t=h3OA1jGhRaPmsHSMa2INoFolQ602Z6tOmy2rtjDrowA"
            />
            <Typography>Leo</Typography>
          </UseAvatar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
       
      </AppBar>
    
       </>
    
      <Paper sx={paperStyle}>
        <Dialog
          open={notify}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Take a short survey!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                fontSize: 24,
                fontWeight: "700",
                letterSpacing: 2,
                color: "red",
              }}
            >
              WILL YOU GOING TO HIRE ME? 😁
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleClose}
              style={{ textDecoration: "none", margin: 8 }}
            >
              Of course
            </Button>
            <Button
              size="small"
              color="info"
              variant="contained"
              onClick={handleClose}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  );
}

export default NavBar;
