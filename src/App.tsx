import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./Feed/Feed";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({ palette: { mode: mode } });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
