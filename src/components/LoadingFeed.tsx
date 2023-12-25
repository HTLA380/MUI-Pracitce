import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const LoadingFeed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="md">
        <Card sx={{ width: "100%", my: "2rem", boxShadow: 3 }}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            title={<Skeleton width={60} />}
            subheader={<Skeleton width={150} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
          />
          <Skeleton
            sx={{ width: "100%", height: { xs: 200, md: 300, lg: 500 } }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent sx={{ width: "100%" }}>
            <Typography component="div" variant="body2">
              <Skeleton width={"90%"} />
              <Skeleton width={"80%"} />
              <Skeleton width={"75%"} />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "100%", my: "2rem", boxShadow: 3 }}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            title={<Skeleton width={60} />}
            subheader={<Skeleton width={150} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
          />
          <Skeleton
            sx={{ width: "100%", height: { xs: 200, md: 300, lg: 500 } }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent sx={{ width: "100%" }}>
            <Typography component="div" variant="body2">
              <Skeleton width={"90%"} />
              <Skeleton width={"80%"} />
              <Skeleton width={"75%"} />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoadingFeed;
