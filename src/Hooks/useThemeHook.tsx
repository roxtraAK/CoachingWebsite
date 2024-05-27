import { createTheme, Theme } from "@mui/material/styles";

export function useTheme(): Theme {
  const theme = createTheme({
    palette: {
      primary: {
        // white
        light: "#fafafa",
        main: "#fafafa",
        dark: "#fafafa",
        contrastText: "#fafafa",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return theme;
}
