// import { createTheme } from "@mui/material";
// import { Theme, ThemeOptions } from "@mui/material";
// // interface IPalette extends 
// interface IPalette {
//   primary: {
//     main: string,
//     light: string,
//     dark: string
//   },
//   secondary: {
//     main: string,
//     light: string,
//     dark: string
//   },
// }
// interface ITypography {
//   body1: {
//     fontWeight: string,
//     fontSize: string,
//     lineHeight: string,
//     color: string,
//   }
// }
// interface ITheme extends Theme {
//   palette: IPalette,
//   typography: ITypography
// }
// interface IThemeOptions extends ThemeOptions {
//   palette: IPalette,
//   typography: ITypography
// }
// const theme: ITheme = createTheme({
//   palette: {
//     primary: {
//       main: "#0B2FBB",
//       light: "#546DCF",
//       dark: "#0A2385",
//     },
//     secondary: {
//       main: "#F26222",
//       light: "#F8B091",
//       dark: "#973D15",
//     }
//   },
//   typography: {
//     body1: {
//       fontWeight: '400',
//       fontSize: '16px',
//       lineHeight: '1.5',
//       color: '#0B2FBB',
//     }
//   }
// } as IThemeOptions)

// export default theme;
import { Theme } from "@mui/core/styles/createMuiTheme";
import { createMuiTheme } from "@mui/core/styles";

declare module "@mui/styles" {
  interface DefaultTheme extends MyTheme {}
}

declare module "@mui/core/styles/createMuiTheme" {
  interface ThemeOptions extends MyTheme {}
}

export interface MyTheme extends Theme {
  backgroundColor: string;
}

const theme = createMuiTheme({
  backgroundColor: "red"
});

export { theme };
