import { Box, Typography } from "@mui/material";
import style from "../../styles/home.module.css";

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
        mt: 3,
        mb: 5,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="white"
        sx={{
          mb: 2,
          ml: { xs: "-10px", sm: "50px", md: "-50px" },
          fontSize: "42px",
          fontWeight: 700,
          fontFamily: "favela",
        }}
      >
        Aktuellstes Video
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "5px solid white",
          borderRadius: "5px",
          width: { sm: "500px", md: "800px", lg: "1000px", xl: "1000px" },
          height: { sm: "300px", md: "400px", lg: "450px", xl: "500px" },
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
