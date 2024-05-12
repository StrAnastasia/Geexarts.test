import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layouts";
import { HomePage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#06082C",
      // lightText: "#7B7EA5",
    },
    secondary: {
      main: "#F1F3F7",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#06082C",
    },
    // text: "#06082C",
  },
  typography: {
    fontFamily: "Inter",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1040,
      lg: 1160,
      xl: 1440,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blogs" element={<HomePage />} />
            <Route path="marketplace" element={<HomePage />} />
            <Route path="ratings" element={<HomePage />} />
            <Route path="competitions" element={<HomePage />} />
            <Route path="organisations" element={<HomePage />} />
            {/* <Route path="*" element={<HomePage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
