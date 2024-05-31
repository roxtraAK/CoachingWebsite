import { Box, Typography } from "@mui/material";
import style from "..//styles/home.module.css";

interface IVideoProps {
  url: string;
  allowFullscreen: boolean;
}

export function IFrameVideo({ url, allowFullscreen }: IVideoProps) {
  return (
    <Box
      className={style.hidden}
      sx={{
        position: "relative",
        width: { xs: "70%", sm: "60%", md: "50%", lg: "50%", xl: "40%" },
        margin: "0 auto",
        mt: 10,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="white"
        sx={{
          mb: 2,
          ml: -15,
          fontSize: "36px",
          fontWeight: 700,
          fontFamily: "favela",
        }}
      >
        Aktuellstes Video
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: {
            xs: "25%",
            sm: "35%",
            md: "40%",
            lg: "40%",
            xl: "45%",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "5px solid white",
          borderRadius: "5px",
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          src={url}
          allowFullScreen={allowFullscreen}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>
    </Box>
  );
}
