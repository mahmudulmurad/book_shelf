import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toast } from "./components/toast";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Toast />
    </BrowserRouter>
  </React.StrictMode>
);
