import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Link from "next/link";
import { red } from '@mui/material/colors';

const color = red[500];

type Props = {
  img: string;
  title: string;
  href: string;
  description: string;
  date: String | undefined;
};

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
 
  minHeight: 300,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const typoStyle = {
  wordBreak: "break-all",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  lineClamp: 8,
  WebkitLineClamp: 8,
  fontWeight: "semi-bold",
  overflow: "hidden",
  textTransform: "capitalize",
  WebkitBoxOrient: "vertical",
};

export default function CardNews({
  img,
  href,
  title,
  description,
  date,
}: Props) {
  return (
    <Box bgcolor={"primary.main"} maxHeight={300} sx={{ borderRaduis: 6 , width: {md:'100%', lg:'45%'} }}>
      <Paper elevation={0} variant="outlined">
        <StyledAccordion
          sx={{
            backgroundImage: `url(${img})`,
          }}
        >
          <AccordionSummary
            sx={{ backgroundColor: "#f3f4f6" }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  lineClamp: 2,
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                }}
                variant="body1"
                textTransform={"uppercase"}
                color={"secondary"}
              >
                {title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box display={"flex"} color={"white"} flexDirection={"column"}>
              <Box minHeight={200} textAlign={"center"}>
                <Typography sx={typoStyle} paragraph variant="h6">
                  {description}
                </Typography>
                <Typography
                  margin={"0 auto"}
                  maxWidth={100}
                  borderRadius={30}
                  bgcolor={"black"}
                >
                  <Link
                    style={{ textDecoration: "none"}}
                    href={`${href}`}
                  >
                    Read more
                  </Link>
                </Typography>
              </Box>

              <Typography>{date}</Typography>
            </Box>
          </AccordionDetails>
        </StyledAccordion>
      </Paper>
    </Box>
  );
}
