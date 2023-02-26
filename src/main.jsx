import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            deepBlue: ["#E9EDFC", "#C1CCF6", "#99ABF0"],
          },

          shadows: {
            md: "1px 1px 3px rgba(0, 0, 0, .25)",
            xl: "5px 5px 3px rgba(0, 0, 0, .25)",
          },

          headings: {
            fontFamily: "Manrope, sans-serif",
            sizes: {
              h1: { fontSize: 30 },
            },
          },
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
