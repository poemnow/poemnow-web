import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  // color
  --primary: "red";
  --secondary: "ivory";
  --background: "black";
  --gray-100: "gray";
  

  // margin
  --margin-xs: 4px;
  --margin-sm: 8px;
  --margin-md: 16px;
  --margin-lg: 32px;
  --margin-xl: 64px;

  // padding
  --padding-xs: 4px;
  --padding-sm: 8px;
  --padding-md: 16px;
  --padding-lg: 32px;
  --padding-xl: 64px;


}
`;

export default GlobalStyle;
