import { Stack } from "@mui/material";
import { Header } from "../layout/Header";
import video from "../../assets/4761767-uhd_4096_2160_25fps.mp4";

export function Impressum() {
  return (
    <Stack>
      <Stack>
        <Header />
      </Stack>
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
    </Stack>
  );
}
