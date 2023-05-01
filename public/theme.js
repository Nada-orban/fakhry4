import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { lightGreen, green, brown, grey, lime, red, blue, amber } from '@mui/material/colors';
import { fontSize } from "@mui/system";

export const themeSettongs = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "light" ? {
                primary: {
                    main: grey[800],
                },
                secondary: {
                    // main: red[400],
                    main: amber[700],
                },
                neutral: {
                    greenlight: green[300],
                    greendark: green[700],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                    white: "#fff",
                    skill: "black"
                },
                background: {
                    main: "#fff",
                    secondary: "#2988bc"
                    // main: "rgb(52, 71, 103)",
                },
                text: {
                    primary: 'black',
                    secondary: grey[800],

                },


            } : {
                primary: {
                    main: grey[800],
                },
                secondary: {
                    // main: red[400],
                    main: amber[700],
                },
                neutral: {
                    brownlight: brown[200],
                    lime: lime[900],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                    black: "black",
                    skill: "white"
                },
                background: {
                    main: "#1c1d24 ",
                    secondary: "black"

                }, text: {
                    primary: "white",
                    secondary: grey[400],
                },

            }),

        },
        typography: {
            fontFamily: ['Josefin Sans', 'sans - serif'].join(", "),
            fontSize: 13,

        },

    }
};


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettongs(mode)), [mode]);
    return [theme, colorMode];
};