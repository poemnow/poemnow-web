import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResetStyle from "./styles/reset";
import GlobalVariableStyle from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalVariableStyle />
    <App />
  </React.StrictMode>
);
