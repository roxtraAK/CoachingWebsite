import { Stack } from "@mui/material";
import img from "../assets/fabio.jpg";
import { Header } from "./Header";

export function ContentPage() {
  return (
    <Stack>
      <Stack>
        <Header />
      </Stack>
      <Stack
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Stack>
  );
}
