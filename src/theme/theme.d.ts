// import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from "@mui/material";

// declare module '@mui/material/styles' {
//   interface Theme extends MuiTheme {
//     palette: {
//       primary: {
//         main: string,
//         light: string,
//         dark: string
//       },
//       secondary: {
//         main: string,
//         light: string,
//         dark: string
//       }
//     }
//   }
//   interface ThemeOptions extends MuiThemeOptions {
//     palette?: {
//       primary?: {
//         main?: string,
//         light?: string,
//         dark?: string
//       },
//       secondary?: {
//         main?: string,
//         light?: string,
//         dark?: string
//       }
//     }
//   }
//   export function createTheme(options?: ThemeOptions): Theme
// }
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/styles" {
  interface DefaultTheme extends MyTheme {}
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions extends MyTheme {}
}

export interface MyTheme extends Theme {
  backgroundColor: string;
}

const theme = createMuiTheme({
  backgroundColor: "red"
});

export { theme };
