import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "cursive"].join(","),
  },
  palette: {
    primary: {
      main: "#000000",
      gray: "#808080",
    },
    secondary: {
      light: "#0066ff",
      main: "#FFFFFF",
      gray: "#808080",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#195CA9",
          transition: "0.4s",
          color: "#FFFFFF",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#007EBE",
          },
        },
        containedInfo: {
          backgroundColor: "#FFD500",
          color: "#000000",
          transition: "0.4s",
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
