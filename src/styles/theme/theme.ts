import { createTheme as createMuiTheme, ThemeOptions } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import { createComponents } from "./create-components";
import { createTypography } from "./create-typography";

export function createTheme() {
  const typography: Typography = createTypography();
  const components = createComponents();

  return createMuiTheme({
    shape: {
      borderRadius: 8,
    },
    typography,
    components,
  });
}
