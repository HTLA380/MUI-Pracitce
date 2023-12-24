import { Box, Container } from "@mui/material";
import React from "react";
import Post from "./Post";
import Post1Img from "../assets/post1.jpg";
import Post2Img from "../assets/post2.jpg";
import Post3Img from "../assets/post3.jpg";
import Post4Img from "../assets/post4.jpg";
import Profile1Img from "../assets/htet-aung-lin.png";
import Profile2Img from "../assets/profile2.jpg";
import Profile3Img from "../assets/profile3.jpg";
import Profile4Img from "../assets/profile4.jpg";

const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Post
          author="Htet Aung Lin"
          date="September 14, 2016"
          profileImg={Profile1Img}
          description="The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant."
          imageAlt="view"
          imageUrl={Post1Img}
        />
        <Post
          author="Johnny"
          date="September 18, 2016"
          profileImg={Profile2Img}
          description="I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. Well, let's just dump it in the sewer and say we delivered it. I'm a thing. One hundred dollars. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense."
          imageAlt="view"
          imageUrl={Post2Img}
        />
        <Post
          author="Doctor Who"
          date="September 21, 2016"
          profileImg={Profile3Img}
          description="I am the Doctor, and you are the Daleks! Saving the world with meals on wheels. Heh-haa! Super squeaky bum time! Father Christmas. Santa Claus. Or as I've always known him: Jeff."
          imageAlt="view"
          imageUrl={Post3Img}
        />
        <Post
          author="Dexter"
          date="September 22, 2016"
          profileImg={Profile4Img}
          description="I'm real proud of you for coming, bro. I know you hate funerals. I'm thinking two circus clowns dancing. You? I feel like a jigsaw puzzle missing a piece. And I'm not even sure what the picture should be."
          imageAlt="view"
          imageUrl={Post4Img}
        />
      </Container>
    </Box>
  );
};

export default Feed;
