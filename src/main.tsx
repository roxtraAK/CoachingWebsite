import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useTheme } from "./Hooks/useThemeHook.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

const theme = useTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
