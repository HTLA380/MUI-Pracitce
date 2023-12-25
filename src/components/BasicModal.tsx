import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import profileImg from "../assets/users/profile1.png";
import { Avatar, Fab, Stack, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { VideoCall, Image } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

interface BasicModalInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasicModal: React.FC<BasicModalInterface> = ({ open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              my: 1,
              pb: 1,
              borderBottom: "1px solid #333",
            }}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Htet Aung Lin"
              src={profileImg}
            />
            <Typography>Htet Aung Lin</Typography>
          </Box>
          <TextField
            multiline
            fullWidth
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}>
            <Stack direction="row" alignItems={"center"}>
              <Image color="info" fontSize="small" />
              <VideoCall color="error" fontSize="medium" />
            </Stack>
            <Fab aria-label="add" size="small" color="primary">
              <Add />
            </Fab>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
