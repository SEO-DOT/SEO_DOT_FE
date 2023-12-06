import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// if (process.env.NODE_ENV === "development") {
//     const { worker } = require("./mocks/browser");
//     worker.start();
// }

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen />
    <App />
  </QueryClientProvider>
);
