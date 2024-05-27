import { Stack } from "@mui/material";
import img from "../../assets/fabio.jpg";
import { IFrameVideo } from "../iFrameVideo";
import { Header } from "../layout/Header";

export function Home() {
  return (
    <Stack sx={{ minHeight: "100vh", overflow: "hidden" }}>
      <Stack>
        <Header />
      </Stack>
      <Stack
        sx={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
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
