import { Stack, Typography } from "@mui/material";
import img from "../../assets/fabio.jpg";
import { IFrameVideo } from "../iFrameVideo";
import { Header } from "../layout/Header";
import { Carousel } from "../content/Carousel";

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
        <Stack sx={{ color: "white" }}>
          <Typography
            sx={{
              margin: "auto",
              fontWeight: "700",
              fontFamily: "favela",
              fontSize: "32px",
            }}
          >
            Werde jetzt ein teile von meinem Team!
          </Typography>
          <Typography sx={{ fontFamily: "favela", margin: "auto" }}>
            Mein name ist Fabio, ich trainiere seit ..
          </Typography>
        </Stack>
        {/* <Carousel /> */}
        <IFrameVideo
          url="https://www.youtube.com/embed/TFmiUtzIyGg?si=dkPTneQH94oQeFPi"
          allowFullscreen={true}
        />
      </Stack>
    </Stack>
  );
}
