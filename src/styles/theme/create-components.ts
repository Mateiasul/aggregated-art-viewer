import {
  createTheme,
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses,
} from "@mui/material";

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents() {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    Backdrop: {
      styleOverrides: {
        root: { opacity: "0.5" },
      },
    },
  };
}
