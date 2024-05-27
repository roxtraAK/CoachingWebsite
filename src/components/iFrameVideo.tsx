import { Box } from "@mui/material";

interface IVideoProps {
  url: string;
  allowFullscreen: boolean;
}

export function IFrameVideo({ url, allowFullscreen }: IVideoProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "70%", sm: "60%", md: "50%", lg: "50%", xl: "40%" },
        height: { xs: "25%", sm: "35%", md: "40%", lg: "40%", xl: "45%" },
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
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </Box>
  );
}
