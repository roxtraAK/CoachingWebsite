import { useMediaQuery, useTheme } from "@mui/material";

export function useMobile(): boolean {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile;
}
