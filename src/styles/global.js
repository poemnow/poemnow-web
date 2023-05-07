import { createGlobalStyle } from "styled-components";
import "../fonts/pretendard.css";
import "../fonts/pretendard-subset.css";

const GlobalVariableStyle = createGlobalStyle`
:root {
  // font size
  --mobile-h1: 42px;
  --mobile-h2: 36px;
  --mobile-h3-bold: 24px;
  --mobile-h3-medium: 24px;
  --mobile-h4-bold: 20px;
  --mobile-h4-medium: 20px;
  --mobile-h5-bold: 16px;
  --mobile-h5-medium: 16px;
  --mobile-h5-light: 16px;
  --mobile-h6: 12px;
  --mobile-p: 12px;
  --mobile-p-bold: 12px;
  --mobile-p-light: 12px;
  --mobile-text: 14px;
  --mobile-text: 14px;
  --mobile-label-medium: 11px;
  --mobile-label-light: 11px;
  --mobile-text-light: 14px;

  // color
  --primary: #1F6313;
  --primary2: #C1E5C5;
  --secondary: #EEE9CD;
  --background: #FFFFFF;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --gray-1000: #030712;

  // margin
  --margin-4: 4px;
  --margin-8: 8px;
  --margin-12: 12px;
  --margin-16: 16px;
  --margin-24: 24px;
  --margin-28: 28px;
  --margin-32: 32px;
  --margin-40: 40px;
  --margin-48: 48px;
  --margin-56: 56px;
  --margin-64: 64px;
  --margin-128: 128px;
  --margin-256: 256px;
  --margin-512: 512px;

  // padding
  --padding-4: 4px;
  --padding-8: 8px;
  --padding-12: 12px;
  --padding-16: 16px;
  --padding-20: 20px;
  --padding-24: 24px;
  --padding-32: 32px;
  --padding-48: 48px;
  --padding-64: 64px;

}
#root {
  font-family: "Pretendard";
}
`;

export default GlobalVariableStyle;
