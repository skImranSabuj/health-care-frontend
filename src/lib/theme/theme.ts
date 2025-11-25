import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1487FE",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          padding: "12px 36px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#333333",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
