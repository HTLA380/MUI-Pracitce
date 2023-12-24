import { Box } from "@mui/material";
import React from "react";

const Rightbar: React.FC = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      rightbar
    </Box>
  );
};

export default Rightbar;
