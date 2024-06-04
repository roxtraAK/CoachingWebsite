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
        margin: "0 auto",
        // minWidth: { xs: "300px", sm: "300px" },
        // minHeight: { xs: "300px", sm: "300px" },
        mt: 10,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="white"
        sx={{
          mb: 2,
          ml: { xs: "-10px", sm: "10px", md: "-15px" },
          fontSize: "36px",
          fontWeight: 700,
          fontFamily: "favela",
          maxWidth: { xs: "90%", sm: "90%", md: "80%" },
        }}
      >
        Aktuellstes Video
      </Typography>
      <Box
        sx={{
          position: "relative",
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
          maxWidth: { xs: "100%", sm: "100%", md: "100%" },
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
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
            width: { xs: "100%", sm: "100vh", md: "100%" },
            height: { xs: "100%", sm: "100vh", md: "100%" },
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>
    </Box>
  );
}
