import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

interface PostInterface {
  profileImg: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

const Post: React.FC<PostInterface> = (props) => {
  const { profileImg, author, date, imageUrl, imageAlt, description } = props;
  return (
    <Card sx={{ maxWidth: "45rem", my: "2rem" }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={author}
            sx={{ width: 30, height: 30 }}
            alt="Htet Aung Lin"
            src={profileImg}></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardMedia component="img" height="20%" image={imageUrl} alt={imageAlt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
