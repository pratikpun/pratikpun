import { green } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66FCF1",
    },
    secondary: {
      main: "#45A29E",
    },
    success: {
      main: green[400],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#45A29E",
          borderRadius: 20,
          color: "white",
          "&:hover": {
            backgroundColor: "#66FCF1",
            color: "black",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "white",
          borderRadius: 10,
          "& label": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#66FCF1",
              borderWidth: "0.15rem",
            },
          },

          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
