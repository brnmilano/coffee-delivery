import { CommonProvider } from "./hooks/useCommon.tsx";
import { CoffeesProvider } from "./hooks/useCoffe.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/index.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
    <BrowserRouter>
      <CoffeesProvider>
        <CommonProvider>
          <Router />
        </CommonProvider>
      </CoffeesProvider>
    </BrowserRouter>
  //</React.StrictMode>
);
