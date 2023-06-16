import { createGlobalStyle } from "styled-components";
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
  --secondary: #EEE9CD;
  --background: #FFFFFF;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
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
`;
export default GlobalVariableStyle;
