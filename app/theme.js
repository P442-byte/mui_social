"use client";
import { createTheme } from "@mui/material";


export let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1760a5",
        },
        secondary: {
            main: "#15c630",
        },
        tertiaryColor: {
            main: "#999",
        }
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1760a5",
        },
        secondary: {
            main: "#15c630",
        },
        tertiaryColor: {
            main: "#999",
        }
    },
})