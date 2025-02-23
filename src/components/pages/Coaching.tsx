import { Stack } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Formular } from "../content/Formular";

export function Coaching() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #000000, #111111, #222221, #393938, #000000)",
      }}
    >
      <Stack>
        <Header />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          paddingTop: "5vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Formular />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}
