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
        width: { xs: "60%", sm: "50%", md: "40%", lg: "40%" },
        height: { xs: "20%", sm: "30%", md: "50%", lg: "50%" },
        border: "5px solid white",
        borderRadius: "5px",
        boxShadow: 3,
      }}
    >
      <iframe
        src={url}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen={allowFullscreen}
      />
    </Box>
  );
}
