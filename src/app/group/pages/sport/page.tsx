
"use client";

import GroupLayout from "@/app/components/commun/layout";


import {
  Paper,
  Typography,
  Stack,
  styled,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import Image from "next/image";
import React from "react";



const Sport = async () => {
  // const data: Promise<FinanceModel> = fetchFinance();
  // const currentData = await data;
  //console.log(currentData);
  const theme = useTheme();
  return (
    <GroupLayout>
      <Container sx={{maxWidth:'600px', overflowX:'hidden' }}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          direction={{ md: "column-reverse", lg: "row" }}       
          spacing={2}
          padding={'16px 0'}
        >

          <Box maxWidth={400}>
          <Typography  textTransform={'uppercase'} variant="h4" align="center">Latest news</Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            repellat earum! Fugiat, corrupti animi repudiandae fuga debitis
            neque ex magni ducimus, voluptates facere repellat a minima labore
            veritatis pariatur?
          </Typography>
          </Box>
 
     <Image src={'https://i.pinimg.com/564x/d8/c8/35/d8c835aaec2c1fdb0b85a12ca6407b8d.jpg'} alt={""} height={400} width={350}/>
        
        </Stack>

       <Box marginTop={10} marginBottom={4} display={'flex'}  flexWrap={'wrap'} gap={3} >
       <Card
          sx={{
            display: "flex",
            width: { md: "500px" },
            boxShadow: `6px 14px 40px -5px rgba(0,0,0,0.34);
            -webkit-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34);
            -moz-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34)`
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: 80, sm: 150 } }}
            src="https://i.pinimg.com/564x/d8/c8/35/d8c835aaec2c1fdb0b85a12ca6407b8d.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Author
              </Typography>
            </CardContent>
            <Box sx={{ padding: "0 8px" }}>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repudiandae, nobis temporibus iste delectus architecto
                nam dolor ratione quis.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            width: { md: "600px" }, boxShadow: `6px 14px 40px -5px rgba(0,0,0,0.34);
            -webkit-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34);
            -moz-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34)`
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: 80, sm: 150 } }}
            src="https://i.pinimg.com/564x/d8/c8/35/d8c835aaec2c1fdb0b85a12ca6407b8d.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Author
              </Typography>
            </CardContent>
            <Box sx={{ padding: "0 8px" }}>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repudiandae, nobis temporibus iste delectus architecto
                nam dolor ratione quis.
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            width: { md: "600px" }, boxShadow: `6px 14px 40px -5px rgba(0,0,0,0.34);
            -webkit-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34);
            -moz-box-shadow: 6px 14px 40px -5px rgba(0,0,0,0.34)`
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: 80, sm: 150 } }}
            src="https://i.pinimg.com/564x/d8/c8/35/d8c835aaec2c1fdb0b85a12ca6407b8d.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Author
              </Typography>
            </CardContent>
            <Box sx={{ padding: "0 8px" }}>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repudiandae, nobis temporibus iste delectus architecto
                nam dolor ratione quis.
              </Typography>
            </Box>
          </Box>
        </Card>

       </Box>
        
      </Container>
    </GroupLayout>
  );
};

export default Sport;
