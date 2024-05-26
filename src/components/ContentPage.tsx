import { Stack } from "@mui/material";
import img from "../assets/fabio.jpg";
import { Header } from "./Header";
import { IFrameVideo } from "./iFrameVideo";

export function ContentPage() {
  return (
    <Stack sx={{ position: "relative", minHeight: "100vh" }}>
      <Stack>
        <Header />
      </Stack>
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <IFrameVideo
          url="https://www.youtube.com/embed/TFmiUtzIyGg?si=dkPTneQH94oQeFPi"
          allowFullscreen={true}
        />
      </Stack>
    </Stack>
  );
}
