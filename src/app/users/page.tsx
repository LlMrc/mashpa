"use client";
import Link from "next/link";
import getAllUsers from "../../../lib/getAllUsers";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import FriendSugetionBar from "../components/FriendSugetionBar";



const PostStyle = styled("div")({
  display: "flex",
  overflow: "clip",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  margin: 8,
});

export default async function UsersPAge() {
  const userData: Promise<User[]> = getAllUsers();
  const itemData = await userData;
  return (
    <Stack direction={"row"}>
      <Box flex={1} maxWidth={"100vw"}>
        <Grid container p={6} spacing={4}>
          {itemData.map((item) => (
            <Grid xs={12} sm={6} md={6} lg={4} item key={item.id}>
              <Box sx={{ background: "#2E3840", borderRadius: 2, padding: 2 }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    alignItems: "center",
                    display: "flex",
                    padding: 2,
                    minHeight: 150,
                    background: "#5C636E",
                  }}
                >
                  <PostStyle>
                    <Avatar />
                    <Box padding={"0 10px"} m={2}>
                      <Typography
                        noWrap={true}
                        textOverflow={"ellipsis"}
                        variant="h5"
                        color={"white"}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color={"white"}>
                        {item.email}
                      </Typography>
                    </Box>
                  </PostStyle>
                </Box>

                <Box sx={{ marginTop: 4, marginLeft: 2, marginRight: 2 }}>
                  <PostStyle>
                    <Box flex={1} maxWidth={150}>
                      <Typography noWrap={true} variant="h6" color={"white"}>
                        {item.company.name}
                      </Typography>
                      <Typography noWrap={true} variant="body2" color={"white"}>
                        {item.email}
                      </Typography>
                      <Typography noWrap={true} color={"white"}>
                        {item.phone}
                      </Typography>
                    </Box>
                    <Box margin={"0 14px"}>
                      <Link
                        style={{ textDecoration: "none" }}
                        href={`/users/${item.id}`}
                      >
                        <Button variant="outlined">Posts</Button>
                      </Link>
                    </Box>
                  </PostStyle>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <FriendSugetionBar />
      </Box>
    </Stack>
  );
}
