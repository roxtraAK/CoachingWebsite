import { Box, Stack } from "@mui/material";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { TrainingFormular } from "../content/TrainingFormular";

export function PersonalTraining() {
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
          <TrainingFormular />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}
