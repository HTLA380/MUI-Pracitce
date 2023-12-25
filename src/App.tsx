import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import React, { Suspense, useState } from "react";
import LoadingFeed from "./components/LoadingFeed";
const Feed = React.lazy(() => import("./Feed/Feed"));

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({ palette: { mode: mode } });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Suspense fallback={<LoadingFeed />}>
            <Feed />
          </Suspense>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
