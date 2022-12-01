import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //prevent react from fetch data again when we switch to another tab
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> we remove the strictmode to prevent react reload 2 times
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
