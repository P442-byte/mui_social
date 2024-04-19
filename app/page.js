"use client";
import {Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { ThemeProvider } from "@mui/material";
import { theme, darkTheme } from "./theme";
import { useState } from "react";

export default function Home() {

  const [themeMode, setThemeMode] = useState("light")

  const mainTheme = themeMode === "light" ? theme : darkTheme;

  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{backgroundColor: "background.default", color: "text.primary"}}>
        <Navbar />
        <Stack margin={2} direction="row" spacing={2} justifyContent="space-between">
          <Sidebar themeMode={themeMode} setThemeMode={setThemeMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
