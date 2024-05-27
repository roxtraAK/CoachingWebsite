import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useTheme } from "./Hooks/useThemeHook.tsx";

const theme = useTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
