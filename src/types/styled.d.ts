import {} from "styled-components";
import theme from "../theme";

// Infer theme types from the theme object, so we get nice
// autocomplete when using the theme props
declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
