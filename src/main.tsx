import { CommonProvider } from "./hooks/useCommon.tsx";
import { CoffeesProvider } from "./hooks/useCoffe.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/index.tsx";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeesProvider>
        <CommonProvider>
          <ToastContainer position="top-center" />
          <Router />
        </CommonProvider>
      </CoffeesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
