import "./App.css";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Container sx={{ bgcolor: "red", height: "100vh", width: "100vw" }}>
        <Typography variant="h1">Typo</Typography>
      </Container>
    </>
  );
}

export default App;
