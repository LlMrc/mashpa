import { Box } from "@mui/material";
import { FC } from "react";




import BaseLayout from "../components/layout";
import HomePage from "../components/HomPage";

interface FeedProps {}

const feed: FC<FeedProps> = () => {
 
  return (
    <>
      <BaseLayout>
     
          <HomePage />
   
      </BaseLayout>
    
    </>
  );
};

export default feed;
