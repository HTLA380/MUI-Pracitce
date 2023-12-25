import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import postData from "./postData";
import Post from "../components/Post";
import { Add } from "@mui/icons-material";
import BasicModal from "../components/BasicModal";

const Feed: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box flex={4} p={2}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="md">
        <Card sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <CardContent>
              <Typography variant="h5" fontSize={16} fontWeight={"medium"}>
                Create Post
              </Typography>
            </CardContent>
            <CardActions>
              <Fab
                aria-label="add"
                size="small"
                color="primary"
                onClick={() => setOpen(true)}>
                <Add />
              </Fab>
            </CardActions>
          </Stack>
        </Card>

        <BasicModal open={open} setOpen={setOpen} />

        {postData.map((data) => (
          <Post
            key={data.author}
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
