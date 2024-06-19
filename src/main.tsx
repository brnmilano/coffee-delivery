import React from "react";
import ReactDOM from "react-dom/client";
import { CommonProvider } from "./hooks/useCommon.tsx";
import Router from "./routes/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <Router />
      </CommonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
