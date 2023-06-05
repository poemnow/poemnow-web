import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResetStyle from "./styles/reset";
import GlobalVariableStyle from "./styles/global";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./fonts/pretendard.css";
import "./fonts/pretendard-subset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalVariableStyle />
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
