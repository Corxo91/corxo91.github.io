"use client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00fff7" },
    secondary: { main: "#ff00ea" },
    background: {
      default: "#18122B",
      paper: "#232946"
    },
    text: {
      primary: "#fff",
      secondary: "#00fff7"
    },
    info: { main: "#00ff85" },
    warning: { main: "#fffb00" },
    error: { main: "#ff0059" },
    success: { main: "#00ff85" },
  },
  typography: {
    fontFamily: "Geist, Inter, Roboto, Arial, sans-serif",
    h1: { fontWeight: 900, fontSize: "3rem", letterSpacing: "0.05em" },
    h2: { fontWeight: 800, fontSize: "2.2rem" },
    h3: { fontWeight: 700, fontSize: "1.7rem" },
    h4: { fontWeight: 600, fontSize: "1.3rem" },
    h5: { fontWeight: 500, fontSize: "1.1rem" },
    h6: { fontWeight: 400, fontSize: "1rem" },
    body1: { fontSize: "1.1rem" },
    body2: { fontSize: "1rem" }
  },
});

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
