import { Box, Container } from "@mui/material";
import React from "react";
import postData from "./postData";
import Post from "../components/Post";

const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {postData.map((data) => (
          <Post
            author={data.author}
            profileImg={data.profileImg}
            date={data.date}
            imageUrl={data.imageUrl}
            imageAlt={data.imageAlt}
            description={data.description}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Feed;
