import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toast } from "./components/toast";
import AppRoutes from "./routes";
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
        <Toast />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
