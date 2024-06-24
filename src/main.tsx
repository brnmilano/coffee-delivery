import React from "react";
import ReactDOM from "react-dom/client";
import { CommonProvider } from "./hooks/useCommon.tsx";
import Router from "./routes/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { CoffesProvider } from "./hooks/useCoffe.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffesProvider>
        <CommonProvider>
          <Router />
        </CommonProvider>
      </CoffesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
