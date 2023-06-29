"use client";
import {
  Box,

  Container,
 
} from "@mui/material";

import BaseLayout from "../components/layout";


import { useState, useEffect } from "react";
import CardNews from "../components/cardNews";


const MarketPlace = () => {
  const [data, setData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "cnbc.p.rapidapi.com",
          "X-RapidAPI-Key": `${process.env.apiKey}`,
        },
      };

      fetch(
        "https://cnbc.p.rapidapi.com/news/v2/list-special-reports?pageSize=30&page=1",
        options
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((datafetch) => {
           const res = datafetch.data.specialReportsEntries.results
          setData(res);
          setError(null);
          console.log(res);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }, []);

  return (
    <BaseLayout>
      <Container
        sx={{
          height: "100%",
          ml: { sm: 2 },
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          overflowX: "hidden",
          pt: { md: 10, xs: 2 },
        }}
      >
        {loading && <Box margin={"40px auto"}>A moment please...</Box>}
        {error && (
          <Box
            margin={"40px auto"}
          >{`you ve reach the maximum data request for this month '${error}'`}</Box>
        )}
        {data.map((value) => (
          <CardNews
            key={value.id}
            img={value.promoImage?.url}
            title={value.headline}
            description={value.description}
            href={value.url}
            date={value.dateLastPublished}
          />
        ))}
      </Container>
    </BaseLayout>
  );
};

export default MarketPlace;
