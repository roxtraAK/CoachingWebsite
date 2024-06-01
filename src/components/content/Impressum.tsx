import { Stack, Typography, SxProps, Theme } from "@mui/material";

interface ImpressumProps {
  sx?: SxProps<Theme>;
}

export function Impressum({ sx }: ImpressumProps) {
  // add route to impressum header

  return (
    <Stack sx={sx}>
      <Stack>
        <Typography
          sx={{ fontFamily: "favela", color: "white", fontSize: "26px" }}
        >
          Impressum
        </Typography>
      </Stack>
    </Stack>
  );
}