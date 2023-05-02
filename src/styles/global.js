import { createGlobalStyle } from "styled-components";

const GlobalVariableStyle = createGlobalStyle`
:root {
  // fot
  --h1: 64px;
  --h2: 48px;
  // color
  --primary: "red";
  --secondary: "ivory";
  --background: "black";
  --gray-100: "gray";
	--ground: "#1e1e1e";
  --gray-50: "#f9fafb";
  --gray-100: "#f3f4f6";
  --gray-200: "#e5e7eb";
  --gray-300: "#d1d5db";
  --gray-400: "#9ca3af";
  --gray-500: "#6b7280";
  --gray-600: "#4b5563";
  --gray-700: "#374151";
  --gray-800: "#1f2937";
  --gray-900: "#111827";
  --gray-1000: "#030712";

  // margin
  --margin-xs: 4px;
  --margin-sm: 8px;
  --margin-md: 16px;
  --margin-lg: 32px;
  --margin-xl: 64px;
  --margin-2xl: 128px;
  --margin-3xl: 256px;
  --margin-4xl: 512px;

  // padding
  --padding-xs: 4px;
  --padding-sm: 8px;
  --padding-md: 16px;
  --padding-lg: 32px;
  --padding-xl: 64px;

}
`;

export default GlobalVariableStyle;