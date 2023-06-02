
import { PersonAdd, Group, StorefrontOutlined, AccountCircleOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,

  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";


const paperStyle = {
   height: 42,
   paddingTop:1,
  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  '&:hover':{  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)",}
}

const linkItems = [
  {
    name: "Users",
    href: "/users",
    icon: <PersonAdd />,
  },
  {
    name: "Groups",
    href: "/group",
    icon: <Group />,
  },
  {
    name: "My gallery",
    href: "/gallery",
    icon: <StorefrontOutlined />,
  },

  {
    name: "Sign up",
    href: "/profil",
    icon: <AccountCircleOutlined />,
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
      
        <Box bgcolor={'#F8E8EE'} height='75px'  textAlign={'center'}>
       
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h5" color={"black"}  align="center" marginTop={2} >
            Home
          </Typography>
        </Link>
        </Box>
        
        <Divider />
        
        {linkItems.map((item) => (
          <Link  key={item.name} href={item.href}  style={{textDecoration: 'none', color: 'black'}}>
          <Paper   sx={paperStyle}>
            <Box sx={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              {item.icon}<Typography ml={4}>{item.name }</Typography>
               
            </Box>
          </Paper>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
}
